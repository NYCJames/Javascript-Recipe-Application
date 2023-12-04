import View from './defaultView';
import icons from 'url:../../img/icons.svg';
import fracty from 'fracty';

class ViewSelectedRecipe extends View {
  _parentElement = document.querySelector(`.recipe`);

  _defaultErrorMessage = `Recipe not found. Please try again!`;
  _defaultMessage = `Start by searching for a recipe or an ingredient. Have fun!`;

  _generateHtml() {
    // console.info(`html`, this);
    return `
      <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this._data.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this._data.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
            <button data-newservings="${
              this._data.servings - 1
            }" class="btn--tiny btn--decrease-servings btn--servings">
        <svg>
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
      </button>
      <button data-newservings="${
        this._data.servings + 1
      }" class="btn--tiny btn--increase-servings btn--servings">
        <svg>
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#${
      this._data.bookmarked ? `icon-bookmark-fill` : `icon-bookmark`
    }"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateIngredientsHtml).join(``)}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this._data.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.source}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
  }

  //   ${
  //     this._data.servings > 1
  //       ? `
  //       <button data-newservings="${
  //         this._data.servings - 1
  //       }" class="btn--tiny btn--decrease-servings btn--servings">
  //   <svg>
  //     <use href="${icons}#icon-minus-circle"></use>
  //   </svg>
  // </button>
  // <button data-newservings="${
  //   this._data.servings + 1
  // }" class="btn--tiny btn--increase-servings btn--servings">
  //   <svg>
  //     <use href="${icons}#icon-plus-circle"></use>
  //   </svg>
  // </button>
  // `
  //       : `
  //     <button data-newservings="${
  //       this._data.servings + 1
  //     }" class="btn--tiny btn--increase-servings btn--servings">
  //       <svg>
  //         <use href="${icons}#icon-plus-circle"></use>
  //       </svg>
  //     </button>
  //     `
  //   }

  _generateIngredientsHtml(item) {
    return `
    <li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
  </svg>
      <div class="recipe__quantity">${
        item.quantity ? fracty(item.quantity) : ''
      }</div>
  <div class="recipe__description">
    <span class="recipe__unit">${item.unit}</span>
    ${item.description}
  </div>
</li>
`;
  }

  addHandlerRender(handlerFunction) {
    [`hashchange`, `load`].forEach(function (event) {
      window.addEventListener(event, handlerFunction);
    });
  }

  addHandlerNewServings(handlerFunction) {
    this._parentElement.addEventListener(`click`, function (event) {
      const target = event.target.closest(`.btn--tiny`);
      if (!target) {
        return;
      }

      const newServings = Number(target.dataset.newservings);
      if (newServings < 1) {
        return;
      }

      // console.log(target.classList.contains(`btn--decrease-servings`));
      // target.classList.contains(`btn--decrease-servings`)
      //   ? this._data.servings - 1
      //   : this._data.servings + 1;

      handlerFunction(newServings);
    });
  }

  AddBookmarkHandler(handlerFunction) {
    this._parentElement.addEventListener(`click`, function (event) {
      const target = event.target.closest(`.btn--round`);
      if (!target) {
        return;
      }
      // console.log(target);

      handlerFunction();
    });
  }
}

export default new ViewSelectedRecipe();
