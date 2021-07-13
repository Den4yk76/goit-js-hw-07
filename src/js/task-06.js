const checkedInputEl = document.querySelector('#validation-input');

const inputValue = checkedInputEl.textContent;
const atributeValue = Number(checkedInputEl.getAttribute('data-length'));

checkedInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === atributeValue) {
        checkedInputEl.classList.remove('invalid');
        checkedInputEl.classList.add('valid');
    } else {
        checkedInputEl.classList.remove('valid');
        checkedInputEl.classList.add('invalid');
    }
}
