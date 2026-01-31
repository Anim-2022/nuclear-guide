// --- INTERNATIONALIZATION MODULE ---
// Supports RU, EN, UA languages

const translations = {
    ru: {
        // Header
        'header.title': 'NUCLEAR OPTION',
        'header.version': 'DATABASE V16.2',
        'header.theme': 'TACTICAL GREEN',
        'header.class': 'UNCLASSIFIED',
        
        // Navigation
        'nav.config': 'КОНФИГУРАТОР',
        'nav.arsenal': 'АРСЕНАЛ',
        'nav.guide': 'ГАЙД',
        
        // Configurator
        'config.title': 'Loadout Configurator',
        'config.carrier': '1. НОСИТЕЛЬ',
        'config.select_placeholder': '-- ВЫБЕРИТЕ ЛА --',
        'config.planes': 'САМОЛЕТЫ',
        'config.helicopters': 'ВЕРТОЛЕТЫ / VTOL',
        'config.pylons': '2. ТОЧКИ ПОДВЕСА',
        'config.systems_online': 'SYSTEMS ONLINE',
        'config.waiting': 'ОЖИДАНИЕ ВЫБОРА НОСИТЕЛЯ...',
        'config.max_load': 'МАКС. НАГРУЗКА',
        'config.current_weight': 'ТЕКУЩИЙ ВЕС',
        'config.load': 'НАГРУЗКА',
        'config.overload': 'ПЕРЕГРУЗКА!',
        'config.hardpoint': 'HARDPOINT',
        'config.empty': '-- ПУСТО --',
        'pylons.vehiclesOnly': '[ ТОЛЬКО ТЕХНИКА ]',
        
        // Save/Share
        'save.placeholder': 'Название лоадаута...',
        'save.button': 'СОХРАНИТЬ',
        'share.button': 'ПОДЕЛИТЬСЯ',
        'share.copied': 'СКОПИРОВАНО',
        'loadouts.title': 'МОИ ЛОАДАУТЫ',
        'loadouts.empty': 'Нет сохранённых лоадаутов',
        'loadouts.delete_confirm': 'Удалить лоадаут',
        'loadouts.overwrite_confirm': 'уже существует. Перезаписать?',
        
        // Arsenal
        'arsenal.title': 'ПОЛНЫЙ АРСЕНАЛ',
        'arsenal.subtitle': 'ВСЕ ТИПЫ ВООРУЖЕНИЯ',
        'arsenal.search': 'ПОИСК...',
        'arsenal.filters': 'ФИЛЬТРЫ',
        'arsenal.reset': 'СБРОСИТЬ ВСЕ',
        'arsenal.no_results': 'НЕТ СОВПАДЕНИЙ',
        
        // Filter categories
        'filter.category': 'КАТЕГОРИЯ',
        'filter.guidance': 'НАВЕДЕНИЕ',
        'filter.targets': 'ЦЕЛИ',
        'filter.compat': 'СОВМЕСТИМОСТЬ',
        'filter.any_carrier': '-- ЛЮБОЙ НОСИТЕЛЬ --',
        
        // Categories
        'cat.a2a': 'В-В (A2A)',
        'cat.a2g': 'В-З (A2G)',
        'cat.bomb': 'БОМБЫ',
        'cat.spec': 'СПЕЦ',
        'cat.gun': 'ПУШКИ',
        'cat.surf': 'НАЗЕМНОЕ',
        
        // Guidance
        'guid.radar': 'РАДАР',
        'guid.ir': 'ИК (IR)',
        'guid.opt': 'ОПТИКА',
        'guid.gps': 'GPS/INS',
        'guid.laser': 'ЛАЗЕР',
        
        // Targets
        'tgt.air': 'ВОЗДУХ',
        'tgt.tank': 'ТЕХНИКА',
        'tgt.ship': 'ФЛОТ',
        'tgt.radar': 'РАДАР',
        'tgt.bld': 'ЗДАНИЯ',
        
        // Table
        'table.name': 'НАЗВАНИЕ',
        'table.type': 'ТИП',
        'table.guidance': 'НАВЕДЕНИЕ',
        'table.specs': 'ТТХ (Дал/Скор)',
        'table.target': 'ЦЕЛЬ',
        'table.desc': 'СОВМЕСТИМОСТЬ / ОПИСАНИЕ',
        
        // Groups
        'group.a2a': 'РАКЕТЫ ВОЗДУХ-ВОЗДУХ',
        'group.a2g': 'РАКЕТЫ ВОЗДУХ-ЗЕМЛЯ',
        'group.bomb': 'БОМБОВОЕ ВООРУЖЕНИЕ',
        'group.gun': 'СТРЕЛКОВОЕ ПУШЕЧНОЕ',
        'group.spec': 'СПЕЦИАЛЬНОЕ / ЯДЕРНОЕ',
        'group.surf': 'НАЗЕМНОЕ ПВО / ПРО',
        
        // Misc
        'compat.all': 'Все',
        'compat.ground_only': 'Только наземное',
        'compat.label': 'СОВМ:',
        
        // Alerts
        'alert.enter_name': 'Введите название лоадаута',
        'alert.select_carrier': 'Сначала выберите носитель',
        'alert.copy_link': 'Скопируйте ссылку:',
        'alert.delete_loadout': 'Удалить лоадаут',
        'alert.overwrite_confirm': 'уже существует. Перезаписать?',
        
        // Modal
        'modal.cancel': 'Отмена',
        
        // Mission Presets
        'mission.title': 'ПРЕСЕТЫ МИССИЙ',
        'mission.cap': 'CAP',
        'mission.cap_desc': 'Воздушный патруль',
        'mission.cas': 'CAS',
        'mission.cas_desc': 'Поддержка с воздуха',
        'mission.sead': 'SEAD',
        'mission.sead_desc': 'Подавление ПВО',
        'mission.strike': 'STRIKE',
        'mission.strike_desc': 'Удар по целям',
        'mission.multi': 'MULTI',
        'mission.multi_desc': 'Универсал',
        
        // Guide Page
        'guide.title': 'ГАЙД ПО ВООРУЖЕНИЮ',
        'guide.subtitle': 'WEAPONS GUIDE',
        'guide.all': 'ВСЁ',
        'guide.gun': 'ПУШКИ',
        'guide.a2a': 'ВОЗДУХ-ВОЗДУХ',
        'guide.a2g': 'ВОЗДУХ-ЗЕМЛЯ',
        'guide.bomb': 'БОМБЫ',
        'guide.spec': 'СПЕЦИАЛЬНОЕ',
        'guide.targets': 'Цели',
        'guide.tactics': 'Тактика',
        'guide.tips': 'Советы',
        'guide.platforms': 'Совместимые ЛА',
        'guide.range': 'Дальность',
        'guide.speed': 'Скорость',
        'guide.guidance_ir': 'ИК-наведение',
        'guide.guidance_radar': 'Радар',
        'guide.guidance_laser': 'Лазер',
        'guide.guidance_opt': 'Оптика',
        'guide.guidance_gps': 'GPS/INS',
        'guide.guidance_passrad': 'Пасс. радар',
        'guide.guidance_none': 'Без наведения',
        'guide.cat_a2a': 'Воздух-Воздух',
        'guide.cat_a2g': 'Воздух-Земля',
        'guide.cat_bomb': 'Бомба',
        'guide.cat_spec': 'Специальное',
        'guide.cat_gun': 'Пушка'
    },
    
    en: {
        // Header
        'header.title': 'NUCLEAR OPTION',
        'header.version': 'DATABASE V16.2',
        'header.theme': 'TACTICAL GREEN',
        'header.class': 'UNCLASSIFIED',
        
        // Navigation
        'nav.config': 'CONFIGURATOR',
        'nav.arsenal': 'ARSENAL',
        'nav.guide': 'GUIDE',
        
        // Configurator
        'config.title': 'Loadout Configurator',
        'config.carrier': '1. CARRIER',
        'config.select_placeholder': '-- SELECT AIRCRAFT --',
        'config.planes': 'AIRCRAFT',
        'config.helicopters': 'HELICOPTERS / VTOL',
        'config.pylons': '2. HARDPOINTS',
        'config.systems_online': 'SYSTEMS ONLINE',
        'config.waiting': 'WAITING FOR CARRIER SELECTION...',
        'config.max_load': 'MAX PAYLOAD',
        'config.current_weight': 'CURRENT WEIGHT',
        'config.load': 'LOAD',
        'config.overload': 'OVERLOAD!',
        'config.hardpoint': 'HARDPOINT',
        'config.empty': '-- EMPTY --',
        'pylons.vehiclesOnly': '[ VEHICLES ONLY ]',
        
        // Save/Share
        'save.placeholder': 'Loadout name...',
        'save.button': 'SAVE',
        'share.button': 'SHARE',
        'share.copied': 'COPIED',
        'loadouts.title': 'MY LOADOUTS',
        'loadouts.empty': 'No saved loadouts',
        'loadouts.delete_confirm': 'Delete loadout',
        'loadouts.overwrite_confirm': 'already exists. Overwrite?',
        
        // Arsenal
        'arsenal.title': 'FULL ARSENAL',
        'arsenal.subtitle': 'ALL WEAPON TYPES',
        'arsenal.search': 'SEARCH...',
        'arsenal.filters': 'FILTERS',
        'arsenal.reset': 'RESET ALL',
        'arsenal.no_results': 'NO MATCHES',
        
        // Filter categories
        'filter.category': 'CATEGORY',
        'filter.guidance': 'GUIDANCE',
        'filter.targets': 'TARGETS',
        'filter.compat': 'COMPATIBILITY',
        'filter.any_carrier': '-- ANY CARRIER --',
        
        // Categories
        'cat.a2a': 'A2A',
        'cat.a2g': 'A2G',
        'cat.bomb': 'BOMBS',
        'cat.spec': 'SPECIAL',
        'cat.gun': 'GUNS',
        'cat.surf': 'GROUND',
        
        // Guidance
        'guid.radar': 'RADAR',
        'guid.ir': 'IR',
        'guid.opt': 'OPTICAL',
        'guid.gps': 'GPS/INS',
        'guid.laser': 'LASER',
        
        // Targets
        'tgt.air': 'AIR',
        'tgt.tank': 'ARMOR',
        'tgt.ship': 'NAVAL',
        'tgt.radar': 'RADAR',
        'tgt.bld': 'STRUCTURES',
        
        // Table
        'table.name': 'NAME',
        'table.type': 'TYPE',
        'table.guidance': 'GUIDANCE',
        'table.specs': 'SPECS (Range/Speed)',
        'table.target': 'TARGET',
        'table.desc': 'COMPATIBILITY / DESCRIPTION',
        
        // Groups
        'group.a2a': 'AIR-TO-AIR MISSILES',
        'group.a2g': 'AIR-TO-GROUND MISSILES',
        'group.bomb': 'BOMBS',
        'group.gun': 'GUNS / CANNONS',
        'group.spec': 'SPECIAL / NUCLEAR',
        'group.surf': 'SURFACE-TO-AIR',
        
        // Misc
        'compat.all': 'All',
        'compat.ground_only': 'Ground only',
        'compat.label': 'COMPAT:',
        
        // Alerts
        'alert.enter_name': 'Enter loadout name',
        'alert.select_carrier': 'Select a carrier first',
        'alert.copy_link': 'Copy link:',
        'alert.delete_loadout': 'Delete loadout',
        'alert.overwrite_confirm': 'already exists. Overwrite?',
        
        // Modal
        'modal.cancel': 'Cancel',
        
        // Mission Presets
        'mission.title': 'MISSION PRESETS',
        'mission.cap': 'CAP',
        'mission.cap_desc': 'Combat Air Patrol',
        'mission.cas': 'CAS',
        'mission.cas_desc': 'Close Air Support',
        'mission.sead': 'SEAD',
        'mission.sead_desc': 'Suppress Air Defense',
        'mission.strike': 'STRIKE',
        'mission.strike_desc': 'Ground Strike',
        'mission.multi': 'MULTI',
        'mission.multi_desc': 'Multi-role',
        
        // Guide Page
        'guide.title': 'WEAPONS GUIDE',
        'guide.subtitle': 'WEAPONS GUIDE',
        'guide.all': 'ALL',
        'guide.gun': 'GUNS',
        'guide.a2a': 'AIR-TO-AIR',
        'guide.a2g': 'AIR-TO-GROUND',
        'guide.bomb': 'BOMBS',
        'guide.spec': 'SPECIAL',
        'guide.targets': 'Targets',
        'guide.tactics': 'Tactics',
        'guide.tips': 'Tips',
        'guide.platforms': 'Compatible Platforms',
        'guide.range': 'Range',
        'guide.speed': 'Speed',
        'guide.guidance_ir': 'IR Homing',
        'guide.guidance_radar': 'Radar',
        'guide.guidance_laser': 'Laser',
        'guide.guidance_opt': 'Optical',
        'guide.guidance_gps': 'GPS/INS',
        'guide.guidance_passrad': 'Passive Radar',
        'guide.guidance_none': 'Unguided',
        'guide.cat_a2a': 'Air-to-Air',
        'guide.cat_a2g': 'Air-to-Ground',
        'guide.cat_bomb': 'Bomb',
        'guide.cat_spec': 'Special',
        'guide.cat_gun': 'Gun'
    },
    
    ua: {
        // Header
        'header.title': 'NUCLEAR OPTION',
        'header.version': 'DATABASE V16.2',
        'header.theme': 'TACTICAL GREEN',
        'header.class': 'UNCLASSIFIED',
        
        // Navigation
        'nav.config': 'КОНФІГУРАТОР',
        'nav.arsenal': 'АРСЕНАЛ',
        'nav.guide': 'ГАЙД',
        
        // Configurator
        'config.title': 'Конфігуратор Озброєння',
        'config.carrier': '1. НОСІЙ',
        'config.select_placeholder': '-- ОБЕРІТЬ ЛА --',
        'config.planes': 'ЛІТАКИ',
        'config.helicopters': 'ВЕРТОЛЬОТИ / VTOL',
        'config.pylons': '2. ТОЧКИ ПІДВІСУ',
        'config.systems_online': 'SYSTEMS ONLINE',
        'config.waiting': 'ОЧІКУВАННЯ ВИБОРУ НОСІЯ...',
        'config.max_load': 'МАКС. НАВАНТАЖЕННЯ',
        'config.current_weight': 'ПОТОЧНА ВАГА',
        'config.load': 'НАВАНТАЖЕННЯ',
        'config.overload': 'ПЕРЕВАНТАЖЕННЯ!',
        'config.hardpoint': 'HARDPOINT',
        'config.empty': '-- ПУСТО --',
        'pylons.vehiclesOnly': '[ ТІЛЬКИ ТЕХНІКА ]',
        
        // Save/Share
        'save.placeholder': 'Назва лоадауту...',
        'save.button': 'ЗБЕРЕГТИ',
        'share.button': 'ПОДІЛИТИСЯ',
        'share.copied': 'СКОПІЙОВАНО',
        'loadouts.title': 'МОЇ ЛОАДАУТИ',
        'loadouts.empty': 'Немає збережених лоадаутів',
        'loadouts.delete_confirm': 'Видалити лоадаут',
        'loadouts.overwrite_confirm': 'вже існує. Перезаписати?',
        
        // Arsenal
        'arsenal.title': 'ПОВНИЙ АРСЕНАЛ',
        'arsenal.subtitle': 'ВСІ ТИПИ ОЗБРОЄННЯ',
        'arsenal.search': 'ПОШУК...',
        'arsenal.filters': 'ФІЛЬТРИ',
        'arsenal.reset': 'СКИНУТИ ВСЕ',
        'arsenal.no_results': 'НЕМАЄ ЗБІГІВ',
        
        // Filter categories
        'filter.category': 'КАТЕГОРІЯ',
        'filter.guidance': 'НАВЕДЕННЯ',
        'filter.targets': 'ЦІЛІ',
        'filter.compat': 'СУМІСНІСТЬ',
        'filter.any_carrier': '-- БУДЬ-ЯКИЙ НОСІЙ --',
        
        // Categories
        'cat.a2a': 'П-П (A2A)',
        'cat.a2g': 'П-З (A2G)',
        'cat.bomb': 'БОМБИ',
        'cat.spec': 'СПЕЦ',
        'cat.gun': 'ГАРМАТИ',
        'cat.surf': 'НАЗЕМНЕ',
        
        // Guidance
        'guid.radar': 'РАДАР',
        'guid.ir': 'ІЧ (IR)',
        'guid.opt': 'ОПТИКА',
        'guid.gps': 'GPS/INS',
        'guid.laser': 'ЛАЗЕР',
        
        // Targets
        'tgt.air': 'ПОВІТРЯ',
        'tgt.tank': 'ТЕХНІКА',
        'tgt.ship': 'ФЛОТ',
        'tgt.radar': 'РАДАР',
        'tgt.bld': 'БУДІВЛІ',
        
        // Table
        'table.name': 'НАЗВА',
        'table.type': 'ТИП',
        'table.guidance': 'НАВЕДЕННЯ',
        'table.specs': 'ТТХ (Дал/Швид)',
        'table.target': 'ЦІЛЬ',
        'table.desc': 'СУМІСНІСТЬ / ОПИС',
        
        // Groups
        'group.a2a': 'РАКЕТИ ПОВІТРЯ-ПОВІТРЯ',
        'group.a2g': 'РАКЕТИ ПОВІТРЯ-ЗЕМЛЯ',
        'group.bomb': 'БОМБОВЕ ОЗБРОЄННЯ',
        'group.gun': 'СТРІЛЕЦЬКЕ ГАРМАТНЕ',
        'group.spec': 'СПЕЦІАЛЬНЕ / ЯДЕРНЕ',
        'group.surf': 'НАЗЕМНЕ ППО / ПРО',
        
        // Misc
        'compat.all': 'Всі',
        'compat.ground_only': 'Тільки наземне',
        'compat.label': 'СУМІСН:',
        
        // Alerts
        'alert.enter_name': 'Введіть назву лоадауту',
        'alert.select_carrier': 'Спочатку оберіть носій',
        'alert.copy_link': 'Скопіюйте посилання:',
        'alert.delete_loadout': 'Видалити лоадаут',
        'alert.overwrite_confirm': 'вже існує. Перезаписати?',
        
        // Modal
        'modal.cancel': 'Скасувати',
        
        // Mission Presets
        'mission.title': 'ПРЕСЕТИ МІСІЙ',
        'mission.cap': 'CAP',
        'mission.cap_desc': 'Повітряний патруль',
        'mission.cas': 'CAS',
        'mission.cas_desc': 'Підтримка з повітря',
        'mission.sead': 'SEAD',
        'mission.sead_desc': 'Придушення ППО',
        'mission.strike': 'STRIKE',
        'mission.strike_desc': 'Удар по цілях',
        'mission.multi': 'MULTI',
        'mission.multi_desc': 'Універсал',
        
        // Guide Page
        'guide.title': 'ГАЙД ПО ОЗБРОЄННЮ',
        'guide.subtitle': 'WEAPONS GUIDE',
        'guide.all': 'ВСЕ',
        'guide.gun': 'ГАРМАТИ',
        'guide.a2a': 'ПОВІТРЯ-ПОВІТРЯ',
        'guide.a2g': 'ПОВІТРЯ-ЗЕМЛЯ',
        'guide.bomb': 'БОМБИ',
        'guide.spec': 'СПЕЦІАЛЬНЕ',
        'guide.targets': 'Цілі',
        'guide.tactics': 'Тактика',
        'guide.tips': 'Поради',
        'guide.platforms': 'Сумісні ЛА',
        'guide.range': 'Дальність',
        'guide.speed': 'Швидкість',
        'guide.guidance_ir': 'ІЧ-наведення',
        'guide.guidance_radar': 'Радар',
        'guide.guidance_laser': 'Лазер',
        'guide.guidance_opt': 'Оптика',
        'guide.guidance_gps': 'GPS/INS',
        'guide.guidance_passrad': 'Пас. радар',
        'guide.guidance_none': 'Без наведення',
        'guide.cat_a2a': 'Повітря-Повітря',
        'guide.cat_a2g': 'Повітря-Земля',
        'guide.cat_bomb': 'Бомба',
        'guide.cat_spec': 'Спеціальне',
        'guide.cat_gun': 'Гармата'
    }
};

