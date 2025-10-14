let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let text = document.getElementById("text");
let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let video3 = document.getElementById("video3");
let video4 = document.getElementById("video4");
function show1() {
    button1.style.backgroundColor = "#3d3938";
    button2.style.backgroundColor = "#262423";
    button3.style.backgroundColor = "#262423";
    button4.style.backgroundColor = "#262423";
    video1.style.display = "block";
    video2.style.display = "none";
    video3.style.display = "none";
    video4.style.display = "none";
    button1.style.borderTop = "4px solid grey";
    button1.style.borderRight = "none";
    text.textContent =
        'Досліджуй власні унікальні світи, переживи ніч і створи все, що тільки зможеш уявити!\n Дивись приклад відео з грою Minecraft вище або вибери посилання "Дивитись трейлер", щоб повністю переглянути відео на YouTube.';
    p1.textContent = "КУПИТИ МАЙНКРАФТ";
    a1.href = "https://www.minecraft.net/ru-ru/store/minecraft-deluxe-collection-pc?tabs=%7B%22details%22%3A0%7D";
}
function show2() {
    button1.style.backgroundColor = "#262423";
    button2.style.backgroundColor = "#3d3938";
    button3.style.backgroundColor = "#262423";
    button4.style.backgroundColor = "#262423";
    text.textContent =
        'Спробуй пригодницьку гру, натхненну класичними данжен-кроулерами Подивіться приклад відео з грою Minecraft Dungeons вище або вибери посилання "Дивитись трейлер", щоб повністю переглянути відео на YouTube.';
    video1.style.display = "none";
    video2.style.display = "block";
    video3.style.display = "none";
    video4.style.display = "none";
    button2.style.borderRight = "none";

    p1.textContent = "ДОКЛАДНІШЕ";
    a1.href = "https://www.minecraft.net/en-us/about-dungeons";
}
function show3() {
    button1.style.backgroundColor = "#262423";
    button2.style.backgroundColor = "#262423";
    button3.style.backgroundColor = "#3d3938";
    button4.style.backgroundColor = "#262423";
    text.textContent =
        'Стань на чолі своїх союзників у героїчних битвах в екшн-стратегії Minecraft Legends.\nПерегляньте приклад відео з грою Minecraft Legends вище або вибери посилання "Дивитись трейлер", щоб повністю переглянути відео на YouTube.';
    video1.style.display = "none";
    video2.style.display = "none";
    video3.style.display = "block";
    video4.style.display = "none";
    button3.style.borderRight = "none";
    p1.textContent = "ДОКЛАДНІШЕ";
    a1.href = "https://www.minecraft.net/en-us/about-legends";
}
function show4() {
    button1.style.backgroundColor = "#262423";
    button2.style.backgroundColor = "#262423";
    button3.style.backgroundColor = "#262423";
    button4.style.backgroundColor = "#3d3938";
    text.textContent =
        'Навчальна ігрова платформа, що допомагає тисячам викладачів у понад 100 країнах.\nПодивися приклад відео з грою Minecraft Education вище або вибери посилання "Дивитись трейлер", щоб повністю переглянути відео на YouTube.';
    video1.style.display = "none";
    video2.style.display = "none";
    video3.style.display = "none";
    video4.style.display = "block";
    button4.style.borderRight = "none";
    p1.textContent = "ДІЗНАТИСЬ БІЛЬШЕ";
    a1.href = "https://education.minecraft.net/en-us";
}
