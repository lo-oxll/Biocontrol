// ============================================================
// رَصَد — بيانات الأنواع والمصادر
// ============================================================
const SPECIES = [
  {
    id:'catfish', kind:'fish', kindLabel:'سمك',
    name:'السلور الأفريقي (القرموط الإفريقي)', latin:'Clarias gariepinus',
    threat:70,
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ikan_lele_dumbo_(4).JPG?width=800',
    imageCredit:'Wagino 20100516 — Wikimedia Commons (CC BY-SA 3.0)',
    lookalike:{name:'الجري العراقي (سمك الشلك)', latin:'Silurus triostegus',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Silurus_triostegus.jpg?width=500',
      imageCredit:'Wikimedia Commons',
      howToTell:'الجري المحلي جسمه أكثر انسيابياً وأملس بدون زعنفة ظهرية بارزة، وله شاربان طويلان فقط (وليس أربعة أزواج كاملة). السلور الأفريقي يتميز بزعنفة ظهرية طويلة تمتد على كامل الجسم تقريباً، وأربعة أزواج شوارب واضحة حول الفم.'},
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
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Oreochromis-niloticus-Nairobi.JPG?width=800',
    imageCredit:'Bjørn Christian Tørrissen — Wikimedia Commons (CC BY-SA 3.0)',
    lookalike:{name:'البني (الشبوط العراقي)', latin:'Barbus/Luciobarbus spp.',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Luciobarbus_xanthopterus_Iran.JPG?width=500',
      imageCredit:'Wikimedia Commons',
      howToTell:'البني جسمه أطول وأكثر استطالة بلون فضي-ذهبي وزعانف حمراء أو برتقالية عند القاعدة، وله شاربان صغيران عند الفم. البلطي جسمه أقصر وأكثر استدارة (بيضاوي)، بلا شوارب، وزعنفته الظهرية طويلة ذات أشواك حادة واضحة.'},
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
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Eichhornia_crassipes-water_hyacinth.jpg?width=800',
    imageCredit:'U.S. Army Corps of Engineers — Wikimedia Commons (ملكية عامة)',
    lookalike:{name:'عدس الماء الكبير (خس الماء)', latin:'Pistia stratiotes',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pistia_stratiotes_(water_lettuce)_1.JPG?width=500',
      imageCredit:'Wikimedia Commons',
      howToTell:'خس الماء أوراقه رمادية-خضراء مخملية الملمس بدون أزهار أرجوانية بارزة، وسيقانه غير منتفخة إسفنجياً. زهرة النيل تتميز بسيقان منتفخة كالبالون تساعدها على الطفو، وأزهار أرجوانية-وردية واضحة تتوسط النبتة.'},
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
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Hydrilla_verticillata-1-bsi-yercaud-salem-India.jpg?width=800',
    imageCredit:'Yercaud-elango — Wikimedia Commons (CC BY-SA 4.0)',
    lookalike:{name:'ذيل القط (الحندقوق المائي)', latin:'Ceratophyllum demersum',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ceratophyllum_demersum_193786838.jpg?width=500',
      imageCredit:'Wikimedia Commons',
      howToTell:'ذيل القط نبات محلي بلا جذور حقيقية (يطفو حراً تحت الماء) وأوراقه متفرعة ثنائياً بشكل ناعم كالريشة. الهايدريلا لها جذور تثبّتها بالقاع، وأوراقها مسننة الحواف بوضوح وتنمو في دوامات حول ساق مستقيم صلب نسبياً.'},
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
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Alligator_gar_(Atractosteus_spatula).JPG?width=800',
    imageCredit:'ProjectManhattan — Wikimedia Commons (CC BY-SA 4.0)',
    lookalike:{name:'الجري العراقي (سمك الشلك)', latin:'Silurus triostegus',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Silurus_triostegus.jpg?width=500',
      imageCredit:'Wikimedia Commons',
      howToTell:'الجري المحلي بلا حراشف صلبة على جسمه وفمه عريض مستدير وليس مستطيلاً، وله شاربان طويلان فقط. الجار المدرّع يتميز بفم طويل يشبه التمساح مليء بصفين من الأسنان الحادة، وجسمه مغطى بحراشف صلبة تشبه الدروع.'},
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
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Astronotus_ocellatus.jpg?width=800',
    imageCredit:'Jón Helgi Jónsson — Wikimedia Commons (صورة مميّزة، CC BY-SA)',
    lookalike:{name:'صغار البلطي الداكنة اللون', latin:'Oreochromis spp. (يافعة)',
      image:'https://commons.wikimedia.org/wiki/Special:FilePath/Oreochromis-niloticus-Nairobi.JPG?width=500',
      imageCredit:'Wikimedia Commons',
      howToTell:'صغار البلطي جسمها أكثر استطالة قليلاً وبلا بقعة دائرية واضحة عند قاعدة الذيل، وزعنفتها الظهرية ذات أشواك بارزة أكثر حدة. الأوسكار يتميز ببقعة دائرية بارزة "كالعين" عند قاعدة الذيل وحركة أبطأ وأكثر استدارة في الجسم.'},
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
  {species:'catfish', place:'الناصرية', gov:'ذي قار', lat:31.0559, lng:46.2569, note:'أول توثيق مسجل للنوع في جنوب العراق'},
  {species:'catfish', place:'بغداد', gov:'بغداد', lat:33.3152, lng:44.3661, note:'رصد على ضفاف دجلة داخل العاصمة'},
  {species:'catfish', place:'هور الحويزة', gov:'ميسان', lat:31.4667, lng:47.6167, note:'رصد ضمن الهور الحدودي'},
  {species:'hyacinth', place:'ضفاف دجلة والفرات', gov:null, lat:33.0, lng:44.6, note:'انتشار متزايد على ضفاف النهرين'},
  {species:'hyacinth', place:'البصرة وشط العرب', gov:'البصرة', lat:30.5085, lng:47.7835, note:'انتشار كثيف في شط العرب'},
  {species:'hydrilla', place:'بحيرة الحبانية / غرب العراق', gov:'الأنبار', lat:33.3667, lng:43.5333, note:'دراسة بيئية وثّقت انتشاره غرب العراق'},
  {species:'tilapia', place:'الأهوار الجنوبية', gov:'ذي قار', lat:31.0, lng:47.0, note:'انتشار واسع في مياه الجنوب'},
  {species:'oscar', place:'نهر الفرات قرب الحلة', gov:'بابل', lat:32.4796, lng:44.3661, note:'أول تسجيل علمي موثّق للنوع في العراق (2021)، عينة فرد واحد'},
  {species:'gar', place:'جنوب العراق (تسجيل أولي)', gov:null, lat:30.7, lng:47.5, note:'تسجيل أولي نادر عبر تجارة أحواض الزينة — يستدعي إبلاغاً مبكراً عند أي رصد جديد'}
];

const IRAQ_GOVERNORATES = [
  'بغداد','البصرة','نينوى','أربيل','النجف','كربلاء','بابل','واسط','ديالى',
  'الأنبار','القادسية','المثنى','ذي قار','ميسان','صلاح الدين','كركوك','دهوك','السليمانية'
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

// ============================================================
// SUPABASE CLIENT
// ============================================================
let sb = null;
(function initSupabase(){
  const url = window.SUPABASE_URL, key = window.SUPABASE_ANON_KEY;
  if(!url || !key || url.includes('YOUR-PROJECT') || key.includes('YOUR-ANON')){
    console.warn('رَصَد: لم يتم ضبط Supabase بعد — عدّل config.js. البلاغات والفيديوهات لن تُحفظ حتى تضبط الإعدادات.');
    return;
  }
  try{
    sb = window.supabase.createClient(url, key);
  }catch(e){
    console.error('تعذّر تهيئة Supabase', e);
  }
})();

function sbReadyOrWarn(){
  if(!sb){
    alert('لم يتم ربط قاعدة البيانات بعد. افتح ملف config.js وأضف SUPABASE_URL و SUPABASE_ANON_KEY الخاصين بمشروعك في Supabase (راجع supabase_schema.sql لإنشاء الجداول أولاً).');
    return false;
  }
  return true;
}

// ============================================================
// TAB NAV
// ============================================================
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('view-'+tab.dataset.tab).classList.add('active');
    if(tab.dataset.tab==='map' && window.__leafletMap){ setTimeout(()=>window.__leafletMap.invalidateSize(),80); }
  });
});

