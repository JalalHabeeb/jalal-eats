
# Jalal Eats

![Header](https://github.com/JalalHabeeb/jalal-eats/blob/main/public/jalal-eats-readme.jpg "Jalal Eats")

A React app that fetches data about food and recipes.
Home page shows two kinds of food, one is specialized for vegetarians and the other is the popular recipes nowadays for everyone.
There are 4 pages for 4 kinds of food to choose from: American, Italian, Thai and Japanese food. Each page fetches special food from the chosen country.
Each recipe page contains a photo of the recipe and two buttons, one shows the ingredients and the other shows instruction and preparation.

## App Structure

public<br/>
└── index.html<br/>
src<br/>
└── test<br/>
└── components<br/>
----└──Category.js<br/>
----└──Popular.js<br/>
----└──Search.js<br/>
----└──Themes.js<br/>
----└──Toggler.js<br/>
----└──useDarkMode.js<br/>
----└──Veggie.js<br/>
└── pages<br/>
----└──Cuisine.js<br/>
----└──Home.js<br/>
----└──Pages.js<br/>
----└──Recipe.js<br/>
----└──Searched.js<br/>
└── style<br/>
----└──App.css<br/>
----└──AppStyle.js<br/>
----└──CategoryStyle.js<br/>
----└──CuisineStyle.js<br/>
----└──globalStyle.js<br/>
----└──index.css<br/><br/>
----└──PopularStyle.js<br/>
----└──RecipeStyle.js<br/>
----└──SearchStyle.js<br/>
----└──TogglesStyle.js<br/><br/>
└── App.js<br/>
└──index.js<br/>

## App description

Multi-pages React app that fetches food data from <https://spoonacular.com/food-api> and uses this data to categorize food in many categories.

It contains a search functionality you can use it to search for a recipe according to it's name or ingredients.

Light/Dark mode functionality for the user to choose the best mode that suits them.
