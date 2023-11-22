var countNumbersWithUniqueDigits = function(n) {
 n=n.toString();
  var count=0
//we are gonna use set for this question
 for(let i=0;i<BigInt(Math.pow(10,Number(n)));i++){
   var spl=i.toString().split("");
   var set = new Set(spl)
   if(set.size==spl.length){
     count++
   }
 }
  return count
};

let cll = countNumbersWithUniqueDigits(3);
console.log(cll)


//or 
// var countNumbersWithUniqueDigits = function(n) {
//     // Handle edge case when n is 0
//     if (n === 0) {
//         return 1;
//     }

//     // Initialize count to 10 because single-digit numbers are always unique
//     let count = 10;

//     // Calculate the number of numbers with unique digits for each i up to n
//     for (let i = 2; i <= n; i++) {
//         let uniqueDigitChoices = 9;
//         for (let j = 9; j >= 9 - i + 2; j--) {
//             uniqueDigitChoices *= j;
//         }
//         count += uniqueDigitChoices;
//     }

//     return count;
// };

//for 3--> unique 
// for 33--> uniqueness-->3 -->unequal length--> we skip \
//34-->uniqueness-->34-->equal length --> we add count