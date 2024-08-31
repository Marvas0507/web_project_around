import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);        
        this._formElement = this._popupElement.querySelector(".popup__add-info")
        this._inputList = this._formElement.querySelector(".form__content-input")
        this._handleFormSubmit = handleFormSubmit;
    }
    getInputValues (){}
    setEventListeners () {
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleFormSubmit();
            super.close();
        })
    }
}