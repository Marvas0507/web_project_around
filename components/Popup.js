export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = this._popupElement.querySelector(
            ".popup__button-close"
          );      
    }

    open() {
        this._popupElement.classList.add("popup__show");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close () {
        this._popupElement.classList.remove("popup__show");
    }
    
    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener("click", () => {
            this.close();
        });
        this._popupElement.addEventListener("click", (e) => {
            if (e.target.className === "popup popup__show") {
              this.close();
            }
        });
    }

}