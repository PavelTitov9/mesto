export const settingsObject = {
  formElement: '.popup__form',
  fieldsetSelector: '.popup__fieldset',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__input-error_active'
};



export class FormValidator {
  constructor(settingsObject,formElement){
    this._formElement = formElement;
    this._inputSelector = settingsObject.inputSelector;
    this._submitButtonSelector = settingsObject.submitButtonSelector;
    this._inactiveButtonClass = settingsObject.inactiveButtonClass;
    this._inputErrorClass = settingsObject.inputErrorClass;
    this._errorClass = settingsObject.errorClass;
    this.inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }


_showInputError  (inputElement, errorMessage ){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
};
  
_hideInputError (inputElement)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
    
};
  
_checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
};
  
_setEventListeners ()  {
    this._buttonForms = this._formElement.querySelector(this._submitButtonSelector);
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
};
  
enableValidation ()  {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    this._setEventListeners();

};
  
_hasInvalidInput(){
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  }); 
}

toggleButtonState(){
    if (this._hasInvalidInput()) {
    this._buttonForms.disabled = true;
    this._buttonForms.classList.add(this._inactiveButtonClass);
  } else {
    this._buttonForms.disabled = false;
    this._buttonForms.classList.remove(this._inactiveButtonClass);
  } 
}
}