// ============================================================
// SPECIES GRID
// ============================================================
function threatColor(v){ return v>=75?'#b5482d':v>=55?'#c9a227':'#4fb0a5'; }

function renderGrid(){
  const grid = document.getElementById('species-grid');
  grid.innerHTML = SPECIES.map(s=>`
    <div class="card" data-id="${s.id}">
      <span class="kind-badge">${s.kindLabel==='سمك'?'🐟':'🌿'} ${s.kindLabel}</span>
      ${s.image ? `<img class="card-photo" src="${s.image}" alt="${s.name}">` : ''}
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
      ${s.image ? `<img class="detail-photo" src="${s.image}" alt="${s.name}">${s.imageCredit?`<div class="photo-credit">📷 ${s.imageCredit}</div>`:''}` : ''}
      <div class="gauge-row" style="margin-top:16px;max-width:320px;">
        <div class="gauge-track"><div class="gauge-fill" style="width:${s.threat}%;background:${threatColor(s.threat)}"></div></div>
        <span class="gauge-label">شدة الانتشار ${s.threat}%</span>
      </div>

      <div class="block-title">علامات التعرّف</div>
      <ul class="clean">${s.features.map(f=>`<li>${f}</li>`).join('')}</ul>

      ${s.lookalike ? `<div class="lookalike-box">
        <div class="lk-title">🔍 لا تخلط بينه وبين: <span class="lk-name">${s.lookalike.name}</span> <span class="latin">(${s.lookalike.latin})</span></div>
        <div class="lk-compare">
          <div class="lk-col">
            ${s.image?`<img src="${s.image}" alt="${s.name}">`:''}
            <span class="lk-tag lk-tag-invasive">⚠️ ${s.name} (غازي/دخيل)</span>
          </div>
          <div class="lk-col">
            ${s.lookalike.image?`<img src="${s.lookalike.image}" alt="${s.lookalike.name}">`:''}
            <span class="lk-tag lk-tag-native">✅ ${s.lookalike.name} (محلي)</span>
          </div>
        </div>
        <p>${s.lookalike.howToTell}</p>
      </div>` : ''}

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

// ============================================================
// CREATORS & REFERENCES
// ============================================================
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

// ============================================================
// VIDEO GALLERY — أي منصة (إنستغرام / تيك توك / يوتيوب)، أي صانع محتوى
// ============================================================
const vidUrlInput = document.getElementById('vid-url');
const vidCaptionInput = document.getElementById('vid-caption');
const vidCreatorNameInput = document.getElementById('vid-creator-name');
const vidSubmitBtn = document.getElementById('vid-submit');
const vidHint = document.getElementById('vid-hint');
const vidAnalyzeBtn = document.getElementById('vid-analyze');
const vidAiBox = document.getElementById('vid-ai-box');

let aiSuggestedSpecies = null, aiSuggestedPlace = null, aiSuggestedLatLng = null;

function detectPlatform(url){
  url = url.trim();
  if(/instagram\.com\/(p|reel|tv)\//i.test(url)) return 'instagram';
  if(/tiktok\.com\//i.test(url)) return 'tiktok';
  if(/(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)/i.test(url)) return 'youtube';
  return null;
}

function youtubeId(url){
  let m = url.match(/[?&]v=([A-Za-z0-9_-]{6,})/); if(m) return m[1];
  m = url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/); if(m) return m[1];
  m = url.match(/shorts\/([A-Za-z0-9_-]{6,})/); if(m) return m[1];
  return null;
}

function validateVideoUrl(){
  const url = vidUrlInput.value.trim();
  if(url.length === 0){ vidHint.textContent=''; vidSubmitBtn.disabled = true; return; }
  const platform = detectPlatform(url);
  if(platform){
    const labels = {instagram:'إنستغرام', tiktok:'تيك توك', youtube:'يوتيوب'};
    vidHint.textContent = `رابط ${labels[platform]} صالح ✓ — أي فيديو من داخل العراق مرحّب به`;
    vidHint.style.color = 'var(--gold-soft)';
    vidSubmitBtn.disabled = false;
  }else{
    vidHint.textContent = 'الرابط يجب أن يكون منشور محدد من إنستغرام (/p/ أو /reel/)، تيك توك، أو يوتيوب';
    vidHint.style.color = 'var(--rust)';
    vidSubmitBtn.disabled = true;
  }
}
vidUrlInput.addEventListener('input', validateVideoUrl);

// ---------- تحليل تلقائي بالذكاء الاصطناعي: النوع + الموقع من الرابط والوصف ----------
async function callClaudeText(prompt){
  const proxy = window.AI_PROXY_URL;
  if(proxy){
    const res = await fetch(proxy, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    return (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
  }
  // مسار احتياطي: يعمل فقط داخل معاينة Claude Artifacts، ولن يعمل على الموقع بعد نشره فعلياً
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 400,
      messages: [{ role:"user", content: prompt }]
    })
  });
  const data = await response.json();
  return (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
}

async function geocodeIraq(placeName){
  try{
    const q = encodeURIComponent(placeName + ', العراق');
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=iq&limit=1&q=${q}`);
    const arr = await res.json();
    if(arr && arr[0]) return { lat: parseFloat(arr[0].lat), lng: parseFloat(arr[0].lon) };
  }catch(e){ console.error('geocode error', e); }
  return null;
}

