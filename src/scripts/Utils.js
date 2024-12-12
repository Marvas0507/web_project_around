const formProfile = document.querySelector("#form-profile");
const profileName = document.querySelector(".profile__info-content-name");
const profileAbout = document.querySelector(".profile__info-paragraph");
const profileButton = document.querySelector(
  ".profile__info-content-add-button"
);
const formClose = document.querySelector("#form-button-close");
// const inputNameUser = document.querySelector(".form__content-input_type_name");
// const inputAboutUser = document.querySelector(
//   ".form__content-input_type_about"
// );
const profileAvatarContainer = document.querySelector(".profile__avatar");
const profileAvatarForm = document.querySelector("#popup-avatar");

const cardArea = document.querySelector(".element");
const formCard = document.querySelector("#form-cards");
const cardButton = document.querySelector(".profile__button-add");
const cardClose = document.querySelector("#card-button-close");
const buttonClosePopupPhoto = document.querySelector("#popup-photo-close");

const config = {
  formSelector: ".form",
  inputSelector: ".form__content-input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__content-input_type_error",
  inputErrorMessageClass: "form__error-message",
};
