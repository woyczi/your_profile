const arrowBtn = document.querySelector(".arrow");
const containerBox = document.querySelector(".container");
const saveBtn = document.querySelector(".save");
const heading = document.querySelector(".heading");
const main = document.querySelector(".main");
const infobox = document.querySelector(".profileinfo-box");
const btnMode = document.querySelector(".mode");
const btnBox = document.querySelector(".mode__box");
const btnDot = document.querySelector(".mode__dot");

const closeCard = () => {
  heading.classList.toggle("hide");
  main.classList.toggle("hide");
  infobox.classList.toggle("hide");
  containerBox.classList.toggle("show");
};

const movedot = () => {
    btnDot.classList.toggle('moveDot')
}

arrowBtn.addEventListener("click", closeCard);
saveBtn.addEventListener("click", closeCard);
btnMode.addEventListener('click', movedot)
