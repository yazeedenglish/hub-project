# Yazeed English — القصص القصيرة

## الملفات
- `index.html`: الصفحة والـ Header.
- `style.css`: الهوية البصرية والتجاوب مع الجوال والوضع الداكن.
- `stories.js`: قائمة القصص، عرض البطاقات، القارئ، ترجمة الكلمات، النطق، ومشغل الصوت.
- `data/the-race.json`: نص القصة وترجمات الكلمات.
- `subtitles/the-race.vtt`: توقيتات عرض النص.
- `audio/the-race.mp3`: ضع ملف الصوت المسجل هنا.
- `images/`: اختياري للصور المحلية.

## تشغيل الصفحة
ارفع محتويات هذا المجلد إلى المسار `/english/stories/` على الاستضافة. يجب تشغيلها من خلال موقع أو خادم محلي، وليس بفتح `index.html` مباشرة، لأن `fetch()` يقرأ ملفات JSON وVTT.

## ملاحظة الصوت
لم يتم تضمين ملف MP3؛ ضع التسجيل المطابق لنص القصة باسم `the-race.mp3` داخل مجلد `audio`. ملف VTT الحالي مثال توقيتات، ويجب مراجعته وضبطه ليناسب التسجيل الحقيقي. بدون MP3 سيظل القارئ والنطق الفردي للكلمات يعملان، لكن مشغل الاستماع لا يستطيع تشغيل صوت غير موجود.

## إضافة قصة جديدة
1. أضف عنصرًا جديدًا داخل مصفوفة `stories` في أعلى `stories.js`.
2. أنشئ ملف JSON في `data/` بنفس الاسم المحدد في `dataFile`.
3. أضف ملف VTT في `subtitles/`، وملف MP3 في `audio/`.
4. يمكن ترك `image` فارغًا واستخدام `coverEmoji`، أو وضع رابط صورة في `image`.

### قالب عنصر قصة
```js
{
  id: "my-story",
  title: "My Story",
  arabicTitle: "قصتي",
  description: "A short description of the story.",
  level: "A1",
  duration: "3 دقائق",
  coverEmoji: "📖",
  image: "",
  dataFile: "data/my-story.json",
  subtitles: "subtitles/my-story.vtt",
  audio: "audio/my-story.mp3"
}
```

### قالب JSON
```json
{
  "title": "My Story",
  "arabicTitle": "قصتي",
  "level": "A1",
  "paragraphs": [
    { "text": "This is the first paragraph." },
    { "text": "This is the second paragraph." }
  ],
  "translations": {
    "this": "هذا",
    "is": "يكون",
    "first": "الأول",
    "paragraph": "فقرة"
  }
}
```

## الصوت والنطق
- نطق الكلمة يستخدم SpeechSynthesis المتاح في الجهاز؛ يفضّل Google UK English Male على الأجهزة غير iOS وSamantha على iOS إذا كانت الأصوات موجودة. وإلا يتم اختيار صوت إنجليزي متاح.
- الصوت المسجل يستخدم MP3، وملف VTT لتحديد المقاطع الزمنية.
- مشغل الصوت يدعم تشغيل/إيقاف، التقديم والإرجاع 10 ثوانٍ، تغيير السرعة، وإخفاء الشريط.
- تظليل التوقيتات يحاول مطابقة نص كل مقطع VTT مع كلمات القصة. يجب أن تتوافق نصوص VTT مع القصة حرفيًا قدر الإمكان للحصول على أفضل مطابقة.
