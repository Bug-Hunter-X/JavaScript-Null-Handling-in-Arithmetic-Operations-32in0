function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//The bug is in the following line:

function bar(a, b) {
  return a + b;
}
console.log(bar(5, null)); //Output: NaN
console.log(bar(null, 5)); //Output: NaN