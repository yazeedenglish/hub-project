       /**************************************************************
         * 1. COMPREHENSIVE WORD DICTIONARY FOR ALL 100 SENTENCES
         **************************************************************/
       const WORD_DICTIONARY = {
    // ================= ARTICLES, PRONOUNS & DETERMINERS =================
    "a": "أداة تنكير",
    "an": "أداة تنكير",
    "the": "الـ (أداة التعريف)",
    "i": "أنا",
    "my": "لي / الخاص بي",
    "me": "ني / لي",
    "we": "نحن",
    "our": "لنا / الخاص بنا",
    "us": "نا / لنا",
    "he": "هو",
    "his": "له / الخاص به",
    "she": "هي",
    "her": "لها / ها",
    "it": "هو / هي (لغير العاقل)",
    "they": "هم",
    "their": "لهم / الخاص بهم",
    "them": "هم / إياهم",
    "this": "هذا / هذه",
    "that": "ذلك / تلك / أنَّ",
    "each": "كل",
    "every": "كل",
    "all": "كل / جميع",
    "some": "بعض",
    "many": "العديد من",
    "more": "أكثر",
    "both": "كلاهما",
    "another": "آخر",
    "other": "آخر / أخرى",
    "each": "كل",
    "one": "واحد",
    "nothing": "لا شيء",
    "something": "شيء ما",
    "whether": "ما إذا",
    "when": "عندما",
    "while": "بينما",
    "which": "الذي / التي / أيّ",
    "who": "من / الذي",
    "what": "ماذا / ما",
    "how": "كيف",
    "where": "أين / حيث",
    "because": "لأن",
    "if": "إذا",
    "and": "و",
    "or": "أو",
    "but": "لكن",
    "then": "ثم",
    "than": "من (للمقارنة)",
    "as": "كما / بصفته",
    "not": "ليس / لا",
    "no": "لا",
    "yes": "نعم",

    // ================= PREPOSITIONS =================
    "to": "إلى / لـ",
    "in": "في",
    "on": "على / في",
    "at": "في / عند",
    "for": "من أجل / لـ",
    "with": "مع / بـ",
    "from": "من",
    "of": "من / الخاص بـ",
    "by": "بواسطة / بجانب / بحلول",
    "about": "عن / حول",
    "after": "بعد",
    "before": "قبل",
    "near": "بالقرب من",
    "inside": "داخل",
    "into": "إلى داخل",
    "through": "عبر / من خلال",
    "during": "أثناء",
    "without": "بدون",
    "between": "بين",
    "around": "حول",
    "over": "فوق / على امتداد",
    "under": "تحت",
    "along": "على امتداد",
    "onto": "إلى فوق / على",
    "within": "ضمن / في غضون",
    "across": "عبر",
    "behind": "خلف",
    "beside": "بجانب",
    "nearby": "بالقرب",
    "out": "خارجًا",
    "off": "إيقاف / بعيدًا عن",
    "away": "بعيدًا",
    "back": "عودة / إلى الخلف",
    "together": "معًا",
    "aboard": "على متن",
    "around": "حول",

    // ================= VERBS: COMMON ACTIONS =================
    "be": "يكون",
    "is": "يكون / تكون",
    "are": "يكونون / تكونون",
    "am": "أكون",
    "was": "كان / كانت",
    "were": "كانوا / كنتم",
    "been": "كان / قد كان",
    "have": "لديّ / يملك",
    "has": "لديه / لديها",
    "had": "كان لديه",
    "do": "يفعل",
    "does": "يفعل",
    "did": "فعل",
    "make": "يصنع / يُعدّ",
    "makes": "يصنع / يُعدّ",
    "made": "صنع / أعدّ",
    "get": "يحصل على / يصبح",
    "gets": "يحصل على / يصبح",
    "got": "حصل على",
    "put": "يضع",
    "take": "يأخذ",
    "takes": "يأخذ",
    "bring": "يحضر",
    "brings": "يحضر",
    "choose": "يختار",
    "chooses": "يختار",
    "picked": "اختار",
    "pick": "يختار / يلتقط",
    "find": "يجد",
    "finds": "يجد",
    "leave": "يغادر / يترك",
    "leaves": "يغادر",
    "return": "يعود",
    "returns": "يعود",
    "walk": "يمشي",
    "walks": "يمشي",
    "drive": "يقود",
    "drives": "يقود",
    "sit": "يجلس",
    "sits": "يجلس",
    "stand": "يقف",
    "wait": "ينتظر",
    "waits": "ينتظر",
    "open": "يفتح",
    "opens": "يفتح",
    "close": "يغلق",
    "closes": "يغلق",
    "wash": "يغسل",
    "washes": "يغسل",
    "brush": "يفرش / ينظف بالفرشاة",
    "brushes": "يفرش / ينظف بالفرشاة",
    "wake": "يستيقظ / يوقظ",
    "wakes": "يستيقظ / يوقظ",
    "splash": "يرشّ / ينثر الماء",
    "splashing": "رشّ الماء",
    "drink": "يشرب",
    "drinks": "يشرب",
    "eat": "يأكل",
    "eats": "يأكل",
    "read": "يقرأ",
    "reads": "يقرأ",
    "write": "يكتب",
    "writes": "يكتب",
    "talk": "يتحدث",
    "talks": "يتحدث",
    "speak": "يتحدث / يتكلم",
    "speaks": "يتحدث",
    "ask": "يسأل",
    "asks": "يسأل",
    "answer": "يجيب / إجابة",
    "answers": "يجيب / إجابات",
    "help": "يساعد",
    "helps": "يساعد",
    "learn": "يتعلم",
    "learns": "يتعلم",
    "study": "يدرس / يذاكر",
    "studies": "يدرس",
    "work": "يعمل / عمل",
    "works": "يعمل",
    "play": "يلعب / يعزف",
    "plays": "يلعب / يعزف",
    "pay": "يدفع",
    "pays": "يدفع",
    "check": "يتحقق من / يفحص",
    "checks": "يتحقق من / يفحص",
    "keep": "يحافظ على / يحتفظ بـ",
    "keeps": "يحافظ على / يحتفظ بـ",
    "feel": "يشعر",
    "feels": "يشعر / يبدو",
    "seem": "يبدو",
    "seems": "يبدو",
    "look": "ينظر / يبدو",
    "looks": "ينظر / يبدو",
    "smell": "يشم / رائحة",
    "smells": "تفوح رائحته / يشم",
    "taste": "يتذوق / مذاق",
    "tastes": "مذاقه / يتذوق",
    "sound": "يبدو / صوت",
    "sounds": "يبدو / أصوات",
    "show": "يعرض / يُظهر",
    "shows": "يعرض / يُظهر",
    "share": "يشارك / يتقاسم",
    "shares": "يشارك",
    "finish": "ينهي",
    "finishes": "ينهي",
    "start": "يبدأ",
    "starts": "يبدأ",
    "begin": "يبدأ",
    "begins": "يبدأ",
    "continue": "يستمر",
    "continues": "يستمر",
    "stop": "يتوقف",
    "stops": "يتوقف",
    "move": "يتحرك / ينقل",
    "moves": "يتحرك",
    "grow": "ينمو / يطوّر",
    "grows": "ينمو",
    "build": "يبني",
    "builds": "يبني",
    "improve": "يحسّن / يتحسن",
    "improves": "يحسّن / يتحسن",
    "develop": "يطوّر",
    "develops": "يطوّر",
    "change": "يتغير / يغيّر",
    "changes": "يتغير / يغيّر",
    "turn": "يحوّل / يدور",
    "turns": "يحوّل / يدور",
    "avoid": "يتجنب",
    "avoids": "يتجنب",
    "reduce": "يقلل",
    "reduces": "يقلل",
    "allow": "يسمح",
    "allows": "يسمح",
    "require": "يتطلب",
    "requires": "يتطلب",
    "depend": "يعتمد",
    "depends": "يعتمد",
    "remain": "يبقى",
    "remains": "يبقى",
    "become": "يصبح",
    "becomes": "يصبح",
    "feel": "يشعر",
    "plan": "يخطط / خطة",
    "plans": "يخطط / خطط",
    "prepare": "يجهز / يستعد",
    "prepares": "يجهز / يستعد",
    "pack": "يحزم / يجهز",
    "packs": "يحزم / يجهز",
    "unpack": "يفرغ الأمتعة",
    "unpacks": "يفرغ الأمتعة",
    "wrap": "يلفّ",
    "wraps": "يلفّ",
    "load": "يحمّل",
    "loads": "يحمّل",
    "download": "ينزّل",
    "downloads": "ينزّل",
    "compare": "يقارن",
    "compares": "يقارن",
    "track": "يتابع / يسجل",
    "tracks": "يتابع / يسجل",
    "save": "يدخر / يحفظ",
    "saves": "يدخر / يحفظ",
    "spend": "ينفق / يقضي وقتًا",
    "spends": "ينفق / يقضي وقتًا",
    "invest": "يستثمر",
    "invests": "يستثمر",
    "deliver": "يقدم / يوصل",
    "delivers": "يقدم / يوصل",
    "reach": "يصل إلى",
    "reaches": "يصل إلى",
    "adapt": "يتكيف",
    "adapts": "يتكيف",
    "resolve": "يحلّ",
    "resolves": "يحلّ",
    "prevent": "يمنع",
    "prevents": "يمنع",
    "correct": "يصحح",
    "corrects": "يصحح",
    "recognize": "يقدّر / يتعرف على",
    "recognizing": "تقدير / التعرف على",
    "encourage": "يشجع",
    "encourages": "يشجع",
    "inspire": "يلهم",
    "inspires": "يلهم",
    "capture": "يجذب / يلتقط",
    "captures": "يجذب / يلتقط",
    "convey": "ينقل / يعبر عن",
    "reinforce": "يعزز",
    "reinforces": "يعزز",
    "broaden": "يوسّع",
    "broadens": "يوسّع",
    "strengthen": "يقوي",
    "strengthens": "يقوي",
    "practise": "يمارس / يتدرب",
    "practice": "يمارس / ممارسة",
    "protect": "يحمي",
    "protecting": "حماية",
    "appreciate": "يقدّر",
    "appreciates": "يقدّر",
    "applauds": "يصفق",
    "applaud": "يصفق",
    "resonate": "يترك أثرًا / يتردد صداه",
    "compromise": "يُخلّ بـ / يتنازل عن",
    "compromising": "الإخلال بـ / التنازل عن",
    "delegate": "يفوّض",
    "delegating": "تفويض",
    "navigate": "يتعامل مع / يشق طريقه",
    "navigating": "التعامل مع / شق الطريق",
    "scale": "يوسّع نطاق العمل",
    "scaling": "توسيع نطاق العمل",
    "found": "يؤسس",
    "founders": "المؤسسون",
    "fund": "يموّل",
    "funds": "يموّل / أموال",
    "funding": "تمويل",
    "test": "يختبر",
    "tests": "يختبر",
    "examine": "يفحص",
    "examines": "يفحص",
    "listen": "يستمع",
    "listens": "يستمع",
    "pour": "يسكب",
    "pours": "يسكب",
    "gather": "يجتمع / يجمع",
    "gathers": "يجتمع / يجمع",
    "celebrate": "يحتفل",
    "celebrates": "يحتفل",
    "applauds": "يصفق",
    "wind": "يلتف / ينعطف",
    "winds": "يلتف / ينعطف",
    "line": "يصطف على امتداد / طابور",
    "lines": "يصطف على امتداد",
    "drop": "ينزل / يُسقط",
    "drops": "ينزل / يُسقط",
    "silence": "يكتم الصوت / صمت",
    "silences": "يكتم الصوت",
    "shut": "يغلق",
    "shuts": "يغلق",
    "cool": "يبرّد / يهدأ",
    "cooling": "التهدئة / التبريد",
    "lift": "يرفع",
    "lifts": "يرفع",
    "applies": "ينطبق / يطبق",
    "belong": "ينتمي",
    "belongs": "ينتمي",
    "queue": "يصطف / طابور",
    "queues": "يصطف",
    "applies": "ينطبق / يطبق",
    "leads": "يؤدي إلى / يقود",
    "lead": "يقود / يؤدي إلى",
    "earn": "يكسب",
    "earns": "يكسب",
    "learn": "يتعلم",
    "learning": "التعلم",
    "breathe": "يتنفس",
    "breathing": "التنفس",
    "relax": "يسترخي",
    "relaxes": "يسترخي",
    "returning": "العودة",
    "making": "إعداد / صنع",
    "running": "الجري / التشغيل",
    "reading": "القراءة",
    "moving": "الانتقال / التحرك",

    // ================= PHRASAL VERBS & EXPRESSIONS =================
    "wake up": "يستيقظ",
    "get dressed": "يرتدي ملابسه",
    "sit down": "يجلس",
    "look around": "يتجول / ينظر حوله",
    "pick up": "يلتقط / يشتري",
    "put away": "يعيد إلى مكانه",
    "turn off": "يطفئ",
    "shut down": "يغلق / يوقف التشغيل",
    "take off": "يقلع / يخلع",
    "drop off": "يوصل / ينزل شخصًا",
    "fill with": "يملأ بـ",
    "set the table": "يجهز المائدة",
    "take notes": "يدوّن الملاحظات",
    "feel better": "يشعر بتحسن",
    "get some rest": "يحصل على قسط من الراحة",
    "leave behind": "يترك خلفه",
    "on time": "في الموعد",
    "the night before": "في الليلة السابقة",
    "by card": "باستخدام البطاقة",
    "by the window": "بجانب النافذة",
    "peace of mind": "راحة البال",
    "stage fright": "رهبة المسرح",
    "window seat": "مقعد بجانب النافذة",
    "coffee break": "استراحة قهوة",
    "carry-on bag": "حقيبة يد للسفر",
    "heart rate": "معدل ضربات القلب",
    "risk of injury": "خطر الإصابة",
    "emergency fund": "صندوق الطوارئ",
    "late fee": "رسوم التأخير",
    "market conditions": "ظروف السوق",
    "angel investor": "مستثمر ملائكي",
    "market research": "دراسة السوق",
    "business decision": "قرار تجاري",
    "prototype": "نموذج أولي",
    "target audience": "الجمهور المستهدف",
    "key point": "نقطة أساسية",
    "constructive feedback": "ملاحظات بنّاءة",
    "team member": "عضو في الفريق",
    "personal growth": "النمو الشخصي",
    "small steps": "خطوات صغيرة",
    "lasting progress": "تقدم مستمر",
    "impulse purchase": "شراء اندفاعي",
    "monthly expenses": "المصاريف الشهرية",
    "financial planning": "التخطيط المالي",
    "remote work": "العمل عن بُعد",
    "cloud tools": "الأدوات السحابية",
    "video call": "مكالمة فيديو",
    "thank-you email": "رسالة شكر عبر البريد الإلكتروني",
    "coffee shop": "مقهى",
    "main gate": "البوابة الرئيسية",
    "old town": "البلدة القديمة",
    "city center": "وسط المدينة",
    "travel documents": "وثائق السفر",
    "flight prices": "أسعار الرحلات الجوية",
    "passport requirements": "متطلبات جواز السفر",
    "visa requirements": "متطلبات التأشيرة",
    "green vegetables": "الخضراوات الخضراء",
    "paper bags": "أكياس ورقية",
    "chicken soup": "حساء الدجاج",
    "orange juice": "عصير البرتقال",
    "fresh bread": "خبز طازج",
    "chocolate cake": "كعكة الشوكولاتة",
    "protein shake": "مخفوق البروتين",
    "new apartment": "شقة جديدة",
    "fragile items": "أغراض قابلة للكسر",
    "personal life": "الحياة الشخصية",
    "digital advertising": "الإعلانات الرقمية",
    "sustainable profits": "أرباح مستدامة",
    "sustainable success": "نجاح مستدام",
    "public speaking": "التحدث أمام الجمهور / فن الإلقاء",
    "eye contact": "التواصل البصري",
    "body language": "لغة الجسد",
    "well-designed": "مصمم بعناية",
    "well-timed": "في التوقيت المناسب",
    "long-term": "طويل الأجل",
    "short-term": "قصير الأجل",
    "offline maps": "خرائط دون اتصال بالإنترنت",
    "video call": "مكالمة فيديو",
    "carry-on": "محمول / حقيبة يد للطائرة",

    // ================= ADVERBS & TIME =================
    "always": "دائمًا",
    "usually": "عادةً",
    "often": "غالبًا",
    "sometimes": "أحيانًا",
    "never": "أبدًا",
    "daily": "يوميًا",
    "weekly": "أسبوعيًا",
    "regularly": "بانتظام",
    "consistently": "باستمرار / بانتظام",
    "now": "الآن",
    "today": "اليوم",
    "tomorrow": "غدًا",
    "yesterday": "أمس",
    "early": "مبكرًا",
    "soon": "قريبًا",
    "finally": "أخيرًا",
    "first": "أولًا",
    "next": "التالي / بعد ذلك",
    "then": "ثم",
    "quickly": "بسرعة",
    "slowly": "ببطء",
    "carefully": "بعناية",
    "politely": "بأدب",
    "clearly": "بوضوح",
    "calmly": "بهدوء",
    "gently": "بلطف",
    "patiently": "بصبر",
    "safely": "بأمان",
    "warmly": "بحرارة / بترحاب",
    "easily": "بسهولة",
    "steadily": "بثبات",
    "naturally": "بطبيعية",
    "truly": "حقًا",
    "very": "جدًا",
    "much": "كثيرًا",
    "widely": "على نطاق واسع",
    "quickly": "بسرعة",
    "carefully": "بعناية",
    "regular": "منتظم",
    "regularly": "بانتظام",
    "nearby": "بالقرب",
    "around": "حول",
    "away": "بعيدًا",
    "aboard": "على متن",
    "online": "عبر الإنترنت",
    "offline": "دون اتصال بالإنترنت",

    // ================= A1: MORNING ROUTINE =================
    "sunlight": "ضوء الشمس",
    "fills": "يملأ",
    "quiet": "هادئ",
    "room": "غرفة",
    "wake": "يستيقظ",
    "window": "نافذة",
    "splash": "يرشّ الماء",
    "face": "وجه",
    "brush": "يفرش / ينظف بالفرشاة",
    "teeth": "أسنان",
    "make": "يعدّ / يصنع",
    "makes": "يعدّ / يصنع",
    "bed": "سرير",
    "cup": "كوب",
    "hot": "ساخن",
    "tea": "شاي",
    "eat": "يأكل",
    "eggs": "بيض",
    "bread": "خبز",
    "breakfast": "وجبة الإفطار",
    "get dressed": "يرتدي ملابسه",
    "clothes": "ملابس",
    "keys": "مفاتيح",
    "bag": "حقيبة",
    "finally": "أخيرًا",
    "leave": "يغادر",
    "house": "منزل",
    "smile": "ابتسامة",

    // ================= A1: AT THE CAFÉ =================
    "café": "مقهى",
    "cafe": "مقهى",
    "nearby": "بالقرب",
    "fresh": "طازج",
    "coffee": "قهوة",
    "smells": "تفوح رائحته",
    "wonderful": "رائع",
    "choose": "يختار",
    "chooses": "يختار",
    "small": "صغير",
    "table": "طاولة",
    "window": "نافذة",
    "waiter": "النادل",
    "brings": "يحضر",
    "menu": "قائمة الطعام",
    "order": "يطلب",
    "slice": "شريحة / قطعة",
    "cake": "كعكة",
    "soft": "هادئ / ناعم",
    "music": "موسيقى",
    "plays": "تُعزف / يلعب",
    "arrives": "يصل",
    "minutes": "دقائق",
    "later": "لاحقًا",
    "read": "يقرأ",
    "book": "كتاب",
    "drink": "يشرب",
    "finish": "ينتهي",
    "pay": "يدفع",
    "card": "بطاقة",
    "café": "مقهى",
    "relaxed": "مسترخٍ",

    // ================= A1: GROCERY SHOPPING =================
    "grocery": "بقالة / مواد غذائية",
    "groceries": "مشتريات البقالة",
    "shopping": "التسوق",
    "saturday": "السبت",
    "take": "يأخذ",
    "shopping cart": "عربة تسوق",
    "cart": "عربة",
    "red": "أحمر",
    "apples": "تفاح",
    "basket": "سلة",
    "vegetables": "خضراوات",
    "green": "أخضر",
    "pick up": "يشتري / يلتقط",
    "milk": "حليب",
    "bakery": "مخبز",
    "sells": "يبيع",
    "price": "سعر",
    "item": "سلعة / عنصر",
    "items": "سلع / عناصر",
    "queue": "طابور",
    "cashier": "أمين الصندوق",
    "paper": "ورقي",
    "bags": "أكياس",
    "drive": "يقود",
    "safely": "بأمان",

    // ================= A1: FAMILY DINNER =================
    "evening": "المساء",
    "family": "العائلة",
    "gathers": "يجتمع",
    "dinner": "العشاء",
    "mother": "الأم",
    "chicken": "دجاج",
    "soup": "حساء",
    "salad": "سلطة",
    "father": "الأب",
    "sets": "يجهز / يرتب",
    "table": "طاولة / مائدة",
    "sit": "يجلس",
    "talk": "يتحدث",
    "day": "يوم",
    "rice": "أرز",
    "meat": "لحم",
    "sister": "أخت",
    "pours": "يسكب",
    "orange": "برتقال",
    "juice": "عصير",
    "after": "بعد",
    "dishes": "أطباق",
    "laughter": "ضحك",
    "happy": "سعيد",
    "house": "منزل",

    // ================= A2: UNIVERSITY =================
    "university": "جامعة",
    "campus": "حرم الجامعة",
    "bus": "حافلة",
    "arrives": "يصل",
    "eight": "الثامنة / ثمانية",
    "students": "طلاب",
    "enter": "يدخل",
    "main": "رئيسي",
    "gate": "بوابة",
    "find": "يجد",
    "seat": "مقعد",
    "classroom": "قاعة الدراسة",
    "professor": "أستاذ جامعي",
    "lecture": "محاضرة",
    "take notes": "يدوّن الملاحظات",
    "clear": "واضح",
    "notes": "ملاحظات",
    "lesson": "درس",
    "student": "طالب",
    "asks": "يسأل",
    "question": "سؤال",
    "meet": "يلتقي",
    "friends": "أصدقاء",
    "lunch": "الغداء",
    "library": "مكتبة",
    "science": "العلوم",
    "proud": "فخور",

    // ================= A2: WEEKEND TRIP =================
    "weekend": "نهاية الأسبوع",
    "trip": "رحلة",
    "pack": "يحزم / يجهز",
    "bags": "حقائب",
    "friday": "الجمعة",
    "road": "طريق",
    "winds": "يمتد متعرجًا",
    "hills": "تلال",
    "tall": "طويل",
    "trees": "أشجار",
    "line": "يصطف على امتداد",
    "stop": "يتوقف",
    "coffee break": "استراحة قهوة",
    "cozy": "مريح ودافئ",
    "hotel": "فندق",
    "welcomes": "يرحب بـ",
    "explore": "يستكشف",
    "old": "قديم",
    "town": "بلدة",
    "local": "محلي",
    "food": "طعام",
    "delicious": "لذيذ",
    "photos": "صور",
    "sunset": "غروب الشمس",
    "fire": "نار",
    "sunday": "الأحد",
    "return": "يعود",

    // ================= A2: VISITING THE DOCTOR =================
    "throat": "حلق",
    "hurts": "يؤلم",
    "call": "يتصل",
    "clinic": "عيادة",
    "nurse": "ممرضة",
    "temperature": "درجة الحرارة",
    "wait": "ينتظر",
    "doctor": "طبيب",
    "listen": "يستمع",
    "chest": "صدر",
    "examines": "يفحص",
    "prescription": "وصفة طبية",
    "pharmacist": "صيدلي",
    "medicine": "دواء",
    "rest": "راحة / يستريح",
    "plenty": "الكثير من",
    "water": "ماء",
    "feel better": "يشعر بتحسن",
    "soon": "قريبًا",

    // ================= A2: RESTAURANT =================
    "restaurant": "مطعم",
    "busy": "مزدحم",
    "friendly": "ودود",
    "host": "مضيف / موظف استقبال",
    "shows": "يرشد / يعرض",
    "tables": "طاولات",
    "candles": "شموع",
    "glow": "يتوهج",
    "softly": "بهدوء",
    "look at": "ينظر إلى",
    "garlic": "ثوم",
    "pasta": "معكرونة",
    "chef": "طاهٍ",
    "prepares": "يعدّ",
    "grilled": "مشوي",
    "fish": "سمك",
    "bill": "فاتورة",
    "full": "شبعان / ممتلئ",

    // ================= B1: JOB INTERVIEW =================
    "job": "وظيفة",
    "interview": "مقابلة",
    "research": "يبحث / بحث",
    "company": "شركة",
    "suit": "بدلة",
    "night": "ليلة",
    "arrive": "يصل",
    "fifteen": "خمسة عشر",
    "minutes": "دقائق",
    "manager": "مدير",
    "greets": "يحيّي / يستقبل",
    "explain": "يشرح",
    "skills": "مهارات",
    "fit": "يناسب",
    "role": "دور / وظيفة",
    "difficult": "صعب",
    "questions": "أسئلة",
    "calmly": "بهدوء",
    "ideas": "أفكار",
    "team": "فريق",
    "honestly": "بصدق",
    "trust": "ثقة",
    "opportunities": "فرص",
    "growth": "نمو / تطور",
    "thank-you": "شكر",
    "email": "بريد إلكتروني",

    // ================= B1: HEALTHY LIFESTYLE =================
    "health": "صحة",
    "starts": "يبدأ",
    "simple": "بسيط",
    "habits": "عادات",
    "glass": "كوب / زجاج",
    "stretch": "تمدد",
    "muscles": "عضلات",
    "brisk": "سريع ونشيط",
    "energy": "طاقة",
    "healthy": "صحي",
    "meals": "وجبات",
    "protein": "بروتين",
    "try": "يحاول",
    "sugary": "محلّى بالسكر",
    "breaks": "استراحات",
    "rest": "يريح / راحة",
    "eyes": "عيون",
    "deep": "عميق",
    "breaths": "أنفاس",
    "helps": "يساعد",
    "screens": "شاشات",
    "turn off": "يطفئ",
    "bed": "سرير",
    "night's sleep": "نوم الليل",
    "refreshed": "منتعش",

    // ================= B1: PLANNING A JOURNEY =================
    "journey": "رحلة",
    "destination": "وجهة",
    "compare": "يقارن",
    "flight": "رحلة جوية",
    "flights": "رحلات جوية",
    "prices": "أسعار",
    "online": "عبر الإنترنت",
    "book": "يحجز / كتاب",
    "window seat": "مقعد بجانب النافذة",
    "hotel": "فندق",
    "city": "مدينة",
    "center": "مركز / وسط",
    "free time": "وقت فراغ",
    "itinerary": "جدول الرحلة",
    "passport": "جواز سفر",
    "visa": "تأشيرة",
    "requirements": "متطلبات",
    "lightweight": "خفيف الوزن",
    "clothes": "ملابس",
    "summer": "الصيف",
    "download": "ينزّل",
    "offline": "دون اتصال بالإنترنت",
    "maps": "خرائط",
    "travel": "سفر",
    "documents": "وثائق",
    "adventure": "مغامرة",

    // ================= B1: AIRPORT =================
    "taxi": "سيارة أجرة",
    "drops off": "يوصل / ينزل",
    "terminal": "صالة المطار",
    "departure": "مغادرة",
    "boards": "لوحات",
    "display": "يعرض",
    "flight times": "مواعيد الرحلات",
    "airline": "شركة طيران",
    "employee": "موظف",
    "weighs": "يزن",
    "luggage": "أمتعة",
    "security": "الأمن",
    "staff": "موظفون / طاقم",
    "screen": "يفحص / شاشة",
    "carry-on": "حقيبة يد للطائرة",
    "gift": "هدية",
    "shops": "متاجر",
    "large": "كبير",
    "windows": "نوافذ",
    "view": "منظر / رؤية",
    "announcement": "إعلان صوتي",
    "boarding": "الصعود إلى الطائرة",
    "passengers": "مسافرون",
    "gate": "بوابة",
    "cabin": "مقصورة",
    "crew": "طاقم",
    "welcomes": "يرحب",
    "engines": "محركات",
    "roar": "يدوي",
    "takes off": "يقلع",

    // ================= B2: ENVIRONMENTAL PROTECTION =================
    "environment": "البيئة",
    "pollution": "التلوث",
    "reduce": "يقلل",
    "emissions": "انبعاثات",
    "renewable": "متجدد",
    "resources": "موارد",
    "conservation": "الحفاظ على",
    "waste": "نفايات",
    "recycle": "يعيد التدوير",
    "consumption": "استهلاك",
    "efficient": "فعّال",
    "electricity": "كهرباء",
    "damage": "ضرر",
    "wildlife": "الحياة البرية",
    "habitats": "موائل",
    "threatened": "مهدد",
    "disposable": "للاستخدام مرة واحدة",
    "alternatives": "بدائل",
    "awareness": "وعي",
    "campaign": "حملة",
    "encourage": "يشجع",
    "responsibility": "مسؤولية",
    "long-term": "طويل الأمد",
    "impact": "تأثير",
    "preserve": "يحافظ على",
    "sustainable": "مستدام",

    // ================= B2: FITNESS =================
    "fitness": "لياقة بدنية",
    "gym": "نادي رياضي",
    "exercise": "تمرين / يمارس الرياضة",
    "improves": "يحسن",
    "gym clothes": "ملابس النادي الرياضي",
    "shoes": "أحذية",
    "bottle": "زجاجة",
    "warming up": "الإحماء",
    "prepares": "يهيئ / يحضر",
    "joints": "مفاصل",
    "running": "الجري",
    "treadmill": "جهاز المشي",
    "raises": "يرفع",
    "heart rate": "معدل ضربات القلب",
    "lift": "يرفع",
    "weights": "أوزان",
    "strength": "قوة",
    "proper": "صحيح / مناسب",
    "form": "طريقة الأداء / شكل",
    "reduces": "يقلل",
    "risk": "خطر",
    "injury": "إصابة",
    "sets": "مجموعات التمارين",
    "trainer": "مدرب",
    "corrects": "يصحح",
    "cool down": "يهدأ تدريجيًا / تمارين التهدئة",
    "normal": "طبيعي",
    "protein shake": "مخفوق البروتين",
    "workout": "تمرين رياضي",

    // ================= B2: FINANCIAL PLANNING =================
    "financial": "مالي",
    "planning": "تخطيط",
    "secure": "آمن / مستقر",
    "track": "يتابع / يسجل",
    "monthly": "شهري",
    "expenses": "مصاريف / نفقات",
    "budget": "ميزانية",
    "separate": "يفصل / يميز",
    "needs": "احتياجات",
    "wants": "رغبات",
    "automatic": "تلقائي",
    "transfers": "تحويلات",
    "regularly": "بانتظام",
    "unnecessary": "غير ضروري",
    "emergency": "طوارئ",
    "fund": "صندوق / تمويل",
    "unexpected": "غير متوقع",
    "long-term": "طويل الأجل",
    "investments": "استثمارات",
    "wealth": "ثروة",
    "comparing": "مقارنة",
    "impulse": "اندفاع",
    "purchases": "مشتريات",
    "bills": "فواتير",
    "late": "متأخر",
    "fees": "رسوم",
    "clear": "واضح",
    "peace of mind": "راحة البال",

    // ================= B2: MOVING APARTMENT =================
    "moving": "الانتقال",
    "apartment": "شقة",
    "brown": "بني",
    "boxes": "صناديق",
    "hallway": "ممر",
    "labels": "ملصقات",
    "belongs": "ينتمي",
    "fragile": "قابل للكسر",
    "wrap": "يلف",
    "carefully": "بعناية",
    "movers": "عمال نقل الأثاث",
    "furniture": "أثاث",
    "truck": "شاحنة",
    "check": "يتفقد",
    "room": "غرفة",
    "make sure": "يتأكد من",
    "left behind": "متروك خلفه",
    "spacious": "واسع",
    "unpack": "يفرغ الأمتعة",
    "essentials": "الأساسيات",
    "plants": "نباتات",
    "welcoming": "مرحّب / باعث على الارتياح",
    "neighbors": "جيران",
    "first night": "الليلة الأولى",
    "pizza": "بيتزا",

    // ================= C1: SELF-IMPROVEMENT =================
    "personal": "شخصي",
    "growth": "نمو / تطور",
    "requires": "يتطلب",
    "patience": "صبر",
    "consistent": "مستمر / منتظم",
    "effort": "جهد",
    "goals": "أهداف",
    "discipline": "انضباط",
    "motivation": "دافع / حافز",
    "fades": "يتلاشى",
    "reading": "القراءة",
    "widely": "على نطاق واسع",
    "broadens": "يوسّع",
    "perspective": "منظور / وجهة نظر",
    "languages": "لغات",
    "memory": "ذاكرة",
    "mistakes": "أخطاء",
    "valuable": "قيّم",
    "lessons": "دروس",
    "determined": "مصمم / عازم",
    "meaningful": "ذو معنى / ملموس",
    "change": "تغيير",
    "protecting": "حماية",
    "distractions": "مشتتات",
    "gratitude": "امتنان",
    "achievements": "إنجازات",
    "lasting": "دائم",
    "progress": "تقدم",

    // ================= C1: LEADERSHIP =================
    "leadership": "قيادة",
    "effective": "فعّال",
    "vision": "رؤية",
    "leaders": "قادة",
    "inspire": "يلهم",
    "others": "الآخرون",
    "listens": "يستمع",
    "people": "أشخاص / الناس",
    "concerns": "مخاوف / شواغل",
    "align": "يوائم / ينسّق",
    "efforts": "جهود",
    "delegating": "تفويض",
    "responsibilities": "مسؤوليات",
    "empowers": "يمكّن",
    "members": "أعضاء",
    "constructive": "بنّاء",
    "feedback": "ملاحظات / تغذية راجعة",
    "boosts": "يعزز",
    "morale": "الروح المعنوية",
    "transparent": "شفاف",
    "crisis": "أزمة",
    "earns": "يكسب",
    "respect": "احترام",
    "resolving": "حلّ",
    "conflict": "نزاع / صراع",
    "impartial": "محايد / منصف",
    "judgment": "حكم / تقدير",
    "recognizing": "تقدير",
    "excel": "يتميز",
    "adaptability": "القدرة على التكيف",
    "organizations": "مؤسسات / منظمات",
    "uncertainty": "عدم اليقين",
    "sustainable": "مستدام",
    "depends": "يعتمد",
    "developing": "تطوير / إعداد",
    "future": "المستقبل",

    // ================= C1: STARTING A BUSINESS =================
    "business": "عمل تجاري / مشروع",
    "successful": "ناجح",
    "businesses": "شركات / مشاريع",
    "solve": "يحل",
    "problems": "مشكلات",
    "market": "سوق",
    "research": "بحث / دراسة",
    "informs": "يسهم في توجيه / يزوّد بالمعلومات",
    "decisions": "قرارات",
    "prototype": "نموذج أولي",
    "whether": "ما إذا",
    "customers": "عملاء",
    "investors": "مستثمرون",
    "angel": "ملائكي",
    "promising": "واعد",
    "ideas": "أفكار",
    "agile": "مرن / سريع التكيف",
    "conditions": "ظروف",
    "loyal": "وفيّ",
    "reliable": "موثوق",
    "service": "خدمة",
    "digital": "رقمي",
    "advertising": "إعلان / إعلانات",
    "global": "عالمي",
    "consistent": "مستمر / منتظم",
    "sales": "مبيعات",
    "profits": "أرباح",
    "scaling": "توسيع نطاق العمل",
    "compromising": "الإخلال بـ / التنازل عن",
    "quality": "جودة",
    "resilient": "قادر على التعافي من الصعوبات",
    "founders": "مؤسسون",
    "setbacks": "انتكاسات",
    "adapt": "يتكيف",
    "plans": "خطط",

    // ================= C1: PUBLIC SPEAKING =================
    "public": "عام / أمام الجمهور",
    "speaking": "التحدث",
    "practice": "ممارسة / يتدرب",
    "stage": "مسرح",
    "fright": "خوف / رهبة",
    "opening": "افتتاحية / بداية",
    "captures": "يجذب",
    "audience": "جمهور",
    "attention": "انتباه",
    "steady": "ثابت",
    "voice": "صوت",
    "conveys": "ينقل / يعبر عن",
    "confidence": "ثقة بالنفس",
    "eye": "عين",
    "contact": "تواصل / اتصال",
    "brief": "قصير / موجز",
    "anecdotes": "حكايات قصيرة",
    "complex": "معقد",
    "information": "معلومات",
    "easier": "أسهل",
    "understand": "يفهم",
    "natural": "طبيعي",
    "gestures": "إيماءات",
    "reinforce": "يعزز",
    "key": "أساسي / مفتاح",
    "points": "نقاط",
    "well-timed": "في التوقيت المناسب",
    "pauses": "وقفات",
    "impact": "تأثير",
    "well-designed": "مصمم بعناية",
    "slides": "شرائح العرض",
    "follow": "يتابع / يتبع",
    "confident": "واثق",
    "speakers": "متحدثون",
    "challenging": "صعب / يتطلب تحديًا",
    "questions": "أسئلة",
    "applauds": "يصفق",
    "talk": "حديث / كلمة",
    "resonates": "يترك أثرًا / يتردد صداه",

    // ================= DESCRIPTIVE ADJECTIVES =================
    "quiet": "هادئ",
    "cold": "بارد",
    "hot": "ساخن",
    "fresh": "طازج",
    "clean": "نظيف",
    "small": "صغير",
    "large": "كبير",
    "big": "كبير",
    "tall": "طويل",
    "green": "أخضر",
    "red": "أحمر",
    "brown": "بني",
    "soft": "ناعم / هادئ",
    "warm": "دافئ",
    "cozy": "مريح ودافئ",
    "friendly": "ودود",
    "local": "محلي",
    "old": "قديم",
    "main": "رئيسي",
    "clear": "واضح",
    "proud": "فخور",
    "happy": "سعيد",
    "busy": "مشغول / مزدحم",
    "delicious": "لذيذ",
    "grilled": "مشوي",
    "healthy": "صحي",
    "brisk": "سريع ونشيط",
    "lightweight": "خفيف الوزن",
    "offline": "دون اتصال بالإنترنت",
    "important": "مهم",
    "fragile": "قابل للكسر",
    "spacious": "واسع",
    "personal": "شخصي",
    "financial": "مالي",
    "automatic": "تلقائي",
    "unexpected": "غير متوقع",
    "unnecessary": "غير ضروري",
    "long-term": "طويل الأجل",
    "consistent": "مستمر / منتظم",
    "constructive": "بنّاء",
    "effective": "فعّال",
    "successful": "ناجح",
    "promising": "واعد",
    "agile": "مرن",
    "resilient": "قادر على التعافي",
    "sustainable": "مستدام",
    "meaningful": "ذو معنى / ملموس",
    "valuable": "قيّم",
    "determined": "مصمم / عازم",
    "confident": "واثق",
    "natural": "طبيعي",
    "complex": "معقد",
    "challenging": "صعب / مليء بالتحديات",
    "impartial": "محايد",
    "transparent": "شفاف",
    "reliable": "موثوق",
    "loyal": "وفيّ",
    "well-designed": "مصمم بعناية",
    "well-timed": "في التوقيت المناسب"
};

