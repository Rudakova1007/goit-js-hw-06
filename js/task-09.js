function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const buttonColor = document.querySelector(".change-color");
buttonColor.addEventListener("click", changeColor);

const spanColor = document.querySelector(".color");


function changeColor() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  bodyEl.style.backgroundColor = color;
}
