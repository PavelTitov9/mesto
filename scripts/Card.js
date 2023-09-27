import {popupImage, imgCloseButton, openPopup, closePopup} from './index.js';

export class Card {
    constructor(data, cardSelector){
        this._title = data.name;
        this._image = data.link; 
        this._cardSelector = cardSelector;
    }

    _getCardsTemplate(){
      const cardsTemplate = document.querySelector('.elements__card-template').content.querySelector('.elements__card').cloneNode(true);
      return cardsTemplate;
    }

    _setCardsListeners() {
      this._cardsImage = this._element.querySelector('.elements__image');
      this._element.querySelector('.elements__name').textContent = this._title;
      this._cardsImage.addEventListener('click', this._handlePopupImage);
      this._element.querySelector('.elements__btn-delete').addEventListener('click', this._handleDelete);
      this._element.querySelector('.elements__btn').addEventListener('click', (evt) => { this._handleLike(evt) });
      
      imgCloseButton.addEventListener('click', () => {
          closePopup(popupImage);
      });
    }
    createCard() {
      this._element = this._getCardsTemplate();
      this._setCardsListeners();
      
      this._cardsImage.src = this._image;
      this._cardsImage.alt = this._title;
      
      
      return this._element;
}
_handlePopupImage(event){
  openPopup(popupImage);
  popupImage.querySelector('.popup__img-screen').src = event.target.src;
  popupImage.querySelector('.popup__img-name').textContent = event.target.parentNode.querySelector('.elements__name').textContent;
}
_handleDelete = () => {
  this._element.remove();
}
_handleLike = (event) => {
  const likeButton = event.target;
likeButton.classList.toggle('elements__btn_active');
}

}
