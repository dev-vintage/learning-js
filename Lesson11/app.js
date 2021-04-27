/*
 * Lecture: Hoisting
 */

calculateAge(2005);

function calculateAge(year){
	console.log(2021 - year);
}

// retirement(2005); //error

var retirement = function(year){
	console.log(65 - (2021 - year));
}

/*
 * variables
 */

console.log(age);
var age = 15;
console.log(age);

function foo(){
	var age = 65;
	console.log(age);
}

foo();
console.log(age);

/*
 * scope example
 */

var a = 'Hello';
first();

function first(){
	var b = 'Hi!';
	second();

	function second(){
		var c = 'Hey!';
		console.log(a + b + c);
	}
}



