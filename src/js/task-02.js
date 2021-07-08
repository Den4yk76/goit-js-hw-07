const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listEl = document.querySelector('ul#ingredients');

ingredients.forEach(element => {
    console.log('element', element);
    const markupElements = document.createElement('li');
    markupElements.textContent = element;
    console.log(markupElements);
    listEl.appendChild(markupElements);
});
