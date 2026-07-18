const SPECIES = [
  {
    id:'catfish', kind:'fish', kindLabel:'سمك',
    name:'السلور الأفريقي (القرموط الإفريقي)', latin:'Clarias gariepinus',
    threat:70,
    source:{label:'تقرير: الجزيرة نت — "سمك دخيل يهدد التنوع البيئي بالعراق"', creator:0},
    summary:'نوع دخيل موثّق في الناصرية وبغداد وهور الحويزة، ينافس الأنواع المحلية على الغذاء ويهدد التوازن البيئي المائي.',
    features:[
      'جسم أسطواني طويل بلا قشور، لون رمادي غامق إلى أسود من الأعلى وأبيض كريمي من الأسفل',
      'رأس مفلطح مع أربعة أزواج من الشوارب حول الفم',
      'زعنفة ظهرية طويلة جداً تمتد على معظم طول الجسم',
      'قادر على الزحف خارج الماء لمسافات قصيرة والتنفس من الهواء مباشرة',
      'يتحمل المياه الراكدة والملوثة قليلة الأكسجين'
    ],
    impact:'يتغذى على كل شيء تقريباً (آكل قمامة)، وينمو بسرعة ويتكاثر بغزارة، ويتحمل الظروف البيئية القاسية التي تقتل الأنواع المحلية، كما يتراكم الزئبق في أنسجته. رُصد حتى الآن في الناصرية وبغداد وهور الحويزة، ولم يُصنَّف رسمياً بعد كنوع "غازي" كامل بل "دخيل" قيد المراقبة.',
    control:[
      'الصيد المنتظم بالشباك أو الصنارة وعدم إعادة أي فرد حي إلى الماء',
      'الإبلاغ الفوري عند رصده في مناطق جديدة لم يُسجَّل فيها من قبل',
      'يمكن استهلاكه كغذاء بعد التأكد من سلامة مصدر المياه',
      'تجنّب نقله حياً بين المسطحات المائية المختلفة نهائياً'
    ]
  },
  {
    id:'tilapia', kind:'fish', kindLabel:'سمك',
    name:'البلطي (سمك المشط)', latin:'Oreochromis spp.',
    threat:65,
    summary:'من أسرع الأسماك الدخيلة انتشاراً في الأنهار العراقية، ويُوصف بأنه ينافس بشراسة الأنواع المحلية كالكارب والبني.',
    features:[
      'جسم بيضاوي مضغوط جانبياً بلون رمادي إلى مزرق مع خطوط عمودية باهتة',
      'زعنفة ظهرية واحدة طويلة ذات أشواك حادة في مقدمتها',
      'حجم متوسط غالباً لا يتجاوز 30-40 سم',
      'يحضن صغاره في فمه لفترة (سلوك مميز عند البعض)',
      'يتكاثر بمعدل عالٍ جداً وعلى مدار العام تقريباً'
    ],
    impact:'ينافس الأسماك المحلية (كالبني والشبوط) على الغذاء والمواقع، ويتكيف بسرعة مع تغير جودة المياه وملوحتها، ما يجعله من أكثر الأنواع الدخيلة انتشاراً وصعوبة في الاحتواء.',
    control:[
      'التشجيع على صيده التجاري والاستهلاك الغذائي كحافز لتقليل أعداده',
      'عدم استخدامه كسمك زينة أو إطلاقه في برك ومسطحات جديدة',
      'مراقبة أحواض التربية السمكية القريبة من الأنهار لمنع تسربه',
      'الإبلاغ عن تكاثره الكثيف في مناطق جديدة'
    ]
  },
  {
    id:'hyacinth', kind:'plant', kindLabel:'نبات',
    name:'زهرة النيل (ياقوت الماء)', latin:'Eichhornia crassipes',
    threat:85,
    summary:'نبات مائي عائم جذاب المظهر تحوّل إلى "كابوس مائي" حقيقي على ضفاف دجلة والفرات لسرعة انتشاره الهائلة.',
    features:[
      'أوراق خضراء سميكة لامعة على شكل وردة عائمة فوق الماء',
      'أزهار أرجوانية-وردية جذابة تتوسط النبات',
      'سيقان منتفخة إسفنجية تساعده على الطفو',
      'يتكاثر خضرياً بسرعة كبيرة جداً ويغطي مساحات واسعة خلال أسابيع'
    ],
    impact:'يُغطي سطح الماء بالكامل فيمنع دخول الضوء والأكسجين، ما يقتل الأسماك والكائنات المائية تحته، ويسد قنوات الري والملاحة، ويصعّب حركة قوارب الأهوار.',
    control:[
      'الإزالة اليدوية أو الميكانيكية المنتظمة قبل موسم الإزهار والتكاثر',
      'التخلص من الكتلة النباتية بعيداً عن مجرى الماء (يمكن تحويلها لسماد عضوي)',
      'عدم تفتيت النبات داخل الماء لأن أي جزء صغير قد يُنبت نبتة جديدة',
      'تجنّب زراعته أو نقله كنبات زينة في البرك المنزلية القريبة من الأنهار'
    ]
  },
  {
    id:'hydrilla', kind:'plant', kindLabel:'نبات',
    name:'الهايدريلا (الكطل)', latin:'Hydrilla verticillata',
    threat:60,
    summary:'نبات مائي مغمور دخيل وثّقته دراسات بيئية عراقية في أهوار جنوب العراق وغرب البلاد.',
    features:[
      'نبات مغمور بالكامل تحت سطح الماء بسيقان طويلة متفرعة',
      'أوراق صغيرة رفيعة مسننة الحواف تنمو في دوامات حول الساق',
      'ينمو بكثافة شديدة مكوناً كتلاً تحت سطحية كثيفة',
      'يتكاثر بسرعة من قطع صغيرة من الساق أو درنات جذرية'
    ],
    impact:'يزاحم النباتات المائية المحلية ويقلل التنوع الحيوي، ويُعيق حركة الملاحة الصغيرة وشباك الصيد، وقد يغيّر من كيمياء المياه في المناطق شديدة الكثافة.',
    control:[
      'الإزالة اليدوية للكتل الكثيفة مع الحرص على عدم ترك قطع تطفو لتنبت من جديد',
      'تجفيف الكتلة المزالة تماماً بعيداً عن أي مسطح مائي قبل التخلص منها',
      'مراقبة قنوات الري والمبازل القريبة لأنها من أهم طرق انتشاره',
      'التنسيق مع دوائر الموارد المائية عند الانتشار الكثيف'
    ]
  },
  {
    id:'gar', kind:'fish', kindLabel:'سمك',
    name:'الجار المدرّع (سمك التمساح)', latin:'Atractosteus spatula',
    threat:55,
    source:{label:'توثيق أكاديمي: Mutlak, Jawad & Al-Faisal (2017)', creator:0},
    summary:'مفترس ضخم مصدره أمريكا الشمالية، سُجّل دخوله للمياه العراقية عبر تجارة أحواض الزينة، ويشكّل خطراً حقيقياً على الأسماك المحلية إن تكاثر.',
    features:[
      'جسم طويل أسطواني يشبه الطوربيد، مغطى بحراشف صلبة تشبه الدروع',
      'فم مستطيل طويل يشبه فم التمساح مليء بصفين من الأسنان الحادة',
      'لون بني إلى زيتوني مع بقع داكنة متناثرة على الجسم والزعانف',
      'قد يصل طوله لأكثر من متر واحد في البيئات المناسبة',
      'يتحمل المياه قليلة الأكسجين ويمكنه التنفس من سطح الماء مباشرة'
    ],
    impact:'مفترس شره يتغذى على الأسماك الأخرى وقد يؤثر بشدة على الأنواع المحلية إذا تأسست له أعداد متكاثرة. سُجّل دخوله للمياه العراقية عبر تجارة أسماك الزينة (أحواض المنزل) وليس بشكل طبيعي، وما زال يُصنَّف كتسجيل أولي نادر وليس انتشاراً واسعاً حتى الآن — ما يجعل الإبلاغ المبكر عنه مهماً جداً.',
    control:[
      'الإبلاغ الفوري والصورة الواضحة عند رصده — أي فرد مؤكد يستحق إبلاغاً عاجلاً للجهات البيئية',
      'عدم إعادته إلى الماء أبداً إذا تم اصطياده',
      'عدم شراء أو تربية هذا النوع في أحواض منزلية أساساً، وعدم إطلاق أي سمكة زينة كبيرة في الأنهار عند الاستغناء عنها',
      'التعامل معه بحذر عند الإمساك به يدوياً بسبب فمه وأسنانه الحادة'
    ]
  },
  {
    id:'oscar', kind:'fish', kindLabel:'سمك',
    name:'الأوسكار', latin:'Astronotus ocellatus',
    threat:35,
    source:{label:'توثيق أكاديمي: Jawad, Al-Sheikhly & Al-Fayadhi (2022)', creator:0},
    summary:'سمكة زينة شهيرة موطنها الأصلي حوض الأمازون، وثّق باحثون عراقيون أول تسجيل لها في نهر الفرات قرب الحلة عام 2021 نتيجة إطلاقها من أحواض منزلية.',
    features:[
      'جسم بيضاوي مضغوط جانبياً بلون بني إلى رمادي داكن',
      'بقعة دائرية بارزة عند قاعدة الذيل تشبه "عيناً" مموّهة',
      'زعانف مستديرة وحركة بطيئة نسبياً مقارنة بالأسماك النهرية المحلية',
      'حجم متوسط قد يصل إلى 20-25 سم في البيئة الطبيعية'
    ],
    impact:'حالياً تسجيل واحد موثّق فقط (فرع من نهر الفرات شمال غرب الحلة)، لذا لا يُعد بعد نوعاً غازياً منتشراً، لكنه مثال واضح على خطر إطلاق أسماك الزينة في الأنهار — وهو ما دعا الباحثين لتوثيقه كإنذار مبكر.',
    control:[
      'عدم إطلاق أي سمكة زينة (أوسكار أو غيرها) في الأنهار أو المبازل عند الاستغناء عنها — تُعطى لهاوٍ آخر أو تُعدم بشكل إنساني في المنزل',
      'الإبلاغ عند رصد أي فرد في مياه مفتوحة لأنه لا يزال نادراً ويسهل احتواؤه مبكراً',
      'التوعية بمخاطر تجارة أسماك الزينة غير المنضبطة كمصدر رئيسي لدخول أنواع غريبة'
    ]
  }
];

