var chunk = function(arr, size) {
  var sym = [];
  for (let i = 0; i < arr.length; i += size) {
    var sli = arr.slice(i, i + size);
    sym.push(sli);
  }
  return sym;
};

var cll = chunk([1, 9, 6, 3, 2], 3);
console.log(cll);
