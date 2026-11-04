/*************************************************************************
     * 1. قائمة الخطوط المبسطة (عادي Print + متصل Cursive) + 5 مستويات لحجم الخط
     *************************************************************************/
    const FONTS_LIST = {
      print: [
        { id: 'Lexend', label: 'Lexend', css: "'Lexend', sans-serif" },
        { id: 'Comic Neue', label: 'Comic Neue', css: "'Comic Neue', cursive" },
        { id: 'Patrick Hand', label: 'Patrick Hand', css: "'Patrick Hand', cursive" }
      ],
      cursive: [
    { id: 'Dancing Script', label: 'Dancing Script', css: "'Dancing Script', cursive" },
    { id: 'Caveat', label: 'Caveat', css: "'Caveat', cursive" },
    { id: 'Great Vibes', label: 'Great Vibes', css: "'Great Vibes', cursive" },
    { id: 'Sacramento', label: 'Sacramento', css: "'Sacramento', cursive" },
    { id: 'Allura', label: 'Allura', css: "'Allura', cursive" },
    { id: 'Satisfy', label: 'Satisfy', css: "'Satisfy', cursive" },
    { id: 'Kaushan Script', label: 'Kaushan Script', css: "'Kaushan Script', cursive" },
    { id: 'Pacifico', label: 'Pacifico', css: "'Pacifico', cursive" }
]
    };

    // 5 مستويات لحجم الخط (المستوى الخامس 1.00 هو الحجم الأقصى الحالي + 4 مستويات أصغر منه)
    const FONT_SCALE_LEVELS = [
      { level: 1, scale: 0.48, name: 'صغير جداً' },
      { level: 2, scale: 0.61, name: 'صغير' },
      { level: 3, scale: 0.74, name: 'متوسط' },
      { level: 4, scale: 0.87, name: 'كبير' },
      { level: 5, scale: 1.00, name: 'كبير جداً' }
    ];

    /*************************************************************************
     * 2. بنك الحروف (A-Z) والكلمات والجمل الإنجليزية العشوائية (بدون مستويات وبدون حركات)
     *************************************************************************/
    const RANDOM_EXERCISES_POOL = [

      // الحروف الإنجليزية من A إلى Z
      { id: 'l_1', type: 'letters', text: 'Aa', arabic: '' },
      { id: 'l_2', type: 'letters', text: 'Bb', arabic: '' },
      { id: 'l_3', type: 'letters', text: 'Cc', arabic: '' },
      { id: 'l_4', type: 'letters', text: 'Dd', arabic: '' },
      { id: 'l_5', type: 'letters', text: 'Ee', arabic: '' },
      { id: 'l_6', type: 'letters', text: 'Ff', arabic: '' },
      { id: 'l_7', type: 'letters', text: 'Gg', arabic: '' },
      { id: 'l_8', type: 'letters', text: 'Hh', arabic: '' },
      { id: 'l_9', type: 'letters', text: 'Ii', arabic: '' },
      { id: 'l_10', type: 'letters', text: 'Jj', arabic: '' },
      { id: 'l_11', type: 'letters', text: 'Kk', arabic: '' },
      { id: 'l_12', type: 'letters', text: 'Ll', arabic: '' },
      { id: 'l_13', type: 'letters', text: 'Mm', arabic: '' },
      { id: 'l_14', type: 'letters', text: 'Nn', arabic: '' },
      { id: 'l_15', type: 'letters', text: 'Oo', arabic: '' },
      { id: 'l_16', type: 'letters', text: 'Pp', arabic: '' },
      { id: 'l_17', type: 'letters', text: 'Qq', arabic: '' },
      { id: 'l_18', type: 'letters', text: 'Rr', arabic: '' },
      { id: 'l_19', type: 'letters', text: 'Ss', arabic: '' },
      { id: 'l_20', type: 'letters', text: 'Tt', arabic: '' },
      { id: 'l_21', type: 'letters', text: 'Uu', arabic: '' },
      { id: 'l_22', type: 'letters', text: 'Vv', arabic: '' },
      { id: 'l_23', type: 'letters', text: 'Ww', arabic: '' },
      { id: 'l_24', type: 'letters', text: 'Xx', arabic: '' },
      { id: 'l_25', type: 'letters', text: 'Yy', arabic: '' },
      { id: 'l_26', type: 'letters', text: 'Zz', arabic: '' },

      // كلمات A1 – أساسية
{ id: 'w_1', type: 'words', text: 'Cat', arabic: 'قطة' },
{ id: 'w_2', type: 'words', text: 'Book', arabic: 'كتاب' },
{ id: 'w_3', type: 'words', text: 'Water', arabic: 'ماء' },
{ id: 'w_4', type: 'words', text: 'Apple', arabic: 'تفاحة' },
{ id: 'w_5', type: 'words', text: 'School', arabic: 'مدرسة' },
{ id: 'w_6', type: 'words', text: 'Friend', arabic: 'صديق' },
{ id: 'w_7', type: 'words', text: 'Morning', arabic: 'صباح' },
{ id: 'w_8', type: 'words', text: 'Family', arabic: 'عائلة' },
{ id: 'w_9', type: 'words', text: 'House', arabic: 'منزل' },
{ id: 'w_10', type: 'words', text: 'Happy', arabic: 'سعيد' },
{ id: 'w_11', type: 'words', text: 'Food', arabic: 'طعام' },
{ id: 'w_12', type: 'words', text: 'Water', arabic: 'ماء' },
{ id: 'w_13', type: 'words', text: 'Mother', arabic: 'أم' },
{ id: 'w_14', type: 'words', text: 'Father', arabic: 'أب' },
{ id: 'w_15', type: 'words', text: 'Window', arabic: 'نافذة' },
{ id: 'w_16', type: 'words', text: 'Garden', arabic: 'حديقة' },
{ id: 'w_17', type: 'words', text: 'Market', arabic: 'سوق' },
{ id: 'w_18', type: 'words', text: 'Breakfast', arabic: 'وجبة الإفطار' },
{ id: 'w_19', type: 'words', text: 'Beautiful', arabic: 'جميل' },
{ id: 'w_20', type: 'words', text: 'Tired', arabic: 'متعب' },

// كلمات A2 – الحياة اليومية
{ id: 'w_21', type: 'words', text: 'Weather', arabic: 'الطقس' },
{ id: 'w_22', type: 'words', text: 'Journey', arabic: 'رحلة' },
{ id: 'w_23', type: 'words', text: 'Healthy', arabic: 'صحي' },
{ id: 'w_24', type: 'words', text: 'Library', arabic: 'مكتبة' },
{ id: 'w_25', type: 'words', text: 'Careful', arabic: 'حذر' },
{ id: 'w_26', type: 'words', text: 'Expensive', arabic: 'غالي' },
{ id: 'w_27', type: 'words', text: 'Convenient', arabic: 'ملائم' },
{ id: 'w_28', type: 'words', text: 'Appointment', arabic: 'موعد' },
{ id: 'w_29', type: 'words', text: 'Neighbour', arabic: 'جار' },
{ id: 'w_30', type: 'words', text: 'Improve', arabic: 'يحسّن' },
{ id: 'w_31', type: 'words', text: 'Remember', arabic: 'يتذكر' },
{ id: 'w_32', type: 'words', text: 'Borrow', arabic: 'يستعير' },
{ id: 'w_33', type: 'words', text: 'Celebrate', arabic: 'يحتفل' },
{ id: 'w_34', type: 'words', text: 'Usually', arabic: 'عادةً' },
{ id: 'w_35', type: 'words', text: 'Suddenly', arabic: 'فجأة' },
{ id: 'w_36', type: 'words', text: 'Polite', arabic: 'مهذب' },
{ id: 'w_37', type: 'words', text: 'Crowded', arabic: 'مزدحم' },
{ id: 'w_38', type: 'words', text: 'Direction', arabic: 'اتجاه' },
{ id: 'w_39', type: 'words', text: 'Invitation', arabic: 'دعوة' },
{ id: 'w_40', type: 'words', text: 'Decision', arabic: 'قرار' },

// كلمات B1 – المستوى المتوسط
{ id: 'w_41', type: 'words', text: 'Knowledge', arabic: 'معرفة' },
{ id: 'w_42', type: 'words', text: 'Confidence', arabic: 'ثقة بالنفس' },
{ id: 'w_43', type: 'words', text: 'Experience', arabic: 'خبرة أو تجربة' },
{ id: 'w_44', type: 'words', text: 'Opportunity', arabic: 'فرصة' },
{ id: 'w_45', type: 'words', text: 'Achievement', arabic: 'إنجاز' },
{ id: 'w_46', type: 'words', text: 'Environment', arabic: 'بيئة' },
{ id: 'w_47', type: 'words', text: 'Behaviour', arabic: 'سلوك' },
{ id: 'w_48', type: 'words', text: 'Responsible', arabic: 'مسؤول' },
{ id: 'w_49', type: 'words', text: 'Independent', arabic: 'مستقل' },
{ id: 'w_50', type: 'words', text: 'Successful', arabic: 'ناجح' },
{ id: 'w_51', type: 'words', text: 'Relationship', arabic: 'علاقة' },
{ id: 'w_52', type: 'words', text: 'Communication', arabic: 'تواصل' },
{ id: 'w_53', type: 'words', text: 'Challenge', arabic: 'تحدي' },
{ id: 'w_54', type: 'words', text: 'Advantage', arabic: 'ميزة' },
{ id: 'w_55', type: 'words', text: 'Disadvantage', arabic: 'عيب' },
{ id: 'w_56', type: 'words', text: 'Recommend', arabic: 'يوصي' },
{ id: 'w_57', type: 'words', text: 'Available', arabic: 'متاح' },
{ id: 'w_58', type: 'words', text: 'Effective', arabic: 'فعّال' },
{ id: 'w_59', type: 'words', text: 'Organize', arabic: 'ينظّم' },
{ id: 'w_60', type: 'words', text: 'Consider', arabic: 'يأخذ بعين الاعتبار' },

// كلمات B1 – تطوير اللغة والتفكير
{ id: 'w_61', type: 'words', text: 'Purpose', arabic: 'هدف أو غرض' },
{ id: 'w_62', type: 'words', text: 'Solution', arabic: 'حل' },
{ id: 'w_63', type: 'words', text: 'Reason', arabic: 'سبب' },
{ id: 'w_64', type: 'words', text: 'Opinion', arabic: 'رأي' },
{ id: 'w_65', type: 'words', text: 'Suggest', arabic: 'يقترح' },
{ id: 'w_66', type: 'words', text: 'Require', arabic: 'يتطلب' },
{ id: 'w_67', type: 'words', text: 'Develop', arabic: 'يطوّر' },
{ id: 'w_68', type: 'words', text: 'Achieve', arabic: 'يحقق' },
{ id: 'w_69', type: 'words', text: 'Avoid', arabic: 'يتجنب' },
{ id: 'w_70', type: 'words', text: 'Compare', arabic: 'يقارن' },
{ id: 'w_71', type: 'words', text: 'Reduce', arabic: 'يقلل' },
{ id: 'w_72', type: 'words', text: 'Increase', arabic: 'يزيد' },
{ id: 'w_73', type: 'words', text: 'Support', arabic: 'يدعم' },
{ id: 'w_74', type: 'words', text: 'Provide', arabic: 'يوفر' },
{ id: 'w_75', type: 'words', text: 'Maintain', arabic: 'يحافظ على' },

// كلمات B2 – المستوى فوق المتوسط
{ id: 'w_76', type: 'words', text: 'Perspective', arabic: 'وجهة نظر' },
{ id: 'w_77', type: 'words', text: 'Sustainable', arabic: 'مستدام' },
{ id: 'w_78', type: 'words', text: 'Collaboration', arabic: 'تعاون' },
{ id: 'w_79', type: 'words', text: 'Perseverance', arabic: 'مثابرة وإصرار' },
{ id: 'w_80', type: 'words', text: 'Significant', arabic: 'مهم أو ملحوظ' },
{ id: 'w_81', type: 'words', text: 'Consequences', arabic: 'عواقب' },
{ id: 'w_82', type: 'words', text: 'Furthermore', arabic: 'علاوة على ذلك' },
{ id: 'w_83', type: 'words', text: 'Nevertheless', arabic: 'ومع ذلك' },
{ id: 'w_84', type: 'words', text: 'Efficient', arabic: 'كفؤ' },
{ id: 'w_85', type: 'words', text: 'Complicated', arabic: 'معقد' },
{ id: 'w_86', type: 'words', text: 'Establish', arabic: 'يؤسس' },
{ id: 'w_87', type: 'words', text: 'Approach', arabic: 'نهج أو أسلوب' },
{ id: 'w_88', type: 'words', text: 'Evidence', arabic: 'دليل' },
{ id: 'w_89', type: 'words', text: 'Influence', arabic: 'تأثير' },
{ id: 'w_90', type: 'words', text: 'Determine', arabic: 'يحدد' },
{ id: 'w_91', type: 'words', text: 'Alternative', arabic: 'بديل' },
{ id: 'w_92', type: 'words', text: 'Assumption', arabic: 'افتراض' },
{ id: 'w_93', type: 'words', text: 'Accomplish', arabic: 'ينجز' },
{ id: 'w_94', type: 'words', text: 'Beneficial', arabic: 'مفيد' },
{ id: 'w_95', type: 'words', text: 'Compromise', arabic: 'تسوية' },
{ id: 'w_96', type: 'words', text: 'Contribution', arabic: 'مساهمة' },
{ id: 'w_97', type: 'words', text: 'Contribute', arabic: 'يساهم' },
{ id: 'w_98', type: 'words', text: 'Circumstances', arabic: 'ظروف' },
{ id: 'w_99', type: 'words', text: 'Interpret', arabic: 'يفسر' },
{ id: 'w_100', type: 'words', text: 'Overcome', arabic: 'يتغلب على' },

      // ==================== A1 — BEGINNER ====================
// Simple words and familiar everyday scenes

{ id: 's_1', type: 'sentences', text: 'The birds can sing', arabic: 'تستطيع الطيور الغناء' },
{ id: 's_2', type: 'sentences', text: 'Bread smells so good', arabic: 'رائحة الخبز شهية جدًا' },
{ id: 's_3', type: 'sentences', text: 'Rain taps the roof', arabic: 'المطر يطرق السقف' },
{ id: 's_4', type: 'sentences', text: 'Bees make honey', arabic: 'ينتج النحل العسل' },
{ id: 's_5', type: 'sentences', text: 'The baby is smiling', arabic: 'الطفل يبتسم' },
{ id: 's_6', type: 'sentences', text: 'Stars shine at night', arabic: 'تلمع النجوم ليلًا' },
{ id: 's_7', type: 'sentences', text: 'We planted a tree', arabic: 'زرعنا شجرة' },
{ id: 's_8', type: 'sentences', text: 'The soup needs salt', arabic: 'الحساء يحتاج إلى الملح' },
{ id: 's_9', type: 'sentences', text: 'Small waves roll in', arabic: 'تتلاطم الأمواج الصغيرة' },
{ id: 's_10', type: 'sentences', text: 'Dad fixed the lamp', arabic: 'أصلح أبي المصباح' },
{ id: 's_11', type: 'sentences', text: 'Cookies smell sweet', arabic: 'رائحة البسكويت حلوة' },
{ id: 's_12', type: 'sentences', text: 'The clock ticks', arabic: 'تدق الساعة' },
{ id: 's_13', type: 'sentences', text: 'Our garden blooms', arabic: 'تزهر حديقتنا' },
{ id: 's_14', type: 'sentences', text: 'A yellow kite flies', arabic: 'تحلق طائرة ورقية صفراء' },
{ id: 's_15', type: 'sentences', text: 'The girl laughed', arabic: 'ضحكت الفتاة' },
{ id: 's_16', type: 'sentences', text: 'Leaves dance in wind', arabic: 'تتمايل الأوراق مع الرياح' },
{ id: 's_17', type: 'sentences', text: 'I found a shell', arabic: 'وجدت صدفة بحرية' },
{ id: 's_18', type: 'sentences', text: 'The bus stops here', arabic: 'تتوقف الحافلة هنا' },
{ id: 's_19', type: 'sentences', text: 'The candle burns slowly', arabic: 'تحترق الشمعة ببطء' },
{ id: 's_20', type: 'sentences', text: 'Cats chase bugs', arabic: 'تطارد القطط الحشرات' },
{ id: 's_21', type: 'sentences', text: 'Snow covers the road', arabic: 'يغطي الثلج الطريق' },
{ id: 's_22', type: 'sentences', text: 'Fish swim fast', arabic: 'تسبح الأسماك بسرعة' },
{ id: 's_23', type: 'sentences', text: 'My pencil broke', arabic: 'انكسر قلمي' },
{ id: 's_24', type: 'sentences', text: 'The bell rang twice', arabic: 'رن الجرس مرتين' },
{ id: 's_25', type: 'sentences', text: 'We baked a cake', arabic: 'خبزنا كعكة' },


// ==================== A2 — ELEMENTARY ====================
// More detailed everyday situations and activities

{ id: 's_26', type: 'sentences', text: 'She watered plants', arabic: 'سقت النباتات' },
{ id: 's_27', type: 'sentences', text: 'The train left town', arabic: 'غادر القطار المدينة' },
{ id: 's_28', type: 'sentences', text: 'Clouds hid the sun', arabic: 'حجبت الغيوم الشمس' },
{ id: 's_29', type: 'sentences', text: 'He packed his lunch', arabic: 'جهز وجبة غدائه' },
{ id: 's_30', type: 'sentences', text: 'The old bridge shook', arabic: 'اهتز الجسر القديم' },
{ id: 's_31', type: 'sentences', text: 'Juice tastes great', arabic: 'مذاق العصير رائع' },
{ id: 's_32', type: 'sentences', text: 'A cool breeze blew', arabic: 'هب نسيم بارد' },
{ id: 's_33', type: 'sentences', text: 'We painted the fence', arabic: 'طلينا السياج' },
{ id: 's_34', type: 'sentences', text: 'The shop opens early', arabic: 'يفتح المتجر مبكرًا' },
{ id: 's_35', type: 'sentences', text: 'Zebras have stripes', arabic: 'للحمير الوحشية خطوط' },
{ id: 's_36', type: 'sentences', text: 'Lights were left on', arabic: 'تُركت الأضواء مضاءة' },
{ id: 's_37', type: 'sentences', text: 'The river bends', arabic: 'ينحني النهر' },
{ id: 's_38', type: 'sentences', text: 'I spilled some milk', arabic: 'سكبت بعض الحليب' },
{ id: 's_39', type: 'sentences', text: 'They moved the sofa', arabic: 'نقلوا الأريكة' },
{ id: 's_40', type: 'sentences', text: 'The phone rang again', arabic: 'رن الهاتف مجددًا' },
{ id: 's_41', type: 'sentences', text: 'Stars filled the sky', arabic: 'ملأت النجوم السماء' },
{ id: 's_42', type: 'sentences', text: 'Soup began to boil', arabic: 'بدأ الحساء بالغليان' },
{ id: 's_43', type: 'sentences', text: 'A small bird landed', arabic: 'حط طائر صغير' },
{ id: 's_44', type: 'sentences', text: 'We missed the bus', arabic: 'فاتتنا الحافلة' },
{ id: 's_45', type: 'sentences', text: 'Wind shook the trees', arabic: 'هزت الرياح الأشجار' },
{ id: 's_46', type: 'sentences', text: 'Her new shoes squeak', arabic: 'يصدر حذاؤها الجديد صريرًا' },
{ id: 's_47', type: 'sentences', text: 'Bread came out warm', arabic: 'خرج الخبز دافئًا' },
{ id: 's_48', type: 'sentences', text: 'Kids built a fort', arabic: 'بنى الأطفال حصنًا' },
{ id: 's_49', type: 'sentences', text: 'A fox crossed by', arabic: 'مر ثعلب من هنا' },
{ id: 's_50', type: 'sentences', text: 'Gardens need care', arabic: 'تحتاج الحدائق إلى العناية' },


// ==================== B1 — INTERMEDIATE ====================
// Richer descriptions and more varied sentence structures

{ id: 's_51', type: 'sentences', text: 'Heavy rain fell', arabic: 'هطلت أمطار غزيرة' },
{ id: 's_52', type: 'sentences', text: 'The engine stopped', arabic: 'توقف المحرك' },
{ id: 's_53', type: 'sentences', text: 'She folded the map', arabic: 'طوت الخريطة' },
{ id: 's_54', type: 'sentences', text: 'Golden leaves fell', arabic: 'تساقطت أوراق ذهبية' },
{ id: 's_55', type: 'sentences', text: 'The dog dug a hole', arabic: 'حفر الكلب حفرة' },
{ id: 's_56', type: 'sentences', text: 'Steam rose up', arabic: 'تصاعد البخار' },
{ id: 's_57', type: 'sentences', text: 'Strong winds blew', arabic: 'هبّت رياح قوية' },
{ id: 's_58', type: 'sentences', text: 'We watched sunset', arabic: 'شاهدنا غروب الشمس' },
{ id: 's_59', type: 'sentences', text: 'Old stairs creaked', arabic: 'أصدرت السلالم القديمة صريرًا' },
{ id: 's_60', type: 'sentences', text: 'He polished his desk', arabic: 'لمّع مكتبه' },
{ id: 's_61', type: 'sentences', text: 'Lights flashed', arabic: 'ومضت الأضواء' },
{ id: 's_62', type: 'sentences', text: 'The path wound on', arabic: 'امتد الممر بشكل متعرج' },
{ id: 's_63', type: 'sentences', text: 'A tiny crack grew', arabic: 'اتسع شق صغير' },
{ id: 's_64', type: 'sentences', text: 'They fixed the gate', arabic: 'أصلحوا البوابة' },
{ id: 's_65', type: 'sentences', text: 'The smell spread', arabic: 'انتشرت الرائحة' },
{ id: 's_66', type: 'sentences', text: 'Water dripped down', arabic: 'تقطر الماء إلى الأسفل' },
{ id: 's_67', type: 'sentences', text: 'A rabbit eats grass', arabic: 'يأكل الأرنب العشب' },
{ id: 's_68', type: 'sentences', text: 'She tied her hair', arabic: 'ربطت شعرها' },
{ id: 's_69', type: 'sentences', text: 'Thick fog rolled in', arabic: 'زحف ضباب كثيف' },
{ id: 's_70', type: 'sentences', text: 'Floorboards creak', arabic: 'تصرّ ألواح الأرضية' },
{ id: 's_71', type: 'sentences', text: 'Someone moved chairs', arabic: 'نقل أحدهم الكراسي' },
{ id: 's_72', type: 'sentences', text: 'The paint dried fast', arabic: 'جف الطلاء بسرعة' },
{ id: 's_73', type: 'sentences', text: 'The kettle whistled', arabic: 'أصدر إبريق الماء صفيرًا' },
{ id: 's_74', type: 'sentences', text: 'The battery ran out', arabic: 'نفدت البطارية' },
{ id: 's_75', type: 'sentences', text: 'The roof needs work', arabic: 'يحتاج السقف إلى إصلاح' },


// ==================== B2 — UPPER INTERMEDIATE ====================
// More expressive vocabulary and precise descriptions

{ id: 's_76', type: 'sentences', text: 'Sun lit the room', arabic: 'أضاءت الشمس الغرفة' },
{ id: 's_77', type: 'sentences', text: 'The fabric shrank', arabic: 'انكمش القماش' },
{ id: 's_78', type: 'sentences', text: 'Dust covered shelves', arabic: 'غطى الغبار الرفوف' },
{ id: 's_79', type: 'sentences', text: 'A smell lingered', arabic: 'ظلت رائحة عالقة' },
{ id: 's_80', type: 'sentences', text: 'The lane bends', arabic: 'ينحني الطريق الضيق' },
{ id: 's_81', type: 'sentences', text: 'Rain soaked roads', arabic: 'بللت الأمطار الطرق' },
{ id: 's_82', type: 'sentences', text: 'Wooden frames warp', arabic: 'تلتوي الإطارات الخشبية' },
{ id: 's_83', type: 'sentences', text: 'Waves crashed hard', arabic: 'تحطمت الأمواج بقوة' },
{ id: 's_84', type: 'sentences', text: 'The metal gleamed', arabic: 'لمع المعدن' },
{ id: 's_85', type: 'sentences', text: 'The glass fogged up', arabic: 'تكون الضباب على الزجاج' },
{ id: 's_86', type: 'sentences', text: 'Herbs add flavor', arabic: 'تضيف الأعشاب نكهة' },
{ id: 's_87', type: 'sentences', text: 'Paint began peeling', arabic: 'بدأ الطلاء بالتقشر' },
{ id: 's_88', type: 'sentences', text: 'Footsteps echoed', arabic: 'تردد صدى خطوات الأقدام' },
{ id: 's_89', type: 'sentences', text: 'Wheels rolled downhill', arabic: 'تدحرجت العجلات إلى أسفل التل' },
{ id: 's_90', type: 'sentences', text: 'Clouds drifted east', arabic: 'انجرفت الغيوم شرقًا' },
{ id: 's_91', type: 'sentences', text: 'Warm air escaped', arabic: 'تسرب الهواء الدافئ' },
{ id: 's_92', type: 'sentences', text: 'Roots spread below', arabic: 'امتدت الجذور في الأسفل' },
{ id: 's_93', type: 'sentences', text: 'Floors reflect light', arabic: 'تعكس الأرضيات الضوء' },
{ id: 's_94', type: 'sentences', text: 'A sudden gust blew', arabic: 'هبّت هبة رياح مفاجئة' },
{ id: 's_95', type: 'sentences', text: 'Glass broke loudly', arabic: 'تحطم الزجاج بصوت عالٍ' },
{ id: 's_96', type: 'sentences', text: 'Dry leaves crunched', arabic: 'تكسّرت الأوراق الجافة' },
{ id: 's_97', type: 'sentences', text: 'Pine scents lingered', arabic: 'ظلت رائحة الصنوبر عالقة' },
{ id: 's_98', type: 'sentences', text: 'Silk caught light', arabic: 'عكس الحرير الضوء' },
{ id: 's_99', type: 'sentences', text: 'The machine vibrated', arabic: 'اهتزت الآلة' },
{ id: 's_100', type: 'sentences', text: 'Wild flowers bloomed', arabic: 'تفتحت الأزهار البرية' }
    ];

    /*************************************************************************
     * 3. حالة التطبيق والتخزين المحلي
     *************************************************************************/
    const STORAGE_KEY = 'yazeed_handwriting_clean_v6';

    const state = {
      filterMode: 'letters',  // 'letters' | 'words' | 'sentences'
      freeMode: false,        // وضع الكتابة الحرة المستقل
      index: 0,
      style: 'print',         // 'print' | 'cursive'
      fontIndex: 0,
      fontScaleIndex: 2,      // 0..4
      sound: true,
      darkMode: false,
      penColor: '#00273A',
      penWeight: 6,           // سمك القلم بالبكسل
      isEraser: false,
      strokes: [],
      isDrawing: false,
      activePointerId: null,
      activePointerType: null,
      currentStroke: null,    // <-- الفاصلة المهمة هنا
      proMode: false,         // تفعيل الوضع الاحترافي
      proPassed: false,       // هل اجتاز التمرين الحالي بنجاح؟
      proFailedCurrent: false,// هل خرج عن المسار في الحركة الحالية؟
      MIN_PRO_PEN_WEIGHT: 5   // الحد الأدنى لسمك القلم لمنع التحايل
    };

    function loadSavedState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (['letters', 'words', 'sentences'].includes(parsed.filterMode)) {
          state.filterMode = parsed.filterMode;
        }
        if (typeof parsed.index === 'number') state.index = parsed.index;
        if (parsed.style) state.style = parsed.style;
        if (typeof parsed.fontIndex === 'number') state.fontIndex = parsed.fontIndex;
        if (typeof parsed.fontScaleIndex === 'number' && parsed.fontScaleIndex >= 0 && parsed.fontScaleIndex < FONT_SCALE_LEVELS.length) {
          state.fontScaleIndex = parsed.fontScaleIndex;
        }
        if (typeof parsed.darkMode === 'boolean') state.darkMode = parsed.darkMode;
        if (typeof parsed.sound === 'boolean') state.sound = parsed.sound;
      } catch (e) {}
    }

    /*************************************************************************
     * Helper: Font Metrics Alignment
     * sizeRatio: Scales the font so the Capital letter touches the top line.
     * midRatio: Shifts the dashed midline to match the small letters (0.50 = 50%).
     * descRatio: Shifts the bottom line for descending letters like g, j, p, y.
     *************************************************************************/
    function getFontAlignment(fontId) {
      const metrics = {
        'Lexend': { sizeRatio: 1.43, yOffset: 0, midRatio: 0.52, descRatio: 0.32 },
        'Comic Neue': { sizeRatio: 1.34, yOffset: 0, midRatio: 0.50, descRatio: 0.30 },
        'Patrick Hand': { sizeRatio: 1.36, yOffset: 0, midRatio: 0.54, descRatio: 0.30 },
        'Dancing Script': { sizeRatio: 1.55, yOffset: 0, midRatio: 0.44, descRatio: 0.40 },
        'Caveat': { sizeRatio: 1.45, yOffset: 0, midRatio: 0.48, descRatio: 0.35 },
        'Great Vibes': { sizeRatio: 1.32, yOffset: 0, midRatio: 0.40, descRatio: 0.45 },
        'Sacramento': { sizeRatio: 1.60, yOffset: 0, midRatio: 0.45, descRatio: 0.45 },
        'Allura': { sizeRatio: 1.42, yOffset: 0, midRatio: 0.45, descRatio: 0.45 },
        'Satisfy': { sizeRatio: 1.39, yOffset: 0, midRatio: 0.48, descRatio: 0.35 },
        'Kaushan Script': { sizeRatio: 1.32, yOffset: 0, midRatio: 0.45, descRatio: 0.40 },
        'Pacifico': { sizeRatio: 1.26, yOffset: 0, midRatio: 0.48, descRatio: 0.35 }
      };
      return metrics[fontId] || { sizeRatio: 1.35, yOffset: 0, midRatio: 0.50, descRatio: 0.30 };
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          filterMode: state.filterMode,
          index: state.index,
          style: state.style,
          fontIndex: state.fontIndex,
          fontScaleIndex: state.fontScaleIndex,
          darkMode: state.darkMode,
          sound: state.sound
        }));
      } catch (e) {}
    }

    function getActiveFontScaleObj() {
      return FONT_SCALE_LEVELS[state.fontScaleIndex] || FONT_SCALE_LEVELS[4];
    }

    // ==================== EXERCISE RANDOMIZATION ====================

