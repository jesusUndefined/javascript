//
//
// ALTERNATIVE CODING CHALLENGE
//
//

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
    fullname: '',
    bmi: '',
    calcWinner: function () {
        winner.fullName = mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName;
        winner.bmi = mark.calcBMI() > john.calcBMI() ? mark.bmi : john.bmi;
        return {
            winnername: winner.fullName,
            winnerbmi: winner.bmi,
            loosername: `${winner.fullName == mark.fullName ? john.fullName : mark.fullName}`,
            looserbmi: `${winner.fullName == mark.fullName ? john.calcBMI() : mark.calcBMI()}`
        }
    }
};
console.log(`${winner.calcWinner().winnername}'s BMI (${winner.calcWinner().winnerbmi}) is higher than ${winner.calcWinner().loosername} (${winner.calcWinner().looserbmi})`);

console.log(
    winner.calcWinner().winnername,
    winner.calcWinner().winnerbmi,
    winner.calcWinner().loosername,
    winner.calcWinner().looserbmi);



// CODING CHALLENGE SECTION 5

let test1 = [17, 21, 23];
let test2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = '';
    let dots = ' ... '
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i] + `ºC in ${i + 1} days ...`;
    }
    return dots + str;
}

console.log(printForecast(test1));