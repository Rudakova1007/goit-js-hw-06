const inputEl = document.getElementById("font-size-control");
const outputEl = document.getElementById("text");

inputEl.addEventListener("input", (event) => {
    outputEl.setAttribute("style", "font-size: " + event.target.value + "px");
})