// Current language
let currentLang = localStorage.getItem('nuclearOptionLang') || 'ru';

// Get translation
function t(key) {
    return translations[currentLang]?.[key] || translations['ru'][key] || key;
}

// Set language
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('nuclearOptionLang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-emerald-600', 'text-white');
        btn.classList.add('text-emerald-400');
    });
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-emerald-600', 'text-white');
        activeBtn.classList.remove('text-emerald-400');
    }
    
    // Update plane dropdown
    const planeSelect = document.getElementById('plane-select');
    if (planeSelect) {
        // Update placeholder option
        const noneOption = planeSelect.querySelector('option[value="none"]');
        if (noneOption) noneOption.textContent = t('config.select_placeholder');
        
        // Update optgroups
        const optgroups = planeSelect.querySelectorAll('optgroup');
        if (optgroups[0]) optgroups[0].label = t('config.planes');
        if (optgroups[1]) optgroups[1].label = t('config.helicopters');
    }
    
    // Update compat dropdown
    const compatSelect = document.getElementById('compat-select');
    if (compatSelect) {
        const anyOption = compatSelect.querySelector('option[value="all"]');
        if (anyOption) anyOption.textContent = t('filter.any_carrier');
        
        // Update optgroups
        const optgroups = compatSelect.querySelectorAll('optgroup');
        if (optgroups[0]) optgroups[0].label = t('config.planes');
        if (optgroups[1]) optgroups[1].label = t('config.helicopters');
    }
    
    // Update filter chips
    const chipTranslations = {
        'cat': { 'a2a': 'cat.a2a', 'a2g': 'cat.a2g', 'bomb': 'cat.bomb', 'gun': 'cat.gun', 'surf': 'cat.surf' },
        'guid': { 'radar': 'guid.radar', 'ir': 'guid.ir', 'opt': 'guid.opt', 'gps': 'guid.gps', 'laser': 'guid.laser' },
        'tgt': { 'air': 'tgt.air', 'tank': 'tgt.tank', 'ship': 'tgt.ship', 'rad': 'tgt.radar', 'bld': 'tgt.bld' }
    };
    
    document.querySelectorAll('.filter-chip').forEach(chip => {
        const onclick = chip.getAttribute('onclick');
        if (!onclick) return;
        
        // Parse the chip type and value from onclick
        const match = onclick.match(/toggleChip\('(\w+)',\s*'(\w+)'/);
        if (match) {
            const [, type, val] = match;
            const key = chipTranslations[type]?.[val];
            if (key) chip.textContent = t(key);
        }
    });
    
    // Refresh dynamic content
    if (typeof runFilters === 'function') runFilters();
    if (typeof updateLoadoutsList === 'function') updateLoadoutsList();
    
    // Regenerate pylon dropdowns with new language
    if (typeof loadPlane === 'function') {
        const planeSelect = document.getElementById('plane-select');
        if (planeSelect && planeSelect.value !== 'none') {
            loadPlane();
        }
    }
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
