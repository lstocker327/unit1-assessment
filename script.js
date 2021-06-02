const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

function plusCounter(){
  counter =  parseInt(h1.innerHTML);
  counter += parseInt(input.value);
  h1.innerHTML = counter;
}

function minusCounter(){
  counter =  parseInt(h1.innerHTML);
  counter -= parseInt(input.value);
  h1.innerHTML = counter;
}

plus.addEventListener("click", plusCounter);
minus.addEventListener("click", minusCounter);
