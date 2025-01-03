const popupProfileForm = document.querySelector(".popup__form_profile");
const inputNameUser = document.querySelector(".popup__form-input_type_name");
const inputAboutUser = document.querySelector(".popup__form-input_type_about");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAvatarContainer = document.querySelector(
  ".profile__avatar-cointainer"
);
const profileAvatarForm = document.querySelector(".popup__form_avatar-profile");

const cardArea = document.querySelector(".cards");

const popupCardsForm = document.querySelector(".popup__form_cards");
const addCardsButton = document.querySelector(".profile__add-button");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__content-input_type_error",
  inputErrorMessageClass: "popup__form-error-message",
};

export {
  popupProfileForm,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileAbout,
  profileEditButton,
  profileAvatarContainer,
  profileAvatarForm,
  cardArea,
  popupCardsForm,
  addCardsButton,
  config,
};
