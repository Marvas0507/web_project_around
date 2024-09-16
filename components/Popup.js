export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);      
    }

    open() {
        this._popupElement.classList.add("popup__show");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close () {
        this._popupElement.classList.remove("popup__show");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    
    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.querySelector("popup__button-close").addEventListener("click", () => {
            this.close();
        });
        this._popupElement.addEventListener("click", (e) => {
            if (e.target === this._popupElement) {
                this.close();
            }
        });
    }

}