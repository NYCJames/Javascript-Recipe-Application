import View from './defaultView';

class AddRecipeView extends View {
  _parentElement = document.querySelector(`.add-recipe-window`);
  _form = this._parentElement;
  _addRecipeButton = document.querySelector(`.nav__btn--add-recipe`);
  _formBackground = document.querySelector(`.overlay`);
  _closeForm = document.querySelector(`.btn--close-modal`);

  addHandlerAddRecipe() {
    this._addRecipeButton.addEventListener(`click`, this.toggleForm.bind(this));
  }

  toggleForm() {
    this._formBackground.classList.toggle(`hidden`);
    this._form.classList.toggle(`hidden`);
  }

  addHandlerCloseRecipe() {
    this._closeForm.addEventListener(`click`, this.toggleForm.bind(this));
    this._formBackground.addEventListener(`click`, this.toggleForm.bind(this));
  }

  addHandlerSubmitRecipe(handlerFunction) {
    this._form.addEventListener(`submit`, function (event) {
      event.preventDefault();
      //   console.log(event);
      // const target = event.target.closest(`.upload__btn`);
      //   if (!target) {
      //     return;
      //   }

      const formData = event.target.closest(`.upload`);

      const dataArray = [...new FormData(formData)];
      const data = Object.fromEntries(dataArray);
      //   console.log(data);
      //   const recipe = [data];
      //   console.log(recipe);

      try {
        const ingredientsArray = dataArray.filter(function (item) {
          return item[0].startsWith(`ingredient-`) && item[1] !== ``;
        });
        ingredientsArray.map(function (ingredient) {
          const ingredients = ingredient[1]
            // .replaceAll(` `, ``)
            .split(`,`)
            .map(function (part) {
              return part.trim();
            });
          // console.log(ingredients);

          if (ingredients.length !== 3) {
            throw new Error(
              `3 items needed in format of "quantity,unit,description"`
            );
          }
        });
        //   console.log(ingredients);
        handlerFunction(data);
      } catch (error) {
        alert(error);
      }
    });
  }
}

export default new AddRecipeView();
