
// OPERADORES

// Aritméticos: + - * / **
console.log(23 + 1);
console.log(23 - 1);
console.log(23 * 2);
console.log(23 / 2);
console.log(23 ** 2); // Elevado al cuadrado

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 10; // x = x * 10 = 100
x++; // x + 1
x-- // x - 
1
console.log(x);


// Concatenación: +
firstName = "Ezú";
lastName = "Marín"
console.log(firstName + lastName);


// Operadores de comparación: >, <, ==, ===, !=, >=, <=
// Logical AND ... && ...
// Logical OR ... || ...
// Logical NOT !  
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence


// Operadores de igualdad: ==, ===
// == igual
// === igual y mismo tipo
// !== distinto de

// let = prueba1 prompt('¿Cuál es tu número favorito?');


// Operador Condicional u Operador ternario:  ?

let age = 23;
age >= 18 ? console.log('Vino') : console.log('Agua');

// Si la condición que hay antes del ? se cumple
// Entonces imprime el console.log, si no imprime el segundo console.log
// Básicamente es un if else en una línea.

let drink = age >= 18 ? 'vino' : 'agua';
console.log(drink);

// Se puede meter en plantilla:
console.log(`Me gusta beber ${age >= 18 ? 'vino' : 'agua'}`);


let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${tip + bill}`);