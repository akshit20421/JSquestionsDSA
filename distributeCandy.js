var distributeCandies = function(candies, num_people) {
   const arr = new Array(num_people).fill(0)
  var point=0
  var count=1;
   while(candies>0){
        arr[point]+=(count<=candies)?count:candies;
       candies-=count;
     count++;
     point++
     if(point==num_people){
       point=0;
     }
   }
  return arr
    
};

var cll = distributeCandies(7,4);
console.log(cll)