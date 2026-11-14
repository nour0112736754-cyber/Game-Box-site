const GAMES = [
    { id:"valorant", trailerId:"e_E9W2vsRbQ", title:"VALORANT", genre:"Shooting", category:"shooting", icon:"V", descriptionAr:"لعبة تصويب تكتيكية 5 ضد 5 بشخصيات وقدرات فريدة.",description:"A tactical 5v5 shooter with agents and unique abilities.", overviewAr:"اختر عميلًا وتعاون مع فريقك في جولات تكتيكية، ثم نزّل النسخة الحالية من صفحة Riot الرسمية.",overview:"Play round-based tactical matches, choose an agent, and work with your team. The official Riot download page provides the current PC installer.", platform:"Windows PC", mode:"Online multiplayer", downloadUrl:"https://playvalorant.com/en-us/download/", requirementsUrl:"https://playvalorant.com/en-us/specs/", downloadSize:"يتغير مع التحديثات؛ اعرف الحجم الحالي من مُثبّت Riot.", cpu:"Intel Core 2 Duo E8400 أو AMD Athlon 200GE", ram:"4 GB", storage:"المساحة المطلوبة للتثبيت يحددها مُثبّت Riot وقت التنزيل.", os:"Windows 10 (Build 19041+) أو Windows 11، 64-bit", graphics:"Intel HD 4000 أو AMD Radeon R5 200؛ يلزم 1 GB VRAM", featured:true },
    { id:"league-of-legends", trailerId:"IzMnCv_lPxI", title:"League of Legends", genre:"Strategy", category:"strategy", icon:"LoL", descriptionAr:"لعبة استراتيجية تنافسية 5 ضد 5 تعتمد على التعاون والأبطال.",description:"A competitive 5v5 strategy game built around teamwork and champions.", overviewAr:"اختر بطلًا وتعاون مع فريقك لتدمير Nexus الخصم. التثبيت يتم عبر عميل Riot الرسمي.",overview:"Choose a champion, coordinate with teammates, and compete to destroy the opposing Nexus. The official Riot page installs the Riot client and League of Legends.", platform:"Windows PC / macOS", mode:"Online multiplayer", downloadUrl:"https://www.leagueoflegends.com/en-us/download/", requirementsUrl:"https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201752654-Minimum-and-Recommended-System-Requirements", downloadSize:"يتغير حسب إصدار العميل والتحديث.", cpu:"Intel Core i3-530 أو AMD A6-3650", ram:"2 GB", storage:"16 GB مساحة متاحة؛ SSD موصى به", os:"Windows 10 (Build 19041+) أو Windows 11، 64-bit", graphics:"DirectX 11 feature level 11_0؛ GeForce 400 / AMD HD 6570 / Intel HD 4600", featured:true },
    { id:"teamfight-tactics", trailerId:"VXUdKeBLemI", title:"Teamfight Tactics", genre:"Strategy", category:"strategy", icon:"TFT", descriptionAr:"لعبة استراتيجية تلقائية تبني فيها فريقك وتتكيف مع كل جولة.",description:"An auto-battler where you build a team and adapt your strategy each round.", overviewAr:"كوّن فريقًا وغيّر خطتك حسب مجريات كل جولة. نسخة الكمبيوتر تعمل من عميل Riot الرسمي.",overview:"Teamfight Tactics is Riot's round-based strategy game. On PC, install it through the official Riot/League client; the current download size is shown by that client.", platform:"Windows PC / macOS / Mobile", mode:"Online strategy", downloadUrl:"https://www.leagueoflegends.com/en-us/download/", requirementsUrl:"https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201752654-Minimum-and-Recommended-System-Requirements", downloadSize:"يُنزّل عبر عميل Riot؛ الحجم بيتغير مع التحديثات.", cpu:"نفس الحد الأدنى لعميل League of Legends على الكمبيوتر", ram:"2 GB (متطلبات عميل League of Legends)", storage:"16 GB لعميل League of Legends", os:"Windows 10 (Build 19041+) أو Windows 11، 64-bit", graphics:"متطلبات DirectX 11 لعميل League of Legends", featured:false },
    { id:"genshin-impact", trailerId:"TAlKhARUcoY", title:"Genshin Impact", genre:"Adventure", category:"adventure", icon:"✦", descriptionAr:"استكشف تيفات في لعبة تقمص أدوار وأكشن بعالم مفتوح.",description:"Explore Teyvat in an open-world action RPG.", overviewAr:"استكشف مناطق تيفات وقابل شخصياتها وتابع قصتها في عالم مفتوح. نزّل عميل الكمبيوتر الرسمي من HoYoverse.",overview:"Explore the regions of Teyvat, meet its characters, and play through a story-driven open world. HoYoverse distributes the PC game through its official launcher.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://genshin.hoyoverse.com/en/download", requirementsUrl:"https://genshin.hoyoverse.com/en/news/detail/158502", downloadSize:"يتغير حسب الإصدار وحزم الصوت؛ يُعرض الحجم الحالي في HoYoPlay.", cpu:"Intel Core i5 من الجيل السادس أو AMD Ryzen مكافئ", ram:"8 GB", storage:"احجز مساحة التثبيت التي يعرضها HoYoPlay؛ حجم اللعبة يتغير مع التحديثات.", os:"Windows 10 64-bit", graphics:"NVIDIA GeForce GTX 1050 أو مكافئ؛ DirectX 11", featured:true },
    { id:"honkai-star-rail", trailerId:"HqQqHgt4frU", title:"Honkai: Star Rail", genre:"Adventure", category:"adventure", icon:"HSR", descriptionAr:"لعبة تقمص أدوار خيالية فضائية بقصة ومعارك تعتمد على الأدوار.",description:"A story-driven space fantasy RPG with turn-based battles.", overviewAr:"سافر مع قطار Astral Express بين العوالم وابنِ فريقًا لمعارك تعتمد على الأدوار.",overview:"Travel with the Astral Express, visit different worlds, and build a team for turn-based combat. Download the official PC client from HoYoverse.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://hsr.hoyoverse.com/en-us/", requirementsUrl:"https://hsr.hoyoverse.com/zh-tw/news/111195", downloadSize:"يتغير حسب الإصدار وحزم الصوت؛ راجع HoYoPlay.", cpu:"Intel Core i3 أو مكافئ (الحد الأدنى المنشور في دليل PC)", ram:"6 GB", storage:"20 GB مساحة متاحة وفق دليل PC المنشور؛ تحقّق من الحجم الحالي في HoYoPlay.", os:"Windows 7 64-bit أو أحدث حسب دليل PC المنشور", graphics:"بطاقة منفصلة؛ GTX 650 أو أعلى وفق دليل PC المنشور", featured:true },
    { id:"zenless-zone-zero", title:"Zenless Zone Zero", genre:"Action", category:"action", icon:"ZZZ", descriptionAr:"لعبة أكشن حضرية أنيقة وقتال سريع بفريق من العملاء.",description:"A stylish urban action RPG with fast team combat.", overviewAr:"استكشف New Eridu وخض مهامًا قتالية مع فريق من العملاء. استخدم مشغّل HoYoverse الرسمي.",overview:"Explore New Eridu and take on combat missions with a squad of Agents. Use the HoYoverse PC launcher from the official game site.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://zenless.hoyoverse.com/en-us/", requirementsUrl:"https://zenless.hoyoverse.com/en-us/news/124540", downloadSize:"التنزيل يتغير مع التحديثات؛ آخر حجم يظهر داخل HoYoPlay.", cpu:"Intel Core i5 من الجيل السابع", ram:"8 GB", storage:"75 GB مساحة متاحة على الكمبيوتر؛ يلزم فراغ إضافي لفك الملفات أثناء التثبيت.", os:"Windows 10 64-bit أو أحدث؛ DirectX 11.1+", graphics:"NVIDIA GeForce GTX 970 أو أعلى", featured:true },
    { id:"wuthering-waves", trailerId:"6lpiSBvawB0", title:"Wuthering Waves", genre:"Adventure", category:"adventure", icon:"WW", descriptionAr:"لعبة أكشن وأدوار بعالم مفتوح تركز على الاستكشاف والقتال.",description:"An open-world action RPG focused on exploration and combat.", overviewAr:"استكشف عالمًا مفتوحًا بعد الكارثة وقاتل بفريق من الشخصيات. نزّل مشغّل Kuro الرسمي.",overview:"Explore a post-apocalyptic open world and fight using a team of Resonators. Download the PC launcher from Kuro Games' official site.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://wutheringwaves.kurogames.com/en/", requirementsUrl:"https://wutheringwaves.kurogames.com/zh-tw/main/news/detail/4388", downloadSize:"يتغير حسب النسخة والتحديث؛ يُعرض في لانشر اللعبة.", cpu:"Intel Core i5 من الجيل التاسع أو Ryzen 2700", ram:"16 GB", storage:"130 GB مساحة متاحة وفق تحديث الناشر المنشور في 2026.", os:"Windows 10 64-bit", graphics:"GeForce GTX 1060 / Radeon RX 570 / Intel Arc A380", featured:true },
    { id:"warframe", trailerId:"Tua7aK6Y7NY", title:"Warframe", genre:"Action", category:"action", icon:"W", descriptionAr:"لعبة أكشن تعاونية وخيال علمي تدور عبر نظام Origin.",description:"A cooperative sci-fi action game set across the Origin System.", overviewAr:"العب بشخصية Tenno وخض مهامًا في عالم خيال علمي. يوفر موقع Digital Extremes الرسمي ملفات الكمبيوتر.",overview:"Awaken as a Tenno and take on missions across a science-fiction universe. The official Digital Extremes page provides the PC installer and optional standalone files.", platform:"Windows PC and consoles", mode:"Online co-op", downloadUrl:"https://www.warframe.com/en/download", requirementsUrl:"https://support.warframe.com/hc/en-us/articles/200182230-What-are-the-minimum-PC-specs-for-Warframe", downloadSize:"المُثبّت المنفصل منشور بحجم 92.77 MB، ثم ينزّل ملفات اللعبة الكبيرة؛ راجع الصفحة الرسمية.", cpu:"Intel Core i7-860 / i5-750 أو AMD FX-4100 (دعم SSE 4.2)", ram:"4 GB", storage:"75 GB مساحة متاحة", os:"Windows 7 64-bit أو أحدث حسب متطلبات الناشر", graphics:"بطاقة متوافقة مع DirectX 11 أو أحدث", featured:true },
    { id:"roblox", trailerId:"eAvXhNlO-rA", title:"Roblox", genre:"Arcade", category:"arcade", icon:"R", descriptionAr:"منصة تضم ملايين التجارب والألعاب التي يصممها المجتمع.",description:"Play millions of community-created games and experiences.", overviewAr:"اكتشف تجارب يصممها اللاعبون. استخدم تطبيق Roblox الرسمي للكمبيوتر من Microsoft Store.",overview:"Roblox is a platform for user-created experiences. On Windows, download the current Roblox - Windows app from the Microsoft Store; Roblox says this is the new app needed to keep playing on Windows.", platform:"Windows PC, Mac, mobile, consoles", mode:"Online experiences", downloadUrl:"https://apps.microsoft.com/detail/9PMF91N3LZ3M?hl=en-us&gl=US", requirementsUrl:"https://en.help.roblox.com/hc/en-us/articles/40842585714196-Get-the-New-and-Improved-Roblox-App-in-the-Microsoft-Store", downloadSize:"حجم التطبيق يظهر في Microsoft Store ويتغير مع التحديثات.", cpu:"معالج حديث (2005 أو أحدث) بسرعة 1.6 GHz أو أعلى", ram:"1 GB على الأقل (توصية Roblox)", storage:"300 MB مساحة تخزين موصى بها للتثبيت", os:"Windows 10 أو Windows 11، 64-bit", graphics:"دعم DirectX 10 أو أعلى", featured:true },
    { id:"minecraft", trailerId:"MmB9b5njVbA", title:"Minecraft: Java & Bedrock", genre:"Adventure", category:"adventure", icon:"M", descriptionAr:"ابنِ واستكشف وابقَ على قيد الحياة في عوالم مكعبة.",description:"Build, explore, and survive in block-based worlds.", overviewAr:"اختر بين Java وBedrock وأنشئ عوالم للبناء أو النجاة. نزّل مشغّل Minecraft الرسمي.",overview:"Play in creative or survival worlds and choose between Java and Bedrock on PC. Download the official Minecraft Launcher from Minecraft.net.", platform:"Windows PC, Mac, Linux, consoles, mobile", mode:"Single-player and online multiplayer", downloadUrl:"https://www.minecraft.net/en-us/download", requirementsUrl:"https://help.minecraft.net/hc/en-us/articles/4409225939853-Minecraft-Java-Edition-System-Requirements", downloadSize:"يتغير حسب الإصدار والعوالم؛ اللانشر الرسمي ينزّل ملفات اللعبة عند التشغيل.", cpu:"تحقق من متطلبات الإصدار في صفحة Minecraft الرسمية؛ تختلف بين Java وBedrock.", ram:"تختلف حسب الإصدار وحجم العالم والإضافات.", storage:"تختلف حسب الإصدار والعوالم؛ اترك مساحة إضافية للعوالم والتحديثات.", os:"Windows 10 أو أحدث للعب عبر الإنترنت والتحديثات", graphics:"تحقق من المتطلبات الحالية للإصدار الذي ستنزّله من الصفحة الرسمية.", featured:false },
    { id:"world-of-warcraft", trailerId:"vlVSJ0AvZe0", title:"World of Warcraft", genre:"Adventure", category:"adventure", icon:"WoW", descriptionAr:"استكشف أزيروث في لعبة تقمص أدوار خيالية جماعية عبر الإنترنت.",description:"Explore Azeroth in a long-running online fantasy RPG.", overviewAr:"أنشئ بطلاً واستكشف أزيروث وانضم إلى لاعبين آخرين عبر مشغّل Battle.net الرسمي.",overview:"Create a hero, explore Azeroth, and join other players. The official installer uses Blizzard's Battle.net desktop app.", platform:"Windows PC / Mac", mode:"Online multiplayer", downloadUrl:"https://download.battle.net/en-us/desktop", requirementsUrl:"https://eu.shop.battle.net/en-us/product/world-of-warcraft-subscription", downloadSize:"يتغير مع التحديثات والتوسعات؛ يظهر في Battle.net قبل التثبيت.", cpu:"4 cores, 3.0 GHz; Intel Core Haswell الجيل الرابع أو AMD Ryzen Zen", ram:"8 GB", storage:"128 GB مساحة متاحة على SSD", os:"Windows 10 64-bit (تحديث مايو 2019 أو أحدث)", graphics:"GPU يدعم DirectX 12 بذاكرة 3 GB", featured:false },
    { id:"hearthstone", title:"Hearthstone", genre:"Strategy", category:"strategy", icon:"H", descriptionAr:"لعبة بطاقات رقمية بمباريات تكتيكية سريعة.",description:"A digital card game with quick tactical matches.", overviewAr:"ابنِ مجموعة أوراق والعب في أطوار متنوعة. نزّل عميل الكمبيوتر الرسمي عبر Battle.net.",overview:"Build a deck, play cards, and compete in different game modes. Download the official PC client through Blizzard's Battle.net app.", platform:"Windows PC, Mac, iOS, Android", mode:"Online card game", downloadUrl:"https://hearthstone.blizzard.com/en-us", requirementsUrl:"https://us.support.blizzard.com/en/article/28991", downloadSize:"يتغير حسب الإصدار والموارد؛ راجع Battle.net.", cpu:"Intel Core i3-6100 أو AMD A10-7850K", ram:"8 GB", storage:"12 GB مساحة متاحة", os:"Windows 10 64-bit (21H1)", graphics:"NVIDIA GeForce GTX 660 أو AMD Radeon R9 280X أو أعلى", featured:true },
    { id:"starcraft-2", title:"StarCraft II", genre:"Strategy", category:"strategy", icon:"SC2", descriptionAr:"لعبة استراتيجية وقتية بين فصائل تتنافس عبر المجرة.",description:"Command armies in a sci-fi real-time strategy game.", overviewAr:"أدر مواردك وقواتك في طور القصة أو المنافسات. تحقق من إتاحة التنزيل من صفحة Blizzard الرسمية.",overview:"Play sci-fi campaigns and real-time strategy matches. Install the current PC client from Blizzard's official Battle.net app.", platform:"Windows PC / Mac", mode:"Campaign and online multiplayer", downloadUrl:"https://starcraft2.blizzard.com/en-us/", requirementsUrl:"https://kr.shop.battle.net/en-us/product/starcraft-ii", downloadSize:"يتغير حسب الحملات والملفات المثبتة؛ يعرض Battle.net الحجم الحالي.", cpu:"Intel Core 2 Duo أو AMD Athlon 64 X2 5600+", ram:"2 GB", storage:"30 GB مساحة متاحة", os:"Windows 10", graphics:"GeForce 7600 GT أو Radeon HD 2600 XT أو Intel HD Graphics 3000", featured:false },
    { id:"overwatch-2", title:"Overwatch 2", genre:"Shooting", category:"shooting", icon:"OW", descriptionAr:"لعبة تصويب جماعية بالأبطال والقدرات وأهداف الفريق.",description:"A team-based hero shooter with varied objectives and play styles.", overviewAr:"اختر بطلًا وتعاون مع فريقك في مباريات قائمة على الأهداف. استخدم مشغّل Blizzard الرسمي.",overview:"Choose a hero, work with your team, and compete in objective-based matches. Download through Blizzard's official Battle.net app.", platform:"Windows PC and consoles", mode:"Online team multiplayer", downloadUrl:"https://overwatch.blizzard.com/en-us/", requirementsUrl:"https://us.shop.battle.net/en-us/product/overwatch", downloadSize:"يتغير مع تحديثات اللعبة؛ يظهر الحجم الحالي في Battle.net.", cpu:"Intel Core i3 أو AMD Phenom X3 8650", ram:"6 GB", storage:"50 GB مساحة متاحة", os:"Windows 10 64-bit (آخر Service Pack)", graphics:"GeForce GTX 600 series أو AMD Radeon HD 7000 series", featured:true },
    { id:"albion-online", title:"Albion Online", genre:"RPG", category:"rpg", icon:"A", descriptionAr:"لعبة تقمص أدوار جماعية بعالم مفتوح واقتصاد يصنعه اللاعبون.",description:"A cross-platform fantasy sandbox MMO with a player-driven world.", overviewAr:"اجمع الموارد واصنع المعدات وشارك في أنشطة تعاونية وتنافسية بعالم مفتوح.",overview:"Gather, craft, trade, and fight in a shared sandbox world. Download the Windows client directly from Albion Online's official site.", platform:"Windows PC, Mac, Linux, mobile", mode:"Online multiplayer", downloadUrl:"https://albiononline.com/download", requirementsUrl:"https://albiononline.com/download", downloadSize:"حجم التنزيل يتغير؛ يظهر داخل المُثبّت الرسمي.", cpu:"Intel أو AMD يدعم SSE2", ram:"4 GB (8 GB موصى بها)", storage:"الموقع الرسمي لا يحدد رقم مساحة ثابتًا للكمبيوتر؛ راجع المُثبّت.", os:"Windows 10 21H1 (Build 19043) أو أحدث", graphics:"بطاقة تدعم DirectX 10 أو أعلى؛ SSD موصى به", featured:false },
    { id:"runescape", title:"RuneScape", genre:"RPG", category:"rpg", icon:"RS", descriptionAr:"لعبة تقمص أدوار جماعية بعالم خيالي ومهارات ومهام متنوعة.",description:"An online fantasy RPG with quests, skills, and a persistent world.", overviewAr:"طوّر مهاراتك واستكشف عالم Gielinor عبر مهام وأنشطة مختلفة.",overview:"Train skills, complete quests, and explore the world of Gielinor. Use the official RuneScape download page and Jagex Launcher.", platform:"Windows PC, Mac, mobile", mode:"Online multiplayer", downloadUrl:"https://www.runescape.com/download", requirementsUrl:"https://support.runescape.com/hc/en-gb/articles/207482995-Graphical-Problems", downloadSize:"التنزيل يتغير؛ الموقع يذكر مساحة 8 GB للعميل والكاش.", cpu:"Intel Core i3-6100 أو AMD بسرعة 2.4 GHz (المواصفات المنشورة الموصى بها)", ram:"8 GB (المواصفات المنشورة الموصى بها)", storage:"8 GB على الأقل لملفات العميل والكاش", os:"Windows 10 أو أحدث، 64-bit", graphics:"GeForce GTX 600 series أو Radeon R7 260 أو Intel UHD 610", featured:false },
    { id:"old-school-runescape", title:"Old School RuneScape", genre:"RPG", category:"rpg", icon:"OSRS", descriptionAr:"نسخة كلاسيكية من لعبة تقمص أدوار جماعية بعالم خيالي.",description:"A classic-style online RPG with quests and a huge open world.", overviewAr:"استكشف عالم Gielinor بطابع كلاسيكي وطور مهارات شخصيتك.",overview:"Return to a classic RuneScape experience with quests, skills, and online play. Download from the official RuneScape site or Jagex Launcher.", platform:"Windows PC, Mac, mobile", mode:"Online multiplayer", downloadUrl:"https://oldschool.runescape.com/", requirementsUrl:"https://support.runescape.com/hc/en-gb/articles/207482995-Graphical-Problems", downloadSize:"حجم التنزيل يتغير؛ صفحة الناشر تذكر 200 MB مساحة تخزين للكمبيوتر.", cpu:"Intel Core i3-6100 أو AMD بسرعة 2.4 GHz (المواصفات المنشورة الموصى بها)", ram:"8 GB (المواصفات المنشورة الموصى بها)", storage:"200 MB مساحة متاحة للعميل", os:"Windows 10 أو أحدث، 64-bit", graphics:"GeForce GTX 600 series أو Radeon R7 260 أو Intel UHD 610", featured:true },
    { id:"guild-wars-2", title:"Guild Wars 2", genre:"RPG", category:"rpg", icon:"GW2", descriptionAr:"استكشف تيريا في لعبة تقمص أدوار جماعية غنية بالقصص.",description:"Explore Tyria in a story-rich online role-playing game.", overviewAr:"أنشئ بطلاً واستكشف تيريا وشارك في أحداث تعاونية. حمّل عميل ArenaNet الرسمي.",overview:"Create a hero, explore Tyria, and take part in cooperative events. The official ArenaNet support site provides the client download and setup steps.", platform:"Windows PC", mode:"Online multiplayer", downloadUrl:"https://help.guildwars2.com/hc/en-us/articles/201862968-Download-the-Guild-Wars-2-Client", requirementsUrl:"https://help.guildwars2.com/hc/en-us/articles/201862958-Minimum-System-Requirements", downloadSize:"العميل ينزّل ملفات اللعبة بعد فتحه؛ الحجم الحالي يظهر أثناء التنزيل.", cpu:"Intel Core i3 بسرعة 3.4 GHz أو AMD Athlon X4 بسرعة 3.8 GHz", ram:"8 GB", storage:"80 GB مساحة متاحة", os:"Windows 7 أو أحدث، 64-bit؛ DirectX 11", graphics:"NVIDIA GeForce GTX 680 أو AMD Radeon HD 7970", featured:false },
    { id:"rainbow-six-siege", title:"Tom Clancy's Rainbow Six Siege", genre:"Shooting", category:"shooting", icon:"R6", descriptionAr:"لعبة تصويب تكتيكية بفِرق وعملاء وبيئات قابلة للتدمير.",description:"A tactical team shooter built around operators and destructible environments.", overviewAr:"اختر عميلًا ونسق هجومًا أو دفاعًا مع فريقك. يُنزّل إصدار الكمبيوتر عبر Ubisoft Connect.",overview:"Choose an Operator and coordinate a tactical team assault or defense. Ubisoft's PC store installs the game through Ubisoft Connect.", platform:"Windows PC and consoles", mode:"Online team multiplayer", downloadUrl:"https://store.ubisoft.com/us/tom-clancys-rainbow-six-siege/67c0ae5b4997ec4c09ed9c34.html?lang=en_US", requirementsUrl:"https://www.ubisoft.com/en-us/help?content_id=7251", downloadSize:"يتغير حسب الإصدار والتحديث؛ تحقق من Ubisoft Connect قبل التنزيل.", cpu:"Intel Core i3-8100 أو AMD Ryzen 3 3100", ram:"8 GB", storage:"65 GB على SSD", os:"Windows 10 أو Windows 11، 64-bit; DirectX 12", graphics:"GTX 1650 4 GB / RX 5500 XT 4 GB / Intel Arc A380 6 GB", featured:true },
    { id:"trackmania", title:"Trackmania", genre:"Racing", category:"racing", icon:"TM", descriptionAr:"تسابق على مسارات مبتكرة وحاول تسجيل أزمنة أسرع.",description:"Race on creative tracks and compete to set faster times.", overviewAr:"قد سيارتك بدقة وتعلم الاختصارات وطارد أزمنة أفضل. احصل على اللعبة من Ubisoft Connect.",overview:"Drive precision-built tracks, learn shortcuts, and chase better times. The official Ubisoft Store adds the game to Ubisoft Connect for download.", platform:"Windows PC", mode:"Solo and online competition", downloadUrl:"https://store.ubisoft.com/us/trackmania-free-starter-access/5e8b58345cdf9a12c868c878.html", requirementsUrl:"https://www.ubisoft.com/en-gb/help/trackmania/gameplay/article/system-requirements-for-trackmania/000081203", downloadSize:"حجم التنزيل يظهر في Ubisoft Connect وقد يتغير مع التحديثات.", cpu:"Intel Core i5-2500K أو AMD FX-6100، بسرعة 3.3 GHz", ram:"8 GB", storage:"2.3 GB مساحة متاحة", os:"Windows 10، 64-bit", graphics:"NVIDIA GeForce GTX 660 2 GB أو AMD Radeon R9 270X 2 GB", featured:false }
];


