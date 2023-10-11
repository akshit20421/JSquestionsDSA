var findSpecialInteger = function(arr) {
    var per=(1/4*(arr.length));
    var obj={};
    for(let x of arr){
        obj[x]=(obj[x] || 0 )+1;
    }
    for(let key in obj){
        if(obj[key]>per){
            return key
        }
    }
};