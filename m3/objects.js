"use strict";
// объект это набор свойств и методов, это
// структрура позволяющая хранить все характеристики
// связно и в одном месте.
// Объект — ассоциативный массив, тип данных, хранящий
// свойства (properties) и методы (methods).
// Создание объекта через литерал похоже на создание массива,
// только используются фигурные {}, а не квадратные скобки.
// const hotel = {};
// При создании объект может быть инициализирован свойствами,
// каждое из которых описывается парами ключ:значение (key:value).
// Свойства разделяются запятой.
// Ключ — это всегда строка. Значением могут быть любые типы:
// примитивы, массивы, объекты, були, функции и т. п.
// Если ключ заключен в кавычки, то это может быть произвольная строка.
// Если кавычек нет, то вступают ограничения — имя без пробелов,
// начинающаеся на букву или символы _ и $.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// Доступ к свойству объекта, для того чтобы получить
// или присвоить ему значение, может быть записан двумя способами:
// object.key — через точку.
// object["key"] — через квадратные скобки с именем ключа в кавычках.
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel
// hotel.name = 'Coastline Resort';
// console.log(hotel.name); // Coastline Resort
// console.log(hotel['name']); // Coastline Resort
// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name); // Stardust Hotel
// console.log(hotel['name']); // Stardust Hotel

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';
// console.log(hotel.address); // 1, Beach ave.
// console.log(hotel.manager); // Chuck Norris

// Удалить свойство объекта можно с помощью оператора delete.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// delete hotel.name;
// console.log(hotel); // {stars: 5, capacity: 100}
// delete hotel["stars"];
// console.log(hotel); // {capacity: 100}

// Отсутствующее свойство, при обращении к нему по ключу,
// возвращает undefined.
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   guests: ['mango', 'poly', 'ajax'],
// };
// console.log(hotel.stars); // 5
// console.log(hotel.pool); // undefined

// Часто есть переменные, например, name и stars, и
// мы хотим использовать их в объекте так, чтобы имя перемнной
// стало ключом, а значение переменной значением свойства.
// При объявлении объекта в этом случае достаточно указать
// только имя свойства, а значение будет взято из переменной
// с аналогичным именем. Это синтаксис коротких свойств (shorthand properties).
// let name = "Resort Hotel";
// let stars = 5;
// // Эта ES5 запись избыточна (не правильно)
// const es5hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };
// /*
//  * ES6 Shorthand properties (правильно)
//  * Имя ключа будет аналогично имени переменной
//  * Значение свойства будет равно значению переменной
//  */
// const es6hotel = {
//   name,
//   stars,
//   capacity: 100,
// };
// console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}

// Используя вычисляемые свойства, можно избежать лишнего кода,
// и в некоторых случаях значительно его упросить.
// const key = 'person';
// const getKey = function() {
//   return 'age';
// };
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };
// console.log(object); // {person: 'Mango', age: 2}

// Объекты хранят не только данные, но и функции
// для работы с этими данными. Если значение свойства
// это функция, то оно называется методом объекта.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   greetInEs6() {
//     console.log("Welcome!");
//   },
// };
// hotel.greetInEs6(); // Welcome!
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// hotel.greet = function () {
//   console.log("Welcome!");
// };
// hotel.greet(); // Welcome!

//
//
//this
// Для доступа к текущему объекту, в методе используется
// не имя объекта, а ключевое слово this - контекст.
// Значение this определяется в момент вызова функции,
// а не в момент ее объявления. То есть во время
// вызова hotel.showName(), в this внутри функции
// showName будет записана ссылка на объект hotel.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };
// hotel.showName(); // Resort Hotel
// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

//
//
// По умолчанию объект не является итерируемым,
// то есть по нему нельзя пройти циклом for или for...of
// как по массиву или строке. Для того чтобы перебрать
// объект существует несколько специальных конструкций
// Цикл for...in
// for (key in object) {
//   // statements
// }
// Перебирает ключи объекта
// Можно удалять свойства во время перебора
// Нельзя использовать для перебора массивов
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log("Key: ", key);
// }
/*
 * Key: name
 * Key: stars
 * Key: capacity
 */
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }
/*
 * Value: "Resort Hotel"
 * Value: 5
 * Value: 100
 */

//
//
//  Object.keys(), Object.values(), Object.entries();
// Object.keys(obj) - вернет массив, с ключами объекта obj в виде строк.
// Object.values(obj) - вернет массив, со значениями свойств объекта obj .
// Object.entries(obj) - вернет массив записей, каждым элементом
// которого будет еще один массив из 2-х элементов,
// ключа и значения этого ключа из объекта obj.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// for (const key of keys) {
//   console.log("Value: ", hotel[key]);
// }
/*
 * Value: Resort Hotel
 * Value: 5
 * Value: 100
 */

//  А можно использовать результат Object.entries()
// который вернет массив записей с ключами и значениями свойств объекта.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }
/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

//  Допустим перед нами стоит задача посчитать
// общее количество продуктов в объекте формата
// имя-продукта: количество. Тогда подойдет
// метод Object.values() для того чтобы получить массив
// всех значений и потом удобно их сложить.
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };
// const values = Object.values(goods); // [6, 3, 4, 7]
// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total); // 20

//
//
// Операция spread
// ... - spread, распыление. Позволяет распылить коллекцию
// элементов в другую коллекцию, сделав копию оригинальной не изменяя ее.
// Распыление можно использовать всего в 3-х ситуациях:
// Во время вызова функции, для передачи массива элементов отдельными аргументами
// В литерале массива, при создании нового массив
// В литерале объекта, при создании нового объекта
// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures); // 12

