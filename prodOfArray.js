function productOfArray(arr){
    var prod=1;
    if(arr.length==0) return prod;
    else if(arr.length>0){
   return arr[0]*productOfArray(arr.slice(1))
    }
}
var cll = productOfArray([1,2,3]);
console.log(cll)