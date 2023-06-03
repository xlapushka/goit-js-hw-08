import throttle from 'lodash.throttle';

const obj = {
  email: ' ',
  message: ' ',
};
let objJSON = JSON.stringify(obj);
let temp = JSON.parse(objJSON);

const feedbackform = document.querySelector('.feedback-form');
const input = feedbackform.querySelector('.feedback-form input');
const textarea = feedbackform.querySelector('.feedback-form textarea');

feedbackform.addEventListener('input', throttle(addToLocalStorage, 500));

function addToLocalStorage(event) {
  event.preventDefault();

  obj.email = input.value;
  obj.message = textarea.value;

  objJSON = JSON.stringify(obj);
  localStorage.setItem('feedback-form-state', objJSON);
}

window.addEventListener('load', restoreTexts());

function restoreTexts() {
  temp = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (temp === null) {
    input.value = '';
    textarea.message = '';
  } else {
    input.value = temp.email;
    textarea.value = temp.message;
  }
}

feedbackform.addEventListener('submit', confirmForm);

function confirmForm(event) {
  event.preventDefault();
  if (obj.email === '' || obj.message === '') {
    alert('Please enter all info');
  } else {
    console.log('email: ', input.value);
    console.log('message: ', textarea.value);
    obj.email = '';
    obj.message = '';
    input.value = '';
    textarea.value = '';
    localStorage.removeItem('feedback-form-state');
  }
}
