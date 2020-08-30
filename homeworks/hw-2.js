"use strict";
// 1
const logItems = function (array) {
  let j = 1;
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${j} -`, array[i]);
    j += 1;
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// 2
const calculateEngravingPrice = function (message, pricePerWord) {
  let fnt = message.split(" ");
  let price = fnt.length * pricePerWord;
  return price;
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

// 3
const findLongestWord = function (string) {
  let array = string.split(" ");
  let word;
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > length) {
      word = array[i];
      length = array[i].length;
    }
  }
  return word;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

// 4
const formatString = function (string) {
  if (string.length < 40) return string;
  return string.slice(0, 40) + "...";
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка
console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

// 5
const checkForSpam = function (message) {
  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) return true;

  return false;
};
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// 6
let input = confirm();
const numbers = [];
let total = 0;
while (input) {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Вы ввели не число");
    continue;
  }
  if (input === null) {
    if (numbers.length > 0) {
      for (let num of numbers) {
        total += num;
      }
      console.log(`Общая сумма чисел равна ${total}`);
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
  }
  numbers.push(+input);
}

// 7
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let loginelm of allLogins) {
    if (loginelm === login) return false;
  }
  return true;
};

let msg;
const addLogin = function (allLogins, login) {
  let validLogin = isLoginValid(login);
  let uniqueLogin = isLoginUnique(allLogins, login);
  if (!validLogin) {
    msg = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else {
    if (!uniqueLogin) {
      msg = "Такой логин уже используется!";
    } else {
      allLogins.push(login);
      msg = "Логин успешно добавлен!";
    }
  }
  return msg;
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
