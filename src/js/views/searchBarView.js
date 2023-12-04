// import icons from 'url:../../img/icons.svg';

import View from './defaultView';

class SearchBarView extends View {
  _parentElement = document.querySelector(`.search`);

  getQuery() {
    const query = this._parentElement.querySelector(`.search__field`).value;
    this.clearSearchBar();
    return query;
  }

  clearSearchBar() {
    this._parentElement.querySelector(`.search__field`).value = ``;
  }

  addHandlerSearch(handlerFunction) {
    this._parentElement.addEventListener(`submit`, function (event) {
      //   console.log(`search`);
      event.preventDefault();
      handlerFunction();
    });
  }
}

export default new SearchBarView();
