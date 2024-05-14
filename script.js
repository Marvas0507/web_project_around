const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__info-content-add-button");

const profileName = document.querySelector(".profile__info-content-name");
const profileAbout = document.querySelector(".profile__info-paragraph");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formProfile = document.querySelector("#form-profile");
const formClose = document.querySelector("#form-button-close");

const template = document.querySelector(".template__card");
const cardArea =document.querySelector(".element");
const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];
const popupCards = document.querySelector("#popup-cards");
const cardButton = document.querySelector(".profile__button-add")
const cardClose = document.querySelector("#card-button-close");
const formCard = document.querySelector("#form-cards")

profileButton.addEventListener("click", function(){
    popupProfile.classList.add("popup__show");
});

function handleCloseProfile(){
    popupProfile.classList.remove("popup__show");
};

formClose.addEventListener("click", function(){
    popupProfile.classList.remove("popup__show");
});

formProfile.addEventListener("submit", function(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    handleCloseProfile();
});

function cardGenerator(name, link){
    const card = template.cloneNode(true).content.querySelector(".element__card");
    const cardImage = card.querySelector(".element__image");
    const cardTitle = card.querySelector(".element__content-title");
    cardImage.src = link;
    cardTitle.textContent = name;
    cardImage.alt = name;
    cardArea.append(card);
    const buttonDelete = card.querySelector(".element__button-delete");
    buttonDelete.addEventListener("click", function(){
        card.remove();
    });
    const likeActive = card.querySelector("#like");
    likeActive.addEventListener("click", function(){
        likeActive.classList.toggle("element__content-like-active")
    });
    return card;
}

initialCards.forEach(function (element){
    const newCard = cardGenerator(element.name, element.link);
    cardArea.append(newCard);
});

cardButton.addEventListener("click", function(){
    popupCards.classList.add("popup__show");
});

function handleCloseCards(){
    popupCards.classList.remove("popup__show");
};

cardClose.addEventListener("click", function(){
    popupCards.classList.remove("popup__show");
});

formCard.addEventListener("submit",function(evt){
    evt.preventDefault();
    const cardAdd = cardGenerator();
    cardArea.prepend(cardAdd);
    handleCloseCards();
});
