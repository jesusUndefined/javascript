

// WHILE LOOP

// Sólo tiene una condición. Se ejecutará mientras sea verdadera.
// Se declara la variable fuera y se incrementa o decrementa al final del bloque que se ejecute con la condición.

let rep = 1;
while (rep <= 10) {
    // console.log(`levantando jierros, repetición ${rep}`);
    rep++;
}

// Math.random() * 6 lanza un número aleatorio.
// La función crea un número aleatorio entre 0 y 1 y se multiplica por 6.
// En este caso creamos un dado que lanza un número del 1 al 6
// Saca resultados de forma decimal y hay que deshacerse de la parte decimal.
// Se usará Math.trunc() para obtener número de cero a 5 y luego +1
// Para que así dé un número de 1 a 6.
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    // console.log(`El dado sacó un: ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`El dado sacó un ${dice} por fin.`)
    // let dado = []; 
    // dado.push(dice);
    // console.log(dado);
}


// CODING CHALLENGE


function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(bills);
console.log(tips);
console.log(totals)

function calcAverage(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
        //suma += suma + arr[i]
    }
    return suma / arr.length;
}

console.log(calcAverage(totals));
