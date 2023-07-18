'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [team1, team2] = [...game.players];

const [goalKeeper1, ...playerTeam1] = [...team1];
console.log(goalKeeper1, playerTeam1);

const [goalKeeper2, ...playerTeam2] = [...team2];
console.log(goalKeeper2, playerTeam2);

const allPlayers = [...playerTeam1, ...playerTeam2];
console.log(allPlayers);

for (let [no, player] of game.scored.entries()) console.log(`Goal ${no + 1}: ${player}  `);
let sum = 0;
console.log(game.odds);
for (let item of Object.values(game.odds)) {
    console.log(item);
    sum += item;
}
const averageOdds = sum / Object.keys(game.odds).length;
console.log(averageOdds);

for (let [team, odd] of Object.entries(game.odds)) {
    console.log(team, odd);
}

const gameEvent = new Map([
    [17, 'Goal'],
    [36, 'Subs'],
    [47, 'Goal'],
    [61, 'Subs'],
    [64, 'YellowCard'],
]);

for (const [key, value] of gameEvent) console.log(`A football game has ${key} minutes for ${value} `);

const events = [...new Set(gameEvent.values())];
console.log(events);

gameEvent.delete(64);
console.log(gameEvent);

const updatedVersion = function (inputText) {
    let textArray = [];

    inputText = inputText.split('_');
    for (const textIn of inputText) textArray.push(textIn.toLowerCase()[0].toUpperCase() + textIn.slice(1));
    const upArray = textArray.join('');
    console.log(upArray[0].toLowerCase() + upArray.slice(1));
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button').addEventListener('click', function () {
    const textAreaInput = document.querySelector('textarea').value;
    updatedVersion(textAreaInput);
});

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const pool = {
    question: 'What is your favourite programming language',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
        prompt(`${this.question} \n ${this.options.map((elem) => '\n' + elem)}`);
    },
};

pool.registerNewAnswer();

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        console.dir();
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
