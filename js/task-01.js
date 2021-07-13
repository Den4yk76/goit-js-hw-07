const liEl = document.querySelectorAll('li.item');
console.log(`В списке ${liEl.length} категории.`);
console.log('');

const itemsEl = document.querySelectorAll('li.item');

itemsEl.forEach(element => {
    console.log('Категория: ', element.querySelector('h2').textContent);
    console.log(
        'Количество элементов: ',
        element.querySelectorAll('li').length,
    );
    console.log('');
});
