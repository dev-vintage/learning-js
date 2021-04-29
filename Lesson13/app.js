/*
 * BMI CALCULATOR
 */

 let john = {
 	fullName : 'John Smith',
 	mass     : 92,
 	height   : 1.95,
 	calcBMI  : function() {
		this.bmi = this.mass / (this.height * this.height);
 		return this.bmi;
 	}
 }

 john.calcBMI();
 console.log(john);