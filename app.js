const GAMES = [
    { id:"valorant", title:"VALORANT", genre:"Shooting", category:"shooting", icon:"V", description:"A tactical 5v5 shooter with agents and unique abilities.", overview:"Play round-based tactical matches, choose an agent, and work with your team. The official Riot download page provides the current PC installer.", platform:"Windows PC", mode:"Online multiplayer", downloadUrl:"https://playvalorant.com/en-us/download/", requirementsUrl:"https://playvalorant.com/en-us/specs/", downloadSize:"يتغير مع التحديثات؛ اعرف الحجم الحالي من مُثبّت Riot.", cpu:"Intel Core 2 Duo E8400 أو AMD Athlon 200GE", ram:"4 GB", storage:"المساحة المطلوبة للتثبيت يحددها مُثبّت Riot وقت التنزيل.", os:"Windows 10 (Build 19041+) أو Windows 11، 64-bit", graphics:"Intel HD 4000 أو AMD Radeon R5 200؛ يلزم 1 GB VRAM", featured:true },
    { id:"league-of-legends", title:"League of Legends", genre:"Strategy", category:"strategy", icon:"LoL", description:"A competitive 5v5 strategy game built around teamwork and champions.", overview:"Choose a champion, coordinate with teammates, and compete to destroy the opposing Nexus. The official Riot page installs the Riot client and League of Legends.", platform:"Windows PC / macOS", mode:"Online multiplayer", downloadUrl:"https://www.leagueoflegends.com/en-us/download/", requirementsUrl:"https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201752654-Minimum-and-Recommended-System-Requirements", downloadSize:"يتغير حسب إصدار العميل والتحديث.", cpu:"Intel Core i3-530 أو AMD A6-3650", ram:"2 GB", storage:"16 GB مساحة متاحة؛ SSD موصى به", os:"Windows 10 (Build 19041+) أو Windows 11، 64-bit", graphics:"DirectX 11 feature level 11_0؛ GeForce 400 / AMD HD 6570 / Intel HD 4600", featured:true },
    { id:"teamfight-tactics", title:"Teamfight Tactics", genre:"Strategy", category:"strategy", icon:"TFT", description:"An auto-battler where you build a team and adapt your strategy each round.", overview:"Teamfight Tactics is Riot's round-based strategy game. On PC, install it through the official Riot/League client; the current download size is shown by that client.", platform:"Windows PC / macOS / Mobile", mode:"Online strategy", downloadUrl:"https://www.leagueoflegends.com/en-us/download/", requirementsUrl:"https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201752654-Minimum-and-Recommended-System-Requirements", downloadSize:"يُنزّل عبر عميل Riot؛ الحجم بيتغير مع التحديثات.", cpu:"نفس الحد الأدنى لعميل League of Legends على الكمبيوتر", ram:"2 GB (متطلبات عميل League of Legends)", storage:"16 GB لعميل League of Legends", os:"Windows 10 (Build 19041+) أو Windows 11، 64-bit", graphics:"متطلبات DirectX 11 لعميل League of Legends", featured:false },
    { id:"genshin-impact", title:"Genshin Impact", genre:"Adventure", category:"adventure", icon:"✦", description:"Explore Teyvat in an open-world action RPG.", overview:"Explore the regions of Teyvat, meet its characters, and play through a story-driven open world. HoYoverse distributes the PC game through its official launcher.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://genshin.hoyoverse.com/en/download", requirementsUrl:"https://genshin.hoyoverse.com/en/news/detail/158502", downloadSize:"يتغير حسب الإصدار وحزم الصوت؛ يُعرض الحجم الحالي في HoYoPlay.", cpu:"Intel Core i5 من الجيل السادس أو AMD Ryzen مكافئ", ram:"8 GB", storage:"احجز مساحة التثبيت التي يعرضها HoYoPlay؛ حجم اللعبة يتغير مع التحديثات.", os:"Windows 10 64-bit", graphics:"NVIDIA GeForce GTX 1050 أو مكافئ؛ DirectX 11", featured:true },
    { id:"honkai-star-rail", title:"Honkai: Star Rail", genre:"Adventure", category:"adventure", icon:"HSR", description:"A story-driven space fantasy RPG with turn-based battles.", overview:"Travel with the Astral Express, visit different worlds, and build a team for turn-based combat. Download the official PC client from HoYoverse.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://hsr.hoyoverse.com/en-us/", requirementsUrl:"https://hsr.hoyoverse.com/zh-tw/news/111195", downloadSize:"يتغير حسب الإصدار وحزم الصوت؛ راجع HoYoPlay.", cpu:"Intel Core i3 أو مكافئ (الحد الأدنى المنشور في دليل PC)", ram:"6 GB", storage:"20 GB مساحة متاحة وفق دليل PC المنشور؛ تحقّق من الحجم الحالي في HoYoPlay.", os:"Windows 7 64-bit أو أحدث حسب دليل PC المنشور", graphics:"بطاقة منفصلة؛ GTX 650 أو أعلى وفق دليل PC المنشور", featured:true },
    { id:"zenless-zone-zero", title:"Zenless Zone Zero", genre:"Action", category:"action", icon:"ZZZ", description:"A stylish urban action RPG with fast team combat.", overview:"Explore New Eridu and take on combat missions with a squad of Agents. Use the HoYoverse PC launcher from the official game site.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://zenless.hoyoverse.com/en-us/", requirementsUrl:"https://zenless.hoyoverse.com/en-us/news/124540", downloadSize:"التنزيل يتغير مع التحديثات؛ آخر حجم يظهر داخل HoYoPlay.", cpu:"Intel Core i5 من الجيل السابع", ram:"8 GB", storage:"75 GB مساحة متاحة على الكمبيوتر؛ يلزم فراغ إضافي لفك الملفات أثناء التثبيت.", os:"Windows 10 64-bit أو أحدث؛ DirectX 11.1+", graphics:"NVIDIA GeForce GTX 970 أو أعلى", featured:true },
    { id:"wuthering-waves", title:"Wuthering Waves", genre:"Adventure", category:"adventure", icon:"WW", description:"An open-world action RPG focused on exploration and combat.", overview:"Explore a post-apocalyptic open world and fight using a team of Resonators. Download the PC launcher from Kuro Games' official site.", platform:"Windows PC, PlayStation, mobile", mode:"Single-player with online features", downloadUrl:"https://wutheringwaves.kurogames.com/en/", requirementsUrl:"https://wutheringwaves.kurogames.com/zh-tw/main/news/detail/4388", downloadSize:"يتغير حسب النسخة والتحديث؛ يُعرض في لانشر اللعبة.", cpu:"Intel Core i5 من الجيل التاسع أو Ryzen 2700", ram:"16 GB", storage:"130 GB مساحة متاحة وفق تحديث الناشر المنشور في 2026.", os:"Windows 10 64-bit", graphics:"GeForce GTX 1060 / Radeon RX 570 / Intel Arc A380", featured:true },
    { id:"warframe", title:"Warframe", genre:"Action", category:"action", icon:"W", description:"A cooperative sci-fi action game set across the Origin System.", overview:"Awaken as a Tenno and take on missions across a science-fiction universe. The official Digital Extremes page provides the PC installer and optional standalone files.", platform:"Windows PC and consoles", mode:"Online co-op", downloadUrl:"https://www.warframe.com/en/download", requirementsUrl:"https://support.warframe.com/hc/en-us/articles/200182230-What-are-the-minimum-PC-specs-for-Warframe", downloadSize:"المُثبّت المنفصل منشور بحجم 92.77 MB، ثم ينزّل ملفات اللعبة الكبيرة؛ راجع الصفحة الرسمية.", cpu:"Intel Core i7-860 / i5-750 أو AMD FX-4100 (دعم SSE 4.2)", ram:"4 GB", storage:"75 GB مساحة متاحة", os:"Windows 7 64-bit أو أحدث حسب متطلبات الناشر", graphics:"بطاقة متوافقة مع DirectX 11 أو أحدث", featured:true },
    { id:"roblox", title:"Roblox", genre:"Arcade", category:"arcade", icon:"R", description:"Play millions of community-created games and experiences.", overview:"Roblox is a platform for user-created experiences. On Windows, download the current Roblox - Windows app from the Microsoft Store; Roblox says this is the new app needed to keep playing on Windows.", platform:"Windows PC, Mac, mobile, consoles", mode:"Online experiences", downloadUrl:"https://apps.microsoft.com/detail/9PMF91N3LZ3M?hl=en-us&gl=US", requirementsUrl:"https://en.help.roblox.com/hc/en-us/articles/40842585714196-Get-the-New-and-Improved-Roblox-App-in-the-Microsoft-Store", downloadSize:"حجم التطبيق يظهر في Microsoft Store ويتغير مع التحديثات.", cpu:"معالج حديث (2005 أو أحدث) بسرعة 1.6 GHz أو أعلى", ram:"1 GB على الأقل (توصية Roblox)", storage:"300 MB مساحة تخزين موصى بها للتثبيت", os:"Windows 10 أو Windows 11، 64-bit", graphics:"دعم DirectX 10 أو أعلى", featured:true },
    { id:"minecraft", title:"Minecraft: Java & Bedrock", genre:"Adventure", category:"adventure", icon:"M", description:"Build, explore, and survive in block-based worlds.", overview:"Play in creative or survival worlds and choose between Java and Bedrock on PC. Download the official Minecraft Launcher from Minecraft.net.", platform:"Windows PC, Mac, Linux, consoles, mobile", mode:"Single-player and online multiplayer", downloadUrl:"https://www.minecraft.net/en-us/download", requirementsUrl:"https://help.minecraft.net/hc/en-us/articles/4409225939853-Minecraft-Java-Edition-System-Requirements", downloadSize:"يتغير حسب الإصدار والعوالم؛ اللانشر الرسمي ينزّل ملفات اللعبة عند التشغيل.", cpu:"تحقق من متطلبات الإصدار في صفحة Minecraft الرسمية؛ تختلف بين Java وBedrock.", ram:"تختلف حسب الإصدار وحجم العالم والإضافات.", storage:"تختلف حسب الإصدار والعوالم؛ اترك مساحة إضافية للعوالم والتحديثات.", os:"Windows 10 أو أحدث للعب عبر الإنترنت والتحديثات", graphics:"تحقق من المتطلبات الحالية للإصدار الذي ستنزّله من الصفحة الرسمية.", featured:false },
    { id:"world-of-warcraft", title:"World of Warcraft", genre:"Adventure", category:"adventure", icon:"WoW", description:"Explore Azeroth in a long-running online fantasy RPG.", overview:"Create a hero, explore Azeroth, and join other players. The official installer uses Blizzard's Battle.net desktop app.", platform:"Windows PC / Mac", mode:"Online multiplayer", downloadUrl:"https://download.battle.net/en-us/desktop", requirementsUrl:"https://eu.shop.battle.net/en-us/product/world-of-warcraft-subscription", downloadSize:"يتغير مع التحديثات والتوسعات؛ يظهر في Battle.net قبل التثبيت.", cpu:"4 cores, 3.0 GHz; Intel Core Haswell الجيل الرابع أو AMD Ryzen Zen", ram:"8 GB", storage:"128 GB مساحة متاحة على SSD", os:"Windows 10 64-bit (تحديث مايو 2019 أو أحدث)", graphics:"GPU يدعم DirectX 12 بذاكرة 3 GB", featured:false },
    { id:"hearthstone", title:"Hearthstone", genre:"Strategy", category:"strategy", icon:"H", description:"A digital card game with quick tactical matches.", overview:"Build a deck, play cards, and compete in different game modes. Download the official PC client through Blizzard's Battle.net app.", platform:"Windows PC, Mac, iOS, Android", mode:"Online card game", downloadUrl:"https://hearthstone.blizzard.com/en-us", requirementsUrl:"https://us.support.blizzard.com/en/article/28991", downloadSize:"يتغير حسب الإصدار والموارد؛ راجع Battle.net.", cpu:"Intel Core i3-6100 أو AMD A10-7850K", ram:"8 GB", storage:"12 GB مساحة متاحة", os:"Windows 10 64-bit (21H1)", graphics:"NVIDIA GeForce GTX 660 أو AMD Radeon R9 280X أو أعلى", featured:true },
    { id:"starcraft-2", title:"StarCraft II", genre:"Strategy", category:"strategy", icon:"SC2", description:"Command armies in a sci-fi real-time strategy game.", overview:"Play sci-fi campaigns and real-time strategy matches. Install the current PC client from Blizzard's official Battle.net app.", platform:"Windows PC / Mac", mode:"Campaign and online multiplayer", downloadUrl:"https://starcraft2.blizzard.com/en-us/", requirementsUrl:"https://kr.shop.battle.net/en-us/product/starcraft-ii", downloadSize:"يتغير حسب الحملات والملفات المثبتة؛ يعرض Battle.net الحجم الحالي.", cpu:"Intel Core 2 Duo أو AMD Athlon 64 X2 5600+", ram:"2 GB", storage:"30 GB مساحة متاحة", os:"Windows 10", graphics:"GeForce 7600 GT أو Radeon HD 2600 XT أو Intel HD Graphics 3000", featured:false },
    { id:"overwatch-2", title:"Overwatch 2", genre:"Shooting", category:"shooting", icon:"OW", description:"A team-based hero shooter with varied objectives and play styles.", overview:"Choose a hero, work with your team, and compete in objective-based matches. Download through Blizzard's official Battle.net app.", platform:"Windows PC and consoles", mode:"Online team multiplayer", downloadUrl:"https://overwatch.blizzard.com/en-us/", requirementsUrl:"https://us.shop.battle.net/en-us/product/overwatch", downloadSize:"يتغير مع تحديثات اللعبة؛ يظهر الحجم الحالي في Battle.net.", cpu:"Intel Core i3 أو AMD Phenom X3 8650", ram:"6 GB", storage:"50 GB مساحة متاحة", os:"Windows 10 64-bit (آخر Service Pack)", graphics:"GeForce GTX 600 series أو AMD Radeon HD 7000 series", featured:true },
    { id:"albion-online", title:"Albion Online", genre:"RPG", category:"rpg", icon:"A", description:"A cross-platform fantasy sandbox MMO with a player-driven world.", overview:"Gather, craft, trade, and fight in a shared sandbox world. Download the Windows client directly from Albion Online's official site.", platform:"Windows PC, Mac, Linux, mobile", mode:"Online multiplayer", downloadUrl:"https://albiononline.com/download", requirementsUrl:"https://albiononline.com/download", downloadSize:"حجم التنزيل يتغير؛ يظهر داخل المُثبّت الرسمي.", cpu:"Intel أو AMD يدعم SSE2", ram:"4 GB (8 GB موصى بها)", storage:"الموقع الرسمي لا يحدد رقم مساحة ثابتًا للكمبيوتر؛ راجع المُثبّت.", os:"Windows 10 21H1 (Build 19043) أو أحدث", graphics:"بطاقة تدعم DirectX 10 أو أعلى؛ SSD موصى به", featured:false },
    { id:"runescape", title:"RuneScape", genre:"RPG", category:"rpg", icon:"RS", description:"An online fantasy RPG with quests, skills, and a persistent world.", overview:"Train skills, complete quests, and explore the world of Gielinor. Use the official RuneScape download page and Jagex Launcher.", platform:"Windows PC, Mac, mobile", mode:"Online multiplayer", downloadUrl:"https://www.runescape.com/download", requirementsUrl:"https://support.runescape.com/hc/en-gb/articles/207482995-Graphical-Problems", downloadSize:"التنزيل يتغير؛ الموقع يذكر مساحة 8 GB للعميل والكاش.", cpu:"Intel Core i3-6100 أو AMD بسرعة 2.4 GHz (المواصفات المنشورة الموصى بها)", ram:"8 GB (المواصفات المنشورة الموصى بها)", storage:"8 GB على الأقل لملفات العميل والكاش", os:"Windows 10 أو أحدث، 64-bit", graphics:"GeForce GTX 600 series أو Radeon R7 260 أو Intel UHD 610", featured:false },
    { id:"old-school-runescape", title:"Old School RuneScape", genre:"RPG", category:"rpg", icon:"OSRS", description:"A classic-style online RPG with quests and a huge open world.", overview:"Return to a classic RuneScape experience with quests, skills, and online play. Download from the official RuneScape site or Jagex Launcher.", platform:"Windows PC, Mac, mobile", mode:"Online multiplayer", downloadUrl:"https://oldschool.runescape.com/", requirementsUrl:"https://support.runescape.com/hc/en-gb/articles/207482995-Graphical-Problems", downloadSize:"حجم التنزيل يتغير؛ صفحة الناشر تذكر 200 MB مساحة تخزين للكمبيوتر.", cpu:"Intel Core i3-6100 أو AMD بسرعة 2.4 GHz (المواصفات المنشورة الموصى بها)", ram:"8 GB (المواصفات المنشورة الموصى بها)", storage:"200 MB مساحة متاحة للعميل", os:"Windows 10 أو أحدث، 64-bit", graphics:"GeForce GTX 600 series أو Radeon R7 260 أو Intel UHD 610", featured:true },
    { id:"guild-wars-2", title:"Guild Wars 2", genre:"RPG", category:"rpg", icon:"GW2", description:"Explore Tyria in a story-rich online role-playing game.", overview:"Create a hero, explore Tyria, and take part in cooperative events. The official ArenaNet support site provides the client download and setup steps.", platform:"Windows PC", mode:"Online multiplayer", downloadUrl:"https://help.guildwars2.com/hc/en-us/articles/201862968-Download-the-Guild-Wars-2-Client", requirementsUrl:"https://help.guildwars2.com/hc/en-us/articles/201862958-Minimum-System-Requirements", downloadSize:"العميل ينزّل ملفات اللعبة بعد فتحه؛ الحجم الحالي يظهر أثناء التنزيل.", cpu:"Intel Core i3 بسرعة 3.4 GHz أو AMD Athlon X4 بسرعة 3.8 GHz", ram:"8 GB", storage:"80 GB مساحة متاحة", os:"Windows 7 أو أحدث، 64-bit؛ DirectX 11", graphics:"NVIDIA GeForce GTX 680 أو AMD Radeon HD 7970", featured:false },
    { id:"rainbow-six-siege", title:"Tom Clancy's Rainbow Six Siege", genre:"Shooting", category:"shooting", icon:"R6", description:"A tactical team shooter built around operators and destructible environments.", overview:"Choose an Operator and coordinate a tactical team assault or defense. Ubisoft's PC store installs the game through Ubisoft Connect.", platform:"Windows PC and consoles", mode:"Online team multiplayer", downloadUrl:"https://store.ubisoft.com/us/tom-clancys-rainbow-six-siege/67c0ae5b4997ec4c09ed9c34.html?lang=en_US", requirementsUrl:"https://www.ubisoft.com/en-us/help?content_id=7251", downloadSize:"يتغير حسب الإصدار والتحديث؛ تحقق من Ubisoft Connect قبل التنزيل.", cpu:"Intel Core i3-8100 أو AMD Ryzen 3 3100", ram:"8 GB", storage:"65 GB على SSD", os:"Windows 10 أو Windows 11، 64-bit; DirectX 12", graphics:"GTX 1650 4 GB / RX 5500 XT 4 GB / Intel Arc A380 6 GB", featured:true },
    { id:"trackmania", title:"Trackmania", genre:"Racing", category:"racing", icon:"TM", description:"Race on creative tracks and compete to set faster times.", overview:"Drive precision-built tracks, learn shortcuts, and chase better times. The official Ubisoft Store adds the game to Ubisoft Connect for download.", platform:"Windows PC", mode:"Solo and online competition", downloadUrl:"https://store.ubisoft.com/us/trackmania-free-starter-access/5e8b58345cdf9a12c868c878.html", requirementsUrl:"https://www.ubisoft.com/en-gb/help/trackmania/gameplay/article/system-requirements-for-trackmania/000081203", downloadSize:"حجم التنزيل يظهر في Ubisoft Connect وقد يتغير مع التحديثات.", cpu:"Intel Core i5-2500K أو AMD FX-6100، بسرعة 3.3 GHz", ram:"8 GB", storage:"2.3 GB مساحة متاحة", os:"Windows 10، 64-bit", graphics:"NVIDIA GeForce GTX 660 2 GB أو AMD Radeon R9 270X 2 GB", featured:false }
];

