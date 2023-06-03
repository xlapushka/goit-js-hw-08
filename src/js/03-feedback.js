import throttle from 'lodash.throttle';

const obj = {
  email: '',
  message: '',
};

const feedbackform = document.querySelector('.feedback-form');
let input = feedbackform.querySelector('.feedback-form input');
let textarea = feedbackform.querySelector('.feedback-form textarea');


feedbackform.addEventListener('input', throttle(addToLocalStorage, 500));

function addToLocalStorage(event) {
  event.preventDefault();
  if (event.target.name === 'email') {
    obj.email = input.value;
  }
  if (event.target.name === 'message') {
    obj.message = textarea.value;
  }
  
  const objJSON = JSON.stringify(obj);
  localStorage.setItem('feedback-form-state', objJSON);
}

window.addEventListener('load', restoreTexts());
function restoreTexts() {
  const temp = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(temp);

  if (!temp.email) {
    input.value = input.value;
  } else {
    input.value = temp.email;
  };

  if (!temp.message) {
    textarea.value = textarea.value;
  } else {
    textarea.value = temp.message;
  }
}

feedbackform.addEventListener('submit', confirmForm);

function confirmForm(event) {
  event.preventDefault();
  if (obj.email === '' || (obj.message = '')) {
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