const SIGHTINGS = [
  {species:'catfish', place:'الناصرية', lat:31.0559, lng:46.2569, note:'أول توثيق مسجل للنوع في جنوب العراق'},
  {species:'catfish', place:'بغداد', lat:33.3152, lng:44.3661, note:'رصد على ضفاف دجلة داخل العاصمة'},
  {species:'catfish', place:'هور الحويزة', lat:31.4667, lng:47.6167, note:'رصد ضمن الهور الحدودي'},
  {species:'hyacinth', place:'ضفاف دجلة والفرات', lat:33.0, lng:44.6, note:'انتشار متزايد على ضفاف النهرين'},
  {species:'hyacinth', place:'البصرة وشط العرب', lat:30.5085, lng:47.7835, note:'انتشار كثيف في شط العرب'},
  {species:'hydrilla', place:'بحيرة الحبانية / غرب العراق', lat:33.3667, lng:43.5333, note:'دراسة بيئية وثّقت انتشاره غرب العراق'},
  {species:'tilapia', place:'الأهوار الجنوبية', lat:31.0, lng:47.0, note:'انتشار واسع في مياه الجنوب'},
  {species:'oscar', place:'نهر الفرات قرب الحلة', lat:32.4796, lng:44.3661, note:'أول تسجيل علمي موثّق للنوع في العراق (2021)، عينة فرد واحد'},
  {species:'gar', place:'جنوب العراق (تسجيل أولي)', lat:30.7, lng:47.5, note:'تسجيل أولي نادر عبر تجارة أحواض الزينة — يستدعي إبلاغاً مبكراً عند أي رصد جديد'}
];

