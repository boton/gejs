/*
http://www.meetup.com/madridjs/pages/Reunion5.2011.09.01/
2- Crear una funci�n que implemente un m�todo TRIM en Javascript.
*/

function trim(str) {
  return str.replace(/^\s*|\s*$/g,"");
}