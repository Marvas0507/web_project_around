export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector)        
    }

    open() {
        this._popupElement.classList.add("popup__show")
    }
    close () {
        this._popupElement.classList.remove("popup__show")
    }
    
    handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

}