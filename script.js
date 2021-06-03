const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");


function plusCounter(){
  if (h1.innerHTML.toLowerCase() === "nan"){
    counter = 0;
  }else{
    counter =  parseInt(h1.innerHTML);
  }
  if (input.value !== ''){
    counter += parseInt(input.value);
  }

  h1.innerHTML = counter;

  if (counter < 0){
    h1.style.color = "red";
  }
  if (counter > 0){
    h1.style.color = "black"
  }
}

function minusCounter(){
  if (h1.innerHTML.toLowerCase() === "nan"){
    counter = 0;
  }else{
  counter =  parseInt(h1.innerHTML);
  }
  if (input.value !== ''){
    counter -= parseInt(input.value);
  }

  h1.innerHTML = counter;

  if (counter < 0){
    h1.style.color = "red";
  }
  if (counter > 0){
    h1.style.color = "black"
  }
}


plus.addEventListener("click", plusCounter);
minus.addEventListener("click", minusCounter);