const CREATORS = [
  {
    name:'د. عمر الشيخلي', latin:'Dr. Omar F. Al-Sheikhly',
    role:'أستاذ علم الأحياء/البيئة الحيوانية — جامعة بغداد، خبير حياة برية وباحث في الأنواع الغازية والدخيلة',
    bio:'باحث ومصوّر حياة برية عراقي، له عشرات الأبحاث المنشورة عن التنوع الحيوي في العراق، منها توثيق علمي لدخول أسماك دخيلة مثل الأوسكار وسمك الجار المدرّع إلى الأنهار العراقية عبر تجارة أحواض الزينة. يشارك محتوى توعوياً مصوّراً عن الحياة البرية العراقية بانتظام.',
    instagram:'https://www.instagram.com/omar.alsheikhly',
    tag:'🦉 خبير أكاديمي وحياة برية'
  },
  {
    name:'مهدي ليث', latin:'Mahdi Laith',
    role:'ناشط بيئي وصانع محتوى — باحث في الزواحف والتنوع الحيوي العراقي',
    bio:'صانع محتوى عراقي متخصص بالحياة البرية والطبيعة، ينشر فيديوهات توعوية على إنستغرام وتيك توك ويوتيوب حول الحيوانات والأنواع الغازية وطرق التعامل معها، بمتابعة واسعة من الجمهور العراقي والعربي.',
    instagram:'https://www.instagram.com/mahdilaith',
    extraLinks:[
      {label:'يوتيوب', url:'https://www.youtube.com/@MahdiLaith'},
      {label:'تيك توك', url:'https://www.tiktok.com/@mahdilaith'}
    ],
    tag:'🎥 صانع محتوى بيئي'
  }
];

