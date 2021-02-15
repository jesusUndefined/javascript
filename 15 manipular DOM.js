'use strict';

// Para seleccionar el message de HTML:
// Si es un ID sería #message pero al ser CLASS se usa .message
// Devuelve por consola en el navegador: <p class="message">Start guessing...</p>
// Se obtiene el mensaje que hay dentro del párrafo, añadiendo .textContent 
console.log(document.querySelector('.message').textContent);

// Para cambiar el contenido de .message:
document.querySelector('.message').textContent = 'Correct number';
// Captura de nuevo el valor y lo muestra por consola (consola web)
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// obtener datos de inputs:
document.querySelector('.guess');
// Manipular datos:
// Se usará .value en vez de .textContent
document.querySelector('.guess').value = 12;


// Manipular click events:
// Se usará addEventListener()  (lleva paréntesis porque es un método.)
// Se le pasa como primer parámetro el tipo de evento, "click" en este caso.
// Como segundo parámetro, hay que decirle qué tiene que hacer. 
// Básicamente, especificar una reacción al evento de click.
// En este caso, se define una función que muestra por consola el .value del input .guess
// Y lo mete en una variable
// El resultado siempre será un string, por eso se usa Number(), para pasarlo a número
// Se introduce un if para que cuando el input .guess esté vacío y se presione el botón check
// Diga que no tiene número.
// Al devolver un valor numérico y el if comprueba en booleano, devuelve 0 y al ser falso, funcionaría el if
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('message').textContent = 'No number!';
    }
})


// Siguiente vídeo, usar el mismo ejercicio y modificarlo

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('message').textContent = 'No number!';
    }
})