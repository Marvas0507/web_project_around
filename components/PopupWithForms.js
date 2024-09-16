import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);        
        this._formElement = this._popupElement.querySelector(".form")
        this._inputList = Array.from(this._formElement.querySelectorAll(".form__content-input"));
        this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues (){
        this.formValues = {};
        this._inputList.forEach((input) => {
            this.formValues[input.name] = input.value;            
        });
        return this.formValues;
    }
    setEventListeners () {
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();            
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        // super.setEventListeners();
    }
    close(){
        super.close();
        this._formElement.reset();
    }
}