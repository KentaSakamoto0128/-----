let nav1 = document.querySelector("#contents1");
let btn1 = document.querySelector("#btn1");
let nav2 = document.querySelector("#contents2");
let btn2 = document.querySelector("#btn2");
let nav3 = document.querySelector("#contents3");
let btn3 = document.querySelector("#btn3");
let nav4 = document.querySelector("#contents4");
let btn4 = document.querySelector("#btn4");
let nav5 = document.querySelector("#contents5");
let btn5 = document.querySelector("#btn5");
let nav6 = document.querySelector("#contents6");
let btn6 = document.querySelector("#btn6");

let cls1 = document.querySelector("#contents1 a");
let cls2 = document.querySelector("#contents2 a");
let cls3 = document.querySelector("#contents3 a");
let cls4 = document.querySelector("#contents4 a");
let cls5 = document.querySelector("#contents5 a");
let cls6 = document.querySelector("#contents6 a");

btn1.onclick = () => {
    nav1.classList.toggle("open");
    nav2.classList.remove("open");
    nav3.classList.remove("open");
    nav4.classList.remove("open");
    nav5.classList.remove("open");
    nav6.classList.remove("open");
}
btn2.onclick = () => {
    nav1.classList.remove("open");
    nav2.classList.toggle("open");
    nav3.classList.remove("open");
    nav4.classList.remove("open");
    nav5.classList.remove("open");
    nav6.classList.remove("open");
}
btn3.onclick = () => {
    nav1.classList.remove("open");
    nav2.classList.remove("open");
    nav3.classList.toggle("open");
    nav4.classList.remove("open");
    nav5.classList.remove("open");
    nav6.classList.remove("open");
}
btn4.onclick = () => {
    nav1.classList.remove("open");
    nav2.classList.remove("open");
    nav3.classList.remove("open");
    nav4.classList.toggle("open");
    nav5.classList.remove("open");
    nav6.classList.remove("open");
}
btn5.onclick = () => {
    nav1.classList.remove("open");
    nav2.classList.remove("open");
    nav3.classList.remove("open");
    nav4.classList.remove("open");
    nav5.classList.toggle("open");
    nav6.classList.remove("open");
}
btn6.onclick = () => {
    nav1.classList.remove("open");
    nav2.classList.remove("open");
    nav3.classList.remove("open");
    nav4.classList.remove("open");
    nav5.classList.remove("open");
    nav6.classList.toggle("open");
}

cls1.onclick = () => {
    nav1.classList.remove("open");
}
cls2.onclick = () => {
    nav2.classList.remove("open");
}
cls3.onclick = () => {
    nav3.classList.remove("open");
}
cls4.onclick = () => {
    nav4.classList.remove("open");
}
cls5.onclick = () => {
    nav5.classList.remove("open");
}
cls6.onclick = () => {
    nav6.classList.remove("open");
}


