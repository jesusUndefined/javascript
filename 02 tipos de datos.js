
// Javascript no necesita definir los tipos de datos en las variables.
// Existen datos primitivos u objetos. Todo es primitivo si no es objeto.
// Valores primitivos:
    let age = 30;

// Valores objetos:
    let me = {
        name: 'Jesús'
    }

// Existen 7 tipos de datos primitivos: Números, Strings, Boolean, undefined, null, symbol, big int.
// Números: Siempre llamados números de punto flotante.
// Eso significa que siempre tienen decimales, se vean o no.
// No hay distinción entre integer o float, como en otros lenguajes. Sólo son números. 
    let age = 39;


// Strings: cadenas de texto. Se escribe siempre entre comillas, no importa de qué tipo de comillas.
    let nombre = "Ezú";
    let nombre2 = 'Ezú';
    let nombre3 = `Ezú`;


// Boolean: Tiene 2 valores lógicos: True or false.
    let esSoltero = true;


// Undefined: Valor que toma una variable que aún no está definida.
    let children;


// Null: Valor vacío pero se usa en diferentes circunstancias.


// Symbol: Valor único que no puede ser cambiado. Se introdujo en ES2015


// Big INT: Números enteros demasiado grande.


// typeof: Para sacar el tipo de dato
    console.log(typeof children);
    console.log(typeof esSoltero);
    console.log(typeof nombre2);
    console.log(typeof true);
// Responderá por consola qué tipo de dato es cada uno.