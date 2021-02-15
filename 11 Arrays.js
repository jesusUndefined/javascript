

// ARRAYS
// Pueden contener cualquier valor, no importa si son strings o números

let friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Otra forma de crear arrays, usando la función Array() con la palabra reservada new.
let years = new Array(1991, 1998, 1987, 2900);
console.log(years);

//sacar la primera posición del array
console.log(friends[0]);

// Consultar longitud del array: 3 elementos en este caso.
console.log(friends.length);

// Obtener el último elemento del array.
// Se pone friends porque es el array.
// Corchete para recuperar elemento dentro del array
// friends.length para la longitud del array
// -1 para la última posición del length anterior, que daba 3 y la última posición del array es el 2 = Peter.
console.log(friends[friends.length - 1]);


// Editar el array:
// Se selecciona el número que se desea cambiar y se iguala al nuevo valor que contendrá.
// Si se declara el array con const en vez de let también se podrá editar su contenido.

friends[2] = 'Jay';
console.log(friends[2]);

// No se podría reemplazar todo el array:
// Ésto no estaría permitido.
friends = ['Bob', 'Alice'];


// Distintos tipos de datos en el mismo array:
let jonas = ['Jonas', 'Callahan', 2020 - 1987];

// Se pueden meter variables en el array e incluso otro array.
let firstName = 'Jonas';
let jonas2 = [firstName, 'Callahan', 2020 - 1987, friends];
console.log(jonas2);



// EJERCICIO
// Averiguar años con array
let calcAge = function (birthYear) {
    return 2020 - birthYear;
}

let years2 = [1990, 1992, 2001, 1987];

//et age1 = calcAge(years[0]);
//console.log(age1);

// Se permiten expresiones, así que:
let ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);


// Operaciones con los arrays:

// El método PUSH mete elementos nuevos al final de cada array. En la última posición.

let friends2 = ['Ezú', 'Bea', 'Nicole'];
friends2.push('Alicia');
console.log(friends2);

// Usar push() devuelve un valor, que es el número de posiciones que tiene ahora el array.
// Si se quiere calcular ese valor, se mete en una variable el push:
let capturaValor = friends2.push('Alicia');


// El método unshift() mete elementos nuevos al principio del array. Primera posición.
friends2.unshift('Marya');
console.log(friends2);


// El método pop() elimina el último elemento del array.
friends2.pop();
console.log(friends2)

// Devuelve el contenido eliminado. Para capturarlo, meterlo en variable.
let eliminado = friends2.pop();
console.log(eliminado);


// El método shift() elimina el primer  elemento del array.
friends2.shift();
console.log(friends2);

// También devuelve el contenido eliminado. Para capturarlo, meterlo en variable.
let eliminado2 = friends2.shift();
console.log(eliminado2);



// El método indexOf() devuelve la posición en el array del argumento que se le pase.
// Para saber en qué posición está BEA
console.log(friends2.indexOf('Bea'));
let dondeEstaBea = friends2.indexOf('Bea');
console.log(dondeEstaBea);


// El método includes() devuelve true o false cuando busca en el array el valor, para indicar si se encuentra o no.
console.log(friends2.includes('Bea'));

// También se puede operar el includes() con if.

if (friends2.includes('Bea')) {
    console.log('Está en el array!');
} else {
    console.log('No, no está aquí, mira en otro sitio.');
}


// CODING CHALLENGE

let tip = 0;
let bill = 125;

function calcTip(bill) {

    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip
}

let bills = [125, 555, 44];
let tip1 = calcTip(bill);
let tip2 = calcTip(bills[1]);
let tip3 = calcTip(bills[2]);
let tips = [tip1, tip2, tip3];

console.log(tips);

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);