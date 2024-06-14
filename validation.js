function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
    }
  };
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  function showInputError(formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.inputErrorMessageClass);
    errorElement.textContent = errorMessage;
  }
  
  function hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.inputErrorMessageClass);
    errorElement.textContent = " ";
  }
  
  function checkInputValidity(formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        config
      );
    } else {
      hideInputError(formElement, inputElement, config);
    };
  }
  
  function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  }
  
  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (e) {
        e.preventDefault();
      });
      setEventListeners(formElement, config);
    });
  }
  
  enableValidation({
    formSelector: ".form",
    inputSelector: ".form__content-input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__content-input_type_error",
    inputErrorMessageClass: "form__error-message",
  });