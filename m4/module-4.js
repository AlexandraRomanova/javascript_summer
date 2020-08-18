"use strict";
// Функция высшего порядка — функция, принимающая в качестве
//  параметров другие функции или возвращающая функцию как результат.
// Функция обратного вызова (callback) — это функция, которая
// передается другой функции в качестве аргумента и та, в свою очередь,
// вызывает переданную функцию.
const printMessage = function (message) {
  console.log(message);
};
const higherOrderFunction = function (callback) {
  const string = "HOCs are awesome";
  callback(string);
};
higherOrderFunction(printMessage);
// Функции обратного вызова применяются для обработки действий пользователя
// на странице, при вызове функций к определенному времени,
// при обработке запросов на сервер и др.

//
//
//Абстракция — скрытие деталей реализации. Позволяет думать о задачах
// на более высоком (абстрактном) уровне. Функции это хороший способ построения абстракций.
const repeatLog = function (n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
};
repeatLog(5);

///
const printValue = function (value) {
  console.log(value);
};
const prettyPrint = function (value) {
  console.log("Logging value: ", value);
};
const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};
// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2
// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

///
const repeats = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};
const labels = [];
repeats(5, (value) => {
  labels.push(`Label ${value + 1}`);
});
console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

//
//
// Фильтрация массива
// Напишем функцию фильтрации элементов массива
// 1. Первый параметр array это массив, будем перебирать
// его используя цикл for...of.
// const filter = function (array) {
//   for (const element of array) {
//   }
// };
// 2. Второй параметр test это callback-функция, которую будет
// необходимо выполнить для каждого элемента массива.
// const filter = function (array, test) {
//   for (const element of array) {
//     test(element);
//   }
// };
// 3. Функция filter создает новый массив, в который будет добавляться
// результат выполнения callback-функции test над каждым элементом
// массива array. Результатом работы функции будет массив отфильтрованных элементов.
// const filter = function (array, test) {
//   const filteredElements = [];
//   for (const element of array) {
//     test(element);
//   }
//   return filteredElements;
// };
// 4. Если элемент массива проходит тест, то есть callback-функия
// возвращает true, он добавлятся в отфильтрованный массив.
// 5. Результат
const filter = function (array, test) {
  const filteredElements = [];
  for (const element of array) {
    const passed = test(element);
    if (passed) {
      filteredElements.push(element);
    }
  }
  return filteredElements;
};
const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];
const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
console.log(freshFruits); // массив с объектами apples и bananas
const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
console.log(fruitsWithQuantity); // массив с объектами apples и grapes

//
//
// Контекст выполнения и стек вызовов
// Стек — структура данных, которая работает по принципу
// последним пришёл — первым вышел (LIFO - Last In, First Out).
//  Последнее, что вы добавили в стек, будет удалено из него первым,
// то есть можно добавить или удалить элементы только из верхушки стека.
// Контекст выполнения (execution context) - внутренняя конструкция языка
// для отслеживания выполнения функции, содержит метаинформацию о ее вызове.
// Глобальный контекст выполнения (global execution context) - это контекст
// есть по умолчанию, сам файл скрипта это функция которая запускается на выполнение.
// Контекст выполнения функции (functional execution context) - создается
// каждый раз при вызове функции.
// Стек вызовов (Execution Context stack, call stack) - внутреняя констуркция движка,
// которая содержит все контексты выполнения.
// Stack frame (кадр стека, запись стека) - структура которая добавляется на стек
// при вызове функции. Хранит некоторую метаинформацию: имя функции,
// аргументы которые были переданы во время вызова и номер строки в которой произошел вызов.
// После того как произойдет выход из функции (return), ее контекст выполнения
// снимается со стека. Далее выполняться функция, контекст которой лежит следующим.
const bar = function () {
  console.log("bar");
};
const baz = function () {
  console.log("baz");
};
const foo = function () {
  console.log("foo");
  bar();
  baz();
};
foo(); // Вначале выполняется функция foo(), после вызывается bar(), а потом baz()

