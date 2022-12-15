let value = 5;

function addFive(n) {
  return n + 5;
}

function double(n) {
  return n * 2;
}

function finalValue(nextValue) {
  console.log(`The final value is ${nextValue}`);
}

const mathPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve promise if 'value' is a number;oherwise,reject it
      if (typeof value === "number") {
        resolve(value);
      } else {
        reject("You mustspecify a number as the value.");
      }
    }, 1000);
  });

  //lantuire de promisuri =>va  executa toate funciile adica  avem 5+add five=5+double=20+addFive=25
  
  mathPromise()
  .then(addFive)
  .then(double)
  .then(addFive)
  .then(finalValue)
  .catch (err=>console.log(err))

  mathPromise()
  .then(addFive)
  .then (double)
  .then(finalValue)
  .catch(err=>console.log(err))