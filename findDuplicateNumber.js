var findDuplicate = function(nums) {
    var arr=[...nums];
    var obj={};
    for(let x of arr){
        obj[x]=(obj[x] || 0) + 1;
    }
    for(let key in obj){
        if(obj[key]>1){
            return key
        }
    }
};