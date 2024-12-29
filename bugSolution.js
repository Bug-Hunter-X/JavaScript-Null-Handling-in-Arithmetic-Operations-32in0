function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10

//Alternative solution using || operator for default values
function bar(a, b) {
  a = a || 0; //If a is null or undefined, it'll be 0
  b = b || 0;
  return a + b;
}

console.log(bar(5, null)); //Output: 5
console.log(bar(null, 5)); //Output: 5
console.log(bar(null, null)); //Output: 0