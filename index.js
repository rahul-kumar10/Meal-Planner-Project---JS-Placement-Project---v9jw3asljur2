const heightElement = document.querySelector("#height");
const weightElement = document.querySelector("#weight");
const ageElement = document.querySelector("#age");
const genderElement = document.querySelector("#gender");
const activityElement = document.querySelector("#activity");
const calorieElement = document.querySelector(".calorie");
let BMR = 0;
let totalCalorie = 0;

function buttonHandler() {

    const heightValue = Number(heightElement.value);
    const weightValue = Number(weightElement.value);
    const ageValue = Number(ageElement.value);
    const genderValue = genderElement.value;
    const activityValue = activityElement.value;
    if (heightValue && weightValue && ageValue && genderValue && activityValue) {
        if (genderValue === "male") {
            BMR = 66.47 + (13.75 * weightValue) + (5.003 * heightValue) - (6.755 * ageValue);
        }
        else {
            BMR = 655.1 + (9.563 * weightValue) + (1.850 * heightValue) - (4.676 * ageValue);
        }
        if (activityValue === "light") {
            totalCalorie = BMR * 1.375;
        }
        if (activityValue === "moderate") {
            totalCalorie = BMR * 1.55;
        }
        if (activityValue === "active") {
            totalCalorie = BMR * 1.725;
        }
        localStorage.setItem('totalCalorieValue', JSON.stringify(totalCalorie));
        mealGenerationApi();
        setTimeout(() => {
            window.location.href = 'meal.html';
        }, 3000)
    }
    else {
        alert("Please Fill The Required Field")
    }
}

const titleElement = document.querySelector(".title");
titleElement.addEventListener("click", () => {
    window.location.href = "index.html";
});

const logoElement = document.querySelector(".logo-image");
logoElement.addEventListener("click", () => {
    window.location.href = "index.html";
});


//   **API CALL FOR MEAL GENERATION
function mealGenerationApi() {
    let totalCalorieRequired = JSON.parse(localStorage.getItem('totalCalorieValue'));
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=76c9afdf208349d78fbb7cb906d88409&timeFrame=day&targetCalries=${totalCalorieRequired}`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("mealData", JSON.stringify(data))
            mealImageAndCalorieApiFunctions(data);

        }).catch((err) => console.log(err))
}

// ** FUNCTION FOR MEAL IMAGE AND ITS CALORIE GENERATION
function mealImageAndCalorieApiFunctions(data) {
    // ** API CALL FOR BREAKFAST MEAL IMAGE
    fetch(`https://api.spoonacular.com/recipes/${data.meals[0].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("breakfastImage", JSON.stringify(data))
        }).catch((err) => console.log(err))

    fetch(`https://api.spoonacular.com/recipes/${data.meals[1].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("lunchImage", JSON.stringify(data))
        }).catch((err) => console.log(err))

    fetch(`https://api.spoonacular.com/recipes/${data.meals[2].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("dinnerImage", JSON.stringify(data))
        }).catch((err) => console.log(err))

    fetch(`https://api.spoonacular.com/recipes/${data.meals[0].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("breakfastCalorie", JSON.stringify(data))
        }).catch((err) => console.log(err))

    fetch(`https://api.spoonacular.com/recipes/${data.meals[1].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("lunchCalorie", JSON.stringify(data))
        }).catch((err) => console.log(err))

    fetch(`https://api.spoonacular.com/recipes/${data.meals[2].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("dinnerCalorie", JSON.stringify(data))
        }).catch((err) => console.log(err))
}
