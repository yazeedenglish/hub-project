/**
 * Yazeed Speaking English Practice App
 * - 20 Topics (4 per CEFR Level A1-C1), 10 sentences each (No trailing periods, 25-35 chars avg)
 * - Separate WORD_TRANSLATIONS dictionary organized by topic directly below TOPICS_DATA
 * - Interactive word translation popup + pronunciation on click
 * - Number normalization (e.g., "2" <-> "two", "7:15" <-> "seven fifteen")
 * - Samantha voice prioritized on iOS devices (iPhone / iPad)
 */

const TOPICS_DATA = [
    // ==================== LEVEL A1 (4 Topics) ====================
    {
        id: "a1-cafe",
        level: "A1",
        emoji: "☕",
        titleAr: "في المقهى",
        titleEn: "At the Café",
        desc: "زيارة هادئة للمقهى لطلب القهوة والقراءة",
        sentences: [
            { en: "We sit near the bright window", ar: "نحن نجلس بالقرب من النافذة المشرقة" },
            { en: "Can I see the coffee menu please?", ar: "هل يمكنني رؤية قائمة القهوة من فضلك؟" },
            { en: "I would like a hot cup of coffee", ar: "أود كوباً ساخناً من القهوة" },
            { en: "My friend wants tea with fresh mint", ar: "صديقي يريد شاياً مع النعناع الطازج" },
            { en: "Please bring us two cold glasses", ar: "من فضلك أحضر لنا كوبين باردين" },
            { en: "The coffee here is always fresh", ar: "القهوة هنا طازجة دائماً" },
            { en: "Would you like some sweet cake?", ar: "هل ترغب في بعض الكعك الحلو؟" },
            { en: "We also want three small cookies", ar: "نريد أيضاً ثلاث قطع بسكويت صغيرة" },
            { en: "Excuse me, can we have the bill?", ar: "عفواً، هل يمكننا الحصول على الفاتورة؟" },
            { en: "Thank you for the great service", ar: "شكراً لك على الخدمة الرائعة" }
        ]
    },
    {
        id: "a1-morning",
        level: "A1",
        emoji: "☀️",
        titleAr: "روتين الصباح",
        titleEn: "Morning Routine",
        desc: "خطوات الصباح من الاستيقاظ حتى الخروج",
        sentences: [
            { en: "I wake up at six every morning", ar: "أستيقظ في السادسة كل صباح" },
            { en: "First, I wash my face with water", ar: "أولاً، أغسل وجهي بالماء" },
            { en: "I brush my teeth for two minutes", ar: "أنظف أسناني لمدة دقيقتين" },
            { en: "Then I wear my clean blue shirt", ar: "ثم أرتدي قميصي الأزرق النظيف" },
            { en: "I eat warm eggs for breakfast", ar: "أتناول بيضاً دافئاً على الفطور" },
            { en: "My mother drinks a cup of coffee", ar: "تشرب أمي كوباً من القهوة" },
            { en: "I put my book in my black bag", ar: "أضع كتابي في حقيبتي السوداء" },
            { en: "The yellow bus arrives at seven", ar: "تصل الحافلة الصفراء في السابعة" },
            { en: "I say goodbye to my kind family", ar: "أودع عائلتي اللطيفة" },
            { en: "I am ready for a happy new day", ar: "أنا مستعد ليوم جديد سعيد" }
        ]
    },
    {
        id: "a1-family-dinner",
        level: "A1",
        emoji: "🍲",
        titleAr: "عشاء العائلة",
        titleEn: "Family Dinner",
        desc: "تحضير العشاء واجتماع العائلة حول المائدة",
        sentences: [
            { en: "The family sits around the table", ar: "تجلس العائلة حول المائدة" },
            { en: "Mother cooks a bowl of hot soup", ar: "تطهو الأم وعاءً من الحساء الساخن" },
            { en: "The children wash their hands now", ar: "يغسل الأطفال أيديهم الآن" },
            { en: "Father cuts the roasted chicken", ar: "يقطع الأب الدجاج المشوي" },
            { en: "We pass the basket of warm bread", ar: "نمرر سلة الخبز الدافئ" },
            { en: "Everyone talks about their day", ar: "يتحدث الجميع عن يومهم" },
            { en: "Please pass me the green salad", ar: "من فضلك مرر لي السلطة الخضراء" },
            { en: "We drink sweet juice after dinner", ar: "نشرب عصيراً حلواً بعد العشاء" },
            { en: "My sister helps clear the table", ar: "تساعد أختي في تنظيف المائدة" },
            { en: "We spend a quiet night together", ar: "نقضي ليلة هادئة معاً" }
        ]
    },
    {
        id: "a1-grocery",
        level: "A1",
        emoji: "🛒",
        titleAr: "التسوق لشراء الاحتياجات",
        titleEn: "Grocery Shopping",
        desc: "جولة لشراء الفواكه والخضراوات والخبز",
        sentences: [
            { en: "Welcome to our local food store", ar: "أهلاً بك في متجر الطعام المحلي" },
            { en: "These red apples are very sweet", ar: "هذا التفاح الأحمر حلو جداً" },
            { en: "How much is one kilo of oranges?", ar: "بكم كيلو البرتقال الواحد؟" },
            { en: "I need five yellow bananas today", ar: "أحتاج خمس موزات صفراء اليوم" },
            { en: "Do you have fresh cold milk here?", ar: "هل لديكم حليب بارد طازج هنا؟" },
            { en: "Yes, it came from the farm today", ar: "نعم، لقد وصل من المزرعة اليوم" },
            { en: "Please put the bread in a bag", ar: "من فضلك ضع الخبز في كيس" },
            { en: "I will pay with cash right now", ar: "سأدفع نقداً الآن" },
            { en: "Here is your change and receipt", ar: "تفضل الباقي والإيصال الخاص بك" },
            { en: "Have a nice day and see you soon", ar: "أتمنى لك يوماً سعيداً وأراك قريباً" }
        ]
    },

    // ==================== LEVEL A2 (4 Topics) ====================
    {
        id: "a2-weekend",
        level: "A2",
        emoji: "🏞️",
        titleAr: "رحلة نهاية الأسبوع",
        titleEn: "Weekend Trip",
        desc: "رحلة بالسيارة لاستكشاف التلال والحديقة",
        sentences: [
            { en: "The weather is sunny this morning", ar: "الطقس مشمس هذا الصباح" },
            { en: "We packed fresh juice and snacks", ar: "جهزنا عصيراً طازجاً ووجبات خفيفة" },
            { en: "The boy is playing in the garden", ar: "يلعب الولد في الحديقة" },
            { en: "We sat under the tall palm trees", ar: "جلسنا تحت أشجار النخيل الطويلة" },
            { en: "Many families walk near the lake", ar: "تتجول عائلات كثيرة قرب البحيرة" },
            { en: "My sister tookfour family photos", ar: "التقطت أختي أربع صور عائلية" },
            { en: "We fed the ducks pieces of bread", ar: "أطعمنا البط قطعاً من الخبز" },
            { en: "A cool breeze blew at four oclock", ar: "هب نسيم بارد في الساعة الرابعة" },
            { en: "We cleaned our place before leaving", ar: "نظفنا مكاننا قبل المغادرة" },
            { en: "It was a wonderful weekend trip", ar: "كانت رحلة نهاية أسبوع رائعة" }
        ]
    },
    {
        id: "a2-university",
        level: "A2",
        emoji: "🎓",
        titleAr: "يوم في الجامعة",
        titleEn: "A Day at University",
        desc: "يوم طالب جامعي بين المحاضرات والمكتبة",
        sentences: [
            { en: "I arrive at campus before nine", ar: "أصل إلى الحرم الجامعي قبل التاسعة" },
            { en: "My first class is computer science", ar: "محاضرتي الأولى هي علوم الحاسب" },
            { en: "The teacher gives clear examples", ar: "يقدم المعلم أمثلة واضحة" },
            { en: "I meet my friends during the break", ar: "أقابل أصدقائي أثناء الاستراحة" },
            { en: "We borrow books from the library", ar: "نستعير كتباً من المكتبة" },
            { en: "I write notes in every lecture", ar: "أكتب ملاحظات في كل محاضرة" },
            { en: "Group projects build our teamwork", ar: "المشاريع الجماعية تبني عملنا الجماعي" },
            { en: "The campus garden is very quiet", ar: "حديقة الجامعة هادئة جداً" },
            { en: "I send my weekly report at eight", ar: "أرسل تقريري الأسبوعي في الثامنة" },
            { en: "College life teaches time skills", ar: "الحياة الجامعية تعلم مهارات الوقت" }
        ]
    },
    {
        id: "a2-airport",
        level: "A2",
        emoji: "✈️",
        titleAr: "في المطار قبل السفر",
        titleEn: "At the Airport Before Flying",
        desc: "إجراءات السفر وحقائب الطائرة",
        sentences: [
            { en: "We reached the airport at ten", ar: "وصلنا إلى المطار في العاشرة" },
            { en: "Please show me your passport now", ar: "يرجى إظهار جواز سفرك الآن" },
            { en: "I have one bag and a small pack", ar: "لدي حقيبة واحدة وحقيبة ظهر صغيرة" },
            { en: "Do you want a window seat today?", ar: "هل تريد مقعداً بجانب النافذة اليوم؟" },
            { en: "Our flight leaves from gate six", ar: "تغادر رحلتنا من البوابة السادسة" },
            { en: "We must go through security now", ar: "يجب أن نمر عبر التفتيش الأمني الآن" },
            { en: "Let us buy water from the shop", ar: "دعنا نشتري ماءً من المتجر" },
            { en: "Boarding starts in ten minutes", ar: "يبدأ صعود الطائرة خلال عشر دقائق" },
            { en: "Please fasten your seat belt now", ar: "يرجى ربط حزام الأمان الآن" },
            { en: "I hope we have a smooth flight", ar: "آمل أن نحظى برحلة سلسة" }
        ]
    },
    {
        id: "a2-doctor",
        level: "A2",
        emoji: "🩺",
        titleAr: "زيارة عيادة الطبيب",
        titleEn: "Visiting the Doctor's Clinic",
        desc: "الكشف الطبي ووصف الأدوية المناسبة",
        sentences: [
            { en: "I have a doctor visit at nine", ar: "لدي زيارة للطبيب في التاسعة" },
            { en: "I felt a strong headache today", ar: "شعرت بصداع قوي اليوم" },
            { en: "My throat hurts when I drink", ar: "حلقي يؤلمني عندما أشرب" },
            { en: "Let me check your fever right now", ar: "دعني أفحص حرارتك الآن" },
            { en: "Take a deep breath and relax now", ar: "خذ نفساً عميقاً واسترخ الآن" },
            { en: "You only have a mild winter cold", ar: "لديك فقط نزلة برد شتوية خفيفة" },
            { en: "Take this medicine twice a day", ar: "تناول هذا الدواء مرتين يومياً" },
            { en: "Make sure you drink warm water", ar: "تأكد من شرب الماء الدافئ" },
            { en: "Stay at home for two full days", ar: "ابق في المنزل لمدة يومين كاملين" },
            { en: "I feel much better after resting", ar: "أشعر بتحسن كبير بعد الراحة" }
        ]
    },

    // ==================== LEVEL B1 (4 Topics) ====================
    {
        id: "b1-interview",
        level: "B1",
        emoji: "💼",
        titleAr: "مقابلة عمل ناجحة",
        titleEn: "A Successful Job Interview",
        desc: "مهارات تقديم الذات والخبرات المهنية",
        sentences: [
            { en: "Thank you for inviting me today", ar: "شكراً لدعوتي إلى المقابلة اليوم" },
            { en: "I studied software at university", ar: "درست البرمجيات في الجامعة" },
            { en: "I worked on three team projects", ar: "عملت على ثلاثة مشاريع جماعية" },
            { en: "I enjoy solving complex problems", ar: "أستمتع بحل المشكلات المعقدة" },
            { en: "What are the daily duties here?", ar: "ما هي المهام اليومية هنا؟" },
            { en: "I plan my tasks every morning", ar: "أخطط لمهامي كل صباح" },
            { en: "Calm focus helps me under stress", ar: "التركيز الهادئ يساعدني تحت الضغط" },
            { en: "I want to grow with your company", ar: "أريد أن أتطور مع شركتكم" },
            { en: "We will email you next Tuesday", ar: "سنراسلك عبر البريد الثلاثاء القادم" },
            { en: "It was great meeting your team", ar: "كان من الرائع مقابلة فريقكم" }
        ]
    },
    {
        id: "b1-fitness",
        level: "B1",
        emoji: "🏃",
        titleAr: "حياة صحية ولياقة بدنية",
        titleEn: "Healthy Lifestyle and Fitness",
        desc: "عادات النوم والتغذية والرياضة اليومية",
        sentences: [
            { en: "Daily exercise boosts my energy", ar: "التمارين اليومية تزيد من طاقتي" },
            { en: "I replaced soda with green tea", ar: "استبدلت المشروبات الغازية بالشاي الأخضر" },
            { en: "Walking after dinner aids health", ar: "المشي بعد العشاء يساعد الصحة" },
            { en: "Eight hours of sleep is vital", ar: "ثماني ساعات من النوم أمر حيوي" },
            { en: "Always warm up before training", ar: "قم بالإحماء دائماً قبل التدريب" },
            { en: "Home cooking keeps meals healthy", ar: "الطبخ المنزلي يحفظ صحة الوجبات" },
            { en: "Steady habits beat strict diets", ar: "العادات المستمرة تتفوق على الحميات القاسية" },
            { en: "A quick run clears my busy mind", ar: "جولة جري سريعة تصفي ذهني المشغول" },
            { en: "Weekly goals keep me motivated", ar: "الأهداف الأسبوعية تبقيني متحفزاً" },
            { en: "Good health is a great treasure", ar: "الصحة الجيدة هي كنز عظيم" }
        ]
    },
    {
        id: "b1-language",
        level: "B1",
        emoji: "🗣️",
        titleAr: "رحلة تعلم لغة جديدة",
        titleEn: "The Journey of Learning a Language",
        desc: "استراتيجيات اكتساب الطلاقة وبناء الثقة",
        sentences: [
            { en: "Speaking out loud builds confidence", ar: "التحدث بصوت عالٍ يبني الثقة" },
            { en: "Never fear making small mistakes", ar: "لا تخف أبداً من ارتكاب أخطاء صغيرة" },
            { en: "Native audio teaches natural phrases", ar: "الصوت الأصلي يعلم عبارات طبيعية" },
            { en: "Write full sentences every day", ar: "اكتب جملاً كاملة كل يوم" },
            { en: "English videos improve listening", ar: "المقاطع الإنجليزية تطور الاستماع" },
            { en: "Repeating phrases makes speech smooth", ar: "تكرار العبارات يجعل الكلام سلساً" },
            { en: "Fluency takes patience and effort", ar: "الطلاقة تتطلب صبراً وجهداً" },
            { en: "Short stories expand your words", ar: "القصص القصيرة توسع حصيلة كلماتك" },
            { en: "Study partners make learning fun", ar: "شركاء الدراسة يجعلون التعلم ممتعاً" },
            { en: "Small daily steps lead to success", ar: "الخطوات اليومية الصغيرة تقود للنجاح" }
        ]
    },
    {
        id: "b1-car-trouble",
        level: "B1",
        emoji: "🚗",
        titleAr: "عطل مفاجئ في السيارة",
        titleEn: "Unexpected Car Trouble",
        desc: "التعامل مع الأعطال وخدمات الإنقاذ على الطريق",
        sentences: [
            { en: "I heard a strange engine noise", ar: "سمعت صوتاً غريباً من المحرك" },
            { en: "I pulled over near the highway", ar: "توقفت بجانب الطريق السريع" },
            { en: "The battery light turned on fast", ar: "أضاء تحذير البطارية بسرعة" },
            { en: "I switched on the hazard lights", ar: "شغلت أضواء التحذير الرباعية" },
            { en: "I called road service for help", ar: "اتصلت بخدمة الطريق للمساعدة" },
            { en: "The mechanic arrived in ten minutes", ar: "وصل الميكانيكي خلال عشر دقائق" },
            { en: "The cooling belt needed repair", ar: "حزام التبريد كان يحتاج لإصلاح" },
            { en: "The fix took less than two hours", ar: "استغرق الإصلاح أقل من ساعتين" },
            { en: "Regular checks prevent car faults", ar: "الفحص الدوري يمنع أعطال السيارة" },
            { en: "I returned to the road safely", ar: "عدت إلى الطريق بكل أمان" }
        ]
    },

    // ==================== LEVEL B2 (4 Topics) ====================
    {
        id: "b2-remote-work",
        level: "B2",
        emoji: "💻",
        titleAr: "العمل عن بُعد",
        titleEn: "Remote Work & Balance",
        desc: "توازن الحياة المهنية وإدارة الفرق العالمية",
        sentences: [
            { en: "Remote work changed modern teams", ar: "العمل عن بعد غير الفرق الحديثة" },
            { en: "Working from home saves travel time", ar: "العمل من المنزل يوفر وقت التنقل" },
            { en: "Work life balance needs discipline", ar: "توازن العمل والحياة يتطلب انضباطاً" },
            { en: "A quiet desk boosts daily focus", ar: "المكتب الهادئ يعزز التركيز اليومي" },
            { en: "Clear chat prevents team errors", ar: "التواصل الواضح يمنع أخطاء الفريق" },
            { en: "Many firms prefer hybrid models", ar: "تفضل شركات عديدة النظام الهجين" },
            { en: "Regular screen breaks protect health", ar: "فترات الراحة من الشاشة تحمي الصحة" },
            { en: "Managers value results over hours", ar: "المديرون يقدرون النتائج أكثر من الساعات" },
            { en: "Cloud tools connect global staff", ar: "الأدوات السحابية تربط الموظفين عالمياً" },
            { en: "Flexible schedules improve morale", ar: "الجداول المرنة تحسن الروح المعنوية" }
        ]
    },
    {
        id: "b2-environment",
        level: "B2",
        emoji: "🌱",
        titleAr: "حماية البيئة والاستدامة",
        titleEn: "Environmental Sustainability",
        desc: "الطاقة المتجددة وتقليل الانبعاثات الكربونية",
        sentences: [
            { en: "Clean energy reduces carbon gas", ar: "الطاقة النظيفة تقلل غازات الكربون" },
            { en: "Plastic waste harms ocean life", ar: "النفايات البلاستيكية تضر الحياة البحرية" },
            { en: "Urban trees cool down hot cities", ar: "أشجار المدن تلطف حرارة المدن" },
            { en: "Buyers support eco friendly brands", ar: "المشترون يدعمون العلامات الصديقة للبيئة" },
            { en: "Smart farming saves fresh water", ar: "الزراعة الذكية توفر المياه العذبة" },
            { en: "Recycling protects soil from waste", ar: "إعادة التدوير تحمي التربة من النفايات" },
            { en: "Public trains reduce city traffic", ar: "القطارات العامة تقلل ازدحام المدينة" },
            { en: "Green habits start at home today", ar: "العادات الخضراء تبدأ من المنزل اليوم" },
            { en: "Industry must invest in clean tech", ar: "يجب أن تستثمر الصناعة بالتقنية النظيفة" },
            { en: "Protecting nature secures our future", ar: "حماية الطبيعة تؤمن مستقبلنا" }
        ]
    },
    {
        id: "b2-presentation",
        level: "B2",
        emoji: "📊",
        titleAr: "تقديم مشروع تقني",
        titleEn: "Technical Project Pitch",
        desc: "عرض الأفكار وتحليل النتائج للمستثمرين",
        sentences: [
            { en: "Today I will present our new app", ar: "اليوم سأعرض تطبيقنا الجديد" },
            { en: "Our goal is a simple user design", ar: "هدفنا هو تصميم بسيط للمستخدم" },
            { en: "User feedback showed login delays", ar: "ملاحظات المستخدمين أظهرت تأخراً بالدخول" },
            { en: "We cut loading time by ten percent", ar: "قللنا وقت التحميل بنسبة عشرة بالمائة" },
            { en: "Data security is our top priority", ar: "أمن البيانات هو أولويتنا القصوى" },
            { en: "This chart shows strong growth", ar: "هذا الرسم يظهر نمواً قوياً" },
            { en: "We tested every feature carefully", ar: "اختبرنا كل ميزة بعناية فائقة" },
            { en: "Close teamwork met all deadlines", ar: "التعاون الوثيق حقق كل المواعيد" },
            { en: "I welcome your technical questions", ar: "أرحب بأسئلتكم التقنية" },
            { en: "Thank you for backing this project", ar: "شكراً لكم على دعم هذا المشروع" }
        ]
    },
    {
        id: "b2-finance",
        level: "B2",
        emoji: "💰",
        titleAr: "التخطيط المالي الذكي",
        titleEn: "Smart Financial Planning",
        desc: "إدارة المدخرات والاستثمار لبناء مستقبل آمن",
        sentences: [
            { en: "Emergency savings bring peace of mind", ar: "مدخرات الطوارئ تجلب راحة البال" },
            { en: "Track your spending every month", ar: "تتبع نفقاتك في كل شهر" },
            { en: "Save twenty percent of your income", ar: "ادخر عشرين بالمائة من دخلك" },
            { en: "Avoid high interest credit debt", ar: "تجنب ديون الائتمان عالية الفائدة" },
            { en: "Diverse assets lower market risk", ar: "تنوع الأصول يقلل مخاطر السوق" },
            { en: "Separate basic needs from desires", ar: "افصل الاحتياجات الأساسية عن الرغبات" },
            { en: "Clear money goals guide your budget", ar: "الأهداف المالية الواضحة توجه ميزانيتك" },
            { en: "Economic knowledge aids decision making", ar: "المعرفة الاقتصادية تساعد في اتخاذ القرار" },
            { en: "Automated transfers build wealth", ar: "التحويلات التلقائية تبني الثروة" },
            { en: "Financial freedom beats luxury items", ar: "الحرية المالية أفضل من المقتنيات الفاخرة" }
        ]
    },

    // ==================== LEVEL C1 (4 Topics) ====================
    {
        id: "c1-ai-education",
        level: "C1",
        emoji: "🤖",
        titleAr: "الذكاء الاصطناعي والتعليم",
        titleEn: "AI in Modern Education",
        desc: "مستقبل التكنولوجيا الحديثة في المناهج الأكاديمية",
        sentences: [
            { en: "Smart systems reshape modern learning", ar: "الأنظمة الذكية تعيد تشكيل التعلم الحديث" },
            { en: "Adaptive tools match student pace", ar: "الأدوات التكيفية تناسب سرعة الطالب" },
            { en: "Machines cannot replace human empathy", ar: "الآلات لا تعوض التعاطف البشري" },
            { en: "Critical thinking remains essential", ar: "التفكير النقدي يظل أمراً جوهرياً" },
            { en: "Schools need clear ethical rules", ar: "تحتاج المدارس لقواعد أخلاقية واضحة" },
            { en: "Instant feedback corrects errors fast", ar: "التغذية الراجعة الفورية تصحح الأخطاء سريعاً" },
            { en: "Equal digital access empowers youth", ar: "الوصول الرقمي العادل يمكّن الشباب" },
            { en: "Lifelong learning beats static facts", ar: "التعلم المستمر يتفوق على الحفظ الجامد" },
            { en: "Shared research solves global issues", ar: "البحث المشترك يحل القضايا العالمية" },
            { en: "Education prepares responsible minds", ar: "التعليم يعد عقولاً مسؤولة" }
        ]
    },
    {
        id: "c1-psychology",
        level: "C1",
        emoji: "🧠",
        titleAr: "علم نفس العادات والتركيز",
        titleEn: "Psychology of Deep Focus",
        desc: "التحكم في الانتباه وبناء العادات المستدامة",
        sentences: [
            { en: "Deep focus is rare in digital life", ar: "التركيز العميق نادر في الحياة الرقمية" },
            { en: "Constant alerts fragment our minds", ar: "التنبيهات المستمرة تشتت أذهاننا" },
            { en: "Daily cues shape lasting habits", ar: "الإشارات اليومية تشكل عادات دائمة" },
            { en: "Small gains compound over five years", ar: "المكاسب الصغيرة تتراكم خلال خمس سنوات" },
            { en: "Simple spaces support good routines", ar: "المساحات البسيطة تدعم العادات الجيدة" },
            { en: "Deliberate practice builds mastery", ar: "التدريب المتعمد يبني الإتقان" },
            { en: "Too many choices cause mental fatigue", ar: "كثرة الخيارات تسبب الإرهاق الذهني" },
            { en: "Quiet blocks protect creative work", ar: "الفترات الهادئة تحمي العمل الإبداعي" },
            { en: "Self kindness prevents total burnout", ar: "الرفق بالنفس يمنع الاحتراق الكامل" },
            { en: "Attention control defines success", ar: "التحكم في الانتباه يصنع النجاح" }
        ]
    },
    {
        id: "c1-leadership",
        level: "C1",
        emoji: "⚡",
        titleAr: "القيادة وإدارة الأزمات",
        titleEn: "Strategic Leadership",
        desc: "اتخاذ القرارات الحاسمة في الظروف المعقدة",
        sentences: [
            { en: "True leaders shine during crises", ar: "القادة الحقيقيون يبرزون وقت الأزمات" },
            { en: "Honest dialogue builds lasting trust", ar: "الحوار الصادق يبني ثقة دائمة" },
            { en: "Wise decision making blends data and care", ar: "اتخاذ القرار الحكيم يمزج البيانات والاهتمام" },
            { en: "Shared authority speeds up action", ar: "تفويض الصلاحيات يسرع الإنجاز" },
            { en: "Open debate prevents group errors", ar: "النقاش المفتوح يمنع أخطاء الجماعة" },
            { en: "Resilient teams turn setbacks into growth", ar: "الفرق المرنة تحول العثرات إلى نمو" },
            { en: "Long term vision guides strategy", ar: "الرؤية بعيدة المدى توجه الاستراتيجية" },
            { en: "Safe cultures welcome bold ideas", ar: "البيئات الآمنة ترحب بالأفكار الجريئة" },
            { en: "Reviewing past errors builds wisdom", ar: "مراجعة أخطاء الماضي تبني الحكمة" },
            { en: "Authentic purpose unites great teams", ar: "الهدف الأصيل يوحد الفرق العظيمة" }
        ]
    },
    {
        id: "c1-architecture",
        level: "C1",
        emoji: "🏛️",
        titleAr: "العمارة والهوية الثقافية",
        titleEn: "Architecture & Culture",
        desc: "التصميم الحضري المعاصر والحفاظ على التراث",
        sentences: [
            { en: "Modern design blends tech and heritage", ar: "التصميم الحديث يدمج التقنية والتراث" },
            { en: "Ancient Courtyards cool desert homes", ar: "الأفنية القديمة تبرد منازل الصحراء" },
            { en: "Historic streets preserve city memory", ar: "الشوارع التاريخية تحفظ ذاكرة المدينة" },
            { en: "Walkable plazas enrich urban life", ar: "الساحات المهيأة للمشي تثري حياة المدن" },
            { en: "Natural light improves indoor health", ar: "الضوء الطبيعي يحسن الصحة الداخلية" },
            { en: "Cultural landmarks inspire pride", ar: "المعالم الثقافية تلهم الفخر" },
            { en: "Green roofs reduce urban heat", ar: "الأسطح الخضراء تقلل حرارة المدن" },
            { en: "Buildings shape how communities meet", ar: "المباني تشكل طريقة تلاقي المجتمعات" },
            { en: "Great spaces balance beauty and use", ar: "المساحات الرائعة توازن الجمال والمنفعة" },
            { en: "Cities thrive when honoring identity", ar: "تزدهر المدن عندما تحترم هويتها" }
        ]
    }
];

