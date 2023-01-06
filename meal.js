
let totalCalorieRequired = JSON.parse(localStorage.getItem('totalCalorieValue'));
let spanTag = document.createElement("span");
spanTag.innerHTML = totalCalorieRequired.toFixed(0);
calorieElement.append(spanTag)


fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=76c9afdf208349d78fbb7cb906d88409&timeFrame=day&targetCalries=${totalCalorieRequired}`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('meal', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let mealData = JSON.parse(localStorage.getItem('meal'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfast', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastData = JSON.parse(localStorage.getItem('breakfast'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfastCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastCalorieData = JSON.parse(localStorage.getItem('breakfastCalorie'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunch', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchData = JSON.parse(localStorage.getItem('lunch'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchCalorieData = JSON.parse(localStorage.getItem('lunchCalorie'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinner', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerData = JSON.parse(localStorage.getItem('dinner'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerCalorieData = JSON.parse(localStorage.getItem('dinnerCalorie'));

document.querySelector(".title-1").innerHTML = mealData.meals[0].title;
document.querySelector(".image-1").setAttribute("src", breakfastData.image);
document.querySelector(".calorie-1").innerText = breakfastCalorieData.nutrients[0].amount.toFixed(0);

document.querySelector(".title-2").innerHTML = mealData.meals[1].title;
document.querySelector(".image-2").setAttribute("src", lunchData.image);
document.querySelector(".calorie-2").innerText = lunchCalorieData.nutrients[0].amount.toFixed(0);

document.querySelector(".title-3").innerHTML = mealData.meals[2].title;
document.querySelector(".image-3").setAttribute("src", dinnerData.image);
document.querySelector(".calorie-3").innerText = dinnerCalorieData.nutrients[0].amount.toFixed(0);

function btnHandler_1() {
    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);
        document.querySelector(".recipe-title").innerHTML = mealData.meals[0].title;
        let ulTag_1 = document.createElement("ul");
        let ulTag_2 = document.createElement("ul");
        let ulTag_3 = document.createElement("ul");

        for (let i = 0; i < breakfastData.extendedIngredients.length; i++) {
            let liTag_1 = document.createElement("li");
            let liTag_2 = document.createElement("li");
            let liTag_3 = document.createElement("li");
            liTag_1.innerHTML = breakfastData.extendedIngredients[i].aisle;
            liTag_2.innerHTML = breakfastData.extendedIngredients[i].amount ? breakfastData.extendedIngredients[i].amount : "-";
            liTag_3.innerHTML = breakfastData.extendedIngredients[i].measures.metric.unitLong ? breakfastData.extendedIngredients[i].measures.metric.unitLong : "-";
            ulTag_1.appendChild(liTag_1);
            ulTag_2.appendChild(liTag_2);
            ulTag_3.appendChild(liTag_3);
        }
        document.querySelector(".ingredients").innerHTML = "<h4>INGREDIENTS</h4>";
        document.querySelector(".ingredients").appendChild(ulTag_1);
        document.querySelector(".steps").innerHTML = "<h4>STEPS</h4>";
        document.querySelector(".steps").appendChild(ulTag_2);
        document.querySelector(".equipments").innerHTML = "<h4>EQUIPMENT</h4>";
        document.querySelector(".equipments").appendChild(ulTag_3);

    }
    else {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "btnHidden_1")
        document.querySelector(".ingredients").removeChild("ul");
    }
}
function btnHandler_2() {
    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);
        document.querySelector(".recipe-title").innerHTML = mealData.meals[1].title;
        let ulTag_1 = document.createElement("ul");
        let ulTag_2 = document.createElement("ul");
        let ulTag_3 = document.createElement("ul");
        for (let i = 0; i < lunchData.extendedIngredients.length; i++) {
            let liTag_1 = document.createElement("li");
            let liTag_2 = document.createElement("li");
            let liTag_3 = document.createElement("li");
            liTag_1.innerHTML = lunchData.extendedIngredients[i].aisle;
            liTag_2.innerHTML = lunchData.extendedIngredients[i].amount ? lunchData.extendedIngredients[i].amount : "-";
            liTag_3.innerHTML = lunchData.extendedIngredients[i].measures.metric.unitLong ? lunchData.extendedIngredients[i].measures.metric.unitLong : "-";
            ulTag_1.appendChild(liTag_1);
            ulTag_2.appendChild(liTag_2);
            ulTag_3.appendChild(liTag_3);
        }
        document.querySelector(".ingredients").innerHTML = "<h4>INGREDIENTS</h4>";
        document.querySelector(".steps").innerHTML = "<h4>STEPS</h4>";
        document.querySelector(".equipments").innerHTML = "<h4>EQUIPMENT</h4>";
        document.querySelector(".ingredients").appendChild(ulTag_1);
        document.querySelector(".steps").appendChild(ulTag_2);
        document.querySelector(".equipments").appendChild(ulTag_3);
    }
    else {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "btnHidden_1")
    }
}
function btnHandler_3() {
    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);
        document.querySelector(".recipe-title").innerHTML = mealData.meals[2].title;
        let ulTag_1 = document.createElement("ul");
        let ulTag_2 = document.createElement("ul");
        let ulTag_3 = document.createElement("ul");
        for (let i = 0; i < dinnerData.extendedIngredients.length; i++) {
            let liTag_1 = document.createElement("li");
            let liTag_2 = document.createElement("li");
            let liTag_3 = document.createElement("li");
            liTag_1.innerHTML = dinnerData.extendedIngredients[i].aisle;
            liTag_2.innerHTML = dinnerData.extendedIngredients[i].amount ? dinnerData.extendedIngredients[i].amount : "-";
            liTag_3.innerHTML = dinnerData.extendedIngredients[i].measures.metric.unitLong ? dinnerData.extendedIngredients[i].measures.metric.unitLong : "-";
            ulTag_1.appendChild(liTag_1);
            ulTag_2.appendChild(liTag_2);
            ulTag_3.appendChild(liTag_3);
        }
        document.querySelector(".ingredients").innerHTML = "<h4>INGREDIENTS</h4>";
        document.querySelector(".steps").innerHTML = "<h4>STEPS</h4>";
        document.querySelector(".equipments").innerHTML = "<h4>EQUIPMENT</h4>";
        document.querySelector(".ingredients").appendChild(ulTag_1);
        document.querySelector(".steps").appendChild(ulTag_2);
        document.querySelector(".equipments").appendChild(ulTag_3);
    }
    else {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "btnHidden_1")
    }
}
