const showInputError = (formElement, inputElement, errorMessage, settingsObject) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(settingsObject.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settingsObject.errorClass);
};
  
const hideInputError = (formElement, inputElement, settingsObject) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(settingsObject.inputErrorClass);
    errorElement.classList.remove(settingsObject.errorClass);
    errorElement.textContent = '';
    
};
  
const checkInputValidity = (formElement, inputElement, settingsObject) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage,settingsObject);
    } else {
      hideInputError(formElement, inputElement, settingsObject);
    }
};
  
const setEventListeners = (formElement, settingsObject) => {
    const inputList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector));
    const buttonForms = formElement.querySelector(settingsObject.submitButtonSelector);
    toggleButtonState(inputList, buttonForms,settingsObject);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement,settingsObject);
        toggleButtonState(inputList, buttonForms,settingsObject);
      });
    });
};
  
const enableValidation = (settingsObject) => {
    const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
       
      const fieldsetList = Array.from(formElement.querySelectorAll(settingsObject.fieldsetSelector));
      fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet,settingsObject);
}); 
      
      
  });
};
  
enableValidation({
  formSelector: '.popup__form',
  fieldsetSelector: '.popup__fieldset',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__input-error_active'
});
  
  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
}

function toggleButtonState(inputList,buttonForms,settingsObject){
    if (hasInvalidInput(inputList)) {
    buttonForms.disabled = true;
    buttonForms.classList.add(settingsObject.inactiveButtonClass);
  } else {
    buttonForms.disabled = false;
    buttonForms.classList.remove(settingsObject.inactiveButtonClass);
  } 
}