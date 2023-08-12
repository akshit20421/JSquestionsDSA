const countUniqueValues = (arr) => {
  let ar = [];
  let x = 0;
  let y = arr.length-1;
  
  while(x<y){
   if(arr[x]===arr[y]){
     if(!(ar.includes(arr[y])))
     ar.push(arr[y])
   }
  }
  return ar;
}

let cll = countUniqueValues([-2,-1,-1,0,1])  // 2
console.log(cll)


//[1,2,1,3]  //3