
// --- AIRCRAFT DB (Wiki-Accurate with pylonWeapons) ---
const planes = {
    cricket: { 
        name: "CI-22 Cricket", max: 1800, 
        pylons: [250, 500, 500],
        pylonNames: ["Outer Wing Pylons", "Inner Wing Pylons", "Fuselage Pylon"],
        pylonWeapons: {
            0: ["pab250", "pab125", "lynchpin", "kingpin", "agm48", "agm68", "irms2", "ecm"],
            1: ["pab250", "pab125", "lynchpin", "kingpin", "agm48", "agm68", "irms2", "ecm"],
            2: ["pab125", "lynchpin", "agm48", "irms2", "ecm"]
        },
        img: "aircraft/300px-CI-22_Cricket_-_Display.webp"
    },
    compass: { 
        name: "T/A-30 Compass", max: 3500,
        pylons: [1000, 800, 500, 250],
        pylonNames: ["Fuselage Pylon", "Inner Wing Pylons", "Mid Wing Pylons", "Outer Wing Pylons"],
        pylonWeapons: {
            0: ["gpo500", "gpon", "pab125", "pab250", "pab250lr", "agm68", "mmrs3", "irms2"],
            1: ["gpo500", "pab125", "pab250", "pab80", "agm68", "lynchpin", "kingpin", "agm48", "mmrs3", "scythe"],
            2: ["gpo500", "pab125", "pab80", "agm68", "agm48", "mmrs3", "lynchpin", "kingpin"],
            3: ["pab125", "pab80", "agm48", "mmrs3", "lynchpin", "kingpin"]
        },
        img: "aircraft/300px-TA-30_Compass_-_Display.webp"
    },
    revoker: { 
        name: "FS-12 Revoker", max: 3500,
        pylons: [800, 1000, 400, 200],
        pylonNames: ["Internal Bays", "Centerline", "Outer Wing Pylons", "Wing Tip Rails"],
        pylonWeapons: {
            0: ["gpo500", "gpon", "pab125", "pab250", "pab80", "agm68", "mmrs3", "irms2", "scythe", "scimitar"],
            1: ["gpo500", "pab250", "pab250lr", "pab80", "agm68", "mmrs3", "scythe", "scimitar"],
            2: ["gpo500", "gpo2p", "pab80", "mmrs3", "scythe", "scimitar", "arad", "tusko", "agm99", "kingpin"],
            3: ["mmrs3", "scythe", "scimitar"]
        },
        img: "aircraft/300px-FS-12_Revoker_-_Display.webp"
    },
    vortex: { 
        name: "FS-20 Vortex", max: 3000,
        pylons: [800, 400, 600, 400],
        pylonNames: ["Weapon Bays (inner)", "Weapon Bays (outer)", "Inner wing pylons", "Outer wing pylons"],
        pylonWeapons: {
            0: ["gpo500", "gpon", "pab125", "pab250", "pab250lr", "pab80", "agm68", "scythe", "scimitar", "mmrs3", "irms2"],
            1: ["pab125", "pab80", "scythe", "scimitar", "mmrs3", "irms2"],
            2: ["gpo2p", "gpo500", "pab250", "pab250lr", "pab80", "agm68", "agm99", "kingpin", "arad", "tusko", "scythe", "scimitar", "mmrs3"],
            3: ["gpo500", "pab250", "pab250lr", "pab80", "agm68", "agm99", "kingpin", "tusko", "scythe", "scimitar", "mmrs3"]
        },
        img: "aircraft/FS 20.webp"
    },
    ifrit: { 
        name: "KR-67 Ifrit", max: 5000,
        pylons: [1500, 150, 1200, 1000, 600],
        pylonNames: ["Internal Bays", "Side Bays (IR)", "Inner Wing Pylons", "Mid Wing Pylons", "Outer Wing Pylons"],
        pylonWeapons: {
            0: ["gpo500", "gpon", "pab125", "pab250", "agm68", "mmrs3", "irms2", "scythe", "scimitar", "kingpin", "arad"],
            1: ["irms2"],
            2: ["gpo2p", "gpo500", "pab250", "pab250lr", "pab80", "agm68", "kingpin", "arad", "ashm", "tusko", "mmrs3", "irms2", "scythe", "scimitar"],
            3: ["gpo500", "pab250", "pab250lr", "pab80", "agm68", "kingpin", "arad", "ashm", "tusko", "mmrs3", "irms2", "scythe", "scimitar"],
            4: ["mmrs3", "scythe", "scimitar"]
        },
        img: "aircraft/300px-KR-67_Ifrit_-_Display.webp"
    },
    brawler: { 
        name: "A-19 Brawler", max: 6000,
        pylons: [400, 800, 500, 1200, 1200],
        pylonNames: ["Outer Fuselage Pylons", "Inner Fuselage Pylons", "Outer Wing Pylons", "Mid Wing Pylons", "Inner Wing Pylons"],
        pylonWeapons: {
            0: ["gpo500", "pab250", "pab250lr", "pab80", "pab125", "kingpin", "agm68"],
            1: ["gpo500", "gpo2p", "pab250", "pab250lr", "pab80", "kingpin", "agm48", "agm68"],
            2: ["gpo500", "gpo2p", "pab250", "pab250lr", "pab80", "pab125", "kingpin", "agm48", "agm68"],
            3: ["gpo500", "pab250", "pab250lr", "pab80", "pab125", "kingpin", "agm48", "agm68"],
            4: ["gpo500", "pab250", "pab250lr", "pab125", "kingpin", "agm48", "irms2"]
        },
        img: "aircraft/300px-Brawler_on_attack_run.jpg"
    },
    medusa: { 
        name: "EW-25 Medusa", max: 6000,
        pylons: [400, 800, 1000, 500],
        pylonNames: ["Outer Wing Pylons", "Mid Wing Pylons", "Inner Wing Pylons", "Dorsal Hardpoint"],
        pylonWeapons: {
            0: ["pab80", "mmrs3", "irms2"],
            1: ["pab250lr", "pab80", "arad", "ashm", "mmrs3", "irms2", "almc450"],
            2: ["arad", "ashm", "mmrs3", "pab80"],
            3: []
        },
        img: "aircraft/300px-EW-25_Medusa_-_Display.webp"
    },
    darkreach: { 
        name: "SFB-81 Darkreach", max: 25000,
        pylons: [6000, 3000, 3000, 4000],
        pylonNames: ["Inner Bay (Full)", "Inner Bay Forward", "Inner Bay Rear", "Outer Bays"],
        pylonWeapons: {
            0: ["demo", "gpo2p", "alnd4", "piledriver", "almc450", "ashm"],
            1: ["gpo500", "gpon", "pab250", "pab250lr", "ashm", "almc450", "tusko", "gpo2p"],
            2: ["gpo500", "gpon", "gpo2p", "pab250", "pab250lr", "ashm", "almc450", "tusko"],
            3: ["alnd4", "piledriver", "almc450", "ashm", "tusko", "gpon", "gpo500", "pab250", "pab250lr", "gpo2p"]
        },
        img: "aircraft/300px-SFB-81_Darkreach_-_Display.webp"
    },
    chicane: { 
        name: "SAH-46 Chicane", max: 1200,
        pylons: [600, 400, 200, 100],
        pylonNames: ["Internal Bay", "Stub Pylons", "Wingtip Rails", "Tail ECM"],
        pylonWeapons: {
            0: ["agm48", "irms1"],
            1: ["lynchpin", "kingpin", "atp1", "agm48", "agm68", "irms1", "mmrs3", "ecm"],
            2: ["irms1", "mmrs3"],
            3: ["irms1", "ecm"]
        },
        img: "aircraft/300px-SAH-46_Chicane_-_Display.webp"
    },
    ibis: { 
        name: "UH-90 Ibis", max: 1500,
        pylons: [300, 600, 0],
        pylonNames: ["Stub Pylons", "Cargo Bay (Front)", "Cargo Bay (Rear)"],
        pylonWeapons: {
            0: ["agm48", "lynchpin", "kingpin", "irms1", "ecm"],
            1: ["agm48", "irms1", "ecm"],
            2: []
        },
        pylonTypes: ["weapon", "weapon", "vehicle"],
        img: "aircraft/300px-PALA_Black_Uh90_Ibis_Agropol.webp"
    },
    tarantula: { 
        name: "VL-49 Tarantula", max: 20000,
        pylons: [2000, 1000, 2000, 100],
        pylonNames: ["Cargo Bay", "Forward Bay", "Rear Bay", "Sponson Pylons"],
        pylonWeapons: {
            0: ["demo"],
            1: [],
            2: ["agm48"],
            3: ["irms1", "ecm"]
        },
        pylonTypes: ["cargo", "vehicle", "rear", "sponson"],
        img: "aircraft/300px-Tarantula_VTOL_flight.webp"
    }
};

