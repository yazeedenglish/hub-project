/**
 * Yazeed Speaking English Practice App
 * 20 Topics (4 per CEFR Level A1-C1), 10 sentences each with Emojis & Descriptions
 */

const TOPICS_DATA = [
    // ==================== LEVEL A1 (4 Topics) ====================
    {
        id: "a1-cafe",
        level: "A1",
        emoji: "☕",
        titleAr: "في المقهى",
        titleEn: "At the Café",
        desc: "زيارة هادئة للمقهى لطلب القهوة والقراءة.",
        sentences: [
            { en: "We are sitting at a table near the window.", ar: "نحن نجلس على طاولة بالقرب من النافذة." },
            { en: "Can I see the coffee menu please?", ar: "هل يمكنني رؤية قائمة القهوة من فضلك؟" },
            { en: "I would like a cup of hot cappuccino.", ar: "أود كوباً من الكابتشينو الساخن." },
            { en: "My friend wants black tea with fresh mint.", ar: "صديقي يريد شائاً أسود مع النعناع الطازج." },
            { en: "Please bring us two glasses of cold water.", ar: "من فضلك أحضر لنا كوبين من الماء البارد." },
            { en: "The coffee here is always fresh and delicious.", ar: "القهوة هنا دائماً طازجة ولذيذة." },
            { en: "Would you like some sweet cake with your drink?", ar: "هل ترغب في بعض الكعكة الحلوة مع مشروبك؟" },
            { en: "We also want a small chocolate biscuit.", ar: "نريد أيضاً بسكويت بالشوكولاتة الصغيرة." },
            { en: "Excuse me, can we have the bill now?", ar: "عفواً، هل يمكننا الحصول على الفاتورة الآن؟" },
            { en: "Thank you very much for the wonderful service.", ar: "شكراً جزيلاً لك على الخدمة الرائعة." }
        ]
    },
    {
        id: "a1-morning",
        level: "A1",
        emoji: "☀️",
        titleAr: "روتين الصباح",
        titleEn: "Morning Routine",
        desc: "خطوات الصباح من الاستيقاظ حتى الخروج.",
        sentences: [
            { en: "I wake up at six thirty every morning.", ar: "أستيقظ في الساعة السادسة والنصف كل صباح." },
            { en: "First, I wash my face with cold water.", ar: "أولاً، أغسل وجهي بالماء البارد." },
            { en: "I brush my teeth for two minutes.", ar: "أنظف أسناني بالفرشاة لمدة دقيقتين." },
            { en: "Then I wear my clean blue shirt.", ar: "ثم أرتدي قميصي الأزرق النظيف." },
            { en: "I eat boiled eggs and toast for breakfast.", ar: "أتناول البيض المسلوق والخبز المحمص على الفطور." },
            { en: "My mother drinks a cup of hot coffee.", ar: "تشرب أمي كوباً من القهوة الساخنة." },
            { en: "I put my notebook inside my black bag.", ar: "أضع دفتري داخل حقيبتي السوداء." },
            { en: "The school bus arrives at seven fifteen.", ar: "تصل حافلة المدرسة في السابعة والربع." },
            { en: "I say goodbye to my family at the door.", ar: "أودع عائلتي عند الباب." },
            { en: "I am ready for a happy new day.", ar: "أنا مستعد ليوم جديد سعيد." }
        ]
    },
    {
        id: "a1-family-dinner",
        level: "A1",
        emoji: "🍲",
        titleAr: "عشاء العائلة",
        titleEn: "Family Dinner",
        desc: "تحضير العشاء واجتماع العائلة حول المائدة.",
        sentences: [
            { en: "The sun sets and the family gathers around the table.", ar: "تغرب الشمس وتجتمع العائلة حول المائدة." },
            { en: "Mother cooks a delicious bowl of hot soup.", ar: "تطهو الأم وعاءً لذيذاً من الحساء الساخن." },
            { en: "The children wash their hands before eating.", ar: "يغسل الأطفال أيديهم قبل الأكل." },
            { en: "Father cuts the roasted chicken into small pieces.", ar: "يققطع الأب الدجاج المشوي إلى قطع صغيرة." },
            { en: "We pass the basket of fresh bread around.", ar: "نمرر سلة الخبز الطازج حول المائدة." },
            { en: "Everyone talks about their day at school and work.", ar: "يتحدث الجميع عن يومهم في المدرسة والعمل." },
            { en: "Please pass me the plate of green salad.", ar: "من فضلك مرر لي طبق السلطة الخضراء." },
            { en: "We drink sweet juice after finishing the food.", ar: "نشرب عصيرًا حلوًا بعد الانتهاء من الطعام." },
            { en: "The little sister helps clear the table.", ar: "تساعد الأخت الصغرى في ترتيب المائدة." },
            { en: "We spend a warm and peaceful evening together.", ar: "نقضى مسياً دافئاً وهادئاً معاً." }
        ]
    },
    {
        id: "a1-grocery",
        level: "A1",
        emoji: "🛒",
        titleAr: "التسوق لشراء الاحتياجات",
        titleEn: "Grocery Shopping",
        desc: "جولة لشراء الفواكه والخضراوات والخبز.",
        sentences: [
            { en: "Good morning, welcome to our local grocery store.", ar: "صباح الخير، أهلاً بك في متجر البقالة المحلي." },
            { en: "These red apples are very sweet today.", ar: "هذا التفاح الأحمر حلو جداً اليوم." },
            { en: "How much is one kilo of fresh tomatoes?", ar: "بكم كيلو الطماطم الطازجة؟" },
            { en: "I need five yellow bananas for my children.", ar: "أحتاج إلى خمس موزات صفراء لأطفالي." },
            { en: "Do you have fresh milk in the fridge?", ar: "هل لديكم حليب طازج في الثلاجة؟" },
            { en: "Yes, it arrived from the dairy farm today.", ar: "نعم، لقد وصل من مزرعة الألبان اليوم." },
            { en: "Please put the potatoes in a paper bag.", ar: "من فضلك ضع البطاطس في كيس ورقي." },
            { en: "I will pay with cash at the front counter.", ar: "سأدفع نقداً عند الصندوق الأمامي." },
            { en: "Here is your change and your receipt.", ar: "تفضل الباقي والإيصال الخاص بك." },
            { en: "Have a nice day and see you next week.", ar: "أتمنى لك يوماً سعيداً وأراك الأسبوع القادم." }
        ]
    },

    // ==================== LEVEL A2 (4 Topics) ====================
    {
        id: "a2-weekend",
        level: "A2",
        emoji: "🏞️",
        titleAr: "رحلة نهاية الأسبوع",
        titleEn: "Weekend Trip",
        desc: "رحلة بالسيارة لاستكشاف التلال والبلدة القديمة.",
        sentences: [
            { en: "The weather is sunny and pleasant this Saturday morning.", ar: "الطقس مشمس ولطيف صباح هذا السبت." },
            { en: "We packed sandwiches and fresh juice in a cooler.", ar: "وضعنا الشطائر والعصير الطازج في حافظة التبريد." },
            { en: "The boy is playing in the garden with his cousins.", ar: "يلعب الولد في الحديقة مع أبناء عمومته." },
            { en: "We spread a large blanket under the palm trees.", ar: "فرشنا بطانية كبيرة تحت أشجار النخيل." },
            { en: "Many families are walking around the small lake.", ar: "تتجول العديد من العائلات حول البحيرة الصغيرة." },
            { en: "My sister brought her camera to take family photos.", ar: "أحضرت أختي كاميرتها لالتقاط صور عائلية." },
            { en: "We fed the ducks some small pieces of bread.", ar: "أطعمنا البط بعض قطع الخبز الصغيرة." },
            { en: "In the afternoon, a cool breeze started to blow.", ar: "في فترة ما بعد الظهر، بدأ نسيم بارد يهب." },
            { en: "We cleaned our place before leaving the green park.", ar: "نظفنا مكاننا قبل مغادرة الحديقة الخضراء." },
            { en: "It was one of the best weekends this month.", ar: "كانت واحدة من أفضل عطلات نهاية الأسبوع هذا الشهر." }
        ]
    },
    {
        id: "a2-university",
        level: "A2",
        emoji: "🎓",
        titleAr: "يوم في الجامعة",
        titleEn: "A Day at University",
        desc: "يوم طالب جامعي بين المحاضرات والمكتبة.",
        sentences: [
            { en: "I arrive at the university campus before nine o'clock.", ar: "أصل إلى الحرم الجامعي قبل الساعة التاسعة." },
            { en: "My first lecture is about modern computer science.", ar: "محاضرتي الأولى تدور حول علوم الحاسب الحديثة." },
            { en: "The professor explains difficult concepts with clear examples.", ar: "يشرح الأستاذ المفاهيم الصعبة بأمثلة واضحة." },
            { en: "During the break, I meet my friends at the cafeteria.", ar: "أثناء الاستراحة، أقابل أصدقائي في الكافيتريا." },
            { en: "We borrow reference books from the quiet library.", ar: "نستعير كتباً مرجعية من المكتبة الهادئة." },
            { en: "I take detailed notes during every afternoon seminar.", ar: "أدون ملاحظات مفصلة خلال كل ندوات ما بعد الظهر." },
            { en: "Working on group assignments improves our teamwork skills.", ar: "العمل على الواجبات الجماعية يطور مهارات العمل الجماعي لدين." },
            { en: "The campus garden is a peaceful place to study.", ar: "حديقة الحرم الجامعي مكان هادئ للدراسة." },
            { en: "I submit my weekly report online before midnight.", ar: "أقدم تقريري الأسبوعي عبر الإنترنت قبل منتصف الليل." },
            { en: "University life teaches you independence and time management.", ar: "الحياة الجامعية تعلّمك الاستقلالية وإدارة الوقت." }
        ]
    },
    {
        id: "a2-airport",
        level: "A2",
        emoji: "✈️",
        titleAr: "في المطار قبل السفر",
        titleEn: "At the Airport Before Flying",
        desc: "إجراءات السفر وحقائب الطائرة.",
        sentences: [
            { en: "We arrived at the airport three hours before our flight.", ar: "وصلنا إلى المطار قبل رحلتنا بثلاث ساعات." },
            { en: "Please show me your passport and boarding pass.", ar: "يرجى إظهار جواز السفر وبطاقة صعود الطائرة." },
            { en: "I only have one suitcase and a small backpack.", ar: "لدي حقيبة سفر واحدة فقط وحقيبة ظهر صغيرة." },
            { en: "Would you prefer a window seat or an aisle seat?", ar: "هل تفضل مقعداً بجانب النافذة أم بجانب الممر؟" },
            { en: "Our flight leaves from gate number twenty four.", ar: "تغادر رحلتنا من البوابة رقم أربعة وعشرين." },
            { en: "We need to go through security check right now.", ar: "نحتاج إلى المرور عبر التفتيش الأمني الآن." },
            { en: "Let us buy a bottle of water from the duty free shop.", ar: "دعنا نشتري زجاجة ماء من السوق الحرة." },
            { en: "The screen says that boarding will start in ten minutes.", ar: "تقول الشاشة إن صعود الطائرة سيبدأ خلال عشر دقائق." },
            { en: "Please fasten your seatbelt and turn off your phone.", ar: "يرجى ربط حزام الأمان وإغلاق هاتفك." },
            { en: "I hope we have a smooth and comfortable flight.", ar: "آمل أن نحظى رحلة سلسة ومريحة." }
        ]
    },
    {
        id: "a2-doctor",
        level: "A2",
        emoji: "🩺",
        titleAr: "زيارة عيادة الطبيب",
        titleEn: "Visiting the Doctor's Clinic",
        desc: "الكشف ووصف الأدوية المناسبة.",
        sentences: [
            { en: "I have an appointment with Doctor Tariq at ten o'clock.", ar: "لدي موعد مع الدكتور طارق في الساعة العاشرة." },
            { en: "I have had a strong headache since yesterday evening.", ar: "أعاني من صداع قوي منذ مساء أمس." },
            { en: "My throat hurts when I drink cold water.", ar: "حلقي يؤلمني عندما أشرب الماء البارد." },
            { en: "Let me check your temperature and blood pressure.", ar: "دعني أفحص درجة حرارتك وضغط دمك." },
            { en: "Take a deep breath and open your mouth wide.", ar: "خذ نفساً عميقاً وافتح فمك جيداً." },
            { en: "You just have a mild seasonal cold.", ar: "لديك فقط نزلة برد موسمية خفيفة." },
            { en: "You should take this medicine twice a day after meals.", ar: "يجب أن تتناول هذا الدواء مرتين يومياً بعد الوجبات." },
            { en: "Make sure you drink plenty of warm fluids.", ar: "تأكد من شرب الكثير من السوائل الدافئة." },
            { en: "Stay at home and rest for the next two days.", ar: "ابق في المنزل واسترح خلال اليومين القادمين." },
            { en: "I feel much better after talking to the doctor.", ar: "أشعر بتحسن كبير بعد التحدث إلى الطبيب." }
        ]
    },

    // ==================== LEVEL B1 (4 Topics) ====================
    {
        id: "b1-interview",
        level: "B1",
        emoji: "💼",
        titleAr: "مقابلة عمل ناجحة",
        titleEn: "A Successful Job Interview",
        desc: "مهارات تقديم الذات والخبرات المهنية.",
        sentences: [
            { en: "Thank you for inviting me to interview for this position.", ar: "شكراً لدعوتي لإجراء المقابلة لهذه الوظيفة." },
            { en: "I graduated from university with a degree in computer science.", ar: "تخرجت من الجامعة بشهادة في علوم الحاسب." },
            { en: "Over the past three years, I have worked on several team projects.", ar: "خلال السنوات الثلاث الماضية، عملت على عدة مشاريع جماعية." },
            { en: "I enjoy solving complex problems and learning new technologies.", ar: "أستمتع بحل المشكلات المعقدة وتعلم التقنيات الجديدة." },
            { en: "Can you tell me more about the daily responsibilities here?", ar: "هل يمكنك إخباري المزيد عن المسؤوليات اليومية هنا؟" },
            { en: "I always try to organize my tasks before starting the day.", ar: "أحاول دائماً تنظيم مهامي قبل بدء اليوم." },
            { en: "Working under pressure helps me stay focused and productive.", ar: "العمل تحت الضغط يساعدني على البقاء مركزاً ومنتجاً." },
            { en: "I am looking for an opportunity to grow with your company.", ar: "أبحث عن فرصة للتطور والنمو مع شركتكم." },
            { en: "We will contact you by email before the end of next week.", ar: "سنتواصل معك عبر البريد الإلكتروني قبل نهاية الأسبوع القادم." },
            { en: "It was a pleasure meeting you and learning about your team.", ar: "كان من دواعي سروري لقاؤك والتعرف على فريقكم." }
        ]
    },
    {
        id: "b1-fitness",
        level: "B1",
        emoji: "🏃",
        titleAr: "حياة صحية ولياقة بدنية",
        titleEn: "Healthy Lifestyle and Fitness",
        desc: "عادات النوم والتغذية والرياضة اليومية.",
        sentences: [
            { en: "Staying active every day has completely changed my energy levels.", ar: "البقاء نشيطاً كل يوم غيّر مستويات طاقتي بالكامل." },
            { en: "I decided to replace sugary drinks with water and green tea.", ar: "قررت استبدال المشروبات السكرية بالماء والشاي الأخضر." },
            { en: "Walking for thirty minutes after dinner improves digestion significantly.", ar: "المشي لمدة ثلاثين دقيقة بعد العشاء يحسن الهضم بشكل ملحوظ." },
            { en: "Getting enough sleep at night is just as important as exercise.", ar: "الحصول على قسط كافٍ من النوم ليلاً لا يقل أهمية عن التمارين." },
            { en: "My trainer advised me to warm up properly before lifting weights.", ar: "نصحني مدربي بالإحماء بشكل صحيح قبل رفع الأثقال." },
            { en: "Preparing meals at home helps me control the ingredients easily.", ar: "تحضير الوجبات في المنزل يساعدني على التحكم في المكونات بسهولة." },
            { en: "Consistency is much more effective than following strict short diets.", ar: "الاستمرارية أكثر فعالية بكثير من اتباع حميات قاسية قصيرة." },
            { en: "Whenever I feel stressed, a quick run clears my mind.", ar: "كلما شعرت بالتوتر، فإن جولة جري سريعة تصفي ذهني." },
            { en: "Setting realistic weekly goals keeps me motivated all year round.", ar: "وضع أهداف أسبوعية واقعية يبقيني متحفزاً طوال العام." },
            { en: "Good health is the greatest investment you can make for yourself.", ar: "الصحة الجيدة هي أعظم استثمار يمكنك القيام به لنفسك." }
        ]
    },
    {
        id: "b1-language",
        level: "B1",
        emoji: "🗣️",
        titleAr: "رحلة تعلم لغة جديدة",
        titleEn: "The Journey of Learning a Language",
        desc: "استراتيجيات اكتساب الطلاقة وبناء الثقة.",
        sentences: [
            { en: "Practicing out loud every day builds confidence when speaking English.", ar: "التدرب بصوت عالٍ كل يوم يبني الثقة عند التحدث بالإنجليزية." },
            { en: "Do not be afraid of making mistakes during real conversations.", ar: "لا تخف من ارتكاب الأخطاء أثناء المحادثات الحقيقية." },
            { en: "Listening to native speakers helps you learn natural expressions.", ar: "الاستماع إلى المتحدثين الأصليين يساعدك على تعلم التعبيرات الطبيعية." },
            { en: "I usually write down new sentences instead of single words.", ar: "عادةً ما أدوّن جملاً جديدة بدلاً من كلمات مفردة." },
            { en: "Watching documentaries with English subtitles improved my listening skills.", ar: "مشاهدة الأفلام الوثائقية مع ترجمة إنجليزية طورت مهارات الاستماع لدي." },
            { en: "Repeating a sentence several times makes your pronunciation smoother.", ar: "تكرار الجملة عدة مرات يجعل نطقك أكثر سلاسة." },
            { en: "It takes patience and daily effort to reach fluency.", ar: "يتطلب الأمر صبراً وجهداً يومياً للوصول إلى الطلاقة." },
            { en: "Reading short stories before sleep expands your vocabulary naturally.", ar: "قراءة القصص القصيرة قبل النوم توسع مفرداتك بشكل طبيعي." },
            { en: "Speaking with a study partner makes the learning process enjoyable.", ar: "التحدث مع شريك دراسة يجعل عملية التعلم ممتعة." },
            { en: "Every small step forward brings you closer to your goal.", ar: "كل خطوة صغيرة إلى الأمام تقربك من هدفك." }
        ]
    },
    {
        id: "b1-car-trouble",
        level: "B1",
        emoji: "🚗",
        titleAr: "عطل مفاجئ في السيارة",
        titleEn: "Unexpected Car Trouble",
        desc: "التعامل مع الأعطال وخدمات الإنقاذ على الطريق.",
        sentences: [
            { en: "While driving to work, I heard a strange noise from the engine.", ar: "أثناء القيادة إلى العمل، سمعت صوتاً غريباً من المحرك." },
            { en: "I safely pulled over to the side of the highway.", ar: "توقفت بأمان على جانب الطريق السريع." },
            { en: "The battery warning light suddenly appeared on the dashboard.", ar: "ظهر ضوء تحذير البطارية فجأة على لوحة القيادة." },
            { en: "I turned on the hazard lights so other drivers could see me.", ar: "شغّلت أضواء الطوارئ حتى يتمكن السائقون الآخرون من رؤيتي." },
            { en: "I called the roadside assistance service and shared my location.", ar: "اتصلت بخدمة المساعدة على الطريق وشاركت موقعي." },
            { en: "The mechanic arrived within twenty minutes with a tow truck.", ar: "وصل الميكانيكي خلال عشرين دقيقة مع شاحنة سحب." },
            { en: "He explained that the cooling fan belt needed replacement.", ar: "أوضح أن حزام مروحة التبريد يحتاج إلى استبدال." },
            { en: "Fortunately, the repair did not take more than two hours.", ar: "لحسن الحظ، لم يستغرق الإصلاح أكثر من ساعتين." },
            { en: "Regular maintenance prevents most unexpected breakdowns during long trips.", ar: "الصيانة الدورية تمنع معظم الأعطال المفاجئة أثناء الرحلات الطويلة." },
            { en: "I was relieved to get back on the road safely.", ar: "شعرت بالارتياح للعودة إلى الطريق بأمان." }
        ]
    },

    // ==================== LEVEL B2 (4 Topics) ====================
    {
        id: "b2-remote-work",
        level: "B2",
        emoji: "💻",
        titleAr: "العمل عن بُعد",
        titleEn: "Remote Work & Balance",
        desc: "توازن الحياة المهنية وإدارة الفرق العالمية.",
        sentences: [
            { en: "Remote work has transformed how modern companies manage their global teams.", ar: "غيّر العمل عن بُعد طريقة إدارة الشركات الحديثة لفرقها العالمية." },
            { en: "Eliminating the daily commute saves employees valuable time and money.", ar: "إلغاء التنقل اليومي يوفر للموظفين وقتاً ومالاً ثمينين." },
            { en: "However, separating personal life from professional duties requires strong discipline.", ar: "ومع ذلك، فإن فصل الحياة الشخصية عن الواجبات المهنية يتطلب انضباطاً قوياً." },
            { en: "Setting up a dedicated workspace at home boosts concentration significantly.", ar: "تخصيص مساحة عمل مستقلة في المنزل يعزز التركيز بشكل كبير." },
            { en: "Clear communication prevents misunderstandings when collaborating across different time zones.", ar: "التواصل الواضح يمنع سوء الفهم عند التعاون عبر مناطق زمنية مختلفة." },
            { en: "Many organizations now prefer a hybrid model combining flexibility and office teamwork.", ar: "تفضل العديد من المؤسسات الآن نموذجاً هجيناً يجمع بين المرونة والعمل المكتبي." },
            { en: "Taking scheduled breaks away from screens protects both physical and mental health.", ar: "أخذ فترات راحة مجدولة بعيداً عن الشاشات يحمي الصحة الجسدية والنفسية." },
            { en: "Managers should evaluate employees based on results rather than hours spent online.", ar: "يجب على المديرين تقييم الموظفين بناءً على النتائج وليس ساعات التواجد المتصل." },
            { en: "Digital tools allow teams to brainstorm ideas effectively from anywhere.", ar: "تتيح الأدوات الرقمية للفرق تبادل الأفكار بفعالية من أي مكان." },
            { en: "Finding a sustainable balance ultimately increases long-term creativity and satisfaction.", ar: "إيجاد توازن مستدام يزيد في النهاية من الإبداع والرضا على المدى الطويل." }
        ]
    },
    {
        id: "b2-environment",
        level: "B2",
        emoji: "🌱",
        titleAr: "حماية البيئة والاستدامة",
        titleEn: "Environmental Sustainability",
        desc: "الطاقة المتجددة وتقليل الانبعاثات الكربونية.",
        sentences: [
            { en: "Transitioning to renewable energy sources is essential for reducing carbon emissions.", ar: "الانتقال إلى مصادر الطاقة المتجددة أمر ضروري لتقليل انبعاثات الكربون." },
            { en: "Single-use plastics continue to pose a severe threat to marine ecosystems.", ar: "لا تزال المواد البلاستيكية ذات الاستخدام الواحد تشكل تهديداً خطيراً للنظم البيئية البحرية." },
            { en: "Planting native trees in urban areas helps lower summer temperatures naturally.", ar: "زراعة الأشجار المحلية في المناطق الحضرية تساعد على خفض درجات حرارة الصيف طبيعياً." },
            { en: "Consumers are increasingly choosing brands that demonstrate genuine environmental responsibility.", ar: "يختار المستهلكون بشكل متزايد العلامات التجارية التي تظهر مسؤولية بيئية حقيقية." },
            { en: "Conserving water resources requires modern irrigation techniques in agriculture.", ar: "الحفاظ على موارد المياه يتطلب تقنيات ري حديثة في الزراعة." },
            { en: "Recycling electronic waste prevents toxic materials from contaminating the soil.", ar: "إعادة تدوير النفايات الإلكترونية تمنع المواد السامة من تلويث التربة." },
            { en: "Public transportation networks reduce traffic congestion and improve air quality.", ar: "تقلل شبكات النقل العام من الازدحام المروري وتحسن جودة الهواء." },
            { en: "Educational campaigns encourage communities to adopt sustainable daily habits.", ar: "تشجع الحملات التوعوية المجتمعات على تبني عادات يومية مستدامة." },
            { en: "Governments and private industries must collaborate on green innovation.", ar: "يجب أن تتعاون الحكومات والقطاعات الخاصة في مجال الابتكار الأخضر." },
            { en: "Protecting our planet today ensures a healthier future for coming generations.", ar: "حماية كوكبنا اليوم تضمن مستقبلاً أكثر صحة للأجيال القادمة." }
        ]
    },
    {
        id: "b2-presentation",
        level: "B2",
        emoji: "📊",
        titleAr: "تقديم مشروع تقني",
        titleEn: "Technical Project Pitch",
        desc: "عرض الأفكار وتحليل النتائج للمستثمرين.",
        sentences: [
            { en: "Today I would like to present our proposal for the new mobile platform.", ar: "أود اليوم تقديم مقترحنا الخاص بالمنصة الجديدة للهواتف المحمولة." },
            { en: "Our primary objective is to simplify the user experience for beginners.", ar: "هدفنا الأساسي هو تبسيط تجربة المستخدم للمبتدئين." },
            { en: "Recent customer feedback revealed several bottlenecks in the registration process.", ar: "كشفت آراء العملاء الأخيرة عن عدة عوائق في عملية التسجيل." },
            { en: "By redesigning the interface, we reduced loading times by forty percent.", ar: "من خلال إعادة تصميم الواجهة، قللنا أوقات التحميل بنسبة أربعين بالمائة." },
            { en: "Security remains our highest priority throughout every stage of development.", ar: "يظل الأمان أولويتنا القصوى خلال كل مرحلة من مراحل التطوير." },
            { en: "This chart illustrates the projected growth over the next two quarters.", ar: "يوضح هذا الرسم البياني النمو المتوقع خلال الربعين القادمين." },
            { en: "We have allocated sufficient resources to test the system thoroughly before launch.", ar: "لقد خصصنا موارد كافية لاختبار النظام بدقة قبل الإطلاق." },
            { en: "Collaborating closely with the design team allowed us to meet all deadlines.", ar: "التعاون الوثيق مع فريق التصميم أتاح لنا الالتزام بجميع المواعيد النهائية." },
            { en: "I would be happy to answer any questions regarding the technical architecture.", ar: "سأكون سعيداً بالإجابة عن أي أسئلة تتعلق بالبنية التقنية." },
            { en: "Thank you for your attention and your continued support of this initiative.", ar: "شكراً لاهتمامكم ودعمكم المستمر لهذه المبادرة." }
        ]
    },
    {
        id: "b2-finance",
        level: "B2",
        emoji: "💰",
        titleAr: "التخطيط المالي الذكي",
        titleEn: "Smart Financial Planning",
        desc: "إدارة المدخرات والاستثمار لبناء مستقبل آمن.",
        sentences: [
            { en: "Building an emergency fund provides peace of mind during uncertain economic times.", ar: "بناء صندوق للطوارئ يوفر راحة البال خلال الأوقات الاقتصادية غير المستقرة." },
            { en: "Tracking monthly expenses reveals how small purchases add up over time.", ar: "تتبع النفقات الشهرية يكشف كيف تتراكم المشتريات الصغيرة بمرور الوقت." },
            { en: "Financial experts recommend saving at least twenty percent of your monthly income.", ar: "يوصي الخبراء الماليون بادخار عشرين بالمائة على الأقل من دخلك الشهري." },
            { en: "Avoiding unnecessary high-interest debt is crucial for achieving financial independence.", ar: "تجنب الديون غير الضرورية ذات الفوائد المرتفعة أمر حاسم لتحقيق الاستقلال المالي." },
            { en: "Diversifying your investments helps minimize risk across different market conditions.", ar: "تنويع استثماراتك يساعد على تقليل المخاطر عبر ظروف السوق المختلفة." },
            { en: "Distinguishing between essential needs and temporary desires requires honest self-reflection.", ar: "التمييز بين الاحتياجات الأساسية والرغبات المؤقتة يتطلب مراجعة صادقة للنفس." },
            { en: "Setting clear long-term financial milestones makes budgeting much more purposeful.", ar: "وضع أهداف مالية طويلة المدى يجعل إعداد الميزانية أكثر جدوى." },
            { en: "Continuous learning about economic trends empowers individuals to make informed decisions.", ar: "التعلم المستمر حول الاتجاهات الاقتصادية يمكّن الأفراد من اتخاذ قرارات مدروسة." },
            { en: "Automating your savings ensures consistency without relying on willpower alone.", ar: "أتمتة مدخراتك تضمن الاستمرارية دون الاعتماد على قوة الإرادة وحدها." },
            { en: "True wealth is measured by financial security rather than material possessions.", ar: "تُقاس الثروة الحقيقية بالأمان المالي وليس بالممتلكات المادية." }
        ]
    },

    // ==================== LEVEL C1 (4 Topics) ====================
    {
        id: "c1-ai-education",
        level: "C1",
        emoji: "🤖",
        titleAr: "الذكاء الاصطناعي والتعليم",
        titleEn: "AI in Modern Education",
        desc: "مستقبل التكنولوجيا الحديثة في المناهج الأكاديمية.",
        sentences: [
            { en: "Artificial intelligence is fundamentally reshaping traditional pedagogical methodologies worldwide.", ar: "يعيد الذكاء الاصطناعي تشكيل منهجيات التدريس التقليدية بشكل جذري حول العالم." },
            { en: "Adaptive learning systems tailor educational content to each student's individual pace.", ar: "تصمم أنظمة التعلم التكيفي المحتوى التعليمي وفقاً لسرعة كل طالب على حدة." },
            { en: "Nevertheless, technology cannot replace the empathy and mentorship of human educators.", ar: "ومع ذلك، لا يمكن للتكنولوجيا أن تحل محل التعاطف والتوجيه الذي يقدمه المعلمون البشر." },
            { en: "Cultivating critical thinking skills is paramount in an era of automated information.", ar: "تنمية مهارات التفكير النقدي أمر بالغ الأهمية في عصر المعلومات الآلية." },
            { en: "Academic institutions must establish transparent ethical frameworks for digital tools.", ar: "يجب على المؤسسات الأكاديمية وضع أطر أخلاقية شفافة للأدوات الرقمية." },
            { en: "Instantaneous feedback enables learners to identify and rectify misconceptions immediately.", ar: "تتيح التغذية الراجعة الفورية للمتعلمين تحديد المفاهيم الخاطئة وتصحيحها فوراً." },
            { en: "Bridging the digital divide ensures equitable access to advanced educational resources.", ar: "سد الفجوة الرقمية يضمن وصولاً عادلاً إلى الموارد التعليمية المتقدمة." },
            { en: "Lifelong adaptability has become more valuable than memorizing static facts.", ar: "أصبحت القدرة على التكيف مدى الحياة أكثر قيمة من حفظ الحقائق الثابتة." },
            { en: "Interdisciplinary collaboration fosters innovative solutions to complex global challenges.", ar: "يعزز التعاون بين التخصصات المختلفة حلولاً مبتكرة للتحديات العالمية المعقدة." },
            { en: "Ultimately, education should empower individuals to navigate an evolving world responsibly.", ar: "في النهاية، يجب أن يمكّن التعليم الأفراد من التعامل مع عالم متغير بمسؤولية." }
        ]
    },
    {
        id: "c1-psychology",
        level: "C1",
        emoji: "🧠",
        titleAr: "علم نفس العادات والتركيز",
        titleEn: "Psychology of Deep Focus",
        desc: "التحكم في الانتباه وبناء العادات المستدامة.",
        sentences: [
            { en: "Sustained cognitive focus has become increasingly rare in our hyper-connected society.", ar: "أصبح التركيز الذهني المستمر نادراً بشكل متزايد في مجتمعنا فائق الاتصال." },
            { en: "Constant digital notifications fragment our attention and diminish creative capacity.", ar: "تؤدي الإشعارات الرقمية المستمرة إلى تشتيت انتباهنا وإضعاف القدرة الإبداعية." },
            { en: "Neuroscience demonstrates that habitual behaviors are reinforced through consistent environmental cues.", ar: "يثبت علم الأعصاب أن السلوكيات الاعتيادية تتعزز من خلال إشارات بيئية متسقة." },
            { en: "Incremental daily improvements compound into remarkable achievements over extended periods.", ar: "تتراكم التحسينات اليومية الطفيفة لتتحول إلى إنجازات مذهلة على مدى فترات طويلة." },
            { en: "Designing frictionless environments makes beneficial habits significantly easier to maintain.", ar: "تصميم بيئات خالية من العوائق يجعل الحفاظ على العادات المفيدة أسهل بكثير." },
            { en: "Deliberate practice requires stepping outside one's comfort zone with immediate reflection.", ar: "يتطلب التدريب المتعمد الخروج من منطقة الراحة مع التأمل والمراجعة الفورية." },
            { en: "Mental fatigue often stems from decision overload rather than physical exhaustion.", ar: "غالباً ما ينبع الإرهاق الذهني من كثرة القرارات وليس من التعب الجسدي." },
            { en: "Scheduling uninterrupted blocks of time protects deep intellectual work.", ar: "جدولة فترات زمنية غير متقطعة تحمي العمل الفكري العميق." },
            { en: "Self-compassion during setbacks prevents temporary slips from becoming permanent failures.", ar: "الرفق بالنفس أثناء الانتكاسات يمنع الهفوات المؤقتة من التحول إلى فشل دائم." },
            { en: "Mastering one's attention is arguably the most decisive skill of the modern age.", ar: "إتقان التحكم في الانتباه هو بلا شك المهارة الأكثر حسماً في العصر الحديث." }
        ]
    },
    {
        id: "c1-leadership",
        level: "C1",
        emoji: "⚡",
        titleAr: "القيادة وإدارة الأزمات",
        titleEn: "Strategic Leadership",
        desc: "اتخاذ القرارات الحاسمة في الظروف المعقدة.",
        sentences: [
            { en: "Effective leadership is tested most rigorously during periods of unprecedented uncertainty.", ar: "تُختبر القيادة الفعالة بأشد الطرق صرامة خلال فترات عدم اليقين غير المسبوقة." },
            { en: "Transparent communication cultivates institutional trust when navigating complex crises.", ar: "يبني التواصل الشفاف الثقة المؤسسية عند التعامل مع الأزمات المعقدة." },
            { en: "Decisive leaders balance analytical data with empathetic understanding of human dynamics.", ar: "يوازن القادة الحاسمون بين البيانات التحليلية والفهم المتعاطف للديناميكيات البشرية." },
            { en: "Delegating authority empowers teams to respond swiftly to emerging operational challenges.", ar: "تفويض الصلاحيات يمكّن الفرق من الاستجابة بسرعة للتحديات التشغيلية الناشئة." },
            { en: "Constructive dissent within executive meetings prevents short-sighted groupthink.", ar: "الاختلاف البنّاء داخل الاجتماعات التنفيذية يمنع التفكير الجماعي قصير النظر." },
            { en: "Resilient organizations view unexpected disruptions as catalysts for strategic renewal.", ar: "تنظر المؤسسات المرنة إلى الاضطرابات غير المتوقعة كمحفزات للتجديد الاستراتيجي." },
            { en: "Long-term vision must never be sacrificed for superficial short-term gains.", ar: "لا ينبغي أبداً التضحية بالرؤية طويلة المدى من أجل مكاسب سطحية قصيرة الأجل." },
            { en: "Fostering psychological safety encourages employees to voice innovative ideas fearlessly.", ar: "تعزيز الأمان النفسي يشجع الموظفين على طرح أفكار مبتكرة دون خوف." },
            { en: "Post-crisis evaluation transforms difficult experiences into valuable organizational wisdom.", ar: "يحول التقييم بعد الأزمات التجارب الصعبة إلى حكمة مؤسسية قيّمة." },
            { en: "Authentic leadership inspires collective commitment toward a shared noble purpose.", ar: "تلهم القيادة الأصيلة الالتزام الجماعي نحو هدف نبيل مشترك." }
        ]
    },
    {
        id: "c1-architecture",
        level: "C1",
        emoji: "🏛️",
        titleAr: "العمارة والهوية الثقافية",
        titleEn: "Architecture & Culture",
        desc: "التصميم الحضري المعاصر والحفاظ على التراث.",
        sentences: [
            { en: "Contemporary urban architecture seeks to harmonize technological innovation with cultural heritage.", ar: "تسعى العمارة الحضرية المعاصرة إلى تحقيق التناغم بين الابتكار التقني والتراث الثقافي." },
            { en: "Traditional architectural elements often provide ingenious solutions for harsh climatic conditions.", ar: "تقدم العناصر المعمارية التقليدية غالباً حلولاً بارعة للظروف المناخية القاسية." },
            { en: "Preserving historical neighborhoods maintains a city's authentic collective memory.", ar: "الحفاظ على الأحياء التاريخية يصون الذاكرة الجمعية الأصيلة للمدينة." },
            { en: "Sustainable urban planning prioritizes pedestrian-friendly spaces over automobile dominance.", ar: "يمنح التخطيط الحضري المستدام الأولوية للمساحات الصديقة للمشاة على حساب هيمنة السيارات." },
            { en: "Natural lighting within public buildings enhances psychological well-being and reduces energy consumption.", ar: "تعزز الإضاءة الطبيعية داخل المباني العامة الرفاهية النفسية وتقلل استهلاك الطاقة." },
            { en: "Iconic landmarks frequently serve as powerful symbols of national ambition and creativity.", ar: "تعمل المعالم البارزة في كثير من الأحيان كرموز قوية للطموح والإبداع الوطني." },
            { en: "Integrating green courtyards into high-density housing fosters community interaction.", ar: "إن دمج الأفنية الخضراء في المجمعات السكنية عالية الكثافة يعزز التفاعل المجتمعي." },
            { en: "Architects bear a profound responsibility for shaping how people experience daily life.", ar: "يتحمل المعماريون مسؤولية عميقة في تشكيل كيفية معايشة الناس لحياتهم اليومية." },
            { en: "Thoughtful design bridges the gap between aesthetic elegance and practical functionality.", ar: "يجسر التصميم المدروس الفجوة بين الأناقة الجمالية والوظيفة العملية." },
            { en: "Cities flourish when modern infrastructure respects the timeless spirit of local identity.", ar: "تزدهر المدن عندما تحترم البنية التحتية الحديثة الروح الخالدة للهوية المحلية." }
        ]
    }
];

