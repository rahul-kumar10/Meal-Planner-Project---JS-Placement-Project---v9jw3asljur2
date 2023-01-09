
let totalCalorieRequired = JSON.parse(localStorage.getItem('totalCalorieValue'));
let spanTag = document.createElement("span");
spanTag.innerHTML = totalCalorieRequired.toFixed(0) + " kcal";
calorieElement.append(spanTag)


//   **API CALL FOR MEAL GENERATION

fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=76c9afdf208349d78fbb7cb906d88409&timeFrame=day&targetCalries=${totalCalorieRequired}`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('meal', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let mealData = JSON.parse(localStorage.getItem('meal'));
console.log(mealData)

// ** API CALL FOR BREAKFAST MEAL

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfast', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastData = JSON.parse(localStorage.getItem('breakfast'));

// **API CALL FOR BREAKFAST INGREDIENTS AND ITS AMOUNT

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/ingredientWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfastIngredients', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastIngredientsData = JSON.parse(localStorage.getItem('breakfastIngredients'));

// **API CALL FOR BREAKFAST MEAL EQUIPMENTS

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/equipmentWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfastEquipments', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastEquipmentsDataJson = JSON.parse(localStorage.getItem('breakfastEquipments'));
let breakfastEquipmentsData;
if (breakfastEquipmentsDataJson.status === "failure") {
    breakfastEquipmentsData = equipmentDataHardCoded;
}
else {
    breakfastEquipmentsData = breakfastEquipmentsDataJson;
}

// **API CALL FOR CALORIE OBTAINED FROM BREAKFAST

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

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/ingredientWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchIngredients', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchIngredientsData = JSON.parse(localStorage.getItem('lunchIngredients'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/equipmentWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchEquipments', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchEquipmentsData = JSON.parse(localStorage.getItem('breakfastEquipments'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchCalorieData = JSON.parse(localStorage.getItem('breakfastCalorie'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinner', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerData = JSON.parse(localStorage.getItem('dinner'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/ingredientWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerIngredients', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerIngredientsData = JSON.parse(localStorage.getItem('dinnerIngredients'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/equipmentWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerEquipments', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerEquipmentsData = JSON.parse(localStorage.getItem('dinnerEquipments'));

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerCalorieData = JSON.parse(localStorage.getItem('breakfastCalorie'));

document.querySelector(".title-1").innerHTML = mealData.meals[0].title;
document.querySelector(".image-1").setAttribute("src", breakfastData.image);
document.querySelector(".calorie-1").innerText = parseInt(breakfastCalorieData.bad[0].amount);

document.querySelector(".title-2").innerHTML = mealData.meals[1].title;
document.querySelector(".image-2").setAttribute("src", lunchData.image);
document.querySelector(".calorie-2").innerText = parseInt(lunchCalorieData.bad[0].amount);

document.querySelector(".title-3").innerHTML = mealData.meals[2].title;
document.querySelector(".image-3").setAttribute("src", dinnerData.image);
document.querySelector(".calorie-3").innerText = parseInt(dinnerCalorieData.bad[0].amount);

function btnHandler_1() {
    if (document.querySelector("#recipe").getAttribute("class") == "btnHidden_1") {
        document.querySelector("#recipe").removeAttribute("class");
        document.querySelector("#recipe").setAttribute("class", "get-recipe")
        window.scrollTo(0, 500);
        document.querySelector(".recipe-title").innerHTML = mealData.meals[0].title;
        let ulTag_1 = document.createElement("ul");
        let ulTag_2 = document.createElement("ul");
        let ulTag_3 = document.createElement("ul");

        for (let i = 0; i < breakfastIngredientsData.ingredients.length; i++) {
            let ingredientValue = 0, ingredientUnit = "";
            let liTag_1 = document.createElement("li");
            let liTag_2 = document.createElement("li");
            liTag_1.innerHTML = breakfastIngredientsData.ingredients[i].name;
            ingredientValue = breakfastIngredientsData.ingredients[i].amount.us.value;
            ingredientUnit = breakfastIngredientsData.ingredients[i].amount.us.unit;
            liTag_2.innerHTML = ingredientValue + " " + ingredientUnit;
            ulTag_1.appendChild(liTag_1);
            ulTag_2.appendChild(liTag_2);
        }
        for (let i = 0; i < breakfastEquipmentsData.equipment.length; i++) {
            let liTag = document.createElement("li");
            liTag.innerHTML = breakfastEquipmentsData.equipment[i].name;
            ulTag_3.appendChild(liTag);
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
        for (let i = 0; i < lunchIngredientsData.ingredients.length; i++) {
            let ingredientValue = 0, ingredientUnit = "";
            let liTag_1 = document.createElement("li");
            let liTag_2 = document.createElement("li");
            liTag_1.innerHTML = lunchIngredientsData.ingredients[i].name;
            ingredientValue = lunchIngredientsData.ingredients[i].amount.us.value;
            ingredientUnit = lunchIngredientsData.ingredients[i].amount.us.unit;
            liTag_2.innerHTML = ingredientValue + " " + ingredientUnit;
            ulTag_1.appendChild(liTag_1);
            ulTag_2.appendChild(liTag_2);
        }
        for (let i = 0; i < lunchEquipmentsData.equipment.length; i++) {
            let liTag = document.createElement("li");
            liTag.innerHTML = lunchEquipmentsData.equipment[i].name;
            ulTag_3.appendChild(liTag);
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
        for (let i = 0; i < dinnerIngredientsData.ingredients.length; i++) {
            let ingredientValue = 0, ingredientUnit = "";
            let liTag_1 = document.createElement("li");
            let liTag_2 = document.createElement("li");
            liTag_1.innerHTML = dinnerIngredientsData.ingredients[i].name;
            ingredientValue = dinnerIngredientsData.ingredients[i].amount.us.value;
            ingredientUnit = dinnerIngredientsData.ingredients[i].amount.us.unit;
            liTag_2.innerHTML = ingredientValue + " " + ingredientUnit;
            ulTag_1.appendChild(liTag_1);
            ulTag_2.appendChild(liTag_2);
        }
        for (let i = 0; i < dinnerEquipmentsData.equipment.length; i++) {
            let liTag = document.createElement("li");
            liTag.innerHTML = dinnerEquipmentsData.equipment[i].name;
            ulTag_3.appendChild(liTag);
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