// --- MULTILINGUAL WEAPON LABELS ---
const weaponLabels = {
    // Guidance types
    guid: {
        ir: { ru: "ИК (Тепло)", en: "IR (Heat)", ua: "ІЧ (Тепло)" },
        radar: { ru: "Акт. Радар", en: "Active Radar", ua: "Акт. Радар" },
        laser: { ru: "ПА Лазер", en: "SA Laser", ua: "НА Лазер" },
        opt: { ru: "Оптика", en: "Optical", ua: "Оптика" },
        gps: { ru: "INS/Опт", en: "INS/Opt", ua: "INS/Опт" },
        passrad: { ru: "Пассив. Радар", en: "Passive Radar", ua: "Пасив. Радар" },
        gun: { ru: "Пушка", en: "Gun", ua: "Гармата" }
    },
    // Target types
    targets: {
        aircraft: { ru: "Самолеты, Вертолеты", en: "Aircraft, Helicopters", ua: "Літаки, Вертольоти" },
        aircraftUav: { ru: "Самолеты, БПЛА", en: "Aircraft, UAV", ua: "Літаки, БПЛА" },
        awacs: { ru: "ДРЛО / Бомберы", en: "AWACS / Bombers", ua: "ДРЛВ / Бомбери" },
        lightArmor: { ru: "Легкая техника", en: "Light Armor", ua: "Легка техніка" },
        armor: { ru: "Броня, Укрепления", en: "Armor, Fortifications", ua: "Броня, Укріплення" },
        tanks: { ru: "Танки, ПВО", en: "Tanks, SAM", ua: "Танки, ППО" },
        heavyArmor: { ru: "Тяж. Броня, Здания", en: "Heavy Armor, Buildings", ua: "Важка Броня, Будівлі" },
        tanksAtgm: { ru: "Танки (ПТУР)", en: "Tanks (ATGM)", ua: "Танки (ПТРК)" },
        buildings: { ru: "Здания, Корабли", en: "Buildings, Ships", ua: "Будівлі, Кораблі" },
        radar: { ru: "Радары, ПВО", en: "Radars, SAM", ua: "Радари, ППО" },
        stationary: { ru: "Стационар", en: "Stationary", ua: "Стаціонар" },
        ships: { ru: "Корабли, Базы", en: "Ships, Bases", ua: "Кораблі, Бази" },
        shipsOnly: { ru: "Корабли", en: "Ships", ua: "Кораблі" },
        strategic: { ru: "Стратег. Цели", en: "Strategic", ua: "Стратегічні" },
        vehicles: { ru: "Техника, Здания", en: "Vehicles, Buildings", ua: "Техніка, Будівлі" },
        armorBld: { ru: "Броня, Здания", en: "Armor, Buildings", ua: "Броня, Будівлі" },
        longRange: { ru: "Дальние цели", en: "Long Range", ua: "Далекі цілі" },
        largeBld: { ru: "Крупные здания", en: "Large Buildings", ua: "Великі будівлі" },
        bunkers: { ru: "Бункеры, ВПП", en: "Bunkers, Runways", ua: "Бункери, ЗПС" },
        areas: { ru: "Площади, Базы", en: "Areas, Bases", ua: "Площі, Бази" },
        cities: { ru: "Города", en: "Cities", ua: "Міста" },
        largeObj: { ru: "Крупные объекты", en: "Large Objects", ua: "Великі об'єкти" },
        air: { ru: "Самолеты", en: "Aircraft", ua: "Літаки" },
        armorOnly: { ru: "Броня", en: "Armor", ua: "Броня" },
        airOnly: { ru: "Воздух", en: "Air", ua: "Повітря" },
        airMissiles: { ru: "Самолеты/Ракеты", en: "Aircraft/Missiles", ua: "Літаки/Ракети" },
        highAlt: { ru: "Высотные цели", en: "High Altitude", ua: "Висотні цілі" }
    },
    // Descriptions
    desc: {
        closeRange: { ru: "Ближний бой.", en: "Close range.", ua: "Ближній бій." },
        standard: { ru: "Стандартная ракета.", en: "Standard missile.", ua: "Стандартна ракета." },
        extRange: { ru: "Увеличенная дальность.", en: "Extended range.", ua: "Збільшена дальність." },
        fox3: { ru: "FOX-3.", en: "FOX-3.", ua: "FOX-3." },
        longRange: { ru: "Дальнобойная.", en: "Long range.", ua: "Далекобійна." },
        needsLase: { ru: "Нужен подсвет.", en: "Needs lasing.", ua: "Потребує підсвітка." },
        heavyLaser: { ru: "Тяжелая лазерная.", en: "Heavy laser-guided.", ua: "Важка лазерна." },
        smallMsl: { ru: "Малая ракета.", en: "Small missile.", ua: "Мала ракета." },
        tankKiller: { ru: "Убийца танков.", en: "Tank killer.", ua: "Вбивця танків." },
        heli: { ru: "Вертолетная.", en: "Helicopter.", ua: "Вертолітна." },
        supersonic: { ru: "Сверхзвуковая.", en: "Supersonic.", ua: "Надзвукова." },
        sead: { ru: "SEAD (Анти-радар).", en: "SEAD (Anti-radar).", ua: "SEAD (Анти-радар)." },
        cruise: { ru: "Крылатая ракета.", en: "Cruise missile.", ua: "Крилата ракета." },
        longCruise: { ru: "Дальняя КР.", en: "Long-range CM.", ua: "Далека КР." },
        antiShip: { ru: "ПКР.", en: "Anti-ship.", ua: "ПКР." },
        ballistic: { ru: "Баллистическая.", en: "Ballistic.", ua: "Балістична." },
        smallGlide: { ru: "Малая планирующая.", en: "Small glide bomb.", ua: "Мала планувальна." },
        precise: { ru: "Точная бомба.", en: "Precision bomb.", ua: "Точна бомба." },
        medium: { ru: "Средняя бомба.", en: "Medium bomb.", ua: "Середня бомба." },
        longRangeBomb: { ru: "Long Range.", en: "Long Range.", ua: "Long Range." },
        heavy: { ru: "Тяжелая бомба.", en: "Heavy bomb.", ua: "Важка бомба." },
        bunkerBuster: { ru: "Бетонобойная.", en: "Bunker buster.", ua: "Бетонобійна." },
        demolition: { ru: "Снос зданий.", en: "Building demolition.", ua: "Знос будівель." },
        nuclear: { ru: "ЯДЕРНАЯ.", en: "NUCLEAR.", ua: "ЯДЕРНА." },
        nukeBomb: { ru: "ЯДЕРНАЯ БОМБА.", en: "NUCLEAR BOMB.", ua: "ЯДЕРНА БОМБА." },
        cannon20: { ru: "6000 выстр/мин", en: "6000 RPM", ua: "6000 постр/хв" },
        cannon30: { ru: "GAU.", en: "GAU.", ua: "GAU." },
        groundSam: { ru: "Наземная ЗУР.", en: "Ground SAM.", ua: "Наземна ЗРК." },
        shipGround: { ru: "Корабельная/Наземная.", en: "Ship/Ground.", ua: "Корабельна/Наземна." },
        longSam: { ru: "Дальняя ЗУР.", en: "Long-range SAM.", ua: "Далека ЗРК." },
        empty: { ru: "ПУСТО", en: "EMPTY", ua: "ПУСТО" }
    },
    // Range types
    range: {
        glide: { ru: "Планирующая", en: "Glide", ua: "Планувальна" },
        guided: { ru: "Управл.", en: "Guided", ua: "Керована" },
        close: { ru: "Ближн.", en: "Close", ua: "Ближн." }
    }
};

