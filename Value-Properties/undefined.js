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

