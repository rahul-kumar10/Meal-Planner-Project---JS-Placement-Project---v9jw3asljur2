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
        window.location.href = 'meal.html';

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