// ==================== ARABIC WORD TRANSLATIONS ORGANIZED BY TOPIC ====================
const WORD_TRANSLATIONS = {
    // Topic: a1-cafe (At the Café — في المقهى)
    "a1-cafe": {
        we: "نحن", sit: "نجلس", near: "بالقرب من", the: "الـ", bright: "المشرقة", window: "النافذة",
        can: "هل يمكن", i: "أنا", see: "أرى", coffee: "القهوة", menu: "قائمة", please: "من فضلك",
        would: "أود / هل", like: "أحب / ترغب", a: "واحد", hot: "ساخن", cup: "كوب", of: "من",
        my: "خاصتي", friend: "صديق", wants: "يريد", tea: "شاي", with: "مع", fresh: "طازج", mint: "نعناع",
        bring: "أحضر", us: "لنا", two: "اثنين", cold: "بارد", glasses: "أكواب",
        here: "هنا", is: "يكون", always: "دائماً", you: "أنت", some: "بعض", sweet: "حلو", cake: "كعك",
        also: "أيضاً", want: "نريد", three: "ثلاثة", small: "صغيرة", cookies: "قطع بسكويت",
        excuse: "اعذر", me: "ني", have: "نحصل على", bill: "الفاتورة",
        thank: "شكراً", for: "على", great: "الرائعة", service: "الخدمة"
    },

    // Topic: a1-morning (Morning Routine — روتين الصباح)
    "a1-morning": {
        wake: "أستيقظ", up: "فوق / استيقاظ", at: "في", six: "السادسة", every: "كل", morning: "صباح",
        first: "أولاً", wash: "أغسل", face: "وجه", water: "ماء",
        brush: "أنظف بالفرشاة", teeth: "أسنان", minutes: "دقائق",
        then: "ثم", wear: "أرتدي", clean: "نظيف", blue: "أزرق", shirt: "قميص",
        eat: "أتناول", warm: "دافئ", eggs: "بيض", breakfast: "الفطور",
        mother: "أم", drinks: "تشرب", put: "أضع", book: "كتاب", in: "في", black: "أسود", bag: "حقيبة",
        yellow: "أصفر", bus: "حافلة", arrives: "تصل", seven: "السابعة",
        say: "أقول", goodbye: "وداعاً", to: "إلى", kind: "لطيفة", family: "عائلة",
        am: "أكون", ready: "مستعد", happy: "سعيد", new: "جديد", day: "يوم"
    },

    // Topic: a1-family-dinner (Family Dinner — عشاء العائلة)
    "a1-family-dinner": {
        sits: "تجلس", around: "حول", table: "المائدة",
        cooks: "تطهو", bowl: "وعاء", soup: "حساء",
        children: "الأطفال", their: "الخاص بهم", hands: "أيدي", now: "الآن",
        father: "الأب", cuts: "يقطع", roasted: "المشوي", chicken: "الدجاج",
        pass: "نمرر / مرر", basket: "سلة", bread: "خبز",
        everyone: "الجميع", talks: "يتحدث", about: "عن",
        green: "خضراء", salad: "سلطة", drink: "نشرب", juice: "عصير", after: "بعد", dinner: "العشاء",
        sister: "أخت", helps: "تساعد", clear: "تنظيف / ترتيب",
        spend: "نقضي", quiet: "هادئة", night: "ليلة", together: "معاً"
    },

    // Topic: a1-grocery (Grocery Shopping — التسوق لشراء الاحتياجات)
    "a1-grocery": {
        welcome: "أهلاً بك", our: "الخاص بنا", local: "المحلي", food: "طعام", store: "متجر",
        these: "هذه", red: "أحمر", apples: "تفاح", are: "تكون", very: "جداً",
        how: "كم / كيف", much: "سعر / كثير", one: "واحد", kilo: "كيلو", oranges: "برتقال",
        need: "أحتاج", five: "خمسة", bananas: "موز", today: "اليوم",
        do: "هل", milk: "حليب", yes: "نعم", it: "هو", came: "جاء / وصل", from: "من", farm: "المزرعة",
        will: "سوف", pay: "أدفع", cash: "نقداً", right: "تماماً / الآن",
        your: "الخاص بك", change: "الباقي", and: "و", receipt: "الإيصال",
        nice: "لطيف / سعيد", soon: "قريباً"
    },

    // Topic: a2-weekend (Weekend Trip — رحلة نهاية الأسبوع)
    "a2-weekend": {
        weather: "الطقس", sunny: "مشمس", this: "هذا",
        packed: "جهزنا", snacks: "وجبات خفيفة",
        boy: "الولد", playing: "يلعب", garden: "الحديقة",
        sat: "جلسنا", under: "تحت", tall: "طويلة", palm: "نخيل", trees: "أشجار",
        many: "كثير", families: "عائلات", walk: "تتجول", lake: "البحيرة",
        took: "التقطت", four: "أربعة", photos: "صور",
        fed: "أطعمنا", ducks: "البط", pieces: "قطع",
        cool: "بارد / لطيف", breeze: "نسيم", blew: "هب", oclock: "تماماً (الساعة)",
        cleaned: "نظفنا", place: "مكان", before: "قبل", leaving: "المغادرة",
        was: "كانت", wonderful: "رائعة", weekend: "نهاية الأسبوع", trip: "رحلة"
    },

    // Topic: a2-university (A Day at University — يوم في الجامعة)
    "a2-university": {
        arrive: "أصل", campus: "الحرم الجامعي", nine: "التاسعة",
        class: "محاضرة / حصة", computer: "حاسوب", science: "علوم",
        teacher: "المعلم", gives: "يعطي", clear: "واضحة", examples: "أمثلة",
        meet: "أقابل", friends: "أصدقاء", during: "أثناء", break: "الاستراحة",
        borrow: "نستعير", books: "كتب", library: "المكتبة",
        write: "أكتب", notes: "ملاحظات", lecture: "محاضرة",
        group: "جماعية", projects: "مشاريع", build: "تبني", teamwork: "العمل الجماعي",
        send: "أرسل", weekly: "الأسبوعي", report: "تقرير", eight: "الثامنة",
        college: "الكلية / الجامعة", life: "حياة", teaches: "تعلّم", time: "الوقت", skills: "مهارات"
    },

    // Topic: a2-airport (At the Airport Before Flying — في المطار قبل السفر)
    "a2-airport": {
        reached: "وصلنا", airport: "المطار", ten: "العاشرة / عشرة",
        show: "أظهر", passport: "جواز السفر",
        pack: "حقيبة ظهر", seat: "مقعد",
        flight: "رحلة طيران", leaves: "تغادر", gate: "بوابة",
        must: "يجب", go: "نذهب / نمر", through: "عبر", security: "الأمن",
        let: "دع", buy: "نشتري", shop: "متجر",
        boarding: "صعود الطائرة", starts: "يبدأ",
        fasten: "اربط", belt: "حزام", hope: "آمل", smooth: "سلسة"
    },

    // Topic: a2-doctor (Visiting the Doctor's Clinic — زيارة عيادة الطبيب)
    "a2-doctor": {
        doctor: "طبيب", visit: "زيارة / موعد",
        felt: "شعرت", strong: "قوي", headache: "صداع",
        throat: "حلق", hurts: "يؤلم", when: "عندما",
        check: "أفحص", fever: "حرارة / حمى",
        take: "خذ / تناول", deep: "عميق", breath: "نَفَس", relax: "استرخ",
        only: "فقط", mild: "خفيفة", winter: "شتوية",
        medicine: "دواء", twice: "مرتين",
        make: "تأكد / اصنع", sure: "متأكد",
        stay: "ابق", home: "المنزل", full: "كاملين", days: "أيام",
        feel: "أشعر", better: "أفضل", resting: "الراحة"
    },

    // Topic: b1-interview (A Successful Job Interview — مقابلة عمل ناجحة)
    "b1-interview": {
        inviting: "دعوة", studied: "درست", software: "البرمجيات", university: "الجامعة",
        worked: "عملت", on: "على", team: "فريق",
        enjoy: "أستمتع", solving: "حل", complex: "معقدة", problems: "مشكلات",
        what: "ما هي", daily: "اليومية", duties: "المهام / الواجبات",
        plan: "أخطط", tasks: "مهام",
        calm: "هادئ", focus: "تركيز", under: "تحت", stress: "ضغط",
        grow: "أتطور / أنمو", company: "شركة",
        email: "نراسل بالبريد", next: "القادم", tuesday: "الثلاثاء",
        meeting: "مقابلة / لقاء"
    },

    // Topic: b1-fitness (Healthy Lifestyle and Fitness — حياة صحية ولياقة بدنية)
    "b1-fitness": {
        exercise: "التمرين", boosts: "يعزز / يزيد", energy: "طاقة",
        replaced: "استبدلت", soda: "المشروبات الغازية",
        walking: "المشي", aids: "يساعد", health: "الصحة",
        hours: "ساعات", sleep: "النوم", vital: "حيوي / ضروري",
        training: "التدريب", cooking: "الطبخ", keeps: "يحفظ", meals: "الوجبات", healthy: "صحية",
        steady: "المستمرة", habits: "العادات", beat: "تتفوق على", strict: "القاسية", diets: "الحميات",
        quick: "سريعة", run: "جري", clears: "يصفي", busy: "مشغول", mind: "ذهن",
        goals: "أهداف", keep: "تبقي", motivated: "متحفزاً",
        good: "جيدة", treasure: "كنز"
    },

    // Topic: b1-language (The Journey of Learning a Language — رحلة تعلم لغة جديدة)
    "b1-language": {
        speaking: "التحدث", out: "بصوت", loud: "عالٍ", builds: "يبني", confidence: "الثقة",
        never: "أبداً", fear: "تخف", making: "ارتكاب / صنع", mistakes: "أخطاء",
        native: "أصلي", audio: "صوت", phrases: "عبارات",
        sentences: "جُمل", english: "إنجليزية", videos: "مقاطع فيديو", improve: "تطور", listening: "الاستماع",
        repeating: "تكرار", makes: "يجعل", speech: "الكلام",
        fluency: "الطلاقة", takes: "تتطلب", patience: "صبر", effort: "جهد",
        short: "قصيرة", stories: "قصص", expand: "توسع", words: "كلمات",
        study: "دراسة", partners: "شركاء", learning: "التعلم", fun: "ممتع",
        steps: "خطوات", lead: "تقود", success: "النجاح"
    },

    // Topic: b1-car-trouble (Unexpected Car Trouble — عطل مفاجئ في السيارة)
    "b1-car-trouble": {
        heard: "سمعت", strange: "غريب", engine: "محرك", noise: "صوت / ضجيج",
        pulled: "توقفت جانباً", over: "إلى الجانب", highway: "الطريق السريع",
        battery: "البطارية", light: "ضوء", turned: "أضاء / تحول", fast: "بسرعة",
        switched: "شغلت", hazard: "طوارئ / تحذير", lights: "أضواء",
        called: "اتصلت", road: "الطريق", help: "مساعدة",
        mechanic: "الميكانيكي", arrived: "وصل",
        cooling: "التبريد", needed: "احتاج", repair: "إصلاح",
        fix: "الإصلاح", less: "أقل", than: "من",
        regular: "دوري / منتظم", checks: "فحوصات", prevent: "تمنع", car: "سيارة", faults: "أعطال",
        returned: "عدت", safely: "بأمان"
    },

    // Topic: b2-remote-work (Remote Work & Balance — العمل عن بُعد)
    "b2-remote-work": {
        remote: "عن بُعد", work: "العمل", changed: "غيّر", modern: "الحديثة", teams: "الفرق",
        working: "العمل", saves: "يوفر", travel: "التنقل / السفر",
        balance: "توازن", needs: "يتطلب / احتياجات", discipline: "انضباط",
        desk: "مكتب", chat: "تواصل / محادثة", prevents: "يمنع", errors: "أخطاء",
        firms: "شركات", prefer: "تفضل", hybrid: "هجين", models: "نماذج",
        screen: "شاشة", breaks: "فترات راحة", protect: "تحمي",
        managers: "المديرون", value: "يقدرون", results: "النتائج",
        cloud: "سحابية", tools: "أدوات", connect: "تربط", global: "عالمي", staff: "الموظفين",
        flexible: "مرنة", schedules: "جداول", morale: "الروح المعنوية"
    },

    // Topic: b2-environment (Environmental Sustainability — حماية البيئة والاستدامة)
    "b2-environment": {
        reduces: "تقلل", carbon: "الكربون", gas: "غاز",
        plastic: "بلاستيكي", waste: "نفايات", harms: "تضر", ocean: "المحيط",
        urban: "الحضرية / المدن", down: "تخفض", cities: "المدن",
        buyers: "المشترون", support: "يدعمون", eco: "بيئي", friendly: "صديق", brands: "علامات تجارية",
        smart: "ذكية", farming: "الزراعة",
        recycling: "إعادة التدوير", protects: "تحمي", soil: "التربة",
        public: "العامة", trains: "القطارات", reduce: "تقلل", city: "المدينة", traffic: "الازدحام المروري",
        start: "تبدأ", industry: "الصناعة", invest: "تستثمر", tech: "التقنية",
        protecting: "حماية", nature: "الطبيعة", secures: "تؤمن", future: "المستقبل"
    },

    // Topic: b2-presentation (Technical Project Pitch — تقديم مشروع تقني)
    "b2-presentation": {
        present: "أعرض", app: "تطبيق",
        goal: "هدف", simple: "بسيط", user: "مستخدم", design: "تصميم",
        feedback: "ملاحظات / آراء", showed: "أظهرت", login: "تسجيل الدخول", delays: "تأخيرات",
        cut: "قللنا", loading: "التحميل", by: "بنسبة", percent: "بالمائة",
        data: "البيانات", top: "القصوى", priority: "أولوية",
        chart: "رسم بياني", shows: "يظهر", growth: "نمو",
        tested: "اختبرنا", feature: "ميزة", carefully: "بعناية",
        close: "وثيق", met: "حقق", all: "كل", deadlines: "المواعيد النهائية",
        technical: "تقنية", questions: "أسئلة",
        backing: "دعم", project: "مشروع"
    },

    // Topic: b2-finance (Smart Financial Planning — التخطيط المالي الذكي)
    "b2-finance": {
        emergency: "طوارئ", savings: "مدخرات", peace: "سلام / راحة",
        track: "تتبع", spending: "الإنفاق", month: "شهر",
        save: "ادخر", twenty: "عشرين", income: "الدخل",
        avoid: "تجنب", high: "عالية", interest: "فائدة", credit: "ائتمان", debt: "دَين",
        diverse: "متنوعة", assets: "أصول", lower: "تقلل", market: "السوق", risk: "مخاطر",
        separate: "افصل", basic: "أساسية", desires: "رغبات",
        money: "مال", guide: "توجه", budget: "ميزانية",
        economic: "اقتصادية", knowledge: "معرفة", decision: "قرار",
        automated: "تلقائية", transfers: "تحويلات", wealth: "ثروة",
        financial: "مالية", freedom: "حرية", beats: "تتفوق على", luxury: "فاخرة", items: "مقتنيات"
    },

    // Topic: c1-ai-education (AI in Modern Education — الذكاء الاصطناعي والتعليم)
    "c1-ai-education": {
        systems: "أنظمة", reshape: "تعيد تشكيل",
        adaptive: "تكيفية", match: "تناسب", student: "طالب", pace: "سرعة / وتيرة",
        machines: "الآلات", cannot: "لا تستطيع", replace: "تستبدل", human: "بشري", empathy: "تعاطف",
        critical: "نقدي", thinking: "تفكير", remains: "يظل", essential: "أساسي / جوهري",
        schools: "المدارس", ethical: "أخلاقية", rules: "قواعد",
        instant: "فورية", corrects: "تصحح",
        equal: "عادل / متساوٍ", digital: "رقمي", access: "وصول", empowers: "يمكّن", youth: "الشباب",
        lifelong: "مدى الحياة", static: "جامدة / ثابتة", facts: "حقائق",
        shared: "مشترك", research: "بحث", solves: "يحل", issues: "قضايا",
        education: "التعليم", prepares: "يُعدّ", responsible: "مسؤولة", minds: "عقول"
    },

    // Topic: c1-psychology (Psychology of Deep Focus — علم نفس العادات والتركيز)
    "c1-psychology": {
        rare: "نادر", constant: "مستمرة", alerts: "تنبيهات", fragment: "تشتت",
        cues: "إشارات", shape: "تشكل", lasting: "دائمة",
        gains: "مكاسب", compound: "تتراكم", years: "سنوات",
        spaces: "مساحات", routines: "روتين / عادات",
        deliberate: "متعمد", practice: "تدريب / ممارسة", mastery: "إتقان",
        too: "كثير جداً", choices: "خيارات", cause: "تسبب", mental: "ذهني", fatigue: "إرهاق",
        blocks: "فترات", creative: "إبداعي",
        self: "الذات / النفس", kindness: "لطف / رفق", total: "كامل", burnout: "احتراق نفسي",
        attention: "انتباه", control: "تحكم", defines: "يحدد / يصنع"
    },

    // Topic: c1-leadership (Strategic Leadership — القيادة وإدارة الأزمات)
    "c1-leadership": {
        true: "حقيقيون", leaders: "قادة", shine: "يبرزون / يتألقون", crises: "أزمات",
        honest: "صادق", dialogue: "حوار", trust: "ثقة",
        wise: "حكيم", blends: "يمزج", care: "اهتمام / رعاية",
        authority: "سلطة / صلاحية", speeds: "يسرع", action: "العمل / الإنجاز",
        open: "مفتوح", debate: "نقاش",
        resilient: "مرنة", turn: "تحول", setbacks: "عثرات", into: "إلى",
        long: "طويل", term: "المدى", vision: "رؤية", guides: "توجه", strategy: "استراتيجية",
        safe: "آمنة", cultures: "بيئات / ثقافات", bold: "جريئة", ideas: "أفكار",
        reviewing: "مراجعة", past: "الماضي", wisdom: "حكمة",
        authentic: "أصيل", purpose: "هدف / غاية", unites: "يوحد"
    },

    // Topic: c1-architecture (Architecture & Culture — العمارة والهوية الثقافية)
    "c1-architecture": {
        heritage: "تراث", ancient: "قديمة", courtyards: "أفنية", desert: "صحراء", homes: "منازل",
        historic: "تاريخية", streets: "شوارع", preserve: "تحفظ", memory: "ذاكرة",
        walkable: "مهيأة للمشي", plazas: "ساحات", enrich: "تثري",
        natural: "طبيعي", improves: "يحسن", indoor: "داخلي",
        cultural: "ثقافية", landmarks: "معالم", inspire: "تلهم", pride: "فخر",
        roofs: "أسطح", heat: "حرارة",
        buildings: "المباني", communities: "المجتمعات",
        beauty: "جمال", use: "منفعة / استخدام",
        thrive: "تزدهر", honoring: "احترام / تكريم", identity: "هوية"
    }
};