vidAnalyzeBtn.addEventListener('click', async ()=>{
  const url = vidUrlInput.value.trim();
  const caption = vidCaptionInput.value.trim();
  if(!url && !caption){
    alert('أضف رابط الفيديو أو وصفاً مختصراً أولاً حتى يقدر التحليل يفهم المحتوى.');
    return;
  }
  vidAnalyzeBtn.disabled = true;
  vidAnalyzeBtn.textContent = 'جارٍ التحليل...';
  vidAiBox.classList.remove('show');

  const speciesList = SPECIES.map(s=>`${s.id} = ${s.name} (${s.latin})`).join('\n');
  const prompt = `لديك رابط فيديو ووصف مختصر عن كائن مائي أو نبات في العراق:
الرابط: ${url || 'غير متوفر'}
الوصف: ${caption || 'غير متوفر'}

قائمة الأنواع الغازية الموثّقة (استخدم المعرّف id فقط إن تطابق):
${speciesList}

أجب حصراً بصيغة JSON بدون أي نص إضافي وبدون Markdown، بهذا الشكل بالضبط:
{"species_id": "المعرف أو null", "place_name": "اسم منطقة عراقية مذكورة أو null", "confidence": "منخفضة|متوسطة|عالية"}`;

  try{
    const raw = await callClaudeText(prompt);
    const clean = raw.replace(/```json|```/g,'').trim();
    const parsed = JSON.parse(clean);
    aiSuggestedSpecies = (parsed.species_id && parsed.species_id !== 'null') ? parsed.species_id : null;
    aiSuggestedPlace = (parsed.place_name && parsed.place_name !== 'null') ? parsed.place_name : null;
    aiSuggestedLatLng = null;

    let boxHtml = '';
    if(aiSuggestedSpecies){
      const sp = SPECIES.find(s=>s.id===aiSuggestedSpecies);
      boxHtml += `<b>النوع المقترح:</b> ${sp ? sp.name : aiSuggestedSpecies}<br>`;
    }else{
      boxHtml += `<b>النوع المقترح:</b> لم يتحدد تلقائياً — اختره يدوياً إن رغبت.<br>`;
    }
    if(aiSuggestedPlace){
      boxHtml += `<b>الموقع المقترح:</b> ${aiSuggestedPlace} — جارٍ تحديد الإحداثيات...`;
      vidAiBox.innerHTML = boxHtml;
      vidAiBox.classList.add('show');
      const loc = await geocodeIraq(aiSuggestedPlace);
      if(loc){
        aiSuggestedLatLng = loc;
        boxHtml = boxHtml.replace('جارٍ تحديد الإحداثيات...', `تم ✓ (${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}) — سيُضاف كنقطة على الخريطة`);
      }else{
        boxHtml = boxHtml.replace('جارٍ تحديد الإحداثيات...', 'تعذّر تحديد الإحداثيات تلقائياً.');
      }
    }else{
      boxHtml += `<b>الموقع المقترح:</b> غير مذكور في الوصف.`;
    }
    vidAiBox.innerHTML = boxHtml;
    vidAiBox.classList.add('show');
  }catch(e){
    console.error(e);
    vidAiBox.innerHTML = 'تعذّر التحليل التلقائي حالياً. يمكنك المتابعة وإضافة الفيديو بدون التحديد الآلي.';
    vidAiBox.classList.add('show');
  }
  vidAnalyzeBtn.disabled = false;
  vidAnalyzeBtn.textContent = '🔍 تحليل تلقائي بالذكاء الاصطناعي (تحديد النوع والموقع)';
});

