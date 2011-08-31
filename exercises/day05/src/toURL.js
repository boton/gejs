/*
http://www.meetup.com/madridjs/pages/Reunion5.2011.09.01/
4- Crear un método para el objeto String que convierta los espacios en blanco de una cadena dada en guiones bajos.
*/
String.prototype.toUrl = function() {
  return this.replace(/ /g,'_');
};