// ==================== NUMBER NORMALIZATION FOR SPEECH RECOGNITION ====================
const DIGIT_TO_WORD_MAP = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "24": "twenty four",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "one hundred"
};

/**
 * Converts numeric digits (e.g., "2", "20", "10%") in recognized speech or target text
 * into their spoken English word equivalents before word-by-word comparison.
 */
function expandNumericTokenToWords(rawWord) {
    let cleaned = rawWord.toLowerCase().trim();

    // Handle percentage sign attached to digits (e.g. "10%" -> "ten percent")
    if (/^\d+%$/.test(cleaned)) {
        const numPart = cleaned.replace("%", "");
        const wordPart = DIGIT_TO_WORD_MAP[numPart] || numPart;
        return `${wordPart} percent`;
    }

    // Handle time format like "6:30" or "7:15"
    if (/^\d{1,2}:\d{2}$/.test(cleaned)) {
        const [h, m] = cleaned.split(":");
        const hWord = DIGIT_TO_WORD_MAP[String(Number(h))] || h;
        if (m === "00") return hWord;
        const mWord = DIGIT_TO_WORD_MAP[String(Number(m))] || m;
        return `${hWord} ${mWord}`;
    }

    // Strip punctuation around token before checking digit map
    const bare = cleaned
        .replace(/^[^a-z0-9']+|[^a-z0-9']+$/gi, "")
        .replace(/'/g, "");

    if (DIGIT_TO_WORD_MAP[bare]) {
        return DIGIT_TO_WORD_MAP[bare];
    }

    // Handle 2-digit numbers between 21 and 99 not explicitly in map (e.g. "25" -> "twenty five")
    if (/^\d{2}$/.test(bare)) {
        const num = parseInt(bare, 10);
        if (num > 20 && num < 100) {
            const tens = String(Math.floor(num / 10) * 10);
            const ones = String(num % 10);
            const tensWord = DIGIT_TO_WORD_MAP[tens];
            const onesWord = ones !== "0" ? DIGIT_TO_WORD_MAP[ones] : "";
            if (tensWord) {
                return onesWord ? `${tensWord} ${onesWord}` : tensWord;
            }
        }
    }

    // Handle common speech-to-text equivalents ("o'clock" -> "oclock")
    if (bare === "oclock") return "oclock";

    return bare;
}

// ==================== APPLICATION STATE ====================
const state = {
    currentTopicIndex: 0,
    currentSentenceIndex: 0,
    isMuted: false,
    isDark: false,
    isListening: false,
    preferredVoice: null,
    recognition: null,
    topicResults: [],
    activePopupEl: null,
    activeWordSpan: null
};

// ==================== DOM ELEMENTS ====================
const dom = {
    topProgressFill: document.getElementById("topProgressFill"),
    openTopicsBtn: document.getElementById("openTopicsBtn"),
    headerTopicTitle: document.getElementById("headerTopicTitle"),
    muteTtsBtn: document.getElementById("muteTtsBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),

    listenMetaBtn: document.getElementById("listenMetaBtn"),
    stageLevelBadge: document.getElementById("stageLevelBadge"),
    stageTopicName: document.getElementById("stageTopicName"),
    sentenceCounter: document.getElementById("sentenceCounter"),

    sentenceWrapper: document.getElementById("sentenceWrapper"),
    giantSentence: document.getElementById("giantSentence"),
    arabicTranslation: document.getElementById("arabicTranslation"),

    micCircleBtn: document.getElementById("micCircleBtn"),
    micStatusText: document.getElementById("micStatusText"),

    feedbackPanel: document.getElementById("feedbackPanel"),
    spokenTranscriptText: document.getElementById("spokenTranscriptText"),
    attemptStatsRow: document.getElementById("attemptStatsRow"),

    replayAudioBtn: document.getElementById("replayAudioBtn"),
    tryAgainBtn: document.getElementById("tryAgainBtn"),
    nextSentenceBtn: document.getElementById("nextSentenceBtn"),
    nextBtnLabel: document.getElementById("nextBtnLabel"),
    statusAlert: document.getElementById("statusAlert"),

    topicsModal: document.getElementById("topicsModal"),
    closeTopicsModalBtn: document.getElementById("closeTopicsModalBtn"),
    topicsGrid: document.getElementById("topicsGrid"),

    summaryModal: document.getElementById("summaryModal"),
    summaryLevelDot: document.getElementById("summaryLevelDot"),
    summaryTopicTitle: document.getElementById("summaryTopicTitle"),
    summaryFeedbackMessage: document.getElementById("summaryFeedbackMessage"),
    starsContainer: document.getElementById("starsContainer"),
    starsScoreText: document.getElementById("starsScoreText"),
    summaryAccuracyValue: document.getElementById("summaryAccuracyValue"),
    summaryWordsValue: document.getElementById("summaryWordsValue"),
    summaryPerfectValue: document.getElementById("summaryPerfectValue"),
    restartTopicBtn: document.getElementById("restartTopicBtn"),
    chooseAnotherTopicBtn: document.getElementById("chooseAnotherTopicBtn"),

    statCurrentAccuracy: document.getElementById("statCurrentAccuracy"),
    statMatchedWords: document.getElementById("statMatchedWords"),
};

// ==================== WEB AUDIO API ====================
let audioCtx = null;

function ensureAudioContext() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
}

function playMotivationalSuccessSound() {
    const ctx = ensureAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.085);
        gain.gain.setValueAtTime(0.001, now + idx * 0.085);
        gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.085 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.085 + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.085);
        osc.stop(now + idx * 0.085 + 0.4);
    });
}

