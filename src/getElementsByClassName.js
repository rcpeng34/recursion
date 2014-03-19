// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, rootNode) {
  var resultArray = [];
// checks to see if rootNode is provided
// if not then it is original call on document
 var rootNode = rootNode || document.body;
// since text nodes have no classList, check if classList is undefined
// checks rootNode to see if className is in classList
// if node contains className, pushes to resultArray
  if(rootNode.classList !== undefined && rootNode.classList.contains(className)) {
    resultArray.push(rootNode);
  };
// call getElementsByClassName on all childe elements
  for (var i = 0; i < rootNode.childNodes.length; i++) {
    var concatArray = (getElementsByClassName(className, rootNode.childNodes.item(i)));
    if (concatArray.length>0) {
      resultArray = resultArray.concat(concatArray);
    };
  };

  return resultArray;
};
