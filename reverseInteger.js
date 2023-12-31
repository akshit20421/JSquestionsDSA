var reverse = function(x) {
    var bitSize = Math.pow(2,31)-1;
    var lowBitSize = Math.pow(-2,31);
    var rev = x.toString().split("").reverse().join("");
    var intRev = parseInt(rev)
    if(intRev<lowBitSize || intRev>bitSize){
        return 0
    }
    if(x<0) return -intRev
    else{
        return intRev
    }
};