function playTopicCompletionFanfare() {
    const ctx = ensureAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 987.77, 1046.50];
    notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.001, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.1 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.52);
    });
}

// ==================== TTS WITH SAMANTHA PREFERENCE ON iOS ====================
function isIOSDevice() {
    return (
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
}

function initVoices() {
    if (!("speechSynthesis" in window)) return;

    const pickVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        if (!voices.length) return;

        if (isIOSDevice()) {
            state.preferredVoice =
                voices.find(v => v.name.toLowerCase().includes("samantha") && v.lang.startsWith("en")) ||
                voices.find(v => v.name.toLowerCase().includes("samantha")) ||
                voices.find(v => v.lang === "en-GB" && /daniel|martha|arthur/i.test(v.name)) ||
                voices.find(v => v.lang.startsWith("en-"));
        } else {

            state.preferredVoice =
                voices.find(v => v.lang === "en-GB" && /natural|google|libby|sonia|ryan/i.test(v.name)) ||
                voices.find(v => v.lang === "en-GB") ||
                voices.find(v => v.name.toLowerCase().includes("samantha")) ||
                voices.find(v => v.lang.startsWith("en-"));
        }
    };

    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
}

function speakText(text, forceEvenIfMuted = false) {
    if (!("speechSynthesis" in window)) return;
    if (state.isMuted && !forceEvenIfMuted) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    if (!state.preferredVoice) {
        initVoices();
    }

    if (state.preferredVoice) {
        utterance.voice = state.preferredVoice;
        utterance.lang = state.preferredVoice.lang || "en-US";
    } else {
        utterance.lang = isIOSDevice() ? "en-US" : "en-GB";
    }

   // Slower, clearer speech for English learners
    utterance.rate = isIOSDevice() ? 0.50 : 0.94;

    window.speechSynthesis.speak(utterance);
}

