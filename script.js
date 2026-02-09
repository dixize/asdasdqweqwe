const slideData = {
    robotics: {
        title: "Роботизация производства",
        pre: ["Импортозамещение", "Субсидии до 50%", "Дефицит кадров"],
        areas: ["Резка и Формовка", "Сварка и Соединение", "Складирование"],
        effects: ["Выработка +40%", "Травматизм -50%"]
    },
    quality: {
        title: "Контроль качества",
        pre: ["ИИ-алгоритмы", "Оцифровка процессов"],
        areas: ["Конвейерный контроль", "Гранулометрия", "Весогабаритный контроль"],
        effects: ["Брак -35%", "Скорость контроля +50%"]
    },
    security: {
        title: "Средства охраны",
        pre: ["ФЗ-256", "Антитеррор"],
        areas: ["Периметральная сигнализация", "Тепловизионное наблюдение", "Биометрический СКУД"],
        effects: ["Реакция < 5 сек", "Точность 99.9%"]
    },
    eco: {
        title: "Безопасность и Эко",
        pre: ["Программа «Безопасный труд»", "Эко-ответственность"],
        areas: ["Электронные наряды", "Антинаезд техники", "Сейсмостанции"],
        effects: ["Аварийность -50%", "Обнаружение угроз за 2 мин"]
    },
    equipment: {
        title: "Тех. оборудование",
        pre: ["Замена импортных аналогов", "Рост производительности"],
        areas: ["Котельное оборудование", "Трансформаторы и ГПУ", "Компрессорные станции"],
        effects: ["Выпуск продукции +20%", "Затраты на ремонт -40%"]
    }
};

function openSlide(id) {
    const data = slideData[id];
    if (!data) return; // Защита от вылета

    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <h2 class="animate__animated animate__fadeInDown" style="font-size: 2.5rem; color: #ff4f12;">${data.title}</h2>
        
        <div class="animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
            <span class="highlight-header">Предпосылки</span>
            ${data.pre.map(p => `<div class="info-item">${p}</div>`).join('')}
        </div>

        <div class="animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
            <span class="highlight-header">Области применения</span>
            ${data.areas.map(a => `<div class="info-item">${a}</div>`).join('')}
        </div>

        <div class="animate__animated animate__fadeInUp" style="animation-delay: 0.6s">
            <span class="highlight-header">Прогноз эффектов</span>
            ${data.effects.map(e => `<div class="info-item" style="font-weight:bold; color:#fff;">${e}</div>`).join('')}
        </div>
    `;

    document.getElementById('modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Запрет скролла
}

function closeSlide() {
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}
