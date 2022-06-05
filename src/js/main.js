// Получаем в переменные кнопку "Найти!", поле ввода и класс, который их содержит
const searchButton = document.getElementById("headerButton");
const searchField = document.getElementById("headerSearch");
const headerSearchClass = document.querySelector(".header-search");
// Событие, при нажатии на поле ввода происходит смена цветов у поля и кнопки и добавляется тень
searchField.addEventListener("focus", (event) => {
   searchButton.style.backgroundColor = "white";
   searchField.style.backgroundColor = "white";
   headerSearchClass.style.boxShadow = "0 0 10px #999999"; 
});
// Событие, которое аннулирует действие прошлого при клике на другое место
searchField.addEventListener("blur", (event) => {
   searchButton.style.backgroundColor = "#dfdfdf";
   searchField.style.backgroundColor = "#dfdfdf";
   headerSearchClass.style.boxShadow = "0 0 0 #fff";
});

// Попап авторизации
const signinBtn = document.getElementById("authBtn");
authBtn.addEventListener("click", () => {
   // Открытие попапа
   let authPop = document.querySelector(".auth-popup");
   authPop.classList.add("_active");
   document.body.classList.add("no-scroll");
   // Закрытие попапа
   let crossPop = document.querySelector(".auth-popup__wrap span");
   crossPop.addEventListener("click", event => {
      authPop.classList.remove("_active");
      document.body.classList.remove("no-scroll");
   });
});

