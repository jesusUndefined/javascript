
// OBJETOS

// Los arrays se podían construir también en varias líneas para ver los datos mejor.
// Pero no permiten referenciar los datos más que por la posición (0,1,2...)
let jonasArray = [
    'Jonas',
    'Gonzales',
    2020 - 1987,
    'teacher',
    ['Michael', 'Steven', 'Peter'] // Array dentro de array
];

// Los objetos permiten referenciar de forma clave-valor.
// Para construir un objeto:

let jonas = {
    firstName: 'Jonas',
    lastName: 'Gonzales',
    age: 2020 - 1987,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']   // Array dentro de objeto
};

// Para obtener los datos de un objeto:
// Usando el punto:
console.log(jonas.lastName);

// Usando corchetes
// Aquí también podría ir una expresión.
console.log(['lastName']);

// Ejemplo con expresión.
// Al concatenar first con nameKey, se sustituye por el valor de namekey quedando 'firstName'
// Siendo éste una clave del objeto, por lo que arrojará un valor.
let nameKey = 'Name';
console.log(jonas['first' + nameKey]);

// Agregar datos al objeto:
jonas.location = 'Portugal';
jonas['Twitter'] = '@loquesea';

// CHALLENGE
// Jonas has 3 friends and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);



// AGREGAR FUNCIONES A LOS OBJETOS

let jonas2 = {
    firstName: 'Jonas',
    lastName: 'Gonzales',
    birthYear: 1987,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },
    //Challenge: getSummary()
    getSummary: function () {
        return `${this.firstName} is a ${this.age} years old ${this.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }
};

// Para acceder a la función dentro del objeto:
console.log(jonas2.calcAge());
console.log(jonas2['calcAge']());


// CHALLENGE
console.log(jonas2.getSummary());

// CODING CHALLENGE

let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

let winner = {
    fullName: '',
    bmi: '',

    calcWinner: function () {
        let winner = mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName;
        this.fullName = winner;
        return winner;
    },

    calcWinnerBMI: function () {
        let bmiWinner = mark.calcBMI() > john.calcBMI() ? mark.bmi : john.bmi;
        this.bmi = bmiWinner;
        return bmiWinner;
    }
};

console.log(`${winner.calcWinner()}'s BMI (${winner.calcWinnerBMI()}) is higher than ${winner.fullName == mark.fullName ? john.fullName : mark.fullName} (${winner.fullName == mark.fullName ? john.calcBMI() : mark.calcBMI()})`);
