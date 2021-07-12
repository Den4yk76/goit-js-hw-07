const checkedInputEl = document.querySelector('[data-length="6"]');

// const inputValue = checkedInputEl.textContent.length;
// const atributeValue = Number(checkedInputEl.getAttribute('data-length'));

checkedInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(checkedInputEl.text);
}