const REFERENCES = [
  'Jawad, L.A., Al-Sheikhly, O.F. & Al-Fayadhi, K.H. (2022). The Oscar, Astronotus ocellatus (Cichlidae): a deliberate aquarium trade introduction in the Euphrates River, Iraq. Thalassia Salentina, 44, 41–50.',
  'Mutlak, F., Jawad, L., Al-Faisal, A. (2017). Atractosteus spatula (Actinopterygii: Lepisosteiformes): a first record from Iraqi waters.',
  'الجزيرة نت (2025): "السلور الأفريقي.. سمك دخيل يهدد التنوع البيئي بالعراق".',
  'دراسات بيئية عراقية عن انتشار النبات المائي الدخيل الهايدريلا (الكطل) في غرب العراق، مجلة أبحاث البصرة.'
];

// ---------- TAB NAV ----------
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('view-'+tab.dataset.tab).classList.add('active');
    if(tab.dataset.tab==='map' && window.__leafletMap){ setTimeout(()=>window.__leafletMap.invalidateSize(),80); }
  });
});

// ---------- SPECIES GRID ----------
function threatColor(v){ return v>=75?'#b5482d':v>=55?'#c9a227':'#4fb0a5'; }

function renderGrid(){
  const grid = document.getElementById('species-grid');
  grid.innerHTML = SPECIES.map(s=>`
    <div class="card" data-id="${s.id}">
      <span class="kind-badge">${s.kindLabel==='سمك'?'🐟':'🌿'} ${s.kindLabel}</span>
      <h3>${s.name}</h3>
      <span class="latin">${s.latin}</span>
      <p style="font-size:13.5px;color:var(--muted);line-height:1.8;margin:0;">${s.summary}</p>
      <div class="gauge-row">
        <div class="gauge-track"><div class="gauge-fill" style="width:${s.threat}%;background:${threatColor(s.threat)}"></div></div>
        <span class="gauge-label">شدة الانتشار ${s.threat}%</span>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>showDetail(c.dataset.id));
  });
}

function showDetail(id){
  const s = SPECIES.find(x=>x.id===id);
  document.getElementById('species-grid').style.display='none';
  const d = document.getElementById('species-detail');
  d.style.display='block';
  d.innerHTML = `
    <div class="detail-wrap">
      <button class="back-btn" id="back-btn">→ العودة لكل الأنواع</button>
      <div class="detail-title">
        <h2 class="display">${s.name}</h2>
        <span class="pill">${s.kindLabel==='سمك'?'🐟':'🌿'} ${s.kindLabel} غازي/دخيل</span>
      </div>
      <span class="latin">${s.latin}</span>
      <div class="gauge-row" style="margin-top:16px;max-width:320px;">
        <div class="gauge-track"><div class="gauge-fill" style="width:${s.threat}%;background:${threatColor(s.threat)}"></div></div>
        <span class="gauge-label">شدة الانتشار ${s.threat}%</span>
      </div>

      <div class="block-title">علامات التعرّف</div>
      <ul class="clean">${s.features.map(f=>`<li>${f}</li>`).join('')}</ul>

      <div class="block-title">الأثر البيئي</div>
      <p class="body-text">${s.impact}</p>

      <div class="block-title">طرق المكافحة الموصى بها</div>
      <ul class="clean">${s.control.map(f=>`<li>${f}</li>`).join('')}</ul>

      ${s.source ? `<div class="source-line">📚 ${s.source.label}${CREATORS[s.source.creator] ? ` · تابع محتوى <a href="${CREATORS[s.source.creator].instagram}" target="_blank" rel="noopener">${CREATORS[s.source.creator].name}</a> على إنستغرام` : ''}</div>` : ''}
    </div>
  `;
  document.getElementById('back-btn').addEventListener('click', ()=>{
    d.style.display='none';
    document.getElementById('species-grid').style.display='grid';
  });
  window.scrollTo({top:220,behavior:'smooth'});
}
renderGrid();

// ---------- CONTENT CREATORS & SOURCES ----------
function renderCreators(){
  const grid = document.getElementById('creators-grid');
  if(!grid) return;
  grid.innerHTML = CREATORS.map(c=>`
    <div class="creator-card">
      <span class="creator-tag">${c.tag}</span>
      <h3>${c.name}</h3>
      <span class="latin">${c.latin}</span>
      <p class="creator-role">${c.role}</p>
      <p class="creator-bio">${c.bio}</p>
      <div class="creator-links">
        <a href="${c.instagram}" target="_blank" rel="noopener">إنستغرام ↗</a>
        ${(c.extraLinks||[]).map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}
      </div>
    </div>
  `).join('');

  const refList = document.getElementById('references-list');
  if(refList){
    refList.innerHTML = REFERENCES.map(r=>`<li>${r}</li>`).join('');
  }
}
renderCreators();

// ---------- VIDEO FEED ----------
const vidCreatorSelect = document.getElementById('vid-creator');
CREATORS.forEach((c,i)=>{
  const opt = document.createElement('option');
  opt.value = i; opt.textContent = c.name;
  vidCreatorSelect.appendChild(opt);
});
const vidUrlInput = document.getElementById('vid-url');
const vidSubmitBtn = document.getElementById('vid-submit');
const vidHint = document.getElementById('vid-hint');

function isValidInstagramPostUrl(url){
  return /^https:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?/.test(url.trim());
}

vidUrlInput.addEventListener('input', ()=>{
  const url = vidUrlInput.value.trim();
  if(url.length === 0){ vidHint.textContent=''; vidSubmitBtn.disabled = true; return; }
  if(isValidInstagramPostUrl(url)){
    vidHint.textContent = 'الرابط يبدو صحيحاً ✓';
    vidHint.style.color = 'var(--gold-soft)';
    vidSubmitBtn.disabled = false;
  }else{
    vidHint.textContent = 'الرابط يجب أن يكون رابط منشور محدد (يحتوي /p/ أو /reel/) وليس رابط صفحة عامة';
    vidHint.style.color = 'var(--rust)';
    vidSubmitBtn.disabled = true;
  }
});

async function loadVideoFeed(){
  const gallery = document.getElementById('video-gallery');
  try{
    const res = await window.storage.list('video:', true);
    if(!res || !res.keys || res.keys.length===0){
      gallery.innerHTML = '<p style="color:var(--muted);font-size:13px;">لا توجد فيديوهات مضافة بعد — كن أول من يضيف واحداً.</p>';
      return;
    }
    const items = [];
    for(const k of res.keys){
      try{
        const r = await window.storage.get(k, true);
        if(r) items.push(JSON.parse(r.value));
      }catch(e){}
    }
    items.sort((a,b)=>b.time-a.time);
    gallery.innerHTML = items.map(v=>`
      <div class="video-card">
        ${v.caption?`<div class="video-caption">${v.caption}</div>`:''}
        <blockquote class="instagram-media" data-instgrm-permalink="${v.url}" data-instgrm-version="14" style="margin:0;"></blockquote>
        <div class="video-meta">${v.creatorName?`📍 ${v.creatorName} · `:''}${new Date(v.time).toLocaleDateString('ar-IQ')}</div>
      </div>
    `).join('');
    if(window.instgrm && window.instgrm.Embeds){ window.instgrm.Embeds.process(); }
    else{
      // embed.js may not have loaded yet; try again shortly
      setTimeout(()=>{ if(window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); }, 1200);
    }
  }catch(e){
    console.error('video feed load error', e);
  }
}
loadVideoFeed();

vidSubmitBtn.addEventListener('click', async ()=>{
  const url = vidUrlInput.value.trim();
  if(!isValidInstagramPostUrl(url)) return;
  vidSubmitBtn.disabled = true; vidSubmitBtn.textContent = 'جارٍ الإضافة...';
  const creatorIdx = vidCreatorSelect.value;
  const video = {
    url,
    caption: document.getElementById('vid-caption').value.trim(),
    creatorName: creatorIdx !== '' ? CREATORS[creatorIdx].name : '',
    time: Date.now()
  };
  try{
    const key = 'video:'+Date.now()+':'+Math.random().toString(36).slice(2,7);
    await window.storage.set(key, JSON.stringify(video), true);
    vidSubmitBtn.textContent = 'تمت الإضافة ✓';
    setTimeout(()=>location.reload(), 900);
  }catch(e){
    vidSubmitBtn.textContent = 'حدث خطأ، حاول مجدداً';
    vidSubmitBtn.disabled = false;
  }
});

// ---------- SPECIES SELECT FOR REPORT FORM ----------
const rpSelect = document.getElementById('rp-species');
SPECIES.forEach(s=>{
  const opt = document.createElement('option');
  opt.value = s.id; opt.textContent = `${s.kindLabel==='سمك'?'🐟':'🌿'} ${s.name}`;
  rpSelect.appendChild(opt);
});

// ---------- MAP ----------
let pickedLatLng = null;
let pickMarker = null;
const latInput = document.getElementById('rp-lat');
const lngInput = document.getElementById('rp-lng');

function setPickedLocation(lat, lng, fromMap){
  pickedLatLng = {lat, lng};
  latInput.value = lat.toFixed(5);
  lngInput.value = lng.toFixed(5);
  document.getElementById('pick-note').textContent = `تم تحديد الموقع: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  const map = window.__leafletMap;
  if(map){
    if(pickMarker) map.removeLayer(pickMarker);
    pickMarker = L.marker([lat,lng], {icon: window.__documentedIcon('#4fb0a5')}).addTo(map);
    if(!fromMap) map.panTo([lat,lng]);
  }
  checkFormReady();
}

function initMap(){
  const map = L.map('map', {scrollWheelZoom:false}).setView([32.4, 44.5], 6);
  window.__leafletMap = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; OpenStreetMap contributors', maxZoom:18
  }).addTo(map);

  const documentedIcon = (color)=> L.divIcon({
    className:'', html:`<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #0a2b29;box-shadow:0 0 0 2px ${color}55;"></div>`,
    iconSize:[14,14], iconAnchor:[7,7]
  });
  window.__documentedIcon = documentedIcon;

  SIGHTINGS.forEach(pt=>{
    const sp = SPECIES.find(s=>s.id===pt.species);
    L.marker([pt.lat,pt.lng], {icon:documentedIcon('#c9a227')})
      .addTo(map)
      .bindPopup(`<b>${sp?sp.name:pt.species}</b><br>${pt.place}<br><span style="color:#666">${pt.note}</span>`);
  });

  loadCommunityReports(map, documentedIcon);

  map.on('click', (e)=>{ setPickedLocation(e.latlng.lat, e.latlng.lng, true); });
}
initMap();

