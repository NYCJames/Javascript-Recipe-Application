import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as Model from './model.js';
import ViewSelectedRecipe from './views/recipeView.js';
import SearchBarView from './views/searchBarView.js';
import SearchResultsView from './views/searchResultsView.js';
import PageButtonView from './views/pageButtonView.js';
import BookmarksView from './views/bookmarksView.js';
import AddRecipeView from './views/addRecipeView.js';
import { async } from 'regenerator-runtime';
import addRecipeView from './views/addRecipeView.js';
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');
// const emptyRecipe = document.querySelector(`.message`);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

function initalize() {
  BookmarksView.addHandlerBookmarks(controlBookmarks);
  ViewSelectedRecipe.addHandlerRender(controlRecipe);
  ViewSelectedRecipe.addHandlerNewServings(controlServings);
  ViewSelectedRecipe.AddBookmarkHandler(controlToggleBookmark);
  SearchBarView.addHandlerSearch(controlSearch);
  PageButtonView.addPageHandler(controlPageButtons);
  AddRecipeView.addHandlerAddRecipe();
  AddRecipeView.addHandlerCloseRecipe();
  AddRecipeView.addHandlerSubmitRecipe(controlSubmitRecipe);
}
initalize();

async function controlRecipe() {
  try {
    ViewSelectedRecipe.loadingSpinner();

    const id = window.location.hash.slice(1);

    if (!id) {
      return;
    }

    // console.log(`Model.searchResultsPage`, Model.searchResultsPage());
    SearchResultsView.update(Model.searchResultsPage());
    // console.log(`test`);
    // debugger;
    BookmarksView.update(Model.state.bookmarks);

    await Model.loadSelectedRecipe(id);

    // console.log(`inserting recipe`);
    ViewSelectedRecipe.render(Model.state.recipe);
    // console.log(Model.state.recipe);
  } catch (error) {
    // console.log(error);
    ViewSelectedRecipe.renderError();
  }
}

async function controlSearch() {
  try {
    const searchQuery = SearchBarView.getQuery();
    // console.log(searchQuery);

    if (!searchQuery) {
      return;
    }
    SearchResultsView.loadingSpinner();

    await Model.loadSearchResults(searchQuery);
    console.log(Model.state.search);

    SearchResultsView.render(Model.searchResultsPage(1));

    PageButtonView.render(Model.state.search);
  } catch (error) {
    console.log(error);
  }
}
// controlSearch();

function controlPageButtons(targetPage) {
  SearchResultsView.render(Model.searchResultsPage(targetPage));

  PageButtonView.render(Model.state.search);
}

function controlServings(newServings) {
  // console.log(Model.state.recipe);
  Model.updateServings(newServings);
  ViewSelectedRecipe.update(Model.state.recipe);
}

function controlBookmarks() {
  BookmarksView.render(Model.state.bookmarks);
}

function controlToggleBookmark() {
  if (!Model.state.recipe.bookmarked) {
    // console.log(`boomark`, Model.state.recipe);
    Model.addBookmark(Model.state.recipe);
  } else {
    // console.log(`unbookmark`, Model.state.recipe);
    Model.removeBookmark(Model.state.recipe);
  }

  ViewSelectedRecipe.update(Model.state.recipe);

  BookmarksView.render(Model.state.bookmarks);
}

async function controlSubmitRecipe(data) {
  try {
    AddRecipeView.loadingSpinner();

    await Model.uploadRecipe(data);
    ViewSelectedRecipe.render(Model.state.recipe);
    alert(`Upload success`);
    AddRecipeView.toggleForm();
    BookmarksView.render(Model.state.bookmarks);
  } catch (error) {
    // addRecipeView.renderError(error);
    alert(error);
  }
}

// window.addEventListener(`hashchange`, selectedRecipe);
