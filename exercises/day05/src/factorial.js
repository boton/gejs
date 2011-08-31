/*
http://www.meetup.com/madridjs/pages/Reunion5.2011.09.01/
1- Crear una función recursiva que calcule el factorial de un número dado.
*/
function factorial(n) {
  return n == 1
    ? 1
    : n * factorial(--n);
}

function factorialLoop(num) {
  var total = 1;
  for (;num > 1; --num) {
    total = total * num;
  }
  return total;
}