latInput.addEventListener('change', ()=>{
  const lat = parseFloat(latInput.value), lng = parseFloat(lngInput.value);
  if(!isNaN(lat) && !isNaN(lng)) setPickedLocation(lat, lng, false);
});
lngInput.addEventListener('change', ()=>{
  const lat = parseFloat(latInput.value), lng = parseFloat(lngInput.value);
  if(!isNaN(lat) && !isNaN(lng)) setPickedLocation(lat, lng, false);
});

function checkFormReady(){
  const ready = pickedLatLng && rpSelect.value && document.getElementById('rp-place').value.trim();
  document.getElementById('rp-submit').disabled = !ready;
}
rpSelect.addEventListener('change', checkFormReady);
document.getElementById('rp-place').addEventListener('input', checkFormReady);

// ---------- REPORT PHOTO ATTACHMENT ----------
let reportPhotoData = null;
const rpPhotoInput = document.getElementById('rp-photo-input');
const rpPhotoAttach = document.getElementById('rp-photo-attach');
const rpPhotoPreview = document.getElementById('rp-photo-preview');
const rpPhotoLabel = document.getElementById('rp-photo-label');

rpPhotoAttach.addEventListener('click', ()=>rpPhotoInput.click());
rpPhotoInput.addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    compressImage(reader.result, 640, 0.7, (compressed)=>{
      reportPhotoData = compressed;
      rpPhotoPreview.src = compressed;
      rpPhotoPreview.style.display = 'block';
      rpPhotoLabel.textContent = 'تم إرفاق الصورة ✓ (اضغط للتغيير)';
    });
  };
  reader.readAsDataURL(file);
});