const EXTRA_GAMES = [
 {id:"path-of-exile",trailerId:"R-UG3642raQ",title:"Path of Exile",genre:"RPG",category:"rpg",icon:"POE",description:"A dark online action RPG built around deep character customization.",descriptionAr:"لعبة تقمص أدوار وأكشن عبر الإنترنت بتخصيص واسع للشخصيات.",overview:"Build an exile, explore a dark fantasy world, and shape your character through a deep skill system.",overviewAr:"أنشئ شخصية منفية واستكشف عالمًا خياليًا مظلمًا وطور أسلوب لعبك عبر شجرة مهارات واسعة.",downloadUrl:"https://www.pathofexile.com/download",requirementsUrl:"https://www.pathofexile.com/download",featured:true,added:true},
 {id:"path-of-exile-2",trailerId:"0VZsq_vJjGk",title:"Path of Exile 2",genre:"RPG",category:"rpg",icon:"POE2",description:"An action RPG adventure with a new campaign, classes, and boss encounters.",descriptionAr:"مغامرة تقمص أدوار وأكشن بحملة جديدة وشخصيات وزعماء.",overview:"Choose an exile and journey through a dark fantasy campaign with tactical combat and extensive character builds.",overviewAr:"اختر شخصيتك وخض حملة خيالية مظلمة تجمع بين القتال التكتيكي وبناء الشخصيات المتنوع.",downloadUrl:"https://www.pathofexile2.com/download",requirementsUrl:"https://www.pathofexile2.com/download",featured:true,added:true},
 {id:"war-thunder",title:"War Thunder",genre:"Simulation",category:"simulation",icon:"WT",description:"Control aircraft, tanks, and naval vehicles in large online battles.",descriptionAr:"قد الطائرات والدبابات والسفن في معارك جماعية واسعة.",overview:"Take part in vehicle combat across air, land, and sea using machines from different eras.",overviewAr:"شارك في معارك المركبات جوًا وبرًا وبحرًا باستخدام آلات من عصور مختلفة.",downloadUrl:"https://warthunder.com/en/game/about",requirementsUrl:"https://warthunder.com/en/game/about",featured:true,added:true},
 {id:"enlisted",title:"Enlisted",genre:"Shooting",category:"shooting",icon:"EN",description:"A squad-based online shooter set across World War II battlefields.",descriptionAr:"لعبة تصويب جماعية تعتمد على الفرق في ساحات الحرب العالمية الثانية.",overview:"Lead a squad of soldiers and take part in large battles with infantry, vehicles, and aircraft.",overviewAr:"قد فرقة من الجنود وشارك في معارك كبيرة تضم المشاة والمركبات والطائرات.",downloadUrl:"https://enlisted.net/en/",requirementsUrl:"https://enlisted.net/en/",featured:true,added:true},
 {id:"crossout",title:"Crossout",genre:"Action",category:"action",icon:"CO",description:"Build an armored vehicle and battle other players in a post-apocalyptic world.",descriptionAr:"صمم مركبة مدرعة وواجه لاعبين آخرين في عالم ما بعد الكارثة.",overview:"Assemble a combat vehicle from parts, then test your design in online battles.",overviewAr:"ركّب مركبة قتالية من قطع مختلفة ثم اختبر تصميمك في معارك عبر الإنترنت.",downloadUrl:"https://crossout.net/en/",requirementsUrl:"https://crossout.net/en/about",featured:true,added:true},
 {id:"world-of-tanks",title:"World of Tanks",genre:"Simulation",category:"simulation",icon:"WOT",description:"Command armored vehicles in team-based tactical battles.",descriptionAr:"قد المركبات المدرعة في معارك تكتيكية جماعية.",overview:"Choose a tank, coordinate with your team, and compete across detailed battle maps.",overviewAr:"اختر دبابة وتعاون مع فريقك وخض المعارك على خرائط متنوعة.",downloadUrl:"https://worldoftanks.com/en/game/download/",requirementsUrl:"https://worldoftanks.com/en/content/guide/general/system-requirements/",featured:false,added:true},
 {id:"world-of-warships",title:"World of Warships",genre:"Simulation",category:"simulation",icon:"WOWS",description:"Take command of historic warships in tactical naval combat.",descriptionAr:"قد سفنًا حربية تاريخية في معارك بحرية تكتيكية.",overview:"Build a fleet, learn each ship's role, and work with teammates to control the sea.",overviewAr:"كوّن أسطولًا وتعلم دور كل سفينة وتعاون مع فريقك للسيطرة على البحر.",downloadUrl:"https://worldofwarships.com/en/game/download/",requirementsUrl:"https://worldofwarships.com/en/content/guide/system-requirements/",featured:false,added:true},
 {id:"world-of-tanks-blitz",title:"World of Tanks Blitz",genre:"Shooting",category:"shooting",icon:"WOTB",description:"Fast tank battles designed for quick online matches.",descriptionAr:"معارك دبابات سريعة مصممة لمباريات قصيرة عبر الإنترنت.",overview:"Choose a vehicle, join a compact team battle, and unlock new tanks as you progress.",overviewAr:"اختر مركبة وشارك في معركة جماعية سريعة وافتح دبابات جديدة مع تقدمك.",downloadUrl:"https://wotblitz.com/",requirementsUrl:"https://wotblitz.com/",featured:false,added:true},
 {id:"delta-force",trailerId:"2iNOnt9sR_I",title:"Delta Force",genre:"Shooting",category:"shooting",icon:"DF",description:"A modern tactical shooter with large-scale warfare and objective-based missions.",descriptionAr:"لعبة تصويب تكتيكية حديثة بمعارك واسعة ومهام تعتمد على الأهداف.",overview:"Select an operator and join tactical missions across large battlefields.",overviewAr:"اختر جنديًا متخصصًا وشارك في مهام تكتيكية عبر ساحات واسعة.",downloadUrl:"https://www.playdeltaforce.com/",requirementsUrl:"https://www.playdeltaforce.com/",featured:true,added:true},
 {id:"once-human",title:"Once Human",genre:"Adventure",category:"adventure",icon:"OH",description:"Survive a strange open world shaped by supernatural forces.",descriptionAr:"حاول النجاة في عالم مفتوح غريب تشكله قوى خارقة.",overview:"Gather resources, build a shelter, and explore a dangerous post-apocalyptic world with other players.",overviewAr:"اجمع الموارد وابنِ مأوى واستكشف عالمًا خطيرًا بعد الكارثة مع لاعبين آخرين.",downloadUrl:"https://www.oncehuman.game/",requirementsUrl:"https://www.oncehuman.game/m/faq/",featured:true,added:true},
 {id:"where-winds-meet",title:"Where Winds Meet",genre:"RPG",category:"rpg",icon:"WWM",description:"Explore a wuxia open world and master martial arts combat.",descriptionAr:"استكشف عالم ووشيا مفتوحًا وأتقن القتال بالفنون القتالية.",overview:"Travel through a fictionalized historical China, shape your path, and discover stories across an open world.",overviewAr:"تنقل في الصين التاريخية المتخيلة، واختر طريقك واكتشف حكايات العالم المفتوح.",downloadUrl:"https://www.wherewindsmeetgame.com/",requirementsUrl:"https://www.wherewindsmeetgame.com/",featured:true,added:true},
 {id:"naraka-bladepoint",title:"NARAKA: BLADEPOINT",genre:"Action",category:"action",icon:"N",description:"A melee-focused battle royale with parkour and martial arts combat.",descriptionAr:"لعبة باتل رويال تركز على القتال القريب والباركور والفنون القتالية.",overview:"Move across the battlefield with grappling and parkour, then fight rivals with melee weapons.",overviewAr:"تحرك في ساحة المعركة باستخدام الخطاف والباركور وواجه خصومك بأسلحة قريبة.",downloadUrl:"https://www.narakathegame.com/download/#/",requirementsUrl:"https://www.narakathegame.com/news/guide/20230707/35647_1092868.html",featured:true,added:true},
 {id:"apex-legends",title:"Apex Legends",genre:"Shooting",category:"shooting",icon:"APEX",description:"A team-based hero shooter set in the Apex Games.",descriptionAr:"لعبة تصويب جماعية بشخصيات وقدرات مختلفة ضمن Apex Games.",overview:"Choose a Legend, coordinate with your squad, and compete in fast-paced battle royale matches.",overviewAr:"اختر شخصية ونسق مع فريقك وشارك في مباريات باتل رويال سريعة.",downloadUrl:"https://www.ea.com/games/apex-legends/buy",requirementsUrl:"https://help.ea.com/en/help/apex-legends/apex-legends/apex-legends-pc-system-requirements/",featured:true,added:true},
 {id:"pso2-new-genesis",title:"Phantasy Star Online 2: New Genesis",genre:"RPG",category:"rpg",icon:"PSO2",description:"Team up in a science-fantasy online action RPG.",descriptionAr:"تعاون في لعبة تقمص أدوار وأكشن عبر الإنترنت بطابع خيال علمي.",overview:"Create a hero, explore a futuristic world, and take on real-time combat missions with other players.",overviewAr:"أنشئ بطلك واستكشف عالمًا مستقبليًا وخض مهام قتال مباشر مع لاعبين آخرين.",downloadUrl:"https://pso2.com/download",requirementsUrl:"https://pso2.com/",featured:false,added:true},
 {id:"maplestory",title:"MapleStory",genre:"MMO",category:"mmo",icon:"MS",description:"A colorful side-scrolling online RPG with a huge world to explore.",descriptionAr:"لعبة تقمص أدوار جماعية جانبية برسوم ملونة وعالم واسع.",overview:"Choose a class, complete quests, and explore the Maple World with friends.",overviewAr:"اختر فئة وأكمل المهام واستكشف عالم مابل مع أصدقائك.",downloadUrl:"https://maplestory.nexon.net/",requirementsUrl:"https://maplestory.nexon.net/",featured:false,added:true},
 {id:"mabinogi",title:"Mabinogi",genre:"MMO",category:"mmo",icon:"MB",description:"A fantasy online RPG focused on life skills, stories, and community.",descriptionAr:"لعبة تقمص أدوار خيالية تركز على المهارات اليومية والقصص والمجتمع.",overview:"Build a life in Erinn through combat, crafting, music, exploration, and social play.",overviewAr:"اصنع حياتك في إيرين عبر القتال والحرف والموسيقى والاستكشاف والتفاعل الاجتماعي.",downloadUrl:"https://mabinogi.nexon.net/",requirementsUrl:"https://mabinogi.nexon.net/",featured:false,added:true},
 {id:"vindictus",title:"Vindictus",genre:"Action",category:"action",icon:"V",description:"A cinematic action RPG with fast, physics-driven combat.",descriptionAr:"لعبة أكشن سينمائية تعتمد على قتال سريع وتفاعلات فيزيائية.",overview:"Choose a hero and fight through story missions with responsive melee combat.",overviewAr:"اختر بطلاً وخض مهام القصة بقتال قريب سريع الاستجابة.",downloadUrl:"https://vindictus.nexon.net/",requirementsUrl:"https://vindictus.nexon.net/",featured:false,added:true},
 {id:"lineage-2",title:"Lineage II",genre:"MMO",category:"mmo",icon:"L2",description:"A long-running fantasy MMORPG with large-scale clan battles.",descriptionAr:"لعبة MMORPG خيالية قديمة تضم معارك عشائر واسعة.",overview:"Create a character, join a clan, and explore a world built around quests, raids, and PvP.",overviewAr:"أنشئ شخصية وانضم إلى عشيرة واستكشف عالمًا من المهام والغارات والقتال بين اللاعبين.",downloadUrl:"https://www.lineage2.com/en-us/",requirementsUrl:"https://www.lineage2.com/en-us/",featured:false,added:true},
 {id:"aion",title:"Aion",genre:"MMO",category:"mmo",icon:"A",description:"A fantasy MMORPG featuring aerial combat and faction conflict.",descriptionAr:"لعبة MMORPG خيالية تتميز بالقتال الجوي والصراع بين الفصائل.",overview:"Choose a faction, develop your character, and take part in quests and large battles.",overviewAr:"اختر فصيلًا وطوّر شخصيتك وشارك في المهام والمعارك الكبيرة.",downloadUrl:"https://www.aiononline.com/en-us/",requirementsUrl:"https://www.aiononline.com/en-us/",featured:false,added:true},
 {id:"blade-soul",title:"Blade & Soul",genre:"MMO",category:"mmo",icon:"BS",description:"A martial-arts fantasy MMORPG with combo-based action combat.",descriptionAr:"لعبة MMORPG خيالية بالفنون القتالية ونظام ضربات متتابعة.",overview:"Create a martial artist, explore a story-driven world, and master real-time combat.",overviewAr:"أنشئ مقاتلًا واستكشف عالمًا قصصيًا وأتقن القتال المباشر.",downloadUrl:"https://www.bladeandsoul.com/en-us/",requirementsUrl:"https://www.bladeandsoul.com/en-us/",featured:false,added:true},
 {id:"elsword",title:"Elsword",genre:"Action",category:"action",icon:"E",description:"A side-scrolling action RPG with distinct characters and combo combat.",descriptionAr:"لعبة أكشن جانبية بشخصيات متنوعة وقتال يعتمد على التتابعات.",overview:"Choose a character and class path, then fight through quests and dungeons.",overviewAr:"اختر شخصية ومسار فئة ثم قاتل عبر المهام والأبراج المحصنة.",downloadUrl:"https://elsword.koggames.com/",requirementsUrl:"https://elsword.koggames.com/",featured:false,added:true},
 {id:"cabal-online",title:"Cabal Online",genre:"MMO",category:"mmo",icon:"CO",description:"A fantasy MMORPG with stylish combo-based combat.",descriptionAr:"لعبة MMORPG خيالية بقتال أنيق يعتمد على التتابعات.",overview:"Build a warrior, explore Nevareth, and take part in quests, dungeons, and PvP.",overviewAr:"طوّر مقاتلك واستكشف نيفاريث وشارك في المهام والأبراج والقتال ضد اللاعبين.",downloadUrl:"https://cabal.playthisgame.com/",requirementsUrl:"https://cabal.playthisgame.com/",featured:false,added:true},
 {id:"dungeon-fighter-online",title:"Dungeon Fighter Online",genre:"Action",category:"action",icon:"DFO",description:"A fast side-scrolling beat-'em-up with RPG progression.",descriptionAr:"لعبة قتال جانبية سريعة مع تقدم وأدوار للشخصيات.",overview:"Pick a class, chain attacks, and clear dungeons in a 2D action world.",overviewAr:"اختر فئة واربط الهجمات معًا واجتز الأبراج في عالم أكشن ثنائي الأبعاد.",downloadUrl:"https://www.dfoneople.com/",requirementsUrl:"https://www.dfoneople.com/",featured:false,added:true},
 {id:"metin2",title:"Metin2",genre:"MMO",category:"mmo",icon:"M2",description:"A fantasy online action RPG set in a world threatened by dark stones.",descriptionAr:"لعبة أكشن وأدوار جماعية في عالم تهدده أحجار مظلمة.",overview:"Choose a kingdom, develop your character, and battle monsters and rival players.",overviewAr:"اختر مملكة وطوّر شخصيتك وحارب الوحوش واللاعبين من الممالك الأخرى.",downloadUrl:"https://en.metin2.gameforge.com/",requirementsUrl:"https://en.metin2.gameforge.com/",featured:false,added:true},
 {id:"nostale",title:"NosTale",genre:"MMO",category:"mmo",icon:"NT",description:"A colorful anime MMORPG with companions and many adventures.",descriptionAr:"لعبة MMORPG أنمي ملونة تضم رفقاء ومغامرات كثيرة.",overview:"Travel through a fantasy world, collect companions, and play story quests with friends.",overviewAr:"سافر في عالم خيالي واجمع الرفقاء وأكمل مهام القصة مع الأصدقاء.",downloadUrl:"https://en.nostale.gameforge.com/",requirementsUrl:"https://en.nostale.gameforge.com/",featured:false,added:true},
 {id:"dofus",title:"DOFUS",genre:"MMO",category:"mmo",icon:"D",description:"A tactical turn-based MMORPG with a vibrant world and deep professions.",descriptionAr:"لعبة MMORPG تكتيكية بالأدوار وعالم نابض ومهن متنوعة.",overview:"Choose a class, explore the World of Twelve, and plan each fight on a tactical grid.",overviewAr:"اختر فئة واستكشف عالم الاثني عشر وخطط لكل معركة على شبكة تكتيكية.",downloadUrl:"https://www.dofus.com/en/mmorpg/download",requirementsUrl:"https://www.dofus.com/en/mmorpg/download",featured:false,added:true},
 {id:"wakfu",title:"WAKFU",genre:"MMO",category:"mmo",icon:"W",description:"A tactical online RPG shaped by player choices and a living ecosystem.",descriptionAr:"لعبة أدوار تكتيكية تتأثر باختيارات اللاعبين ونظام بيئي حي.",overview:"Adventure through a colorful world, fight in turn-based battles, and help shape its regions.",overviewAr:"غامر في عالم ملون وخض معارك بالأدوار وساهم في تشكيل مناطقه.",downloadUrl:"https://www.wakfu.com/en/mmorpg/download",requirementsUrl:"https://www.wakfu.com/en/mmorpg/download",featured:false,added:true},
 {id:"neverwinter",title:"Neverwinter",genre:"RPG",category:"rpg",icon:"NW",description:"A free fantasy MMORPG set in the Dungeons & Dragons universe.",descriptionAr:"لعبة MMORPG خيالية مجانية تدور في عالم Dungeons & Dragons.",overview:"Create an adventurer, explore the Forgotten Realms, and take on quests and dungeons.",overviewAr:"أنشئ مغامرًا واستكشف العوالم المنسية وخض المهام والأبراج المحصنة.",downloadUrl:"https://www.playneverwinter.com/en/",requirementsUrl:"https://www.playneverwinter.com/en/",featured:false,added:true},
 {id:"star-trek-online",title:"Star Trek Online",genre:"MMO",category:"mmo",icon:"STO",description:"Explore the Star Trek universe in a free online role-playing game.",descriptionAr:"استكشف عالم Star Trek في لعبة تقمص أدوار مجانية عبر الإنترنت.",overview:"Captain a starship, build your crew, and explore missions across the Star Trek galaxy.",overviewAr:"قد سفينة فضائية وكون طاقمك واستكشف مهام مجرة Star Trek.",downloadUrl:"https://www.playstartrekonline.com/en/",requirementsUrl:"https://www.playstartrekonline.com/en/",featured:false,added:true},
 {id:"palia",title:"Palia",genre:"Casual",category:"casual",icon:"P",description:"A cozy online life-simulation adventure about crafting and community.",descriptionAr:"مغامرة محاكاة حياة هادئة عبر الإنترنت عن الصناعة والمجتمع.",overview:"Build a home, cook, garden, fish, and explore a welcoming world with friends.",overviewAr:"ابنِ منزلاً واطبخ وازرع واصطد واستكشف عالمًا ودودًا مع أصدقائك.",downloadUrl:"https://palia.com/",requirementsUrl:"https://palia.com/",featured:false,added:true}
].map((game) => ({
 ...game,
 titleAr:game.title,
 genreAr:({RPG:"تقمص أدوار",MMO:"جماعية عبر الإنترنت",Simulation:"محاكاة",Shooting:"تصويب",Action:"أكشن",Adventure:"مغامرة",Casual:"هادئة"})[game.genre] || game.genre,
 platform:"Windows PC (check publisher for supported platforms)",
 mode:"See publisher page",
 modeAr:"راجع صفحة الناشر",
 overviewAr:game.overviewAr,
 downloadSize:"Varies by version and updates; check the official launcher.",
 downloadSizeAr:"يختلف حسب الإصدار والتحديث؛ راجع المشغّل الرسمي.",
 cpu:"Check the publisher's current requirements.",ram:"Check the publisher's current requirements.",storage:"Check the publisher's current requirements and leave room for updates.",os:"See the publisher's current supported OS list.",graphics:"Check the publisher's current requirements.",
 cpuAr:"راجع متطلبات المعالج لدى الناشر.",ramAr:"راجع متطلبات الذاكرة لدى الناشر.",storageAr:"راجع المساحة المطلوبة لدى الناشر واترك مساحة للتحديثات.",osAr:"راجع أنظمة التشغيل المدعومة لدى الناشر.",graphicsAr:"راجع متطلبات بطاقة الرسومات لدى الناشر.",
 added:true
}));
GAMES.push(...EXTRA_GAMES);