// ---------- تحميل وعرض معرض الفيديو ----------
let tiktokScriptAdded = false;
function ensureTiktokEmbed(){
  if(tiktokScriptAdded) return;
  const s = document.createElement('script');
  s.src = 'https://www.tiktok.com/embed.js';
  s.async = true;
  document.body.appendChild(s);
  tiktokScriptAdded = true;
}

async function loadVideoFeed(){
  const gallery = document.getElementById('video-gallery');
  if(!sb){
    gallery.innerHTML = '<p style="color:var(--muted);font-size:13px;">اضبط إعدادات Supabase في config.js لعرض معرض الفيديو المشترك.</p>';
    return;
  }
  try{
    const { data: items, error } = await sb.from('videos').select('*').order('created_at', {ascending:false});
    if(error) throw error;
    if(!items || items.length===0){
      gallery.innerHTML = '<p style="color:var(--muted);font-size:13px;">لا توجد فيديوهات مضافة بعد — كن أول من يضيف واحداً.</p>';
      return;
    }
    const labels = {instagram:'إنستغرام', tiktok:'تيك توك', youtube:'يوتيوب', other:'فيديو'};
    let needsTiktok = false;
    gallery.innerHTML = items.map(v=>{
      let embed = '';
      if(v.platform==='instagram'){
        embed = `<blockquote class="instagram-media" data-instgrm-permalink="${v.url}" data-instgrm-version="14" style="margin:0;"></blockquote>`;
      }else if(v.platform==='tiktok'){
        embed = `<blockquote class="tiktok-embed" cite="${v.url}" style="margin:0;max-width:100%;"><section></section></blockquote>`;
        needsTiktok = true;
      }else if(v.platform==='youtube'){
        const id = youtubeId(v.url);
        embed = id ? `<div style="position:relative;padding-bottom:56.25%;height:0;"><iframe src="https://www.youtube.com/embed/${id}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:10px;" allowfullscreen></iframe></div>`
                   : `<a href="${v.url}" target="_blank" rel="noopener">فتح الفيديو ↗</a>`;
      }else{
        embed = `<a href="${v.url}" target="_blank" rel="noopener">فتح الفيديو ↗</a>`;
      }
      return `
      <div class="video-card">
        ${v.caption?`<div class="video-caption">${v.caption}</div>`:''}
        ${embed}
        <div class="video-meta"><span class="video-platform-badge">${labels[v.platform]||'فيديو'}</span>${v.creator_name?` ${v.creator_name} · `:''}${new Date(v.created_at).toLocaleDateString('ar-IQ')}</div>
      </div>`;
    }).join('');
    if(window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
    else setTimeout(()=>{ if(window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); }, 1200);
    if(needsTiktok) ensureTiktokEmbed();

    // إضافة نقاط الفيديوهات التي تحتوي إحداثيات إلى الخريطة
    if(window.__leafletMap && window.__documentedIcon){
      items.filter(v=>v.lat && v.lng).forEach(v=>{
        const sp = SPECIES.find(s=>s.id===v.species);
        const marker = L.marker([v.lat, v.lng], {icon: window.__documentedIcon('#5aa9d6')})
          .addTo(window.__leafletMap)
          .bindPopup(`🎬 ${sp?sp.name:(v.species||'فيديو')}<br>${v.place||''}<br><a href="${v.url}" target="_blank">مشاهدة الفيديو ↗</a>`);
        mapMarkerRefs.push({marker, species:v.species||null, gov:null});
      });
    }
  }catch(e){
    console.error('video feed load error', e);
    gallery.innerHTML = '<p style="color:var(--rust);font-size:13px;">تعذّر تحميل معرض الفيديو. تحقق من إعدادات Supabase.</p>';
  }
}
loadVideoFeed();

vidSubmitBtn.addEventListener('click', async ()=>{
  if(!sbReadyOrWarn()) return;
  const url = vidUrlInput.value.trim();
  const platform = detectPlatform(url);
  if(!platform) return;
  if(!checkRateLimit('video', 5)){
    alert('لقد وصلت للحد الأقصى من إضافات الفيديو اليوم (5) من هذا الجهاز. حاول غداً.');
    return;
  }
  vidSubmitBtn.disabled = true; vidSubmitBtn.textContent = 'جارٍ الإضافة...';
  const video = {
    url, platform,
    caption: vidCaptionInput.value.trim() || null,
    creator_name: vidCreatorNameInput.value.trim() || null,
    species: aiSuggestedSpecies || null,
    place: aiSuggestedPlace || null,
    lat: aiSuggestedLatLng ? aiSuggestedLatLng.lat : null,
    lng: aiSuggestedLatLng ? aiSuggestedLatLng.lng : null
  };
  try{
    const { error } = await sb.from('videos').insert(video);
    if(error) throw error;
    vidSubmitBtn.textContent = 'تمت الإضافة ✓';
    setTimeout(()=>location.reload(), 900);
  }catch(e){
    console.error(e);
    vidSubmitBtn.textContent = 'حدث خطأ، حاول مجدداً';
    vidSubmitBtn.disabled = false;
  }
});

// ============================================================
// SPECIES SELECT FOR REPORT FORM
// ============================================================
const rpSelect = document.getElementById('rp-species');
SPECIES.forEach(s=>{
  const opt = document.createElement('option');
  opt.value = s.id; opt.textContent = `${s.kindLabel==='سمك'?'🐟':'🌿'} ${s.name}`;
  rpSelect.appendChild(opt);
});

const rpGovSelect = document.getElementById('rp-gov');
IRAQ_GOVERNORATES.forEach(g=>{
  const opt = document.createElement('option');
  opt.value = g; opt.textContent = g;
  rpGovSelect.appendChild(opt);
});

// ---------- فلترة الخريطة حسب النوع/المحافظة ----------
const filterSpeciesSelect = document.getElementById('filter-species');
const filterGovSelect = document.getElementById('filter-gov');
SPECIES.forEach(s=>{
  const opt = document.createElement('option');
  opt.value = s.id; opt.textContent = `${s.kindLabel==='سمك'?'🐟':'🌿'} ${s.name}`;
  filterSpeciesSelect.appendChild(opt);
});
IRAQ_GOVERNORATES.forEach(g=>{
  const opt = document.createElement('option');
  opt.value = g; opt.textContent = g;
  filterGovSelect.appendChild(opt);
});

let mapMarkerRefs = []; // {marker, species, gov}
function applyMapFilters(){
  const fSpecies = filterSpeciesSelect.value;
  const fGov = filterGovSelect.value;
  mapMarkerRefs.forEach(ref=>{
    const matchesSpecies = !fSpecies || ref.species === fSpecies;
    const matchesGov = !fGov || ref.gov === fGov;
    const show = matchesSpecies && matchesGov;
    const onMap = window.__leafletMap.hasLayer(ref.marker);
    if(show && !onMap) ref.marker.addTo(window.__leafletMap);
    if(!show && onMap) window.__leafletMap.removeLayer(ref.marker);
  });
  renderReportsList(); // القائمة النصية تحترم نفس الفلاتر
}
filterSpeciesSelect.addEventListener('change', applyMapFilters);
filterGovSelect.addEventListener('change', applyMapFilters);
document.getElementById('filter-reset').addEventListener('click', ()=>{
  filterSpeciesSelect.value=''; filterGovSelect.value=''; applyMapFilters();
});

// ============================================================
// MAP
// ============================================================
let pickedLatLng = null;
let pickMarker = null;
const latInput = document.getElementById('rp-lat');
const lngInput = document.getElementById('rp-lng');

function setPickedLocation(lat, lng, fromMap){
  pickedLatLng = {lat, lng};
  latInput.value = lat.toFixed(5);
  lngInput.value = lng.toFixed(5);
  document.getElementById('pick-note').style.color = 'var(--gold-soft)';
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
    const marker = L.marker([pt.lat,pt.lng], {icon:documentedIcon('#c9a227')})
      .addTo(map)
      .bindPopup(`<b>${sp?sp.name:pt.species}</b><br>${pt.place}<br><span style="color:#666">${pt.note}</span>`);
    mapMarkerRefs.push({marker, species:pt.species, gov:pt.gov||null});
  });

  loadCommunityReports(map, documentedIcon);
  loadVideoFeed(); // يعيد أيضاً وضع نقاط الفيديوهات بعد جهوزية الخريطة

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

