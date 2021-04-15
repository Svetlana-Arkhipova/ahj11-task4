import checkPaySystem from './paysystem';
import checkValidity from './validity';

const inputEl = document.querySelector('input.card-input');
inputEl.addEventListener('input', () => {
  const inputValue = inputEl.value;
  if (inputValue.length === 2) {
    const paySystem = checkPaySystem(inputValue);
    const cardEl = document.querySelector(`.${paySystem}`);
    cardEl.classList.add('colored');
  }
  if (inputValue.length < 2 && document.querySelector('.colored')) {
    document.querySelector('.colored').classList.remove('colored');
  }
});

inputEl.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    document.querySelector('.result').textContent = '';
  }
});

const btn = document.querySelector('button');
const res = document.querySelector('.result');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = inputEl.value;
  const validity = checkValidity(inputValue);
  if (validity) {
    res.textContent = 'Номер валиден';
    res.classList.add('valid');
    res.classList.remove('invalid');
  } else {
    res.textContent = 'Проверьте правильность данных. Номер не валиден.';
    res.classList.add('invalid');
    res.classList.remove('valid');
  }
});