function toggleMuteTts() {
    state.isMuted = !state.isMuted;
    if (state.isMuted && "speechSynthesis" in window) window.speechSynthesis.cancel();
    dom.muteTtsBtn.classList.toggle("muted-active", state.isMuted);
    dom.muteTtsBtn.innerHTML = `<i data-lucide="${state.isMuted ? "volume-x" : "volume-2"}"></i>`;
    lucide.createIcons();
}

function toggleDarkMode() {
    state.isDark = !state.isDark;
    document.body.classList.toggle("dark", state.isDark);
    dom.themeToggleBtn.innerHTML = `<i data-lucide="${state.isDark ? "sun" : "moon"}"></i>`;
    lucide.createIcons();
}

// ==================== CLICKABLE WORD TRANSLATION POPUP ====================
function lookupWordTranslation(rawWord) {
    const cleanKey = normalizeWord(rawWord);
    if (!cleanKey) return "";

    const currentTopicId = getCurrentTopic().id;
    // 1. Check current topic dictionary first
    if (WORD_TRANSLATIONS[currentTopicId] && WORD_TRANSLATIONS[currentTopicId][cleanKey]) {
        return WORD_TRANSLATIONS[currentTopicId][cleanKey];
    }

    // 2. Fallback: search across all topic dictionaries so shared words don't need duplicate entries
    for (const topicKey of Object.keys(WORD_TRANSLATIONS)) {
        if (WORD_TRANSLATIONS[topicKey][cleanKey]) {
            return WORD_TRANSLATIONS[topicKey][cleanKey];
        }
    }

    return "ترجمة غير متوفرة";
}

