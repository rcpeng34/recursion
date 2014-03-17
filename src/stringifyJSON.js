// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
//converts the object below into a string
var test = '' + obj;
console.log(test);
console.log(typeof(test));
console.log("this is an object" + {stupid: 0, cracker: "true"});
/*
Notes:
converts an object to a JSON string of format '' around primitives and 
{key: value, key: value} for objects
should also take a replacer object if possible (does not seem necessary for this)
obj can be simple variables, arrays, and objects

recursive step: if object is an array, calls stringify on the values in the array.

pseudocode
1. check if object or array otherwise assume to be primitive
2a. if primitive, put ' ' around it and then return
2b. if array, console.log(array) does not print out the [], also needs '' around
2c. if object console logging it out doesn't print out the key value pairs, just object, object

*/

};
