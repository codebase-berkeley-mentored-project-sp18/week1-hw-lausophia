/*
Question 3 - JavaScript Objects
================================
JavaScript is not an object-oriented language. Despite that, it does have "objects"
that are more similar to dictionaries in Python and should be thought of as such.

The following function takes in a non-null object that may contain other objects.
It should return the maximum depth to which objects are nested.

Example:
>>> getObjectNestingDepth({})
--> 1
>>> getObjectNestingDepth({ "key1": 1, "key2": 2 })
--> 1
>>> getObjectNestingDepth({
      "lvl1": {
        "lvl2": {
          "lvl3": "END"
        }
      }
    })
--> 3
*/
function getObjectNestingDepth(inputObject) {
  var max_d = 0;
  var k = Object.keys(inputObject);
  if (k.length === 0){
    return 1;
  }
  k.forEach(function(key){
    if (inputObject[key] instanceof Object){
      var nested_d = getObjectNestingDepth(inputObject[key]);
      if (nested_d > max_d){
        max_d = nested_d;
      }
    }
  });
  return 1 + max_d;
}
