var kthFactor = function(n, k) {
   let arr =[];
   for(let i=1;i<=Math.sqrt(n);i++){
       if(n%i==0){
           arr.push(i)
         if (i !== n / i) {
             // Avoid adding the same factor twice for perfect squares
             arr.push(n / i);
         }
       }
     if (arr.length >= k) {
         break;
     }
   } 
  if (arr.length >= k) {
      return arr[k - 1];
  } else {
      return -1;
  }

};
console.log(kthFactor(12))