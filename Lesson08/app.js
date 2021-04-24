/*
 * Arrays
 */

let names = ['José', 'Maria', 'João'];
let years = new Array(2005, 2020, 1990);

console.log(names[0]);
console.log(names.length);

/*
 * Mutate array data
 */
names[1] = 'Josh';
names[names.length] = 'Ana';
console.log(names);

/*
 * Different data types
 */
let jose = ['José', 'Vitor', 2005, 'programmer', false];
jose.push('black');
jose.unshift('Teenager');
jose.pop(); // remove a element from the end
jose.shift(); // remove a element from the start
console.log(jose);

console.log(jose.indexOf(2005));



