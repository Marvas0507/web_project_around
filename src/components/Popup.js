export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(
      ".popup__button-close"
    );
    this._handleEscapeKey = this._handleEscapeKey.bind(this);
  }

  handleOpen() {
    this._popupElement.classList.add("popup__show");
    document.addEventListener("keydown", this._handleEscapeKey);
  }

  handleClose() {
    this._popupElement.classList.remove("popup__show");
  }

  _handleEscapeKey(e) {
    if (e.key === "Escape") {
      this.handleClose();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.handleClose();
    });
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.className === "popup popup__show") {
        this.handleClose();
      }
    });
  }
}