const CATEGORY_META = [
    { id:"action", name:"Action", nameAr:"أكشن", icon:"⚡", description:"Fast-paced combat and adventure.", descriptionAr:"قتال ومغامرات سريعة." },
    { id:"adventure", name:"Adventure", nameAr:"مغامرات", icon:"🧭", description:"Explore worlds and stories.", descriptionAr:"استكشف العوالم والحكايات." },
    { id:"shooting", name:"Shooting", nameAr:"تصويب", icon:"🎯", description:"Aim, coordinate, and compete.", descriptionAr:"صوّب وتعاون وتنافس." },
    { id:"strategy", name:"Strategy", nameAr:"استراتيجية", icon:"♟️", description:"Plan your next move.", descriptionAr:"خطط لخطوتك القادمة." },
    { id:"rpg", name:"RPG", nameAr:"تقمص أدوار", icon:"🛡️", description:"Build a character and shape a journey.", descriptionAr:"طوّر شخصيتك وارسم رحلتك." },
    { id:"mmo", name:"MMO", nameAr:"جماعية عبر الإنترنت", icon:"🌐", description:"Join persistent worlds with others.", descriptionAr:"شارك الآخرين عوالم مستمرة." },
    { id:"simulation", name:"Simulation", nameAr:"محاكاة", icon:"🚀", description:"Control vehicles and systems.", descriptionAr:"تحكم في المركبات والأنظمة." },
    { id:"arcade", name:"Arcade", nameAr:"أركيد", icon:"🕹️", description:"Jump into quick experiences.", descriptionAr:"ابدأ تجارب لعب سريعة." },
    { id:"racing", name:"Racing", nameAr:"سباقات", icon:"🏁", description:"Race and chase better times.", descriptionAr:"تسابق وحقق أزمنة أفضل." },
    { id:"casual", name:"Casual", nameAr:"خفيفة ومسلية", icon:"🎉", description:"Relax, create, and unwind.", descriptionAr:"استرخِ وابتكر واستمتع." }
];