function closeWordTranslationPopup() {
    if (state.activePopupEl) {
        state.activePopupEl.remove();
        state.activePopupEl = null;
    }
    if (state.activeWordSpan) {
        state.activeWordSpan.classList.remove("active-word-popup");
        state.activeWordSpan = null;
    }
}

function showWordTranslationPopup(wordSpan, rawWord) {
    // If clicking the same word again, close the popup
    if (state.activeWordSpan === wordSpan && state.activePopupEl) {
        closeWordTranslationPopup();
        return;
    }

    closeWordTranslationPopup();

    const translation = lookupWordTranslation(rawWord);
    const cleanDisplayWord = rawWord.replace(/^[^a-zA-Z0-9']+|[^a-zA-Z0-9']+$/g, "") || rawWord;

    const popup = document.createElement("div");
    popup.className = "word-translation-popup";
    popup.setAttribute("role", "tooltip");
    popup.innerHTML = `
        <span class="popup-word-en">${cleanDisplayWord}</span>
        <span class="popup-word-ar">${translation}</span>
    `;

    document.body.appendChild(popup);
    state.activePopupEl = popup;
    state.activeWordSpan = wordSpan;
    wordSpan.classList.add("active-word-popup");

    positionPopupNearWord(wordSpan, popup);
}

function positionPopupNearWord(wordSpan, popup) {
    const rect = wordSpan.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    let left = rect.left + rect.width / 2;
    const halfWidth = popupRect.width / 2;

    // Prevent horizontal overflow on small screens
    if (left - halfWidth < 12) {
        left = halfWidth + 12;
    } else if (left + halfWidth > viewportWidth - 12) {
        left = viewportWidth - halfWidth - 12;
    }

    // Place above word by default; flip below if too close to top of viewport
    if (rect.top - popupRect.height - 16 < 10) {
        popup.classList.add("popup-below");
        popup.style.top = `${rect.bottom}px`;
    } else {
        popup.classList.remove("popup-below");
        popup.style.top = `${rect.top}px`;
    }

    popup.style.left = `${left}px`;
}

// ==================== WORD & NUMBER NORMALIZATION & ALIGNMENT ====================
function normalizeWord(word) {
    return expandNumericTokenToWords(word);
}

/**
 * Tokenizes a sentence for display (one span per visual word)
 * while expanding numbers (e.g. "2" -> "two") for accurate speech matching.
 */
function tokenizeSentence(sentence) {
    return sentence
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((raw, index) => ({
            index,
            raw,
            clean: normalizeWord(raw)
        }));
}

/**
 * Tokenizes spoken recognition transcript and splits multi-word number expansions
 * (e.g., "24" -> ["twenty", "four"]) so it aligns seamlessly with target words.
 */
function tokenizeSpokenTranscript(transcript) {
    const rawParts = transcript.trim().split(/\s+/).filter(Boolean);
    const expandedTokens = [];

    rawParts.forEach(part => {
        const expanded = expandNumericTokenToWords(part);
        expanded.split(/\s+/).filter(Boolean).forEach(subWord => {
            expandedTokens.push({
                raw: part,
                clean: subWord
            });
        });
    });

    return expandedTokens;
}


/**
 * ENGLISH PRONUNCIATION MATCHING
 * Supports common English homophones, number words,
 * contractions, and minor speech-recognition differences.
 */

