/*
Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>;

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


#validation-input {
  border: 3px solid #bdbdbd;
}
#validation-input.valid {
  border-color: #4caf50;
}
#validation-input.invalid {
  border-color: #f44336;
} 
*/

// ==========================================================================================================

const input = document.getElementById("validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length === Number(input.dataset.length)
    ? input.classList.add("valid") || input.classList.remove("invalid")
    : input.classList.remove("valid") || input.classList.add("invalid");
}
