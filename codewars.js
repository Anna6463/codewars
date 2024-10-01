/*function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; ++i) {
    z.push(i * x);
  }
  return z;
}
console.log(countBy(10, 1));
console.log(countBy(2, 5));

function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }
  else {
    return n * m
  }

}
console.log(paperwork(10, 1));
console.log(paperwork(-5, 1));
console.log(paperwork(5, 5));*/

/*function litres(time) {
  var litrez = Math.floor(time * 0.5);
  if (litrez === 1) {
    return "1 litre";
  }
  else {
    return litrez + " litres";
  }
}

console.log(litres(3));
console.log(litres(6.7));

function simpleMultiplication(number) {
  if (number % 2 ===0){
    return  number * 8;
  }
  else{
    return number * 9;
  }
}
console.log(simpleMultiplication(12));
console.log(simpleMultiplication(11));

function sum (numbers) {
  "use strict";
  
  var result = numbers.reduce(function(summa, current) {
    return summa + current;
  }, 0);
  return result;
  
};
console.log(sum([1, 5.2, 4, 0, -1]));*/

const stringToNumber = function(str){
  let num = Number(str);
  return num;
}

console.log(stringToNumber);