// Words that are pronounced identically or very similarly.
// Add more groups here whenever needed.
const HOMOPHONE_GROUPS = [
    ["to", "two", "too"],
    ["there", "their", "they're"],
    ["here", "hear"],
    ["right", "write", "rite"],
    ["see", "sea"],
    ["be", "bee"],
    ["one", "won"],
    ["four", "for", "fore"],
    ["eight", "ate"],
    ["buy", "by", "bye"],
    ["our", "hour"],
    ["know", "no"],
    ["new", "knew"],
    ["blue", "blew"],
    ["sun", "son"],
    ["pair", "pear", "pare"],
    ["week", "weak"],
    ["meet", "meat"],
    ["flower", "flour"],
    ["peace", "piece"],
    ["whole", "hole"],
    ["wait", "weight"],
    ["way", "weigh"],
    ["wear", "where"],
    ["dear", "deer"],
    ["tail", "tale"],
    ["sale", "sail"],
    ["plain", "plane"],
    ["break", "brake"],
    ["road", "rode"],
    ["night", "knight"],
    ["allowed", "aloud"],
    ["weather", "whether"],
    ["which", "witch"],
    ["cell", "sell"],
    ["cent", "sent", "scent"],
    ["hear", "here"],
    ["their", "there", "they're"],
    ["than", "then"], // Often confused by speech recognition
    ["a", "uh"],      // Common spoken filler variation
    ["and", "an"],    // Sometimes reduced in natural speech
    ["because", "cause"],
    ["going", "gonna"],
    ["want to", "wanna"],
    ["got to", "gotta"],
    ["back", "bag"],
    ["sit", "set"],
    ["bill", "pill"]
];

// Build a lookup table for fast equivalence checks.
const HOMOPHONE_LOOKUP = new Map();

HOMOPHONE_GROUPS.forEach(group => {
    const normalizedGroup = group.map(word =>
        word.toLowerCase().replace(/[^a-z']/g, "")
    );

    normalizedGroup.forEach(word => {
        const existing = HOMOPHONE_LOOKUP.get(word) || new Set();
        normalizedGroup.forEach(other => existing.add(other));
        HOMOPHONE_LOOKUP.set(word, existing);
    });
});

// Normalize individual tokens without changing their meaning.
function normalizeSpeechWord(word) {
    return String(word ?? "")
        .toLowerCase()
        .replace(/[’‘]/g, "'")
        .replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, "")
        .replace(/'/g, "");
}

// Convert commonly spoken number words into comparable forms.
const NUMBER_WORDS = {
    zero: "0",
    oh: "0",
    one: "1",
    won: "1",
    two: "2",
    too: "2",
    to: "2",
    three: "3",
    four: "4",
    for: "4",
    fore: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    ate: "8",
    nine: "9",
    ten: "10"
};

function wordsEquivalent(targetWord, spokenWord) {
    const target = normalizeSpeechWord(targetWord);
    const spoken = normalizeSpeechWord(spokenWord);

    if (!target || !spoken) return false;

    // Exact match.
    if (target === spoken) return true;

    // Spoken number and its written digit.
    if (
        NUMBER_WORDS[target] !== undefined &&
        NUMBER_WORDS[target] === spoken
    ) return true;

    if (
        NUMBER_WORDS[spoken] !== undefined &&
        NUMBER_WORDS[spoken] === target
    ) return true;

    // Common English homophones.
    const targetGroup = HOMOPHONE_LOOKUP.get(target);
    if (targetGroup && targetGroup.has(spoken)) return true;

    return false;
}

function alignWords(targetTokens, spokenTokens) {
    const n = targetTokens.length;
    const m = spokenTokens.length;

    // Longest common subsequence using pronunciation-aware matching.
    const dp = Array.from(
        { length: n + 1 },
        () => Array(m + 1).fill(0)
    );

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const target = targetTokens[i - 1].clean;
            const spoken = spokenTokens[j - 1].clean;

            if (wordsEquivalent(target, spoken)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    // Trace back to identify which target words were matched.
    const matchedTargetIndices = new Set();
    let i = n;
    let j = m;

    while (i > 0 && j > 0) {
        const target = targetTokens[i - 1].clean;
        const spoken = spokenTokens[j - 1].clean;

        if (
            wordsEquivalent(target, spoken) &&
            dp[i][j] === dp[i - 1][j - 1] + 1
        ) {
            matchedTargetIndices.add(i - 1);
            i--;
            j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return targetTokens.map((token, idx) => ({
        ...token,
        matched: matchedTargetIndices.has(idx)
    }));
}


// ==================== RENDER ====================
function getCurrentTopic() { return TOPICS_DATA[state.currentTopicIndex]; }
function getCurrentSentenceObj() { return getCurrentTopic().sentences[state.currentSentenceIndex]; }

function resetTopicTracking() {
    state.topicResults = Array.from({ length: 10 }, () => ({
        evaluated: false, matchedWords: 0, totalWords: 0, accuracy: 0, attempts: 0
    }));
}

function setLevelBadgeClass(el, level) {
    el.className = `level-dot level-${level}`;
    el.textContent = level;
}

function renderCurrentSentence(autoSpeak = true) {
    stopListeningIfActive();
    closeWordTranslationPopup();

    const topic = getCurrentTopic();
    const sentenceObj = getCurrentSentenceObj();
    const totalSentences = topic.sentences.length;
    const currentNum = state.currentSentenceIndex + 1;


    dom.headerTopicTitle.textContent = topic.titleAr;
    setLevelBadgeClass(dom.stageLevelBadge, topic.level);
    dom.stageTopicName.textContent = topic.titleAr;
    dom.sentenceCounter.textContent = ` ${currentNum} / ${totalSentences}`;

    const progressPercent = Math.round((currentNum / totalSentences) * 100);
    dom.topProgressFill.style.width = `${progressPercent}%`;
    dom.nextBtnLabel.textContent = (currentNum === totalSentences) ? "إنهاء الموضوع وعرض التحليل" : "الجملة التالية";

    dom.giantSentence.innerHTML = "";
    const tokens = tokenizeSentence(sentenceObj.en);

    tokens.forEach(token => {
        const span = document.createElement("span");
        span.className = "story-word";
        span.textContent = token.raw;
        span.dataset.index = token.index;
        span.title = "اضغط لعرض الترجمة وسماع النطق";
        span.addEventListener("click", e => {
            e.stopPropagation();
            showWordTranslationPopup(span, token.raw);
            speakText(token.raw, true);
        });
        dom.giantSentence.appendChild(span);
        dom.giantSentence.appendChild(document.createTextNode(" "));
    });

    dom.arabicTranslation.textContent = sentenceObj.ar;
    dom.feedbackPanel.hidden = true;
    dom.spokenTranscriptText.textContent = "";
    dom.attemptStatsRow.innerHTML = "";
    dom.statCurrentAccuracy.textContent = "—";
    dom.statMatchedWords.textContent = `0 / ${tokens.length}`;

    if (autoSpeak) speakText(sentenceObj.en, false);
}

function evaluateSpokenSentence(transcript) {
    const sentenceObj = getCurrentSentenceObj();
    const targetTokens = tokenizeSentence(sentenceObj.en);
    const spokenTokens = tokenizeSpokenTranscript(transcript);
    const alignment = alignWords(targetTokens, spokenTokens);
    const wordSpans = dom.giantSentence.querySelectorAll(".story-word");

    let matchedCount = 0;
    alignment.forEach((item, idx) => {
        const span = wordSpans[idx];
        if (!span) return;
        span.classList.remove("word-correct", "word-incorrect");
        if (item.matched) {
            span.classList.add("word-correct");
            matchedCount++;
        } else {
            span.classList.add("word-incorrect");
        }
    });

    const totalCount = targetTokens.length;
    const accuracy = totalCount > 0 ? Math.round((matchedCount / totalCount) * 100) : 0;
    const record = state.topicResults[state.currentSentenceIndex];
    record.evaluated = true;
    record.attempts += 1;
    if (accuracy >= record.accuracy || record.totalWords === 0) {
        record.matchedWords = matchedCount;
        record.totalWords = totalCount;
        record.accuracy = accuracy;
    }

    dom.feedbackPanel.hidden = false;
    dom.spokenTranscriptText.textContent = transcript || "—";
    dom.attemptStatsRow.innerHTML = `
        <span>الدقة: <strong style="color: var(--ink)">${accuracy}%</strong></span>
        <span>•</span>
        <span>صحيحة: <strong style="color: var(--success)">${matchedCount}</strong></span>
        <span>•</span>
        <span>غير صحيحة: <strong style="color: var(--error)">${totalCount - matchedCount}</strong></span>
    `;
    dom.statCurrentAccuracy.textContent = `${accuracy}%`;
    dom.statMatchedWords.textContent = `${matchedCount} / ${totalCount}`;

    if (matchedCount === totalCount && totalCount > 0) {
        playMotivationalSuccessSound();
        dom.micStatusText.textContent = "";
    } else {
        dom.micStatusText.textContent = "";
    }
}

// ==================== SPEECH RECOGNITION ====================
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showStatusAlert("متصفحك الحالي لا يدعم ميزة التعرف على الكلام (Web Speech API)");
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;

    recognition.onstart = () => {
        state.isListening = true;
        dom.micCircleBtn.classList.add("is-listening");
        dom.micCircleBtn.innerHTML = `<i data-lucide="mic"></i>`;
        dom.micStatusText.textContent = "تحدث الآن بالانجليزية";
        dom.micStatusText.classList.add("listening-text");
        hideStatusAlert();
        lucide.createIcons();
    };

    recognition.onresult = event => {
    const candidates = [];

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];

        if (!result.isFinal) continue;

        // Collect the browser's possible interpretations.
        for (let j = 0; j < result.length; j++) {
            const transcript = result[j].transcript.trim();

            if (transcript) {
                candidates.push({
                    transcript,
                    confidence: result[j].confidence || 0
                });
            }
        }
    }

    if (!candidates.length) return;

    const targetTokens = tokenizeSentence(
        getCurrentSentenceObj().en
    );

    // Prefer the interpretation that best matches the target sentence.
    const rankedCandidates = candidates.map(candidate => {
        const spokenTokens = tokenizeSpokenTranscript(
            candidate.transcript
        );

        const alignment = alignWords(targetTokens, spokenTokens);

        const matchedCount = alignment.filter(
            token => token.matched
        ).length;

        return {
            ...candidate,
            matchedCount
        };
    });

    rankedCandidates.sort((a, b) =>
        b.matchedCount - a.matchedCount ||
        b.confidence - a.confidence
    );

    evaluateSpokenSentence(rankedCandidates[0].transcript);
};

    recognition.onerror = event => {
        state.isListening = false;
        dom.micCircleBtn.classList.remove("is-listening");
        dom.micStatusText.classList.remove("listening-text");
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
            showStatusAlert("تم رفض الوصول إلى المايكروفون، تأكد من إذن المتصفح وفتح الصفحة عبر HTTPS أو localhost");
            dom.micStatusText.textContent = "صلاحية المايكروفون غير مفعلة";
        } else if (event.error === "no-speech") {
            dom.micStatusText.textContent = "لم يتم التقاط أي صوت";
        } else if (event.error !== "aborted") {
            dom.micStatusText.textContent = "حدث خطأ أثناء التعرف على الصوت";
        }
    };

    recognition.onend = () => {
        state.isListening = false;
        dom.micCircleBtn.classList.remove("is-listening");
        dom.micStatusText.classList.remove("listening-text");
        if (dom.micStatusText.textContent.includes("جاري الاستماع")) {
            dom.micStatusText.textContent = "اضغط على المايكروفون وتحدث";
        }
    };
    state.recognition = recognition;
}

function toggleMicrophone() {
    ensureAudioContext();
    closeWordTranslationPopup();
    if (!state.recognition) {
        showStatusAlert("ميزة التعرف على الكلام غير مدعومة في هذا المتصفح");
        return;
    }
    if (state.isListening) { state.recognition.stop(); return; }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    dom.giantSentence.querySelectorAll(".story-word").forEach(span => {
        span.classList.remove("word-correct", "word-incorrect");
    });
    try { state.recognition.start(); } catch (e) {}
}

function stopListeningIfActive() {
    if (state.recognition && state.isListening) {
        try { state.recognition.abort(); } catch (e) {}
        state.isListening = false;
        dom.micCircleBtn.classList.remove("is-listening");
        dom.micStatusText.classList.remove("listening-text");
        dom.micStatusText.textContent = "اضغط على المايكروفون وتحدث";
    }
}

function showStatusAlert(msg) {
    dom.statusAlert.textContent = msg;
    dom.statusAlert.hidden = false;
}
function hideStatusAlert() { dom.statusAlert.hidden = true; }

// ==================== TOPICS MODAL (ALL 20 EMOJI CARDS, NO FILTER BUTTONS) ====================
function renderTopicsModalGrid() {
    dom.topicsGrid.innerHTML = "";
    TOPICS_DATA.forEach((topic, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = `topic-card ${index === state.currentTopicIndex ? "active-topic" : ""}`;
        card.innerHTML = `
            <div class="topic-card-banner">
                <div class="topic-card-badge">
                    <span class="level-dot level-${topic.level}">${topic.level}</span>
                </div>
                <div class="topic-card-emoji">${topic.emoji}</div>
            </div>
            <div class="topic-card-body">
                <div class="topic-card-en">${topic.titleEn}</div>
                <div class="topic-card-ar">${topic.titleAr}</div>
                <div class="topic-card-desc">${topic.desc}</div>
                <div class="topic-card-footer">
                    <span>10 عبارات</span>
                    <span class="topic-card-action">ابدأ الموضوع ⟵</span>
                </div>
            </div>
        `;
        card.addEventListener("click", () => {
            selectTopic(index);
            closeTopicsModal();
        });
        dom.topicsGrid.appendChild(card);
    });
}

function selectTopic(topicIndex) {
    state.currentTopicIndex = topicIndex;
    state.currentSentenceIndex = 0;
    resetTopicTracking();
    renderCurrentSentence(true);
}

function openTopicsModal() {
    closeWordTranslationPopup();
    renderTopicsModalGrid();
    dom.topicsModal.hidden = false;
}
function closeTopicsModal() { dom.topicsModal.hidden = true; }

// ==================== SUMMARY MODAL ====================
function showTopicSummaryModal() {
    closeWordTranslationPopup();
    const topic = getCurrentTopic();
    let totalTopicWords = 0, totalMatchedWords = 0, perfectSentences = 0;

    topic.sentences.forEach((s, idx) => {
        const tokenCount = tokenizeSentence(s.en).length;
        totalTopicWords += tokenCount;
        const res = state.topicResults[idx];
        if (res && res.evaluated) {
            totalMatchedWords += res.matchedWords;
            if (res.accuracy === 100) perfectSentences++;
        }
    });

    const overallAccuracy = totalTopicWords > 0 ? Math.round((totalMatchedWords / totalTopicWords) * 100) : 0;
    let stars = overallAccuracy >= 90 ? 5 : overallAccuracy >= 75 ? 4 : overallAccuracy >= 60 ? 3 : overallAccuracy >= 40 ? 2 : 1;

    const feedbackMessages = {
        5: "أداء استثنائي! نطقك واضح جداً وطلاقتك ممتازة في هذا الموضوع",
        4: "أداء رائع جداً! أتقنت معظم الجمل بوضوح وثقة عالية",
        3: "أداء جيد! استمر في التدرب على الكلمات لرفع دقتك",
        2: "بداية طيبة! استمع للجمل مرة أخرى وحاول تكرارها بهدوء",
        1: "لقد أنهيت استعراض الموضوع! جرب نطق الجمل بالمايكروفون لتحصل على تقييم أعلى"
    };

    setLevelBadgeClass(dom.summaryLevelDot, topic.level);
    dom.summaryTopicTitle.textContent = topic.titleAr;
    dom.summaryFeedbackMessage.textContent = feedbackMessages[stars];

    dom.starsContainer.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        dom.starsContainer.innerHTML += `<span class="star-item ${i <= stars ? "filled" : ""}"><i data-lucide="star"></i></span>`;
    }
    dom.starsScoreText.textContent = `${stars} من 5 نجوم`;
    dom.summaryAccuracyValue.textContent = `${overallAccuracy}%`;
    dom.summaryWordsValue.textContent = `${totalMatchedWords} / ${totalTopicWords}`;
    dom.summaryPerfectValue.textContent = `${perfectSentences} / 10`;

    dom.summaryModal.hidden = false;
    lucide.createIcons();
    playTopicCompletionFanfare();
}

