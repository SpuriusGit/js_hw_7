let input = document.querySelector('#name-input');
function changeInput() {
    input.addEventListener('change',(el)=>{
      if(input.value === ''){
        document.querySelector('#name-output').textContent = 'незнакомец';
      } else
        document.querySelector('#name-output').textContent = input.value;
    });
}
changeInput();