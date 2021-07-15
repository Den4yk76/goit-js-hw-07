const boxesContainerEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');

let width = 20;
let height = 20;

function createBoxes(amount = inputEl.value) {
    const divContainer = [];
    for (let i = 0; i < amount; i += 1) {
        width += 10;
        height += 10;
        divContainer.push(
            `<div class="box" style="background-color: ${randomColor()} ; width: ${width}px; height: ${height}px"></div>`,
        );
        console.log('width: ', width, 'height: ', height);
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
    boxesContainerEl.insertAdjacentHTML('beforeend', createBoxes().join(''));
}

function destroyBoxes() {
    boxesContainerEl.innerHTML = '';
    inputEl.value = '';
    width = 20;
    height = 20;
}

renderBtnEl.addEventListener('click', renderBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);
