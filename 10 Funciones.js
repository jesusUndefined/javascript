
// FUNCIONES

function nombreFuncion() {
    console.log('Mi nombre es Ezú');
}

nombreFuncion();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);

// El resultado por consola sólo será 5, 0. No imprimirá el return.
// Para que imprima el return, la llamada o invocación tiene que estar en una variable.

let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);



// Las funciones también pueden hacerse de la siguiente manera:
// Se mete directamente la función en la variable sin dar nombre a la función.
// Así se podría invocar a la función antes de definirla.

let calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

let age2 = calcAge2(1991);
console.log(age2);


// FUNCIÓN FLECHA
// Se plantea la función en la primera línea, asignándole una variable
let calcAge3 = birthYear => 2037 - birthYear;

// Se mete en una variable para poder recoger el valor (return) de la función
let age3 = calcAge3(1991);

//Se invoca en el console.log
console.log(age3);

// Con más parámetros se necesitan llaves.
let yearsUntilRetirement = birthYear => {
    let age = 2037 - birthYear;
    let retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1992));

// Así se haría con múltiples argumentos.
let yearsUntilRetirement2 = (birthYear, firstName) => {
    let age = 2037 - birthYear;
    let retirement = 65 - age;
    return `${retirement} años para la jubilación de ${firstName}`
}
console.log(yearsUntilRetirement2(1992, 'Ezú'));


// Invocar funciones dentro de otras funciones.

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    let applePieces = cutFruitPieces(apples);
    let orangePieces = cutFruitPieces(oranges);

    let juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3))


// Coding challenge

let calcAverage = (points1, points2, points3) => (points1 + points2 + points3) / 3;

let avgKoalas = calcAverage(65, 54, 49);
let avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins, avgKoalas);


function checkWinner(avgDolphins, avgKoalas) {
    //calcAverage(avgKoalas);
    //calcAverage(avgDolphins);
    if (avgDolphins > avgKoalas * 2) {
        console.log(`Los Dolphins ganan ${avgDolphins} VS ${avgKoalas}.`);

    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`Los Koalas ganan ${avgKoalas} VS ${avgDolphins}.`);
    } else {
        console.log(`Nadie gana.`);
    }
}

checkWinner(avgKoalas, avgDolphins);