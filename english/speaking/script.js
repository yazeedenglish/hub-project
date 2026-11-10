/**
 * Yazeed Speaking English Practice App
 * - 20 Topics (4 per CEFR Level A1-C1), 10 sentences each (No trailing periods, 25-35 chars avg)
 * - Separate WORD_TRANSLATIONS dictionary organized by topic directly below TOPICS_DATA
 * - Interactive word translation popup + pronunciation on click
 * - Number normalization (e.g., "2" <-> "two", "7:15" <-> "seven fifteen")
 * - Samantha voice prioritized on iOS devices (iPhone / iPad)
 */


const TOPICS_DATA = [

    // =====================================================
    // LEVEL A1 — BEGINNER (4 TOPICS)
    // =====================================================

    {
        id: "a1-cafe",
        level: "A1",
        emoji: "☕",
        titleAr: "في المقهى",
        titleEn: "At the Café",
        desc: "تعلم طلب القهوة والمشروبات والتعامل مع موظف المقهى",
        sentences: [
            { en: "Hello, can I see the menu?", ar: "مرحباً، هل يمكنني رؤية القائمة؟" },
            { en: "I would like a cup of coffee", ar: "أود الحصول على كوب من القهوة" },
            { en: "Can I have it without sugar?", ar: "هل يمكنني الحصول عليه بدون سكر؟" },
            { en: "Do you have any cold drinks?", ar: "هل لديكم أي مشروبات باردة؟" },
            { en: "I would also like a small cake", ar: "أود أيضاً الحصول على قطعة كعك صغيرة" },
            { en: "How much is the coffee?", ar: "كم سعر القهوة؟" },
            { en: "Can I pay by card today?", ar: "هل يمكنني الدفع بالبطاقة اليوم؟" },
            { en: "Could I have a glass of water?", ar: "هل يمكنني الحصول على كوب من الماء؟" },
            { en: "Can I take this drink with me?", ar: "هل يمكنني أخذ هذا المشروب معي؟" },
            { en: "Thank you, have a lovely day", ar: "شكراً لك، أتمنى لك يوماً جميلاً" }
        ]
    },

    {
        id: "a1-introduction",
        level: "A1",
        emoji: "👋",
        titleAr: "التعريف بالنفس",
        titleEn: "Introducing Yourself",
        desc: "تعلم تقديم نفسك والتحدث عن معلوماتك الشخصية",
        sentences: [
            { en: "Hello, my name is Adam", ar: "مرحباً، اسمي آدم" },
            { en: "I am twenty years old now", ar: "عمري الآن عشرون عاماً" },
            { en: "I come from Saudi Arabia", ar: "أنا من المملكة العربية السعودية" },
            { en: "I live with my family here", ar: "أعيش مع عائلتي هنا" },
            { en: "I enjoy reading books at home", ar: "أستمتع بقراءة الكتب في المنزل" },
            { en: "I speak Arabic and some English", ar: "أتحدث العربية والقليل من الإنجليزية" },
            { en: "I am learning English every day", ar: "أتعلم اللغة الإنجليزية كل يوم" },
            { en: "What do you like to do?", ar: "ماذا تحب أن تفعل؟" },
            { en: "It is nice to meet you today", ar: "من الجميل مقابلتك اليوم" },
            { en: "I hope we can become friends", ar: "آمل أن نصبح صديقين" }
        ]
    },

    {
        id: "a1-restaurant",
        level: "A1",
        emoji: "🍽️",
        titleAr: "في المطعم",
        titleEn: "At the Restaurant",
        desc: "تعلم طلب الطعام واختيار الوجبات داخل المطعم",
        sentences: [
            { en: "A table for two, please", ar: "طاولة لشخصين من فضلك" },
            { en: "Can we sit near the window?", ar: "هل يمكننا الجلوس بالقرب من النافذة؟" },
            { en: "I would like grilled chicken", ar: "أود الحصول على دجاج مشوي" },
            { en: "Does this meal come with rice?", ar: "هل تأتي هذه الوجبة مع الأرز؟" },
            { en: "Please bring us some fresh bread", ar: "من فضلك أحضر لنا بعض الخبز الطازج" },
            { en: "I would like a bottle of water", ar: "أود الحصول على زجاجة ماء" },
            { en: "The food smells really delicious", ar: "رائحة الطعام شهية جداً" },
            { en: "Could we have another fork please?", ar: "هل يمكننا الحصول على شوكة أخرى؟" },
            { en: "Can we get the bill now?", ar: "هل يمكننا الحصول على الفاتورة الآن؟" },
            { en: "Everything was wonderful, thank you", ar: "كان كل شيء رائعاً، شكراً لكم" }
        ]
    },

    {
        id: "a1-directions",
        level: "A1",
        emoji: "🧭",
        titleAr: "السؤال عن الاتجاهات",
        titleEn: "Asking for Directions",
        desc: "تعلم السؤال عن الأماكن وفهم الاتجاهات",
        sentences: [
            { en: "Excuse me, where is the bank?", ar: "عذراً، أين يقع البنك؟" },
            { en: "Is there a shop near here?", ar: "هل يوجد متجر بالقرب من هنا؟" },
            { en: "How can I get to the station?", ar: "كيف يمكنني الوصول إلى المحطة؟" },
            { en: "Go straight along this street", ar: "سر مباشرة على طول هذا الشارع" },
            { en: "Turn left at the traffic lights", ar: "انعطف يساراً عند إشارة المرور" },
            { en: "The pharmacy is next to the bank", ar: "الصيدلية بجانب البنك" },
            { en: "Is it far from this location?", ar: "هل يبعد عن هذا الموقع؟" },
            { en: "Can I walk there in ten minutes?", ar: "هل يمكنني المشي إلى هناك في عشر دقائق؟" },
            { en: "Thank you for showing me the way", ar: "شكراً لك على إرشادي إلى الطريق" },
            { en: "I think I can find it now", ar: "أعتقد أنني أستطيع العثور عليه الآن" }
        ]
    },

    // =====================================================
    // LEVEL A2 — ELEMENTARY (4 TOPICS)
    // =====================================================

    {
        id: "a2-supermarket",
        level: "A2",
        emoji: "🛒",
        titleAr: "في السوبرماركت",
        titleEn: "At the Supermarket",
        desc: "التسوق وشراء الاحتياجات اليومية والسؤال عن المنتجات",
        sentences: [
            { en: "I need to buy some things today", ar: "أحتاج إلى شراء بعض الأشياء اليوم" },
            { en: "Where can I find the fresh milk?", ar: "أين يمكنني العثور على الحليب الطازج؟" },
            { en: "Are these vegetables locally grown?", ar: "هل زُرعت هذه الخضراوات محلياً؟" },
            { en: "I usually buy food for the week", ar: "عادة أشتري الطعام للأسبوع بأكمله" },
            { en: "This brand is cheaper than the other", ar: "هذه العلامة التجارية أرخص من الأخرى" },
            { en: "Do you have a larger package?", ar: "هل لديكم عبوة بحجم أكبر؟" },
            { en: "I forgot to bring my shopping bags", ar: "نسيت إحضار أكياس التسوق الخاصة بي" },
            { en: "Can I use the self checkout machine?", ar: "هل يمكنني استخدام جهاز الدفع الذاتي؟" },
            { en: "I think everything is on the list", ar: "أعتقد أن كل شيء موجود في القائمة" },
            { en: "Let's go home before it gets late", ar: "لنعد إلى المنزل قبل أن يتأخر الوقت" }
        ]
    },

    {
        id: "a2-clothes",
        level: "A2",
        emoji: "👕",
        titleAr: "التسوق لشراء الملابس",
        titleEn: "Shopping for Clothes",
        desc: "اختيار الملابس وتجربة المقاسات والسؤال عن الأسعار",
        sentences: [
            { en: "I am looking for a new jacket", ar: "أبحث عن سترة جديدة" },
            { en: "Do you have this shirt in blue?", ar: "هل لديكم هذا القميص باللون الأزرق؟" },
            { en: "Can I try these shoes on please?", ar: "هل يمكنني تجربة هذه الأحذية من فضلك؟" },
            { en: "I usually wear a medium size", ar: "عادة أرتدي مقاساً متوسطاً" },
            { en: "These trousers are a little too long", ar: "هذا البنطال طويل قليلاً" },
            { en: "Where are the fitting rooms located?", ar: "أين تقع غرف قياس الملابس؟" },
            { en: "I prefer the darker color instead", ar: "أفضل اللون الأغمق بدلاً من ذلك" },
            { en: "Is there a discount on these items?", ar: "هل يوجد خصم على هذه المنتجات؟" },
            { en: "I will take both shirts today", ar: "سآخذ كلا القميصين اليوم" },
            { en: "Can I exchange them if they do not fit?", ar: "هل يمكنني استبدالهما إذا لم يناسباني؟" }
        ]
    },

    {
        id: "a2-phone",
        level: "A2",
        emoji: "📞",
        titleAr: "إجراء المكالمات الهاتفية",
        titleEn: "Making Phone Calls",
        desc: "التحدث عبر الهاتف وترك الرسائل وطلب المعلومات",
        sentences: [
            { en: "Hello, may I speak to Ahmed please?", ar: "مرحباً، هل يمكنني التحدث مع أحمد من فضلك؟" },
            { en: "I am calling about tomorrow's meeting", ar: "أتصل بخصوص اجتماع الغد" },
            { en: "Could you speak a little more slowly?", ar: "هل يمكنك التحدث ببطء أكثر قليلاً؟" },
            { en: "Sorry, I cannot hear you clearly", ar: "عذراً، لا أستطيع سماعك بوضوح" },
            { en: "The connection seems quite weak today", ar: "يبدو أن الاتصال ضعيف جداً اليوم" },
            { en: "Can you call me back in an hour?", ar: "هل يمكنك معاودة الاتصال بي بعد ساعة؟" },
            { en: "Please leave your name and number", ar: "يرجى ترك اسمك ورقم هاتفك" },
            { en: "I will send you a quick message", ar: "سأرسل لك رسالة سريعة" },
            { en: "Thank you for returning my call", ar: "شكراً لك على معاودة الاتصال بي" },
            { en: "I will talk to you again soon", ar: "سأتحدث معك مرة أخرى قريباً" }
        ]
    },

    {
        id: "a2-hotel",
        level: "A2",
        emoji: "🏨",
        titleAr: "حجز غرفة فندقية",
        titleEn: "Booking a Hotel Room",
        desc: "حجز الغرف والسؤال عن الخدمات والمرافق الفندقية",
        sentences: [
            { en: "I would like to book a room", ar: "أود حجز غرفة" },
            { en: "Do you have any rooms available?", ar: "هل لديكم أي غرف متاحة؟" },
            { en: "I need a room for three nights", ar: "أحتاج إلى غرفة لمدة ثلاث ليالٍ" },
            { en: "Does the price include breakfast?", ar: "هل يشمل السعر وجبة الإفطار؟" },
            { en: "I would prefer a room with a view", ar: "أفضل غرفة ذات إطلالة جميلة" },
            { en: "What time does check in start?", ar: "في أي وقت يبدأ تسجيل الدخول؟" },
            { en: "Is there free parking for guests?", ar: "هل يوجد موقف سيارات مجاني للنزلاء؟" },
            { en: "Can I request an extra pillow?", ar: "هل يمكنني طلب وسادة إضافية؟" },
            { en: "My reservation is under this name", ar: "الحجز مسجل بهذا الاسم" },
            { en: "Thank you for making everything easy", ar: "شكراً لكم على تسهيل كل شيء" }
        ]
    },

    // =====================================================
    // LEVEL B1 — INTERMEDIATE (4 TOPICS)
    // =====================================================

    {
        id: "b1-airport",
        level: "B1",
        emoji: "✈️",
        titleAr: "في المطار",
        titleEn: "At the Airport",
        desc: "إجراءات السفر وتسجيل الأمتعة والتعامل مع موظفي المطار",
        sentences: [
            { en: "I have a flight to London this evening", ar: "لدي رحلة إلى لندن هذا المساء" },
            { en: "Where can I check in for my flight?", ar: "أين يمكنني تسجيل الدخول لرحلتي؟" },
            { en: "I would like to check in my suitcase", ar: "أود تسجيل حقيبة السفر الخاصة بي" },
            { en: "Is my flight expected to leave on time?", ar: "هل من المتوقع أن تغادر رحلتي في موعدها؟" },
            { en: "Could you tell me which gate to use?", ar: "هل يمكنك إخباري بالبوابة التي يجب أن أستخدمها؟" },
            { en: "I have a connecting flight in Dubai", ar: "لدي رحلة مواصلة في دبي" },
            { en: "Where can I collect my checked luggage?", ar: "أين يمكنني استلام أمتعتي المسجلة؟" },
            { en: "My suitcase has not arrived yet", ar: "حقيبة سفري لم تصل بعد" },
            { en: "I need some help with my boarding pass", ar: "أحتاج إلى بعض المساعدة بخصوص بطاقة الصعود" },
            { en: "I hope the rest of the journey goes well", ar: "آمل أن تسير بقية الرحلة على ما يرام" }
        ]
    },

    {
        id: "b1-taxi",
        level: "B1",
        emoji: "🚕",
        titleAr: "استخدام خدمة سيارات الأجرة",
        titleEn: "Using a Taxi Service",
        desc: "التواصل مع السائق وتحديد الوجهة والتعامل مع الرحلة",
        sentences: [
            { en: "Could you take me to this address?", ar: "هل يمكنك إيصالي إلى هذا العنوان؟" },
            { en: "How long will the journey take today?", ar: "كم ستستغرق الرحلة اليوم؟" },
            { en: "Please use the fastest available route", ar: "من فضلك استخدم أسرع طريق متاح" },
            { en: "There seems to be heavy traffic ahead", ar: "يبدو أن هناك ازدحاماً مرورياً شديداً أمامنا" },
            { en: "Could you stop near the main entrance?", ar: "هل يمكنك التوقف بالقرب من المدخل الرئيسي؟" },
            { en: "I booked the ride through the application", ar: "حجزت الرحلة من خلال التطبيق" },
            { en: "The location on the map looks incorrect", ar: "يبدو أن الموقع على الخريطة غير صحيح" },
            { en: "Can you wait here for a few minutes?", ar: "هل يمكنك الانتظار هنا لبضع دقائق؟" },
            { en: "I would like to pay using my phone", ar: "أود الدفع باستخدام هاتفي" },
            { en: "Thank you for getting me here safely", ar: "شكراً لك على إيصالي إلى هنا بأمان" }
        ]
    },

    {
        id: "b1-doctor",
        level: "B1",
        emoji: "🩺",
        titleAr: "زيارة الطبيب",
        titleEn: "Visiting the Doctor",
        desc: "شرح الأعراض وفهم التعليمات والتحدث مع الطبيب",
        sentences: [
            { en: "I have been feeling unwell since Monday", ar: "أشعر بالتعب منذ يوم الاثنين" },
            { en: "I sometimes experience pain in my back", ar: "أشعر أحياناً بألم في ظهري" },
            { en: "The symptoms started about three days ago", ar: "بدأت الأعراض قبل نحو ثلاثة أيام" },
            { en: "I have difficulty sleeping at night", ar: "أواجه صعوبة في النوم أثناء الليل" },
            { en: "Could you explain what the results mean?", ar: "هل يمكنك توضيح معنى النتائج؟" },
            { en: "Do I need to take any medicine?", ar: "هل أحتاج إلى تناول أي دواء؟" },
            { en: "Should I come back for another checkup?", ar: "هل يجب أن أعود لإجراء فحص آخر؟" },
            { en: "I would like to understand my treatment plan", ar: "أود فهم الخطة العلاجية الخاصة بي" },
            { en: "Are there any activities I should avoid?", ar: "هل توجد أنشطة ينبغي علي تجنبها؟" },
            { en: "Thank you for explaining everything clearly", ar: "شكراً لك على شرح كل شيء بوضوح" }
        ]
    },

    {
        id: "b1-friends",
        level: "B1",
        emoji: "🤝",
        titleAr: "التخطيط مع الأصدقاء",
        titleEn: "Making Plans with Friends",
        desc: "اقتراح الأنشطة وتنسيق المواعيد والاتفاق على الخطط",
        sentences: [
            { en: "Are you free to meet this weekend?", ar: "هل أنت متفرغ للقاء في نهاية هذا الأسبوع؟" },
            { en: "We could visit the new shopping center", ar: "يمكننا زيارة مركز التسوق الجديد" },
            { en: "What time would be convenient for you?", ar: "ما الوقت المناسب لك؟" },
            { en: "I would rather meet in the afternoon", ar: "أفضل اللقاء في فترة ما بعد الظهر" },
            { en: "Let me check my schedule before deciding", ar: "دعني أراجع جدولي قبل اتخاذ القرار" },
            { en: "We should invite the others as well", ar: "ينبغي أن ندعو الآخرين أيضاً" },
            { en: "I can pick you up on my way there", ar: "يمكنني اصطحابك في طريقي إلى هناك" },
            { en: "The weather might change our plans", ar: "قد يغير الطقس خططنا" },
            { en: "I will let everyone know the details", ar: "سأخبر الجميع بالتفاصيل" },
            { en: "I am really looking forward to it", ar: "أنا متحمس جداً لذلك" }
        ]
    },

    // =====================================================
    // LEVEL B2 — UPPER INTERMEDIATE (4 TOPICS)
    // =====================================================

    {
        id: "b2-returns",
        level: "B2",
        emoji: "📦",
        titleAr: "إرجاع المنتجات أو استبدالها",
        titleEn: "Returning or Exchanging Items",
        desc: "شرح مشكلات المنتجات ومناقشة سياسات الاسترجاع والاستبدال",
        sentences: [
            { en: "I would like to return this item", ar: "أود إرجاع هذا المنتج" },
            { en: "Unfortunately, the product arrived damaged", ar: "للأسف، وصل المنتج تالفاً" },
            { en: "I noticed the problem after opening it", ar: "لاحظت المشكلة بعد فتح العبوة" },
            { en: "I still have the original receipt", ar: "لا يزال الإيصال الأصلي بحوزتي" },
            { en: "Could you explain your return policy?", ar: "هل يمكنك توضيح سياسة الإرجاع لديكم؟" },
            { en: "I would prefer a full refund instead", ar: "أفضل استرداد المبلغ بالكامل بدلاً من ذلك" },
            { en: "Is it possible to exchange this for another?", ar: "هل من الممكن استبدال هذا بمنتج آخر؟" },
            { en: "The replacement should arrive within a week", ar: "من المفترض أن يصل البديل خلال أسبوع" },
            { en: "I expected better quality for this price", ar: "كنت أتوقع جودة أفضل مقابل هذا السعر" },
            { en: "I appreciate your help resolving this issue", ar: "أقدر مساعدتك في حل هذه المشكلة" }
        ]
    },

    {
        id: "b2-customer-service",
        level: "B2",
        emoji: "🎧",
        titleAr: "التعامل مع خدمة العملاء",
        titleEn: "Dealing with Customer Service",
        desc: "شرح المشكلات ومتابعة الطلبات والتواصل مع الدعم الفني",
        sentences: [
            { en: "I am contacting you about my recent order", ar: "أتواصل معكم بخصوص طلبي الأخير" },
            { en: "The payment went through but the order failed", ar: "تمت عملية الدفع لكن الطلب لم يكتمل" },
            { en: "I have already tried restarting the application", ar: "حاولت بالفعل إعادة تشغيل التطبيق" },
            { en: "Could you check the status of my request?", ar: "هل يمكنك التحقق من حالة طلبي؟" },
            { en: "I have been waiting for a response since yesterday", ar: "أنتظر الرد منذ يوم أمس" },
            { en: "Is there another way to solve this problem?", ar: "هل توجد طريقة أخرى لحل هذه المشكلة؟" },
            { en: "I would appreciate a clear explanation", ar: "سأكون ممتناً للحصول على توضيح واضح" },
            { en: "Could you transfer me to a supervisor?", ar: "هل يمكنك تحويلي إلى أحد المشرفين؟" },
            { en: "Please send me a confirmation by email", ar: "يرجى إرسال تأكيد لي عبر البريد الإلكتروني" },
            { en: "Thank you for taking the time to help", ar: "شكراً لكم على تخصيص الوقت للمساعدة" }
        ]
    },

    {
        id: "b2-apartment",
        level: "B2",
        emoji: "🏠",
        titleAr: "استئجار شقة",
        titleEn: "Renting an Apartment",
        desc: "البحث عن سكن ومناقشة الشروط والإيجار والعقد",
        sentences: [
            { en: "I am interested in renting this apartment", ar: "أنا مهتم باستئجار هذه الشقة" },
            { en: "Could I arrange a visit this afternoon?", ar: "هل يمكنني ترتيب زيارة بعد ظهر اليوم؟" },
            { en: "Is the monthly rent negotiable at all?", ar: "هل يمكن التفاوض على الإيجار الشهري؟" },
            { en: "Are electricity and water included in the rent?", ar: "هل الكهرباء والماء مشمولان في الإيجار؟" },
            { en: "How much is the security deposit required?", ar: "كم تبلغ قيمة مبلغ التأمين المطلوب؟" },
            { en: "I would like to review the contract first", ar: "أود مراجعة العقد أولاً" },
            { en: "Are pets allowed inside the building?", ar: "هل يُسمح بالحيوانات الأليفة داخل المبنى؟" },
            { en: "The location is convenient for my workplace", ar: "الموقع مناسب لمكان عملي" },
            { en: "When would the apartment be ready?", ar: "متى ستكون الشقة جاهزة؟" },
            { en: "I would like to discuss the final terms", ar: "أود مناقشة الشروط النهائية" }
        ]
    },

    {
        id: "b2-workplace",
        level: "B2",
        emoji: "💼",
        titleAr: "المحادثات في بيئة العمل",
        titleEn: "Workplace Conversations",
        desc: "التواصل المهني ومناقشة المهام والاجتماعات والتعاون",
        sentences: [
            { en: "Could we discuss the project timeline?", ar: "هل يمكننا مناقشة الجدول الزمني للمشروع؟" },
            { en: "I have completed most of my assigned tasks", ar: "أنجزت معظم المهام الموكلة إلي" },
            { en: "We may need additional time to finish", ar: "قد نحتاج إلى وقت إضافي للانتهاء" },
            { en: "I would like to suggest another approach", ar: "أود اقتراح أسلوب آخر للعمل" },
            { en: "Could you clarify the main expectations?", ar: "هل يمكنك توضيح التوقعات الرئيسية؟" },
            { en: "I will share the updated report shortly", ar: "سأشارك التقرير المحدث بعد قليل" },
            { en: "We should address this issue before Friday", ar: "ينبغي أن نعالج هذه المشكلة قبل يوم الجمعة" },
            { en: "Your feedback would be very helpful", ar: "ستكون ملاحظاتك مفيدة جداً" },
            { en: "I believe we are making good progress", ar: "أعتقد أننا نحقق تقدماً جيداً" },
            { en: "Let's agree on the next steps together", ar: "لنتفق معاً على الخطوات التالية" }
        ]
    },

    // =====================================================
    // LEVEL C1 — ADVANCED (4 TOPICS)
    // =====================================================

    {
        id: "c1-unexpected",
        level: "C1",
        emoji: "⚠️",
        titleAr: "التعامل مع المواقف غير المتوقعة",
        titleEn: "Handling Unexpected Situations",
        desc: "التصرف بثقة ووضوح عند مواجهة ظروف ومشكلات مفاجئة",
        sentences: [
            { en: "We need to reconsider our plans immediately", ar: "نحتاج إلى إعادة النظر في خططنا فوراً" },
            { en: "The situation is more complicated than expected", ar: "الوضع أكثر تعقيداً مما كان متوقعاً" },
            { en: "Let's focus on what we can control", ar: "لنركز على الأمور التي يمكننا التحكم بها" },
            { en: "I would rather avoid making rushed decisions", ar: "أفضل تجنب اتخاذ قرارات متسرعة" },
            { en: "We should consider every possible outcome", ar: "ينبغي أن نأخذ كل النتائج المحتملة بعين الاعتبار" },
            { en: "There must be a reasonable alternative available", ar: "لا بد من وجود بديل مناسب ومتاح" },
            { en: "I will take responsibility for my part", ar: "سأتحمل مسؤولية الجزء الخاص بي" },
            { en: "We need to communicate this change clearly", ar: "نحتاج إلى توضيح هذا التغيير بشكل جلي" },
            { en: "Staying calm will help us find a solution", ar: "سيساعدنا الحفاظ على الهدوء في إيجاد حل" },
            { en: "We can learn valuable lessons from this experience", ar: "يمكننا تعلم دروس قيمة من هذه التجربة" }
        ]
    },

    {
        id: "c1-opinions",
        level: "C1",
        emoji: "💬",
        titleAr: "التعبير عن الآراء والاختلاف",
        titleEn: "Expressing Opinions and Disagreements",
        desc: "عرض وجهات النظر ومناقشة الأفكار المختلفة باحترام",
        sentences: [
            { en: "From my perspective, the issue deserves attention", ar: "من وجهة نظري، تستحق هذه المسألة الاهتمام" },
            { en: "I understand your argument, but I disagree", ar: "أتفهم حجتك، لكنني أختلف معك" },
            { en: "There are several factors worth considering", ar: "هناك عدة عوامل تستحق الدراسة" },
            { en: "I would approach the matter differently", ar: "سأتعامل مع المسألة بطريقة مختلفة" },
            { en: "Could you explain the reasoning behind that?", ar: "هل يمكنك توضيح المنطق وراء ذلك؟" },
            { en: "I agree with your point to some extent", ar: "أتفق مع وجهة نظرك إلى حد ما" },
            { en: "We should distinguish facts from assumptions", ar: "ينبغي أن نميز بين الحقائق والافتراضات" },
            { en: "That is a valid argument worth discussing", ar: "هذه حجة وجيهة تستحق النقاش" },
            { en: "I appreciate hearing a different viewpoint", ar: "أقدر الاستماع إلى وجهة نظر مختلفة" },
            { en: "Perhaps we can find common ground here", ar: "ربما يمكننا إيجاد أرضية مشتركة هنا" }
        ]
    },

    {
        id: "c1-negotiation",
        level: "C1",
        emoji: "🤝",
        titleAr: "التفاوض على الأسعار والخدمات",
        titleEn: "Negotiating Prices and Services",
        desc: "التفاوض والإقناع والوصول إلى اتفاقات مناسبة للطرفين",
        sentences: [
            { en: "Would you consider offering a better price?", ar: "هل يمكنكم التفكير في تقديم سعر أفضل؟" },
            { en: "The current offer exceeds my available budget", ar: "العرض الحالي يتجاوز الميزانية المتاحة لدي" },
            { en: "I believe there is room for negotiation", ar: "أعتقد أن هناك مجالاً للتفاوض" },
            { en: "Could we agree on a more reasonable figure?", ar: "هل يمكننا الاتفاق على مبلغ أكثر ملاءمة؟" },
            { en: "I am willing to commit to a longer contract", ar: "أنا مستعد للالتزام بعقد أطول" },
            { en: "What additional services are included?", ar: "ما الخدمات الإضافية التي يتضمنها العرض؟" },
            { en: "That proposal seems fair under the circumstances", ar: "يبدو ذلك الاقتراح عادلاً في ظل هذه الظروف" },
            { en: "I would need some time to review the offer", ar: "سأحتاج إلى بعض الوقت لمراجعة العرض" },
            { en: "Let's see if we can reach a compromise", ar: "لنرَ إن كان بإمكاننا التوصل إلى حل وسط" },
            { en: "I believe we have reached a fair agreement", ar: "أعتقد أننا توصلنا إلى اتفاق عادل" }
        ]
    },

    {
        id: "c1-complaints",
        level: "C1",
        emoji: "📢",
        titleAr: "تقديم الشكاوى بأسلوب مهذب",
        titleEn: "Making Complaints Politely",
        desc: "توضيح أسباب عدم الرضا والمطالبة بحلول بطريقة احترافية",
        sentences: [
            { en: "I am afraid I am not satisfied with the service", ar: "أخشى أنني غير راضٍ عن الخدمة" },
            { en: "I would like to bring an issue to your attention", ar: "أود لفت انتباهكم إلى مشكلة معينة" },
            { en: "The service did not meet my expectations", ar: "لم ترقَ الخدمة إلى مستوى توقعاتي" },
            { en: "I was given information that turned out incorrect", ar: "قُدمت لي معلومات اتضح لاحقاً أنها غير صحيحة" },
            { en: "I have already attempted to resolve this matter", ar: "حاولت بالفعل معالجة هذه المسألة" },
            { en: "I would appreciate a prompt response from your team", ar: "سأقدر الحصول على رد سريع من فريقكم" },
            { en: "Could you clarify how you intend to address this?", ar: "هل يمكنكم توضيح كيفية التعامل مع هذه المشكلة؟" },
            { en: "I believe a partial refund would be appropriate", ar: "أعتقد أن استرداد جزء من المبلغ سيكون مناسباً" },
            { en: "I hope we can resolve this without further action", ar: "آمل أن نتمكن من حل هذا الأمر دون اتخاذ إجراءات إضافية" },
            { en: "Thank you for taking my concerns seriously", ar: "شكراً لكم على أخذ مخاوفي بعين الاعتبار" }
        ]
    }

];


