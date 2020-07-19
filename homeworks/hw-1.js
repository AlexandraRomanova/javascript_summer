"use strict";
// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// const total = 100;
// let ordered = 50;
// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }
// ordered = 20;
// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }
// ordered = 80;
// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }
// ordered = 130;
// if (ordered > total) {
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let enterData = prompt("Введите ,пожалуйста, пароль");
console.log(enterData);
if (ADMIN_PASSWORD === enterData) {
  message = "Добро пожаловать!";
} else if (enterData === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);

// let credits = 23580;
// const pricePerDroid = 3000;
// let countDroids = prompt(
//   "Введите количество дроидов, которое вы хотите купить?"
// );
// if (countDroids === null) {
//   console.log("Отменено пользователем!");
// } else {
//   countDroids = +countDroids;
//   let totalPrice = pricePerDroid * countDroids;
//   if (totalPrice > credits) {
//     console.log("Недостаточно средств на счету!");
//   } else {
//     credits -= totalPrice;
//     console.log(
//       `Вы купили ${countDroids} дроидов, на счету осталось ${credits} кредитов.`
//     );
//   }
// }

// let country = prompt("Введите страну").toLowerCase();
// switch (country) {
//   case "китай":
//     console.log(`Доставка в ${country} будет стоить 100 кредитов`);
//     break;
//   case "чили":
//     console.log(`Доставка в ${country} будет стоить 250 кредитов`);
//     break;
//   case "австралия":
//     console.log(`Доставка в ${country} будет стоить 170 кредитов`);
//     break;
//   case "индия":
//     console.log(`Доставка в ${country} будет стоить 80 кредитов`);
//     break;
//   case "ямайка":
//     console.log(`Доставка в ${country} будет стоить 120 кредитов`);
//     break;
//   default:
//     console.log("В вашей стране доставка не доступна");
//     break;
// }

let input = confirm();
let total = 0;
while (input) {
  input = +prompt();
  total += input;
}
alert(`Общая сумма чисел равна ${total}`);
