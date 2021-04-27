/*
 * Lecture: the this keyword
 */

calculateAge(2005);

function calculateAge(year){
	console.log(2021 - year);
	console.log(this);
}

let john = {
	name         : 'John',
	yearOfBirth  : 1990,
	calculateAge : function(){
		console.log(this);
		console.log(2021 - this.yearOfBirth);

		/*
		function innerFunction(){
			console.log(this);
		}
		innerFunction();
		*/
	}
}

john.calculateAge();

let mike = {
	name        : 'Mike',
	yearOfBirth : 1984,

}

mike.calculateAge = john.calculateAge;
mike.calculateAge();

