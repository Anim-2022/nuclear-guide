// ============== WEAPONS GUIDE DATA ==============

const weaponGuides = {
    // === A2A MISSILES ===
    irms1: {
        cat: 'a2a',
        name: 'IRM-S1',
        guidance: 'ir',
        range: '5 км',
        speed: '2529 км/ч',
        bestAgainst: {
            ru: ['Вертолёты', 'Ближний бой', 'Низколетящие цели'],
            en: ['Helicopters', 'Close combat', 'Low-flying targets'],
            ua: ['Вертольоти', 'Ближній бій', 'Низьколітаючі цілі']
        },
        tactics: {
            ru: 'Ракета ближнего боя. Эффективна на дистанции 1-3 км. Идеальна для вертолётов из-за низкой скорости целей. FOX-2 — не требует радарного захвата.',
            en: 'Close-range missile. Effective at 1-3 km. Ideal for helicopters due to low target speed. FOX-2 — no radar lock required.',
            ua: 'Ракета ближнього бою. Ефективна на дистанції 1-3 км. Ідеальна для вертольотів. FOX-2 — не потребує радарного захоплення.'
        },
        tips: {
            ru: '• Используй после визуального обнаружения\n• Уязвима к тепловым ловушкам\n• Лучше всего работает в хвост цели',
            en: '• Use after visual detection\n• Vulnerable to flares\n• Works best from behind the target',
            ua: '• Використовуй після візуального виявлення\n• Вразлива до теплових пасток\n• Найкраще працює в хвіст цілі'
        },
        platforms: ['Ibis', 'Chicane', 'Tarantula']
    },
    irms2: {
        cat: 'a2a',
        name: 'IRM-S2',
        guidance: 'ir',
        range: '10 км',
        speed: '2794 км/ч',
        bestAgainst: {
            ru: ['Истребители', 'Вертолёты', 'Маневрирующие цели'],
            en: ['Fighters', 'Helicopters', 'Maneuvering targets'],
            ua: ['Винищувачі', 'Вертольоти', 'Маневруючі цілі']
        },
        tactics: {
            ru: 'Стандартная ИК-ракета. Пуск с 3-5 км для максимальной вероятности. Захват после визуального обнаружения. Хорошо работает в догфайте.',
            en: 'Standard IR missile. Launch from 3-5 km for best results. Lock after visual detection. Good for dogfighting.',
            ua: 'Стандартна ІЧ-ракета. Пуск з 3-5 км для максимальної ймовірності. Захоплення після візуального виявлення.'
        },
        tips: {
            ru: '• FOX-2 — огонь и забудь\n• Не требует постоянного сопровождения\n• Малая ЭПР делает её трудноуязвимой для ПВО',
            en: '• FOX-2 — fire and forget\n• No constant tracking needed\n• Small RCS makes it hard for SAMs to hit',
            ua: '• FOX-2 — вистрілив і забув\n• Не потребує постійного супроводу\n• Мала ЕПР робить її важкою ціллю для ППО'
        },
        platforms: ['Cricket', 'Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Medusa']
    },
    mmrs3: {
        cat: 'a2a',
        name: 'MMR-S3',
        guidance: 'ir',
        range: '15 км',
        speed: '2832 км/ч',
        bestAgainst: {
            ru: ['Истребители на средней дистанции', 'БПЛА', 'Отступающие цели'],
            en: ['Medium-range fighters', 'UAVs', 'Retreating targets'],
            ua: ['Винищувачі на середній дистанції', 'БПЛА', 'Відступаючі цілі']
        },
        tactics: {
            ru: 'Увеличенная дальность позволяет поражать до входа в ближний бой. Пуск с 8-12 км. Хорошо комбинируется с радарными ракетами.',
            en: 'Extended range allows engagement before dogfight. Launch from 8-12 km. Combines well with radar missiles.',
            ua: 'Збільшена дальність дозволяє вражати до входу в ближній бій. Пуск з 8-12 км.'
        },
        tips: {
            ru: '• Промежуточное решение между IRM-S2 и Scythe\n• Дешевле радарных ракет\n• Всё ещё ИК — уязвима к ловушкам',
            en: '• Middle ground between IRM-S2 and Scythe\n• Cheaper than radar missiles\n• Still IR — vulnerable to flares',
            ua: '• Проміжне рішення між IRM-S2 та Scythe\n• Дешевша за радарні ракети\n• Все ще ІЧ — вразлива до пасток'
        },
        platforms: ['Chicane', 'Compass', 'Revoker', 'Vortex', 'Ifrit', 'Medusa']
    },
    scythe: {
        cat: 'a2a',
        name: 'AAM-29 Scythe',
        guidance: 'radar',
        range: '40 км',
        speed: '4140 км/ч',
        bestAgainst: {
            ru: ['Истребители за пределами визуального контакта', 'ДРЛО', 'Бомбардировщики'],
            en: ['BVR fighters', 'AWACS', 'Bombers'],
            ua: ['Винищувачі за межами візуального контакту', 'ДРЛВ', 'Бомбардувальники']
        },
        tactics: {
            ru: 'FOX-3 — активный радар. Пуск с 20-35 км по неманеврирующим целям. Требует первоначального захвата радаром носителя.',
            en: 'FOX-3 — active radar. Launch from 20-35 km at non-maneuvering targets. Requires initial radar lock.',
            ua: 'FOX-3 — активний радар. Пуск з 20-35 км по неманевруючих цілях. Потребує початкового захоплення радаром.'
        },
        tips: {
            ru: '• Огонь и забудь после активации ГСН\n• Уязвима к chaffам и маневрам\n• Используй на высоте для увеличения дальности',
            en: '• Fire and forget after seeker activation\n• Vulnerable to chaff and maneuvers\n• Use at altitude for extended range',
            ua: '• Вистрілив і забув після активації ГСН\n• Вразлива до дипольних відбивачів та маневрів'
        },
        platforms: ['Compass', 'Vortex', 'Revoker', 'Ifrit']
    },
    scimitar: {
        cat: 'a2a',
        name: 'AAM-36 Scimitar',
        guidance: 'radar',
        range: '100 км',
        speed: '4594 км/ч',
        bestAgainst: {
            ru: ['ДРЛО', 'Заправщики', 'Тяжёлые бомбардировщики', 'Высотные цели'],
            en: ['AWACS', 'Tankers', 'Heavy bombers', 'High-altitude targets'],
            ua: ['ДРЛВ', 'Заправники', 'Важкі бомбардувальники', 'Висотні цілі']
        },
        tactics: {
            ru: 'Дальнобойная ракета для крупных целей. Пуск с 50-80 км на большой высоте. Не эффективна против маневрирующих истребителей.',
            en: 'Long-range missile for large targets. Launch from 50-80 km at high altitude. Not effective against maneuvering fighters.',
            ua: 'Далекобійна ракета для великих цілей. Пуск з 50-80 км на великій висоті.'
        },
        tips: {
            ru: '• Лучший выбор против ДРЛО и заправщиков\n• Низкая маневренность — не для догфайта\n• Тяжёлая — занимает много веса',
            en: '• Best choice against AWACS and tankers\n• Low maneuverability — not for dogfighting\n• Heavy — takes up a lot of weight',
            ua: '• Найкращий вибір проти ДРЛВ та заправників\n• Низька маневреність — не для догфайту'
        },
        platforms: ['Vortex', 'Revoker', 'Ifrit', 'Medusa']
    },

    // === A2G MISSILES ===
    lynchpin: {
        cat: 'a2g',
        name: 'AGR-18 Lynchpin',
        guidance: 'laser',
        range: '6 км',
        speed: '2685 км/ч',
        bestAgainst: {
            ru: ['Лёгкая бронетехника', 'Грузовики', 'Пехотные позиции'],
            en: ['Light armor', 'Trucks', 'Infantry positions'],
            ua: ['Легка бронетехніка', 'Вантажівки', 'Піхотні позиції']
        },
        tactics: {
            ru: 'Лазерная ракета, требует подсвета цели. Идеальна для точечных ударов по лёгкой технике. Держи лазер на цели до попадания.',
            en: 'Laser-guided missile, requires lasing. Ideal for precision strikes on light vehicles. Keep laser on target until impact.',
            ua: 'Лазерна ракета, потребує підсвітки цілі. Ідеальна для точкових ударів по легкій техніці.'
        },
        tips: {
            ru: '• Дёшево и сердито\n• Можно подсвечивать с другого ЛА\n• Против танков используй Kingpin',
            en: '• Cheap and effective\n• Can be lased by another aircraft\n• Use Kingpin against tanks',
            ua: '• Дешево та ефективно\n• Можна підсвічувати з іншого ЛА'
        },
        platforms: ['Cricket', 'Ibis', 'Compass', 'Chicane']
    },
    kingpin: {
        cat: 'a2g',
        name: 'AGR-24 Kingpin',
        guidance: 'laser',
        range: '8 км',
        speed: '2714 км/ч',
        bestAgainst: {
            ru: ['Танки', 'БМП', 'Укреплённые позиции', 'ПВО'],
            en: ['Tanks', 'IFVs', 'Fortified positions', 'SAMs'],
            ua: ['Танки', 'БМП', 'Укріплені позиції', 'ППО']
        },
        tactics: {
            ru: 'Тяжёлая лазерная ракета. Гарантированное уничтожение ОБТ. Требует постоянного подсвета. Пуск с 4-6 км.',
            en: 'Heavy laser missile. Guaranteed MBT kill. Requires constant lasing. Launch from 4-6 km.',
            ua: 'Важка лазерна ракета. Гарантоване знищення ОБТ. Потребує постійної підсвітки.'
        },
        tips: {
            ru: '• Лучший убийца танков\n• Не прерывай подсвет до попадания\n• Может использоваться против катеров',
            en: '• Best tank killer\n• Don\'t break lasing until impact\n• Can be used against boats',
            ua: '• Найкращий вбивця танків\n• Не переривай підсвітку до влучання'
        },
        platforms: ['Cricket', 'Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Chicane', 'Ibis']
    },
    agm48: {
        cat: 'a2g',
        name: 'AGM-48',
        guidance: 'opt',
        range: '10 км',
        speed: '1287 км/ч',
        bestAgainst: {
            ru: ['Танки', 'ЗРК', 'Стационарные цели'],
            en: ['Tanks', 'SAMs', 'Stationary targets'],
            ua: ['Танки', 'ЗРК', 'Стаціонарні цілі']
        },
        tactics: {
            ru: 'Малая оптическая ракета. Захватывай цель в оптический прицел, пускай и забудь. Хороша для множественных целей.',
            en: 'Small optical missile. Lock target in optical sight, fire and forget. Good for multiple targets.',
            ua: 'Мала оптична ракета. Захоплюй ціль в оптичний приціл, пускай і забудь.'
        },
        tips: {
            ru: '• Огонь и забудь\n• Лёгкая — можно нести много\n• Медленная — цели могут уклониться',
            en: '• Fire and forget\n• Light — can carry many\n• Slow — targets can evade',
            ua: '• Вистрілив і забув\n• Легка — можна нести багато'
        },
        platforms: ['Cricket', 'Ibis', 'Brawler', 'Compass', 'Chicane', 'Tarantula']
    },
    agm68: {
        cat: 'a2g',
        name: 'AGM-68',
        guidance: 'opt',
        range: '15 км',
        speed: '1416 км/ч',
        bestAgainst: {
            ru: ['Тяжёлая бронетехника', 'Здания', 'Корабли'],
            en: ['Heavy armor', 'Buildings', 'Ships'],
            ua: ['Важка бронетехніка', 'Будівлі', 'Кораблі']
        },
        tactics: {
            ru: 'Убийца танков. Большая боеголовка уничтожает даже укреплённые позиции. Пуск с 8-12 км.',
            en: 'Tank killer. Large warhead destroys even fortified positions. Launch from 8-12 km.',
            ua: 'Вбивця танків. Велика бойова частина знищує навіть укріплені позиції.'
        },
        tips: {
            ru: '• Гарантированное уничтожение ОБТ\n• Хороша против зданий\n• Тяжелее AGM-48',
            en: '• Guaranteed MBT kill\n• Good against buildings\n• Heavier than AGM-48',
            ua: '• Гарантоване знищення ОБТ\n• Добра проти будівель'
        },
        platforms: ['Cricket', 'Compass', 'Brawler', 'Chicane', 'Revoker', 'Vortex', 'Ifrit']
    },
    atp1: {
        cat: 'a2g',
        name: 'ATP-1',
        guidance: 'opt',
        range: '8 км',
        speed: '1070 км/ч',
        bestAgainst: {
            ru: ['Танки', 'БМП', 'Укрытая техника'],
            en: ['Tanks', 'IFVs', 'Covered vehicles'],
            ua: ['Танки', 'БМП', 'Укрита техніка']
        },
        tactics: {
            ru: 'Эксклюзивный ПТУР для вертолёта Chicane. Атака сверху — поражает верхнюю броню. Медленная, но высокоточная.',
            en: 'Exclusive ATGM for Chicane helicopter. Top-attack — hits upper armor. Slow but highly accurate.',
            ua: 'Ексклюзивний ПТРК для вертольота Chicane. Атака зверху — вража верхню броню.'
        },
        tips: {
            ru: '• Только для Chicane\n• Атака сверху = максимальный урон\n• Идеальна против танковых колонн',
            en: '• Chicane exclusive\n• Top-attack = maximum damage\n• Ideal against tank columns',
            ua: '• Тільки для Chicane\n• Атака зверху = максимальний урон'
        },
        platforms: ['Chicane']
    },
    tusko: {
        cat: 'a2g',
        name: 'Tusko-B',
        guidance: 'opt',
        range: '60 км',
        speed: '3269 км/ч',
        bestAgainst: {
            ru: ['Корабли', 'Крупные здания', 'Стационарные объекты'],
            en: ['Ships', 'Large buildings', 'Stationary objects'],
            ua: ['Кораблі', 'Великі будівлі', 'Стаціонарні об\'єкти']
        },
        tactics: {
            ru: 'Сверхзвуковая ракета. Пуск с большой дистанции (~40 км), даёт время на отход. Против кораблей — потопит эсминец.',
            en: 'Supersonic missile. Launch from long distance (~40 km), gives time to retreat. Against ships — will sink a destroyer.',
            ua: 'Надзвукова ракета. Пуск з великої дистанції (~40 км), дає час на відхід.'
        },
        tips: {
            ru: '• Высокая скорость = сложно перехватить\n• Отличный урон по зданиям\n• Дорогая и тяжёлая',
            en: '• High speed = hard to intercept\n• Excellent building damage\n• Expensive and heavy',
            ua: '• Висока швидкість = складно перехопити\n• Відмінний урон по будівлях'
        },
        platforms: ['Revoker', 'Vortex', 'Ifrit', 'Darkreach']
    },
    arad: {
        cat: 'a2g',
        name: 'ARAD-116',
        guidance: 'passrad',
        range: '60 км',
        speed: '3641 км/ч',
        bestAgainst: {
            ru: ['Радары ПВО', 'ЗРК', 'Мобильные РЛС'],
            en: ['SAM radars', 'SAM systems', 'Mobile radars'],
            ua: ['Радари ППО', 'ЗРК', 'Мобільні РЛС']
        },
        tactics: {
            ru: 'SEAD-ракета (подавление ПВО). Наводится на излучение радара. Пуск когда ЗРК захватывает тебя — ракета сама найдёт цель.',
            en: 'SEAD missile (air defense suppression). Homes on radar emissions. Launch when SAM locks you — missile finds the target.',
            ua: 'SEAD-ракета (придушення ППО). Наводиться на випромінювання радара. Пуск коли ЗРК захоплює тебе.'
        },
        tips: {
            ru: '• Работает только по активным радарам\n• Если радар выключат — ракета потеряет цель\n• Комбинируй с бомбами для гарантии',
            en: '• Only works on active radars\n• If radar turns off — missile loses target\n• Combine with bombs for guarantee',
            ua: '• Працює тільки по активних радарах\n• Якщо радар вимкнуть — ракета втратить ціль'
        },
        platforms: ['Revoker', 'Vortex', 'Ifrit', 'Medusa']
    },
    ashm: {
        cat: 'a2g',
        name: 'AShM-300',
        guidance: 'radar',
        range: '250 км',
        speed: '1536 км/ч',
        bestAgainst: {
            ru: ['Крупные корабли', 'Авианосцы', 'Морские конвои'],
            en: ['Large ships', 'Aircraft carriers', 'Naval convoys'],
            ua: ['Великі кораблі', 'Авіаносці', 'Морські конвої']
        },
        tactics: {
            ru: 'Противокорабельная ракета с активным радаром. Пуск с 100+ км, ракета сама найдёт корабль. Летит низко над водой.',
            en: 'Anti-ship missile with active radar. Launch from 100+ km, missile finds ship itself. Flies low over water.',
            ua: 'Протикорабельна ракета з активним радаром. Пуск з 100+ км, ракета сама знайде корабель.'
        },
        tips: {
            ru: '• Лучший выбор против флота\n• Низковысотный профиль — сложно перехватить\n• Не для наземных целей',
            en: '• Best choice against fleet\n• Low-altitude profile — hard to intercept\n• Not for ground targets',
            ua: '• Найкращий вибір проти флоту\n• Низьковисотний профіль — складно перехопити'
        },
        platforms: ['Ifrit', 'Medusa', 'Darkreach']
    },
    almc450: {
        cat: 'a2g',
        name: 'ALM-C450',
        guidance: 'gps',
        range: '1000 км',
        speed: '1241 км/ч',
        bestAgainst: {
            ru: ['Стратегические объекты', 'Базы', 'Штабы', 'Корабли'],
            en: ['Strategic objects', 'Bases', 'HQs', 'Ships'],
            ua: ['Стратегічні об\'єкти', 'Бази', 'Штаби', 'Кораблі']
        },
        tactics: {
            ru: 'Крылатая ракета большой дальности. Запускай из безопасной зоны, введи координаты — ракета сама долетит.',
            en: 'Long-range cruise missile. Launch from safety, enter coordinates — missile flies itself.',
            ua: 'Крилата ракета великої дальності. Запускай з безпечної зони, введи координати — ракета сама долетить.'
        },
        tips: {
            ru: '• Дальность 1000 км — не входи в зону ПВО\n• GPS-наведение — не собьётся\n• Медленная — можно перехватить',
            en: '• 1000 km range — don\'t enter SAM zone\n• GPS guidance — won\'t miss\n• Slow — can be intercepted',
            ua: '• Дальність 1000 км — не входь в зону ППО\n• GPS-наведення — не зіб\'ється'
        },
        platforms: ['Darkreach', 'Medusa']
    },
    piledriver: {
        cat: 'a2g',
        name: 'Piledriver TBM',
        guidance: 'gps',
        range: '250 км',
        speed: '5149 км/ч',
        bestAgainst: {
            ru: ['Стратегические базы', 'Командные центры', 'Критическая инфраструктура'],
            en: ['Strategic bases', 'Command centers', 'Critical infrastructure'],
            ua: ['Стратегічні бази', 'Командні центри', 'Критична інфраструктура']
        },
        tactics: {
            ru: 'Тактическая баллистическая ракета. Гиперзвуковая — практически неперехватываема. Для крупных стационарных целей.',
            en: 'Tactical ballistic missile. Hypersonic — virtually uninterceptable. For large stationary targets.',
            ua: 'Тактична балістична ракета. Гіперзвукова — практично неперехоплювана.'
        },
        tips: {
            ru: '• Только для Darkreach\n• Сверхтяжёлая часть груза\n• Уничтожает целые базы',
            en: '• Darkreach only\n• Super-heavy payload\n• Destroys entire bases',
            ua: '• Тільки для Darkreach\n• Надважка частина вантажу'
        },
        platforms: ['Darkreach']
    },

    // === BOMBS ===
    pab80: {
        cat: 'bomb',
        name: 'PAB-80LR',
        guidance: 'opt',
        range: 'Планирующая',
        speed: '-',
        bestAgainst: {
            ru: ['Лёгкая техника', 'Пехота', 'Мягкие цели'],
            en: ['Light vehicles', 'Infantry', 'Soft targets'],
            ua: ['Легка техніка', 'Піхота', 'М\'які цілі']
        },
        tactics: {
            ru: 'Малая планирующая бомба. Сброс с высоты 2-4 км для максимальной дальности. Захват цели перед сбросом.',
            en: 'Small glide bomb. Drop from 2-4 km altitude for maximum range. Lock target before release.',
            ua: 'Мала плануюча бомба. Скидання з висоти 2-4 км для максимальної дальності.'
        },
        tips: {
            ru: '• Лёгкая — можно нести много\n• Дальность зависит от высоты\n• Против танков — используй крупнее',
            en: '• Light — can carry many\n• Range depends on altitude\n• Against tanks — use larger',
            ua: '• Легка — можна нести багато\n• Дальність залежить від висоти'
        },
        platforms: ['Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Medusa']
    },
    pab125: {
        cat: 'bomb',
        name: 'PAB-125',
        guidance: 'opt',
        range: 'Управляемая',
        speed: '-',
        bestAgainst: {
            ru: ['Техника', 'Здания', 'Укреплённые позиции'],
            en: ['Vehicles', 'Buildings', 'Fortified positions'],
            ua: ['Техніка', 'Будівлі', 'Укріплені позиції']
        },
        tactics: {
            ru: 'Точная управляемая бомба. Универсальна для большинства целей. Сброс с 1-3 км высоты.',
            en: 'Precision guided bomb. Universal for most targets. Drop from 1-3 km altitude.',
            ua: 'Точна керована бомба. Універсальна для більшості цілей.'
        },
        tips: {
            ru: '• Оптимальный баланс веса и мощности\n• Хороша против колонн техники\n• Не для бункеров',
            en: '• Optimal balance of weight and power\n• Good against vehicle columns\n• Not for bunkers',
            ua: '• Оптимальний баланс ваги та потужності\n• Добра проти колон техніки'
        },
        platforms: ['Cricket', 'Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit']
    },
    pab250: {
        cat: 'bomb',
        name: 'PAB-250',
        guidance: 'opt',
        range: 'Управляемая',
        speed: '-',
        bestAgainst: {
            ru: ['Бронетехника', 'Здания', 'Позиции ПВО'],
            en: ['Armored vehicles', 'Buildings', 'SAM positions'],
            ua: ['Бронетехніка', 'Будівлі', 'Позиції ППО']
        },
        tactics: {
            ru: 'Средняя бомба с хорошим поражающим эффектом. Уничтожает танки и укрепления. Сброс с 1-2 км.',
            en: 'Medium bomb with good effect. Destroys tanks and fortifications. Drop from 1-2 km.',
            ua: 'Середня бомба з добрим уражаючим ефектом. Знищує танки та укріплення.'
        },
        tips: {
            ru: '• Надёжное уничтожение бронетехники\n• Площадь поражения больше PAB-125\n• Основной выбор для штурма',
            en: '• Reliable armor destruction\n• Larger blast area than PAB-125\n• Main choice for assault',
            ua: '• Надійне знищення бронетехніки\n• Площа ураження більша за PAB-125'
        },
        platforms: ['Cricket', 'Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Darkreach']
    },
    gpo500: {
        cat: 'bomb',
        name: 'GPO-500',
        guidance: 'opt',
        range: 'Управляемая',
        speed: '-',
        bestAgainst: {
            ru: ['Крупные здания', 'Укреплённые бункеры', 'Скопления техники'],
            en: ['Large buildings', 'Fortified bunkers', 'Vehicle clusters'],
            ua: ['Великі будівлі', 'Укріплені бункери', 'Скупчення техніки']
        },
        tactics: {
            ru: 'Тяжёлая бомба для крупных целей. Гарантированное уничтожение зданий. Сброс с 1-2 км перед выходом из пикирования.',
            en: 'Heavy bomb for large targets. Guaranteed building destruction. Drop from 1-2 km before pullout.',
            ua: 'Важка бомба для великих цілей. Гарантоване знищення будівель.'
        },
        tips: {
            ru: '• Большой радиус поражения\n• Одна бомба = одно здание\n• Тяжёлая — влияет на манёвренность',
            en: '• Large blast radius\n• One bomb = one building\n• Heavy — affects maneuverability',
            ua: '• Великий радіус ураження\n• Одна бомба = одна будівля'
        },
        platforms: ['Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Darkreach']
    },
    gpo2p: {
        cat: 'bomb',
        name: 'GPO-2P Auger',
        guidance: 'laser',
        range: 'Управляемая',
        speed: '-',
        bestAgainst: {
            ru: ['Бункеры', 'Подземные укрытия', 'ВПП', 'Мосты'],
            en: ['Bunkers', 'Underground shelters', 'Runways', 'Bridges'],
            ua: ['Бункери', 'Підземні укриття', 'ЗПС', 'Мости']
        },
        tactics: {
            ru: 'Бетонобойная бомба. Пробивает укреплённые цели. Требует лазерной подсветки. Сброс с пикирования.',
            en: 'Bunker buster bomb. Penetrates fortified targets. Requires laser lasing. Drop from dive.',
            ua: 'Бетонобійна бомба. Пробиває укріплені цілі. Потребує лазерної підсвітки.'
        },
        tips: {
            ru: '• Единственное оружие против бункеров\n• Требует подсвет до попадания\n• Разрушает ВПП',
            en: '• Only weapon against bunkers\n• Requires lasing until impact\n• Destroys runways',
            ua: '• Єдина зброя проти бункерів\n• Потребує підсвітки до влучання'
        },
        platforms: ['Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Darkreach']
    },
    demo: {
        cat: 'bomb',
        name: 'Demolition Bomb',
        guidance: 'opt',
        range: 'Управляемая',
        speed: '-',
        bestAgainst: {
            ru: ['Базы', 'Заводы', 'Площадные цели'],
            en: ['Bases', 'Factories', 'Area targets'],
            ua: ['Бази', 'Заводи', 'Площадні цілі']
        },
        tactics: {
            ru: 'Сверхтяжёлая бомба для массового уничтожения. Огромный радиус поражения. Используй только по скоплениям зданий.',
            en: 'Super-heavy bomb for mass destruction. Huge blast radius. Use only against building clusters.',
            ua: 'Надважка бомба для масового знищення. Величезний радіус ураження.'
        },
        tips: {
            ru: '• Уничтожает целые базы\n• Очень тяжёлая — 1000 кг\n• Darkreach и Tarantula',
            en: '• Destroys entire bases\n• Very heavy — 1000 kg\n• Darkreach and Tarantula',
            ua: '• Знищує цілі бази\n• Дуже важка — 1000 кг'
        },
        platforms: ['Tarantula', 'Darkreach']
    },

    // === SPECIAL ===
    alnd4: {
        cat: 'spec',
        name: 'ALND-4 (20кт)',
        guidance: 'gps',
        range: '1000 км',
        speed: '1112 км/ч',
        bestAgainst: {
            ru: ['ГОРОДА', 'Крупные базы', 'Стратегические объекты'],
            en: ['CITIES', 'Major bases', 'Strategic objects'],
            ua: ['МІСТА', 'Великі бази', 'Стратегічні об\'єкти']
        },
        tactics: {
            ru: '⚠️ ЯДЕРНАЯ КРЫЛАТАЯ РАКЕТА. 20 килотонн. Полное уничтожение в радиусе нескольких километров. Используй из безопасной зоны.',
            en: '⚠️ NUCLEAR CRUISE MISSILE. 20 kilotons. Complete destruction within several kilometers. Use from safe zone.',
            ua: '⚠️ ЯДЕРНА КРИЛАТА РАКЕТА. 20 кілотонн. Повне знищення в радіусі кількох кілометрів.'
        },
        tips: {
            ru: '• ОРУЖИЕ ПОСЛЕДНЕЙ НАДЕЖДЫ\n• Только для Darkreach\n• Изменит ход войны',
            en: '• WEAPON OF LAST RESORT\n• Darkreach only\n• Will change the war',
            ua: '• ЗБРОЯ ОСТАННЬОЇ НАДІЇ\n• Тільки для Darkreach'
        },
        platforms: ['Darkreach']
    },
    gpon: {
        cat: 'spec',
        name: 'GPO-N (Ядерная)',
        guidance: 'opt',
        range: 'Управляемая',
        speed: '-',
        bestAgainst: {
            ru: ['Крупные объекты', 'Скопления техники', 'Критическая инфраструктура'],
            en: ['Large objects', 'Vehicle clusters', 'Critical infrastructure'],
            ua: ['Великі об\'єкти', 'Скупчення техніки', 'Критична інфраструктура']
        },
        tactics: {
            ru: '⚠️ ЯДЕРНАЯ БОМБА. Тактический ядерный заряд. Сброс с пикирования, немедленный отход. Взрыв через несколько секунд.',
            en: '⚠️ NUCLEAR BOMB. Tactical nuclear warhead. Drop from dive, immediate retreat. Explosion in seconds.',
            ua: '⚠️ ЯДЕРНА БОМБА. Тактичний ядерний заряд. Скидання з пікірування, негайний відхід.'
        },
        tips: {
            ru: '• Меньше ALND-4, но достаточно\n• Можно нести на истребителях\n• Уходи СРАЗУ после сброса',
            en: '• Smaller than ALND-4, but enough\n• Can be carried by fighters\n• Leave IMMEDIATELY after drop',
            ua: '• Менша за ALND-4, але достатньо\n• Можна нести на винищувачах'
        },
        platforms: ['Compass', 'Revoker', 'Vortex', 'Ifrit', 'Darkreach']
    },

    // === GUNS ===
    gun_127mm: {
        cat: 'gun',
        name: '12.7mm MG',
        guidance: 'none',
        range: '1.5 км',
        speed: '-',
        bestAgainst: {
            ru: ['Пехота', 'Лёгкая техника', 'Вертолёты'],
            en: ['Infantry', 'Light vehicles', 'Helicopters'],
            ua: ['Піхота', 'Легка техніка', 'Вертольоти']
        },
        tactics: {
            ru: 'Базовый пулемёт калибра .50. Эффективен против пехоты и лёгкой техники. Бесконечный боезапас.',
            en: 'Basic .50 cal machine gun. Effective against infantry and light vehicles. Infinite ammo.',
            ua: 'Базовий кулемет калібру .50. Ефективний проти піхоти та легкої техніки.'
        },
        tips: {
            ru: '• Бесконечный боезапас\\n• Слабый урон по броне\\n• Хорош для добивания',
            en: '• Infinite ammo\\n• Weak against armor\\n• Good for finishing off',
            ua: '• Безкінечний боєзапас\\n• Слабкий урон по броні'
        },
        platforms: ['Ibis', 'Chicane']
    },
    gun_20mm: {
        cat: 'gun',
        name: '20mm Cannon',
        guidance: 'none',
        range: '2 км',
        speed: '-',
        bestAgainst: {
            ru: ['Истребители', 'Вертолёты', 'Лёгкая техника'],
            en: ['Fighters', 'Helicopters', 'Light vehicles'],
            ua: ['Винищувачі', 'Вертольоти', 'Легка техніка']
        },
        tactics: {
            ru: 'Стандартная авиапушка. Универсальна для воздушных целей и лёгкой наземной техники. Высокая скорострельность.',
            en: 'Standard aircraft cannon. Universal for air targets and light ground vehicles. High rate of fire.',
            ua: 'Стандартна авіагармата. Універсальна для повітряних цілей та легкої техніки.'
        },
        tips: {
            ru: '• Основное вооружение большинства ЛА\\n• Ограниченный боезапас\\n• Догфайт — твоя стихия',
            en: '• Main armament for most aircraft\\n• Limited ammo\\n• Dogfighting is your element',
            ua: '• Основне озброєння більшості ЛА\\n• Обмежений боєзапас'
        },
        platforms: ['Cricket', 'Compass', 'Chicane']
    },
    gun_27mm: {
        cat: 'gun',
        name: '27mm Autocannon',
        guidance: 'none',
        range: '2.5 км',
        speed: '-',
        bestAgainst: {
            ru: ['Истребители', 'Бронетехника', 'Вертолёты'],
            en: ['Fighters', 'Armored vehicles', 'Helicopters'],
            ua: ['Винищувачі', 'Бронетехніка', 'Вертольоти']
        },
        tactics: {
            ru: 'Встроенная пушка Ifrit. Высокий урон по всем типам целей. Используй против истребителей и лёгкой брони.',
            en: 'Built-in Ifrit cannon. High damage to all target types. Use against fighters and light armor.',
            ua: 'Вбудована гармата Ifrit. Високий урон по всіх типах цілей.'
        },
        tips: {
            ru: '• Эксклюзив Ifrit\\n• Пробивает лёгкую броню\\n• Отлично в догфайте',
            en: '• Ifrit exclusive\\n• Penetrates light armor\\n• Excellent in dogfight',
            ua: '• Ексклюзив Ifrit\\n• Пробиває легку броню'
        },
        platforms: ['Ifrit']
    },
    gun_30mm_rotary: {
        cat: 'gun',
        name: '30mm Rotary Cannon',
        guidance: 'none',
        range: '2 км',
        speed: '-',
        bestAgainst: {
            ru: ['Бронетехника', 'Пехота', 'Вертолёты'],
            en: ['Armored vehicles', 'Infantry', 'Helicopters'],
            ua: ['Бронетехніка', 'Піхота', 'Вертольоти']
        },
        tactics: {
            ru: 'Ротационная пушка для штурмовых вертолётов. Огромная скорострельность. Уничтожает технику за секунды.',
            en: 'Rotary cannon for attack helicopters. Huge rate of fire. Destroys vehicles in seconds.',
            ua: 'Ротаційна гармата для штурмових вертольотів. Величезна скорострільність.'
        },
        tips: {
            ru: '• Chicane/Brawler основное оружие\\n• Быстро расходует боезапас\\n• Держи короткие очереди',
            en: '• Chicane/Brawler primary weapon\\n• Burns through ammo fast\\n• Use short bursts',
            ua: '• Chicane/Brawler основна зброя\\n• Швидко витрачає боєзапас'
        },
        platforms: ['Chicane', 'Brawler']
    },
    gun_35mm: {
        cat: 'gun',
        name: '35mm Autocannon',
        guidance: 'none',
        range: '3 км',
        speed: '-',
        bestAgainst: {
            ru: ['Танки', 'Бронетехника', 'Здания'],
            en: ['Tanks', 'Armored vehicles', 'Buildings'],
            ua: ['Танки', 'Бронетехніка', 'Будівлі']
        },
        tactics: {
            ru: 'Тяжёлая пушка Brawler. Пробивает среднюю броню. Используй против танков и укреплений.',
            en: 'Heavy Brawler cannon. Penetrates medium armor. Use against tanks and fortifications.',
            ua: 'Важка гармата Brawler. Пробиває середню броню.'
        },
        tips: {
            ru: '• Мощнее 30mm\\n• Хорошо против танков\\n• Медленнее стреляет',
            en: '• More powerful than 30mm\\n• Good against tanks\\n• Slower fire rate',
            ua: '• Потужніша за 30mm\\n• Добра проти танків'
        },
        platforms: ['Brawler']
    },
    gun_57mm: {
        cat: 'gun',
        name: '57mm Cannon',
        guidance: 'none',
        range: '4 км',
        speed: '-',
        bestAgainst: {
            ru: ['Тяжёлая бронетехника', 'Здания', 'Катера'],
            en: ['Heavy armor', 'Buildings', 'Boats'],
            ua: ['Важка бронетехніка', 'Будівлі', 'Катери']
        },
        tactics: {
            ru: 'Подвесной модуль для Brawler. Двухрежимные снаряды: воздушный подрыв для пехоты, бронебойные для техники.',
            en: 'Brawler pod. Dual-mode shells: airburst for infantry, AP for armor.',
            ua: 'Підвісний модуль для Brawler. Двурежимні снаряди.'
        },
        tips: {
            ru: '• Воздушный подрыв = смерть пехоте\\n• Низкая скорострельность\\n• Занимает центральный пилон',
            en: '• Airburst = death to infantry\\n• Low fire rate\\n• Uses center pylon',
            ua: '• Повітряний підрив = смерть піхоті\\n• Низька скорострільність'
        },
        platforms: ['Brawler']
    },
    gun_76mm: {
        cat: 'gun',
        name: '76mm Guided Cannon',
        guidance: 'opt',
        range: '8 км',
        speed: '-',
        bestAgainst: {
            ru: ['Танки', 'Корабли', 'Здания', 'ПВО'],
            en: ['Tanks', 'Ships', 'Buildings', 'SAMs'],
            ua: ['Танки', 'Кораблі', 'Будівлі', 'ППО']
        },
        tactics: {
            ru: 'Тяжёлое орудие Tarantula. Управляемые снаряды с оптическим наведением. Уничтожает любую технику.',
            en: 'Heavy Tarantula cannon. Guided shells with optical tracking. Destroys any vehicle.',
            ua: 'Важке знаряддя Tarantula. Керовані снаряди з оптичним наведенням.'
        },
        tips: {
            ru: '• Только Tarantula\\n• Оптическое наведение\\n• Убийца танков и катеров',
            en: '• Tarantula only\\n• Optical guidance\\n• Tank and boat killer',
            ua: '• Тільки Tarantula\\n• Оптичне наведення'
        },
        platforms: ['Tarantula']
    },

    // === GLIDE BOMBS (missing) ===
    pab80lr: {
        cat: 'bomb',
        name: 'PAB-80LR',
        guidance: 'opt',
        range: '15 км (планирование)',
        speed: '-',
        bestAgainst: {
            ru: ['Колонны техники', 'Конвои', 'Лёгкие цели'],
            en: ['Vehicle columns', 'Convoys', 'Light targets'],
            ua: ['Колони техніки', 'Конвої', 'Легкі цілі']
        },
        tactics: {
            ru: 'Малая планирующая бомба. Сброс с большой высоты (5+ км) для максимальной дальности. Низкая ЭПР — трудно перехватить.',
            en: 'Small glide bomb. Drop from high altitude (5+ km) for max range. Low RCS — hard to intercept.',
            ua: 'Мала плануюча бомба. Скидання з великої висоти для максимальної дальності.'
        },
        tips: {
            ru: '• Дальность зависит от высоты\\n• Нет ИК-сигнатуры\\n• Массовый сброс эффективен',
            en: '• Range depends on altitude\\n• No IR signature\\n• Mass drops are effective',
            ua: '• Дальність залежить від висоти\\n• Немає ІЧ-сигнатури'
        },
        platforms: ['Compass', 'Revoker', 'Vortex', 'Ifrit', 'Medusa']
    },
    pab250lr: {
        cat: 'bomb',
        name: 'PAB-250LR',
        guidance: 'opt',
        range: '20 км (планирование)',
        speed: '-',
        bestAgainst: {
            ru: ['Бронетехника', 'Базы', 'Скопления техники'],
            en: ['Armor', 'Bases', 'Vehicle clusters'],
            ua: ['Бронетехніка', 'Бази', 'Скупчення техніки']
        },
        tactics: {
            ru: 'Средняя планирующая бомба. Darkreach несёт 68 штук. Массированный удар с большой дистанции.',
            en: 'Medium glide bomb. Darkreach carries 68. Massive standoff strike capability.',
            ua: 'Середня плануюча бомба. Darkreach несе 68 штук.'
        },
        tips: {
            ru: '• Darkreach = 68 бомб\\n• Стратегические удары\\n• Не входи в зону ПВО',
            en: '• Darkreach = 68 bombs\\n• Strategic strikes\\n• Stay out of SAM range',
            ua: '• Darkreach = 68 бомб\\n• Стратегічні удари'
        },
        platforms: ['Compass', 'Brawler', 'Revoker', 'Vortex', 'Ifrit', 'Darkreach']
    },

    // === ANTI-SHIP (missing) ===
    agm99: {
        cat: 'a2g',
        name: 'AGM-99',
        guidance: 'radar',
        range: '80 км',
        speed: '2800 км/ч',
        bestAgainst: {
            ru: ['Корабли', 'Катера', 'Морские цели'],
            en: ['Ships', 'Boats', 'Naval targets'],
            ua: ['Кораблі', 'Катери', 'Морські цілі']
        },
        tactics: {
            ru: 'Противокорабельная ракета средней дальности. Активный радар. Пуск с 40-60 км по морским целям.',
            en: 'Medium-range anti-ship missile. Active radar. Launch from 40-60 km against naval targets.',
            ua: 'Протикорабельна ракета середньої дальності. Активний радар.'
        },
        tips: {
            ru: '• Меньше AShM-300, но быстрее\\n• Хороша против катеров\\n• Можно нести больше',
            en: '• Smaller than AShM-300, but faster\\n• Good against boats\\n• Can carry more',
            ua: '• Менша за AShM-300, але швидша\\n• Добра проти катерів'
        },
        platforms: ['Revoker', 'Vortex']
    },

    // === EQUIPMENT ===
    ecm_pod: {
        cat: 'spec',
        name: 'ECM Pod',
        guidance: 'none',
        range: '-',
        speed: '-',
        bestAgainst: {
            ru: ['Радарные ракеты', 'ЗРК', 'Радары'],
            en: ['Radar missiles', 'SAMs', 'Radars'],
            ua: ['Радарні ракети', 'ЗРК', 'Радари']
        },
        tactics: {
            ru: 'Контейнер радиоэлектронной борьбы. Подавляет радары противника. Делает ЛА менее заметным для ЗРК.',
            en: 'Electronic countermeasures pod. Jams enemy radars. Makes aircraft less visible to SAMs.',
            ua: 'Контейнер радіоелектронної боротьби. Пригнічує радари противника.'
        },
        tips: {
            ru: '• Для ЛА без встроенного РЭБ\\n• Cricket, Chicane, Ibis\\n• Снижает вероятность захвата',
            en: '• For aircraft without built-in ECM\\n• Cricket, Chicane, Ibis\\n• Reduces lock probability',
            ua: '• Для ЛА без вбудованого РЕБ\\n• Знижує ймовірність захоплення'
        },
        platforms: ['Cricket', 'Chicane', 'Ibis', 'Tarantula']
    },
    radome: {
        cat: 'spec',
        name: 'Radome',
        guidance: 'none',
        range: '200 км',
        speed: '-',
        bestAgainst: {
            ru: ['Скрытые цели', 'Низколетящие ЛА', 'БПЛА'],
            en: ['Hidden targets', 'Low-flying aircraft', 'UAVs'],
            ua: ['Приховані цілі', 'Низьколітаючі ЛА', 'БПЛА']
        },
        tactics: {
            ru: 'Мощный радар дальнего обнаружения. Видит цели за рельефом. Поддержка для всей команды.',
            en: 'Powerful long-range radar. Sees targets behind terrain. Team support capability.',
            ua: 'Потужний радар дальнього виявлення. Бачить цілі за рельєфом.'
        },
        tips: {
            ru: '• Только для Medusa\\n• ДРЛО для команды\\n• Летай на высоте',
            en: '• Medusa only\\n• AWACS for team\\n• Fly at altitude',
            ua: '• Тільки для Medusa\\n• ДРЛВ для команди'
        },
        platforms: ['Medusa']
    }
};

