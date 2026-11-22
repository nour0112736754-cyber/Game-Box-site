# قاعدة بيانات GAME BOX وواجهة التسجيل

قاعدة Cloudflare D1 باسم `gamebox-analytics` وجدول `game_download_clicks` والفهارس جاهزة. نُشر Worker باسم `game-box-analytics` وربطناه بالقاعدة عبر المتغير `DB`.

## الإعداد المنشور

- عنوان فحص الخدمة: https://game-box-analytics.nour0112736754.workers.dev/health
- لوحة الإحصائيات: https://game-box-analytics.nour0112736754.workers.dev/dashboard
- مسار تسجيل نقرة التنزيل: `POST /api/download`
- الموقع يرسل النقرات إلى العنوان المحدد في `analytics-config.js`.
- لا تُخزّن هوية الزائر أو بريده؛ تُخزّن هوية اللعبة وتاريخ النقرة فقط.
- التسجيل يعني نقرة زر المصدر الرسمي، ولا يؤكد اكتمال تنزيل ملف اللعبة.

## النشر والتحديث مستقبلًا

يحتوي `worker.js` على كود الـWorker ولوحة الإحصائيات في المسار `/dashboard`، و`schema.sql` على بنية قاعدة البيانات. تعرض اللوحة إجمالي النقرات، نقرات اليوم، الألعاب النشطة، ترتيب الألعاب، ورسمًا يوميًا يوضح اسم وتاريخ كل يوم ويبرز تاريخ اليوم. كل التواريخ محسوبة بتوقيت UTC مثل قاعدة البيانات.

تُحمى اللوحة بكلمة مرور محفوظة كـ Worker Secret باسم `DASHBOARD_PASSWORD`؛ لا تضع كلمة المرور في ملفات الموقع أو داخل ZIP. لإنشاء السر أو تحديثه شغّل `npx wrangler secret put DASHBOARD_PASSWORD` من مجلد `cloudflare`، ثم انشر باستخدام `npx wrangler deploy`. تستمر جلسة الدخول 8 ساعات، وتُحمى بملف ارتباط HttpOnly وSecure.

معرّف قاعدة D1 محفوظ في `wrangler.toml`. يتطلب تحديث Worker تفويض Wrangler لحساب Cloudflare، أو تعديل الكود من محرر Cloudflare ثم Deploy.

## قاعدة Supabase السابقة

أزيل ربط Supabase من نسخة الموقع. لوحة الإحصائيات الحالية تقرأ من قاعدة Cloudflare D1. لم تُحذف قاعدة Supabase القديمة أو بياناتها الموجودة على الإنترنت.
