const container = document.querySelector('#counter');
const spanValueEl = document.querySelector('#value');
const decrementBtnEl = container.firstElementChild;
const incrementBtnEl = container.lastElementChild;

let counterValue = 0;

function increment() {
    return (spanValueEl.textContent = counterValue += 1);
}

function decrement() {
    return (spanValueEl.textContent = counterValue -= 1);
}

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);