// ==================== APPLICATION STATE ====================
const state = {
    currentTopicIndex: 0,
    currentSentenceIndex: 0,
    isMuted: false,
    isDark: false,
    isListening: false,
    preferredVoice: null,
    recognition: null,
    topicResults: []
};

// ==================== DOM ELEMENTS ====================
const dom = {
    topProgressFill: document.getElementById("topProgressFill"),
    openTopicsBtn: document.getElementById("openTopicsBtn"),
    headerTopicLevel: document.getElementById("headerTopicLevel"),
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
    statTopicProgress: document.getElementById("statTopicProgress")
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

// ==================== TTS & SAMANTHA VOICE SETUP ====================
function initVoices() {
    if (!("speechSynthesis" in window)) return;

    const pickVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        if (!voices.length) return;

        // Detect if the user is on an iOS device (iPhone, iPad, iPod)
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        if (isIOS) {
            // Prioritize Samantha on iOS devices
            state.preferredVoice = 
                voices.find(v => v.name.toLowerCase().includes('samantha') && v.lang.startsWith('en')) ||
                voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('samantha')) ||
                voices.find(v => v.lang === 'en-GB' && /natural|google|libby|sonia|ryan/i.test(v.name)) ||
                voices.find(v => v.lang.startsWith('en-'));
        } else {
            // Default preference for non-iOS devices (e.g., British English natural voice)
            state.preferredVoice =
                voices.find(v => v.lang === 'en-GB' && /natural|google|libby|sonia|ryan/i.test(v.name)) ||
                voices.find(v => v.lang === 'en-GB') ||
                voices.find(v => v.lang.startsWith('en-'));
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
    utterance.lang = "en-GB";
    utterance.rate = 0.94;
    if (state.preferredVoice) utterance.voice = state.preferredVoice;
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

// ==================== ALIGNMENT ====================
function normalizeWord(word) {
    return word.toLowerCase().replace(/^[^a-z0-9']+|[^a-z0-9']+$/gi, "").replace(/'/g, "");
}

function tokenizeSentence(sentence) {
    return sentence.trim().split(/\s+/).filter(Boolean).map((raw, index) => ({
        index,
        raw,
        clean: normalizeWord(raw)
    }));
}

function alignWords(targetTokens, spokenTokens) {
    const n = targetTokens.length;
    const m = spokenTokens.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (targetTokens[i - 1].clean === spokenTokens[j - 1].clean && targetTokens[i - 1].clean !== "") {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    const matchedTargetIndices = new Set();
    let i = n, j = m;
    while (i > 0 && j > 0) {
        if (targetTokens[i - 1].clean === spokenTokens[j - 1].clean && targetTokens[i - 1].clean !== "" && dp[i][j] === dp[i - 1][j - 1] + 1) {
            matchedTargetIndices.add(i - 1);
            i--; j--;
        } else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    return targetTokens.map((token, idx) => ({ ...token, matched: matchedTargetIndices.has(idx) }));
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
    const topic = getCurrentTopic();
    const sentenceObj = getCurrentSentenceObj();
    const totalSentences = topic.sentences.length;
    const currentNum = state.currentSentenceIndex + 1;

    setLevelBadgeClass(dom.headerTopicLevel, topic.level);
    dom.headerTopicTitle.textContent = topic.titleAr;
    setLevelBadgeClass(dom.stageLevelBadge, topic.level);
    dom.stageTopicName.textContent = topic.titleAr;
    dom.sentenceCounter.textContent = `الجملة ${currentNum} من ${totalSentences}`;

    const progressPercent = Math.round((currentNum / totalSentences) * 100);
    dom.topProgressFill.style.width = `${progressPercent}%`;
    dom.nextBtnLabel.textContent = (currentNum === totalSentences) ? "إنهاء الموضوع وعرض التحليل" : "الجملة التالية";

    dom.giantSentence.innerHTML = "";
    tokenizeSentence(sentenceObj.en).forEach(token => {
        const span = document.createElement("span");
        span.className = "story-word";
        span.textContent = token.raw;
        span.dataset.index = token.index;
        span.title = "اضغط لسماع نطق هذه الكلمة";
        span.addEventListener("click", e => { e.stopPropagation(); speakText(token.raw, true); });
        dom.giantSentence.appendChild(span);
        dom.giantSentence.appendChild(document.createTextNode(" "));
    });

    dom.arabicTranslation.textContent = sentenceObj.ar;
    dom.feedbackPanel.hidden = true;
    dom.spokenTranscriptText.textContent = "";
    dom.attemptStatsRow.innerHTML = "";
    dom.statCurrentAccuracy.textContent = "—";
    dom.statMatchedWords.textContent = `0 / ${tokenizeSentence(sentenceObj.en).length}`;
    dom.statTopicProgress.textContent = `${currentNum} / ${totalSentences}`;

    if (autoSpeak) speakText(sentenceObj.en, false);
}

function evaluateSpokenSentence(transcript) {
    const sentenceObj = getCurrentSentenceObj();
    const targetTokens = tokenizeSentence(sentenceObj.en);
    const spokenTokens = tokenizeSentence(transcript);
    const alignment = alignWords(targetTokens, spokenTokens);
    const wordSpans = dom.giantSentence.querySelectorAll(".story-word");

    let matchedCount = 0;
    alignment.forEach((item, idx) => {
        const span = wordSpans[idx];
        if (!span) return;
        span.classList.remove("word-correct", "word-incorrect");
        if (item.matched) { span.classList.add("word-correct"); matchedCount++; }
        else { span.classList.add("word-incorrect"); }
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
        <span>غير مطابقة: <strong style="color: var(--error)">${totalCount - matchedCount}</strong></span>
    `;
    dom.statCurrentAccuracy.textContent = `${accuracy}%`;
    dom.statMatchedWords.textContent = `${matchedCount} / ${totalCount}`;

    if (matchedCount === totalCount && totalCount > 0) {
        playMotivationalSuccessSound();
        dom.micStatusText.textContent = "ممتاز! نطقت جميع الكلمات بشكل صحيح 🌟";
    } else {
        dom.micStatusText.textContent = "حاول مرة أخرى أو اضغط على الكلمات الحمراء لسماع نطقها";
    }
}

// ==================== SPEECH RECOGNITION ====================
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showStatusAlert("متصفحك الحالي لا يدعم ميزة التعرف على الكلام (Web Speech API).");
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        state.isListening = true;
        dom.micCircleBtn.classList.add("is-listening");
        dom.micCircleBtn.innerHTML = `<i data-lucide="mic"></i>`;
        dom.micStatusText.textContent = "جاري الاستماع... تحدث الآن بالإنجليزية";
        dom.micStatusText.classList.add("listening-text");
        hideStatusAlert();
        lucide.createIcons();
    };

    recognition.onresult = event => {
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript + " ";
        }
        finalTranscript = finalTranscript.trim();
        if (finalTranscript) evaluateSpokenSentence(finalTranscript);
    };

    recognition.onerror = event => {
        state.isListening = false;
        dom.micCircleBtn.classList.remove("is-listening");
        dom.micStatusText.classList.remove("listening-text");
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
            showStatusAlert("تم رفض الوصول إلى المايكروفون. تأكد من إذن المتصفح وفتح الصفحة عبر HTTPS أو localhost.");
            dom.micStatusText.textContent = "صلاحية المايكروفون غير مفعلة";
        } else if (event.error === "no-speech") {
            dom.micStatusText.textContent = "لم يتم التقاط أي صوت.";
        } else if (event.error !== "aborted") {
            dom.micStatusText.textContent = "حدث خطأ أثناء التعرف على الصوت.";
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
    if (!state.recognition) {
        showStatusAlert("ميزة التعرف على الكلام غير مدعومة في هذا المتصفح.");
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

// ==================== TOPICS MODAL (ALL 20 TOPICS) ====================
function renderTopicsModalGrid() {
    dom.topicsGrid.innerHTML = "";
    TOPICS_DATA.forEach((topic, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = `topic-card ${index === state.currentTopicIndex ? "active-topic" : ""}`;
        card.innerHTML = `
            <div class="topic-card-badge">
                <span class="level-dot level-${topic.level}">${topic.level}</span>
            </div>
            <div class="topic-card-emoji">${topic.emoji}</div>
            <div class="topic-card-en">${topic.titleEn}</div>
            <div class="topic-card-ar">${topic.titleAr}</div>
            <div class="topic-card-desc">${topic.desc}</div>
            <div class="topic-card-footer">
                <span>10 عبارات</span>
                <span class="topic-card-action">ابدأ الموضوع ⟵</span>
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
    renderTopicsModalGrid();
    dom.topicsModal.hidden = false;
}
function closeTopicsModal() { dom.topicsModal.hidden = true; }

// ==================== SUMMARY MODAL ====================
function showTopicSummaryModal() {
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
        5: "أداء استثنائي! نطقك واضح جداً وطلاقتك ممتازة في هذا الموضوع.",
        4: "أداء رائع جداً! أتقنت معظم الجمل بوضوح وثقة عالية.",
        3: "أداء جيد! استمر في التدرب على الكلمات لرفع دقتك.",
        2: "بداية طيبة! استمع للجمل مرة أخرى وحاول تكرارها بهدوء.",
        1: "لقد أنهيت استعراض الموضوع! جرب نطق الجمل بالمايكروفون لتحصل على تقييم أعلى."
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

    window.addEventListener("keydown", e => {
        if (!dom.topicsModal.hidden || !dom.summaryModal.hidden) {
            if (e.key === "Escape") { closeTopicsModal(); closeSummaryModal(); }
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