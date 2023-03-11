import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const USER_FORM_DATA = 'feedback-form-state';
let formDataValues = {};

const onFormInput = event => {
  formDataValues[event.target.name] = event.target.value;
  localStorage.setItem(USER_FORM_DATA, JSON.stringify(formDataValues));
};

const onFormSubmit = event => {
  event.preventDefault();
  console.log(formDataValues);
  localStorage.removeItem(USER_FORM_DATA);
  event.target.reset();
};

const populateFormData = () => {
  const savedFormData = localStorage.getItem(USER_FORM_DATA);
  if (savedFormData) {
    formDataValues = JSON.parse(savedFormData);
    inputEl.value = formDataValues.email || '';
    textareaEl.value = formDataValues.message || '';
  }
};
populateFormData();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));
