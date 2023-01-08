
let totalCalorieRequired = JSON.parse(localStorage.getItem('totalCalorieValue'));
let spanTag = document.createElement("span");
spanTag.innerHTML = totalCalorieRequired.toFixed(0) + " kcal";
calorieElement.append(spanTag)

let mealDataHardCoded = {
    "meals": [
        {
            "id": 655219,
            "title": "Peanut Butter And Chocolate Oatmeal",
            "imageType": "jpg",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219"
        },
        {
            "id": 649931,
            "title": "Lentil Salad With Vegetables",
            "imageType": "jpg",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931"
        },
        {
            "id": 632854,
            "title": "Asian Noodles",
            "imageType": "jpg",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://spoonacular.com/recipes/asian-noodles-632854"
        }
    ],
    "nutrients": {
        "calories": 1735.81,
        "carbohydrates": 235.17,
        "fat": 69.22,
        "protein": 55.43
    }
}

const mealRecipeDataHardCoded = {
    "id": 716429,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    "imageType": "jpg",
    "servings": 2,
    "readyInMinutes": 45,
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    "aggregateLikes": 209,
    "healthScore": 19.0,
    "spoonacularScore": 83.0,
    "pricePerServing": 163.15,
    "analyzedInstructions": [],
    "cheap": false,
    "creditsText": "Full Belly Sisters",
    "cuisines": [],
    "dairyFree": false,
    "diets": [],
    "gaps": "no",
    "glutenFree": false,
    "instructions": "",
    "ketogenic": false,
    "lowFodmap": false,
    "occasions": [],
    "sustainable": false,
    "vegan": false,
    "vegetarian": false,
    "veryHealthy": false,
    "veryPopular": false,
    "whole30": false,
    "weightWatcherSmartPoints": 17,
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "extendedIngredients": [
        {
            "aisle": "Milk, Eggs, Other Dairy",
            "amount": 1.0,
            "consitency": "solid",
            "id": 1001,
            "image": "butter-sliced.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "butter",
            "original": "1 tbsp butter",
            "originalName": "butter",
            "unit": "tbsp"
        },
        {
            "aisle": "Produce",
            "amount": 2.0,
            "consitency": "solid",
            "id": 10011135,
            "image": "cauliflower.jpg",
            "measures": {
                "metric": {
                    "amount": 473.176,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }
            },
            "meta": [
                "frozen",
                "thawed",
                "cut into bite-sized pieces"
            ],
            "name": "cauliflower florets",
            "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "unit": "cups"
        },
        {
            "aisle": "Cheese",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1041009,
            "image": "cheddar-cheese.png",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                }
            },
            "meta": [
                "grated",
                "(I used romano)"
            ],
            "name": "cheese",
            "original": "2 tbsp grated cheese (I used romano)",
            "originalName": "grated cheese (I used romano)",
            "unit": "tbsp"
        },
        {
            "aisle": "Oil, Vinegar, Salad Dressing",
            "amount": 1.0,
            "consitency": "liquid",
            "id": 1034053,
            "image": "olive-oil.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "extra virgin olive oil",
            "original": "1-2 tbsp extra virgin olive oil",
            "originalName": "extra virgin olive oil",
            "unit": "tbsp"
        },
        {
            "aisle": "Produce",
            "amount": 5.0,
            "consitency": "solid",
            "id": 11215,
            "image": "garlic.jpg",
            "measures": {
                "metric": {
                    "amount": 5.0,
                    "unitLong": "cloves",
                    "unitShort": "cloves"
                },
                "us": {
                    "amount": 5.0,
                    "unitLong": "cloves",
                    "unitShort": "cloves"
                }
            },
            "meta": [],
            "name": "garlic",
            "original": "5-6 cloves garlic",
            "originalName": "garlic",
            "unit": "cloves"
        },
        {
            "aisle": "Pasta and Rice",
            "amount": 6.0,
            "consitency": "solid",
            "id": 20420,
            "image": "fusilli.jpg",
            "measures": {
                "metric": {
                    "amount": 170.097,
                    "unitLong": "grams",
                    "unitShort": "g"
                },
                "us": {
                    "amount": 6.0,
                    "unitLong": "ounces",
                    "unitShort": "oz"
                }
            },
            "meta": [
                "(I used linguine)"
            ],
            "name": "pasta",
            "original": "6-8 ounces pasta (I used linguine)",
            "originalName": "pasta (I used linguine)",
            "unit": "ounces"
        },
        {
            "aisle": "Spices and Seasonings",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1032009,
            "image": "red-pepper-flakes.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "pinches",
                    "unitShort": "pinches"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "pinches",
                    "unitShort": "pinches"
                }
            },
            "meta": [
                "red"
            ],
            "name": "red pepper flakes",
            "original": "couple of pinches red pepper flakes, optional",
            "originalName": "couple of red pepper flakes, optional",
            "unit": "pinches"
        },
        {
            "aisle": "Spices and Seasonings",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1102047,
            "image": "salt-and-pepper.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "servings",
                    "unitShort": "servings"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "servings",
                    "unitShort": "servings"
                }
            },
            "meta": [
                "to taste"
            ],
            "name": "salt and pepper",
            "original": "salt and pepper, to taste",
            "originalName": "salt and pepper, to taste",
            "unit": "servings"
        },
        {
            "aisle": "Produce",
            "amount": 3.0,
            "consitency": "solid",
            "id": 11291,
            "image": "spring-onions.jpg",
            "measures": {
                "metric": {
                    "amount": 3.0,
                    "unitLong": "",
                    "unitShort": ""
                },
                "us": {
                    "amount": 3.0,
                    "unitLong": "",
                    "unitShort": ""
                }
            },
            "meta": [
                "white",
                "green",
                "separated",
                "chopped"
            ],
            "name": "scallions",
            "original": "3 scallions, chopped, white and green parts separated",
            "originalName": "scallions, chopped, white and green parts separated",
            "unit": ""
        },
        {
            "aisle": "Alcoholic Beverages",
            "amount": 2.0,
            "consitency": "liquid",
            "id": 14106,
            "image": "white-wine.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                }
            },
            "meta": [
                "white"
            ],
            "name": "white wine",
            "original": "2-3 tbsp white wine",
            "originalName": "white wine",
            "unit": "tbsp"
        },
        {
            "aisle": "Pasta and Rice",
            "amount": 0.25,
            "consitency": "solid",
            "id": 99025,
            "image": "breadcrumbs.jpg",
            "measures": {
                "metric": {
                    "amount": 59.147,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 0.25,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }
            },
            "meta": [
                "whole wheat",
                "(I used panko)"
            ],
            "name": "whole wheat bread crumbs",
            "original": "1/4 cup whole wheat bread crumbs (I used panko)",
            "originalName": "whole wheat bread crumbs (I used panko)",
            "unit": "cup"
        }
    ],
    "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
    "winePairing": {
        "pairedWines": [
            "chardonnay",
            "gruener veltliner",
            "sauvignon blanc"
        ],
        "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        "productMatches": [
            {
                "id": 469199,
                "title": "Buddha Kat Winery Chardonnay",
                "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                "price": "$25.0",
                "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                "averageRating": 0.8,
                "ratingCount": 1.0,
                "score": 0.55,
                "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
            }
        ]
    }
}

