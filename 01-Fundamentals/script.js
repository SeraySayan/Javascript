/*let heightMark = 169;
let massMark = 78;
let heigthJohn = 195;
let massJohn = 92;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heigthJohn ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}!)`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}!)`);
}
*/

/********Part 2 */
/*
const averageScore = (A, B, C) => (A + B + C) / 3;

const avgDolphins = averageScore(50, 50, 70);
const avgKoalas = averageScore(50, 50, 50);

const win = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    else return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
};

console.log(win(avgDolphins, avgKoalas));
*/

/*********Part 3 */
/*const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    },
};
const john = {
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,
};*/

/*****Part4 */
const bills = [22, 295176, 44037, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip() {
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] > 100) {
            tips.push(bills[i] * 0.2);
            totals.push(bills[i] + tips[i]);
        } else {
            tips.push(bills[i] * 0.3);
            totals.push(bills[i] + tips[i]);
        }
    }
}

console.log(bills, tips, totals);
let sum = 0;
const arr = [22, 295176, 44037, 105, 10, 1100, 86, 52];

const constAverage = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
console.log(`Avg: ${constAverage(arr)}`);
