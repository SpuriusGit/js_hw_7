// К-ство категорий
let categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории`);
// Текст заголовка и количество элементов в категории
let items = document.querySelectorAll('.item');
let h2 = document.querySelectorAll('h2');
items.forEach((el)=>{
    console.log(`Категория: ${el.querySelector('h2').textContent}`);
    console.log(`Количество элементов : ${el.querySelector('ul').children.length}`);
});