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

