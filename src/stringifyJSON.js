// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
console.log(obj);
// checks if obj is a primitive that is not a string
  if (typeof(obj) !== 'object' && typeof(obj) !== 'string' && typeof(obj) !== 'function') {
    return obj + '';
  } else if (typeof(obj) === 'string') {
// since it's a string, we need to concat so the single quotes appear
    return '"' + obj + '"';
  } else if ($.isArray(obj)) {
// for arrays call stringify on all elements
    var result = '[';
    for (var i = 0; i < obj.length; i++) {
      // add the result of stringifying each element
	    result += stringifyJSON(obj[i]);
	    // check if element is last or not and apply ','
	    if (i < obj.length-1) {
        result += ',';
      };
    };
    // close the array with ]
    result += ']';
    return result;
  } else {
// since it's not a primitive, array, or function, treat it like a reg. obj
    if (!obj) {
      //evaluates to true for null
      return obj + '';
    } else {
      // otherwise not null
      var result = '{';
      for (var key in obj) {
// stringify does not handle undefined or functions       
        if(obj[key] !== undefined && typeof(obj[key]) !== "function") {
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        };
      };
      //since an extra ',' was added to last key value for non empty objects, remove it
      if (result.length > 1) {
        result = result.slice(0, result.length-1);
      };
      result += '}';
      return result;
    };
  };  
};
  


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
2c. if object console logging it out doesn't print out the key value pairs, just object, object a


1. do primiitives first, none string ones you can use .tostring() or +''
2. for strings you have to concat at "'" + string + "'"
3. for arrays loop though and call on each object
4. for objects do a for each and call on each key. for each key add the key as a string and concat : + result
*/
