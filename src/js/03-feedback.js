import throttle from 'lodash.throttle';

const obj = {
  email: '',
  message: '',
};

const feedbackform = document.querySelector('.feedback-form');
let input = feedbackform.querySelector('.feedback-form input');
let textarea = feedbackform.querySelector('.feedback-form textarea');
// let submitButton = document.querySelector('.submit');

feedbackform.addEventListener('input', throttle(addToLocalStorage, 500));
function addToLocalStorage(event) {
  event.preventDefault();
  if (event.target.name === 'email') {
    obj.email = input.value;
    localStorage.setItem('feedback-form-state-email', obj.email);
  }
  if (event.target.name === 'message') {
    obj.message = textarea.value;
    localStorage.setItem('feedback-form-state-message', obj.message);
  }
}

window.addEventListener('load', restoreTexts());
function restoreTexts() {
  if (!localStorage.getItem('feedback-form-state-email')) {
    input.value = '';
  } else {
    input.value = localStorage.getItem('feedback-form-state-email');
  }

  if (!localStorage.getItem('feedback-form-state-message')) {
    textarea.value = '';
  } else {
    textarea.value = localStorage.getItem('feedback-form-state-message');
  }
}

feedbackform.addEventListener('submit', confirmForm);
function confirmForm(event) {
  event.preventDefault();
  if (obj.email === '' || (obj.message = '')) {
    alert("Please enter all info")
  } else {
    console.log('email: ', input.value);
    console.log('message: ', textarea.value);
    obj.email = '';
    obj.message = '';
    input.value = '';
    textarea.value = '';
    localStorage.removeItem('feedback-form-state-email');
    localStorage.removeItem('feedback-form-state-message');
  }
}