function compressImage(dataUrl, maxDim, quality, cb){
  const img = new Image();
  img.onload = ()=>{
    let w = img.width, h = img.height;
    if(w > h && w > maxDim){ h = Math.round(h * maxDim / w); w = maxDim; }
    else if(h > maxDim){ w = Math.round(w * maxDim / h); h = maxDim; }
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    cb(canvas.toDataURL('image/jpeg', quality));
  };
  img.src = dataUrl;
}

// ---------- COMMUNITY REPORTS: LOAD/SAVE ----------
async function loadCommunityReports(map, iconFn){
  try{
    const res = await window.storage.list('report:', true);
    const listEl = document.getElementById('reports-list');
    if(!res || !res.keys || res.keys.length===0){
      listEl.innerHTML = '<p style="color:var(--muted);font-size:13px;">لا توجد بلاغات مجتمعية بعد — كن أول من يضيف بلاغاً.</p>';
      return;
    }
    let itemsHtml = '';
    for(const k of res.keys){
      try{
        const r = await window.storage.get(k, true);
        if(!r) continue;
        const rep = JSON.parse(r.value);
        const sp = SPECIES.find(s=>s.id===rep.species);
        L.marker([rep.lat,rep.lng], {icon:iconFn('#4fb0a5')})
          .addTo(map)
          .bindPopup(`<b>${sp?sp.name:rep.species}</b><br>${rep.place}${rep.photo?`<br><img src="${rep.photo}" style="width:120px;border-radius:8px;margin-top:6px;">`:''}<br><span style="color:#666">${rep.notes||''}</span>`);
        itemsHtml += `<div class="report-item">
            ${rep.photo?`<img src="${rep.photo}" alt="">`:''}
            <div>
              <b>${sp?sp.name:rep.species}</b> — ${rep.place}
              <div class="meta">${rep.notes?rep.notes+' · ':''}${new Date(rep.time).toLocaleDateString('ar-IQ')}</div>
              <div class="coords">📍 ${rep.lat.toFixed(5)}, ${rep.lng.toFixed(5)}</div>
            </div>
          </div>`;
      }catch(e){}
    }
    listEl.innerHTML = itemsHtml || '<p style="color:var(--muted);font-size:13px;">لا توجد بلاغات مجتمعية بعد.</p>';
  }catch(e){
    console.error('report load error', e);
  }
}

