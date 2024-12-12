const template = document.querySelector(".template__card");

export default class Card {
  constructor(name, link, handleImageClick) {
    this._name = name;
    this._link = link;
    this._card = this._getTemplate();
    this.handleImageClick = handleImageClick;
  }

  _getTemplate() {
    return template.cloneNode(true).content.querySelector(".element__card");
  }

  _setProperties() {
    this._cardImage = this._card.querySelector(".element__image");
    this._cardTitle = this._card.querySelector(".element__content-title");
    this._likeButton = this._card.querySelector("#like");
    this._deleteButton = this._card.querySelector(".element__button-delete");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
  }

  _handlelikeCard() {
    this._likeButton.classList.toggle("element__content-like-active");
  }

  _handleDeleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handlelikeCard();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      this.handleImageClick();
    });
  }

  createCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
