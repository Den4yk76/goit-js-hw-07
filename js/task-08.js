const boxesContainerEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');

function createBoxes(amount = inputEl.value) {
    const divContainer = [];
    for (let i = 0; i < amount; i += 1) {
        divContainer.push(
            `<div class="box" style="background-color: ${randomColor()} ;"></div>`,
        );
    }
    return divContainer;
}

function randomColor() {
    const color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
        Math.random() * 255,
    )}, ${Math.round(Math.random() * 255)})`;

    return color;
}

function renderBoxes() {
    boxesContainerEl.insertAdjacentHTML('afterbegin', createBoxes().join(''));
}

function destroyBoxes() {
    boxesContainerEl.innerHTML = '';
    inputEl.value = '';
}

renderBtnEl.addEventListener('click', renderBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);
