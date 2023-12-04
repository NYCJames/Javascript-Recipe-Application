`strict mode`;
import { async } from 'regenerator-runtime';
import { API_KEY, API_URL, RESULTS_PER_PAGE } from './config';
import { AJAX, getJSON, postJSON } from './helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    currentPage: 1,
  },
  bookmarks: [],
};

function init() {
  retrieveBookmarks();
  // console.log(state);
}
init();

function formatRecipe(recipe) {
  return {
    id: recipe.id,
    source: recipe.source_url,
    publisher: recipe.publisher,
    title: recipe.title,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    numIngredients: recipe.ingredients.length,
    ...(recipe.key && { key: recipe.key }),
    // bookmarked: state.bookmarks.includes(recipe),
  };
}

export async function loadSelectedRecipe(id) {
  try {
    // console.log(state);
    const data = await AJAX(`${API_URL}/${id}?key=${API_KEY}`);

    const { recipe } = data.data;
    state.recipe = formatRecipe(recipe);

    if (
      state.bookmarks.some(function (value) {
        return value.id === id;
      })
    ) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
    console.log(state);
  } catch (error) {
    console.log(error);
    throw error;
    // console.error();
  }
}

export async function loadSearchResults(searchQuery) {
  try {
    state.search.query = searchQuery;
    const data = await AJAX(`${API_URL}?search=${searchQuery}&key=${API_KEY}`);
    // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
    // console.log(data);
    const { recipes } = data.data;
    // console.log(recipes);
    state.search.results = recipes.map(function (result) {
      return {
        id: result.id,
        publisher: result.publisher,
        title: result.title,
        image: result.image_url,
        ...(result.key && { key: result.key }),
      };
    });
  } catch (error) {
    throw error;
  }
}

export function searchResultsPage(pageNumber = state.search.currentPage) {
  // const firstPage = 0;
  // const lastPage = state.search.results.length / 10; //Round down

  // pg 1 = 0 - 9
  // pg 2 = 10 - 19

  state.search.currentPage = pageNumber;

  const start = (pageNumber - 1) * state.search.resultsPerPage;
  const end = pageNumber * state.search.resultsPerPage;

  // console.log(start, end);

  return state.search.results.slice(start, end);
}

export function updateServings(newServings) {
  const oldServings = state.recipe.servings;
  state.recipe.ingredients.forEach(function (ingredient) {
    // console.log(ingredient);
    ingredient.quantity = (newServings * ingredient.quantity) / oldServings;
  });
  state.recipe.servings = newServings;
}

export function addBookmark(recipe) {
  // console.log(state.bookmarks);
  state.bookmarks.push(recipe);

  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }

  storeBookmarks();
  // console.log(state.bookmarks.includes(recipe));
  // console.log(state);
}

export function removeBookmark(recipe) {
  // console.log(state.bookmarks);
  const index = state.bookmarks.findIndex(function (value) {
    return value.id === recipe.id;
  });
  state.bookmarks.splice(index, 1);
  // console.log(state);

  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = false;
  }

  storeBookmarks();
  // console.log(state.bookmarks.includes(recipe));
}

function storeBookmarks() {
  localStorage.setItem(`bookmarks`, JSON.stringify(state.bookmarks));
}

function retrieveBookmarks() {
  const storage = JSON.parse(localStorage.getItem(`bookmarks`));
  // console.log(storage);
  if (storage) {
    state.bookmarks = storage;
  }
}

export async function uploadRecipe(newRecipe) {
  // console.log(newRecipe);
  try {
    const data = Object.entries(newRecipe);
    const ingredientsArray = data.filter(function (item) {
      return item[0].startsWith(`ingredient-`) && item[1] !== ``;
    });
    // console.log(data);

    const ingredients = ingredientsArray.map(function (ingredient) {
      const ingredients = ingredient[1]
        // .replaceAll(` `, ``)
        .split(`,`)
        .map(function (part) {
          return part.trim();
        });
      // console.log(ingredients);

      // if (ingredients.length !== 3) {
      //   throw new Error(
      //     `3 items needed in format of "quantity,unit,description"`
      //   );
      // }

      const [quantity, unit, description] = ingredients;

      return {
        quantity: quantity ? Number(quantity) : null,
        unit,
        description,
      };
    });
    // console.log(ingredients);

    const recipe = {
      source_url: newRecipe.sourceUrl,
      publisher: newRecipe.publisher,
      title: newRecipe.title,
      image_url: newRecipe.image,
      servings: newRecipe.servings,
      cooking_time: newRecipe.cookingTime,
      ingredients: ingredients,
    };
    // console.log(recipe);

    const response = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    // console.log(response);

    state.recipe = formatRecipe(response.data.recipe);

    addBookmark(state.recipe);
    console.log(state);

    window.history.pushState(null, ``, `#${state.recipe.id}`);
  } catch (error) {
    throw error;
  }
}
