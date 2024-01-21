var kthFactor = function(n, k) {
   var arr = []
    for(let i=1;i<=n;i++){
        if(n%i==0){
            arr.push(i)
        }
    }
    if(arr.length>=k){
        return arr[k-1]
    }
    return -1
};