const CATEGORY_META = [
    { id:"action", name:"Action", icon:"⚔️", description:"Fast-paced action games." },
    { id:"adventure", name:"Adventure", icon:"🧭", description:"Explore worlds and discover stories." },
    { id:"shooting", name:"Shooting", icon:"🎯", description:"Test your aim and tactics." },
    { id:"strategy", name:"Strategy", icon:"♟️", description:"Plan carefully and outsmart rivals." },
    { id:"rpg", name:"RPG", icon:"🛡️", description:"Build a character and explore a persistent world." },
    { id:"arcade", name:"Arcade", icon:"🕹️", description:"Jump into player-created games and quick experiences." },
    { id:"racing", name:"Racing", icon:"🏁", description:"Race, improve your times, and compete." }
];

const GAME_ARTWORK = {
    "valorant": "https://www.washingtonpost.com/resizer/L-FezVuIJTTa89o_Wqt5HbWWnUs%3D/arc-anglerfish-washpost-prod-washpost/public/5RSLEPTG25GRZKEN6ITNF6R4MM.jpg",
    "league-of-legends": "https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202501/untitled-design150125055930.png",
    "teamfight-tactics": "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/bfafa1901b23ced20c0762a1da84ade50e1064b1-1920x1080.jpg?accountingTag=TFT&auto=format&fit=fill&q=80&w=1920",
    "genshin-impact": "https://webstatic.hoyoverse.com/upload/contentweb/2022/08/24/664490c922e84f2a79015153bb5dcd1c_2504414746128510206.jpg",
    "honkai-star-rail": "https://image.api.playstation.com/vulcan/ap/rnd/202308/1103/dcc7704fa2c06188b722550d1d37476f1695762cf9b58537.jpg",
    "zenless-zone-zero": "https://images.rpgsite.net/image/da49c9a1/139385/original/Zenless-Zone-Zero_Launch_KeyArt.jpg",
    "wuthering-waves": "https://static.actugaming.net/media/2022/06/wuthering-waves-key-art.jpg",
    "warframe": "https://www.imfdb.org/images/thumb/4/41/Warframe.jpg/450px-Warframe.jpg",
    "roblox": "https://prod.assets.earlygamecdn.com/images/RobloxActiveCodes_2023-04-03-130932_hzxi.jpg?transform=Article+Webp",
    "minecraft": "https://cdn.mos.cms.futurecdn.net/rpPGiw7RjFaeJCCDBC4Bna.jpg",
    "world-of-warcraft": "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/V7YFBK96C6UT1717610614158.png",
    "hearthstone": "https://www.actionfigureinsider.com/wpress/wp-content/uploads/2015/04/HS-on-Mobile-Key-Art.jpg",
    "starcraft-2": "https://media.vandal.net/m/9604/starcraft-ii-legacy-of-the-void-20151111113556_1.jpg",
    "overwatch-2": "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/overwatch2/16x9_Overwatch2_Season21.jpg",
    "albion-online": "https://www.gamer.org/wp-content/uploads/2024/03/EUROPE_SERVER_HD_LOGO_1920x1080.jpg",
    "runescape": "https://pliki.ppe.pl/storage/02e7b56454898f31e700/02e7b56454898f31e700.jpg",
    "old-school-runescape": "https://static-cdn.jtvnw.net/ttv-boxart/Old%20School%20RuneScape.jpg",
    "guild-wars-2": "https://cdn.ncwest.com/gw2-buysite/12222022-E6D92EE12DFEC665/images/share.jpg",
    "rainbow-six-siege": "https://imgsvc.trackercdn.com/url/size%281280x720%29%2Cfit%28cover%29%2Cquality%28100%29/https%3A%2F%2Ftrackercdn.com%2Fghost%2Fimages%2F2023%2F10%2F62051_638f1-16771634136282-1920.jpg/image.jpg",
    "trackmania": "https://store-images.s-microsoft.com/image/apps.12601.13929807647902137.38a53ce6-26b2-46d3-a4f5-54b363f7efcd.5a51a75a-b7d2-4138-8be9-9ce92ae4b837"
};

