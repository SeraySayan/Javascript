'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
    movs.forEach((movement, index) => {
        const displayDate = new Date(acc.movementsDates[index]);
        const day = `${displayDate.getDate()}`.padStart(2, '0');
        const month = `${displayDate.getMonth()}`.padStart(2, '0');
        const year = `${displayDate.getFullYear()}`;
        const type = movement > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
                <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                <div class="movements__date">${day}/${month}/${year}</div>
                <div class="movements__value">${movement.toFixed(2)}€</div>
            </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displaySummary = function (account) {
    const income = account.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income.toFixed(2)}€`;

    const outcome = account.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcome).toFixed(2)}€`;

    const interest = account.movements
        .filter((mov) => mov > 0)
        .map((deposit) => deposit * (account.interestRate / 100))
        .reduce((acc, deposit) => acc + deposit, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

displaySummary(account1);
/////////////////////////////////////////////////

const computeUsername = function (accs) {
    accs.forEach((acc) => {
        acc.userName = acc.owner
            .toLowerCase()
            .split(' ')
            .map((name) => name.at(0))
            .join('');
    });
};
computeUsername(accounts);
const displayBalance = function (account) {
    account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${account.balance}€`;
};
displayBalance(account1);
let currentAccount, timer;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    const userName = inputLoginUsername.value;
    const pin = Number(inputLoginPin.value);
    currentAccount = accounts.find((acc) => acc.userName === userName);
    console.log(currentAccount);
    if (currentAccount?.pin === pin) {
        containerApp.style.opacity = 100;
        inputLoginPin.value = '';
        inputLoginUsername.value = '';
        inputLoginPin.blur();
        if (timer) clearInterval(timer);
        timer = startLogOutTimer();

        displayBalance(currentAccount);
        displayMovements(currentAccount);
        displaySummary(currentAccount);
        const now = new Date();
        const day = `${now.getDate()}`.padStart(2, '0');
        const month = `${now.getMonth()}`.padStart(2, '0');
        const year = `${now.getFullYear()}`;
        labelDate.textContent = `${day}/${month}/${year}`;
    }
});
const updateUI = function (account) {
    displayBalance(account);
    displayMovements(account);
    displaySummary(account);
};
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const transferTo = inputTransferTo.value;
    const transferAmount = Number(inputTransferAmount.value);
    const user = accounts.find((acc) => acc.userName === transferTo);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        user &&
        currentAccount.balance >= transferAmount &&
        currentAccount.balance > 0 &&
        user?.userName !== currentAccount.userName
    ) {
        console.log('Transfer');
        currentAccount.movements.push(-transferAmount);
        user.movements.push(Number(transferAmount));
        currentAccount.movementsDates.push(new Date().toISOString());
        user.movementsDates.push(new Date().toISOString());
        updateUI(currentAccount);
        clearInterval(timer);
        timer = startLogOutTimer();
    }
});
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const loanAmount = Number(inputLoanAmount.value);
    if (currentAccount.movements.some((mov) => mov >= loanAmount * 0.1)) {
        currentAccount.movements.push(loanAmount);
        currentAccount.movementsDates.push(new Date().toISOString());
        updateUI(currentAccount);
        clearInterval(timer);
        timer = startLogOutTimer();
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    const closeUser = inputCloseUsername.value;
    const closePin = Number(inputClosePin.value);

    if (currentAccount.pin == closePin && currentAccount.userName === closeUser)
        accounts.splice(
            accounts.findIndex((acc) => acc.userName === currentAccount.userName),
            1
        );
    containerApp.style.opacity = 0;
});

const calcPassedDays = (day1, day2) => {
    day2 - day1 / (1000 * 60 * 60 * 24);
};
const startLogOutTimer = function () {
    let time = 120;
    const tick = () => {
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(time % 60).padStart(2, '0');
        labelTimer.textContent = `${min}:${sec}`;
        if (time == 0) {
            clearTimeout(timer);
            labelWelcome.textContent = `Login to get started`;
            containerApp.style.opacity = 0;
        }
        time--;
    };
    tick();
    const timer = setInterval(tick, 1000);
};
