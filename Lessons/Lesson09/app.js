/*
 * Objects and properties
 */

let jose = {
	firstName : 'Jos�',
	lastName  : 'Gomes',
	birthYear : 2005,
	family    : ['Viviane', 'Cec�lia', 'Maria'],
	job       : 'Student',
	isMarried : false

};

console.log(jose.firstName);
let x = 'birthYear';
console.log(jose[x]);

jose.job = 'programmer';
console.log(jose);

/*
 * new Object syntax
 */

let viviane        = new Object;
viviane.name       = 'Viviane';
viviane.birthYear  = 1983;
viviane[lastName]  = 'Cala�a';
console.log(viviane)

/*
 * Objects methods
 */

let john = {
	firstName : 'John',
	lastName  : 'Smith',
	birthYear : 1990,
	family    : ['Jane', 'Mark', 'Bob', 'Emily'],
	job       : 'Teacher',
	isMarried : false,
	calcAge   : function(birthYear){
		return 2021 - birthYear;
	},
}

console.log(john.calcAge(1990));