const STORIES_DATA = [
    // ================= A1 TOPICS (4) =================
    {
        id: "a1-morning-routine",
        level: "A1",
        emoji: "☀️",
        enTitle: "Morning Routine",
        arTitle: "روتين الصباح",
        desc: "خطوات الصباح من الاستيقاظ حتى الخروج.",
        sentences: [
            { en: "Sunlight fills my quiet room", ar: "يملأ ضوء الشمس غرفتي الهادئة" },
            { en: "I wake up and open the window", ar: "أستيقظ وأفتح النافذة" },
            { en: "I splash cold water on my face", ar: "أغسل وجهي برذاذ الماء البارد" },
            { en: "I brush my teeth and wash my face", ar: "أفرش أسناني وأغسل وجهي" },
            { en: "Then, I make my bed", ar: "بعد ذلك، أرتب سريري" },
            { en: "I make a cup of hot tea", ar: "أعد كوبًا من الشاي الساخن" },
            { en: "I eat eggs and fresh bread for breakfast", ar: "أتناول البيض والخبز الطازج على الإفطار" },
            { en: "I get dressed in clean clothes", ar: "أرتدي ملابس نظيفة" },
            { en: "I put my keys in my bag", ar: "أضع مفاتيحي في حقيبتي" },
            { en: "Finally, I leave the house with a smile", ar: "أخيرًا، أغادر المنزل بابتسامة" }
        ]
    },
    {
        id: "a1-at-the-cafe",
        level: "A1",
        emoji: "☕",
        enTitle: "At the Café",
        arTitle: "في المقهى",
        desc: "زيارة هادئة للمقهى لطلب القهوة والقراءة.",
        sentences: [
            { en: "There is a quiet cafe nearby", ar: "يوجد مقهى هادئ بالقرب مني" },
            { en: "The fresh coffee smells wonderful", ar: "رائحة القهوة الطازجة رائعة" },
            { en: "I choose a small table by the window", ar: "أختار طاولة صغيرة بجانب النافذة" },
            { en: "The waiter brings me the menu", ar: "يحضر النادل قائمة الطعام" },
            { en: "I order a coffee and a slice of cake", ar: "أطلب قهوة وقطعة من الكعك" },
            { en: "Soft music plays in the cafe", ar: "تُعزف موسيقى هادئة في المقهى" },
            { en: "My coffee arrives a few minutes later", ar: "تصل قهوتي بعد بضع دقائق" },
            { en: "I read a short book while I drink", ar: "أقرأ كتابًا قصيرًا أثناء احتساء القهوة" },
            { en: "When I finish, I pay by card", ar: "عندما أنتهي، أدفع بالبطاقة" },
            { en: "I leave the cafe feeling relaxed", ar: "أغادر المقهى وأنا أشعر بالاسترخاء" }
        ]
    },
    {
        id: "a1-grocery-shopping",
        level: "A1",
        emoji: "🛒",
        enTitle: "Grocery Shopping",
        arTitle: "التسوق لشراء الاحتياجات",
        desc: "جولة لشراء الفواكه والخضراوات والخبز.",
        sentences: [
            { en: "I go grocery shopping every Saturday", ar: "أذهب للتسوق لشراء احتياجات المنزل كل يوم سبت" },
            { en: "I take a shopping cart", ar: "آخذ عربة تسوق" },
            { en: "The red apples look fresh", ar: "يبدو التفاح الأحمر طازجًا" },
            { en: "I fill my basket with green vegetables", ar: "أملأ سلتي بالخضراوات الخضراء" },
            { en: "Next, I pick up some milk", ar: "بعد ذلك، أشتري بعض الحليب" },
            { en: "The bakery sells fresh bread", ar: "يبيع المخبز خبزًا طازجًا" },
            { en: "I check the price of each item", ar: "أتفقد سعر كل سلعة" },
            { en: "The queue moves slowly", ar: "يتحرك الطابور ببطء" },
            { en: "The cashier puts my groceries in paper bags", ar: "يضع أمين الصندوق مشترياتي في أكياس ورقية" },
            { en: "I drive home safely", ar: "أقود سيارتي إلى المنزل بأمان" }
        ]
    },
    {
        id: "a1-family-dinner",
        level: "A1",
        emoji: "🍲",
        enTitle: "Family Dinner",
        arTitle: "عشاء العائلة",
        desc: "تحضير العشاء واجتماع العائلة حول المائدة.",
        sentences: [
            { en: "In the evening, my family gathers for dinner", ar: "في المساء، تجتمع عائلتي لتناول العشاء" },
            { en: "My mother makes chicken soup", ar: "تحضر أمي حساء الدجاج" },
            { en: "I make a fresh green salad", ar: "أعد سلطة خضراء طازجة" },
            { en: "My father sets the table", ar: "يجهز أبي المائدة" },
            { en: "We all sit down to eat", ar: "نجلس جميعًا لتناول الطعام" },
            { en: "We talk about our day", ar: "نتحدث عن يومنا" },
            { en: "We eat rice and meat for dinner", ar: "نتناول الأرز واللحم على العشاء" },
            { en: "My sister pours orange juice", ar: "تسكب أختي عصير البرتقال" },
            { en: "After dinner, I wash the dishes", ar: "بعد العشاء، أغسل الأطباق" },
            { en: "Happy laughter fills the house", ar: "تملأ الضحكات السعيدة أرجاء المنزل" }
        ]
    },

    // ================= A2 TOPICS (4) =================
    {
        id: "a2-day-at-university",
        level: "A2",
        emoji: "🎓",
        enTitle: "A Day at University",
        arTitle: "يوم في الجامعة",
        desc: "يوم طالب جامعي بين المحاضرات والمكتبة.",
        sentences: [
            { en: "The campus bus arrives at eight", ar: "تصل حافلة الجامعة في الساعة الثامنة" },
            { en: "Students enter through the main gate", ar: "يدخل الطلاب عبر البوابة الرئيسية" },
            { en: "I find a quiet seat in the classroom", ar: "أجد مقعدًا هادئًا في قاعة المحاضرات" },
            { en: "Our professor starts the lecture", ar: "يبدأ أستاذنا المحاضرة" },
            { en: "I take clear notes during the lesson", ar: "أدوّن ملاحظات واضحة أثناء الدرس" },
            { en: "One student asks a good question", ar: "يطرح أحد الطلاب سؤالًا جيدًا" },
            { en: "I meet my friends for lunch", ar: "ألتقي بأصدقائي لتناول الغداء" },
            { en: "After lunch, we study in the library", ar: "بعد الغداء، نذاكر في المكتبة" },
            { en: "I choose a science book to read", ar: "أختار كتابًا في العلوم لأقرأه" },
            { en: "I walk home feeling proud of my day", ar: "أعود إلى المنزل سيرًا وأنا فخور بيومي" }
        ]
    },
    {
        id: "a2-weekend-trip",
        level: "A2",
        emoji: "🏞️",
        enTitle: "Weekend Trip",
        arTitle: "رحلة نهاية الأسبوع",
        desc: "رحلة بالسيارة لاستكشاف التلال والبلدة القديمة.",
        sentences: [
            { en: "We pack our bags on Friday", ar: "نجهز حقائبنا يوم الجمعة" },
            { en: "The road winds through the hills", ar: "يمتد الطريق متعرجًا بين التلال" },
            { en: "Tall green trees line the road", ar: "تصطف الأشجار الخضراء الطويلة على جانبي الطريق" },
            { en: "We stop for a coffee break", ar: "نتوقف لأخذ استراحة لشرب القهوة" },
            { en: "A cozy hotel welcomes us", ar: "يستقبلنا فندق مريح" },
            { en: "We explore the old town", ar: "نستكشف البلدة القديمة" },
            { en: "The local food is delicious", ar: "الطعام المحلي لذيذ" },
            { en: "I take beautiful photos of the sunset", ar: "ألتقط صورًا جميلة لغروب الشمس" },
            { en: "In the evening, we sit by a fire", ar: "في المساء، نجلس بجانب النار" },
            { en: "We return home on Sunday", ar: "نعود إلى المنزل يوم الأحد" }
        ]
    },
    {
        id: "a2-visiting-the-doctor",
        level: "A2",
        emoji: "🩺",
        enTitle: "Visiting the Doctor",
        arTitle: "زيارة الطبيب",
        desc: "زيارة الطبيب في العيادة للحصول على الفحص والعلاج.",
        sentences: [
            { en: "My throat hurts today", ar: "أشعر بألم في حلقي اليوم" },
            { en: "I call the local clinic", ar: "أتصل بالعيادة القريبة" },
            { en: "The nurse checks my temperature", ar: "تفحص الممرضة درجة حرارتي" },
            { en: "I wait patiently for the doctor", ar: "أنتظر الطبيب بصبر" },
            { en: "The doctor listens to my chest", ar: "يستمع الطبيب إلى صوت صدري" },
            { en: "He examines my throat carefully", ar: "يفحص حلقي بعناية" },
            { en: "The doctor gives me a prescription", ar: "يعطيني الطبيب وصفة طبية" },
            { en: "The pharmacist gives me my medicine", ar: "يعطيني الصيدلي دوائي" },
            { en: "I get some rest and drink plenty of water", ar: "أرتاح وأشرب الكثير من الماء" },
            { en: "Soon, I start to feel better", ar: "سرعان ما أبدأ بالشعور بالتحسن" }
        ]
    },
    {
        id: "a2-at-the-restaurant",
        level: "A2",
        emoji: "🍝",
        enTitle: "At the Restaurant",
        arTitle: "في المطعم",
        desc: "تناول العشاء وتجربة أطباق شهية في مطعم إيطالي.",
        sentences: [
            { en: "The Italian restaurant looks busy", ar: "يبدو المطعم الإيطالي مزدحمًا" },
            { en: "A friendly host shows us to our table", ar: "يرشدنا موظف الاستقبال الودود إلى طاولتنا" },
            { en: "Candles glow softly on the tables", ar: "تتوهج الشموع بهدوء على الطاولات" },
            { en: "We look at the menu", ar: "نلقي نظرة على قائمة الطعام" },
            { en: "The waiter brings us some garlic bread", ar: "يحضر لنا النادل بعض خبز الثوم" },
            { en: "The chef prepares fresh pasta", ar: "يعد الطاهي المعكرونة الطازجة" },
            { en: "The grilled fish is delicious", ar: "السمك المشوي لذيذ" },
            { en: "We share a slice of chocolate cake", ar: "نتشارك قطعة من كعكة الشوكولاتة" },
            { en: "The waiter brings us the bill", ar: "يحضر لنا النادل الفاتورة" },
            { en: "We leave feeling full and happy", ar: "نغادر ونحن نشعر بالشبع والسعادة" }
        ]
    },

    // ================= B1 TOPICS (4) =================
    {
        id: "b1-job-interview",
        level: "B1",
        emoji: "💼",
        enTitle: "Job Interview",
        arTitle: "مقابلة عمل",
        desc: "الاستعداد لمقابلة وظيفية والتحدث بثقة.",
        sentences: [
            { en: "I research the company before the interview", ar: "أبحث عن معلومات حول الشركة قبل المقابلة" },
            { en: "I prepare my suit the night before", ar: "أجهز بدلتي في الليلة السابقة" },
            { en: "I arrive fifteen minutes early", ar: "أصل قبل الموعد بخمس عشرة دقيقة" },
            { en: "The manager greets me warmly", ar: "يستقبلني المدير بحرارة" },
            { en: "I explain how my skills fit the role", ar: "أشرح كيف تتناسب مهاراتي مع الوظيفة" },
            { en: "I answer difficult questions calmly", ar: "أجيب عن الأسئلة الصعبة بهدوء" },
            { en: "I share ideas that could help the team", ar: "أطرح أفكارًا يمكن أن تساعد الفريق" },
            { en: "I answer honestly and build trust", ar: "أجيب بصدق وأبني الثقة" },
            { en: "I ask about opportunities for growth", ar: "أسأل عن فرص التطور المهني" },
            { en: "After the interview, I send a thank-you email", ar: "بعد المقابلة، أرسل رسالة شكر عبر البريد الإلكتروني" }
        ]
    },
    {
        id: "b1-healthy-lifestyle",
        level: "B1",
        emoji: "🥗",
        enTitle: "Healthy Lifestyle",
        arTitle: "نمط حياة صحي",
        desc: "عادات يومية بسيطة للحفاظ على النشاط والصحة.",
        sentences: [
            { en: "Good health starts with simple habits", ar: "تبدأ الصحة الجيدة بعادات بسيطة" },
            { en: "I start my day with a glass of water", ar: "أبدأ يومي بكوب من الماء" },
            { en: "A morning stretch relaxes my muscles", ar: "تساعد تمارين التمدد الصباحية على إرخاء عضلاتي" },
            { en: "A brisk walk gives me more energy", ar: "تمنحني نزهة سريعة سيرًا على الأقدام مزيدًا من الطاقة" },
            { en: "Healthy meals include protein and vegetables", ar: "تحتوي الوجبات الصحية على البروتين والخضراوات" },
            { en: "I try to avoid sugary drinks", ar: "أحاول تجنب المشروبات المحلاة بالسكر" },
            { en: "I take short breaks to rest my eyes", ar: "آخذ استراحات قصيرة لإراحة عينيّ" },
            { en: "Taking deep breaths helps me relax", ar: "يساعدني التنفس العميق على الاسترخاء" },
            { en: "I turn off my screens before bed", ar: "أطفئ أجهزتي قبل النوم" },
            { en: "A good night's sleep helps me feel refreshed", ar: "يساعدني النوم الجيد على الاستيقاظ بنشاط" }
        ]
    },
    {
        id: "b1-planning-a-journey",
        level: "B1",
        emoji: "🗺️",
        enTitle: "Planning a Journey",
        arTitle: "التخطيط لرحلة",
        desc: "ترتيب الحجوزات والاستعداد للسفر قبل الانطلاق.",
        sentences: [
            { en: "I start by choosing a destination", ar: "أبدأ باختيار وجهة السفر" },
            { en: "I compare flight prices online", ar: "أقارن أسعار الرحلات الجوية عبر الإنترنت" },
            { en: "I book a window seat", ar: "أحجز مقعدًا بجانب النافذة" },
            { en: "I choose a hotel near the city center", ar: "أختار فندقًا بالقرب من وسط المدينة" },
            { en: "I leave some free time in my itinerary", ar: "أترك بعض الوقت الحر في جدول رحلتي" },
            { en: "I check the passport and visa requirements", ar: "أتحقق من متطلبات جواز السفر والتأشيرة" },
            { en: "I pack lightweight clothes for summer", ar: "أحزم ملابس خفيفة لفصل الصيف" },
            { en: "I download offline maps before I leave", ar: "أنزّل خرائط لاستخدامها دون اتصال بالإنترنت قبل المغادرة" },
            { en: "I keep my travel documents in a safe place", ar: "أحفظ وثائق سفري في مكان آمن" },
            { en: "My adventure begins tomorrow morning", ar: "تبدأ مغامرتي صباح الغد" }
        ]
    },
    {
        id: "b1-at-the-airport",
        level: "B1",
        emoji: "✈️",
        enTitle: "At the Airport",
        arTitle: "في المطار",
        desc: "إجراءات المطار من تسليم الأمتعة حتى الصعود إلى الطائرة.",
        sentences: [
            { en: "A taxi drops me off at the terminal", ar: "تقلني سيارة أجرة إلى صالة المطار" },
            { en: "The departure boards display flight times", ar: "تعرض لوحات المغادرة مواعيد الرحلات" },
            { en: "An airline employee weighs my luggage", ar: "يزن موظف شركة الطيران أمتعتي" },
            { en: "Security staff screen my carry-on bags", ar: "يفحص موظفو الأمن حقائبي المحمولة" },
            { en: "I look around the gift shops", ar: "أتجول في متاجر الهدايا" },
            { en: "Large windows offer a view of the planes", ar: "تتيح النوافذ الكبيرة رؤية الطائرات" },
            { en: "An announcement tells us when boarding begins", ar: "يخبرنا إعلان صوتي بموعد بدء الصعود إلى الطائرة" },
            { en: "Passengers queue at the gate", ar: "يصطف المسافرون عند البوابة" },
            { en: "The cabin crew welcomes us aboard", ar: "يرحب بنا طاقم الطائرة على متنها" },
            { en: "The engines roar as the plane takes off", ar: "تهدر المحركات بينما تقلع الطائرة" }
        ]
    },

    // ================= B2 TOPICS (4) =================
        {
    id: "b2-environmental-protection",
    level: "B2",
    emoji: "🌍",
    enTitle: "Environmental Protection",
    arTitle: "حماية البيئة",
    desc: "تعرف على طرق حماية البيئة",
    sentences: [
        { en: "Air pollution affects our health", ar: "يؤثر تلوث الهواء على صحتنا" },
        { en: "We must reduce harmful emissions", ar: "يجب أن نقلل الانبعاثات الضارة" },
        { en: "Solar power is a renewable resource", ar: "الطاقة الشمسية مصدر متجدد" },
        { en: "Recycling helps reduce waste", ar: "تساعد إعادة التدوير على تقليل النفايات" },
        { en: "High consumption creates more waste", ar: "يؤدي الاستهلاك المرتفع إلى مزيد من النفايات" },
        { en: "Efficient appliances save electricity", ar: "توفر الأجهزة الفعّالة الكهرباء" },
        { en: "Plastic causes damage to wildlife", ar: "يسبب البلاستيك ضررًا للحياة البرية" },
        { en: "Many animals lose their habitats", ar: "تفقد حيوانات كثيرة موائلها" },
        { en: "Awareness campaigns encourage recycling", ar: "تشجع حملات التوعية على إعادة التدوير" },
        { en: "Sustainable choices have a lasting impact", ar: "للخيارات المستدامة تأثير طويل الأمد" }
    ]
},
    {
        id: "b2-fitness-and-gym",
        level: "B2",
        emoji: "🏋️",
        enTitle: "Fitness at the Gym",
        arTitle: "اللياقة في النادي الرياضي",
        desc: "تمرين متكامل يجمع بين الإحماء والقوة والاستشفاء.",
        sentences: [
            { en: "Regular exercise improves my health", ar: "تحسن التمارين المنتظمة صحتي" },
            { en: "I pack my gym clothes, shoes, and water bottle", ar: "أجهز ملابس النادي وحذائي وزجاجة الماء" },
            { en: "Warming up prepares my muscles and joints for exercise", ar: "يهيئ الإحماء عضلاتي ومفاصلي للتمرين" },
            { en: "Running on the treadmill raises my heart rate", ar: "يرفع الجري على جهاز المشي معدل ضربات قلبي" },
            { en: "I lift weights to build strength", ar: "أرفع الأوزان لبناء القوة" },
            { en: "Using proper form reduces the risk of injury", ar: "يقلل أداء التمارين بالطريقة الصحيحة من خطر الإصابة" },
            { en: "I take short breaks between sets", ar: "آخذ استراحات قصيرة بين مجموعات التمارين" },
            { en: "My trainer corrects my form", ar: "يصحح مدربي طريقة أدائي للتمارين" },
            { en: "I cool down to let my heart rate return to normal", ar: "أمارس تمارين التهدئة حتى يعود معدل ضربات قلبي إلى طبيعته" },
            { en: "I have a protein shake after my workout", ar: "أشرب مخفوق البروتين بعد التمرين" }
        ]
    },
    {
        id: "b2-financial-planning",
        level: "B2",
        emoji: "📊",
        enTitle: "Financial Planning",
        arTitle: "التخطيط المالي",
        desc: "تنظيم الميزانية الشهرية والادخار للمستقبل.",
        sentences: [
            { en: "Good financial planning helps me feel secure", ar: "يساعدني التخطيط المالي الجيد على الشعور بالاستقرار" },
            { en: "I track my monthly expenses", ar: "أتابع مصاريفي الشهرية" },
            { en: "A budget helps me separate needs from wants", ar: "تساعدني الميزانية على التمييز بين الاحتياجات والرغبات" },
            { en: "Automatic transfers help me save regularly", ar: "تساعدني التحويلات التلقائية على الادخار بانتظام" },
            { en: "Cutting unnecessary expenses helps me save money", ar: "يساعدني تقليل المصاريف غير الضرورية على توفير المال" },
            { en: "An emergency fund helps cover unexpected expenses", ar: "يساعدني صندوق الطوارئ على تغطية النفقات غير المتوقعة" },
            { en: "Long-term investments can help build wealth", ar: "يمكن للاستثمارات طويلة الأجل أن تساعد على بناء الثروة" },
            { en: "Comparing prices helps me avoid impulse purchases", ar: "تساعدني مقارنة الأسعار على تجنب الشراء الاندفاعي" },
            { en: "Paying bills on time helps me avoid late fees", ar: "يساعدني دفع الفواتير في موعدها على تجنب رسوم التأخير" },
            { en: "A clear financial plan gives me peace of mind", ar: "تمنحني الخطة المالية الواضحة راحة البال" }
        ]
    },
    {
        id: "b2-moving-apartment",
        level: "B2",
        emoji: "📦",
        enTitle: "Moving to a New Apartment",
        arTitle: "الانتقال إلى شقة جديدة",
        desc: "ترتيب الصناديق ونقل الأثاث إلى مسكن جديد.",
        sentences: [
            { en: "Brown boxes fill the hallway", ar: "تملأ الصناديق البنية الممر" },
            { en: "Labels show which room each box belongs in", ar: "توضح الملصقات الغرفة التي تنتمي إليها كل علبة" },
            { en: "I wrap fragile items carefully", ar: "أغلف الأغراض القابلة للكسر بعناية" },
            { en: "The movers load our furniture onto the truck", ar: "يحمل عمال النقل أثاثنا إلى الشاحنة" },
            { en: "I check every room to make sure nothing is left behind", ar: "أتفقد كل غرفة للتأكد من عدم ترك أي شيء" },
            { en: "The new apartment feels bright and spacious", ar: "تبدو الشقة الجديدة مشرقة وواسعة" },
            { en: "We unpack the essentials first", ar: "نخرج الأغراض الأساسية من الصناديق أولًا" },
            { en: "Green plants make the rooms feel more welcoming", ar: "تجعل النباتات الخضراء الغرف أكثر ترحيبًا" },
            { en: "Our new neighbors greet us warmly", ar: "يرحب بنا جيراننا الجدد بحرارة" },
            { en: "We celebrate our first night with pizza", ar: "نحتفل بليلتنا الأولى بتناول البيتزا" }
        ]
    },

    // ================= C1 TOPICS (4) =================
    {
        id: "c1-self-improvement",
        level: "C1",
        emoji: "🚀",
        enTitle: "Self-Improvement",
        arTitle: "تطوير الذات",
        desc: "بناء الانضباط الذاتي وتحقيق تقدم مستمر.",
        sentences: [
            { en: "Personal growth requires patience and consistent effort", ar: "يتطلب النمو الشخصي الصبر والجهد المستمر" },
            { en: "I set clear goals for each week", ar: "أحدد أهدافًا واضحة لكل أسبوع" },
            { en: "Discipline keeps me going when motivation fades", ar: "يساعدني الانضباط على الاستمرار عندما يتراجع الحماس" },
            { en: "Reading widely broadens my perspective", ar: "توسّع القراءة في مجالات متنوعة آفاقي" },
            { en: "Learning new languages can strengthen my memory", ar: "يمكن لتعلم لغات جديدة أن يقوي ذاكرتي" },
            { en: "My mistakes teach me valuable lessons", ar: "تعلمني أخطائي دروسًا قيّمة" },
            { en: "Determined people can inspire meaningful change", ar: "يمكن للأشخاص المصممين على أهدافهم إلهام تغيير ملموس" },
            { en: "Protecting my time helps me avoid distractions", ar: "تساعدني حماية وقتي على تجنب المشتتات" },
            { en: "Practising gratitude helps me appreciate my achievements", ar: "تساعدني ممارسة الامتنان على تقدير إنجازاتي" },
            { en: "Consistent small steps lead to lasting progress", ar: "تؤدي الخطوات الصغيرة المستمرة إلى تقدم دائم" }
        ]
    },
    {
        id: "c1-effective-leadership",
        level: "C1",
        emoji: "🧭",
        enTitle: "Effective Leadership",
        arTitle: "القيادة الفعّالة",
        desc: "إلهام الفريق بالرؤية الواضحة والتفويض والتواصل البنّاء.",
        sentences: [
            { en: "A clear vision helps leaders inspire others", ar: "تساعد الرؤية الواضحة القادة على إلهام الآخرين" },
            { en: "A good leader listens to people's concerns", ar: "يستمع القائد الجيد إلى مخاوف الآخرين" },
            { en: "Clear goals align the team's efforts", ar: "تنسق الأهداف الواضحة جهود الفريق" },
            { en: "Delegating responsibilities empowers team members", ar: "يمنح تفويض المسؤوليات أعضاء الفريق مزيدًا من الصلاحيات" },
            { en: "Constructive feedback boosts morale", ar: "تعزز الملاحظات البنّاءة الروح المعنوية" },
            { en: "Being transparent during a crisis earns trust and respect", ar: "يكسب الوضوح والشفافية أثناء الأزمات الثقة والاحترام" },
            { en: "Resolving conflict requires calm, impartial judgment", ar: "يتطلب حل النزاعات حكمًا هادئًا ومحايدًا" },
            { en: "Recognizing good work encourages people to excel", ar: "يشجع تقدير العمل الجيد الأشخاص على التميز" },
            { en: "Adaptability helps organizations navigate uncertainty", ar: "تساعد القدرة على التكيف المؤسسات على التعامل مع عدم اليقين" },
            { en: "Sustainable success depends on developing future leaders", ar: "يعتمد النجاح المستدام على إعداد قادة المستقبل" }
        ]
    },
    {
        id: "c1-starting-a-business",
        level: "C1",
        emoji: "📈",
        enTitle: "Starting a Business",
        arTitle: "تأسيس مشروع تجاري",
        desc: "رحلة ريادة الأعمال من دراسة السوق إلى النمو المستدام.",
        sentences: [
            { en: "Successful businesses solve real problems", ar: "تحل الشركات الناجحة مشكلات حقيقية" },
            { en: "Market research informs business decisions", ar: "تسهم دراسة السوق في توجيه القرارات التجارية" },
            { en: "A prototype helps test whether customers want the product", ar: "يساعد النموذج الأولي على اختبار مدى رغبة العملاء في المنتج" },
            { en: "Angel investors fund promising ideas", ar: "يمول المستثمرون الملائكيون الأفكار الواعدة" },
            { en: "Agile teams adapt quickly when market conditions change", ar: "تتكيف الفرق المرنة بسرعة عندما تتغير ظروف السوق" },
            { en: "Customers remain loyal when a business delivers reliable service", ar: "يبقى العملاء أوفياء عندما تقدم الشركة خدمة موثوقة" },
            { en: "Digital advertising can help a business reach customers around the world", ar: "يمكن للإعلانات الرقمية مساعدة الشركة على الوصول إلى العملاء حول العالم" },
            { en: "Consistent sales can lead to sustainable profits", ar: "يمكن للمبيعات المستمرة أن تؤدي إلى أرباح مستدامة" },
            { en: "Scaling carefully allows a business to grow without compromising quality", ar: "يسمح التوسع المدروس للشركة بالنمو دون المساس بالجودة" },
            { en: "Resilient founders learn from setbacks and adapt their plans", ar: "يتعلم المؤسسون القادرون على تجاوز الصعوبات من الانتكاسات ويعدّلون خططهم" }
        ]
    },
    {
        id: "c1-public-speaking",
        level: "C1",
        emoji: "🎙️",
        enTitle: "Public Speaking",
        arTitle: "فن الإلقاء والتحدث",
        desc: "تطوير مهارات الإلقاء والتأثير في الجمهور بثقة.",
        sentences: [
            { en: "Regular practice helps reduce stage fright", ar: "تساعد الممارسة المنتظمة على تقليل رهبة المسرح" },
            { en: "A strong opening captures the audience's attention", ar: "تجذب البداية القوية انتباه الجمهور" },
            { en: "A steady voice conveys confidence", ar: "يعكس الصوت الثابت الثقة بالنفس" },
            { en: "Eye contact helps build trust with the audience", ar: "يساعد التواصل البصري على بناء الثقة مع الجمهور" },
            { en: "Brief anecdotes make complex information easier to understand", ar: "تجعل الحكايات القصيرة المعلومات المعقدة أسهل للفهم" },
            { en: "Natural gestures reinforce key points", ar: "تعزز الإيماءات الطبيعية النقاط الأساسية" },
            { en: "Well-timed pauses give important points more impact", ar: "تمنح الوقفات في توقيتها المناسب النقاط المهمة تأثيرًا أكبر" },
            { en: "Well-designed slides make complex information easier to follow", ar: "تجعل الشرائح المصممة بعناية متابعة المعلومات المعقدة أسهل" },
            { en: "Confident speakers welcome challenging questions", ar: "يرحب المتحدثون الواثقون بالأسئلة الصعبة" },
            { en: "The audience applauds when a talk truly resonates with them", ar: "يصفق الجمهور عندما يلامس الحديث مشاعرهم ويترك أثرًا فيهم" }
        ]
    }
];

        /**************************************************************
         * 3. WEB AUDIO SYNTHESIZED SOUND ENGINE
         **************************************************************/
        class SoundEngine {
            constructor() {
                this.ctx = null;
                this.enabled = true;
            }
            init() {
                if (!this.ctx) {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    if (AudioCtx) this.ctx = new AudioCtx();
                }
                if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
            }
            playTick(combo = 0) {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(520 + Math.min(combo * 6, 220), now);
                osc.frequency.exponentialRampToValueAtTime(160, now + 0.035);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.04);
            }
            playError() {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(160, now);
                osc.frequency.linearRampToValueAtTime(115, now + 0.11);
                gain.gain.setValueAtTime(0.11, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.13);
            }
            playSentenceStep() {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                [587.33, 880].forEach((freq, i) => {
                    const now = this.ctx.currentTime + i * 0.055;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.07, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.18);
                });
            }
            playWin() {
                if (!this.enabled) return;
                this.init();
                if (!this.ctx) return;
                [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                    const now = this.ctx.currentTime + i * 0.07;
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.27);
                });
            }
        }

        const sfx = new SoundEngine();

        /**************************************************************
         * 4. TEXT-TO-SPEECH CONTROLLER
         **************************************************************/
        class SpeechController {
            constructor() {
                this.synth = window.speechSynthesis;
                this.rate = 1.0;
                this.preferredVoice = null;
                if (this.synth) {
                    this.loadVoices();
                    if (speechSynthesis.onvoiceschanged !== undefined) {
                        speechSynthesis.onvoiceschanged = () => this.loadVoices();
                    }
                }
            }
            loadVoices() {
                const voices = this.synth.getVoices();
                this.preferredVoice =
                    voices.find(v => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))) ||
                    voices.find(v => v.lang.startsWith('en-US')) ||
                    voices.find(v => v.lang.startsWith('en'));
            }
            speak(text, customRate = null) {
                if (!this.synth || !text) return;
                try {
                    this.synth.cancel();
                    const utter = new SpeechSynthesisUtterance(text);
                    if (this.preferredVoice) utter.voice = this.preferredVoice;
                    utter.lang = 'en-US';
                    utter.rate = customRate || this.rate;
                    this.synth.speak(utter);
                } catch (e) {
                    console.warn(e);
                }
            }
            toggleRate() {
                this.rate = this.rate === 1.0 ? 0.75 : (this.rate === 0.75 ? 1.15 : 1.0);
                return this.rate;
            }
        }

        const tts = new SpeechController();

        /**************************************************************
         * 5. STATE & CUMULATIVE TOPIC TRACKING
         **************************************************************/
        const state = {
            storyIndex: 0,
            sentenceIndex: 0,
            proMode: false,
            keyboardVisible: false,
            targetText: '',
            charIndex: 0,
            // Current sentence tracking
            sentenceStartTime: null,
            sentenceKeystrokes: 0,
            sentenceCorrect: 0,
            // Cumulative topic tracking (across all 10 sentences)
            topicActiveTimeMs: 0,
            topicTotalChars: 0,
            topicTotalKeystrokes: 0,
            topicCorrectKeystrokes: 0,
            combo: 0,
            maxCombo: 0,
            timerInterval: null,
            isTopicCompleted: false,
            isTransitioning: false,
            totalScore: 0
        };

        const enContainer = document.getElementById('english-sentence-container');
        const glidingCaret = document.getElementById('gliding-caret');
        const arSentenceEl = document.getElementById('arabic-sentence');
        const typingBoxWrapper = document.getElementById('typing-box-wrapper');
        const progressBar = document.getElementById('sentence-progress-bar');
        const hiddenInput = document.getElementById('hidden-typing-input');

        const statWpm = document.getElementById('stat-wpm');
        const statAcc = document.getElementById('stat-acc');
        const statCombo = document.getElementById('stat-combo');
        const totalScoreEl = document.getElementById('total-score-display');

        const wordPopover = document.getElementById('word-popover');
        const popoverArWord = document.getElementById('popover-ar-word');
        const summaryModal = document.getElementById('summary-modal');
        const storiesModal = document.getElementById('stories-modal');

        function resetTopicCumulativeStats() {
            state.topicActiveTimeMs = 0;
            state.topicTotalChars = 0;
            state.topicTotalKeystrokes = 0;
            state.topicCorrectKeystrokes = 0;
            state.combo = 0;
            state.maxCombo = 0;
            state.isTopicCompleted = false;
            statWpm.textContent = '0';
            statAcc.textContent = '100%';
            statCombo.textContent = '0';
        }

        /**************************************************************
         * 6. SMOOTH GLIDING UNDERLINE CARET POSITIONING
         **************************************************************/
        function updateGlidingCaret() {
            const targetIdx = Math.min(state.charIndex, state.targetText.length - 1);
            const activeSpan = enContainer.querySelector(`.char[data-index="${targetIdx}"]`);
            if (!activeSpan) {
                glidingCaret.style.opacity = '0';
                return;
            }

            glidingCaret.style.opacity = '1';
            const wrapperRect = typingBoxWrapper.getBoundingClientRect();
            const spanRect = activeSpan.getBoundingClientRect();

            const left = spanRect.left - wrapperRect.left;
            const top = (spanRect.bottom - wrapperRect.top) + 4;
            const width = Math.max(spanRect.width * 0.88, 18);

            glidingCaret.style.left = `${left + (spanRect.width - width) / 2}px`;
            glidingCaret.style.top = `${top}px`;
            glidingCaret.style.width = `${width}px`;
        }

        window.addEventListener('resize', () => {
            requestAnimationFrame(updateGlidingCaret);
        });

        /**************************************************************
         * 7. RENDER SENTENCE & TOPICS MODAL
         **************************************************************/
        function loadCurrentSentence() {
            clearInterval(state.timerInterval);
            hideWordPopover();

            const story = STORIES_DATA[state.storyIndex];
            const currentObj = story.sentences[state.sentenceIndex];
            const totalSentences = story.sentences.length; // Always 10

            state.targetText = currentObj.en;
            state.charIndex = 0;
            state.sentenceStartTime = null;
            state.sentenceKeystrokes = 0;
            state.sentenceCorrect = 0;
            state.isTransitioning = false;

            // Update Top Pills & Level Badge Class
            document.getElementById('header-story-title').textContent = story.arTitle;
            const levelBadge = document.getElementById('current-level-badge');
            levelBadge.textContent = story.level;
            levelBadge.className = `level-dot level-${story.level}`;

            document.getElementById('current-story-ar-title').textContent = story.arTitle;
            document.getElementById('sentence-step-indicator').textContent = `${state.sentenceIndex + 1} / ${totalSentences}`;

            arSentenceEl.textContent = currentObj.ar;
            progressBar.style.width = `${(state.sentenceIndex / totalSentences) * 100}%`;

            // Build Giant Clickable Words & Character Spans
            enContainer.innerHTML = '';
            const words = state.targetText.split(' ');
            let globalCharCounter = 0;

            words.forEach((wordText, wIdx) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'story-word';

                wordSpan.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openWordPopover(wordText, wordSpan);
                    hiddenInput.focus();
                });

                for (let c = 0; c < wordText.length; c++) {
                    const charSpan = document.createElement('span');
                    charSpan.className = `char ${globalCharCounter === 0 ? 'current' : 'untyped'}`;
                    charSpan.dataset.index = globalCharCounter;
                    charSpan.textContent = wordText[c];
                    wordSpan.appendChild(charSpan);
                    globalCharCounter++;
                }

                enContainer.appendChild(wordSpan);

                if (wIdx < words.length - 1) {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.className = 'char space-char untyped';
                    spaceSpan.dataset.index = globalCharCounter;
                    spaceSpan.innerHTML = '&nbsp;';
                    enContainer.appendChild(spaceSpan);
                    globalCharCounter++;
                }
            });

            summaryModal.hidden = true;
            hiddenInput.value = '';
            hiddenInput.focus();

            requestAnimationFrame(() => {
                updateGlidingCaret();
                highlightTargetKey(state.targetText[0]);
            });

            setTimeout(() => tts.speak(state.targetText), 160);
        }

        function renderStoriesModal() {
            const grid = document.getElementById('stories-grid');
            grid.innerHTML = '';

            STORIES_DATA.forEach((story, idx) => {
                const card = document.createElement('article');
                card.className = `story-card ${idx === state.storyIndex ? 'selected-story' : ''}`;
                card.innerHTML = `
                    <div class="story-cover">
                        <span class="cover-level level-${story.level}">${story.level}</span>
                        <span class="cover-emoji">${story.emoji}</span>
                    </div>
                    <div class="story-card-body">
                        <h3 class="story-title">${story.enTitle}</h3>
                        <p class="story-arabic-title">${story.arTitle}</p>
                        <p class="story-description">${story.desc}</p>
                        <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:12px; color:var(--ink-soft); font-weight:700;">${story.sentences.length} عبارات</span>
                            <span style="color:var(--indigo); font-weight:800; font-size:13px;">ابدأ الموضوع ←</span>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => {
                    state.storyIndex = idx;
                    state.sentenceIndex = 0;
                    resetTopicCumulativeStats();
                    storiesModal.hidden = true;
                    renderStoriesModal();
                    loadCurrentSentence();
                });
                grid.appendChild(card);
            });
        }

        /**************************************************************
         * 8. VIRTUAL KEYBOARD (HIDDEN BY DEFAULT)
         **************************************************************/
        const KEYBOARD_LAYOUT = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Shift'],
            ['Space']
        ];

        function buildVirtualKeyboard() {
            const container = document.getElementById('keyboard-rows');
            container.innerHTML = '';
            KEYBOARD_LAYOUT.forEach(row => {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'kb-row';
                row.forEach(label => {
                    const k = document.createElement('div');
                    let cls = '';
                    if (label === 'Shift') cls = 'kb-wide';
                    if (label === 'Space') cls = 'kb-space';
                    k.className = `kb-key ${cls}`;
                    k.dataset.key = label.toLowerCase();
                    k.textContent = label === 'Space' ? 'SPACE' : label.toUpperCase();
                    rowDiv.appendChild(k);
                });
                container.appendChild(rowDiv);
            });
        }

        function highlightTargetKey(expectedChar) {
            document.querySelectorAll('.kb-key').forEach(k => k.classList.remove('active-target'));
            if (!expectedChar || state.proMode) return;
            const isUpper = expectedChar !== expectedChar.toLowerCase() && expectedChar.toUpperCase() === expectedChar;
            const targetKey = expectedChar === ' ' ? 'space' : expectedChar.toLowerCase();
            document.querySelectorAll('.kb-key').forEach(k => {
                if (k.dataset.key === targetKey) k.classList.add('active-target');
                if (isUpper && k.dataset.key === 'shift') k.classList.add('active-target');
            });
        }

        /**************************************************************
         * 9. ULTRA-SIMPLE WORD TRANSLATION POPOVER (ARABIC WORD + X ONLY)
         **************************************************************/
        function openWordPopover(rawWord, anchorEl) {
            const clean = rawWord.replace(/[^a-zA-Z]/g, '').toLowerCase();
            if (!clean) return;

            // Immediately speak the clicked English word
            tts.speak(clean, 0.9);

            // Show ONLY the Arabic meaning and the X button
            popoverArWord.textContent = WORD_DICTIONARY[clean] || 'كلمة';
            wordPopover.hidden = false;

            const rect = anchorEl.getBoundingClientRect();
            const popRect = wordPopover.getBoundingClientRect();
            const popW = popRect.width || 130;

            let left = rect.left + (rect.width / 2) - (popW / 2);
            left = Math.max(12, Math.min(left, window.innerWidth - popW - 12));

            let top = rect.top - (popRect.height || 46) - 10;
            if (top < 14) {
                top = rect.bottom + 12;
            }

            wordPopover.style.left = `${left}px`;
            wordPopover.style.top = `${top}px`;
        }

        function hideWordPopover() {
            wordPopover.hidden = true;
        }

        /**************************************************************
         * 10. TYPING INPUT, SEAMLESS SENTENCE FLOW & END-OF-TOPIC MODAL
         **************************************************************/
        function updateLiveTelemetry() {
            if (state.isTopicCompleted) return;
            const currentSentenceElapsedMs = state.sentenceStartTime
                ? (performance.now() - state.sentenceStartTime)
                : 0;
            const totalElapsedMin = Math.max((state.topicActiveTimeMs + currentSentenceElapsedMs) / 60000, 0.008);
            const totalCharsTyped = state.topicTotalChars + state.charIndex;

            const wpm = Math.round((totalCharsTyped / 5) / totalElapsedMin);
            const acc = state.topicTotalKeystrokes > 0
                ? Math.round((state.topicCorrectKeystrokes / state.topicTotalKeystrokes) * 100)
                : 100;

            statWpm.textContent = wpm;
            statAcc.textContent = `${acc}%`;
        }

        function handleCharacterInput(typedChar) {
            if (state.isTopicCompleted || state.isTransitioning) return;

            if (!state.sentenceStartTime) {
                state.sentenceStartTime = performance.now();
                state.timerInterval = setInterval(updateLiveTelemetry, 150);
            }

            const expectedChar = state.targetText[state.charIndex];
            const currentSpan = enContainer.querySelector(`.char[data-index="${state.charIndex}"]`);
            if (!currentSpan) return;

            state.sentenceKeystrokes++;
            state.topicTotalKeystrokes++;

            if (typedChar.toLowerCase() === expectedChar.toLowerCase()) {
                state.sentenceCorrect++;
                state.topicCorrectKeystrokes++;
                state.combo++;
                if (state.combo > state.maxCombo) state.maxCombo = state.combo;

                sfx.playTick(state.combo);
                currentSpan.classList.remove('current', 'untyped', 'incorrect');
                currentSpan.classList.add('correct');

                state.charIndex++;
                statCombo.textContent = state.combo;

                const story = STORIES_DATA[state.storyIndex];
                const sentenceFraction = state.charIndex / state.targetText.length;
                const totalPct = ((state.sentenceIndex + sentenceFraction) / story.sentences.length) * 100;
                progressBar.style.width = `${totalPct}%`;

                if (state.charIndex >= state.targetText.length) {
                    handleSentenceFinished();
                } else {
                    const nextSpan = enContainer.querySelector(`.char[data-index="${state.charIndex}"]`);
                    if (nextSpan) {
                        nextSpan.classList.remove('untyped');
                        nextSpan.classList.add('current');
                    }
                    updateGlidingCaret();
                    highlightTargetKey(state.targetText[state.charIndex]);
                }
            } else {
                state.combo = 0;
                statCombo.textContent = '0';
                sfx.playError();
                currentSpan.classList.add('incorrect');

                typingBoxWrapper.classList.remove('shake');
                void typingBoxWrapper.offsetWidth;
                typingBoxWrapper.classList.add('shake');
            }

            updateLiveTelemetry();
        }

        function calculateFiveStars(wpm, acc) {
            let stars = 1;
            if (acc >= 75 && wpm >= 15) stars = 2;
            if (acc >= 85 && wpm >= 25) stars = 3;
            if (acc >= 92 && wpm >= 35) stars = 4;
            if (acc >= 96 && wpm >= 45) stars = 5;
            if (state.proMode && acc >= 90 && stars < 5) stars = Math.min(5, stars + 1);
            return stars;
        }

        function handleSentenceFinished() {
            clearInterval(state.timerInterval);

            // Accumulate sentence active time & characters into topic totals
            const elapsedMs = state.sentenceStartTime ? (performance.now() - state.sentenceStartTime) : 1200;
            state.topicActiveTimeMs += elapsedMs;
            state.topicTotalChars += state.targetText.length;
            state.sentenceStartTime = null;

            const story = STORIES_DATA[state.storyIndex];
            const isLastSentenceInTopic = state.sentenceIndex >= story.sentences.length - 1;

            if (!isLastSentenceInTopic) {
                // Sentences 1 through 9: Smooth automatic transition to next sentence without modal
                state.isTransitioning = true;
                sfx.playSentenceStep();
                typingBoxWrapper.classList.add('sentence-transition');

                setTimeout(() => {
                    state.sentenceIndex++;
                    typingBoxWrapper.classList.remove('sentence-transition');
                    loadCurrentSentence();
                }, 240);
            } else {
                // Sentence 10/10 completed: Show the 5-Star Topic Completion Modal
                completeFullTopic();
            }
        }

        function completeFullTopic() {
            state.isTopicCompleted = true;
            sfx.playWin();

            const totalMinutes = Math.max(state.topicActiveTimeMs / 60000, 0.02);
            const totalSeconds = Math.max(Math.round(state.topicActiveTimeMs / 1000), 1);
            const finalWpm = Math.round((state.topicTotalChars / 5) / totalMinutes);
            const finalAcc = state.topicTotalKeystrokes > 0
                ? Math.round((state.topicCorrectKeystrokes / state.topicTotalKeystrokes) * 100)
                : 100;

            const stars = calculateFiveStars(finalWpm, finalAcc);
            const proBonus = state.proMode ? 1.5 : 1;
            const points = Math.round(((finalWpm * 25 * (finalAcc / 100)) + (state.maxCombo * 5)) * proBonus);

            state.totalScore += points;
            totalScoreEl.textContent = state.totalScore.toLocaleString();

            const story = STORIES_DATA[state.storyIndex];

            const starsRow = document.getElementById('modal-stars');
            starsRow.innerHTML = '';
            for (let i = 1; i <= 5; i++) {
                const s = document.createElement('span');
                s.className = `star-item ${i <= stars ? 'earned' : ''}`;
                if (i <= stars) s.style.animationDelay = `${(i - 1) * 0.08}s`;
                s.textContent = '★';
                starsRow.appendChild(s);
            }

            const titles = {
                1: 'واصل التدرّب',
                2: 'أداء جيد',
                3: 'أحسنت!',
                4: 'مستوى رهيب!',
                5: 'أسطورة الكتابة! 🏆'
            };

            document.getElementById('modal-kicker').textContent = `أكملت الموضوع (${story.sentences.length} / ${story.sentences.length})`;
            document.getElementById('modal-title').textContent = titles[stars];
            document.getElementById('modal-subtitle').textContent = state.proMode
                ? ''
                : '';

            document.getElementById('modal-topic-en').textContent = `${story.level} — ${story.enTitle}`;
            document.getElementById('modal-topic-ar').textContent = story.arTitle;
            document.getElementById('modal-wpm').textContent = `${finalWpm} WPM`;
            document.getElementById('modal-acc').textContent = `${finalAcc}%`;
            document.getElementById('modal-time').textContent = `${totalSeconds} ثانية`;
            document.getElementById('modal-score').textContent = `+${points}`;
            document.getElementById('modal-next-label').textContent = 'التالي';

            summaryModal.hidden = false;
        }

        function retryCurrentTopic() {
            state.sentenceIndex = 0;
            resetTopicCumulativeStats();
            loadCurrentSentence();
        }

        function advanceToNextTopic() {
            state.storyIndex = (state.storyIndex + 1) % STORIES_DATA.length;
            state.sentenceIndex = 0;
            resetTopicCumulativeStats();
            renderStoriesModal();
            loadCurrentSentence();
        }

        /**************************************************************
         * 11. EVENT LISTENERS
         **************************************************************/
        window.addEventListener('keydown', (e) => {
            const capsWarn = document.getElementById('caps-lock-warning');
            if (e.getModifierState && e.getModifierState('CapsLock')) {
                capsWarn.hidden = false;
            } else {
                capsWarn.hidden = true;
            }

            if (!storiesModal.hidden) {
                if (e.key === 'Escape') storiesModal.hidden = true;
                return;
            }

            if (state.isTopicCompleted) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    advanceToNextTopic();
                }
                return;
            }

            if (e.key === 'Tab') {
                e.preventDefault();
                tts.speak(state.targetText);
                return;
            }

            if (e.key === 'Escape') {
                hideWordPopover();
                return;
            }

            if (e.ctrlKey || e.altKey || e.metaKey) return;

            if (e.key.length === 1) {
                e.preventDefault();
                hideWordPopover();
                handleCharacterInput(e.key);
            }
        });

        hiddenInput.addEventListener('input', () => {
            if (state.isTopicCompleted || state.isTransitioning) return;
            const val = hiddenInput.value;
            if (val.length > 0) {
                handleCharacterInput(val[val.length - 1]);
                hiddenInput.value = '';
            }
        });

        document.getElementById('zen-stage').addEventListener('click', (e) => {
            if (!e.target.closest('.story-word') && !e.target.closest('button')) {
                hideWordPopover();
                hiddenInput.focus();
            }
        });

        document.getElementById('popover-close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            hideWordPopover();
            hiddenInput.focus();
        });

        // Topic Modal Triggers
        document.getElementById('open-stories-btn').addEventListener('click', () => {
            storiesModal.hidden = false;
        });
        document.getElementById('story-step-pill').addEventListener('click', () => {
            storiesModal.hidden = false;
        });
        document.getElementById('close-stories-btn').addEventListener('click', () => {
            storiesModal.hidden = true;
            hiddenInput.focus();
        });

        // PRO MODE BUTTON (الوضع الاحترافي)
        const proModeBtn = document.getElementById('pro-mode-btn');
        const hintLetterBtn = document.getElementById('hint-letter-btn');
        proModeBtn.addEventListener('click', () => {
            state.proMode = !state.proMode;
            proModeBtn.setAttribute('aria-pressed', String(state.proMode));
            proModeBtn.classList.toggle('active-pro', state.proMode);
            enContainer.classList.toggle('pro-mode-active', state.proMode);
            hintLetterBtn.hidden = !state.proMode;
            if (state.proMode) tts.speak(state.targetText);
            highlightTargetKey(state.targetText[state.charIndex]);
            hiddenInput.focus();
        });

        hintLetterBtn.addEventListener('click', () => {
            if (state.isTopicCompleted || state.isTransitioning) return;
            const nextChar = state.targetText[state.charIndex];
            if (nextChar) handleCharacterInput(nextChar);
            hiddenInput.focus();
        });

        // Virtual Keyboard Toggle (Hidden by default)
        const toggleKbBtn = document.getElementById('toggle-kb-btn');
        const kbSection = document.getElementById('virtual-keyboard-section');
        toggleKbBtn.addEventListener('click', () => {
            state.keyboardVisible = !state.keyboardVisible;
            kbSection.hidden = !state.keyboardVisible;
            toggleKbBtn.classList.toggle('active-btn', state.keyboardVisible);
            requestAnimationFrame(updateGlidingCaret);
            hiddenInput.focus();
        });

        // Audio Controls
        document.getElementById('listen-sentence-btn').addEventListener('click', () => {
            tts.speak(state.targetText);
            hiddenInput.focus();
        });

        document.getElementById('speed-toggle-btn').addEventListener('click', () => {
            const rate = tts.toggleRate();
            document.getElementById('tts-speed-label').textContent = `${rate}x`;
            tts.speak(state.targetText);
            hiddenInput.focus();
        });

        document.getElementById('restart-sentence-btn').addEventListener('click', () => {
            // Restart only current sentence
            loadCurrentSentence();
        });

        document.getElementById('modal-replay-btn').addEventListener('click', retryCurrentTopic);
        document.getElementById('modal-next-btn').addEventListener('click', advanceToNextTopic);

        // SFX Toggle
        document.getElementById('toggle-sfx-btn').addEventListener('click', () => {
            sfx.enabled = !sfx.enabled;
            const icon = document.getElementById('sfx-icon');
            icon.setAttribute('data-lucide', sfx.enabled ? 'volume-2' : 'volume-x');
            lucide.createIcons();
            hiddenInput.focus();
        });

        // Theme Toggle
        document.getElementById('theme-toggle-btn').addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            const icon = document.getElementById('theme-icon');
            icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
            lucide.createIcons();
            hiddenInput.focus();
        });

        window.onload = function () {
            buildVirtualKeyboard();
            renderStoriesModal();
            loadCurrentSentence();
            lucide.createIcons();
        };