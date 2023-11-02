let images = [
    "https://cs9.pikabu.ru/post_img/2017/10/06/0/1507239211153216060.jpg",
    "https://evg-crystal.ru/800/600/https/static3.depositphotos.com//1003388/172/i/450/depositphotos_1720581-stock-photo-3d-render-of-light-bulb.jpg",
  ];

  let imageElem = document.querySelector("img");

  let btnElem = document.querySelector("#btn");

  let i = 1;
  btnElem.addEventListener("click", () => {
    imageElem.setAttribute("src", images[i]);
    i++;
    if (i === 2) {
        i = 0;
    }
  });