// --- WEAPONS DB (with translation keys) ---
const weapons = [
    { id: "none", name: "---", mass: 0, cat: "none", compat: ["all"], descKey: "empty" },
    // 1. A2A
    { id: "irms1", name: "IRM-S1", mass: 60, cat: "a2a", f_guid: "ir", f_tgt: "air", guidKey: "ir", range: "5.0 км", speed: "2529 км/ч", targetsKey: "aircraft", descKey: "closeRange", compat: ["ibis", "chicane", "tarantula"], pylonRestrictions: { tarantula: ["sponson"] } },
    { id: "irms2", name: "IRM-S2", mass: 100, cat: "a2a", f_guid: "ir", f_tgt: "air", guidKey: "ir", range: "10.0 км", speed: "2794 км/ч", targetsKey: "aircraft", descKey: "standard", compat: ["cricket", "compass", "brawler", "revoker", "vortex", "ifrit", "medusa"] },
    { id: "mmrs3", name: "MMR-S3", mass: 150, cat: "a2a", f_guid: "ir", f_tgt: "air", guidKey: "ir", range: "15.0 км", speed: "2832 км/ч", targetsKey: "aircraft", descKey: "extRange", compat: ["chicane", "compass", "revoker", "vortex", "ifrit", "medusa"] },
    { id: "scythe", name: "AAM-29 Scythe", mass: 180, cat: "a2a", f_guid: "radar", f_tgt: "air", guidKey: "radar", range: "40.0 км", speed: "4140 км/ч", targetsKey: "aircraftUav", descKey: "fox3", compat: ["compass", "vortex", "revoker", "ifrit"] },
    { id: "scimitar", name: "AAM-36 Scimitar", mass: 350, cat: "a2a", f_guid: "radar", f_tgt: "air", guidKey: "radar", range: "100.0 км", speed: "4594 км/ч", targetsKey: "awacs", descKey: "longRange", compat: ["vortex", "revoker", "ifrit", "medusa"] },

    // 2. A2G
    { id: "lynchpin", name: "AGR-18 Lynchpin", mass: 250, cat: "a2g", f_guid: "laser", f_tgt: "tank", guidKey: "laser", range: "6.0 км", speed: "2685 км/ч", targetsKey: "lightArmor", descKey: "needsLase", compat: ["cricket", "ibis", "compass", "chicane"] },
    { id: "kingpin", name: "AGR-24 Kingpin", mass: 300, cat: "a2g", f_guid: "laser", f_tgt: "tank", guidKey: "laser", range: "8.0 км", speed: "2714 км/ч", targetsKey: "armor", descKey: "heavyLaser", compat: ["cricket", "compass", "brawler", "revoker", "vortex", "ifrit", "chicane", "ibis"] },
    { id: "agm48", name: "AGM-48", mass: 50, cat: "a2g", f_guid: "opt", f_tgt: "tank", guidKey: "opt", range: "10.0 км", speed: "1287 км/ч", targetsKey: "tanks", descKey: "smallMsl", compat: ["cricket", "ibis", "brawler", "compass", "chicane", "tarantula"], pylonRestrictions: { tarantula: ["rear"] } },
    { id: "agm68", name: "AGM-68", mass: 300, cat: "a2g", f_guid: "opt", f_tgt: "tank", guidKey: "opt", range: "15.0 км", speed: "1416 км/ч", targetsKey: "heavyArmor", descKey: "tankKiller", compat: ["cricket", "compass", "brawler", "chicane", "revoker", "vortex", "ifrit"] },
    { id: "atp1", name: "ATP-1", mass: 100, cat: "a2g", f_guid: "opt", f_tgt: "tank", guidKey: "opt", range: "8.0 км", speed: "1070 км/ч", targetsKey: "tanksAtgm", descKey: "heli", compat: ["chicane"] },
    { id: "tusko", name: "Tusko-B", mass: 500, cat: "a2g", f_guid: "opt", f_tgt: "ship bld", guidKey: "opt", range: "60.0 км", speed: "3269 км/ч", targetsKey: "buildings", descKey: "supersonic", compat: ["revoker", "vortex", "ifrit", "darkreach"] },
    { id: "arad", name: "ARAD-116", mass: 350, cat: "a2g", f_guid: "radar", f_tgt: "rad", guidKey: "passrad", range: "60.0 км", speed: "3641 км/ч", targetsKey: "radar", descKey: "sead", compat: ["revoker", "vortex", "ifrit", "medusa"] },
    { id: "agm99", name: "AGM-99", mass: 800, cat: "a2g", f_guid: "gps", f_tgt: "bld", guidKey: "gps", range: "100.0 км", speed: "1093 км/ч", targetsKey: "stationary", descKey: "cruise", compat: ["revoker", "vortex"] },
    { id: "almc450", name: "ALM-C450", mass: 1000, cat: "a2g", f_guid: "gps", f_tgt: "ship", guidKey: "gps", range: "1000 км", speed: "1241 км/ч", targetsKey: "ships", descKey: "longCruise", compat: ["darkreach", "medusa"] },
    { id: "ashm", name: "AShM-300", mass: 600, cat: "a2g", f_guid: "radar", f_tgt: "ship", guidKey: "radar", range: "250.0 км", speed: "1536 км/ч", targetsKey: "shipsOnly", descKey: "antiShip", compat: ["ifrit", "medusa", "darkreach"] },
    { id: "piledriver", name: "Piledriver TBM", mass: 2000, cat: "a2g", f_guid: "gps", f_tgt: "bld", guidKey: "gps", range: "250.0 км", speed: "5149 км/ч", targetsKey: "strategic", descKey: "ballistic", compat: ["darkreach"] },

    // 3. BOMBS
    { id: "pab80", name: "PAB-80LR", mass: 100, cat: "bomb", f_guid: "opt", f_tgt: "tank", guidKey: "opt", rangeKey: "glide", speed: "-", targetsKey: "lightArmor", descKey: "smallGlide", compat: ["compass", "brawler", "revoker", "vortex", "ifrit", "medusa"] },
    { id: "pab125", name: "PAB-125", mass: 125, cat: "bomb", f_guid: "opt", f_tgt: "tank", guidKey: "opt", rangeKey: "guided", speed: "-", targetsKey: "vehicles", descKey: "precise", compat: ["cricket", "compass", "brawler", "revoker", "vortex", "ifrit"] },
    { id: "pab250", name: "PAB-250", mass: 250, cat: "bomb", f_guid: "opt", f_tgt: "tank", guidKey: "opt", rangeKey: "guided", speed: "-", targetsKey: "armorBld", descKey: "medium", compat: ["cricket", "compass", "brawler", "revoker", "vortex", "ifrit", "darkreach"] },
    { id: "pab250lr", name: "PAB-250LR", mass: 250, cat: "bomb", f_guid: "opt", f_tgt: "bld", guidKey: "opt", rangeKey: "glide", speed: "-", targetsKey: "longRange", descKey: "longRangeBomb", compat: ["compass", "brawler", "revoker", "vortex", "ifrit"] },
    { id: "gpo500", name: "GPO-500", mass: 500, cat: "bomb", f_guid: "opt", f_tgt: "bld", guidKey: "opt", rangeKey: "guided", speed: "-", targetsKey: "largeBld", descKey: "heavy", compat: ["compass", "brawler", "revoker", "vortex", "ifrit", "darkreach"] },
    { id: "gpo2p", name: "GPO-2P Auger", mass: 900, cat: "bomb", f_guid: "opt", f_tgt: "bld", guidKey: "laser", rangeKey: "guided", speed: "-", targetsKey: "bunkers", descKey: "bunkerBuster", compat: ["brawler", "revoker", "vortex", "ifrit", "darkreach"] },
    { id: "demo", name: "Demolition Bomb", mass: 1000, cat: "bomb", f_guid: "opt", f_tgt: "bld", guidKey: "opt", rangeKey: "guided", speed: "-", targetsKey: "areas", descKey: "demolition", compat: ["tarantula", "darkreach"], pylonRestrictions: { tarantula: ["cargo"] } },

    // 4. SPECIAL / GUNS
    { id: "alnd4", name: "ALND-4 (20kt)", mass: 800, cat: "spec", f_guid: "gps", f_tgt: "bld", guidKey: "gps", range: "1000 км", speed: "1112 км/ч", targetsKey: "cities", descKey: "nuclear", compat: ["darkreach"] },
    { id: "gpon", name: "GPO-N (Nuke)", mass: 450, cat: "spec", f_guid: "opt", f_tgt: "bld", guidKey: "opt", rangeKey: "guided", speed: "-", targetsKey: "largeObj", descKey: "nukeBomb", compat: ["compass", "revoker", "vortex", "ifrit", "darkreach"] },
    { id: "gun20", name: "20mm Cannon", mass: 0, cat: "gun", f_guid: "dumb", f_tgt: "air", guidKey: "gun", rangeKey: "close", speed: "1100 м/с", targetsKey: "air", descKey: "cannon20", compat: ["revoker", "vortex"] },
    { id: "gun30", name: "30mm Cannon", mass: 0, cat: "gun", f_guid: "dumb", f_tgt: "tank", guidKey: "gun", rangeKey: "close", speed: "900 м/с", targetsKey: "armorOnly", descKey: "cannon30", compat: ["chicane", "brawler"] },
    
    // 5. SURFACE (Reference Only)
    { id: "sams1", name: "IRM-S1 (SAM)", mass: 0, cat: "surf", f_guid: "ir", f_tgt: "air", guidKey: "ir", range: "5 км", speed: "2529", targetsKey: "airOnly", descKey: "groundSam", compat: ["none"] },
    { id: "ram45", name: "RAM-45", mass: 0, cat: "surf", f_guid: "radar", f_tgt: "air", guidKey: "radar", range: "15 км", speed: "4165", targetsKey: "airMissiles", descKey: "shipGround", compat: ["none"] },
    { id: "strato", name: "StratoLance R9", mass: 0, cat: "surf", f_guid: "radar", f_tgt: "air", guidKey: "radar", range: "50 км", speed: "5014", targetsKey: "highAlt", descKey: "longSam", compat: ["none"] }
];

// Helper function to get translated weapon field
function getWeaponField(weapon, field) {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
    const key = weapon[field + 'Key'];
    if (!key) return weapon[field] || '';
    
    const labels = weaponLabels[field];
    if (!labels || !labels[key]) return weapon[field] || key;
    
    return labels[key][lang] || labels[key]['ru'] || key;
}
