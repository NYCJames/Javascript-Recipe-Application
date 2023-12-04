import View from './defaultView';
import icons from 'url:../../img/icons.svg';
import RecipeListView from './recipeListView';

class SearchResultsView extends View {
  _parentElement = document.querySelector(`.results`);
  _defaultErrorMessage = `No results found! Try another keyword.`;
  _defaultMessage = `Start by searching for a recipe or an ingredient. Have fun!`;

  //   addHandlerResults(callback){this._parentElement}

  // _generateHtml() {
  //   // console.log(this._data);

  //   // this._data.map(function (result) {
  //   //   console.log(result);
  //   // return `
  //   //   <li class="preview">
  //   //   <a class="preview__link preview__link--active" href="#23456">
  //   //     <figure class="preview__fig">
  //   //       <img src="${result.image}" alt="Test" />
  //   //     </figure>
  //   //     <div class="preview__data">
  //   //       <h4 class="preview__title">${result.title}</h4>
  //   //       <p class="preview__publisher">${result.publisher}</p>
  //   //       <div class="preview__user-generated">
  //   //         <svg>
  //   //           <use href="${icons}#icon-user"></use>
  //   //         </svg>
  //   //       </div>
  //   //     </div>
  //   //   </a>
  //   // </li>
  //   // `;
  //   // });

  //   const url = window.location.hash.slice(1);

  //   return this._data
  //     .map(function (recipe) {
  //       return `
  //     <li class="preview">
  //     <a class="preview__link ${
  //       url === recipe.id ? `preview__link--active` : ``
  //     }" href="#${recipe.id}">
  //       <figure class="preview__fig">
  //         <img src="${recipe.image}" alt="${recipe.title}" />
  //       </figure>
  //       <div class="preview__data">
  //         <h4 class="preview__title">${recipe.title}</h4>
  //         <p class="preview__publisher">${recipe.publisher}</p>
  //       </div>
  //     </a>
  //   </li>
  //   `;
  //     })
  //     .join(``);

  //   // return this._data.reduce(function (accumulator, recipe) {
  //   //   // console.log(accumulator);
  //   //   return (
  //   //     accumulator +
  //   //     `
  //   //     <li class="preview">
  //   //     <a class="preview__link ${
  //   //       url === recipe.id ? `preview__link--active` : ``
  //   //     }" href="#${recipe.id}">
  //   //       <figure class="preview__fig">
  //   //         <img src="${recipe.image}" alt="${recipe.title}" />
  //   //       </figure>
  //   //       <div class="preview__data">
  //   //         <h4 class="preview__title">${recipe.title}</h4>
  //   //         <p class="preview__publisher">${recipe.publisher}</p>
  //   //       </div>
  //   //     </a>
  //   //   </li>
  //   //   `
  //   //   );
  //   // }, ``);

  //   //     return `<li class="preview">
  //   //     <a class="preview__link preview__link--active" href="#23456">
  //   //       <figure class="preview__fig">
  //   //         <img src="src/img/test-1.jpg" alt="Test" />
  //   //       </figure>
  //   //       <div class="preview__data">
  //   //         <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
  //   //         <p class="preview__publisher">The Pioneer Woman</p>
  //   //         <div class="preview__user-generated">
  //   //           <svg>
  //   //             <use href="${icons}#icon-user"></use>
  //   //           </svg>
  //   //         </div>
  //   //       </div>
  //   //     </a>
  //   //   </li>`;
  // }

  _generateHtml() {
    return this._data
      .map(function (recipe) {
        return RecipeListView.render(recipe, false);
      })
      .join(``);
  }
}

export default new SearchResultsView();