function gameArt(game, extraClass = "") {
    const artwork = GAME_ARTWORK[game.id] || `images/games/${game.id}.svg`;
    return `<div class="game-art art-${game.category} art-${game.id} ${extraClass}">
        <img class="game-art-image" src="${artwork}" alt="${game.title} game artwork" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='images/games/${game.id}.svg'">
    </div>`;
}

function gameCard(game, compact = false) {
    const typeClass = compact ? "card" : "game-card";
    const infoClass = compact ? "card-info" : "game-info";
    const titleClass = compact ? "card-name" : "";
    return `<article class="${typeClass}">
        ${gameArt(game)}
        <div class="${infoClass}">
            <div class="${titleClass}">
                <p class="${compact ? "" : "game-category"}">${game.genre}</p>
                <h3>${game.title}</h3>
                ${compact ? "" : `<p>${game.description}</p>`}
            </div>
            <a class="${compact ? "details-link" : "play-btn"}" href="game-details.html?game=${encodeURIComponent(game.id)}" aria-label="View ${game.title} details">${compact ? "↗" : "View Details"}</a>
        </div>
    </article>`;
}

function renderHome() {
    const target = document.getElementById("homeGames");
    if (target) target.innerHTML = GAMES.filter((game) => game.featured).slice(0, 5).map((game) => gameCard(game, true)).join("");
    const form = document.getElementById("homeSearchForm");
    const input = document.getElementById("homeSearch");
    if (form && input) form.addEventListener("submit", (event) => {
        event.preventDefault();
        const destination = new URL("all-games.html", window.location.href);
        if (input.value.trim()) destination.searchParams.set("search", input.value.trim());
        window.location.href = destination.href;
    });
}

