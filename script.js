const area = document.querySelectorAll("div");
const start = document.querySelector("div:first-child");
function InitGame() {

area.forEach((area) => area.classList.add("area"))
start.classList.add("snake")

}