const ingredientsDataHardCoded = {
    "ingredients": [
        {
            "amount": {
                "metric": {
                    "unit": "g",
                    "value": 222.0
                },
                "us": {
                    "unit": "cups",
                    "value": 1.5
                }
            },
            "image": "blueberries.jpg",
            "name": "blueberries"
        },
        {
            "amount": {
                "metric": {
                    "unit": "",
                    "value": 1.0
                },
                "us": {
                    "unit": "",
                    "value": 1.0
                }
            },
            "image": "egg-white.jpg",
            "name": "egg white"
        },
        {
            "amount": {
                "metric": {
                    "unit": "Tbsps",
                    "value": 2.0
                },
                "us": {
                    "unit": "Tbsps",
                    "value": 2.0
                }
            },
            "image": "flour.png",
            "name": "flour"
        },
        {
            "amount": {
                "metric": {
                    "unit": "g",
                    "value": 150.0
                },
                "us": {
                    "unit": "cup",
                    "value": 0.75
                }
            },
            "image": "sugar-in-bowl.png",
            "name": "granulated sugar"
        },
        {
            "amount": {
                "metric": {
                    "unit": "tsp",
                    "value": 1.0
                },
                "us": {
                    "unit": "tsp",
                    "value": 1.0
                }
            },
            "image": "lemon-juice.jpg",
            "name": "fresh lemon juice"
        },
        {
            "amount": {
                "metric": {
                    "unit": "pinch",
                    "value": 1.0
                },
                "us": {
                    "unit": "pinch",
                    "value": 1.0
                }
            },
            "image": "ground-nutmeg.jpg",
            "name": "nutmeg"
        },
        {
            "amount": {
                "metric": {
                    "unit": "",
                    "value": 2.0
                },
                "us": {
                    "unit": "",
                    "value": 2.0
                }
            },
            "image": "pie-crust.jpg",
            "name": "pie dough round"
        },
        {
            "amount": {
                "metric": {
                    "unit": "Tbsps",
                    "value": 2.0
                },
                "us": {
                    "unit": "Tbsps",
                    "value": 2.0
                }
            },
            "image": "tapioca-pearls.png",
            "name": "quick cooking tapioca"
        },
        {
            "amount": {
                "metric": {
                    "unit": "g",
                    "value": 305.0
                },
                "us": {
                    "unit": "cups",
                    "value": 2.5
                }
            },
            "image": "rhubarb.jpg",
            "name": "trimmed rhubarb"
        },
        {
            "amount": {
                "metric": {
                    "unit": "tsps",
                    "value": 0.333
                },
                "us": {
                    "unit": "tsps",
                    "value": 0.333
                }
            },
            "image": "salt.jpg",
            "name": "salt"
        },
        {
            "amount": {
                "metric": {
                    "unit": "Tbsps",
                    "value": 0.5
                },
                "us": {
                    "unit": "Tbsps",
                    "value": 0.5
                }
            },
            "image": "butter-sliced.jpg",
            "name": "unsalted butter"
        }
    ]
}

