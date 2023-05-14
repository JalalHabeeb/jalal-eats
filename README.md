
# Jalal Eats

![Header](https://raw.githubusercontent.com/JalalHabeeb/weather-mood/main/linkin-park.JPG "Jalal Eats")

A React app that fetches data about food and recipes.
Home page shows two kinds of food, one is specialized for vegetarians and the other is the popular recipes nowadays for everyone.
There are 4 pages for 4 kinds of food to choose from: American, Italian, Thai and Japanese food. Each page fetches special food from the chosen country.
Each recipe page contains a photo of the recipe and two buttons, one shows the ingredients and the other shows instruction and preparation.

## App Structure

public
└── index.html
src
└── test
└── components
    └──Category.js
    └──Popular.js
    └──Search.js
    └──Themes.js
    └──Toggler.js
    └──useDarkMode.js
    └──Veggie.js
└── pages
    └──Cuisine.js
    └──Home.js
    └──Pages.js
    └──Recipe.js
    └──Searched.js
└── style
    └──App.css
    └──AppStyle.js
    └──CategoryStyle.js
    └──CuisineStyle.js
    └──globalStyle.js
    └──index.css
    └──PopularStyle.js
    └──RecipeStyle.js
    └──SearchStyle.js
    └──TogglesStyle.js
└── App.js
└──index.js

## App description

Multi-pages React app that fetches food data from <https://spoonacular.com/food-api> and uses this data to categorize food in many categories.

It contains a search functionality you can use it to search for a recipe according to it's name or ingredients.

Light/Dark mode functionality for the user to choose the best mode that suits them.