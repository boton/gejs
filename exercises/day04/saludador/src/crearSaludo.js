/*
http://gejs.jottit.com/reuni%C3%B3n_4%3A_2011.08.25
*/

/* Using .isArray ECMAS5
 https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray  */
if(!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

var map = function(arr,func) {
  var newArray = [],
  l = arr.length;
  
  for (var i = 0; i < l; ++i) {
    newArray.push(func.call(arr,arr[i]));
    //DUDA - seria buena cosa pasar el this a null si no lo uso?
    //newArray.push(func.call(null,arr[i]));
  }
  
  return newArray;
};

var crearSaludo = function(names){
  
  var saludo = function(name){
    return function() {
      var saludo = 'Hola ' + name; 
      console.log(saludo); 
      return saludo;
    };
  }
  
  if (typeof names === 'string') {
    return saludo(names);
  } else if (Array.isArray(names)) {
    return map(names,saludo);
  } else {
    throw new TypeError("param is not a string or array");
  }
};