function closeSummaryModal() { dom.summaryModal.hidden = true; }

// ==================== NAVIGATION ====================
function handleNextSentence() {
    closeWordTranslationPopup();
    const topic = getCurrentTopic();
    if (state.currentSentenceIndex < topic.sentences.length - 1) {
        state.currentSentenceIndex++;
        dom.sentenceWrapper.classList.add("sentence-transition");
        setTimeout(() => {
            renderCurrentSentence(true);
            dom.sentenceWrapper.classList.remove("sentence-transition");
        }, 160);
    } else {
        showTopicSummaryModal();
    }
}

function handleTryAgain() {
    stopListeningIfActive();
    closeWordTranslationPopup();
    dom.giantSentence.querySelectorAll(".story-word").forEach(span => {
        span.classList.remove("word-correct", "word-incorrect");
    });
    dom.feedbackPanel.hidden = true;
    dom.statCurrentAccuracy.textContent = "—";
    dom.micStatusText.textContent = "اضغط على المايكروفون وتحدث";
    speakText(getCurrentSentenceObj().en, false);
}

// ==================== BINDINGS ====================
function bindEvents() {
    dom.openTopicsBtn.addEventListener("click", openTopicsModal);
    dom.closeTopicsModalBtn.addEventListener("click", closeTopicsModal);
    dom.topicsModal.addEventListener("click", e => { if (e.target === dom.topicsModal) closeTopicsModal(); });

    dom.muteTtsBtn.addEventListener("click", toggleMuteTts);
    dom.themeToggleBtn.addEventListener("click", toggleDarkMode);
    dom.listenMetaBtn.addEventListener("click", () => speakText(getCurrentSentenceObj().en, true));
    dom.replayAudioBtn.addEventListener("click", () => speakText(getCurrentSentenceObj().en, true));
    dom.tryAgainBtn.addEventListener("click", handleTryAgain);
    dom.nextSentenceBtn.addEventListener("click", handleNextSentence);
    dom.micCircleBtn.addEventListener("click", toggleMicrophone);

    dom.restartTopicBtn.addEventListener("click", () => {
        closeSummaryModal();
        selectTopic(state.currentTopicIndex);
    });
    dom.chooseAnotherTopicBtn.addEventListener("click", () => {
        closeSummaryModal();
        openTopicsModal();
    });

    // Close word translation popup when clicking outside or resizing/scrolling
    document.addEventListener("click", e => {
        if (state.activePopupEl && !e.target.closest(".word-translation-popup") && !e.target.closest(".story-word")) {
            closeWordTranslationPopup();
        }
    });

    window.addEventListener("resize", () => {
        if (state.activePopupEl && state.activeWordSpan) {
            positionPopupNearWord(state.activeWordSpan, state.activePopupEl);
        }
    });

    window.addEventListener("scroll", closeWordTranslationPopup, { passive: true });

    window.addEventListener("keydown", e => {
        if (!dom.topicsModal.hidden || !dom.summaryModal.hidden) {
            if (e.key === "Escape") { closeTopicsModal(); closeSummaryModal(); }
            return;
        }
        if (e.key === "Escape") {
            closeWordTranslationPopup();
            return;
        }
        if (e.code === "Space") { e.preventDefault(); toggleMicrophone(); }
        else if (e.key === "r" || e.key === "R") { e.preventDefault(); speakText(getCurrentSentenceObj().en, true); }
        else if (e.key === "Enter") { e.preventDefault(); handleNextSentence(); }
    });
}

function initApp() {
    lucide.createIcons();
    initVoices();
    initSpeechRecognition();
    resetTopicTracking();
    bindEvents();
    renderCurrentSentence(true);
}

document.addEventListener("DOMContentLoaded", initApp);