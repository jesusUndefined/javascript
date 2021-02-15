
// BUCLE FOR
//
// Tiene 3 partes, el valor de inicio, la condición y la actualización del valor inicial.
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// Bucles para recorrer arrays:

const jonasArray = [
    'Jonas',
    'Gonsales',
    44,
    'teacher',
    ['Mike', 'Steven', 'Jordan']
];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i])
};


// Leer un array y meter los tipos de los valores en otro array

let types = [];
for (let i = 0; i < jonasArray.length; i++) {
    //   types[i] = typeof jonasArray[i];

    // Otra manera de hacerlo:
    types.push(typeof jonasArray[i]);
};

console.log(types);


let years = [1991, 2008, 1955, 2001];
let ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);



// CONTINUE Y BREAK

// Continue:
// Usando continue para que todo lo que sea diferente string continúe y lo omita
console.log('ONLY STRINGS');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


// break: Termina el bucle

console.log('BREAK WITH NUMBER');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

// Bucles para recorrer arrays desde el final hacia el principio:

const jonasArray2 = [
    'Jonas',
    'Gonsales',
    44,
    'teacher',
    ['Mike', 'Steven', 'Jordan']
];

for (let i = jonasArray2.length - 1; i >= 0; i--) {
    console.log(i, jonasArray2[i])
};


// Bucles dentro de bucles

for (let ejercicio = 1; ejercicio < 4; ejercicio++) {
    console.log(`-------- Empieza el ejercicio ${ejercicio}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Ejercicio ${ejercicio}: Levanta pesas, repetición ${rep}`);
    }
}