//
//
// Лексическое окружение
// Лексическое окружение (lexical environment) — внутренняя, закрытая
// от прямого доступа структура движка для хранения в памяти таблицы (Environment Record)
// идентификаторов переменных и их значений, а так же значение this ,
// и механизм для извлечения этих значений при обращении по имени,
// а так же ссылки на родительское лексическое окружение (Parent).
// Eсли при вызове функции внутри нее объявляется еще одна функция,
// то в ее скрытое свойство (inernal property или internal slot) [[Environment]] записывается ссылка на это окружение.
// Лексическое окружение можно представить как словарь - набор пар ключ:значение.
// Зная ключ можно получить значение.Точно так же, как и при работе
// с обычным бумажным словарем, где ключ — это слово, а значение — определение слова.
// Все переменные внутри функции, после объявления, записываются в словарь.
// В словаре хранится ссылка на внешнее лексическое окружение, то в котором функция была объявлена.
// Для глобального окружения, ссылки на внешнее окружение нет, там null.

//
//
// Замыкания
// Замыкание (closure) — это связь между функцией и ее цепочкой областей видимости.
// замыкание это термин который описывает способность функции запоминать
// лексическое окружение в котором она была объявлена, и продолжать получать
// доступ к переменным из этого лексического окружения вне зависимости от того где она была вызвана.
// Рассмотрим пример функции-счетчика с недоступной из вне переменной.
const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;
  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };
  return {
    increment,
  };
};
const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2
const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3

//
/// Напишем функцию приготовления поваром некого блюда.
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };
// makeDish("Mango", "apple pie"); // Mango is cooking apple pie
// makeDish("Mango", "fish"); // Mango is cooking fish
// makeDish("Mango", "beef stew"); // Mango is cooking beef stew
// makeDish("Poly", "muffins"); // Poly is cooking muffins
// makeDish("Poly", "pork chops"); // Poly is cooking pork chops
// makeDish("Poly", "roast beef"); // Poly is cooking roast beef
// Проблема такого подхода в том, что при каждом вызове функции приходится
// передавать имя повара который будет готовить блюдо. Решить эту проблему
// можно используя замыкание. Пишем функцию создания шефа с именем,
// которая возвращает другую функцию для приготовления блюда.
const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};
const mango = makeShef("Mango");
mango("apple pie"); // Mango is cooking apple pie
mango("beef stew"); // Mango is cooking beef stew
const poly = makeShef("Poly");
poly("pancakes"); // Poly is cooking pancakes
poly("eggs and bacon"); // Poly is cooking eggs and bacon

//
//
// Контекст исполнения (this)
// Во время исполнения функции, в переменную this записывается ссылка
// на объект, в контексте которого она вызывается.
// Необходимо усвоить всего одно правило для определения this.
// Значение контекста внутри функции определятся не в момент ее создания,
// а в момент вызова. То есть значение this определяется тем,
// как вызывается функция, а не где она была объявлена.
// В глобальной области видимости this будет undefined.
// Если функция была вызвана как метод объекта, то контекст будет
// ссылаться на объект, частью которого является метод.
// Сначала создадим функцию в глобальной области видимости, и вызовем ее.
// После чего присвоим ее в свойство объекта и вызовем как метод этого объекта.

function showThis() {
  console.log("this in showThis: ", this);
}
// Вызываем в глобальном контексте
showThis();
// this in showThis: undefined

const user = { name: "Mango" };
/*
 * Записываем ссылку на функцию в свойство объекта
 * Обратите внимание, что это не вызов - нет ()
 */
user.showContext = showThis;
/*
 * Вызываем функцию в контексте объекта
 * this будет указывать на текущий объект, в контексте
 * которого осуществляется вызов, а не на глобальный объект.
 */
user.showContext();
// this in showThis: {name: "Mango", showContext: ƒ}

// Когда мы передаем метод, который использует this, в качестве параметра,
// который будет использоваться как функция обратного вызова, будет проблема.
// Решение этой проблемы рассматривается в следующей секции.
const hotel = {
  name: "Resort Hotel",
  showThis() {
    console.log(this);
  },
};
const fn = function (callback) {
  /*
   * Во время вызова fn, callback будет ссылкой
   * на функцию showThis объекта hotel.
   * Ее вызов происходит в глобальном контексте,
   * про hotel она ничего не знает.
   * Соответственно this не будет ссылаться на hotel
   */
  callback();
};
// Передается ссылка на функцию а нее ее вызов
fn(hotel.showThis); // window или undefined