function renderAllGames() {
    const grid = document.getElementById("gamesGrid");
    if (!grid) return;
    const search = document.getElementById("gameSearch");
    const filter = document.getElementById("genreFilter");
    const empty = document.getElementById("noGamesMessage");
    const count = document.getElementById("resultsCount");
    const params = new URLSearchParams(window.location.search);
    const initialCategory = (params.get("category") || "all").toLowerCase();
    const knownCategories = new Set(CATEGORY_META.map((category) => category.id));
    filter.value = knownCategories.has(initialCategory) ? initialCategory : "all";
    search.value = params.get("search") || "";
    function update() {
        const term = search.value.trim().toLocaleLowerCase();
        const category = filter.value;
        const visible = GAMES.filter((game) => `${game.title} ${game.genre} ${game.description}`.toLocaleLowerCase().includes(term) && (category === "all" || game.category === category));
        grid.innerHTML = visible.map((game) => gameCard(game)).join("");
        empty.hidden = visible.length > 0;
        if (count) count.textContent = `${visible.length} ${visible.length === 1 ? "game" : "games"} found`;
    }
    search.addEventListener("input", update);
    filter.addEventListener("change", update);
    update();
}

function renderCategories() {
    const grid = document.getElementById("categoriesGrid");
    if (!grid) return;
    grid.innerHTML = CATEGORY_META.map((category) => {
        const count = GAMES.filter((game) => game.category === category.id).length;
        return `<a class="category-card" href="all-games.html?category=${encodeURIComponent(category.id)}">
            <span class="category-icon" aria-hidden="true">${category.icon}</span><span class="category-arrow" aria-hidden="true">↗</span>
            <h3>${category.name}</h3><p>${category.description}</p><span class="category-count">${count} ${count === 1 ? "game" : "games"}</span>
        </a>`;
    }).join("");
}

