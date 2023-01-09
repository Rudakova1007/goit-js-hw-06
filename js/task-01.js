let categoryArray = document.querySelectorAll(".item");
console.log(categoryArray);
console.log("Number of categories: " + categoryArray.length);

displayCategoryContent(categoryArray);

function displayCategoryContent(catArray){
    let category = null;
    for(let i = 0; i < catArray.length; i += 1){
        // console.log("Category: " + catArray[i].children[0].textContent);
        console.log("Category: " + list2[i].firstElementChild.textContent);

        let categoryItems = catArray[i].children[1].children
        // console.log("Elements: " + categoryItems.length)
        console.log("Elements: " + list2[i].lastElementChild.childElementCount);
    }
}



