// نشر:   supabase functions deploy news-sync --no-verify-jwt
// أسرار: supabase secrets set CRON_SECRET=<قيمة عشوائية طويلة>
//        (اختياري) NEWS_OFFICIAL_DOMAINS=a.gov.iq,b.gov.iq  NEWS_LOCAL_DOMAINS=x.com,y.net
// تُحقن SUPABASE_URL و SUPABASE_SERVICE_ROLE_KEY تلقائياً. تحقق من النطاقات الافتراضية قبل الاعتماد عليها.
const list = (v: string | undefined, d: string[]) => (v ? v.split(',').map((x) => x.trim()).filter(Boolean) : d);
const OFFICIAL = list(Deno.env.get('NEWS_OFFICIAL_DOMAINS'), ['moen.gov.iq', 'mowr.gov.iq', 'moa.gov.iq', 'ina.iq']);
const LOCAL = list(Deno.env.get('NEWS_LOCAL_DOMAINS'), [
  'shafaq.com', 'alsumaria.tv', 'rudaw.net', '964media.com', 'baghdadtoday.news', 'almadapaper.net', 'alsabaah.iq',
]);

// الكلمات المفتاحية لكل نوع (يجب أن تظهر في عنوان الخبر ليُقبل)
const SPECIES: Record<string, { q: string[]; k: string[] }> = {
  catfish: { q: ['السلور الأفريقي العراق', 'القرموط الأفريقي العراق'], k: ['السلور', 'القرموط', 'clarias'] },
  tilapia: { q: ['البلطي الدخيل العراق', 'سمك البلطي أنهار العراق'], k: ['البلطي', 'tilapia'] },
  hyacinth: { q: ['زهرة النيل العراق', 'ياقوت الماء العراق'], k: ['زهرة النيل', 'ياقوت الماء', 'water hyacinth'] },
  hydrilla: { q: ['الهايدريلا العراق', 'الكطل الأهوار'], k: ['الهايدريلا', 'الكطل', 'hydrilla'] },
  gar: { q: ['سمك الجار المدرع العراق', 'سمك التمساح العراق نهر'], k: ['الجار المدرع', 'سمك التمساح', 'alligator gar'] },
  oscar: { q: ['سمك الأوسكار الدخيل العراق'], k: ['الأوسكار', 'oscar'] },
  snail: { q: ['القوقع الأفريقي العملاق العراق'], k: ['القوقع الأفريقي', 'القوقع الافريقي', 'giant african snail'] },
  mesquite: { q: ['شجرة البرسوبس العراق', 'المسكيت الغاف الدخيل العراق'], k: ['البرسوبس', 'المسكيت', 'prosopis'] },
};

const unesc = (s: string) =>
  s.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'").replace(/&amp;/g, '&').trim();

export function parseRss(xml: string) {
  const out: { title: string; link: string; pub: string; srcUrl: string; srcName: string }[] = [];
  for (const m of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const b = m[1];
    const g = (t: string) => { const x = b.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`)); return x ? unesc(x[1]) : ''; };
    const sm = b.match(/<source[^>]*url="([^"]+)"[^>]*>([\s\S]*?)<\/source>/);
    out.push({ title: g('title'), link: g('link'), pub: g('pubDate'), srcUrl: sm ? sm[1] : '', srcName: sm ? unesc(sm[2]) : '' });
  }
  return out;
}

const kindOf = (srcUrl: string): 'official' | 'local' | null => {
  let h = '';
  try { h = new URL(srcUrl).hostname.replace(/^www\./, '').toLowerCase(); } catch { return null; }
  const hit = (d: string[]) => d.some((x) => h === x || h.endsWith('.' + x));
  return hit(OFFICIAL) ? 'official' : hit(LOCAL) ? 'local' : null;
};

export async function sync(supabaseUrl: string, key: string) {
  const rows = new Map<string, Record<string, unknown>>();
  const maxAge = 120 * 864e5;
  for (const [id, cfg] of Object.entries(SPECIES)) {
    for (const q of cfg.q) {
      const res = await fetch(`https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=ar&gl=IQ&ceid=IQ:ar`);
      if (!res.ok) continue;
      for (const it of parseRss(await res.text())) {
        const kind = kindOf(it.srcUrl);
        const t = Date.parse(it.pub);
        const title = it.title.toLowerCase();
        if (!kind || !it.link || isNaN(t) || Date.now() - t > maxAge) continue;
        if (!cfg.k.some((k) => title.includes(k.toLowerCase()))) continue;
        rows.set(it.link, {
          species_id: id, title: it.title.slice(0, 300), url: it.link, source: it.srcName.slice(0, 80),
          source_kind: kind, published_at: new Date(t).toISOString(),
        });
      }
    }
  }
  if (rows.size) {
    const r = await fetch(`${supabaseUrl}/rest/v1/news_items?on_conflict=url`, {
      method: 'POST',
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'resolution=ignore-duplicates,return=minimal' },
      body: JSON.stringify([...rows.values()]),
    });
    if (!r.ok) throw new Error(`insert failed ${r.status}`);
  }
  return rows.size;
}

Deno.serve(async (req) => {
  const secret = Deno.env.get('CRON_SECRET');
  if (!secret || req.headers.get('x-cron-secret') !== secret) return new Response('forbidden', { status: 403 });
  try {
    const n = await sync(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    return new Response(JSON.stringify({ ok: true, matched: n }), { headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 });
  }
});
