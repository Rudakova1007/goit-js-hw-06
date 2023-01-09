const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", () => {
    console.log(inputEl.value.length);
    if(inputEl.value.length != inputEl.getAttribute("data-length")){
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    } else {        
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
  });