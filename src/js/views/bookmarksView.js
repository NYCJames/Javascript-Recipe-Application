import View from './defaultView';
import icons from 'url:../../img/icons.svg';
import RecipeListView from './recipeListView';

class BookmarksView extends View {
  _parentElement = document.querySelector(`.bookmarks__list`);
  _defaultErrorMessage = `No bookmarks! Try another keyword.`;
  //   _defaultMessage = `Start by searching for a recipe or an ingredient. Have fun!`;

  //   _generateHtml() {
  //     const url = window.location.hash.slice(1);

  //     return this._data
  //       .map(function (recipe) {
  //         return `
  //       <li class="preview">
  //       <a class="preview__link ${
  //         url === recipe.id ? `preview__link--active` : ``
  //       }" href="#${recipe.id}">
  //         <figure class="preview__fig">
  //           <img src="${recipe.image}" alt="${recipe.title}" />
  //         </figure>
  //         <div class="preview__data">
  //           <h4 class="preview__title">${recipe.title}</h4>
  //           <p class="preview__publisher">${recipe.publisher}</p>
  //         </div>
  //       </a>
  //     </li>
  //     `;
  //       })
  //       .join(``);
  //   }

  _generateHtml() {
    return this._data
      .map(function (recipe) {
        return RecipeListView.render(recipe, false);
      })
      .join('');
  }

  addHandlerBookmarks(handlerFunction) {
    window.addEventListener(`load`, handlerFunction);
  }
}

export default new BookmarksView();
