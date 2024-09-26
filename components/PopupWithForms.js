import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);  
        this._handleFormSubmit = handleFormSubmit;     
        this._formElement = this._popupElement.querySelector(".form")
        this._inputList = Array.from(this._formElement.querySelectorAll(".form__content-input"));
        this._formButton = this._popupElement.querySelector(".form__button")
    }
    _getInputValues (){
        this.formValues = {};
        this._inputList.forEach((input) => {
            this.formValues[input.name] = input.value;            
        });
        return this.formValues;
    }
    close(){
        super.close();
        this._formElement.reset();
    }
    setEventListeners () {
        super.setEventListeners();
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();                        
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });        
    }
    
}