const boxesContainerEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');

function createBoxes(amount = inputEl.value) {
    const divContainer = [];
    let width = 20;
    let height = 20;
    for (let i = 0; i < amount; i += 1) {
        width += 10;
        height += 10;
        divContainer.push(
            `<div class="box" style="background-color: ${randomColor()} ; width: ${width}px; height: ${height}px"></div>`,
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
