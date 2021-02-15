
// CONVERSIÓN DE TIPOS DE DATOS

// Nos entra el dato en formato string. Así no se puede operar, pues al usar +, concatenaría.

let inputYear = '1991';
console.log(inputYear + 10);
// El resultado sería 199110
// Para poder operar hay que convertirlo a tipo número.

console.log(Number(inputYear) + 10);
// El resultado ya sería 2001.

// Si se intenta convertir algo que no es un número, arrojará el error NaN.
// Ejemplo:
console.log(Number('Jonas'));


// Para convertir a String:
console.log(String(22));