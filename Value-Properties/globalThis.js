/*
The global globalThis property contains the global this value, which is akin to the global object.
*/

/*
JavaScript Demo: Standard built-in objects - globalThis
*/

function canMakeHTTPRequest() {
	return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());
// expected output (in a browser): true
