import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
    this._formElement = this._popupElement.querySelector(
      ".popup__form_delete-confirmation"
    );
    this.cardId = "";
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleConfirmation(this.cardId);
    });
  }

  handleOpen(cardId) {
    this.cardId = cardId;
    super.handleOpen();
  }

  handleClose() {
    super.handleClose();
  }
}
