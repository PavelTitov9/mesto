let profileEditDialogButton =document.querySelector('.profile__open');
let popup = document.querySelector('.popup');
let popupcloseButton =document.querySelector('.popup__close');
let formElement =document.querySelector('.popup__form');
let nameInput =document.querySelector('.popup__input_type_name');
let jobInput =document.querySelector('.popup__input_type_about');
let profileName =document.querySelector('.profile__name');
let profileJob =document.querySelector('.profile__bio');
let elementsLike =document.querySelectorAll('.elements__btn');


for (let index = 0; index < elementsLike.length; index++) {
    const element = elementsLike[index];
    element.addEventListener('click',function(evt){
           evt.target.classList.toggle('elements__btn_active');
        })
}

function togglePopup() {
        nameInput.value=profileName.textContent;
        jobInput.value=profileJob.textContent;
        popup.classList.toggle('popup_opened');
    }

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
    togglePopup();
}

profileEditDialogButton.addEventListener('click',togglePopup);
popupcloseButton.addEventListener('click',togglePopup);

formElement.addEventListener('submit', handleFormSubmit);
