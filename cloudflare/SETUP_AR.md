# قاعدة بيانات GAME BOX وواجهة التسجيل

قاعدة Cloudflare D1 باسم `gamebox-analytics` وجدول `game_download_clicks` والفهارس جاهزة. نُشر Worker باسم `game-box-analytics` وربطناه بالقاعدة عبر المتغير `DB`.

## الإعداد المنشور

- عنوان فحص الخدمة: https://game-box-analytics.nour0112736754.workers.dev/health
- مسار تسجيل نقرة التنزيل: `POST /api/download`
- الموقع يرسل النقرات إلى العنوان المحدد في `analytics-config.js`.
- لا تُخزّن هوية الزائر أو بريده؛ تُخزّن هوية اللعبة وتاريخ النقرة فقط.
- التسجيل يعني نقرة زر المصدر الرسمي، ولا يؤكد اكتمال تنزيل ملف اللعبة.

## النشر والتحديث مستقبلًا

يحتوي `worker.js` على كود الـWorker و`schema.sql` على بنية قاعدة البيانات. معرّف قاعدة D1 محفوظ في `wrangler.toml`. يتطلب تحديث Worker تفويض Wrangler لحساب Cloudflare، أو تعديل الكود من محرر Cloudflare ثم Deploy.

## قاعدة Supabase السابقة

أزيلت لوحة الإحصائيات وربط Supabase من نسخة الموقع المحلية. لم تُحذف قاعدة Supabase أو بياناتها الموجودة على الإنترنت.