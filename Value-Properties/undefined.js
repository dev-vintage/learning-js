/*

The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.

Property attributes of undefined
Writable	no
Enumerable	no
Configurable	no

*/

/*JavaScript Demo: Standard built-in objects - undefined*/

function test(t) {
	if (t == undefined) {
		return 'undefined value!';
	}
	return t;
}

let x;

console.log(test(x));
// expected output: "undefined value!";

/*
undefined is a property of the global object. That is, it is a variable in global scope. The initial value of 
undefined is the primitive value undefined.

In modern browsers (JavaScript 1.8.5 / Firefox 4+), undefined is a non-configurable, non-writable property,
per the ECMAScript 5 specification. (Even when this is not the case, avoid overriding it.)

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined 
if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value 
was not returned.

*/