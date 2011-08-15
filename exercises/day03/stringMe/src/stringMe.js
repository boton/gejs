function stringMeDuckTyping(obj) {
  return (obj && typeof(obj.push) === 'function') ? obj.join() : '';
}


/* Using .isArray ECMAS5
 https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray  */
if(!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function stringMe(obj) {
  return (Array.isArray(obj)) ? obj.join() : '';
}

/* witpout .join */
var stringMeWithoutJoin = function(obj) {
  
  function concatArray(arr){
    var text = '', l = arr.length;

    for(var i = 0; i < l; i++){
      text+= arr[i] + ',';
     }

    return text.slice(0, -1);
  }
  
  return Array.isArray(obj) ? concatArray(obj) : '';
};