let capitalize = (arr) => {
  if (arr.length === 0) return [];

  var spl = arr[0].split("");
  spl[0] = spl[0].toUpperCase();

  return [spl.join("")].concat(capitalize(arr.slice(1)));
}
 let cll = capitalize(['car','taco','banana']);
console.log(cll)