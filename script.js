const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__info-content-add-button");

const profileName = document.querySelector(".profile__info-content-name");
const profileAbout = document.querySelector(".profile__info-paragraph");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile")

const formClose = document.querySelector(".popup__button-close")

profileButton.addEventListener("click", function(){
    popupProfile.classList.add("popup__show");
});

function handleCloseProfile(){
    popupProfile.classList.remove("popup__show");
}

formClose.addEventListener("click", function(){
    popupProfile.classList.remove("popup__show");
})

formProfile.addEventListener("submit", function(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    handleCloseProfile();
});