// ---------- لصق موقع من تطبيقات الخرائط (رابط أو نص إحداثيات) ----------
function parsePastedLocation(text){
  text = text.trim();
  if(!text) return null;

  // 1) نص إحداثيات مباشر: "31.0559, 46.2569" أو "31.0559 46.2569"
  let m = text.match(/(-?\d{1,2}\.\d{3,})\s*[,\s]\s*(-?\d{1,3}\.\d{3,})/);
  if(m){
    const lat = parseFloat(m[1]), lng = parseFloat(m[2]);
    if(Math.abs(lat) <= 90 && Math.abs(lng) <= 180) return {lat, lng};
  }

  // 2) رابط قوقل مابس بصيغة @lat,lng,zoom
  m = text.match(/@(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if(m) return {lat: parseFloat(m[1]), lng: parseFloat(m[2])};

  // 3) رابط بصيغة ?q=lat,lng أو &q=lat,lng
  m = text.match(/[?&]q=(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if(m) return {lat: parseFloat(m[1]), lng: parseFloat(m[2])};

  // 4) رابط بصيغة ll=lat,lng
  m = text.match(/[?&]ll=(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if(m) return {lat: parseFloat(m[1]), lng: parseFloat(m[2])};

  // 5) صيغة !3dLAT!4dLNG (تظهر أحياناً في روابط أماكن مُثبّتة بقوقل مابس)
  m = text.match(/!3d(-?\d{1,2}\.\d+)!4d(-?\d{1,3}\.\d+)/);
  if(m) return {lat: parseFloat(m[1]), lng: parseFloat(m[2])};

  return null;
}

document.getElementById('rp-paste-btn').addEventListener('click', ()=>{
  const raw = document.getElementById('rp-paste').value;
  const loc = parsePastedLocation(raw);
  if(loc){
    setPickedLocation(loc.lat, loc.lng, false);
  }else{
    document.getElementById('pick-note').style.color = 'var(--rust)';
    document.getElementById('pick-note').textContent = 'تعذّر استخراج إحداثيات من النص الملصق. جرّب نسخ الإحداثيات مباشرة (مثال: 31.0559, 46.2569) أو اضغط على الخريطة يدوياً.';
  }
});

function checkFormReady(){
  const ready = pickedLatLng && rpSelect.value && rpGovSelect.value && document.getElementById('rp-place').value.trim();
  document.getElementById('rp-submit').disabled = !ready;
}
rpSelect.addEventListener('change', checkFormReady);
rpGovSelect.addEventListener('change', checkFormReady);
document.getElementById('rp-place').addEventListener('input', checkFormReady);

// ============================================================
// REPORT PHOTO ATTACHMENT
// ============================================================
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

// ============================================================
// COMMUNITY REPORTS: LOAD/SAVE (Supabase — عام لكل زوار الموقع)
// ============================================================
let ALL_REPORTS = [];

function renderStats(){
  const bar = document.getElementById('stats-bar');
  const govCount = new Set(ALL_REPORTS.map(r=>r.governorate).filter(Boolean)).size;
  bar.innerHTML = `
    <div class="stat-chip"><span class="num">${ALL_REPORTS.length}</span><span class="lbl">بلاغ مجتمعي</span></div>
    <div class="stat-chip"><span class="num">${govCount} / ${IRAQ_GOVERNORATES.length}</span><span class="lbl">محافظة مشمولة</span></div>
    <div class="stat-chip"><span class="num">${SIGHTINGS.length}</span><span class="lbl">رصد موثّق (مصادر بيئية)</span></div>
  `;
}

function getConfirmedSet(){
  try{ return new Set(JSON.parse(localStorage.getItem('rasad_confirmed')||'[]')); }
  catch(e){ return new Set(); }
}
function saveConfirmedSet(set){
  localStorage.setItem('rasad_confirmed', JSON.stringify([...set]));
}

async function confirmReport(id, btnEl){
  const confirmed = getConfirmedSet();
  if(confirmed.has(id)) return;
  const rep = ALL_REPORTS.find(r=>r.id===id);
  if(!rep) return;
  btnEl.disabled = true;
  try{
    const newCount = (rep.confirmations||0) + 1;
    const { error } = await sb.from('reports').update({confirmations:newCount}).eq('id', id);
    if(error) throw error;
    rep.confirmations = newCount;
    confirmed.add(id);
    saveConfirmedSet(confirmed);
    btnEl.textContent = `تم التأكيد ✓ (${newCount})`;
    btnEl.classList.add('confirmed');
  }catch(e){
    console.error(e);
    btnEl.disabled = false;
    alert('تعذّر تسجيل التأكيد، حاول مجدداً.');
  }
}

function generateShareCardImage(rep){
  const sp = SPECIES.find(s=>s.id===rep.species);
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1080;
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0,0,0,1080);
  g.addColorStop(0,'#0a2b29'); g.addColorStop(1,'#0f3a37');
  ctx.fillStyle = g; ctx.fillRect(0,0,1080,1080);

  ctx.fillStyle = '#c9a227';
  ctx.font = '700 42px Tajawal, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🌾 رَصَد — دليل الأنواع الغازية في العراق', 540, 90);

  const drawPhoto = (img)=>{
    if(img){
      const size = 640;
      ctx.save();
      ctx.beginPath();
      if(ctx.roundRect) ctx.roundRect(220, 150, size, size, 24);
      else ctx.rect(220, 150, size, size);
      ctx.clip();
      ctx.drawImage(img, 220, 150, size, size);
      ctx.restore();
    }
    ctx.fillStyle = '#f1e9d2';
    ctx.font = '700 46px Amiri, serif';
    ctx.fillText(sp?sp.name:rep.species, 540, 850);
    ctx.fillStyle = '#9fbfb9';
    ctx.font = '400 28px Tajawal, sans-serif';
    ctx.fillText(`📍 ${rep.place}${rep.governorate?' — محافظة '+rep.governorate:''}`, 540, 900);
    ctx.fillText(new Date(rep.created_at).toLocaleDateString('ar-IQ'), 540, 940);
    ctx.fillStyle = '#e0c15c';
    ctx.font = '700 24px Tajawal, sans-serif';
    ctx.fillText('بلاغ مجتمعي حقيقي — شارك برصدك أنت أيضاً', 540, 1000);
    return canvas.toDataURL('image/png');
  };

  if(rep.photo){
    return new Promise(resolve=>{
      const img = new Image();
      img.onload = ()=> resolve(drawPhoto(img));
      img.onerror = ()=> resolve(drawPhoto(null));
      img.src = rep.photo;
    });
  }
  return Promise.resolve(drawPhoto(null));
}

async function shareReport(id){
  const rep = ALL_REPORTS.find(r=>r.id===id);
  if(!rep) return;
  const shareUrl = `${location.origin}${location.pathname}?report=${id}`;
  try{
    const dataUrl = await generateShareCardImage(rep);
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], 'rasad-report.png', {type:'image/png'});
    if(navigator.share && navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({
        files:[file],
        title:'رَصَد — بلاغ رصد',
        text:`بلاغ رصد على تطبيق رَصَد: ${shareUrl}`
      });
    }else{
      const a = document.createElement('a');
      a.href = dataUrl; a.download = 'rasad-report.png';
      document.body.appendChild(a); a.click(); a.remove();
      prompt('انسخ رابط البلاغ للمشاركة:', shareUrl);
    }
  }catch(e){
    console.error(e);
    prompt('انسخ رابط البلاغ للمشاركة:', shareUrl);
  }
}
window.__rasad_confirmReport = confirmReport;
window.__rasad_shareReport = shareReport;

function renderReportsList(){
  const listEl = document.getElementById('reports-list');
  const fSpecies = document.getElementById('filter-species').value;
  const fGov = document.getElementById('filter-gov').value;
  const filtered = ALL_REPORTS.filter(rep=>
    (!fSpecies || rep.species===fSpecies) && (!fGov || rep.governorate===fGov)
  );
  if(filtered.length===0){
    listEl.innerHTML = '<p style="color:var(--muted);font-size:13px;">لا توجد بلاغات مطابقة للفلتر الحالي.</p>';
    return;
  }
  const confirmed = getConfirmedSet();
  listEl.innerHTML = filtered.map(rep=>{
    const sp = SPECIES.find(s=>s.id===rep.species);
    const isConfirmed = confirmed.has(rep.id);
    return `<div class="report-item">
        ${rep.photo?`<img src="${rep.photo}" alt="">`:''}
        <div class="report-item-body">
          <b>${sp?sp.name:rep.species}</b> — ${rep.place}${rep.governorate?` (${rep.governorate})`:''}
          <div class="meta">${rep.notes?rep.notes+' · ':''}${new Date(rep.created_at).toLocaleDateString('ar-IQ')}</div>
          <div class="coords">📍 ${rep.lat.toFixed(5)}, ${rep.lng.toFixed(5)}</div>
          <div class="report-actions">
            <button class="mini-btn ${isConfirmed?'confirmed':''}" onclick="window.__rasad_confirmReport('${rep.id}', this)">${isConfirmed?`تم التأكيد ✓ (${rep.confirmations||0})`:`✅ أنا رأيته أيضاً (${rep.confirmations||0})`}</button>
            <button class="mini-btn" onclick="window.__rasad_shareReport('${rep.id}')">📤 مشاركة</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

async function loadCommunityReports(map, iconFn){
  const listEl = document.getElementById('reports-list');
  if(!sb){
    listEl.innerHTML = '<p style="color:var(--muted);font-size:13px;">اضبط إعدادات Supabase في config.js لعرض وحفظ بلاغات المجتمع (راجع supabase_schema.sql).</p>';
    renderStats();
    return;
  }
  try{
    const { data: reports, error } = await sb.from('reports').select('*').order('created_at', {ascending:false});
    if(error) throw error;
    ALL_REPORTS = reports || [];
    renderStats();
    ALL_REPORTS.forEach(rep=>{
      const sp = SPECIES.find(s=>s.id===rep.species);
      const marker = L.marker([rep.lat,rep.lng], {icon:iconFn('#4fb0a5')})
        .addTo(map)
        .bindPopup(`<b>${sp?sp.name:rep.species}</b><br>${rep.place}${rep.photo?`<br><img src="${rep.photo}" style="width:120px;border-radius:8px;margin-top:6px;">`:''}<br><span style="color:#666">${rep.notes||''}</span>`);
      mapMarkerRefs.push({marker, species:rep.species, gov:rep.governorate||null});
      rep.__marker = marker;
    });
    renderReportsList();

    // دعم رابط مشاركة مباشر ?report=ID
    const params = new URLSearchParams(location.search);
    const targetId = params.get('report');
    if(targetId){
      const target = ALL_REPORTS.find(r=>r.id===targetId);
      if(target){
        document.querySelector('.tab[data-tab="map"]').click();
        setTimeout(()=>{
          map.setView([target.lat, target.lng], 12);
          target.__marker.openPopup();
        }, 300);
      }
    }
  }catch(e){
    console.error('report load error', e);
    listEl.innerHTML = '<p style="color:var(--rust);font-size:13px;">تعذّر تحميل البلاغات. تحقق من إعدادات Supabase.</p>';
  }
}

// ---------- حد أقصى للإضافات اليومية من نفس الجهاز (حماية خفيفة، بدون حسابات) ----------
function checkRateLimit(kind, limit){
  const today = new Date().toISOString().slice(0,10);
  const key = `rasad_rl_${kind}_${today}`;
  const count = parseInt(localStorage.getItem(key)||'0', 10);
  if(count >= limit) return false;
  localStorage.setItem(key, String(count+1));
  return true;
}

document.getElementById('rp-submit').addEventListener('click', async ()=>{
  if(!sbReadyOrWarn()) return;
  if(!checkRateLimit('report', 5)){
    alert('لقد وصلت للحد الأقصى من البلاغات اليوم (5) من هذا الجهاز. حاول غداً أو استخدم جهازاً آخر.');
    return;
  }
  const btn = document.getElementById('rp-submit');
  btn.disabled = true; btn.textContent = 'جارٍ الإضافة...';
  const report = {
    species: rpSelect.value,
    governorate: rpGovSelect.value || null,
    place: document.getElementById('rp-place').value.trim(),
    notes: document.getElementById('rp-notes').value.trim() || null,
    lat: pickedLatLng.lat, lng: pickedLatLng.lng,
    photo: reportPhotoData || null
  };
  try{
    const { error } = await sb.from('reports').insert(report);
    if(error) throw error;
    btn.textContent = 'تمت الإضافة ✓';
    setTimeout(()=>{ location.reload(); }, 900);
  }catch(e){
    console.error(e);
    btn.textContent = 'حدث خطأ، حاول مجدداً';
    btn.disabled = false;
  }
});

// ============================================================
// PHOTO ID (identification tool, separate from report photo)
// ============================================================
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
    const proxy = window.AI_PROXY_URL;
    let text;
    if(proxy){
      const res = await fetch(proxy, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ prompt, image_base64: currentImageBase64, image_media_type: currentImageMedia })
      });
      const data = await res.json();
      text = (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
    }else{
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
      text = (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
    }
    idResult.textContent = text || 'تعذّر الحصول على نتيجة، حاول بصورة أخرى.';
  }catch(e){
    idResult.textContent = 'حدث خطأ أثناء التحليل. تحقق من الاتصال وحاول مرة أخرى.';
  }
  analyzeBtn.disabled = false;
  analyzeBtn.textContent = 'تحليل صورة أخرى';
});
