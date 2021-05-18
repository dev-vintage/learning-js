/*
 * The global property Infinity is a numeric value representing infinity.
 *
 * Writable     -- no
 * Enumerable   -- no
 * Configurable -- no
 *
 */

/*
 * JavaScript Demo: Standard built-in objects - infinity
 */

const maxNumber = Math.pow(10, 100); // max positive number

if (maxNumber === Infinity){
  console.log('Let\'s call it Infinity');
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0

console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
console.log(1 / 0             ); /* Infinity */
