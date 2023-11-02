// let imageElem = document.querySelector(".image");

// console.log(imageElem.getAttribute("alt"));
// let i = 0;
// imageElem.setAttribute("src", images[i]);

// setInterval(() => {
//     if (++i === images.lenght) {
//         i = 0;
//     }

//     imageElem.setAttribute("src", images[i]);
// }, 1000);

let screen = document.querySelector(".screen")
let start  = document.querySelector(".start")
let restart  = document.querySelector(".restart")

let count = 0

function getValues() {
    screen.textContent = count
}

let increFun = () => {
    count++
    getValues()
}

let res = () => {
    count = 0
    getValues()
}

start.addEventListener("click", increFun)
restart.addEventListener("click", res)