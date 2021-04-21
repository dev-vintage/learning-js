/*
 * Truthy and Falsy values and equality operators
 */

/*
 * falsy values  : undefined, null, 0, '', NaN
 * truthy values : Not falsy values
 */

let height;
height = 23;

if (height || height === 0){
	console.log('Variable is defined');
} else {
	console.log('Variable is not defined');
}


