import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".form");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".form__content-input")
    );
    this._formButton = this._popupElement.querySelector(".form__button");
  }
  _getInputValues() {
    this.formValues = {};
    this._inputList.forEach((inputElement) => {
      this.formValues[inputElement.name] = inputElement.value;
    });
    return this.formValues;
  }
  handleOpen(contentFirstInput, contentSecondInput) {
    this._formButton.textContent = "Guardar";
    super.handleOpen();
    this._inputList[0].value = contentFirstInput || "";
    if (this._inputList[1]) {
      this._inputList[1].value = contentSecondInput || "";
    }
  }
  handleClose() {
    super.handleClose();
    this._formElement.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formButton.textContent = "Guardando...";
      const close = () => this.handleClose();
      this._handleFormSubmit(this._getInputValues(), close);
    });
  }
}