document.getElementById('rp-submit').addEventListener('click', async ()=>{
  const btn = document.getElementById('rp-submit');
  btn.disabled = true; btn.textContent = 'جارٍ الإضافة...';
  const report = {
    species: rpSelect.value,
    place: document.getElementById('rp-place').value.trim(),
    notes: document.getElementById('rp-notes').value.trim(),
    lat: pickedLatLng.lat, lng: pickedLatLng.lng,
    photo: reportPhotoData || null,
    time: Date.now()
  };
  try{
    const key = 'report:'+Date.now()+':'+Math.random().toString(36).slice(2,7);
    await window.storage.set(key, JSON.stringify(report), true);
    btn.textContent = 'تمت الإضافة ✓';
    setTimeout(()=>{ location.reload(); }, 900);
  }catch(e){
    btn.textContent = 'حدث خطأ، حاول مجدداً';
    btn.disabled = false;
  }
});

// ---------- PHOTO ID (identification tool, separate from report photo) ----------
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const previewImg = document.getElementById('preview-img');
const dropPlaceholder = document.getElementById('drop-placeholder');
const analyzeBtn = document.getElementById('analyze-btn');
const idResult = document.getElementById('id-result');
let currentImageBase64 = null, currentImageMedia = null;

dropZone.addEventListener('click', ()=>fileInput.click());
dropZone.addEventListener('dragover', e=>{e.preventDefault(); dropZone.style.borderColor='var(--gold)';});
dropZone.addEventListener('dragleave', ()=>{dropZone.style.borderColor='var(--line)';});
dropZone.addEventListener('drop', e=>{
  e.preventDefault(); dropZone.style.borderColor='var(--line)';
  if(e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener('change', e=>{ if(e.target.files[0]) handleFile(e.target.files[0]); });

function handleFile(file){
  if(!file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const dataUrl = reader.result;
    currentImageBase64 = dataUrl.split(',')[1];
    currentImageMedia = file.type;
    previewImg.src = dataUrl;
    previewImg.style.display='block';
    dropPlaceholder.style.display='none';
    analyzeBtn.style.display='inline-block';
    idResult.style.display='none';
  };
  reader.readAsDataURL(file);
}

analyzeBtn.addEventListener('click', async ()=>{
  if(!currentImageBase64) return;
  analyzeBtn.disabled = true;
  analyzeBtn.innerHTML = 'جارٍ التحليل <span class="spinner"></span>';
  idResult.style.display='block';
  idResult.textContent = '...';

  const speciesBrief = SPECIES.map(s=>`- ${s.name} (${s.latin}): ${s.features.join('؛ ')}`).join('\n');
  const prompt = `أنت مختص بيئي عراقي. لديك صورة لكائن مائي (سمكة أو نبات) من نهر أو هور أو بحيرة في العراق.
قارن الصورة بخصائص هذه الأنواع الغازية/الدخيلة الموثقة في العراق:
${speciesBrief}

أعطِ إجابة موجزة باللغة العربية بالتنسيق التالي بالضبط:
النوع المرجّح: [اسم النوع أو "غير مطابق لأي من الأنواع الأربعة الموثقة"]
درجة الثقة: [منخفضة/متوسطة/عالية]
سبب التحديد: [جملتان توضحان العلامات البصرية التي دعمت أو استبعدت كل نوع]
الإجراء الموصى به: [نصيحة عملية قصيرة]

إذا لم تكن الصورة واضحة بما يكفي أو لا تُظهر كائناً مائياً، وضّح ذلك بدلاً من التخمين.`;

  try{
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        messages: [{
          role: "user",
          content: [
            { type:"image", source:{ type:"base64", media_type: currentImageMedia, data: currentImageBase64 } },
            { type:"text", text: prompt }
          ]
        }]
      })
    });
    const data = await response.json();
    const text = (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
    idResult.textContent = text || 'تعذّر الحصول على نتيجة، حاول بصورة أخرى.';
  }catch(e){
    idResult.textContent = 'حدث خطأ أثناء التحليل. تحقق من الاتصال وحاول مرة أخرى.';
  }
  analyzeBtn.disabled = false;
  analyzeBtn.textContent = 'تحليل صورة أخرى';
});
