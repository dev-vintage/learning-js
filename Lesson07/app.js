/*
 * Function Statements and Expressions
 */


let whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' are teacher!';
		case 'driver':
			return firstName + ' are driver!';
		case 'designer':
			return firstName + ' are designer!';
		default:
			return firstName + ' does something else';

	}
}

console.log(whatDoYouDo('teacher', 'Jose'));
