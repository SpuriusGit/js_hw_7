let span = document.querySelector('#value');
let counterValue = +span.textContent;
function increment() {
    document.querySelector('button[data-action="increment"]').addEventListener('click',()=>{
      counterValue+=1;
      span.textContent = counterValue;
    });
}
function decrement() {
  document.querySelector('button[data-action="decrement"]').addEventListener('click',()=>{
    counterValue-=1;
    span.textContent = counterValue;
  });
}
increment();
decrement();