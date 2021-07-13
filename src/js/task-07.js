const rangeEl = document.querySelector('#font-size-control');
console.log(rangeEl.value);
const textEl = document.querySelector('#text');
console.log(textEl.textContent);

rangeEl.addEventListener('input', onChangeRange);

function onChangeRange(event) {
    textEl.style.fontSize = `${rangeEl.value}px`;
}
