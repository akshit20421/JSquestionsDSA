var twoSum = function(numbers, target) {
  var x=0;
  var y=numbers.length-1;
  while(x<y){ut
     var sum=numbers[x]+numbers[y]
     if(sum==target){
         return [x+1,y+1];   
  }
      else if(sum<target){
       x++;
  }
  else{
      y--;
  }}
};