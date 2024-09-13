import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);        
        this._formElement = this._popupElement.querySelector(".form")
        this._inputList = this._formElement.querySelector(".form__content-input")
        this._handleFormSubmit = handleFormSubmit;
    }
    getInputValues (){
        this.formValues = {};
        this._inputList.forEach((input) => {
            this.formValues[input.name] = input.value;            
        });
        return this.formValues;
    }
    setEventListeners () {
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();            
            this._handleFormSubmit(this.getInputValues());
            super.close();
        })
    }
}