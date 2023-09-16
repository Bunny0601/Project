const account1 = {
  owner: "Gourav Prajapati",
  movements: [5000, 500, -6000, 5200, 2500, -600, 6500],
  interestRate: 1.5,
  pin: 2222,
};
const account2 = {
  owner: "Prateek Sharma",
  movements: [1200, -500, 5100, 1600, 1250, -980],
  interestRate: 0.5,
  pin: 3333,
};
const account3 = {
  owner: "Tarun Gautham",
  movements: [3000, -500, -550, -670, 800, 450],
  interestRate: 1.7,
  pin: 4444,
};
const account4 = {
  owner: "Abhishek Jaiswal",
  movements: [5000, 500, -2200, 1500, -350, 670, 3500],
  interestRate: 1.2,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTansferTo = document.querySelector(".form__input--to");
const inputTansferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan--amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = " ";
  // currentAccount = accounts.find(
  //   (acc) => acc.movements
  // );
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(mov)} $</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};


displayMovements(account1.movements);

const displayUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};

displayUserName(accounts);

console.log(accounts);

const displaySummary = function (movements) {
  // deposit
  const insert = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${insert} $`;

  // Withdrawl

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} $`;

  // Interest

  const interest = movements
    .filter((mov) => mov > 0)
    .filter((mov) => mov > 100)
    .map((mov) => (mov * 1.2) / 100)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest} $`;
};

displaySummary(account1.movements);

// Total Balance
const totalBalance = function (movements) {
  const total = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${total} $`;
};

totalBalance(account1.movements);

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // Display user interface and message

    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //  Clear Inmput Field
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
  }
});
