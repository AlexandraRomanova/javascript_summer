"use strict";
// Функция - это подпрограмма, независимая частью кода,
// предназначенная для выполнения конкретной задачи.
// Функции это инструмент для структурирования больших программ,
// уменьшения повторений и изолирования кода.
// Имя функции это действие, глагол начинающийся с маленькой буквы,
// отвечающий на вопрос 'Что сделать?'. Например: findSmallesNumber, fetchUserInfo, validateInput.
// const add = function (a, b, c) {
//   return a + b + c;
// };
// В круглых скобках идут параметры — перечисление данных которые функция будет получать из вне.
// Далее идет тело функции, заключенное в фигурные скобки {},
// содержащее инструкции которые необходимо выполнить при вызове функции.
// Оператор return определяет возвращаемое значение.
// Когда интерпретатор доходит до return, он сразу же выходит из функции
// Оператор return без выражения возвращает значение undefined.
// При отсутствии return в теле функции, она все равно вернет значение undefined

// a, b, c это параметры
const add = function (a, b, c) {
  return a + b + c;
};

// 1, 2, 3 это аргументы
const result = add(1, 2, 3);
console.log(result); // 6

// 5, 10, 15 это аргументы
console.log(add(5, 10, 15)); // 30

// Порядок выполения кода
const fnA = function () {
  console.log("Начала выполняться [fnA]");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
};

const fnB = function () {
  console.log("Выполняется [fnB]");
};

console.log("Начал выполнение [main]");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA]");
/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

//  Параметры по умолчанию
const count = function (countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
};

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
count(); // countFrom = 0, countTo = 10, step = 1

// Псевдомассив arguments
const sum = function () {
  let total = 0;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

console.log(sum(1, 2, 3)); //  6
console.log(sum(1, 2, 3, 4)); //  10
console.log(sum(1, 2, 3, 4, 5)); //  15

// Используя метод Array.from(), который создаст массив из итерируемого объекта.
const fn = function () {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
};

//
// Используя операцию ... (rest), она позволяет собрать произвольное количество элементов,
// в нашем случае аргументов, в массив и сохранить его в переменную.
// Собираем все аргументы используя операцию rest прямо в подписи функции.
// const fn = function (...args) {
//   // В переменной args будет полноценный массив
// };

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля.");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету.");
//   } else {
//     console.log("Операция снятия средств проведена.");
//   }
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

//
// Паттерн guard clause - это способ использовать возможность
// досрочного возврата из функции с помощью оператора return,
// чтобы сделать вложенные условные выражения более одномерными.
const withdraw = function (amount, balance) {
  /*
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля.");
    return;
  }

  /*
   * Если условие первого if не выполнилось, его тело пропускается
   * и интерпретатор доходит до этого if.
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
  if (amount > balance) {
    console.log("Недостаточно средств на счету.");
    return;
  }

  /*
   * Если ни один из предыдущих if не выполнился,
   * интерпретатор доходит до этого кода и выполняет его.
   */
  console.log("Операция снятия средств проведена.");
};

withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
withdraw(500, 300); // Недостаточно средств на счету.
withdraw(100, 300); // Операция снятия средств проведена.

// функции создают собственную локальную область видимости.
// Переменные, созданные внутри функции, включая параметры,
// локальны внутри этой функции и не доступны коду из вне.
const value = 50;

const added = function (num) {
  const value = 10;
  const innerValue = 5;

  return num + value + innerValue;
};

// value объявлен глобально и поэтому доступен
console.log(value); // 50

console.log(added(20)); // 35

// Ошибка, переменная innerValue не объявлена в этой области
// видимости, она доступна только внутри фукции add
// console.log(innerValue);

//
// Стрелочные функции имеют сокращенный, более лаконичный синтаксис
// Обычное функциональное выражение
// const add = function(a, b, c) {
//   return a + b + c;
// };

// // Тоже самое записно как стрелочная функция
// const add = (a, b, c) => a + b + c;

// Если параметров несколько, то они перечисляются через запятую в круглых скобках.
const ftn = (a, b, c) => {
  return a + b + c;
};

// Если параметр один, то он может быть без круглых скобок.
const fpn = (x) => {
  return x * 2;
};

// Если параметров нет, то обязательно должны быть пустые круглые скобки.
const ffn = () => {
  console.log("Hello! :]");
};

/*
 * Если фигурные скобки после => есть, значит необходимо явно указать то,
 * что должна вернуть функция - поставить return и выражение.
 * Это называется явный возврат (explicit return)
 */
// const fn = (a, b, c) => {
//   return a + b + c;
// };

/*
 * Если фигурных скобок нет, то возвращается результат выражения стоящего после =>
 * Это называется неявный возврат (implicit return)
 * В примере ниже вернется результат выражения сложения a, b и c
 */
// const fn = (a, b, c) => a + b + c;

// У стрелочных функций нет локальной переменной arguments,
// содержащей все аргументы. Если необходимо собрать
// все аргументы в массив, используется операция rest.
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]