const GAME_ARTWORK = {
    "delta-force": "images/games/delta-force-cover.jpg",
    "dofus": "images/games/dofus-cover.jpg",
    "maplestory": "images/games/maplestory-cover.png",
    "metin2": "images/games/metin2-cover.jpg",
    "neverwinter": "images/games/neverwinter-cover.jpg",
    "nostale": "images/games/nostale-cover.jpg",
    "star-trek-online": "images/games/star-trek-online-cover.avif",
    "wakfu": "images/games/wakfu-cover.jpg",
    "path-of-exile": "images/games/path-of-exile-cover.webp",
    "path-of-exile-2": "images/games/path-of-exile-2-cover.jpg",
    "war-thunder": "images/games/war-thunder-cover.jpg",
    "enlisted": "images/games/enlisted-cover.jpg",
    "crossout": "images/games/crossout-cover.avif",
    "world-of-tanks": "images/games/world-of-tanks-cover.jpg",
    "world-of-warships": "images/games/world-of-warships-cover.jpg",
    "world-of-tanks-blitz": "images/games/world-of-tanks-blitz-cover.jpg",
    "once-human": "images/games/once-human-cover.jpg",
    "where-winds-meet": "images/games/where-winds-meet-cover.jpg",
    "naraka-bladepoint": "images/games/naraka-bladepoint-cover.jpg",
    "apex-legends": "images/games/apex-legends-cover.jpg",
    "pso2-new-genesis": "images/games/pso2-new-genesis-cover.webp",
    "mabinogi": "images/games/mabinogi-cover.webp",
    "vindictus": "images/games/vindictus-cover.jpg",
    "lineage-2": "images/games/lineage-2-cover.jpg",
    "aion": "images/games/aion-cover.jpg",
    "blade-soul": "images/games/blade-soul-cover.jpg",
    "elsword": "images/games/elsword-cover.webp",
    "dungeon-fighter-online": "images/games/dungeon-fighter-online-cover.jpg",
    "cabal-online": "images/games/cabal-online-cover.jpg",
    "palia": "images/games/palia-cover.avif",
    "valorant": "images/games/valorant-cover.avif",
    "league-of-legends": "images/games/league-of-legends-cover.webp",
    "teamfight-tactics": "images/games/teamfight-tactics-cover.avif",
    "genshin-impact": "images/games/genshin-impact-cover.jpg",
    "honkai-star-rail": "images/games/honkai-star-rail-cover.avif",
    "zenless-zone-zero": "images/games/zenless-zone-zero-cover.jpg",
    "wuthering-waves": "images/games/wuthering-waves-cover.jpg",
    "warframe": "images/games/warframe-cover.jpg",
    "roblox": "images/games/roblox-cover.jpg",
    "minecraft": "images/games/minecraft-cover.jpg",
    "world-of-warcraft": "images/games/world-of-warcraft-cover.jpg",
    "hearthstone": "images/games/hearthstone-cover.jpg",
    "starcraft-2": "images/games/starcraft-2-cover.jpg",
    "overwatch-2": "images/games/overwatch-2-cover.jpg",
    "albion-online": "images/games/albion-online-cover.jpg",
    "runescape": "images/games/runescape-cover.jpg",
    "old-school-runescape": "images/games/old-school-runescape-cover.jpg",
    "guild-wars-2": "images/games/guild-wars-2-cover.jpg",
    "rainbow-six-siege": "images/games/rainbow-six-siege-cover.webp",
    "trackmania": "images/games/trackmania-cover.jpg",
};