// Стрелочные функции не имеют своего this. В отличии от обычных функций,
// изменить значение this внутри стрелки после ее объявления нельзя.
// Контекст внутри стрелки определяется местом ее объявления, а не вызова,
// и ссылается на контекст родительской функции.
// Если стрелка запомнила глобальный контекст, то this в ней будет содержать
// ссылку на window вне зависимости выполняется ли скрипт в строгом режиме или нет.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis(); // this in showThis: window
// const user = { name: "Mango" };
// user.showContext = showThis;
// user.showContext(); // this in showThis: window

// Стрелочные функции не имеют своего this. В отличии от обычных функций,
// изменить значение this внутри стрелки после ее объявления нельзя.
// Контекст внутри стрелки определяется местом ее объявления, а не вызова,
// и ссылается на контекст родительской функции.
// Ограничивая стрелочные функции постоянным контекстом, JavaScript-движки
// могут лучше их оптимизировать, в отличие от обычных функций,
// значение this которых может быть изменено.
// Пример не практичный, но отлично показывает как работает контекст для стрелок.
const hostel = {
  name: "Resort hotel",
  showThis() {
    const fn = () => {
      /*
       * Стрелки запоминают контекст во время объявления,
       * из родительской области видимости
       */
      console.log("this in fn: ", this);
    };
    fn();
    console.log("this in showThis: ", this);
  },
};
hostel.showThis();
// this in fn: {name: 'Resort hotel', showThis: ƒ}
// this in showThis: {name: 'Resort hotel',showThis: ƒ}

//
//
// Методы функций call, apply, bind
// const greet = function() {
//   return `Wellcome to ${this.name} hotel!`;
// };
// const hotel = { name: 'Resort Hotel' };
// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// call и аргументы
// fn.call(obj, arg1, arg2, ...)
// Запомнить правило использования call довольно легко: метод call
// вызовет функцию fn передав ее this ссылку на объект obj, а также
// аргументы arg1, arg2 и т. д.
const greet = function (guest, stars) {
  return `${guest}, welcome to ${stars}-star ${this.name}!`;
};
const hotel1 = { name: "Resort Hotel" };
const motel = { name: "Sunlight Motel" };
console.log(greet.call(hotel1, "Mango", 5));
// "Mango, wellcome to 5-star Resort Hotel!"
console.log(greet.call(motel, "Poly", 4));
// "Poly, wellcome to 4-star Sunlight Motel!"

// apply и аргументы
// fn.apply(obj, [arg1, arg2, ...])
// Метод apply полный аналог метода call за исключением того,
// что синтаксис вызова аргументов требует не перечисление, а массив.
// const greet = function(guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };
// const hotel = { name: 'Resort Hotel' };
// const motel = { name: 'Sunlight Motel' };
// console.log(greet.apply(hotel, ['Mango', 5]));
// // "Mango, wellcome to 5-star Resort Hotel!"
// console.log(greet.apply(motel, ['Poly', 4]));
// // "Poly, wellcome to 4-star Sunlight Motel!"

// bind
// Но в случае функции обратного вызова, когда необходимо не вызвать функцию
// на месте, а передать ссылку на эту функцию, причем с привязанным контекстом,
// call и apply не подходят. Метод bind позволяет решить эту задачу.
// const boundFn = fn.bind(obj, arg1, arg2, ...)
// Метод bind создает копию функции fn с привязанным контекстом obj
// и аргументами arg1, arg2 и так дале, после чего возвращает ее как
// результат своей работы. В результате мы получаем копию функции
// с привязанным контекстом, которую можно передать куда угодно и вызвать когда угодно.
// const greet = function(guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };
// const hotel = { name: 'Resort Hotel' };
// const hotelGreeter = greet.bind(hotel, 'Mango');
// hotelGreeter(); // "Mango, wellcome to Resort Hotel!"
// Чаще всего метод bind используется для привязки контекста при
// передаче методов объекта как функций обратного вызова.
const hotel_1 = {
  name: "Resort Hotel",
  showThis() {
    console.log(this);
  },
};
const fnt = function (callback) {
  callback();
};
// Передаем копию метода showThis с контекстом привязанным к hotel
fn(hotel_1.showThis.bind(hotel_1)); // {name: "Resort Hotel", showThis: ƒ}
