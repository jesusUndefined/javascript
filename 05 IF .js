
// if

const age = 14;
const isOldEnough = age >= 18; // Esto devolverá true en este caso


// Toma de decisión: Evaluación de la condición.
// el IF comprueba la condición y si est rue, ejecuta el console.log

if (isOldEnough) {
    console.log('Sarah can start driving license👏');
}

if (age >= 18) {
    console.log('Sarah can start driving license👏');

} else {

    const yearsLeft = 18 - age;
    console.log(`Sarah no puede conducir hasta dentro de ${yearsLeft} años.`);
}


let anoNacimiento = 1992;

if (anoNacimiento >= 2000) {
    console.log('Nació en el siglo XXI.')
} else {
    console.log('Nació en el siglo XX.');
}