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
console.log(sum([1, 5.2, 4, 0, -1]));

const stringToNumber = function(str){
  let num = Number(str);
  return num;
}

function DNAtoRNA(dna) {
  let a = dna.map(e => e.replace(/T/g, 'U'));
  return ;
}


console.log(DNAtoRNA['TTTT',
'GCAT',
'GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC']);



function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; ++i){
    if (arr[i] > 0){
      sum += arr[i];
      
    }
    
  }
  return  sum;
}
console.log(positiveSum([1,-4,7,12]));


function sumArray(array) {
        if (array == null)
      {
          return 0;
      }
      else if (array.length < 2)
      {
          return 0;
      }
      else
      {
  
          array = array.sort(function(a,b) {return a - b;});
  //         variable to hold the sum of the sorted array
          var total = 0;
  
          for (var i = 1; i < array.length - 1; i++) {
              total += array[i];
          }
          return total;
      }
  } 

  function smash (words) {
    if (words.length === 0){
      return "";
    } else {
      return words.join(" ").trim();
    }
  };
  console.log(smash['hello', 'world', 'this', 'is', 'great']);

function hero(bullets, dragons) {
  if (bullets < dragons) {
    return false;
  } else if (bullets >= dragons * 2) {
    return true;
  }else{
    return false;
  }

}

console.log(hero(29, 15));

const reverseSeq = n => {
  let foo = [];
  for( let i = n; i > 0; --i){
    
     foo.push(i);
  }
  return foo;
};

console.log(reverseSeq(5));

function otherAngle(a, b) {
  
  return 180 - a - b;
}
console.log(otherAngle(50, 50));

function squareSum(numbers){
  let sum = 0
  for(i = 0 ; i < numbers.length; i++){
    sum += (numbers[i] * numbers[i])    
  } 
  return sum
}

console.log(squareSum[1, 2, 2]);

function digitize(n) {
  var initialArray = (""+n).split('');
  var reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  return reversedArray;
}
console.log(digitize(325));*/

function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

function solution(str, ending){
  return str.endsWith(ending);
}

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

function removeChar(str){
  //You got this!
   let newStr = ""
   for(i = 0 ; i < str.length ; i++){
     if(i == 0){
       newStr += ""
     }else if(i > 0 && i < (str.length-1)){
       newStr += str[i]
     }else if (i == str.length){
       newStr += ""
     }
   }
   return newStr
 };