const WEEKLY_PICKS = ["valorant","genshin-impact","league-of-legends","minecraft","warframe","roblox","world-of-warcraft","path-of-exile","delta-force","once-human"];

// Static hosting can only remember download button clicks in this browser.
const DOWNLOAD_CLICKS_KEY = "gamebox-download-clicks";

function getDownloadClicks() {
    try {
        const saved = JSON.parse(localStorage.getItem(DOWNLOAD_CLICKS_KEY) || "{}");
        return saved && typeof saved === "object" ? saved : {};
    } catch {
        return {};
    }
}

function getTopDownloadedGames(preferredGames = []) {
    const clicks = getDownloadClicks();
    const tracked = Object.entries(clicks)
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .filter(([id, count]) => GAMES.some((game) => game.id === id) && Number(count) > 0)
        .map(([id]) => GAMES.find((game) => game.id === id));
    const fallback = WEEKLY_PICKS.map((id) => GAMES.find((game) => game.id === id));
    const ranked = [...preferredGames, ...tracked, ...fallback];
    return [...new Map(ranked.filter(Boolean).map((game) => [game.id, game])).values()].slice(0, 3);
}

let heroSlides = [];
let heroSlideIndex = 0;

function showHeroSlide(index) {
    const stage = document.getElementById("heroSlideshow");
    if (!stage) return;

    if (!heroSlides.length) return;
    heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
    stage.querySelectorAll(".hero-slide").forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === heroSlideIndex);
    });
}

