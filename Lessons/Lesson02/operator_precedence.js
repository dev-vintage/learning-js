/*
 * Operator precedence
 */

let now		  = 2021;
let yearJose  = 2005;
let fullAge   = 18;

/*
 * Multiple Operators
 */

let isFullAge = now - yearJose >= fullAge; // true

console.log(isFullAge);

/*
 * Grouping 
 */

let ageJose = now - yearJose;
let ageIgor = 21;
let average = ageJose + ageIgor / 2;

console.log(average);

// Multiple assignments

let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6  // 26

console.log(x, y);