// ==================== ARABIC WORD TRANSLATIONS ORGANIZED BY TOPIC ====================
const WORD_TRANSLATIONS = {

    // =====================================================
    // LEVEL A1 — BEGINNER
    // =====================================================

    // Topic: a1-cafe (At the Café — في المقهى)
    "a1-cafe": {
        hello: "مرحباً", can: "هل يمكن", i: "أنا", see: "أرى",
        the: "الـ", menu: "القائمة", would: "أود", like: "أحب / أريد",
        a: "أداة تنكير", cup: "كوب", of: "من", coffee: "قهوة",
        have: "لدي / أملك", it: "ذلك / إياه", without: "بدون",
        sugar: "سكر", do: "فعل مساعد للسؤال", you: "أنت",
        any: "أي", cold: "بارد", drinks: "مشروبات",
        also: "أيضاً", small: "صغير", cake: "كعكة",
        how: "كم / كيف", much: "مقدار / كثير", is: "يكون",
        pay: "أدفع", by: "بـ / بواسطة", card: "بطاقة",
        today: "اليوم", could: "هل يمكن", glass: "كأس",
        water: "ماء", take: "آخذ", this: "هذا / هذه",
        drink: "مشروب", with: "مع", me: "أنا / ني",
        thank: "شكراً", lovely: "جميل", day: "يوم"
    },

    // Topic: a1-introduction (Introducing Yourself — التعريف بالنفس)
    "a1-introduction": {
        hello: "مرحباً", my: "ـي / الخاص بي", name: "اسم",
        is: "هو / يكون", adam: "آدم", i: "أنا",
        am: "أكون", twenty: "عشرون", years: "سنوات",
        old: "من العمر", now: "الآن", come: "آتي",
        from: "من", saudi: "السعودية", arabia: "العربية",
        live: "أعيش", with: "مع", family: "عائلة",
        here: "هنا", enjoy: "أستمتع", reading: "قراءة",
        books: "كتب", at: "في", home: "المنزل",
        speak: "أتحدث", arabic: "العربية", and: "و",
        some: "بعض", english: "الإنجليزية", learning: "تعلم",
        every: "كل", day: "يوم", what: "ماذا",
        do: "هل / تفعل", you: "أنت", like: "تحب",
        it: "ذلك", nice: "جميل / لطيف", meet: "أقابل",
        today: "اليوم", hope: "آمل", we: "نحن",
        can: "نستطيع", become: "نصبح", friends: "أصدقاء"
    },

    // Topic: a1-restaurant (At the Restaurant — في المطعم)
    "a1-restaurant": {
        a: "أداة تنكير", table: "طاولة", for: "لـ / من أجل",
        two: "اثنان", please: "من فضلك", can: "هل يمكن",
        we: "نحن", sit: "نجلس", near: "بالقرب من",
        the: "الـ", window: "نافذة", i: "أنا",
        would: "أود", like: "أحب / أريد", grilled: "مشوي",
        chicken: "دجاج", does: "فعل مساعد للسؤال", this: "هذا / هذه",
        meal: "وجبة", come: "تأتي", with: "مع",
        rice: "أرز", bring: "أحضر", us: "لنا",
        some: "بعض", fresh: "طازج", bread: "خبز",
        bottle: "زجاجة", of: "من", water: "ماء",
        food: "طعام", smells: "تنبعث منه رائحة", really: "حقاً",
        delicious: "لذيذ", could: "هل يمكن", have: "نحصل على",
        another: "آخر / أخرى", fork: "شوكة", get: "نحصل على",
        bill: "فاتورة", now: "الآن", everything: "كل شيء",
        was: "كان", wonderful: "رائع", thank: "شكراً",
        you: "أنتم / أنت"
    },

    // Topic: a1-directions (Asking for Directions — السؤال عن الاتجاهات)
    "a1-directions": {
        excuse: "اعذر", me: "ني / أنا", where: "أين",
        is: "يقع / يكون", the: "الـ", bank: "بنك",
        there: "هناك", a: "أداة تنكير", shop: "متجر",
        near: "بالقرب من", here: "هنا", how: "كيف",
        can: "هل يمكن", i: "أنا", get: "أصل / أحصل",
        to: "إلى", station: "محطة", go: "اذهب / سر",
        straight: "مباشرة", along: "على طول", this: "هذا / هذه",
        street: "شارع", turn: "انعطف", left: "يساراً",
        at: "عند", traffic: "مرور", lights: "إشارات",
        pharmacy: "صيدلية", next: "التالي / بجانب", it: "هو / ذلك",
        far: "بعيد", from: "من", location: "موقع",
        walk: "أمشي", in: "في / خلال", ten: "عشرة",
        minutes: "دقائق", thank: "شكراً", you: "أنت",
        for: "لـ / من أجل", showing: "إرشاد / إظهار",
        way: "طريق", think: "أعتقد", find: "أجد",
        now: "الآن"
    },

    // =====================================================
    // LEVEL A2 — ELEMENTARY
    // =====================================================

    // Topic: a2-supermarket (At the Supermarket — في السوبرماركت)
    "a2-supermarket": {
        i: "أنا", need: "أحتاج", to: "إلى / أن", buy: "أشتري",
        some: "بعض", things: "أشياء", today: "اليوم",
        where: "أين", can: "يمكنني", find: "أجد",
        the: "الـ", fresh: "طازج", milk: "حليب",
        are: "تكون / هل", these: "هذه", vegetables: "خضراوات",
        locally: "محلياً", grown: "مزروعة", usually: "عادةً",
        food: "طعام", for: "لـ / من أجل", week: "أسبوع",
        this: "هذا / هذه", brand: "علامة تجارية", is: "يكون",
        cheaper: "أرخص", than: "من", other: "آخر",
        do: "فعل مساعد للسؤال", you: "أنت", have: "لديكم",
        a: "أداة تنكير", larger: "أكبر", package: "عبوة",
        forgot: "نسيت", bring: "أحضر", my: "ـي / الخاص بي",
        shopping: "التسوق", bags: "أكياس", use: "أستخدم",
        self: "ذاتي", checkout: "دفع / إنهاء الشراء",
        machine: "آلة / جهاز", think: "أعتقد",
        everything: "كل شيء", on: "على", list: "قائمة",
        "let's": "هيا بنا", go: "نذهب", home: "المنزل",
        before: "قبل", it: "ذلك", gets: "يصبح",
        late: "متأخراً"
    },

    // Topic: a2-clothes (Shopping for Clothes — التسوق لشراء الملابس)
    "a2-clothes": {
        i: "أنا", am: "أكون", looking: "أبحث",
        for: "عن / لـ", a: "أداة تنكير", new: "جديد",
        jacket: "سترة", do: "فعل مساعد للسؤال",
        you: "أنت", have: "لديكم", this: "هذا / هذه",
        shirt: "قميص", in: "بـ / في", blue: "أزرق",
        can: "هل يمكن", try: "أجرب", these: "هذه",
        shoes: "أحذية", on: "على", please: "من فضلك",
        usually: "عادةً", wear: "أرتدي", medium: "متوسط",
        size: "مقاس", trousers: "بنطال", are: "تكون",
        little: "قليلاً", too: "أكثر من اللازم",
        long: "طويل", where: "أين", the: "الـ",
        fitting: "قياس", rooms: "غرف", located: "تقع",
        prefer: "أفضل", darker: "أغمق", color: "لون",
        instead: "بدلاً من ذلك", is: "هل / يكون",
        there: "هناك", discount: "خصم", items: "منتجات",
        will: "سوف", take: "آخذ", both: "كلا",
        shirts: "قمصان", today: "اليوم", exchange: "أستبدل",
        them: "إياها / هم", if: "إذا", they: "هم",
        not: "لا / ليس", fit: "يناسب"
    },

    // Topic: a2-phone (Making Phone Calls — إجراء المكالمات الهاتفية)
    "a2-phone": {
        hello: "مرحباً", may: "هل يمكن", i: "أنا",
        speak: "أتحدث", to: "مع / إلى", ahmed: "أحمد",
        please: "من فضلك", am: "أكون", calling: "أتصل",
        about: "بخصوص", "tomorrow's": "الغد / الخاص بالغد",
        meeting: "اجتماع", could: "هل يمكنك", you: "أنت",
        a: "أداة تنكير", little: "قليلاً", more: "أكثر",
        slowly: "ببطء", sorry: "آسف / عذراً", cannot: "لا أستطيع",
        hear: "أسمع", clearly: "بوضوح", the: "الـ",
        connection: "اتصال", seems: "يبدو", quite: "إلى حد كبير",
        weak: "ضعيف", today: "اليوم", can: "هل يمكنك",
        call: "تتصل", me: "بي / أنا", back: "مرة أخرى",
        in: "بعد / في", an: "أداة تنكير", hour: "ساعة",
        leave: "اترك", your: "ـك / الخاص بك", name: "اسم",
        and: "و", number: "رقم", will: "سوف",
        send: "أرسل", quick: "سريع", message: "رسالة",
        thank: "شكراً", for: "على / من أجل",
        returning: "إعادة / معاودة", my: "ـي / الخاص بي",
        talk: "أتحدث", again: "مرة أخرى", soon: "قريباً"
    },

    // Topic: a2-hotel (Booking a Hotel Room — حجز غرفة فندقية)
    "a2-hotel": {
        i: "أنا", would: "أود", like: "أرغب",
        to: "أن / إلى", book: "أحجز", a: "أداة تنكير",
        room: "غرفة", do: "فعل مساعد للسؤال",
        you: "أنتم / أنت", have: "لديكم", any: "أي",
        rooms: "غرف", available: "متاحة", need: "أحتاج",
        for: "لمدة / لـ", three: "ثلاثة", nights: "ليالٍ",
        does: "فعل مساعد للسؤال", the: "الـ", price: "سعر",
        include: "يشمل", breakfast: "وجبة الإفطار",
        prefer: "أفضل", with: "مع", view: "إطلالة",
        what: "ما / ماذا", time: "وقت", check: "تسجيل",
        in: "دخول / في", start: "يبدأ", is: "هل / يكون",
        there: "هناك", free: "مجاني", parking: "موقف سيارات",
        guests: "نزلاء", can: "هل يمكن", request: "أطلب",
        an: "أداة تنكير", extra: "إضافي", pillow: "وسادة",
        my: "ـي / الخاص بي", reservation: "حجز",
        under: "باسم / تحت", this: "هذا", name: "اسم",
        thank: "شكراً", making: "جعل", everything: "كل شيء",
        easy: "سهلاً"
    },

    // =====================================================
    // LEVEL B1 — INTERMEDIATE
    // =====================================================

    // Topic: b1-airport (At the Airport — في المطار)
    "b1-airport": {
        i: "أنا", have: "لدي", a: "أداة تنكير",
        flight: "رحلة جوية", to: "إلى", london: "لندن",
        this: "هذا / هذه", evening: "المساء", where: "أين",
        can: "يمكنني", check: "تسجيل", in: "دخول / في",
        for: "لـ / من أجل", my: "ـي / الخاص بي",
        would: "أود", like: "أرغب", suitcase: "حقيبة سفر",
        is: "هل / يكون", expected: "من المتوقع", leave: "يغادر",
        on: "في", time: "الوقت", could: "هل يمكنك",
        you: "أنت", tell: "تخبر", me: "ني / أنا",
        which: "أي", gate: "بوابة", use: "أستخدم",
        connecting: "مواصلة / ربط", dubai: "دبي",
        collect: "أستلم", checked: "مسجلة", luggage: "أمتعة",
        has: "قد / لديه", not: "لم / لا", arrived: "وصلت",
        yet: "بعد", need: "أحتاج", some: "بعض",
        help: "مساعدة", with: "بخصوص / مع",
        boarding: "صعود إلى الطائرة", pass: "بطاقة / تصريح",
        hope: "آمل", the: "الـ", rest: "بقية",
        of: "من", journey: "رحلة", goes: "تسير",
        well: "بشكل جيد"
    },

    // Topic: b1-taxi (Using a Taxi Service — استخدام خدمة سيارات الأجرة)
    "b1-taxi": {
        could: "هل يمكنك", you: "أنت", take: "تأخذ / توصل",
        me: "ني / أنا", to: "إلى", this: "هذا",
        address: "عنوان", how: "كم / كيف", long: "طويل",
        will: "سوف", the: "الـ", journey: "رحلة",
        today: "اليوم", please: "من فضلك", use: "استخدم",
        fastest: "الأسرع", available: "المتاح", route: "طريق / مسار",
        there: "هناك", seems: "يبدو", be: "يكون",
        heavy: "شديد", traffic: "ازدحام مروري", ahead: "أمام",
        stop: "توقف", near: "بالقرب من", main: "رئيسي",
        entrance: "مدخل", i: "أنا", booked: "حجزت",
        ride: "رحلة", through: "من خلال", application: "تطبيق",
        location: "موقع", on: "على", map: "خريطة",
        looks: "يبدو", incorrect: "غير صحيح", can: "هل يمكنك",
        wait: "تنتظر", here: "هنا", for: "لمدة",
        a: "أداة تنكير", few: "بضعة", minutes: "دقائق",
        would: "أود", like: "أرغب", pay: "أدفع",
        using: "باستخدام", my: "ـي / الخاص بي",
        phone: "هاتف", thank: "شكراً", getting: "إيصال",
        safely: "بأمان"
    },

    // Topic: b1-doctor (Visiting the Doctor — زيارة الطبيب)
    "b1-doctor": {
        i: "أنا", have: "قد / لدي", been: "كنت",
        feeling: "أشعر", unwell: "بالتعب / لست بخير",
        since: "منذ", monday: "يوم الاثنين",
        sometimes: "أحياناً", experience: "أعاني من / أختبر",
        pain: "ألم", in: "في", my: "ـي / الخاص بي",
        back: "ظهر", the: "الـ", symptoms: "أعراض",
        started: "بدأت", about: "حوالي", three: "ثلاثة",
        days: "أيام", ago: "منذ", difficulty: "صعوبة",
        sleeping: "النوم", at: "في / أثناء", night: "الليل",
        could: "هل يمكنك", you: "أنت", explain: "تشرح",
        what: "ماذا", results: "نتائج", mean: "تعني",
        do: "فعل مساعد للسؤال", need: "أحتاج", to: "أن",
        take: "أتناول", any: "أي", medicine: "دواء",
        should: "ينبغي / يجب", come: "أعود / آتي",
        for: "لـ / من أجل", another: "آخر", checkup: "فحص طبي",
        would: "أود", like: "أرغب", understand: "أفهم",
        treatment: "علاج", plan: "خطة", are: "هل / تكون",
        there: "هناك", activities: "أنشطة", avoid: "أتجنب",
        thank: "شكراً", explaining: "شرح", everything: "كل شيء",
        clearly: "بوضوح"
    },

    // Topic: b1-friends (Making Plans with Friends — التخطيط مع الأصدقاء)
    "b1-friends": {
        are: "هل / يكونون", you: "أنت", free: "متفرغ",
        to: "لـ / أن", meet: "نلتقي", this: "هذا",
        weekend: "نهاية الأسبوع", we: "نحن", could: "يمكننا",
        visit: "نزور", the: "الـ", new: "جديد",
        shopping: "التسوق", center: "مركز", what: "ما",
        time: "وقت", would: "أود / سوف", be: "يكون",
        convenient: "مناسب", for: "لـ", i: "أنا",
        rather: "أفضل", in: "في", afternoon: "فترة ما بعد الظهر",
        let: "دع", me: "ني / أنا", check: "أراجع",
        my: "ـي / الخاص بي", schedule: "جدول", before: "قبل",
        deciding: "اتخاذ القرار", should: "ينبغي",
        invite: "ندعو", others: "الآخرين", as: "كـ / أيضاً",
        well: "أيضاً / جيداً", can: "يمكنني", pick: "أقلّ",
        up: "من", on: "في / على", way: "طريق",
        there: "هناك", weather: "الطقس", might: "قد",
        change: "يغير", our: "ـنا / الخاص بنا", plans: "خطط",
        will: "سوف", everyone: "الجميع", know: "يعرف",
        details: "تفاصيل", am: "أكون", really: "حقاً",
        looking: "أتطلع", forward: "قدماً", it: "ذلك"
    },

    // =====================================================
    // LEVEL B2 — UPPER INTERMEDIATE
    // =====================================================

    // Topic: b2-returns (Returning or Exchanging Items — إرجاع المنتجات أو استبدالها)
    "b2-returns": {
        i: "أنا", would: "أود", like: "أرغب", to: "أن",
        return: "أُرجع", this: "هذا", item: "منتج",
        unfortunately: "للأسف", the: "الـ", product: "منتج",
        arrived: "وصل", damaged: "تالف", noticed: "لاحظت",
        problem: "مشكلة", after: "بعد", opening: "فتح",
        it: "ذلك / إياه", still: "ما زال", have: "لدي",
        original: "أصلي", receipt: "إيصال", could: "هل يمكنك",
        you: "أنت", explain: "توضح", your: "ـكم / الخاص بكم",
        policy: "سياسة", prefer: "أفضل", a: "أداة تنكير",
        full: "كامل", refund: "استرداد المبلغ", instead: "بدلاً من ذلك",
        is: "هل / يكون", possible: "ممكن", exchange: "أستبدل",
        for: "بـ / من أجل", another: "آخر", replacement: "بديل",
        should: "من المفترض أن", arrive: "يصل", within: "خلال",
        week: "أسبوع", expected: "توقعت", better: "أفضل",
        quality: "جودة", price: "سعر", appreciate: "أقدر",
        help: "مساعدة", resolving: "حل", issue: "مشكلة"
    },

    // Topic: b2-customer-service (Dealing with Customer Service — التعامل مع خدمة العملاء)
    "b2-customer-service": {
        i: "أنا", am: "أكون", contacting: "أتواصل",
        you: "معكم / أنت", about: "بخصوص", my: "ـي / الخاص بي",
        recent: "الأخير / الحديث", order: "طلب", the: "الـ",
        payment: "عملية الدفع", went: "تمت / ذهبت", through: "بنجاح / من خلال",
        but: "لكن", failed: "فشل / لم يكتمل", have: "قد",
        already: "بالفعل", tried: "حاولت", restarting: "إعادة تشغيل",
        application: "تطبيق", could: "هل يمكنك", check: "تتحقق",
        status: "حالة", of: "لـ / من", request: "طلب",
        been: "كنت / تم", waiting: "أنتظر", for: "لـ / من أجل",
        a: "أداة تنكير", response: "رد", since: "منذ",
        yesterday: "أمس", is: "هل / يكون", there: "هناك",
        another: "آخر", way: "طريقة", to: "أن",
        solve: "أحل", this: "هذه", problem: "مشكلة",
        would: "سوف / أود", appreciate: "أقدر", clear: "واضح",
        explanation: "توضيح", transfer: "تحول", me: "ني / أنا",
        supervisor: "مشرف", please: "من فضلك", send: "ترسل",
        confirmation: "تأكيد", by: "عبر / بواسطة", email: "البريد الإلكتروني",
        thank: "شكراً", taking: "تخصيص", time: "وقت",
        help: "المساعدة"
    },

    // Topic: b2-apartment (Renting an Apartment — استئجار شقة)
    "b2-apartment": {
        i: "أنا", am: "أكون", interested: "مهتم",
        in: "بـ / في", renting: "استئجار", this: "هذه",
        apartment: "شقة", could: "هل يمكنني", arrange: "أرتب",
        a: "أداة تنكير", visit: "زيارة", afternoon: "بعد الظهر",
        is: "هل / يكون", the: "الـ", monthly: "شهري",
        rent: "إيجار", negotiable: "قابل للتفاوض", at: "على / في",
        all: "الإطلاق / كل", are: "هل / تكون",
        electricity: "كهرباء", and: "و", water: "ماء",
        included: "مشمول", how: "كم", much: "مقدار",
        security: "ضمان", deposit: "مبلغ تأمين", required: "مطلوب",
        would: "أود", like: "أرغب", to: "أن",
        review: "أراجع", contract: "عقد", first: "أولاً",
        pets: "حيوانات أليفة", allowed: "مسموح بها",
        inside: "داخل", building: "مبنى", location: "موقع",
        convenient: "مناسب", for: "لـ", my: "ـي / الخاص بي",
        workplace: "مكان العمل", when: "متى", be: "يكون",
        ready: "جاهز", discuss: "أناقش", final: "نهائية",
        terms: "شروط"
    },

    // Topic: b2-workplace (Workplace Conversations — المحادثات في بيئة العمل)
    "b2-workplace": {
        could: "هل يمكننا", we: "نحن", discuss: "نناقش",
        the: "الـ", project: "مشروع", timeline: "جدول زمني",
        i: "أنا", have: "قد", completed: "أنجزت",
        most: "معظم", of: "من", my: "ـي / الخاص بي",
        assigned: "الموكلة", tasks: "مهام", may: "قد",
        need: "نحتاج", additional: "إضافي", time: "وقت",
        to: "أن", finish: "ننتهي", would: "أود",
        like: "أن / أحب", suggest: "أقترح", another: "آخر",
        approach: "أسلوب / نهج", you: "أنت", clarify: "توضح",
        main: "رئيسية", expectations: "توقعات", will: "سوف",
        share: "أشارك", updated: "محدث", report: "تقرير",
        shortly: "بعد قليل", should: "ينبغي", address: "نعالج",
        this: "هذه", issue: "مسألة", before: "قبل",
        friday: "يوم الجمعة", your: "ـك / الخاص بك",
        feedback: "ملاحظات", be: "تكون", very: "جداً",
        helpful: "مفيدة", believe: "أعتقد", are: "نحن / يكونون",
        making: "نحقق", good: "جيد", progress: "تقدم",
        "let's": "دعونا", agree: "نتفق", on: "على",
        next: "التالية", steps: "خطوات", together: "معاً"
    },

    // =====================================================
    // LEVEL C1 — ADVANCED
    // =====================================================

    // Topic: c1-unexpected (Handling Unexpected Situations — التعامل مع المواقف غير المتوقعة)
    "c1-unexpected": {
        we: "نحن", need: "نحتاج", to: "إلى / أن",
        reconsider: "نعيد النظر", our: "ـنا / الخاصة بنا",
        plans: "خطط", immediately: "فوراً", the: "الـ",
        situation: "وضع / موقف", is: "يكون", more: "أكثر",
        complicated: "تعقيداً", than: "من", expected: "المتوقع",
        "let's": "دعونا", focus: "نركز", on: "على",
        what: "ما", can: "نستطيع", control: "نتحكم",
        i: "أنا", would: "أفضل / أود", rather: "بالأحرى",
        avoid: "أتجنب", making: "اتخاذ", rushed: "متسرعة",
        decisions: "قرارات", should: "ينبغي", consider: "نأخذ بعين الاعتبار",
        every: "كل", possible: "ممكنة", outcome: "نتيجة",
        there: "هناك", must: "لا بد", be: "يكون",
        a: "أداة تنكير", reasonable: "معقول", alternative: "بديل",
        available: "متاح", will: "سوف", take: "أتحمل",
        responsibility: "مسؤولية", for: "عن", my: "ـي / الخاص بي",
        part: "جزء", communicate: "نوضح / نتواصل",
        this: "هذا", change: "تغيير", clearly: "بوضوح",
        staying: "البقاء", calm: "هادئاً", help: "يساعد",
        us: "نا / نحن", find: "نجد", solution: "حل",
        learn: "نتعلم", valuable: "قيمة", lessons: "دروس",
        from: "من", experience: "تجربة"
    },

    // Topic: c1-opinions (Expressing Opinions and Disagreements — التعبير عن الآراء والاختلاف)
    "c1-opinions": {
        from: "من", my: "ـي / الخاص بي", perspective: "وجهة نظر",
        the: "الـ", issue: "مسألة", deserves: "تستحق",
        attention: "اهتمام", i: "أنا", understand: "أتفهم",
        your: "ـك / الخاص بك", argument: "حجة", but: "لكن",
        disagree: "أختلف", there: "هناك", are: "توجد",
        several: "عدة", factors: "عوامل", worth: "تستحق",
        considering: "الدراسة / النظر", would: "سوف / أود",
        approach: "أتعامل مع / أسلوب", matter: "مسألة",
        differently: "بطريقة مختلفة", could: "هل يمكنك",
        you: "أنت", explain: "توضح", reasoning: "منطق",
        behind: "وراء", that: "ذلك", agree: "أتفق",
        with: "مع", point: "وجهة نظر / نقطة", to: "إلى",
        some: "بعض", extent: "حد", we: "نحن",
        should: "ينبغي", distinguish: "نميز", facts: "حقائق",
        assumptions: "افتراضات", is: "يكون", a: "أداة تنكير",
        valid: "وجيهة / صحيحة", discussing: "النقاش",
        appreciate: "أقدر", hearing: "الاستماع", different: "مختلفة",
        viewpoint: "وجهة نظر", perhaps: "ربما", can: "يمكننا",
        find: "نجد", common: "مشترك", ground: "أرضية",
        here: "هنا"
    },

    // Topic: c1-negotiation (Negotiating Prices and Services — التفاوض على الأسعار والخدمات)
    "c1-negotiation": {
        would: "هل يمكن / أود", you: "أنتم / أنت", consider: "تفكرون",
        offering: "تقديم", a: "أداة تنكير", better: "أفضل",
        price: "سعر", the: "الـ", current: "الحالي",
        offer: "عرض", exceeds: "يتجاوز", my: "ـي / الخاص بي",
        available: "المتاحة", budget: "ميزانية", i: "أنا",
        believe: "أعتقد", there: "هناك", is: "يوجد",
        room: "مجال", for: "لـ / من أجل", negotiation: "تفاوض",
        could: "هل يمكننا", we: "نحن", agree: "نتفق",
        on: "على", more: "أكثر", reasonable: "معقول",
        figure: "مبلغ", am: "أكون", willing: "مستعد",
        to: "أن", commit: "ألتزم", longer: "أطول",
        contract: "عقد", what: "ما", additional: "إضافية",
        services: "خدمات", are: "هل / تكون", included: "مشمولة",
        that: "ذلك", proposal: "اقتراح", seems: "يبدو",
        fair: "عادل", under: "في ظل", circumstances: "الظروف",
        need: "أحتاج", some: "بعض", time: "وقت",
        review: "أراجع", "let's": "دعونا", see: "نرى",
        if: "إذا", can: "نستطيع", reach: "نتوصل إلى",
        compromise: "حل وسط", have: "قد", reached: "توصلنا إلى",
        agreement: "اتفاق"
    },

    // Topic: c1-complaints (Making Complaints Politely — تقديم الشكاوى بأسلوب مهذب)
    "c1-complaints": {
        i: "أنا", am: "أكون", afraid: "أخشى",
        not: "لست / لا", satisfied: "راضٍ", with: "عن / مع",
        the: "الـ", service: "خدمة", would: "أود",
        like: "أن / أرغب", to: "أن", bring: "ألفت",
        an: "أداة تنكير", issue: "مشكلة / مسألة",
        your: "ـكم / الخاص بكم", attention: "انتباه",
        did: "فعل مساعد للماضي", meet: "تلبي", my: "ـي / الخاص بي",
        expectations: "توقعات", was: "تم / كان",
        given: "قُدمت / أُعطيت", information: "معلومات",
        that: "التي / ذلك", turned: "اتضح", out: "لاحقاً / إلى الخارج",
        incorrect: "غير صحيحة", have: "قد", already: "بالفعل",
        attempted: "حاولت", resolve: "أعالج / أحل", this: "هذه",
        matter: "مسألة", appreciate: "أقدر", a: "أداة تنكير",
        prompt: "سريع", response: "رد", from: "من",
        team: "فريق", could: "هل يمكنكم", you: "أنتم",
        clarify: "توضحون", how: "كيف", intend: "تنوي",
        address: "تعالج", believe: "أعتقد", partial: "جزئي",
        refund: "استرداد المبلغ", be: "يكون", appropriate: "مناسب",
        hope: "آمل", we: "نحن", can: "نستطيع",
        without: "دون", further: "إضافية", action: "إجراء",
        thank: "شكراً", for: "على / من أجل",
        taking: "أخذ", concerns: "مخاوف / ملاحظات",
        seriously: "على محمل الجد"
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
    summaryModalTitle: document.getElementById("summaryModalTitle"),
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

    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, idx) => {
        const startTime = ctx.currentTime + idx * 0.07;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + 0.25
        );

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.27);
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
    ["bill", "pill"],
    ["bills", "builds"],
    ["call", "com", "calm"],
    ["steady", "study",]
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
        5: "أداء استثنائي! 🏆",
        4: "أداء رائع جداً!",
        3: "أداء جيد!",
        2: "بداية جيدة!",
        1: "واصل التدرّب"
    };

    setLevelBadgeClass(dom.summaryLevelDot, topic.level);
    dom.summaryTopicTitle.textContent = topic.titleAr;
    dom.summaryFeedbackMessage.textContent = feedbackMessages[stars];
    dom.summaryModalTitle.textContent = feedbackMessages[stars];
    dom.summaryFeedbackMessage.hidden = true;

    dom.starsContainer.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        dom.starsContainer.innerHTML += `<span class="star-item ${i <= stars ? "filled" : ""}"><i data-lucide="star"></i></span>`;
    }
    dom.starsScoreText.textContent = ``;
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
    dom.listenMetaBtn.addEventListener("click", openTopicsModal);
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