//todo: functie ce suma a doua numere ,inmultire inpartire

function sum(a, b) {
  let s = a + b;
  return s;
}

function inmultire(a, b) {
  return a * b;
}

function impartire(a, b) {
  return a / b;
}

function neg(a, b) {
  return a - b;
}

//arrow functions

let suma2 = (a, b) => {
  return a + b;
};

//callback

function exempluCallBack(func, a, b) {
  console.log(func(a, b));
  console.log("a=" + a);
  console.log("b=" + b);
}

exempluCallBack(
  (x, y) => {
    return x * 2 + y * 5;
  },
  3,
  5
);

function ceva(e){

     console.log(e.target);

}

let btn=document.querySelector(".button");

btn.addEventListener("click",()=>{

    
});
