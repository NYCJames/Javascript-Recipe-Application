import View from './defaultView';
import icons from 'url:../../img/icons.svg';

class PageButtonView extends View {
  _parentElement = document.querySelector(`.pagination`);

  //   _generatePreviousButton() {
  //     return `
  //   <button class="btn--inline pagination__btn--prev">
  //   <svg class="search__icon">
  //     <use href="${icons}#icon-arrow-left"></use>
  //   </svg>
  //   <span>Page ${currentPage - 1}</span>
  // </button>
  // `;
  //   }

  _generateHtml() {
    const lastPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.currentPage;
    // console.log(lastPage);

    const previousButton = `
    <button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>
  `;
    const nextButton = `
  <button data-goto="${
    currentPage + 1
  }" class="btn--inline pagination__btn--next">
  <span>Page ${currentPage + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>
`;
    const pageIndicator = `
<button class="pagination__btn--pagenum">
<span>Page ${currentPage} out of ${lastPage}</span>
</button>
`;

    if (currentPage === 1 && lastPage === 1) {
      //   console.log(`only 1 pg`);
      return pageIndicator;
    }

    if (currentPage < lastPage && currentPage === 1) {
      //   console.log(`page 1`);
      return pageIndicator + nextButton;
    }

    if (currentPage < lastPage && 1 < currentPage) {
      //   console.log(1 < currentPage);
      //   console.log(`page ${currentPage} out of ${lastPage}`);
      return previousButton + pageIndicator + nextButton;
    }

    if (currentPage === lastPage && lastPage > 1) {
      //   console.log(`last page`);
      return previousButton + pageIndicator;
      //   this._generatePreviousButton();
    }
  }

  addPageHandler(callback) {
    this._parentElement.addEventListener(`click`, function (event) {
      //   event.preventDefault();

      const target = event.target.closest(`.btn--inline`);
      if (!target) {
        return;
      }

      const targetPage = Number(target.dataset.goto);

      callback(targetPage);
    });
  }
}

export default new PageButtonView();
