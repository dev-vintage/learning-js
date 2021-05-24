/*
Object

Nearly all objects in JavaScript are instances of Object; a typical object inherits properties 
(including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). 
However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), 
or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

Changes to the Object prototype object are seen by all objects through prototype chaining, unless the 
properties and methods subject to those changes are overridden further along the prototype chain.
This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.
The Object constructor creates an object wrapper for the given value.

If the value is null or undefined, it will create and return an empty object.
Otherwise, it will return an object of a Type that corresponds to the given value.
If the value is an object already, it will return the value.
When called in a non-constructor context, Object behaves identically to new Object().

*/

/*Examples:*/
/*The following examples store an empty Object object in o:*/

/*
let o = new Object()
let o = new Object(undefined)
let o = new Object(null)
*/

/* Object() Constructor
The Object creates an object wrapper for the given value.

If the value is null or undefined, it will create and return an empty object.
Otherwise, it will return an object of a Type that corresponds to the given value.
If the value is an object already, it will return the value.
When called in a non-constructor context, Object behaves identically to new Object().
*/

/* Syntax */

//new Object();

/* Creating a new Object */

let o = new Object();
o.foo = 42;

console.log(o);

// Object { foo: 42 }










