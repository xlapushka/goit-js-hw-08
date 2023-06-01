import throttle from 'lodash.throttle';

const obj = {
  email: '',
  message: '',
};

const feedbackform = document.querySelector('.feedback-form');
let input = feedbackform.querySelector('input');
let textarea = feedbackform.querySelector('textarea');
// let submitButton = document.querySelector('.submit');

feedbackform.addEventListener('input', addToLocalStorage);
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
};

window.addEventListener('onload', restoreTexts());
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
};

feedbackform.submit(confirmForm());
function confirmForm(event) {
  event.preventDefault();
  console.log('hgh');
  // if (event.target.name === 'submit') {
  //   console.log('gh')
    // console.log('email: ', input.value);
    // console.log('message: ', textarea.value);
    // obj.email = '';
    // obj.message = '';
    // input.value = '';
    // textarea.value = '';
    // localStorage.removeItem('feedback-form-state-email');
    // localStorage.removeItem('feedback-form-state-message');
  // }
}
