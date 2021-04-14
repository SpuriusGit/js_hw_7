let input = document.querySelector('#validation-input');
function check() {
    input.addEventListener('change',()=>{
      if(input.getAttribute('data-length') == input.value.length){
        input.classList.add('valid');
        input.classList.remove('invalid');
      } else{
        input.classList.add('invalid');
        input.classList.remove('valid');
      }
    });
}
check();