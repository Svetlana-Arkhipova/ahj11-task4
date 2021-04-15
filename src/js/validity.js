// import { indexOf, map } from "core-js/core/array";

export default function checkValidity(inputValue) {
  // const inputValue = document.querySelector('.card-input').value;
  const arrValue = Array.from(inputValue).reverse().map(Number);
  const arrTrans = arrValue.map((item, index) => {
    if (index % 2 !== 0) {
      const newItem = item * 2;
      if (newItem > 9) {
        return Math.trunc(newItem / 10) + (newItem % 10);
      }
      return newItem;
    }
    return item;
  });
  const summa = arrTrans.reduce((sum, item) => sum + item, 0);
  return (summa % 10 === 0);
}