function renderHeroBackground(preferredGames = []) {
    const stage = document.getElementById("heroSlideshow");
    if (!stage) return;

    heroSlides = getTopDownloadedGames(preferredGames);
    heroSlideIndex = 0;
    stage.innerHTML = heroSlides.map((game, index) => {
        const artwork = GAME_ARTWORK[game.id] || `images/games/${game.id}.svg`;
        return `<img class="hero-slide${index === 0 ? " is-active" : ""}" src="${artwork}" alt="" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
    }).join("");
    showHeroSlide(heroSlideIndex);
}

async function syncHeroLeaderboard() {
    if (!window.gameboxSupabase) return;

    try {
        const { data, error } = await window.gameboxSupabase.rpc("get_top_downloaded_game");
        if (error || !data?.length) return;

        const leaders = data.map((row) => GAMES.find((game) => game.id === row.game_id)).filter(Boolean);
        if (leaders.length) renderHeroBackground(leaders);
    } catch {
        // Keep the local and fallback picks if the database is unavailable.
    }
}

document.addEventListener("click", (event) => {
    const button = event.target.closest(".download-button");
    if (!button) return;

    const gameId = new URLSearchParams(window.location.search).get("game");
    if (!gameId || !GAMES.some((game) => game.id === gameId)) return;

    const clicks = getDownloadClicks();
    clicks[gameId] = (Number(clicks[gameId]) || 0) + 1;
    try {
        localStorage.setItem(DOWNLOAD_CLICKS_KEY, JSON.stringify(clicks));
    } catch {
        // The official download still opens if browser storage is unavailable.
    }

    if (window.gameboxSupabase) {
        window.gameboxSupabase.rpc("record_game_download", { p_game_id: gameId })
            .then(({ error }) => {
                if (!error) syncHeroLeaderboard();
            })
            .catch(() => {
                // Local counts remain available if the database is unavailable.
            });
    }
});

window.addEventListener("storage", (event) => {
    if (event.key === DOWNLOAD_CLICKS_KEY) renderHeroBackground();
});
const isArabic = () => localStorage.getItem("gamebox-language") === "ar";
const tx = (en, ar) => isArabic() ? ar : en;
const gameTitle = game => isArabic() ? (game.titleAr || game.title) : game.title;
const gameGenre = game => isArabic() ? (game.genreAr || ({Action:"أكشن",Adventure:"مغامرات",Shooting:"تصويب",Strategy:"استراتيجية",RPG:"تقمص أدوار",Arcade:"أركيد",Racing:"سباقات",Simulation:"محاكاة",MMO:"جماعية عبر الإنترنت",Casual:"خفيفة ومسلية"}[game.genre] || game.genre)) : game.genre;
const gameDescription = game => isArabic() ? (game.descriptionAr || game.description) : game.description;
const gameOverview = game => isArabic() ? (game.overviewAr || game.overview) : game.overview;
function applyLanguage() {
    const lang = isArabic() ? "ar" : "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("is-rtl", lang === "ar");
    document.querySelectorAll("[data-en][data-ar]").forEach(el => {
        const value = el.dataset[lang];
        if (el.hasAttribute("data-placeholder")) el.placeholder = value;
        else el.textContent = value;
    });
    const button = document.getElementById("languageToggle");
    if (button) button.textContent = lang === "ar" ? "English" : "العربية";
}
function initLanguage() {
    document.getElementById("languageToggle")?.addEventListener("click", () => {
        localStorage.setItem("gamebox-language", isArabic() ? "en" : "ar");
        applyLanguage();
        renderHome(); renderAllGames(); renderCategories(); renderTrending(); renderDetails();
    });
    applyLanguage();
}
function gameArt(game, extraClass = "") {
    const artwork = GAME_ARTWORK[game.id] || `images/games/${game.id}.svg`;
    return `<div class="game-art art-${game.category} art-${game.id} ${extraClass}">
        <img class="game-art-image" src="${artwork}" alt="${gameTitle(game)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='images/games/${game.id}.svg'">
    </div>`;
}
function gameCard(game, compact = false) {
    const typeClass = compact ? "card" : "game-card";
    const genre = gameGenre(game);
    const title = gameTitle(game);
    const desc = gameDescription(game);
    return `<a class="${typeClass}" href="game-details.html?game=${encodeURIComponent(game.id)}" aria-label="${tx("View details for","عرض تفاصيل لعبة")} ${title}">
        ${gameArt(game)}
        <div class="${compact ? "card-info" : "game-info"}">
            <span class="game-category">${genre}</span><h3>${title}</h3>
            ${compact ? "" : `<p>${desc}</p>`}
            <span class="details-link" aria-hidden="true">↗</span>
        </div>
    </a>`;
}
function renderHome() {
    const latest = document.getElementById("latestGames");
    if (latest) latest.innerHTML = GAMES.filter(game => game.added).slice(0, 10).map(game => gameCard(game, true)).join("");
    const popular = document.getElementById("weeklyGames");
    if (popular) popular.innerHTML = WEEKLY_PICKS.map(id => GAMES.find(game => game.id === id)).filter(Boolean).map(game => gameCard(game, true)).join("");
    const catGrid = document.getElementById("homeCategories");
    if (catGrid) catGrid.innerHTML = CATEGORY_META.slice(0, 8).map((category, index) => {
        const count = GAMES.filter(game => game.category === category.id).length;
        return `<a class="home-category category-tone-${index+1}" href="all-games.html?category=${category.id}">
            <span class="home-category-art" aria-hidden="true">${category.icon}</span>
            <span class="home-category-title">${isArabic() ? category.nameAr : category.name}</span>
            <span class="home-category-count">${count} ${tx("games","ألعاب")}</span>
        </a>`;
    }).join("");
    const form = document.getElementById("homeSearchForm");
    const input = document.getElementById("homeSearch");
    if (form && input && !form.dataset.bound) {
        form.dataset.bound = "true";
        form.addEventListener("submit", event => {
            event.preventDefault();
            const destination = new URL("all-games.html", window.location.href);
            if (input.value.trim()) destination.searchParams.set("search", input.value.trim());
            window.location.href = destination.href;
        });
    }
}
function renderAllGames() {
    const grid = document.getElementById("gamesGrid");
    if (!grid) return;
    const search = document.getElementById("gameSearch");
    const filter = document.getElementById("genreFilter");
    const empty = document.getElementById("noGamesMessage");
    const count = document.getElementById("resultsCount");
    filter.innerHTML = `<option value="all">${tx("All categories","كل التصنيفات")}</option>` + CATEGORY_META.map(c => `<option value="${c.id}">${isArabic()?c.nameAr:c.name}</option>`).join("");
    const params = new URLSearchParams(window.location.search);
    const wanted = (params.get("category") || "all").toLowerCase();
    filter.value = CATEGORY_META.some(c => c.id === wanted) ? wanted : "all";
    if (!search.dataset.initialized) { search.value = params.get("search") || ""; search.dataset.initialized = "true"; }
    function update() {
        const term = search.value.trim().toLocaleLowerCase();
        const category = filter.value;
        const visible = GAMES.filter(game => `${game.title} ${game.titleAr||""} ${game.genre} ${game.description} ${game.descriptionAr||""}`.toLocaleLowerCase().includes(term) && (category === "all" || game.category === category));
        grid.innerHTML = visible.map(game => gameCard(game)).join("");
        empty.hidden = visible.length > 0;
        if (count) count.textContent = `${visible.length} ${tx(visible.length === 1 ? "game found" : "games found", "لعبة")}`;
    }
    if (!search.dataset.bound) { search.addEventListener("input", update); filter.addEventListener("change", update); search.dataset.bound="true"; }
    update();
}
function renderCategories() {
    const grid = document.getElementById("categoriesGrid");
    if (!grid) return;
    grid.innerHTML = CATEGORY_META.map((category, index) => {
        const count = GAMES.filter(game => game.category === category.id).length;
        return `<a class="category-card category-tone-${index+1}" href="all-games.html?category=${category.id}">
            <span class="category-icon" aria-hidden="true">${category.icon}</span><span class="category-arrow" aria-hidden="true">↗</span>
            <h3>${isArabic()?category.nameAr:category.name}</h3><p>${isArabic()?category.descriptionAr:category.description}</p><span class="category-count">${count} ${tx("games","ألعاب")}</span>
        </a>`;
    }).join("");
}
function renderTrending() {
    const grid = document.getElementById("trendingGames");
    if (!grid) return;
    grid.innerHTML = WEEKLY_PICKS.map(id => GAMES.find(game => game.id === id)).filter(Boolean).map((game,index) => `<div class="ranked-card"><span class="rank-badge">#${index+1}</span>${gameCard(game)}</div>`).join("");
}
function renderDetails() {
    const page = document.getElementById("gameDetails");
    if (!page) return;
    const id = new URLSearchParams(window.location.search).get("game");
    const game = GAMES.find(item => item.id === id);
    if (!game) {
        page.innerHTML = `<section class="not-found"><span aria-hidden="true">🎮</span><h1>${tx("Game not found","اللعبة غير موجودة")}</h1><p>${tx("Choose a game from the catalog to see its details.","اختر لعبة من القائمة لعرض تفاصيلها.")}</p><a class="primary-button" href="all-games.html">${tx("Browse all 50 games","تصفح كل الألعاب الـ 50")}</a></section>`;
        return;
    }
    document.title = `${gameTitle(game)} | GAME BOX`;
    const get = (enKey, arKey) => isArabic() ? (game[arKey] || game[enKey]) : game[enKey];
    const specs = [
        [tx("Processor (CPU)","المعالج (CPU)"),get("cpu","cpuAr"),"🧠"],
        [tx("Memory (RAM)","الذاكرة (RAM)"),get("ram","ramAr"),"💾"],
        [tx("Free storage","مساحة التخزين"),get("storage","storageAr"),"📦"],
        [tx("Operating system","نظام التشغيل"),get("os","osAr"),"🖥️"],
        [tx("Graphics","كرت الشاشة"),get("graphics","graphicsAr"),"🎨"],
        [tx("Download size","حجم التنزيل"),get("downloadSize","downloadSizeAr"),"⬇️"]
    ];
    page.innerHTML = `<a class="back-link" href="all-games.html">${tx("← Back to All Games","→ العودة لكل الألعاب")}</a>
      <section class="game-hero"><div class="game-cover">${gameArt(game)}<span class="cover-label">GAME BOX</span></div>
      <div class="game-intro"><p class="eyebrow">${gameGenre(game)}</p><h1>${gameTitle(game)}</h1>
      <p class="intro-copy">${gameDescription(game)}</p><div class="quick-facts">
      <div><span class="fact-label">${tx("Category","التصنيف")}</span><strong>${gameGenre(game)}</strong></div>
      <div><span class="fact-label">${tx("Platform","المنصة")}</span><strong>${isArabic() ? (game.platformAr||game.platform) : game.platform}</strong></div>
      <div><span class="fact-label">${tx("Game mode","نمط اللعب")}</span><strong>${isArabic() ? (game.modeAr||game.mode) : game.mode}</strong></div></div>
      <a class="primary-button download-button" href="${game.downloadUrl}" target="_blank" rel="noopener noreferrer">${tx("Download from publisher","التنزيل من الناشر الرسمي")} <span aria-hidden="true">↗</span></a>
      <p class="external-note">${tx("The button opens the publisher's official page or launcher. A click does not confirm that a download finished.","الزر يفتح صفحة الناشر أو مشغّله الرسمي. الضغط على الزر لا يؤكد اكتمال التنزيل.")}</p></div></section>
      <section class="content-section trailer-section"><div class="section-heading"><p class="eyebrow">${tx("OFFICIAL GAME TRAILER","إعلان اللعبة الرسمي")}</p><h2>${tx("Watch the trailer","شاهد تريلر اللعبة")}</h2><p class="section-subtitle">${tx("Open the official game trailer on YouTube.","افتح تريلر اللعبة على يوتيوب.")}</p></div>
      ${(() => { const trailerUrl = game.trailerId ? `https://www.youtube.com/watch?v=${game.trailerId}` : `https://www.youtube.com/results?search_query=${encodeURIComponent(`${gameTitle(game)} official game trailer`)}`; return `<a class="trailer-poster" href="${trailerUrl}" target="_blank" rel="noopener" referrerpolicy="strict-origin-when-cross-origin" aria-label="${tx("Watch the trailer on YouTube","شاهد التريلر على يوتيوب")}: ${gameTitle(game)}">${gameArt(game,"trailer-art")}<span class="trailer-play" aria-hidden="true">▶</span><span class="trailer-caption">${tx("WATCH TRAILER ON YOUTUBE ↗","شاهد التريلر على يوتيوب ↗")}</span></a>`; })()}</section>
      <section class="content-section requirements-section"><div class="section-heading"><p class="eyebrow">${tx("BEFORE YOU DOWNLOAD","قبل التنزيل")}</p><h2>${tx("PC requirements & download info","متطلبات الكمبيوتر ومعلومات التنزيل")}</h2><p class="section-subtitle">${tx("Specifications and file sizes can change. Use the publisher's current page to confirm the requirements for this version.","قد تتغير المواصفات وأحجام الملفات. راجع صفحة الناشر الحالية للتأكد من متطلبات هذا الإصدار.")}</p></div>
      <div class="spec-grid">${specs.map(([label,value,icon]) => `<article class="spec-card"><span class="spec-icon" aria-hidden="true">${icon}</span><div><p>${label}</p><h3>${value}</h3></div></article>`).join("")}</div>
      <p class="notice">${tx("Installer download size is not always the same as installed storage. Leave extra space for updates and unpacking.","حجم ملف التثبيت ليس دائمًا مثل مساحة اللعبة بعد تثبيتها. اترك مساحة إضافية للتحديثات وفك الملفات.")}</p>
      <a class="requirements-source" href="${game.requirementsUrl || game.downloadUrl}" target="_blank" rel="noopener noreferrer">${tx("Check official requirements ↗","تحقق من المتطلبات الرسمية ↗")}</a></section>
      <section class="content-section"><div class="section-heading"><p class="eyebrow">${tx("ABOUT THE GAME","عن اللعبة")}</p><h2>${tx("Overview","نبذة")}</h2></div><p class="body-copy">${gameOverview(game)}</p></section>
      <section class="security-section"><div class="security-icon" aria-hidden="true">🛡️</div><div class="security-copy"><p class="eyebrow">${tx("SAFE DOWNLOADS","تنزيل آمن")}</p><h2>${tx("Use the official publisher link","استخدم رابط الناشر الرسمي")}</h2><p>${tx("GAME BOX does not host game files. Downloads continue on the publisher's own site or launcher.","موقع GAME BOX لا يستضيف ملفات الألعاب. يكمل التنزيل من موقع الناشر أو مشغّله الرسمي.")}</p></div></section>`;
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    renderHeroBackground();
    document.getElementById("heroNextSlide")?.addEventListener("click", () => showHeroSlide(heroSlideIndex + 1));
    window.setInterval(() => {
        if (document.visibilityState === "visible") showHeroSlide(heroSlideIndex + 1);
    }, 15000);
    syncHeroLeaderboard();
    window.setInterval(() => {
        if (document.visibilityState === "visible") syncHeroLeaderboard();
    }, 60000);
    renderHome(); renderAllGames(); renderCategories(); renderTrending(); renderDetails();
});
