import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  _clearHtml() {
    this._parentElement.innerHTML = ``;
  }

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    this._data = data;

    const html = this._generateHtml();

    if (!render) {
      return html;
    }

    this._clearHtml();
    this._parentElement.insertAdjacentHTML(`afterbegin`, html);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0)) {
    //   return this.renderError();
    // }
    this._data = data;

    const html = this._generateHtml();
    const newElements = Array.from(
      document
        .createRange()
        .createContextualFragment(html)
        .querySelectorAll(`*`)
    );
    // console.log(newElements);
    const oldElements = Array.from(this._parentElement.querySelectorAll(`*`));

    newElements.forEach(function (newElement, index) {
      const oldElement = oldElements[index];

      // console.log(newElement.isEqualNode(oldElement), newElement);

      if (
        !newElement.isEqualNode(oldElement) &&
        newElement.firstChild?.nodeValue.trim() !== ``
      ) {
        // console.log(oldElement.textContent, newElement.textContent);
        oldElement.textContent = newElement.textContent;
      }

      if (!newElement.isEqualNode(oldElement)) {
        Array.from(newElement.attributes).forEach(function (attribute) {
          oldElement.setAttribute(attribute.name, attribute.value);
        });
      }
    });
  }

  loadingSpinner() {
    const html = `
      <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML(`afterbegin`, html);
    // alert(`done loading`);
  }

  renderError(errorMessage = this._defaultErrorMessage) {
    const html = `<div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${errorMessage}</p>
    </div>`;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML(`afterbegin`, html);
  }

  renderMessage(message = this._defaultMessage) {
    const html = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML(`afterbegin`, html);
  }
}
