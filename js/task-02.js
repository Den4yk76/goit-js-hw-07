const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listEl = document.querySelector('ul#ingredients');

const makeMarkup = ingredients => {
    return ingredients.map(ingredient => {
        const liEl = document.createElement('li');
        liEl.textContent = ingredient;
        return liEl;
    });
};

const markupElements = makeMarkup(ingredients);
listEl.append(...markupElements);

makeMarkup(ingredients);
