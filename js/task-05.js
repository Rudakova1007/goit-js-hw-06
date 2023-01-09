const inputEl = document.getElementById("name-input");

const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
    if(inputEl.value === "") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = event.currentTarget.value;  
    } 
  });