       /**************************************************************
         * 1. COMPREHENSIVE WORD DICTIONARY FOR ALL 100 SENTENCES
         **************************************************************/
        const WORD_DICTIONARY = {
            // Common & Pronouns / Prepositions
            "i": "أنا", "my": "لي / الخاص بي", "me": "ني / لي", "we": "نحن", "our": "لنا / الخاص بنا",
            "you": "أنت", "your": "لك / الخاص بك", "he": "هو", "she": "هي", "it": "هو / هي (لغير العاقل)",
            "they": "هم", "them": "هم / ها", "this": "هذا / هذه", "that": "ذلك / تلك", "these": "هؤلاء / هذه",
            "a": "أداة تنكير", "an": "أداة تنكير", "the": "الـ (التعريف)", "to": "إلى / لـ", "in": "في",
            "on": "على / في", "at": "في / عند", "for": "من أجل / لـ", "with": "مع / بـ", "from": "من",
            "of": "من / الخاص بـ", "by": "بواسطة / بـ", "about": "عن / حول", "after": "بعد", "before": "قبل",
            "near": "بالقرب من", "inside": "داخل", "into": "إلى داخل", "through": "خلال / عبر", "during": "أثناء / خلال",
            "without": "بدون", "between": "بين", "under": "تحت", "over": "فوق / عبر", "around": "حول",
            "and": "و", "or": "أو", "but": "لكن", "so": "لذلك", "because": "لأن", "while": "بينما",
            "when": "عندما", "then": "ثم", "always": "دائماً", "usually": "عادةً", "often": "غالباً",
            "never": "أبداً", "every": "كل", "each": "كل", "all": "جميع / كل", "some": "بعض",
            "many": "العديد من", "more": "أكثر", "most": "معظم / الأكثر", "very": "جداً", "too": "أيضاً / جداً",
            "only": "فقط", "also": "أيضاً", "now": "الآن", "today": "اليوم", "tomorrow": "غداً",
            "together": "معاً", "early": "مبكراً", "slowly": "بالتدريج / ببطء", "quickly": "بسرعة",
            "carefully": "بعناية", "politely": "بأدب", "clearly": "بوضوح", "daily": "يومياً",
            "regularly": "بانتظام", "truly": "حقاً", "finally": "أخيراً", "ahead": "مقدماً / للأمام",
            "away": "بعيداً", "back": "عائداً / للخلف", "up": "لأعلى / مبكراً", "out": "خارجاً",

            // Topic 1: Morning Routine (A1)
            "wake": "أستيقظ", "morning": "صباح", "open": "أفتح", "window": "نافذة", "fresh": "نقي / طازج",
            "air": "هواء", "wash": "أغسل", "face": "وجه", "cold": "بارد", "water": "ماء",
            "brush": "أفرش", "teeth": "أسنان", "make": "أرتب / أصنع", "bed": "سرير", "room": "غرفة",
            "prepare": "أحضّر / أجهز", "cup": "كوب", "hot": "ساخن", "tea": "شاي", "eat": "آكل / أتناول",
            "healthy": "صحي", "breakfast": "فطور", "at": "في", "home": "المنزل", "wear": "أرتدي",
            "clean": "نظيف", "clothes": "ملابس", "day": "يوم", "take": "آخذ / أركب", "bag": "حقيبة",
            "keys": "مفاتيح", "leave": "أغادر", "house": "منزل", "warm": "دافئ", "smile": "ابتسامة",

            // Topic 2: At the Cafe (A1)
            "walk": "أمشي / أدخل", "quiet": "هادئ", "cafe": "مقهى", "smell": "رائحة", "coffee": "قهوة",
            "is": "يكون / تكون", "nice": "جميل / لطيف", "sit": "أجلس", "small": "صغير", "wooden": "خشبي",
            "table": "طاولة", "waiter": "النادل", "gives": "يعطي", "menu": "قائمة الطعام", "order": "أطلب",
            "black": "سوداء / أسود", "cake": "كعكة", "brings": "يحضر", "drink": "مشروب / أشرب", "read": "أقرأ",
            "short": "قصير", "book": "كتاب", "soft": "هادئة / ناعمة", "music": "موسيقى", "plays": "تعزف / تشتغل",
            "place": "مكان", "pay": "أدفع", "bill": "الفاتورة", "card": "بطاقة", "thank": "أشكر",

            // Topic 3: Grocery Shopping (A1)
            "go": "أذهب", "supermarket": "سوبرماركت / متجر", "push": "أدفع", "shopping": "تسوق",
            "cart": "عربة", "buy": "أشتري", "red": "أحمر / حمراء", "apples": "تفاح", "sweet": "حلو",
            "bananas": "موز", "put": "أضع", "green": "خضراء / أخضر", "vegetables": "خضروات", "basket": "سلة",
            "choose": "أختار", "milk": "حليب", "white": "أبيض", "cheese": "جبن", "pick": "ألتقط / أختار",
            "brown": "أسمر / بني", "bread": "خبز", "bakery": "مخبز", "check": "أتفقد / أراجع", "price": "سعر",
            "item": "سلعة / غرض", "stand": "أقف", "line": "طابور", "cashier": "أمين الصندوق (الكاشير)",
            "pack": "أعبئ / أرتب", "food": "طعام", "paper": "ورقية", "bags": "أكياس", "carry": "أحمل",
            "groceries": "مقاضي / مشتريات", "car": "سيارة",

            // Topic 4: A Day at University (A2)
            "catch": "ألحق / أركب", "campus": "الحرم الجامعي", "bus": "حافلة", "eight": "الثامنة",
            "arrive": "أصل", "university": "جامعة", "gate": "بوابة", "time": "الوقت المحدد", "enter": "أدخل",
            "large": "كبيرة", "lecture": "محاضرة", "hall": "قاعة", "professor": "الأستاذ الجامعي",
            "explains": "يشرح", "new": "جديد", "lesson": "درس", "write": "أكتب", "important": "مهمة",
            "notes": "ملاحظات", "notebook": "دفتر", "ask": "أسأل / أطلب", "clear": "واضح / صافي",
            "question": "سؤال", "class": "الحصة / الفصل", "meet": "ألتقي / أجتمع", "friends": "أصدقاء",
            "lunch": "الغداء", "study": "أذاكر / أدرس", "library": "مكتبة", "borrow": "أستعير", "useful": "مفيد",
            "science": "علوم", "return": "أعود", "feeling": "شاعراً", "proud": "فخور",

            // Topic 5: Weekend Trip (A2)
            "travel": "نسافر / السفر", "suitcase": "حقيبة سفر", "friday": "الجمعة", "night": "ليلة / مساء",
            "drive": "نقود السيارة", "along": "على طول", "open": "مفتوح", "highway": "طريق سريع",
            "mountains": "الجبال", "look": "تبدو", "beautiful": "جميلة", "stop": "نتوقف", "station": "محطة",
            "rest": "راحة / نستريح", "cozy": "مريح / دافئ", "hotel": "فندق", "noon": "الظهيرة",
            "explore": "نستكشف", "old": "القديمة", "market": "سوق", "town": "المدينة / البلدة",
            "taste": "نتذوق", "traditional": "تقليدي / شعبي", "local": "محلي", "dishes": "أطباق",
            "bright": "مشرقة / ساطعة", "photos": "صور", "sunset": "غروب الشمس", "sit": "نجلس",
            "fire": "نار", "sky": "سماء", "sunday": "الأحد", "happy": "سعيدة", "memories": "ذكريات",

            // Topic 6: Job Interview (B1)
            "research": "أبحث عن", "company": "الشركة", "profile": "ملف / نبذة", "interview": "مقابلة العمل",
            "iron": "أكوي", "formal": "رسمي", "suit": "بدلة", "evening": "مساء", "reception": "الاستقبال",
            "desk": "مكتب", "fifteen": "خمس عشرة", "minutes": "دقائق", "greet": "أحيي", "hiring": "التوظيف",
            "manager": "مدير", "confident": "واثق", "introduce": "أقدم", "skills": "مهارات",
            "previous": "السابقة", "experience": "خبرة", "answer": "أجيب", "difficult": "صعبة",
            "questions": "أسئلة", "calm": "هادئ", "voice": "صوت", "share": "أشارك", "creative": "إبداعية",
            "ideas": "أفكار", "future": "المستقبلية", "projects": "مشاريع", "team": "الفريق",
            "appreciates": "يقدّر", "honest": "صادقة", "communication": "تواصل", "inquire": "أستفسر",
            "company": "الشركة", "culture": "ثقافة / بيئة", "growth": "النمو / التطور", "send": "أرسل",
            "polite": "مهذبة", "email": "رسالة بريد إلكتروني", "meeting": "الاجتماع",

            // Topic 7: Healthy Lifestyle (B1)
            "good": "جيد", "health": "صحة", "starts": "تبدأ", "simple": "بسيطة", "habits": "عادات",
            "glass": "كوب", "pure": "نقي", "waking": "الاستيقاظ", "stretch": "أمدد", "muscles": "عضلات",
            "ten": "عشر", "park": "الحديقة", "thirty": "ثلاثين", "meals": "وجبات", "proteins": "بروتينات",
            "avoid": "أتجنب", "sugary": "السكرية", "drinks": "المشروبات", "fast": "السريعة", "junk": "الضارة",
            "take": "آخذ", "breaks": "فترات راحة", "working": "العمل", "calm": "أهدئ", "mind": "عقل",
            "deep": "عميق", "breathing": "تنفس", "turn": "أغلق", "off": "إيقاف", "digital": "الرقمية",
            "screens": "الشاشات", "bedtime": "وقت النوم", "sleep": "أنام", "seven": "سبع", "hours": "ساعات",
            "peaceful": "هادئة",

            // Topic 8: Planning a Journey (B1)
            "choose": "أختار", "exciting": "مثير / شيق", "destination": "وجهة سفر", "summer": "الصيف",
            "holiday": "عطلة", "compare": "أقارن", "flight": "رحلة طيران", "tickets": "تذاكر", "travel": "سفر",
            "websites": "مواقع إلكترونية", "book": "أحجز", "comfortable": "مريح", "seat": "مقعد", "near": "قرب",
            "reserve": "أحجز", "central": "مركزي", "city": "المدينة", "create": "أنشئ", "flexible": "مرن",
            "schedule": "جدول", "tours": "جولات", "check": "أتحقق من", "passport": "جواز السفر", "validity": "صلاحية",
            "entry": "دخول", "requirements": "متطلبات", "light": "خفيفة", "weather": "الطقس",
            "download": "أحمّل", "offline": "بدون إنترنت", "maps": "خرائط", "phone": "هاتف",
            "keep": "أحتفظ بـ", "copies": "نسخ", "documents": "مستندات", "safe": "آمن",
            "airport": "المطار", "ready": "مستعد", "adventure": "مغامرة",

            // Topic 9: Remote Work & Tech (B2)
            "modern": "الحديثة", "technology": "التكنولوجيا", "allows": "تتيح / تسمح", "teams": "فرق العمل",
            "collaborate": "يتعاونون", "anywhere": "أي مكان", "organize": "أنظم", "dedicated": "مخصصة",
            "workspace": "مساحة عمل", "focus": "التركيز", "review": "أراجع", "priority": "أولوية",
            "tasks": "مهام", "project": "المشروع", "dashboard": "لوحة التحكم", "join": "أنضم إلى",
            "morning": "صباحي", "video": "فيديو / مرئي", "conference": "اجتماع / مؤتمر", "colleagues": "زملاء العمل",
            "share": "نشارك", "progress": "التقدم", "updates": "تحديثات", "solve": "نحل", "technical": "تقنية",
            "issues": "مشكلات", "cloud": "السحابية", "software": "البرمجيات", "keeps": "تحفظ", "shared": "المشتركة",
            "files": "الملفات", "secure": "آمنة", "mute": "أكتم", "notifications": "الإشعارات", "complete": "أنجز",
            "complex": "المعقدة", "assignments": "المهام / التكليفات", "clear": "واضحة", "written": "المكتوبة",
            "messages": "الرسائل", "prevent": "تمنع", "misunderstandings": "سوء الفهم", "balance": "أوازن",
            "professional": "المهنية", "duties": "الواجبات", "personal": "الشخصية", "wellbeing": "الرفاهية / الراحة",
            "shut": "أغلق", "down": "إيقاف", "laptop": "الحاسوب المحمول", "workday": "يوم العمل", "ends": "ينتهي",

            // Topic 10: Self-Improvement & Discipline (B2)
            "personal": "الشخصي", "growth": "التطور / النمو", "requires": "يتطلب", "patience": "الصبر",
            "consistent": "مستمر / ثابت", "effort": "جهد", "set": "أحدد", "realistic": "واقعية",
            "goals": "أهداف", "track": "أتابع", "weekly": "الأسبوعي", "progress": "التقدم", "discipline": "الانضباط",
            "helps": "يساعد", "continue": "أستمر", "motivation": "الحافز", "fades": "يتلاشى / يضعف",
            "read": "أقرأ", "inspiring": "ملهمة", "books": "كتب", "expand": "أوسع", "perspective": "نظرتي / أفقي",
            "learning": "تعلّم", "foreign": "أجنبية", "language": "لغة", "sharpens": "يصقل / يقوي", "memory": "الذاكرة",
            "accept": "أتقبل", "mistakes": "الأخطاء", "valuable": "قيّمة", "lessons": "دروس", "success": "النجاح",
            "surround": "أحيط", "myself": "نفسي", "positive": "إيجابيين", "ambitious": "طموحين", "people": "أشخاص",
            "protect": "أحمي", "energy": "طاقتي", "useless": "غير المفيدة", "distractions": "المشتتات",
            "reflect": "أتأمل / أراجع", "achievements": "إنجازاتي", "gratitude": "امتنان", "small": "الصغيرة",
            "steps": "الخطوات", "build": "تبني", "extraordinary": "استثنائية", "results": "نتائج"
        };

        /**************************************************************
         * 2. 10 TOPICS WITH EXACTLY 10 CONNECTED SENTENCES EACH (100 TOTAL)
         *    3 Topics A1 | 2 Topics A2 | 3 Topics B1 | 2 Topics B2
         **************************************************************/
        const STORIES_DATA = [
            // ================= A1 TOPICS (3) =================
            {
                id: "a1-morning-routine",
                level: "A1",
                emoji: "☀️",
                enTitle: "Morning Routine",
                arTitle: "روتين الصباح",
                desc: "عشر جمل بسيطة ومترابطة تصف خطواتك اليومية منذ لحظة الاستيقاظ وحتى مغادرة المنزل بابتسامة.",
                sentences: [
                    { en: "I wake up early every morning", ar: "أستيقظ مبكراً كل صباح" },
                    { en: "I open the window for fresh air", ar: "أفتح النافذة للهواء النقي" },
                    { en: "I wash my face with cold water", ar: "أغسل وجهي بالماء البارد" },
                    { en: "I brush my teeth carefully", ar: "أفرش أسناني بعناية" },
                    { en: "I make my bed in my room", ar: "أرتب سريري في غرفتي" },
                    { en: "I prepare a cup of hot tea", ar: "أحضّر كوباً من الشاي الساخن" },
                    { en: "I eat a healthy breakfast at home", ar: "أتناول فطوراً صحياً في المنزل" },
                    { en: "I wear clean clothes for the day", ar: "أرتدي ملابس نظيفة لليوم" },
                    { en: "I take my bag and my keys", ar: "آخذ حقيبتي ومفاتيحي" },
                    { en: "I leave the house with a warm smile", ar: "أغادر المنزل بابتسامة دافئة" }
                ]
            },
            {
                id: "a1-at-the-cafe",
                level: "A1",
                emoji: "☕",
                enTitle: "At the Cafe",
                arTitle: "في المقهى",
                desc: "قصة قصيرة في المقهى تبدأ من دخولك وطلب القهوة والكعكة وحتى قراءة كتابك ودفع الفاتورة.",
                sentences: [
                    { en: "I walk into a quiet cafe", ar: "أدخل إلى مقهى هادئ" },
                    { en: "The smell of fresh coffee is nice", ar: "رائحة القهوة الطازجة جميلة" },
                    { en: "I sit at a small wooden table", ar: "أجلس على طاولة خشبية صغيرة" },
                    { en: "The waiter gives me the menu", ar: "النادل يعطيني قائمة الطعام" },
                    { en: "I order hot black coffee and cake", ar: "أطلب قهوة سوداء ساخنة وكعكة" },
                    { en: "He brings my drink quickly", ar: "هو يحضر مشروبي بسرعة" },
                    { en: "I read a short book while I drink", ar: "أقرأ كتاباً قصيراً بينما أشرب" },
                    { en: "Soft music plays in the place", ar: "موسيقى هادئة تعزف في المكان" },
                    { en: "I pay the bill by card", ar: "أدفع الفاتورة بالبطاقة" },
                    { en: "I thank the waiter and walk out", ar: "أشكر النادل وأخرج" }
                ]
            },
            {
                id: "a1-grocery-shopping",
                level: "A1",
                emoji: "🛒",
                enTitle: "Grocery Shopping",
                arTitle: "تسوق البقالة",
                desc: "جولة تسوق متكاملة لشراء الفواكه والخضروات والخبز الطازج وترتيب المشتريات.",
                sentences: [
                    { en: "I go to the supermarket today", ar: "أذهب إلى السوبرماركت اليوم" },
                    { en: "I push a clean shopping cart", ar: "أدفع عربة تسوق نظيفة" },
                    { en: "I buy red apples and sweet bananas", ar: "أشتري تفاحاً أحمر وموزاً حلواً" },
                    { en: "I put fresh green vegetables in the basket", ar: "أضع خضروات خضراء طازجة في السلة" },
                    { en: "I choose cold milk and white cheese", ar: "أختار حليباً بارداً وجبناً أبيض" },
                    { en: "I pick warm brown bread from the bakery", ar: "أختار خبزاً أسمراً دافئاً من المخبز" },
                    { en: "I check the price of every item", ar: "أتفقد سعر كل سلعة" },
                    { en: "I stand in line at the cashier", ar: "أقف في الطابور عند الكاشير" },
                    { en: "I pack my food in paper bags", ar: "أرتب طعامي في أكياس ورقية" },
                    { en: "I carry the groceries to my car", ar: "أحمل المشتريات إلى سيارتي" }
                ]
            },

            // ================= A2 TOPICS (2) =================
            {
                id: "a2-day-at-university",
                level: "A2",
                emoji: "🎓",
                enTitle: "A Day at University",
                arTitle: "يوم في الجامعة",
                desc: "رحلة طالب جامعي منذ ركوب الحافلة صباحاً وحضور المحاضرات وحتى المذاكرة في المكتبة.",
                sentences: [
                    { en: "I catch the campus bus at eight", ar: "ألحق حافلة الحرم الجامعي في الثامنة" },
                    { en: "I arrive at the university gate on time", ar: "أصل إلى بوابة الجامعة في الوقت المحدد" },
                    { en: "I enter the large lecture hall early", ar: "أدخل قاعة المحاضرات الكبيرة مبكراً" },
                    { en: "The professor explains a new lesson clearly", ar: "الأستاذ يشرح درساً جديداً بوضوح" },
                    { en: "I write important notes in my notebook", ar: "أكتب ملاحظات مهمة في دفتري" },
                    { en: "I ask a clear question during class", ar: "أطرح سؤالاً واضحاً أثناء المحاضرة" },
                    { en: "I meet my friends for lunch together", ar: "ألتقي بأصدقائي لتناول الغداء معاً" },
                    { en: "We study inside the quiet library", ar: "نذاكر داخل المكتبة الهادئة" },
                    { en: "I borrow a useful science book", ar: "أستعير كتاب علوم مفيداً" },
                    { en: "I return home feeling proud of my day", ar: "أعود للمنزل شاعراً بالفخر بيومي" }
                ]
            },
            {
                id: "a2-weekend-trip",
                level: "A2",
                emoji: "🏞️",
                enTitle: "Weekend Trip",
                arTitle: "رحلة نهاية الأسبوع",
                desc: "قصة ممتعة عن تجهيز الحقيبة والسفر بالسيارة نحو الجبال واستكشاف السوق القديم.",
                sentences: [
                    { en: "We pack our travel suitcase on Friday night", ar: "نجهز حقيبة سفرنا ليلة الجمعة" },
                    { en: "We drive along the open highway early", ar: "نقود على طول الطريق السريع المفتوح مبكراً" },
                    { en: "The green mountains look very beautiful", ar: "الجبال الخضراء تبدو جميلة جداً" },
                    { en: "We stop at a small station for rest", ar: "نتوقف في محطة صغيرة للراحة" },
                    { en: "We arrive at a cozy hotel before noon", ar: "نصل إلى فندق مريح قبل الظهيرة" },
                    { en: "We explore the old market in town", ar: "نستكشف السوق القديم في البلدة" },
                    { en: "We taste traditional local dishes together", ar: "نتذوق الأطباق المحلية التقليدية معاً" },
                    { en: "I take bright photos of the sunset", ar: "ألتقط صوراً مشرقة لغروب الشمس" },
                    { en: "We sit near the warm fire at night", ar: "نجلس بالقرب من النار الدافئة ليلاً" },
                    { en: "We return on Sunday with happy memories", ar: "نعود يوم الأحد بذكريات سعيدة" }
                ]
            },

            // ================= B1 TOPICS (3) =================
            {
                id: "b1-job-interview",
                level: "B1",
                emoji: "💼",
                enTitle: "Job Interview",
                arTitle: "مقابلة عمل",
                desc: "خطوات الاستعداد لمقابلة عمل احترافية، والتحدث بثقة عن المهارات والخبرات.",
                sentences: [
                    { en: "I research the company profile before my interview", ar: "أبحث عن ملف الشركة قبل مقابلة العمل" },
                    { en: "I iron my formal suit in the evening", ar: "أكوي بدلتي الرسمية في المساء" },
                    { en: "I arrive at the reception desk fifteen minutes early", ar: "أصل إلى مكتب الاستقبال قبل خمس عشرة دقيقة" },
                    { en: "I greet the hiring manager with a confident smile", ar: "أحيي مدير التوظيف بابتسامة واثقة" },
                    { en: "I introduce my skills and previous work experience", ar: "أقدم مهاراتي وخبرتي العملية السابقة" },
                    { en: "I answer difficult questions in a calm voice", ar: "أجيب عن الأسئلة الصعبة بصوت هادئ" },
                    { en: "I share creative ideas for future projects", ar: "أشارك أفكاراً إبداعية للمشاريع المستقبلية" },
                    { en: "The team appreciates my honest communication", ar: "الفريق يقدّر تواصلي الصادق" },
                    { en: "I inquire about the company culture and growth", ar: "أستفسر عن بيئة الشركة وفرص التطور" },
                    { en: "I send a polite thank you email after the meeting", ar: "أرسل رسالة شكر مهذبة بعد الاجتماع" }
                ]
            },
            {
                id: "b1-healthy-lifestyle",
                level: "B1",
                emoji: "🥗",
                enTitle: "Healthy Lifestyle",
                arTitle: "نمط حياة صحي",
                desc: "عادات يومية مترابطة للعناية بصحة الجسد والذهن من خلال الرياضة والغذاء المتوازن.",
                sentences: [
                    { en: "Good health starts with simple daily habits", ar: "الصحة الجيدة تبدأ بعادات يومية بسيطة" },
                    { en: "I drink a glass of pure water after waking up", ar: "أشرب كوباً من الماء النقي بعد الاستيقاظ" },
                    { en: "I stretch my muscles for ten minutes every morning", ar: "أمدد عضلاتي لعشر دقائق كل صباح" },
                    { en: "I walk quickly in the park for thirty minutes", ar: "أمشي بسرعة في الحديقة لثلاثين دقيقة" },
                    { en: "I prepare fresh meals with proteins and vegetables", ar: "أحضّر وجبات طازجة بالبروتينات والخضروات" },
                    { en: "I avoid sugary drinks and fast junk food", ar: "أتجنب المشروبات السكرية والوجبات السريعة الضارة" },
                    { en: "I take short breaks while working on my desk", ar: "آخذ فترات راحة قصيرة أثناء العمل على مكتبي" },
                    { en: "I calm my mind through deep breathing daily", ar: "أهدئ عقلي من خلال التنفس العميق يومياً" },
                    { en: "I turn off digital screens before bedtime", ar: "أغلق الشاشات الرقمية قبل وقت النوم" },
                    { en: "I sleep seven hours every peaceful night", ar: "أنام سبع ساعات كل ليلة هادئة" }
                ]
            },
            {
                id: "b1-planning-a-journey",
                level: "B1",
                emoji: "✈️",
                enTitle: "Planning a Journey",
                arTitle: "التخطيط للسفر",
                desc: "كيف تخطط لرحلة سفر ناجحة بدءاً من اختيار الوجهة وحجز التذاكر وحتى الوصول للمطار.",
                sentences: [
                    { en: "I choose an exciting destination for my summer holiday", ar: "أختار وجهة شيقة لعطلتي الصيفية" },
                    { en: "I compare flight tickets on travel websites", ar: "أقارن تذاكر الطيران على مواقع السفر" },
                    { en: "I book a comfortable seat near the window", ar: "أحجز مقعداً مريحاً بالقرب من النافذة" },
                    { en: "I reserve a clean room in a central city hotel", ar: "أحجز غرفة نظيفة في فندق وسط المدينة" },
                    { en: "I create a flexible schedule for daily tours", ar: "أنشئ جدولاً مرناً للجولات اليومية" },
                    { en: "I check my passport validity and entry requirements", ar: "أتحقق من صلاحية جواز سفري ومتطلبات الدخول" },
                    { en: "I pack light clothes for the warm weather", ar: "أحزم ملابس خفيفة للطقس الدافئ" },
                    { en: "I download offline maps on my phone", ar: "أحمّل خرائط تعمل بدون إنترنت على هاتفي" },
                    { en: "I keep copies of important documents in a safe bag", ar: "أحتفظ بنسخ من المستندات المهمة في حقيبة آمنة" },
                    { en: "I arrive at the airport early and ready for adventure", ar: "أصل إلى المطار مبكراً ومستعداً للمغامرة" }
                ]
            },

            // ================= B2 TOPICS (2) =================
            {
                id: "b2-remote-work-tech",
                level: "B2",
                emoji: "💻",
                enTitle: "Remote Work & Tech",
                arTitle: "العمل عن بعد والتكنولوجيا",
                desc: "إدارة يوم عمل تقني عن بعد بكفاءة عالية والتواصل الفعّال مع الفريق عبر الأدوات السحابية.",
                sentences: [
                    { en: "Modern technology allows teams to collaborate from anywhere", ar: "التكنولوجيا الحديثة تتيح للفرق التعاون من أي مكان" },
                    { en: "I organize a quiet dedicated workspace for deep focus", ar: "أنظم مساحة عمل هادئة ومخصصة للتركيز العميق" },
                    { en: "I review my priority tasks on the project dashboard", ar: "أراجع مهامي ذات الأولوية على لوحة تحكم المشروع" },
                    { en: "I join the morning video conference with my colleagues", ar: "أنضم إلى اجتماع الفيديو الصباحي مع زملائي" },
                    { en: "We share progress updates and solve technical issues", ar: "نشارك تحديثات التقدم ونحل المشكلات التقنية" },
                    { en: "Cloud software keeps all our shared files secure", ar: "البرمجيات السحابية تحفظ جميع ملفاتنا المشتركة آمنة" },
                    { en: "I mute phone notifications to complete complex assignments", ar: "أكتم إشعارات الهاتف لإنجاز المهام المعقدة" },
                    { en: "Clear written messages prevent misunderstandings between teams", ar: "الرسائل المكتوبة الواضحة تمنع سوء الفهم بين الفرق" },
                    { en: "I balance professional duties with personal wellbeing", ar: "أوازن بين الواجبات المهنية والراحة الشخصية" },
                    { en: "I shut down my laptop when the workday ends", ar: "أغلق حاسوبي المحمول عندما ينتهي يوم العمل" }
                ]
            },
            {
                id: "b2-self-improvement",
                level: "B2",
                emoji: "🚀",
                enTitle: "Self-Improvement & Discipline",
                arTitle: "تطوير الذات والانضباط",
                desc: "عشر جمل ملهمة حول بناء الانضباط الذاتي، وتعلّم اللغات، وتحويل الخطوات الصغيرة إلى نتائج استثنائية.",
                sentences: [
                    { en: "Personal growth requires patience and consistent daily effort", ar: "التطور الشخصي يتطلب الصبر والجهد اليومي المستمر" },
                    { en: "I set realistic goals and track my weekly progress", ar: "أحدد أهدافاً واقعية وأتابع تقدمي الأسبوعي" },
                    { en: "Discipline helps me continue when motivation fades away", ar: "الانضباط يساعدني على الاستمرار عندما يتلاشى الحافز" },
                    { en: "I read inspiring books to expand my perspective", ar: "أقرأ كتباً ملهمة لتوسيع نظرتي للحياة" },
                    { en: "Learning a foreign language sharpens the memory", ar: "تعلّم لغة أجنبية يصقل الذاكرة ويقويها" },
                    { en: "I accept mistakes as valuable lessons for success", ar: "أتقبل الأخطاء كدروس قيّمة من أجل النجاح" },
                    { en: "I surround myself with positive and ambitious people", ar: "أحيط نفسي بأشخاص إيجابيين وطموحين" },
                    { en: "I protect my time and energy from useless distractions", ar: "أحمي وقتي وطاقتي من المشتتات غير المفيدة" },
                    { en: "I reflect on my daily achievements with gratitude", ar: "أتأمل في إنجازاتي اليومية بامتنان" },
                    { en: "Small daily steps always build extraordinary results", ar: "الخطوات اليومية الصغيرة تبني دائماً نتائج استثنائية" }
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
                            <span style="font-size:12px; color:var(--ink-soft); font-weight:700;">${story.sentences.length} جمل مترابطة</span>
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
                    k.textContent = label === 'Space' ? 'SPACE (مسافة)' : label.toUpperCase();
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

            if (typedChar === expectedChar) {
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
            if (acc >= 75 && wpm >= 12) stars = 2;
            if (acc >= 85 && wpm >= 20) stars = 3;
            if (acc >= 92 && wpm >= 30) stars = 4;
            if (acc >= 96 && wpm >= 38) stars = 5;
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
            const finalCpm = Math.round(state.topicTotalChars / totalMinutes);
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
                1: 'بداية طيبة!',
                2: 'أداء جيد!',
                3: 'مستوى رائع!',
                4: 'أداء متقن وسريع!',
                5: 'إتقان كامل — 5 نجوم!'
            };

            document.getElementById('modal-kicker').textContent = `أكملت الموضوع (${story.sentences.length} / ${story.sentences.length})`;
            document.getElementById('modal-title').textContent = titles[stars];
            document.getElementById('modal-subtitle').textContent = state.proMode
                ? 'أحسنت إتمام جميع جمل الموضوع بالاستماع في الوضع الاحترافي!'
                : 'أنهيت جميع الجمل العشر في هذا الموضوع بنجاح';

            document.getElementById('modal-topic-en').textContent = `${story.level} — ${story.enTitle}`;
            document.getElementById('modal-topic-ar').textContent = story.arTitle;
            document.getElementById('modal-wpm').textContent = `${finalWpm} ك/د (${finalCpm} ح/د)`;
            document.getElementById('modal-acc').textContent = `${finalAcc}%`;
            document.getElementById('modal-time').textContent = `${totalSeconds} ثانية`;
            document.getElementById('modal-score').textContent = `+${points}`;
            document.getElementById('modal-next-label').textContent = 'الموضوع التالي';

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