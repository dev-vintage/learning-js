/*
 * NaN
 *
 * The global NaN property is a value representing Not-A-Number.
 * 
 * Writable     -- no
 * Enumerable   -- no
 * Configurable -- no
 */

/* JavaScript Demo: Standard built-in objects - NaN*/

function sanitise(x) {
  if (isNaN) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// expected output: "1"

console.log(sanitise('NotANumber'));
// expected output: NaN