function renderTrending() {
    const grid = document.getElementById("trendingGames");
    if (!grid) return;
    grid.innerHTML = GAMES.filter((game) => game.featured).map((game, index) => `<article class="game-card">
        <div class="game-image">${gameArt(game)}<span class="rank">#${index + 1} FEATURED</span></div>
        <div class="game-info"><span class="game-category">${game.genre}</span><h3>${game.title}</h3><p>${game.description}</p>
        <a href="game-details.html?game=${encodeURIComponent(game.id)}" class="play-btn">View Requirements ↗</a></div>
    </article>`).join("");
}

function renderDetails() {
    const page = document.getElementById("gameDetails");
    if (!page) return;
    const id = new URLSearchParams(window.location.search).get("game");
    const game = GAMES.find((item) => item.id === id);
    if (!game) {
        page.innerHTML = `<section class="not-found"><span aria-hidden="true">🎮</span><h1>Game not found</h1><p>Choose a game from the catalog to see its requirements.</p><a class="primary-button" href="all-games.html">Browse all 20 games</a></section>`;
        document.title = "Game Not Found | GAME BOX";
        return;
    }
    document.title = `${game.title} | GAME BOX`;
    const specs = [
        ["Processor (CPU)", game.cpu, "🧠"],
        ["Memory (RAM)", game.ram, "💾"],
        ["Free storage", game.storage, "📦"],
        ["Operating system", game.os, "🖥️"],
        ["Graphics", game.graphics, "🎨"],
        ["Download size", game.downloadSize, "⬇️"]
    ];
    page.innerHTML = `<a class="back-link" href="all-games.html">← Back to All Games</a>
        <section class="game-hero"><div class="game-cover">${gameArt(game)}<span class="cover-label">OFFICIAL GAME</span></div>
        <div class="game-intro"><p class="eyebrow">${game.genre.toUpperCase()} GAME</p><h1>${game.title}</h1>
        <p class="intro-copy">${game.description}</p><div class="quick-facts">
        <div><span class="fact-label">Genre</span><strong>${game.genre}</strong></div><div><span class="fact-label">Platform</span><strong>${game.platform}</strong></div>
        <div><span class="fact-label">Mode</span><strong>${game.mode}</strong></div></div>
        <a class="primary-button download-button" href="${game.downloadUrl}" target="_blank" rel="noopener noreferrer">Download from official site <span aria-hidden="true">↗</span></a>
        <p class="external-note">يفتح موقع أو برنامج الناشر الرسمي لإكمال تنزيل ملفات اللعبة. حجم التنزيل قد يتغير مع التحديثات.</p></div></section>
        <section class="content-section requirements-section"><div class="section-heading"><p class="eyebrow">BEFORE YOU DOWNLOAD</p><h2>PC Requirements & Download Info</h2><p class="section-subtitle">متطلبات الناشر للكمبيوتر؛ قد تكون دنيا أو موصى بها حسب المصدر. تحقق من الصفحة الرسمية قبل التنزيل لأن المتطلبات والأحجام تتغير.</p></div>
        <div class="spec-grid">${specs.map(([label, value, icon]) => `<article class="spec-card"><span class="spec-icon" aria-hidden="true">${icon}</span><div><p>${label}</p><h3>${value}</h3></div></article>`).join("")}</div>
        <p class="notice">حجم تنزيل ملف التثبيت مش دايمًا هو نفسه مساحة اللعبة بعد التثبيت. سيب مساحة إضافية للتحديثات وفك الملفات.</p>
        <a class="requirements-source" href="${game.requirementsUrl}" target="_blank" rel="noopener noreferrer">View official system requirements ↗</a></section>
        <section class="content-section"><div class="section-heading"><p class="eyebrow">ABOUT THE GAME</p><h2>Overview</h2></div><p class="body-copy">${game.overview}</p></section>
        <section class="security-section"><div class="security-icon" aria-hidden="true">🛡️</div><div class="security-copy"><p class="eyebrow">SAFE DOWNLOADS</p><h2>Use the official publisher link</h2><p>GAME BOX does not host game files. The button above opens the publisher's own download page or launcher. This site does not provide unofficial installers.</p></div></section>`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderHome(); renderAllGames(); renderCategories(); renderTrending(); renderDetails();
});