// ============== GUIDE PAGE LOGIC ==============

let currentFilter = 'all';

function filterGuide(category) {
    currentFilter = category;
    
    // Update button states
    document.querySelectorAll('.category-nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('button').classList.add('active');

    // Render filtered weapons
    renderGuideCards(category);
}

function renderGuideCards(filter = 'all') {
    const grid = document.getElementById('guide-grid');
    if (!grid) return;
    
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
    grid.innerHTML = '';

    const catColors = {
        a2a: { border: 'border-blue-700', bg: 'bg-blue-950/30', text: 'text-blue-400', tag: 'bg-blue-900/50' },
        a2g: { border: 'border-green-700', bg: 'bg-green-950/30', text: 'text-green-400', tag: 'bg-green-900/50' },
        bomb: { border: 'border-yellow-700', bg: 'bg-yellow-950/30', text: 'text-yellow-400', tag: 'bg-yellow-900/50' },
        spec: { border: 'border-purple-700', bg: 'bg-purple-950/30', text: 'text-purple-400', tag: 'bg-purple-900/50' },
        gun: { border: 'border-orange-700', bg: 'bg-orange-950/30', text: 'text-orange-400', tag: 'bg-orange-900/50' }
    };

    // Use translations from i18n.js if available, otherwise fallback
    const guidanceLabels = {
        ir: typeof t === 'function' ? t('guide.guidance_ir') : (lang === 'en' ? 'IR Homing' : 'ИК-наведение'),
        radar: typeof t === 'function' ? t('guide.guidance_radar') : (lang === 'en' ? 'Radar' : 'Радар'),
        laser: typeof t === 'function' ? t('guide.guidance_laser') : (lang === 'en' ? 'Laser' : 'Лазер'),
        opt: typeof t === 'function' ? t('guide.guidance_opt') : (lang === 'en' ? 'Optical' : 'Оптика'),
        gps: typeof t === 'function' ? t('guide.guidance_gps') : 'GPS/INS',
        passrad: typeof t === 'function' ? t('guide.guidance_passrad') : (lang === 'en' ? 'Passive Radar' : 'Пасс. радар'),
        none: typeof t === 'function' ? t('guide.guidance_none') : (lang === 'en' ? 'Unguided' : 'Без наведения')
    };

    const catLabels = {
        a2a: typeof t === 'function' ? t('guide.cat_a2a') : (lang === 'en' ? 'Air-to-Air' : 'Воздух-Воздух'),
        a2g: typeof t === 'function' ? t('guide.cat_a2g') : (lang === 'en' ? 'Air-to-Ground' : 'Воздух-Земля'),
        bomb: typeof t === 'function' ? t('guide.cat_bomb') : (lang === 'en' ? 'Bomb' : 'Бомба'),
        spec: typeof t === 'function' ? t('guide.cat_spec') : (lang === 'en' ? 'Special' : 'Специальное'),
        gun: typeof t === 'function' ? t('guide.cat_gun') : (lang === 'en' ? 'Gun' : 'Пушка')
    };

    const sectionLabels = {
        targets: typeof t === 'function' ? t('guide.targets') : (lang === 'en' ? 'Targets' : 'Цели'),
        tactics: typeof t === 'function' ? t('guide.tactics') : (lang === 'en' ? 'Tactics' : 'Тактика'),
        tips: typeof t === 'function' ? t('guide.tips') : (lang === 'en' ? 'Tips' : 'Советы'),
        platforms: typeof t === 'function' ? t('guide.platforms') : (lang === 'en' ? 'Compatible Platforms' : 'Совместимые ЛА'),
        range: typeof t === 'function' ? t('guide.range') : (lang === 'en' ? 'Range' : 'Дальность'),
        speed: typeof t === 'function' ? t('guide.speed') : (lang === 'en' ? 'Speed' : 'Скорость')
    };

    Object.entries(weaponGuides).forEach(([id, w]) => {
        if (filter !== 'all' && w.cat !== filter) return;

        const colors = catColors[w.cat];
        const guidanceLabel = guidanceLabels[w.guidance] || w.guidance;
        const catLabel = catLabels[w.cat] || w.cat;
        const bestAgainst = w.bestAgainst[lang] || w.bestAgainst.ru;
        const tactics = w.tactics[lang] || w.tactics.ru;
        const tips = w.tips[lang] || w.tips.ru;

        const card = document.createElement('div');
        card.className = `guide-card p-4 border ${colors.border} ${colors.bg} relative`;
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <div>
                    <h3 class="text-lg font-bold ${colors.text}">${w.name}</h3>
                    <div class="flex gap-2 mt-1">
                        <span class="weapon-tag ${colors.tag} ${colors.text} border ${colors.border}">${catLabel}</span>
                        <span class="weapon-tag bg-gray-800/50 text-gray-400 border border-gray-700">${guidanceLabel}</span>
                    </div>
                </div>
                <div class="text-right text-xs text-emerald-600 font-mono">
                    <div><i class="fas fa-crosshairs mr-1"></i>${w.range}</div>
                    <div><i class="fas fa-bolt mr-1"></i>${w.speed}</div>
                </div>
            </div>

            <div class="mb-3">
                <div class="text-[10px] text-emerald-600 uppercase mb-1">${sectionLabels.targets}</div>
                <div class="flex flex-wrap gap-1">
                    ${bestAgainst.map(t => `<span class="text-xs px-2 py-0.5 bg-emerald-900/30 text-emerald-400 border border-emerald-800">${t}</span>`).join('')}
                </div>
            </div>

            <div class="mb-3">
                <div class="text-[10px] text-emerald-600 uppercase mb-1">${sectionLabels.tactics}</div>
                <p class="text-sm text-emerald-200 leading-relaxed">${tactics}</p>
            </div>

            <div class="mb-3">
                <div class="text-[10px] text-emerald-600 uppercase mb-1">${sectionLabels.tips}</div>
                <p class="text-xs text-emerald-400 whitespace-pre-line leading-relaxed">${tips}</p>
            </div>

            <div class="border-t border-emerald-900/50 pt-2 mt-3">
                <div class="text-[10px] text-emerald-600 uppercase mb-1">${sectionLabels.platforms}</div>
                <div class="text-xs text-emerald-300 font-mono">${w.platforms.join(' • ')}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Listen for language changes and re-render cards
const originalSetLanguage = typeof setLanguage === 'function' ? setLanguage : null;
if (originalSetLanguage) {
    window.setLanguage = function(lang) {
        originalSetLanguage(lang);
        // Re-render guide cards with new language
        if (document.getElementById('guide-grid')) {
            renderGuideCards(currentFilter);
        }
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderGuideCards('all');
});