// При работе с массивами, можно скопировать элементы
// одного массива в другой. Массив copyOfHouses будет
// независимой копией массива houses и соответственно изменения
// в любом из них не отобразятся в другом.
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];
// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(houses === copyOfHouses); // false - разные ссылки
// =
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const slicedCopyOfHouses = houses.slice();
// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(slicedCopyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']

// При этом можно добавлять и удалять элементы при создании нового массива.
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];
// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(completeHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']

// Можно очень удобно соединять несколько массивов в один новый.
// Порядок распыления исходных массивов влияет
// на порядок элементов в результирующем массиве.
// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];
// const houses = [...firstBatch, ...secondBatch];
// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// Можно использовать классические методы массива вроде slice()
// в комбинации с операцией spread.
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];
// console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

// Можно обновлять элементы не изменяя оригинальный массив,
// а создавая новый с обновленными значениями.
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];
// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// Распыление можно использовать как замену Object.assign(),
// то есть когда необходимо создать новый объект или обновить
// уже существующий по результату слияния нескольких других объектов.
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}
// // То же самое используя операцию spread
// const d = { ...a, ...b };
// console.log(d); // {x: 0, y: 2, z: 3}

// Во время слияния можно добавлять свойства в произвольное место.
// Но следует помнить, что свойства распыляемого объекта могут
// перезаписать значение существующего свойства, если
// имена ключей совпадают, а распыление происходит после указания свойства
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = { x: 5, j: 10, ...a, z: 15, ...b };
// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// const lion = { hasTail: true, legs: 4 };
// const eagle = { canFly: true };
// const chimera = { ...lion, ...eagle };
// console.log(chimera); // {hasTail: true, legs: 4, canFly: true}

//
//
// Операция rest
// ... - rest, сбор. Позволяет скопировать группу элементов коллекции
// в новую коллекцию, не изменяя оригинальную. При этом,
// во время сбора, если элемент коллекции примитив -
// создается копия элемента, в случае сложного типа создается ссылка
// на оригинальный элемент.
// Используется в подписи функции для сбора аргументов
// или при деструктуризации, для хранения остатка элементов.
// Есть функция add, которая складывает произвольное кол-во аргументов.
// Получить доступ ко всем аргументам можно используя
// специальную переменную arguments, но в стрелочных функциях ее нет,
// а в обычных функциях она псевдомассив. Используя операцию rest
// можно собрать все аргументы в массив прямо в подписи функции.
// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };
// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
// Используя rest можно взять только ту часть аргументов,
// которая необходима, объявив параметры до rest.
// Все агументы, для которых будут объявлены параметры,
// передадут им свои значения, все остальные будут помещены в массив args.
// Операция rest собирает все оставшиеся аргументы и поэтому
// должна идти последней в подписи функции, иначе будет ошибка.
const add = function (value, ...args) {
  console.log(value); // первый аргумент
  console.log(args); // массив всех остальных аргументов
};
add(10, 1, 2, 3);
add(15, 1, 2, 3, 4, 5);

//
//
// Деструктуризация объектов
// Деструктуризація — поділ складної структури на прості частини.
// У JavaScript ця складна структура, як правило, є об'єктом або масивом.
// Если имя переменной и ключ объекта совпадают, то
// происходит присваивание. Если для переменной не нашлось
// подходящего ключа то будет присвоен undefined.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;
// console.log(name, stars, status); // "Resort Hotel", 5, undefined
// Присвоения undefined можно избежать, задав переменным значения
// по умолчанию, в случае если такого свойства в объекте нет.
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// const { name = "hotel", stars = 3, status = "empty" } = hotel;
// console.log(name, stars, status); // "Resort Hotel", 5, "empty"

// Не всегда удобно создавать имена переменных по ключам,
// поэтому можно переопределить имена в процессе присвоения.
// Сначала пишем имя свойства из которого мы хотим получить значение,
// после чего ставим двоеточие и пишем имя переменной в которую
// хотим поместить значение этого свойства.
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;
// console.log(hotelName, stars, hotelStatus);// "Resort Hotel", 5, "empty"

// Используя операцию ... (rest) можно делать частичную деструктуризацию,
// взяв из объекта необходимые поля, а остальное собрать в переменную
// под именем rest (имя переменной произвольное), это будет объект
// с теми полями, которые мы явно не деструктуризировали в переменные
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const { name, ...rest } = hotel;
// console.log(name); // "Resort Hotel"
// console.log(rest); // {stars: 5, capacity: 100}

//
//
//
// Деструктуризация массивов
// Аналогично делается деструктуризация массивов, но с некоторыми особенностями:
// Вместо {} используются []
// Переменным указанным в [] будут последовательно присваиваться
// значения элементов массива
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100

// При деструктуризации массивов переменной может быть присвоено
// значение отдельно от ее объявления.
// const rgb = [200, 255, 100];
// let red, green, blue;
// [red, green, blue] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100

// Если переменных больше чем элементов массива, им будет
// присвоено undefined, поэтому можно указывать значения по умолчанию.
// const rgb = [200, 100, 255];
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);
// // Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// Иногда из массива необходимо деструктуризировать только
// первые n элементов, а остальные сохранить в одну переменную в виде
// массива. При деструкции массива можно распаковать и присвоить
// оставшуюся часть элементов массива переменной, используя операцию ... (rest).
// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, Colors: ${colors}`);
// // Red: 200, Colors: [255, 100]

// Элементы можно пропускать. Допустим из массива rgb необходимо
// взять только последнее значение. Используется это крайне редко.
const rgb = [200, 100, 255];
const [, , blue] = rgb;
console.log(`Blue: ${blue}`); // Blue: 255