// Store the current exercise order so it doesn't change unexpectedly
let activeExerciseList = [];
let activeExerciseMode = null;

// Create a new exercise list
function createExerciseList(mode) {
    const exercises = RANDOM_EXERCISES_POOL.filter(
        item => item.type === mode
    );

    // Keep letters permanently in alphabetical order
    if (mode === 'letters') {
        return exercises;
    }

    // Shuffle words and sentences
    for (let i = exercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [exercises[i], exercises[j]] = [exercises[j], exercises[i]];
    }

    return exercises;
}

// Return the existing order without reshuffling
function getActiveList() {
    if (
        activeExerciseMode !== state.filterMode ||
        activeExerciseList.length === 0
    ) {
        activeExerciseList = createExerciseList(state.filterMode);
        activeExerciseMode = state.filterMode;
    }

    return activeExerciseList;
}

    function getCurrentItem() {
      const list = getActiveList();
      if (state.index >= list.length) state.index = 0;
      if (state.index < 0) state.index = list.length - 1;
      return list[state.index];
    }

    function getActiveFont() {
      const arr = FONTS_LIST[state.style] || FONTS_LIST.print;
      return arr[state.fontIndex % arr.length];
    }

    /*************************************************************************
     * 4. محرك صوت القلم الواقعي عبر Web Audio API (بدون ملفات خارجية وبدون أصوات للأزرار)
     *************************************************************************/
    let audioCtx = null;
    let writingNoiseSource = null;
    let writingGainNode = null;
    let writingFilterNode = null;
    let pencilSilenceTimer = null;

    function getAudioCtx() {
      if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) audioCtx = new Ctx();
      }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function startWritingSound() {
      if (!state.sound) return;
      try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        stopWritingSound();

        // توليد ضجيج ناعم يحاكي ملمس ألياف الورق تحت سن القلم الرصاص
        const bufferSize = ctx.sampleRate * 1.5;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.035 * white)) / 1.035;
          lastOut = output[i];
          output[i] *= 2.2;
        }

        writingNoiseSource = ctx.createBufferSource();
        writingNoiseSource.buffer = noiseBuffer;
        writingNoiseSource.loop = true;

        // فلتر تمرير النطاق لتقريب الترددات من صوت احتكاك الجرافيت بالورق
        writingFilterNode = ctx.createBiquadFilter();
        writingFilterNode.type = 'bandpass';
        writingFilterNode.frequency.setValueAtTime(1550, ctx.currentTime);
        writingFilterNode.Q.setValueAtTime(1.4, ctx.currentTime);

        // فلتر تنعيم إضافي لإزالة الحدة المزعجة
        const lowpassNode = ctx.createBiquadFilter();
        lowpassNode.type = 'lowpass';
        lowpassNode.frequency.setValueAtTime(2800, ctx.currentTime);

        writingGainNode = ctx.createGain();
        writingGainNode.gain.setValueAtTime(0.001, ctx.currentTime);

        writingNoiseSource.connect(writingFilterNode);
        writingFilterNode.connect(lowpassNode);
        lowpassNode.connect(writingGainNode);
        writingGainNode.connect(ctx.destination);

        writingNoiseSource.start();
      } catch (e) {}
    }

    function modulateWritingSound(dist = 4) {
      if (!state.sound) return;
      try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        if (!writingNoiseSource || !writingGainNode) {
          startWritingSound();
        }
        if (!writingGainNode || !writingFilterNode) return;

        // تعديل شدة وتردد صوت القلم حسب سرعة تحريك اليد على الورقة
        const speedFactor = Math.min(1, Math.max(0.15, dist / 14));
        const targetGain = 0.035 + speedFactor * 0.065;
        const targetFreq = 1350 + speedFactor * 750;

        writingGainNode.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.015);
        writingFilterNode.frequency.setTargetAtTime(targetFreq, ctx.currentTime, 0.02);

        clearTimeout(pencilSilenceTimer);
        pencilSilenceTimer = setTimeout(() => {
          if (writingGainNode && audioCtx) {
            writingGainNode.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.02);
          }
        }, 70);
      } catch (e) {}
    }

    function stopWritingSound() {
      clearTimeout(pencilSilenceTimer);
      try {
        if (writingGainNode && audioCtx) {
          writingGainNode.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.015);
        }
        if (writingNoiseSource) {
          const src = writingNoiseSource;
          writingNoiseSource = null;
          writingGainNode = null;
          writingFilterNode = null;
          setTimeout(() => {
          try {
            src.stop();
            src.disconnect();
          } catch (e) {}
        }, 35);
        }
      } catch (e) {}
    }

    // صوت تنبيه الخروج عن المسار (خسارة)
    function playProFailSound() {
      if (!state.sound) return;
      try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(190, now);
        osc.frequency.linearRampToValueAtTime(115, now + 0.22);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    }

    // صوت تحفيزي عند إكمال الكلمة بنجاح
    function playProSuccessSound() {
      if (!state.sound) return;
      try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // نغمة نجاح متصاعدة (C5 - E5 - G5 - C6)
        notes.forEach((freq, idx) => {
          const start = ctx.currentTime + idx * 0.075;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.15, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.3);
        });
      } catch (e) {}
    }

    /*************************************************************************
     * 5. الدفتر المسطر والرسم الفوري فائق السلاسة للآيباد (Apple Pencil 120Hz)
     *************************************************************************/
    const guideCanvas = document.getElementById('guide-canvas');
    const guideCtx = guideCanvas.getContext('2d');
    const drawCanvas = document.getElementById('drawing-canvas');
    const drawCtx = drawCanvas.getContext('2d');

    let stageW = 800;
    let stageH = 290;

    function resizeStageCanvases() {
      const wrap = document.getElementById('canvas-stage');
      const rect = wrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      stageW = Math.max(280, Math.floor(rect.width));
      stageH = Math.max(220, Math.floor(rect.height));

      [guideCanvas, drawCanvas].forEach(c => {
        c.width = stageW * dpr;
        c.height = stageH * dpr;
        const ctx = c.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      });

      renderRuledPaperAndGhost();
      redrawUserStrokes();
      buildProValidationMask();
      updateProStatusUI();
    }

    function getRuledLinesLayout() {
      const scaleObj = getActiveFontScaleObj();
      const scale = scaleObj.scale;

      if (state.freeMode) {
        const rows = [];
        const baseBandH = Math.min(58, stageH * 0.22);
        const bandH = Math.max(24, Math.round(baseBandH * scale));
        const startY = 30 + Math.round((baseBandH - bandH) * 0.4);
        const gap = Math.max(48, Math.round(baseBandH * 1.65 * (0.7 + 0.3 * scale)));
        for (let i = 0; i < 2; i++) {
          const topLine = startY + i * gap;
          const midLine = topLine + bandH * 0.5;
          const baseLine = topLine + bandH;
          const descLine = baseLine + bandH * 0.3;
          rows.push({ topLine, midLine, baseLine, descLine, bandH });
        }
        return rows;
      }

      const item = getCurrentItem();
      const isLong = item.text.length > 34;
      if (!isLong) {
        const centerY = stageH * 0.52;
        const maxBandH = Math.min(110, stageH * 0.40);
        const bandH = Math.round(maxBandH * scale);
        const topLine = centerY - bandH * 0.5;
        const midLine = centerY;
        const baseLine = centerY + bandH * 0.5;
        const descLine = baseLine + bandH * 0.32;
        return [{ topLine, midLine, baseLine, descLine, bandH }];
      } else {
        const rows = [];
        const maxBandH = Math.min(60, stageH * 0.22);
        const bandH = Math.round(maxBandH * scale);
        const startY = 30 + Math.round((maxBandH - bandH) * 0.4);
        const gap = Math.max(46, Math.round(maxBandH * 1.65 * (0.72 + 0.28 * scale)));
        for (let i = 0; i < 2; i++) {
          const topLine = startY + i * gap;
          const midLine = topLine + bandH * 0.5;
          const baseLine = topLine + bandH;
          const descLine = baseLine + bandH * 0.3;
          rows.push({ topLine, midLine, baseLine, descLine, bandH });
        }
        return rows;
      }
    }

    function renderRuledPaperAndGhost(overrideGhostColor = null) {
      guideCtx.clearRect(0, 0, stageW, stageH);
      const isDark = state.darkMode;

      // خلفية منطقة الكتابة (داكنة تماماً في الوضع الليلي كما في الصورة المرفقة)
      guideCtx.fillStyle = isDark ? '#0c0d0f' : '#FFFFFF';
      guideCtx.fillRect(0, 0, stageW, stageH);

      const rows = getRuledLinesLayout();
      const padX = 24;

      rows.forEach(r => {
        // تظليل خفيف جداً لمنطقة مسار الحروف
        guideCtx.fillStyle = isDark ? 'rgba(0, 136, 199, 0.035)' : 'rgba(0, 104, 155, 0.03)';
        guideCtx.fillRect(padX, r.topLine, stageW - padX * 2, r.baseLine - r.topLine);

        // السطر العلوي
        guideCtx.strokeStyle = isDark ? '#1E2329' : '#CBD5E1';
        guideCtx.lineWidth = 1.2;
        guideCtx.setLineDash([]);
        guideCtx.beginPath();
        guideCtx.moveTo(padX, r.topLine);
        guideCtx.lineTo(stageW - padX, r.topLine);
        guideCtx.stroke();

        // السطر الأوسط المنقط
        guideCtx.strokeStyle = isDark ? '#2B3036' : '#94A3B8';
        guideCtx.lineWidth = 1.2;
        guideCtx.setLineDash([6, 6]);
        guideCtx.beginPath();
        guideCtx.moveTo(padX, r.midLine);
        guideCtx.lineTo(stageW - padX, r.midLine);
        guideCtx.stroke();

        // السطر الأساسي الثابت (أزرق سماوي متوهج وأنيق في الوضع الليلي)
        guideCtx.save();
        guideCtx.strokeStyle = isDark ? '#0088C7' : '#00689B';
        guideCtx.lineWidth = 2.2;
        if (isDark) {
          guideCtx.shadowColor = 'rgba(0, 136, 199, 0.45)';
          guideCtx.shadowBlur = 6;
        }
        guideCtx.setLineDash([]);
        guideCtx.beginPath();
        guideCtx.moveTo(padX, r.baseLine);
        guideCtx.lineTo(stageW - padX, r.baseLine);
        guideCtx.stroke();
        guideCtx.restore();

        // سطر الحروف الهابطة
        guideCtx.strokeStyle = isDark ? '#1A1E23' : '#E2E8F0';
        guideCtx.lineWidth = 1.1;
        guideCtx.setLineDash([3, 4]);
        guideCtx.beginPath();
        guideCtx.moveTo(padX, r.descLine);
        guideCtx.lineTo(stageW - padX, r.descLine);
        guideCtx.stroke();
        guideCtx.setLineDash([]);
      });


      if (!state.freeMode) {
        let ghostColor = isDark ? '#777F88' : 'rgba(100, 116, 139, 0.34)';
        if (overrideGhostColor) {
          ghostColor = overrideGhostColor;
        } else if (state.proMode && state.proPassed) {
          ghostColor = '#16A34A'; // أخضر عند الاجتياز بنجاح
        }
        drawTargetOnContext(guideCtx, ghostColor);
      }
    }

    /*************************************************************************
     * Independent Capital & Lowercase Letter Alignment Engine
     * - Automatically measures each font's real pixel Cap-Height and x-Height.
     * - Gives you independent control over Capital Letters and Small Letters.
     *************************************************************************/
    const HANDWRITING_ALIGNMENT_CONFIG = {
      default: {
        capScale: 1.00,      // 1.00 = Capital letters reach 100% of top line (bandH)
        lowerScale: 1.00,    // 1.00 = Regular small letters reach 100% of midline (0.5 * bandH)
        capYOffset: 0,       // Vertical pixel offset for capital letters (+ down, - up)
        lowerYOffset: 0      // Vertical pixel offset for small letters (+ down, - up)
      },
      // Optional per-font fine-tuning (adjust capScale or lowerScale independently at any time)
      fonts: {
        'Lexend':          { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Comic Neue':      { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Patrick Hand':    { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Dancing Script':  { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Caveat':          { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Great Vibes':     { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Sacramento':      { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Allura':          { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Satisfy':         { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Kaushan Script':  { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 },
        'Pacifico':        { capScale: 1.00, lowerScale: 1.00, capYOffset: 0, lowerYOffset: 0 }
      }
    };

    const _fontMetricsCache = {};
    let _measureCanvas = null;

    function getMeasuredFontMetrics(fontObj) {
      if (_fontMetricsCache[fontObj.id]) {
        return _fontMetricsCache[fontObj.id];
      }
      if (!_measureCanvas) {
        _measureCanvas = document.createElement('canvas');
      }
      const mCtx = _measureCanvas.getContext('2d');
      const testSize = 200;
      mCtx.font = `500 ${testSize}px ${fontObj.css}`;
      mCtx.textBaseline = 'alphabetic';

      // Measure flat-top uppercase 'H' and flat-top lowercase 'x'
      const capMeasure = mCtx.measureText('H');
      const lowerMeasure = mCtx.measureText('x');

      const capAscent = capMeasure.actualBoundingBoxAscent || (testSize * 0.72);
      const lowerAscent = lowerMeasure.actualBoundingBoxAscent || (testSize * 0.48);

      const capRatio = capAscent / testSize;     // Cap height per 1px of font-size
      const lowerRatio = lowerAscent / testSize; // x-height per 1px of font-size

      // Only cache once web font has loaded
      if (document.fonts && document.fonts.check(`500 48px ${fontObj.css}`)) {
        _fontMetricsCache[fontObj.id] = { capRatio, lowerRatio };
      }

      return { capRatio, lowerRatio };
    }

    function getFontLetterSizes(fontObj, bandH) {
      const { capRatio, lowerRatio } = getMeasuredFontMetrics(fontObj);
      const cfg = {
        ...HANDWRITING_ALIGNMENT_CONFIG.default,
        ...(HANDWRITING_ALIGNMENT_CONFIG.fonts[fontObj.id] || {})
      };

      // Target physical heights on the 4-line system:
      // Capitals -> full bandH (top line to baseline)
      // Regular lowercase -> half bandH (midline to baseline)
      const targetCapHeight = bandH * cfg.capScale;
      const targetLowerHeight = (bandH * 0.5) * cfg.lowerScale;

      const capFontSize = targetCapHeight / capRatio;
      const lowerFontSize = targetLowerHeight / lowerRatio;

      return {
        capFontSize,
        lowerFontSize,
        capYOffset: cfg.capYOffset || 0,
        lowerYOffset: cfg.lowerYOffset || 0,
        capToLowerRatio: lowerFontSize / capFontSize
      };
    }

    // Splits text into contiguous uppercase and non-uppercase runs so that
    // capital letters and small letters can be sized independently without distortion,
    // while keeping cursive lowercase letters connected.
    function splitTextIntoCaseRuns(text) {
      const runs = [];
      let current = '';
      let currentIsUpper = null;

      for (const ch of String(text)) {
        const isUpper = ch >= 'A' && ch <= 'Z';
        if (currentIsUpper === null) {
          current = ch;
          currentIsUpper = isUpper;
        } else if (isUpper === currentIsUpper) {
          current += ch;
        } else {
          runs.push({ text: current, isUpper: currentIsUpper });
          current = ch;
          currentIsUpper = isUpper;
        }
      }
      if (current) {
        runs.push({ text: current, isUpper: currentIsUpper });
      }
      return runs;
    }

    function measureSegmentedTextWidth(ctx, text, fontObj, capFontSize, lowerFontSize) {
      const runs = splitTextIntoCaseRuns(text);
      let totalWidth = 0;
      for (const run of runs) {
        const fSize = run.isUpper ? capFontSize : lowerFontSize;
        ctx.font = `500 ${fSize}px ${fontObj.css}`;
        totalWidth += ctx.measureText(run.text).width;
      }
      return totalWidth;
    }

    function drawSegmentedText(ctx, text, startX, baseLineY, fontObj, sizes) {
      const runs = splitTextIntoCaseRuns(text);
      let cursorX = startX;
      for (const run of runs) {
        const fSize = run.isUpper ? sizes.capFontSize : sizes.lowerFontSize;
        const yOff = run.isUpper ? sizes.capYOffset : sizes.lowerYOffset;
        ctx.font = `500 ${fSize}px ${fontObj.css}`;
        ctx.fillText(run.text, cursorX, baseLineY + yOff);
        cursorX += ctx.measureText(run.text).width;
      }
    }

    function drawTargetOnContext(ctx, colorStyle) {
      const item = getCurrentItem();
      const rows = getRuledLinesLayout();
      const fontObj = getActiveFont();
      const scale = getActiveFontScaleObj().scale;
      const padX = 44;
      const maxW = stageW - padX * 2;

      ctx.save();
      ctx.fillStyle = colorStyle;
      ctx.textBaseline = 'alphabetic';
      ctx.direction = 'ltr';

      if (rows.length === 1) {
        const r = rows[0];
        const baseSizes = getFontLetterSizes(fontObj, r.bandH);
        let fitFactor = 1.0;

        let textW = measureSegmentedTextWidth(
          ctx,
          item.text,
          fontObj,
          baseSizes.capFontSize,
          baseSizes.lowerFontSize
        );

        if (textW > maxW && textW > 0) {
          fitFactor = Math.max((14 * scale) / baseSizes.capFontSize, maxW / textW);
        }

        const finalSizes = {
          capFontSize: baseSizes.capFontSize * fitFactor,
          lowerFontSize: baseSizes.lowerFontSize * fitFactor,
          capYOffset: baseSizes.capYOffset,
          lowerYOffset: baseSizes.lowerYOffset
        };

        textW = measureSegmentedTextWidth(
          ctx,
          item.text,
          fontObj,
          finalSizes.capFontSize,
          finalSizes.lowerFontSize
        );

        const x = Math.max(padX, (stageW - textW) / 2);
        drawSegmentedText(ctx, item.text, x, r.baseLine, fontObj, finalSizes);
      } else {
        const r0 = rows[0];
        const sizes = getFontLetterSizes(fontObj, r0.bandH);

        const words = item.text.split(' ');
        let line1 = '';
        let line2 = '';
        for (const w of words) {
          const test = line1 ? line1 + ' ' + w : w;
          const testW = measureSegmentedTextWidth(ctx, test, fontObj, sizes.capFontSize, sizes.lowerFontSize);
          if (testW <= maxW || !line1) {
            line1 = test;
          } else {
            line2 = line2 ? line2 + ' ' + w : w;
          }
        }

        const w1 = measureSegmentedTextWidth(ctx, line1, fontObj, sizes.capFontSize, sizes.lowerFontSize);
        const x1 = Math.max(padX, (stageW - w1) / 2);
        drawSegmentedText(ctx, line1, x1, rows[0].baseLine, fontObj, sizes);

        if (line2 && rows[1]) {
          const w2 = measureSegmentedTextWidth(ctx, line2, fontObj, sizes.capFontSize, sizes.lowerFontSize);
          const x2 = Math.max(padX, (stageW - w2) / 2);
          buildIndividualCharacterMasks(
    proMaskCtx,
    line2,
    x2,
    rows[1].baseLine,
    fontObj,
    sizes
);
          drawSegmentedText(ctx, line2, x2, rows[1].baseLine, fontObj, sizes);
        }
      }
      ctx.restore();
    }

/*************************************************************************
     * محرك الوضع الاحترافي (Pro Mode Validation & Anti-Cheat Engine)
     *************************************************************************/
    const proMaskCanvas = document.createElement('canvas');
    const proMaskCtx = proMaskCanvas.getContext('2d', { willReadFrequently: true });
    const proUserCanvas = document.createElement('canvas');
    const proUserCtx = proUserCanvas.getContext('2d', { willReadFrequently: true });

    let proTargetPixels = null;
    let proAllowedPixels = null;
    let proTotalTargetCount = 0;
    let proRowCheckpoints = [];

    // رسم النص مع حدود مسموحة لبناء قناع التحقق (Hit-Mask)
    function strokeSegmentedTextOnMask(ctx, text, startX, baseLineY, fontObj, sizes, strokeWidth) {
      const runs = splitTextIntoCaseRuns(text);
      let cursorX = startX;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = strokeWidth;
      for (const run of runs) {
        const fSize = run.isUpper ? sizes.capFontSize : sizes.lowerFontSize;
        const yOff = run.isUpper ? sizes.capYOffset : sizes.lowerYOffset;
        ctx.font = `500 ${fSize}px ${fontObj.css}`;
        ctx.strokeText(run.text, cursorX, baseLineY + yOff);
        ctx.fillText(run.text, cursorX, baseLineY + yOff);
        cursorX += ctx.measureText(run.text).width;
      }
    }

    function buildProValidationMask() {
      if (!state.proMode || state.freeMode || stageW <= 10 || stageH <= 10) return;

      proMaskCanvas.width = stageW;
      proMaskCanvas.height = stageH;
      proUserCanvas.width = stageW;
      proUserCanvas.height = stageH;

      // 1. حساب البكسلات الأساسية للحرف المطلوب تغطيته (Core Target)
      proMaskCtx.clearRect(0, 0, stageW, stageH);
      drawTargetOnContext(proMaskCtx, '#000000');
      const coreData = proMaskCtx.getImageData(0, 0, stageW, stageH).data;

      proTargetPixels = new Uint8Array(stageW * stageH);
      proTotalTargetCount = 0;
      for (let i = 3, p = 0; i < coreData.length; i += 4, p++) {
        if (coreData[i] > 40) {
          proTargetPixels[p] = 1;
          proTotalTargetCount++;
        }
      }

      // تقسيم الكلمة إلى شرائح تفتيش أفقية لضمان عدم تجاهل آخر حرف
      proRowCheckpoints = [];
      const rows = getRuledLinesLayout();
      rows.forEach((r) => {
        const yMin = Math.max(0, Math.floor(r.topLine - r.bandH * 0.6));
        const yMax = Math.min(stageH - 1, Math.ceil(r.descLine + r.bandH * 0.4));

        let minX = stageW, maxX = 0;
        for (let y = yMin; y <= yMax; y++) {
          const rowOffset = y * stageW;
          for (let x = 0; x < stageW; x++) {
            if (proTargetPixels[rowOffset + x] === 1) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
            }
          }
        }

        if (maxX > minX) {
          const spanW = maxX - minX + 1;
          const numBins = Math.min(12, Math.max(3, Math.round(spanW / 28)));
          const bins = Array.from({ length: numBins }, () => ({ total: 0 }));

          for (let y = yMin; y <= yMax; y++) {
            const rowOffset = y * stageW;
            for (let x = minX; x <= maxX; x++) {
              if (proTargetPixels[rowOffset + x] === 1) {
                const bIdx = Math.min(numBins - 1, Math.floor(((x - minX) / spanW) * numBins));
                bins[bIdx].total++;
              }
            }
          }
          proRowCheckpoints.push({ yMin, yMax, minX, maxX, spanW, numBins, bins });
        }
      });

      // 2. حساب المسار المسموح به حول الحرف بمرونة عالية (Tolerance Zone)
      proMaskCtx.clearRect(0, 0, stageW, stageH);
      const item = getCurrentItem();
      const fontObj = getActiveFont();
      const scale = getActiveFontScaleObj().scale;
      const padX = 44;
      const maxW = stageW - padX * 2;
      const toleranceWidth = Math.max(4, Math.round(8 * scale));

      proMaskCtx.save();
      proMaskCtx.fillStyle = '#000000';
      proMaskCtx.strokeStyle = '#000000';
      proMaskCtx.textBaseline = 'alphabetic';
      proMaskCtx.direction = 'ltr';

      if (rows.length === 1) {
        const r = rows[0];
        const baseSizes = getFontLetterSizes(fontObj, r.bandH);
        let fitFactor = 1.0;
        let textW = measureSegmentedTextWidth(proMaskCtx, item.text, fontObj, baseSizes.capFontSize, baseSizes.lowerFontSize);
        if (textW > maxW && textW > 0) {
          fitFactor = Math.max((14 * scale) / baseSizes.capFontSize, maxW / textW);
        }
        const finalSizes = {
          capFontSize: baseSizes.capFontSize * fitFactor,
          lowerFontSize: baseSizes.lowerFontSize * fitFactor,
          capYOffset: baseSizes.capYOffset,
          lowerYOffset: baseSizes.lowerYOffset
        };
        textW = measureSegmentedTextWidth(proMaskCtx, item.text, fontObj, finalSizes.capFontSize, finalSizes.lowerFontSize);
        const x = Math.max(padX, (stageW - textW) / 2);
        strokeSegmentedTextOnMask(proMaskCtx, item.text, x, r.baseLine, fontObj, finalSizes, toleranceWidth);
      } else {
        const r0 = rows[0];
        const sizes = getFontLetterSizes(fontObj, r0.bandH);
        const words = item.text.split(' ');
        let line1 = '', line2 = '';
        for (const w of words) {
          const test = line1 ? line1 + ' ' + w : w;
          const testW = measureSegmentedTextWidth(proMaskCtx, test, fontObj, sizes.capFontSize, sizes.lowerFontSize);
          if (testW <= maxW || !line1) line1 = test;
          else line2 = line2 ? line2 + ' ' + w : w;
        }
        const w1 = measureSegmentedTextWidth(proMaskCtx, line1, fontObj, sizes.capFontSize, sizes.lowerFontSize);
        const x1 = Math.max(padX, (stageW - w1) / 2);
        strokeSegmentedTextOnMask(proMaskCtx, line1, x1, rows[0].baseLine, fontObj, sizes, toleranceWidth);

        if (line2 && rows[1]) {
          const w2 = measureSegmentedTextWidth(proMaskCtx, line2, fontObj, sizes.capFontSize, sizes.lowerFontSize);
          const x2 = Math.max(padX, (stageW - w2) / 2);
          strokeSegmentedTextOnMask(proMaskCtx, line2, x2, rows[1].baseLine, fontObj, sizes, toleranceWidth);
        }
      }
      proMaskCtx.restore();

      const allowedData = proMaskCtx.getImageData(0, 0, stageW, stageH).data;
      proAllowedPixels = new Uint8Array(stageW * stageH);
      for (let i = 3, p = 0; i < allowedData.length; i += 4, p++) {
        if (allowedData[i] > 80) {
          proAllowedPixels[p] = 1;
        }
      }
    }

    // فحص مرن أثناء الكتابة يمنع الأخطاء الوهمية عند حواف الحرف
    function isPointInsideProTrack(x, y) {
  if (!proAllowedPixels) return true;
  const px = Math.round(x);
  const py = Math.round(y);
  if (px < 0 || py < 0 || px >= stageW || py >= stageH) return false;

  // 1. The exact center of the pen tip MUST be inside the track
  if (proAllowedPixels[py * stageW + px] === 0) return false;

  // 2. Strict edge check: if the pen's inner edge crosses the boundary, fail immediately
  const strictRadius = 2; 
  const offsets = [
    [strictRadius, 0],
    [-strictRadius, 0],
    [0, strictRadius],
    [0, -strictRadius]
  ];

  for (const [dx, dy] of offsets) {
    const cx = px + dx;
    const cy = py + dy;
    if (cx < 0 || cy < 0 || cx >= stageW || cy >= stageH) return false;
    if (proAllowedPixels[cy * stageW + cx] === 0) {
      return false; // Immediate error if any side of the tip touches outside
    }
  }

  return true;
}

    // التحقق من تغطية كامل الكلمة شاملاً الحرف الأخير عند رفع القلم
    function evaluateProCompletion() {
      if (!state.proMode || state.freeMode || state.proPassed || !proTargetPixels || proTotalTargetCount === 0) return;

      proUserCtx.clearRect(0, 0, stageW, stageH);
      for (const s of state.strokes) {
        drawSingleStrokeOnContext(proUserCtx, s, '#000000');
      }

      const userData = proUserCtx.getImageData(0, 0, stageW, stageH).data;
      let coveredCount = 0;

      for (let p = 0; p < proTargetPixels.length; p++) {
        if (proTargetPixels[p] === 1 && userData[p * 4 + 3] > 40) {
          coveredCount++;
        }
      }

      const coverageRatio = coveredCount / proTotalTargetCount;

      // فحص جميع مقاطع الكلمة والتأكد من كتابة الحرف الأخير
      for (const cp of proRowCheckpoints) {
        const coveredBins = new Array(cp.numBins).fill(0);

        for (let y = cp.yMin; y <= cp.yMax; y++) {
          const rowOffset = y * stageW;
          for (let x = cp.minX; x <= cp.maxX; x++) {
            const p = rowOffset + x;
            if (proTargetPixels[p] === 1 && userData[p * 4 + 3] > 40) {
              const bIdx = Math.min(cp.numBins - 1, Math.floor(((x - cp.minX) / cp.spanW) * cp.numBins));
              coveredBins[bIdx]++;
            }
          }
        }

        for (let b = 0; b < cp.numBins; b++) {
          const binTotal = cp.bins[b].total;
          if (binTotal < 12) continue;
          const binRatio = coveredBins[b] / binTotal;

          const isLastPart = (b === cp.numBins - 1);
          const minRequiredForPart = isLastPart ? 0.72 : 0.55;

          if (binRatio < minRequiredForPart) {
            return; // لم يكمل هذا الجزء أو ترك الحرف الأخير
          }
        }
      }

      if (coverageRatio >= 0.78) {
        state.proPassed = true;
        state.strokes.forEach(s => {
          if (!s.isEraser) s.color = '#16A34A';
        });
        playProSuccessSound();
        renderRuledPaperAndGhost();
        redrawUserStrokes();
        updateProStatusUI();
      }
    }

    function triggerProBoundaryError() {
      state.proFailedCurrent = true;
      if (state.currentStroke) {
        state.currentStroke.color = '#E11D48'; // يتحول خط المستخدم للون الأحمر فوراً
      }
      stopWritingSound();
      playProFailSound();

      const card = document.querySelector('.notebook-canvas-card');
      const titleEl = document.getElementById('target-english-display');
      if (card) card.classList.add('pro-error');
      if (titleEl) titleEl.classList.add('pro-error-text');

      renderRuledPaperAndGhost('#E11D48');
      redrawUserStrokes();

      // إزالة الخط الخاطئ تلقائياً بعد لحظة قصيرة ليبدأ المستخدم من جديد بنظافة
      setTimeout(() => {
        if (card) card.classList.remove('pro-error');
        if (titleEl && !state.proPassed) titleEl.classList.remove('pro-error-text');
        state.proFailedCurrent = false;
        renderRuledPaperAndGhost();
        redrawUserStrokes();
      }, 450);
    }

    function updateProStatusUI() {
      const proBtn = document.getElementById('pro-mode-btn');
      const nextBtn = document.getElementById('next-exercise-btn');
      const card = document.querySelector('.notebook-canvas-card');
      const titleEl = document.getElementById('target-english-display');
      const slider = document.getElementById('pen-weight-slider');

      if (proBtn) {
        proBtn.classList.toggle('active-pro', state.proMode);
      }

      // منع التحايل: فرض حد أدنى لسمك القلم (7px) في الوضع الاحترافي
      if (slider) {
        if (state.proMode) {
          slider.min = state.MIN_PRO_PEN_WEIGHT;
          if (state.penWeight < state.MIN_PRO_PEN_WEIGHT) {
            updatePenWeight(state.MIN_PRO_PEN_WEIGHT);
            slider.value = state.MIN_PRO_PEN_WEIGHT;
          }
        } else {
          slider.min = 1;
        }
      }

      // قفل زر "التالي" في الوضع الاحترافي حتى ينجح المستخدم
      if (nextBtn) {
        const shouldLock = state.proMode && !state.freeMode && !state.proPassed;
        nextBtn.disabled = shouldLock;
        nextBtn.innerHTML = shouldLock
          ? `<i data-lucide="lock"></i><span>التالي</span>`
          : `<i data-lucide="arrow-right"></i><span>التالي</span>`;
        lucide.createIcons();
      }

      if (card) {
        card.classList.toggle('pro-success', state.proMode && state.proPassed);
      }
      if (titleEl) {
        titleEl.classList.toggle('pro-success-text', state.proMode && state.proPassed);
      }
    }

    function toggleProMode() {
      state.proMode = !state.proMode;
      if (state.proMode && state.freeMode) {
        state.freeMode = false; // الخروج من الكتابة الحرة عند تشغيل الوضع الاحترافي
      }
      state.proPassed = false;
      state.proFailedCurrent = false;
      clearCanvas();
      updateUI();
    }

    function drawSingleStrokeOnContext(ctx, stroke, overrideColor = null) {
      if (!stroke || !stroke.points || stroke.points.length === 0) return;
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (stroke.isEraser) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.lineWidth = stroke.width * 3;
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = overrideColor || stroke.color;
        ctx.fillStyle = overrideColor || stroke.color;
        ctx.lineWidth = stroke.width;
      }

      const pts = stroke.points;
      if (pts.length === 1) {
        ctx.beginPath();
        ctx.arc(pts[0].x, pts[0].y, stroke.width / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const midX = (pts[i - 1].x + pts[i].x) / 2;
        const midY = (pts[i - 1].y + pts[i].y) / 2;
        ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, midX, midY);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.stroke();
      ctx.restore();
    }

    function redrawUserStrokes() {
  // Widen the clearRect area to prevent subpixel artifacts on High-DPI screens
  drawCtx.clearRect(0, 0, stageW * 2, stageH * 2);
  for (const s of state.strokes) {
    drawSingleStrokeOnContext(drawCtx, s);
  }
  if (state.currentStroke) {
    drawSingleStrokeOnContext(drawCtx, state.currentStroke);
  }
}

    function setupPointerEvents() {
      const stageWrap = document.getElementById('canvas-stage');

      // 1. منع التظليل الأزرق وزر "نسخ" في سفاري iPadOS نهائياً على مستوى الصفحة والكانفاس
      const clearSafariSelection = () => {
        try {
          const sel = window.getSelection ? window.getSelection() : null;
          if (sel && sel.rangeCount > 0) sel.removeAllRanges();
        } catch (err) {}
      };

      document.addEventListener('selectionchange', clearSafariSelection);
      ['selectstart', 'contextmenu', 'dragstart', 'gesturestart', 'gesturechange'].forEach(evtName => {
        window.addEventListener(evtName, (ev) => {
          ev.preventDefault();
          clearSafariSelection();
        }, { passive: false });
      });

      // 2. منع نافذة النسخ والتمرير في سفاري عند اللمس المطول دون تعطيل أحداث Pointer Events للقلم!
      // ملاحظة هامة لنظام iPadOS: نمنع السلوك الافتراضي على touchmove و touchend، ونكتفي بإزالة التظليل في touchstart
      // حتى لا يلغي سفاري حدث pointerdown الخاص بقلم Apple Pencil!
      stageWrap.addEventListener('touchstart', () => {
        clearSafariSelection();
      }, { passive: true });

      stageWrap.addEventListener('touchmove', (ev) => {
        if (ev.cancelable) ev.preventDefault();
      }, { passive: false });

      const getPt = (e) => {
        const rect = drawCanvas.getBoundingClientRect();
        const scaleX = stageW / (rect.width || 1);
        const scaleY = stageH / (rect.height || 1);
        return {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY
        };
      };

      drawCanvas.addEventListener('pointerdown', (e) => {
        if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;

        // إذا بدأ المستخدم الكتابة بقلم Apple Pencil بينما كانت يده ملامسة للشاشة، نعطي الأولوية للقلم فوراً
        if (state.isDrawing && e.pointerType === 'pen' && state.activePointerType !== 'pen') {
          state.currentStroke = null;
        } else if (state.isDrawing && e.pointerId !== state.activePointerId) {
          return;
        }

        if (e.cancelable) e.preventDefault();
        clearSafariSelection();

        state.activePointerId = e.pointerId;
        state.activePointerType = e.pointerType;
        try { drawCanvas.setPointerCapture(e.pointerId); } catch (err) {}

        state.isDrawing = true;
        state.currentStroke = {
          color: state.penColor,
          width: state.penWeight,
          isEraser: state.isEraser,
          points: [getPt(e)]
        };

        // التحقق الفوري عند وضع سن القلم في الوضع الاحترافي
        if (state.proMode && !state.freeMode && !state.isEraser && !state.proPassed) {
          const startPt = state.currentStroke.points[0];
          if (!isPointInsideProTrack(startPt.x, startPt.y)) {
            state.isDrawing = false;
            triggerProBoundaryError();
            state.currentStroke = null;
            return;
          }
        }

        startWritingSound();
redrawUserStrokes();
      }, { passive: false });

      drawCanvas.addEventListener('pointermove', (e) => {
    if (!state.isDrawing || !state.currentStroke) return;
    if (state.activePointerId !== null && e.pointerId !== state.activePointerId) return;
    if (e.cancelable) e.preventDefault();

    const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    const pts = state.currentStroke.points;
    const prevLen = pts.length;
    let maxDist = 0;

    for (const ev of events) {
          const pt = getPt(ev);
          const last = pts[pts.length - 1];
          const dist = Math.hypot(pt.x - last.x, pt.y - last.y);

          // فحص الخروج عن المسار في الوضع الاحترافي
          if (state.proMode && !state.freeMode && !state.isEraser && !state.proPassed) {
            if (!isPointInsideProTrack(pt.x, pt.y)) {
              pts.push(pt);
              state.isDrawing = false;
              triggerProBoundaryError();
              state.currentStroke = null;
              return;
            }
          }

          if (dist > 3.0) {
            pts.push(pt);
            if (dist > maxDist) maxDist = dist;
          }
        }

    if (pts.length > prevLen) {
      modulateWritingSound(maxDist);
      // Force a full smooth redraw instead of an incremental segment
      redrawUserStrokes();
    }
  }, { passive: false });

      const endPointer = (e) => {
        if (!state.isDrawing || !state.currentStroke) return;
        if (e && e.pointerId !== undefined && state.activePointerId !== null && e.pointerId !== state.activePointerId) return;
        if (e && e.cancelable) e.preventDefault();

        try {
          if (e && e.pointerId !== undefined) drawCanvas.releasePointerCapture(e.pointerId);
        } catch (err) {}

        state.isDrawing = false;
        state.activePointerId = null;
        state.activePointerType = null;
        stopWritingSound();

        state.strokes.push(state.currentStroke);
        state.currentStroke = null;
        redrawUserStrokes();

        // التحقق مما إذا أكمل المستخدم تتبع الحرف أو الكلمة بنجاح
        if (state.proMode && !state.freeMode && !state.proPassed) {
          evaluateProCompletion();
        }
      };

      drawCanvas.addEventListener('pointerup', endPointer, { passive: false });
      drawCanvas.addEventListener('pointercancel', endPointer, { passive: false });
    }

    /*************************************************************************
     * 6. وظائف التنقل والأدوات المبسطة (بدون أي صوت عند النقر على الأزرار)
     *************************************************************************/
    function toggleFreeWriteMode() {
      state.freeMode = !state.freeMode;
      if (state.freeMode && state.proMode) {
        state.proMode = false;
      }
      clearCanvas(true);
      updateUI();
    }

    function selectPenColor(color) {
      state.penColor = color;
      state.isEraser = false;
      document.getElementById('eraser-btn').classList.remove('active');
      document.querySelectorAll('.color-swatch').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.color === color);
      });
    }

    function updatePenWeight(val) {
      let weight = parseInt(val, 10);
      if (state.proMode && weight < state.MIN_PRO_PEN_WEIGHT) {
        weight = state.MIN_PRO_PEN_WEIGHT;
      }
      state.penWeight = weight;
      const weightLabel = document.getElementById('weight-val');
      if (weightLabel) weightLabel.textContent = state.penWeight;

      state.isEraser = false;
      document.getElementById('eraser-btn').classList.remove('active');

    }

    function toggleEraserMode() {
      state.isEraser = !state.isEraser;
      document.getElementById('eraser-btn').classList.toggle('active', state.isEraser);
    }

    function undoLastStroke() {
      if (state.strokes.length === 0) return;
      state.strokes.pop();
      redrawUserStrokes();
    }

    function clearCanvas() {
      state.strokes = [];
      state.currentStroke = null;
      state.proPassed = false;
      state.proFailedCurrent = false;
      renderRuledPaperAndGhost();
      redrawUserStrokes();
      updateProStatusUI();
    }

    function toggleHandwritingStyle() {
      state.style = state.style === 'print' ? 'cursive' : 'print';
      state.fontIndex = 0;
      saveState();
      updateUI();
    }

    function cycleFontChoice() {
      const list = FONTS_LIST[state.style];
      state.fontIndex = (state.fontIndex + 2) % list.length;
      saveState();
      updateUI();
    }

    // التنقل السلس بين 5 مستويات لحجم الخط والسطور (5 -> 4 -> 3 -> 2 -> 1 -> 5)
    function cycleFontScale() {
      state.fontScaleIndex = (state.fontScaleIndex - 1 + FONT_SCALE_LEVELS.length) % FONT_SCALE_LEVELS.length;
      clearCanvas();
      saveState();
      updateUI();
    }

    function toggleSound() {
      state.sound = !state.sound;
      if (!state.sound) stopWritingSound();
      saveState();
      const btn = document.getElementById('toggle-sfx-btn');
      btn.innerHTML = `<i data-lucide="${state.sound ? 'volume-2' : 'volume-x'}"></i>`;
      lucide.createIcons();
    }

    function toggleDarkMode() {
      state.darkMode = !state.darkMode;
      document.body.classList.toggle('dark', state.darkMode);

      // تبديل لون القلم الافتراضي والخطوط المرسومة تلقائياً بين الأبيض الساطع (#FFFFFF) في الوضع الليلي والكحلي (#00273A) في النهاري
      if (state.darkMode) {
        if (state.penColor === '#00273A' || state.penColor === '#000000') {
          selectPenColor('#FFFFFF');
        }
        state.strokes.forEach(s => {
          if (!s.isEraser && (s.color === '#00273A' || s.color === '#000000')) {
            s.color = '#FFFFFF';
          }
        });
      } else {
        if (state.penColor === '#FFFFFF') {
          selectPenColor('#00273A');
        }
        state.strokes.forEach(s => {
          if (!s.isEraser && s.color === '#FFFFFF') {
            s.color = '#00273A';
          }
        });
      }

      saveState();
      const btn = document.getElementById('theme-toggle-btn');
      btn.innerHTML = `<i data-lucide="${state.darkMode ? 'sun' : 'moon'}"></i>`;
      renderRuledPaperAndGhost();
      redrawUserStrokes();
      lucide.createIcons();
    }

    function setModeFilter(mode) {
    if (!['letters', 'words', 'sentences'].includes(mode)) return;

    state.filterMode = mode;
    state.index = 0;

    // Generate a fresh order every time a section is selected
    activeExerciseList = createExerciseList(mode);
    activeExerciseMode = mode;

    if (state.freeMode) state.freeMode = false;

    clearCanvas(true);
    saveState();
    updateFilterChips();
    updateUI();
}

    function updateFilterChips() {
      ['letters', 'words', 'sentences'].forEach(m => {
        const chip = document.getElementById(`chip-${m}`);
        if (chip) chip.classList.toggle('active', state.filterMode === m);
      });
    }

    function pickRandomExercise() {
      if (state.freeMode) state.freeMode = false;
      const list = getActiveList();
      state.index = Math.floor(Math.random() * list.length);
      clearCanvas(true);
      saveState();
      updateUI();
    }

    function prevExercise() {
      const list = getActiveList();
      state.index = (state.index - 1 + list.length) % list.length;
      clearCanvas(true);
      saveState();
      updateUI();
    }

    function nextExercise() {
      if (state.proMode && !state.freeMode && !state.proPassed) return;
      const list = getActiveList();
      state.index = (state.index + 1) % list.length;
      state.proPassed = false;
      clearCanvas();
      saveState();
      updateUI();
    }

    /*************************************************************************
     * 8. طباعة ورقة عمل مسطرة (Print Worksheet)
     *************************************************************************/
    function printWorksheetNow() {
      const list = getActiveList().slice(0, 100);
      const fontObj = getActiveFont();
      const scaleObj = getActiveFontScaleObj();
      const scale = scaleObj.scale;

      const escapeSvgText = (str) => String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Precise optical tuning ratios per font for SVG print rendering
      // capRatio: scales the font so capitals touch the top line
      // lowerRatio: proportion applied to lowercase letters so they hit the midline
      // baselineNudge: fine-tunes the baseline so letters rest directly on top of the solid line
      const PRINT_METRICS = {
        'Lexend':         { capRatio: 1.39, lowerRatio: 0.58, baselineNudge: -1 },
        'Comic Neue':     { capRatio: 1.39, lowerRatio: 0.65, baselineNudge: -1 },
        'Patrick Hand':   { capRatio: 1.43, lowerRatio: 0.66, baselineNudge: -1 },
        'Dancing Script': { capRatio: 1.40, lowerRatio: 1.12, baselineNudge: 0 },
        'Caveat':         { capRatio: 1.34, lowerRatio: 0.70, baselineNudge: -1 },
        'Great Vibes':    { capRatio: 1.26, lowerRatio: 1.10, baselineNudge: 0 },
        'Sacramento':     { capRatio: 1.48, lowerRatio: 0.62, baselineNudge: 0 },
        'Allura':         { capRatio: 1.70, lowerRatio: 0.97, baselineNudge: 0 },
        'Satisfy':        { capRatio: 1.30, lowerRatio: 0.68, baselineNudge: 0 },
        'Kaushan Script': { capRatio: 1.40, lowerRatio: 0.70, baselineNudge: 0 },
        'Pacifico':       { capRatio: 1.18, lowerRatio: 0.70, baselineNudge: -1 }
      };

      const metrics = PRINT_METRICS[fontObj.id] || { capRatio: 1.40, lowerRatio: 0.70, baselineNudge: -1 };

      const buildRuledRowSvg = (traceText) => {
        const len = traceText ? traceText.length : 0;
        const bandH = Math.round(38 * scale);
        const baseLineY = 50;
        const topLineY = baseLineY - bandH;
        const midLineY = Math.round(topLineY + bandH * 0.5);
        const descLineY = Math.round(baseLineY + bandH * 0.35);

        // Calculate proportional sizes
        let capSize = bandH * metrics.capRatio;
        let lowerSize = capSize * metrics.lowerRatio;

        // Scale down if line is too long for the page width
        if (len > 24) {
          const shrink = Math.max(0.60, 24 / len);
          capSize *= shrink;
          lowerSize *= shrink;
        }

        const renderTspans = (str) => {
          if (!str) return '';
          return splitTextIntoCaseRuns(str).map(run => {
            const fontSize = run.isUpper ? capSize.toFixed(1) : lowerSize.toFixed(1);
            return `<tspan style="font-size:${fontSize}px;">${escapeSvgText(run.text)}</tspan>`;
          }).join('');
        };

        return `
        <div style="position:relative; width:100%; height:70px; margin:4px 0; direction:ltr;">
          <svg viewBox="0 0 800 70" style="width:100%; height:70px; display:block; overflow:visible;" preserveAspectRatio="none">
            <!-- مسار الكتابة الخفيف -->
            <rect x="0" y="${topLineY}" width="800" height="${bandH}" fill="rgba(0, 104, 155, 0.035)" />
            <!-- السطر العلوي (Top line) -->
            <line x1="0" y1="${topLineY}" x2="800" y2="${topLineY}" stroke="#CBD5E1" stroke-width="1.2" />
            <!-- السطر الأوسط المنقط (Midline) -->
            <line x1="0" y1="${midLineY}" x2="800" y2="${midLineY}" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="6 6" />
            <!-- السطر الأساسي (Baseline) -->
            <line x1="0" y1="${baseLineY}" x2="800" y2="${baseLineY}" stroke="#00689B" stroke-width="2" />
            <!-- سطر النزول (Descender line) -->
            <line x1="0" y1="${descLineY}" x2="800" y2="${descLineY}" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="3 4" />
            ${traceText ? `
              <text x="20" y="${baseLineY + metrics.baselineNudge}"
                    dominant-baseline="alphabetic"
                    alignment-baseline="alphabetic"
                    text-anchor="start"
                    direction="ltr"
                    xml:space="preserve"
                    style="font-family:${fontObj.css}; font-weight:500; fill:#CBD5E1;">${renderTspans(traceText)}</text>
            ` : ''}
          </svg>
        </div>
      `;
      };

      const rowsHtml = list.map((it, i) => `
        <div style="margin-bottom:12px; padding-bottom:6px; border-bottom:1px solid #E2E8F0; page-break-inside:avoid;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:2px;">
            <strong style="font-family:${fontObj.css}; font-size:18px; direction:ltr;">${i + 1}. ${it.text}</strong>
            <span style="font-size:13px; color:#5B645F;">${it.arabic}</span>
          </div>
          ${buildRuledRowSvg(it.text)}
          ${buildRuledRowSvg('')}
        </div>
      `).join('');

      const container = document.getElementById('print-worksheet-container');
      container.innerHTML = `
        <div style="padding:4px; font-family:'Tajawal', sans-serif; direction:rtl;">
          <table class="print-table">
            
            <!-- This footer automatically appears at the bottom of EVERY printed page -->
            <!-- Centered footer on every page -->
            <tfoot>
              <tr>
                <td class="print-footer-cell">
                  <div class="print-footer-content">
                    <span>YazeedEnglish.com</span>
                  </div>
                </td>
              </tr>
            </tfoot>

            <!-- The main exercise content that spans across all 20 pages -->
            <tbody>
              <tr>
                <td>
                  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #00537c; padding-bottom:8px; margin-bottom:14px;">
                    <div>
                      <h1 style="margin:0; font-size:16px; color:#00273A;">Yazeed English - Handwriting Practice</h1>
                      <p style="margin:4px 0 0; font-size:12px; color:#5B645F;">الخط: ${fontObj.id}</p>
                    </div>
                    <div style="font-size:13px; text-align:left;">
                      <div>Name: _______________________________</div>
                    </div>
                  </div>
                  
                  ${rowsHtml}
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      `;

      // Allow Google Fonts to finish layout render before triggering print
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          setTimeout(() => window.print(), 100);
        });
      } else {
        setTimeout(() => window.print(), 180);
      }
    }

    /*************************************************************************
     * 9. تحديث عناصر الواجهة
     *************************************************************************/
    function updateUI() {
      const list = getActiveList();
      const item = getCurrentItem();
      const fontObj = getActiveFont();
      const scaleObj = getActiveFontScaleObj();
      buildProValidationMask();
      updateProStatusUI();

      // تحديث حالة وضع الكتابة الحرة
      const freeBtn = document.getElementById('free-write-btn');
      const freeLabel = document.getElementById('free-write-label');
      freeBtn.classList.toggle('active-pro', state.freeMode);
      freeLabel.textContent = state.freeMode ? 'العودة للتمارين' : 'الكتابة الحرة';

      document.getElementById('top-category-capsule').hidden = state.freeMode;
      document.getElementById('free-mode-banner').hidden = !state.freeMode;
      document.getElementById('reference-header-bar').hidden = state.freeMode;
      document.getElementById('target-showcase-box').hidden = state.freeMode;
      document.getElementById('translation-divider').hidden = state.freeMode;
      document.getElementById('arabic-meaning-display').hidden = state.freeMode;
      document.getElementById('exercise-nav-controls').hidden = state.freeMode;

      document.documentElement.style.setProperty('--active-ref-font', fontObj.css);
      document.documentElement.style.setProperty('--font-scale-factor', scaleObj.scale);
      document.getElementById('font-cycle-label').textContent = `${fontObj.id}`;
      document.getElementById('footer-font-name').textContent = `${fontObj.label}`;

      // تحديث زر ومؤشر مستويات حجم الخط الخمسة
      const scaleLabelEl = document.getElementById('font-scale-label');
      if (scaleLabelEl) {
        scaleLabelEl.textContent = ` ${scaleObj.name}`;
      }
      const scaleBars = document.querySelectorAll('#font-scale-bars .scale-bar-item');
      scaleBars.forEach((bar, idx) => {
        bar.classList.toggle('active', idx < scaleObj.level);
      });

      document.getElementById('style-toggle-label').textContent =
        state.style === 'print' ? 'عادي (Print)' : 'متصل (Cursive)';

      document.getElementById('meta-counter-label').textContent = ` ${state.index + 1} / ${list.length}`;

      const progressPct = state.freeMode ? 100 : Math.round(((state.index + 1) / list.length) * 100);
      document.getElementById('top-progress-fill').style.width = `${progressPct}%`;

      const showcaseSizes = getFontLetterSizes(fontObj, 100);
      const targetDisplayEl = document.getElementById('target-english-display');
      targetDisplayEl.innerHTML = splitTextIntoCaseRuns(item.text).map(run => {
        const cls = run.isUpper ? 'hw-cap-run' : 'hw-lower-run';
        const safeText = run.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<span class="${cls}" style="${run.isUpper ? '' : `font-size:${(showcaseSizes.capToLowerRatio * 100).toFixed(1)}%;`}">${safeText}</span>`;
      }).join('');
      document.getElementById('arabic-meaning-display').textContent = item.arabic;

      const categoryNames = {
        letters: 'الحروف',
        words: 'الكلمات',
        sentences: 'العبارات'
      };
      const catEl = document.getElementById('footer-category-name');
      if (catEl) {
        catEl.textContent = state.freeMode ? 'الكتابة الحرة' : (categoryNames[state.filterMode] || 'حروف (A - Z)');
      }

      renderRuledPaperAndGhost();
      lucide.createIcons();
    }

    window.addEventListener('DOMContentLoaded', () => {
      loadSavedState();
      document.body.classList.toggle('dark', state.darkMode);

      // ضبط لون القلم الافتراضي وأيقونة الوضع الليلي عند التحميل
      if (state.darkMode && state.penColor === '#00273A') {
        selectPenColor('#FFFFFF');
      }
      const themeBtn = document.getElementById('theme-toggle-btn');
      if (themeBtn) {
        themeBtn.innerHTML = `<i data-lucide="${state.darkMode ? 'sun' : 'moon'}"></i>`;
      }
      const sfxBtn = document.getElementById('toggle-sfx-btn');
      if (sfxBtn) {
        sfxBtn.innerHTML = `<i data-lucide="${state.sound ? 'volume-2' : 'volume-x'}"></i>`;
      }

      lucide.createIcons();
      setupPointerEvents();
      updateFilterChips();
      updateUI();
      resizeStageCanvases();

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          Object.keys(_fontMetricsCache).forEach(k => delete _fontMetricsCache[k]);
          updateUI();
        });
      }

      window.addEventListener('resize', resizeStageCanvases);
    });

    Object.assign(window, {
    toggleProMode,  
    nextExercise,
    prevExercise,
    toggleDarkMode,
    toggleSound,
    toggleFreeWriteMode,
    printWorksheetNow,
    toggleHandwritingStyle,
    cycleFontChoice,
    cycleFontScale,
    setModeFilter,
    selectPenColor,
    updatePenWeight,
    toggleEraserMode,
    undoLastStroke,
    clearCanvas
});