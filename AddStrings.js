var findDisappearedNumbers = function(nums) {
    var arr=[];
    var set = new Set(nums);
    for(var i=1;i<=nums.length;i++){
      if(!set.has(i)){
        arr.push(i)
      }
    }   
        
return arr
};
var cll= findDisappearedNumbers([4,3,2,7,8,2,3,1]);
console.log(cll) // [1,2,3,4,7,8]