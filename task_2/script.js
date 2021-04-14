const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
ingredients.forEach((item)=>{
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#ingredients').append(li);
});