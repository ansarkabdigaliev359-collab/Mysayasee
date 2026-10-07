/* =========================================================
   МОЙ ДЕНЬ — VERSION 5.0
   ========================================================= */


/* ================= DATE ================= */

const weekdayNames = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

const monthNamesGenitive = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
];

let selectedDate = new Date();

let planDay = selectedDate.getDay();

if (planDay === 0) {
    planDay = 7;
}

let selectedScheduleDay = selectedDate.getDay();

if (selectedScheduleDay === 0 || selectedScheduleDay === 6) {
    selectedScheduleDay = 1;
}

let calendarDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
);


/* ================= STORAGE ================= */

const STORAGE_KEY = "my_day_v5";

let savedData = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
);


function saveData() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedData)
    );
}


/* ================= WEEKLY PLAN ================= */

const plans = {

    1: {
        name: "Понедельник",
        emoji: "🔵",
        description: "Самый загруженный день: 08:30–15:40.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–06:55", "📖 Повторение материала"],
                    ["06:55–07:20", "🎓 Подготовка к сегодняшним парам"],
                    ["07:20–07:30", "🎒 Собрать вещи"],
                    ["07:30", "🚶 Выход"]
                ]
            },
            {
                title: "🎓 Университет",
                items: [
                    ["08:30–15:40", "Пары"]
                ]
            },
            {
                title: "🏠 Вечер",
                items: [
                    ["~16:30", "🏠 Домой"],
                    ["16:30–17:00", "🍽️ Еда + отдых"],
                    ["17:00–19:00", "📝 ДЗ"],
                    ["19:00–19:30", "🍽️ Ужин"],
                    ["19:30–20:30", "🎬 TikTok"],
                    ["20:30–21:15", "🌙 Прогулка"],
                    ["21:15–21:40", "🎒 Собрать вещи + посмотреть расписание"],
                    ["21:40–22:00", "😌 Спокойное время без учёбы"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    2: {
        name: "Вторник",
        emoji: "🟢",
        description: "Пары 08:30–13:30.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–07:00", "📖 Повторение понедельника"],
                    ["07:00–07:20", "🎓 Подготовка к парам"],
                    ["07:20–07:30", "🎒 Сборы"],
                    ["07:30", "🚶 Выход"]
                ]
            },
            {
                title: "🎓 Университет",
                items: [
                    ["08:30–13:30", "Пары"]
                ]
            },
            {
                title: "🏠 После университета",
                items: [
                    ["~14:00", "🏠 Домой"],
                    ["14:00–15:00", "🍽️ Обед + отдых"],
                    ["15:00–17:00", "📝 ДЗ"],
                    ["17:00–18:00", "📚 Подготовка к среде"],
                    ["18:00–19:30", "🎬 TikTok"],
                    ["19:30–20:15", "🍽️ Ужин"],
                    ["20:15–21:00", "🌙 Прогулка"],
                    ["21:00–21:40", "😌 Свободное время"],
                    ["21:40–22:00", "😴 Подготовка ко сну"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    3: {
        name: "Среда",
        emoji: "🟡",
        description: "Первая пара уже в 08:00, поэтому утро немного короче.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:25", "🏃 Лёгкая пробежка"],
                    ["05:25–05:50", "🚿 Душ + завтрак"],
                    ["05:50–06:40", "📖 Повторение"],
                    ["06:40–07:10", "🎓 Подготовка к парам"],
                    ["07:10–07:20", "🎒 Сборы"],
                    ["~07:20", "🚶 Выход"]
                ]
            },
            {
                title: "🎓 Университет",
                items: [
                    ["08:00–14:00", "Пары"]
                ]
            },
            {
                title: "🏠 После университета",
                items: [
                    ["~14:30", "🏠 Домой"],
                    ["14:30–15:15", "🍽️ Обед + отдых"],
                    ["15:15–17:15", "📝 ДЗ"],
                    ["17:15–18:00", "📚 Подготовка"],
                    ["18:00–19:30", "🎬 TikTok"],
                    ["19:30–20:15", "🍽️ Ужин"],
                    ["20:15–21:00", "🌙 Прогулка"],
                    ["21:00–21:40", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    4: {
        name: "Четверг",
        emoji: "🟠",
        description: "Очень хороший день для продуктивности: университет только 10:00–12:00.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–07:00", "📖 Повторение"],
                    ["07:00–08:00", "📚 Подготовка / чтение"],
                    ["08:00–08:30", "😌 Отдых"],
                    ["08:30–09:15", "📚 Небольшое учебное дело"],
                    ["09:15–09:40", "🎒 Сборы"],
                    ["~09:40", "🚶 Выход"]
                ]
            },
            {
                title: "🎓 Университет",
                items: [
                    ["10:00–12:00", "Пары"]
                ]
            },
            {
                title: "🏠 После университета",
                items: [
                    ["~12:30", "🏠 Домой"],
                    ["12:30–13:30", "🍽️ Обед + отдых"],
                    ["13:30–16:00", "📝 ДЗ"],
                    ["16:00–16:30", "😌 Отдых"],
                    ["16:30–17:30", "📚 Подготовка к пятнице"],
                    ["17:30–19:30", "🎬 TikTok"],
                    ["19:30–20:15", "🍽️ Ужин"],
                    ["20:15–21:00", "🌙 Прогулка"],
                    ["21:00–21:40", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    5: {
        name: "Пятница",
        emoji: "🟣",
        description: "Пары 10:00–14:00.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:05–05:30", "🏃 Пробежка"],
                    ["05:30–05:50", "🚿 Душ"],
                    ["05:50–06:10", "🍳 Завтрак"],
                    ["06:10–07:00", "📖 Повторение"],
                    ["07:00–08:00", "📚 Подготовка"],
                    ["08:00–09:00", "😌 Свободное время"],
                    ["09:00–09:30", "🎒 Сборы"],
                    ["~09:30", "🚶 Выход"]
                ]
            },
            {
                title: "🎓 Университет",
                items: [
                    ["10:00–14:00", "Пары"]
                ]
            },
            {
                title: "🏠 После университета",
                items: [
                    ["~14:30", "🏠 Домой"],
                    ["14:30–15:30", "🍽️ Обед + отдых"],
                    ["15:30–17:30", "📝 ДЗ"],
                    ["17:30–20:00", "🎬 TikTok"],
                    ["20:00–20:30", "🍽️ Ужин"],
                    ["20:30–21:15", "🌙 Прогулка"],
                    ["21:15–22:00", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    6: {
        name: "Суббота",
        emoji: "🟤",
        description: "Главный день для TikTok и закрытия учебных хвостов.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:15–05:45", "🏃 Пробежка"],
                    ["05:45–06:15", "🚿 Душ + завтрак"],
                    ["06:15–07:15", "📖 Повторение всей недели"],
                    ["07:15–09:00", "📚 Учёба / закрыть хвосты"],
                    ["09:00–10:00", "😌 Отдых"]
                ]
            },
            {
                title: "📚 Учёба и TikTok",
                items: [
                    ["10:00–12:00", "📝 Оставшиеся задания"],
                    ["12:00–13:00", "🍽️ Обед"],
                    ["13:00–16:00", "🎬 TikTok — основной монтаж"],
                    ["16:00–18:00", "🎮 Отдых / свои дела"],
                    ["18:00–19:00", "📚 Подготовка к следующей неделе"]
                ]
            },
            {
                title: "🌙 Вечер",
                items: [
                    ["19:00–20:00", "🍽️ Ужин"],
                    ["20:00–21:00", "🌙 Прогулка"],
                    ["21:00–22:00", "😌 Свободное время"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    },


    7: {
        name: "Воскресенье",
        emoji: "⚪",
        description: "Воскресенье не превращаем в ещё один учебный день.",

        blocks: [
            {
                title: "🌅 Утро",
                items: [
                    ["05:00", "Подъём"],
                    ["05:15–05:35", "🏃 Лёгкая пробежка или прогулка"],
                    ["05:35–06:15", "🚿 Душ + завтрак"],
                    ["06:15–07:00", "📖 Спокойное повторение"],
                    ["07:00–09:00", "😌 Свободное время"]
                ]
            },
            {
                title: "📚 Подготовка",
                items: [
                    ["09:00–11:00", "📚 Подготовка к понедельнику"],
                    ["11:00–13:00", "😌 Отдых"],
                    ["13:00–14:00", "🍽️ Обед"],
                    ["14:00–16:00", "🎬 TikTok"],
                    ["16:00–18:00", "😌 Полностью свободное время"]
                ]
            },
            {
                title: "🌙 Вечер",
                items: [
                    ["18:00–18:30", "📅 Проверить расписание на неделю"],
                    ["18:30–19:00", "🎒 Собрать рюкзак / одежду"],
                    ["19:00–20:00", "🍽️ Ужин"],
                    ["20:00–21:00", "🌙 Прогулка"],
                    ["21:00–22:00", "😌 Спокойный вечер"],
                    ["22:00", "😴 Сон"]
                ]
            }
        ]
    }
};


/* ================= UNIVERSITY SCHEDULE ================= */

const schedule = {

    1: {
        name: "Понедельник",
        lessons: [
            ["08:30–09:20", "Иностранный язык A1–A2", "Практика"],
            ["09:30–10:20", "Иностранный язык", "Практика"],
            ["10:30–11:20", "Дінтану / Религиоведение", "Лекция"],
            ["11:40–12:30", "Дінтану / Религиоведение", "Практика"],
            ["12:40–13:30", "Археология", "Лекция"],
            ["13:40–14:30", "Древние цивилизации и Древний мир", "Лекция"],
            ["14:50–15:40", "Древние цивилизации и Древний мир", "Лекция"]
        ]
    },

    2: {
        name: "Вторник",
        lessons: [
            ["08:30–09:20", "История Казахстана", "Лекция"],
            ["09:30–10:20", "История Казахстана", "Лекция"],
            ["10:30–11:20", "Археология", "Лекция"],
            ["11:40–12:30", "Археология", "Практика"],
            ["12:40–13:30", "Древние цивилизации и Древний мир", "Практика"]
        ]
    },

    3: {
        name: "Среда",
        lessons: [
            ["08:00–08:50", "Иностранный язык", "Практика"],
            ["09:00–09:50", "История Казахстана", "Практика"],
            ["10:00–10:50", "Дінтану / Религиоведение", "Практика"],
            ["12:10–13:00", "Физическая культура", "Практика"],
            ["13:10–14:00", "Физическая культура", "Практика"]
        ]
    },

    4: {
        name: "Четверг",
        lessons: [
            ["10:00–10:50", "Казахский / русский язык", "Практика"],
            ["11:10–12:00", "Казахский / русский язык", "Практика"]
        ]
    },

    5: {
        name: "Пятница",
        lessons: [
            ["10:00–10:50", "Физическая культура", "Практика"],
            ["11:10–12:00", "Физическая культура", "Практика"],
            ["12:10–13:00", "Казахский / русский язык", "Практика"],
            ["13:10–14:00", "Казахский / русский язык", "Практика"]
        ]
    }

};


/* ================= TASK GENERATION ================= */

function getDateKey(date) {

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function getTasksForDay(date) {

    let day = date.getDay();

    if (day === 0) {
        day = 7;
    }

    const plan = plans[day];

    if (!plan) return [];

    const tasks = [];

    plan.blocks.forEach((block, blockIndex) => {

        block.items.forEach((item, itemIndex) => {

            tasks.push({
                id: `${day}-${blockIndex}-${itemIndex}`,
                time: item[0],
                text: item[1],
                category: block.title
            });

        });

    });

    return tasks;
}


/* ================= TODAY ================= */

function renderToday() {

    const day = selectedDate.getDay();

    const realDay = day === 0 ? 7 : day;

    const plan = plans[realDay];

    const tasks = getTasksForDay(selectedDate);

    const dateKey = getDateKey(selectedDate);

    if (!savedData[dateKey]) {
        savedData[dateKey] = {};
    }

    const taskContainer =
        document.getElementById("todayTasks");

    taskContainer.innerHTML = "";

    tasks.forEach(task => {

        const done =
            savedData[dateKey][task.id] === true;

        const element =
            document.createElement("div");

        element.className =
            `task ${done ? "done" : ""}`;

        element.innerHTML = `
            <div class="task-checkbox">
                ${done ? "✓" : ""}
            </div>

            <div class="task-time">
                ${task.time}
            </div>

            <div>
                <div class="task-text">
                    ${task.text}
                </div>

                <div class="task-category">
                    ${task.category}
                </div>
            </div>
        `;

        element.addEventListener("click", () => {

            savedData[dateKey][task.id] =
                !done;

            saveData();

            renderToday();
            renderCalendar();
            renderStats();

        });

        taskContainer.appendChild(element);

    });

    updateProgress(tasks);

    document.getElementById("todayWeekday")
        .textContent = weekdayNames[day];

    document.getElementById("todayDate")
        .textContent =
        `${selectedDate.getDate()} ${monthNamesGenitive[selectedDate.getMonth()]}`;

    document.getElementById("dayPlanTitle")
        .textContent =
        `${plan.emoji} ${plan.name}`;

    document.getElementById("headerDate")
        .textContent =
        `${selectedDate.getDate()} ${monthNamesGenitive[selectedDate.getMonth()]}`;

}


/* ================= PROGRESS ================= */

function updateProgress(tasks) {

    const dateKey = getDateKey(selectedDate);

    const saved =
        savedData[dateKey] || {};

    const total = tasks.length;

    const done =
        tasks.filter(
            task => saved[task.id] === true
        ).length;

    const percent =
        total === 0
            ? 0
            : Math.round((done / total) * 100);

    document.getElementById("progressText")
        .textContent = `${percent}%`;

    document.getElementById("progressNumber")
        .textContent = `${done} / ${total}`;

    document.getElementById("progressFill")
        .style.width = `${percent}%`;

    document.getElementById("emptyTasks")
        .classList.toggle(
            "hidden",
            done !== total || total === 0
        );
}


/* ================= PLAN ================= */

function renderPlanButtons() {

    const container =
        document.getElementById("planWeekButtons");

    container.innerHTML = "";

    for (let day = 1; day <= 7; day++) {

        const button =
            document.createElement("button");

        button.className =
            `week-button ${day === planDay ? "active" : ""}`;

        button.textContent =
            plans[day].name.slice(0, 2);

        if (day === 6) button.textContent = "СБ";
        if (day === 7) button.textContent = "ВС";

        button.addEventListener("click", () => {

            planDay = day;

            renderPlanButtons();
            renderFullPlan();

        });

        container.appendChild(button);
    }
}


function renderFullPlan() {

    const plan =
        plans[planDay];

    const container =
        document.getElementById("fullPlanContent");

    let html = `

        <div class="plan-day-card">

            <div class="plan-day-header">

                <h2>
                    ${plan.emoji} ${plan.name}
                </h2>

                <p>
                    ${plan.description}
                </p>

            </div>
    `;

    plan.blocks.forEach(block => {

        html += `

            <div class="plan-block">

                <div class="plan-block-title">
                    ${block.title}
                </div>
        `;

        block.items.forEach(item => {

            html += `

                <div class="plan-item">

                    <div class="plan-time">
                        ${item[0]}
                    </div>

                    <div class="plan-description">
                        ${item[1]}
                    </div>

                </div>
            `;

        });

        html += `
            </div>
        `;

    });

    html += `
        </div>
    `;

    container.innerHTML = html;
}


/* ================= SCHEDULE ================= */

function renderScheduleButtons() {

    const buttons =
        document.querySelectorAll(
            ".schedule-days button"
        );

    buttons.forEach(button => {

        const day =
            Number(button.dataset.day);

        button.classList.toggle(
            "active",
            day === selectedScheduleDay
        );

        button.onclick = () => {

            selectedScheduleDay = day;

            renderScheduleButtons();
            renderSchedule();

        };

    });
}


function renderSchedule() {

    const data =
        schedule[selectedScheduleDay];

    const list =
        document.getElementById("scheduleList");

    document.getElementById("scheduleDayTitle")
        .textContent = data.name;

    document.getElementById("lessonCount")
        .textContent =
        `${data.lessons.length} ${
            data.lessons.length === 1
                ? "пара"
                : "пар"
        }`;

    list.innerHTML = "";

    data.lessons.forEach(
        (lesson, index) => {

            const element =
                document.createElement("div");

            element.className = "lesson";

            element.innerHTML = `

                <div class="lesson-number">
                    ${index + 1}
                </div>

                <div>

                    <div class="lesson-time">
                        ${lesson[0]}
                    </div>

                    <div class="lesson-name">
                        ${lesson[1]}
                    </div>

                    <span class="lesson-type">
                        ${lesson[2]}
                    </span>

                </div>
            `;

            list.appendChild(element);

        }
    );
}


/* ================= CALENDAR ================= */

function renderCalendar() {

    const grid =
        document.getElementById("calendarGrid");

    grid.innerHTML = "";

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();

    document.getElementById("calendarMonth")
        .textContent =
        `${monthNames[month]} ${year}`;

    let firstDay =
        new Date(year, month, 1).getDay();

    firstDay =
        firstDay === 0 ? 7 : firstDay;

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    // Empty cells

    for (let i = 1; i < firstDay; i++) {

        const empty =
            document.createElement("div");

        empty.className =
            "calendar-day empty";

        grid.appendChild(empty);
    }


    // Days

    for (let day = 1; day <= daysInMonth; day++) {

        const cell =
            document.createElement("div");

        cell.className = "calendar-day";

        const date =
            new Date(year, month, day);

        const dateKey =
            getDateKey(date);

        const todayKey =
            getDateKey(new Date());

        const selectedKey =
            getDateKey(selectedDate);

        if (dateKey === todayKey) {
            cell.classList.add("today");
        }

        if (dateKey === selectedKey) {
            cell.classList.add("selected");
        }

        cell.textContent = day;


        const tasks =
            getTasksForDay(date);

        const saved =
            savedData[dateKey] || {};

        const done =
            tasks.filter(
                task => saved[task.id] === true
            ).length;

        if (done > 0) {

            const dot =
                document.createElement("div");

            dot.className =
                "calendar-dot";

            cell.appendChild(dot);
        }


        cell.addEventListener("click", () => {

            selectedDate =
                new Date(year, month, day);

            renderToday();
            renderCalendar();
            renderStats();

            switchPage("todayPage");

        });

        grid.appendChild(cell);
    }

}


/* ================= CALENDAR STATS ================= */

function renderStats() {

    const dateKey =
        getDateKey(selectedDate);

    const tasks =
        getTasksForDay(selectedDate);

    const saved =
        savedData[dateKey] || {};

    const done =
        tasks.filter(
            task => saved[task.id] === true
        ).length;

    const total =
        tasks.length;

    const percent =
        total === 0
            ? 0
            : Math.round(
                (done / total) * 100
            );

    document.getElementById("statsDate")
        .textContent =
        `${selectedDate.getDate()} ${monthNamesGenitive[selectedDate.getMonth()]}`;

    document.getElementById("statsPercent")
        .textContent =
        `${percent}%`;

    document.getElementById("statsDone")
        .textContent = done;

    document.getElementById("statsTotal")
        .textContent = total;

}


/* ================= NAVIGATION ================= */

function switchPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => {

            page.classList.toggle(
                "active",
                page.id === pageId
            );

        });


    document.querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.page === pageId
            );

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


document.querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                switchPage(
                    button.dataset.page
                );

            }
        );

    });


/* ================= TODAY NAVIGATION ================= */

document.getElementById("prevDay")
    .addEventListener("click", () => {

        selectedDate.setDate(
            selectedDate.getDate() - 1
        );

        renderToday();
        renderCalendar();
        renderStats();

    });


document.getElementById("nextDay")
    .addEventListener("click", () => {

        selectedDate.setDate(
            selectedDate.getDate() + 1
        );

        renderToday();
        renderCalendar();
        renderStats();

    });


document.getElementById("goToday")
    .addEventListener("click", () => {

        selectedDate = new Date();

        calendarDate =
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                1
            );

        renderToday();
        renderCalendar();
        renderStats();

    });


/* ================= HEADER DATE ================= */

document.getElementById("headerDate")
    .addEventListener("click", () => {

        selectedDate = new Date();

        renderToday();
        renderCalendar();
        renderStats();

        switchPage("todayPage");

    });


/* ================= MONTH NAVIGATION ================= */

document.getElementById("prevMonth")
    .addEventListener("click", () => {

        calendarDate.setMonth(
            calendarDate.getMonth() - 1
        );

        renderCalendar();

    });


document.getElementById("nextMonth")
    .addEventListener("click", () => {

        calendarDate.setMonth(
            calendarDate.getMonth() + 1
        );

        renderCalendar();

    });


/* ================= SERVICE WORKER ================= */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register("./service-worker.js")
                .catch(
                    error =>
                        console.log(
                            "Service Worker:",
                            error
                        )
                );

        }
    );

}


/* ================= INITIALIZATION ================= */

renderToday();

renderPlanButtons();

renderFullPlan();

renderScheduleButtons();

renderSchedule();

renderCalendar();

renderStats();