const equipmentDataHardCoded = {
    "equipment": [
        {
            "image": "pie-pan.png",
            "name": "pie form"
        },
        {
            "image": "bowl.jpg",
            "name": "bowl"
        },
        {
            "image": "oven.jpg",
            "name": "oven"
        },
        {
            "image": "pan.png",
            "name": "frying pan"
        }
    ]
}

const calorieDataHardCoded = {
    "bad": [
        {
            "name": "Calories",
            "amount": 316.49,
            "unit": "kcal",
            "percentOfDailyNeeds": 15.82
        },
        {
            "name": "Fat",
            "amount": 12.09,
            "unit": "g",
            "percentOfDailyNeeds": 18.6
        },
        {
            "name": "Saturated Fat",
            "amount": 3.98,
            "unit": "g",
            "percentOfDailyNeeds": 24.88
        },
        {
            "name": "Carbohydrates",
            "amount": 49.25,
            "unit": "g",
            "percentOfDailyNeeds": 16.42
        },
        {
            "name": "Net Carbohydrates",
            "amount": 46.76,
            "unit": "g",
            "percentOfDailyNeeds": 17.0
        },
        {
            "name": "Sugar",
            "amount": 21.98,
            "unit": "g",
            "percentOfDailyNeeds": 24.42
        },
        {
            "name": "Cholesterol",
            "amount": 1.88,
            "unit": "mg",
            "percentOfDailyNeeds": 0.63
        },
        {
            "name": "Sodium",
            "amount": 279.1,
            "unit": "mg",
            "percentOfDailyNeeds": 12.13
        },
        {
            "name": "Protein",
            "amount": 3.79,
            "unit": "g",
            "percentOfDailyNeeds": 7.57
        },
    ]
}

//   **API CALL FOR MEAL GENERATION

fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=76c9afdf208349d78fbb7cb906d88409&timeFrame=day&targetCalries=${totalCalorieRequired}`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('meal', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let mealDataJson = JSON.parse(localStorage.getItem('meal'));
let mealData;
if (mealDataJson.status === "failure") {
    mealData = mealDataHardCoded;
}
else {
    mealData = mealDataJson;
}

// ** API CALL FOR BREAKFAST MEAL

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfast', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastDataJson = JSON.parse(localStorage.getItem('breakfast'));
let breakfastData;
if (breakfastDataJson.status === "failure") {
    breakfastData = mealRecipeDataHardCoded;
}
else {
    breakfastData = breakfastDataJson;
}

// **API CALL FOR BREAKFAST INGREDIENTS AND ITS AMOUNT

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[0].id}/ingredientWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('breakfastIngredients', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let breakfastIngredientsDataJson = JSON.parse(localStorage.getItem('breakfastIngredients'));
let breakfastIngredientsData;
if (breakfastIngredientsDataJson.status === "failure") {
    breakfastIngredientsData = ingredientsDataHardCoded;
}
else {
    breakfastIngredientsData = breakfastIngredientsDataJson;
}

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

let breakfastCalorieDataJson = JSON.parse(localStorage.getItem('breakfastCalorie'));
let breakfastCalorieData;
if (breakfastCalorieDataJson.status === "failure") {
    breakfastCalorieData = calorieDataHardCoded;
}
else {
    breakfastCalorieData = breakfastCalorieDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunch', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchDataJson = JSON.parse(localStorage.getItem('lunch'));
let lunchData;
if (lunchDataJson.status === "failure") {
    lunchData = mealRecipeDataHardCoded;
}
else {
    lunchData = lunchDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/ingredientWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchIngredients', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchIngredientsDataJson = JSON.parse(localStorage.getItem('lunchIngredients'));
let lunchIngredientsData;
if (lunchIngredientsDataJson.status === "failure") {
    lunchIngredientsData = ingredientsDataHardCoded;
}
else {
    lunchIngredientsData = lunchIngredientsDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/equipmentWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchEquipments', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchEquipmentsDataJson = JSON.parse(localStorage.getItem('breakfastEquipments'));
let lunchEquipmentsData;
if (lunchEquipmentsDataJson.status === "failure") {
    lunchEquipmentsData = equipmentDataHardCoded;
}
else {
    lunchEquipmentsData = lunchEquipmentsDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[1].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('lunchCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let lunchCalorieDataJson = JSON.parse(localStorage.getItem('breakfastCalorie'));
let lunchCalorieData;
if (lunchCalorieDataJson.status === "failure") {
    lunchCalorieData = calorieDataHardCoded;
}
else {
    lunchCalorieData = lunchCalorieDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/information?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinner', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerDataJson = JSON.parse(localStorage.getItem('dinner'));
let dinnerData;
if (dinnerDataJson.status === "failure") {
    dinnerData = mealRecipeDataHardCoded;
}
else {
    dinnerData = dinnerDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/ingredientWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerIngredients', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerIngredientsDataJson = JSON.parse(localStorage.getItem('dinnerIngredients'));
let dinnerIngredientsData;
if (dinnerIngredientsDataJson.status === "failure") {
    dinnerIngredientsData = ingredientsDataHardCoded;
}
else {
    dinnerIngredientsData = dinnerIngredientsDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/equipmentWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerEquipments', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerEquipmentsDataJson = JSON.parse(localStorage.getItem('dinnerEquipments'));
let dinnerEquipmentsData;
if (dinnerEquipmentsDataJson.status === "failure") {
    dinnerEquipmentsData = equipmentDataHardCoded;
}
else {
    dinnerEquipmentsData = dinnerEquipmentsDataJson;
}

fetch(`https://api.spoonacular.com/recipes/${mealData.meals[2].id}/nutritionWidget.json?apiKey=76c9afdf208349d78fbb7cb906d88409`)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem('dinnerCalorie', JSON.stringify(data));
    }).catch(() => console.log("Error"))

let dinnerCalorieDataJson = JSON.parse(localStorage.getItem('breakfastCalorie'));
let dinnerCalorieData;
if (dinnerCalorieDataJson.status === "failure") {
    dinnerCalorieData = calorieDataHardCoded;
}
else {
    dinnerCalorieData = dinnerCalorieDataJson;
}

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
