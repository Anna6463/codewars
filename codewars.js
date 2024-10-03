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
console.log(digitize(325));

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

 function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
      return [];
  }
  var array = [0, 0];

  for(var i = 0; i < input.length; i++) {
      if(input[i] <= 0) {
          array[1] += input[i];
    } else {
          array[0] += 1;
    }
  }
  return array;
}

function findShort(s) {
  let res = s.split(' ');
  let a = Infinity;
  
  for (let i = 0; i < res.length; i++) {
    a = Math.min(res[i].length, a);
  }
  return a;
}

function oddOrEven(array) {
  return array.reduce(function(sum, item) {
    return sum + item
  }, 0) % 2 == 0 ? 'even' : 'odd';
}
function DNAStrand(dna) {
  var letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
  var arr = [];
  for (var i=0; i < dna.length; i++) {
      arr[i] = letters[dna[i]];
  }
  return arr.join('');}

  function minMax(arr){
    let arrNew = [];
   
    let min = Math.min(...arr);
    console.log(min);
    
      arrNew.push(min);
     let max = Math.max(...arr);
     console.log(max);
      arrNew.push(max);
  
    
    return arrNew // fix me!
  }
  console.log(minMax[1,2,3,4,5]);

  function removeExclamationMarks(s) {
    /*const regExp = //!+$/g/;


    
    return s.replace(/!/g, '');
  }
  console.log(removeExclamationMarks('mIRtMGohzV!iFxholAKyH SZmOljJknP!ohfoxpYDFB'));

  function evenOrOdd(number) {
    if (number % 2 == 0){
      return "Even"
    } else{
      return "Odd"
    }
    
  }
  console.log(evenOrOdd(54));*/

  function alphabetPosition(text) {
    return text.charCodeAt();
  }

  console.log(alphabetPosition('aaa'));

  function alphabeticalPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text
        .toLowerCase() // Convert the text to lowercase to handle both cases
        .split('') // Split the string into an array of characters
        .map(char => {
            const index = alphabet.indexOf(char); // Get the index of the character in the alphabet
            return index !== -1 ? index + 1 : null; // If it's a letter, return its position (+1 because index is zero-based)
        })
        .filter(pos => pos !== null) // Remove any null values (non-letters)
        .join(' '); // Join the resulting array into a string with spaces
}

function towerBuilder(nFloors) {
  var finalArray = [];
  var numSpaces = 0;
  // Start from the reverse.
  for (i = nFloors; i > 0; i--) {
    // At the end, the number of spaces are 0.
    // Have one and less for the half of the stars.
    // Add another set of spaces.
    finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
    // Increment the space, while going to top.
    numSpaces++;
  }
  // Reverse the array.
  return finalArray.reverse();
}