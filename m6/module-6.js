"use strict";
// Императивный код
// Описывает процесс вычисления в виде заданной последовательности
// инструкций, изменяющих состояние программы. Описание того, как что-то выполянется.
// Например цикл for, который предоставляет точные указания для итерации по индексам массива.

// Декларативный код
// Описывает то, что мы хотим получить в результате, а не как это сделать.
// Порядок выполнения и способ достижения не важен. (например, когда мы пишем код HTML)
// Декларативное описание задачи более наглядно и легче формулируется.
// Мы говорим что хотим сделать, вызвав метод или функцию. Ее реализация
// скорее всего использует императивный код, но он скрыт внутри и
// не усложняет понимание основного кода.

// Императивный vs декларативный
// Императивный подход
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}
console.log(filteredNumbers); // [4, 5]

// Декларативный подход
const numbers_ = [1, 2, 3, 4, 5];
const filteredNumbers_ = numbers_.filter((value) => {
  return value > 3;
});
console.log(filteredNumbers_); // [4, 5]

// Чистые функции
// Функция с побочными эффектами — функция, которая в процессе выполнения
// может модифицировать или использовать значения глобальных переменных,
// изменять ссылочные аргументы, выполнять операции ввода-вывода и т. п.
// Используем привычный императивный подход
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};
const numbers__ = [1, 2, 3, 4, 5];
dirtyMultiply(numbers__, 2);
// Произошла мутация исходных данных
console.log(numbers__); // [2, 4, 6, 8, 10]

// Чистые функции (pure functions) — функции, результат которых зависит
// только от значений переданных аргументов и стабильных переменных
// локальной области видимости, которые при одинаковых аргументах всегда
// возвращают один и тот же результат, и не имеют видимых побочных эффектов,
// то есть не изменяют состояние программы.
const pureMultiply = (array, value) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * 2);
  }
  return result;
};
const _numbers_ = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(_numbers_, 2);
// Не произошло мутации исходных данных
console.log(_numbers_); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с измененными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//
// Перебирающие методы массива
// В JavaScript есть методы массивов пришедшие из функциональных языков.
// Они получают исходный массив, создают новый пустой массив и заполняют его,
// применяя к копии значения каждого элемента указанную callback-функцию.
// Все функциональные методы массивов имеют схожий синтаксис.
// Исходный массив array, вызов метода method и callback-функция callback в качестве аргумента метода.
// array.method(callback[currentValue, index, array])
// аргументами callback-функции являются значение элемента
// 1. currentValue (первый параметр),
// 2. позиция элемента index (второй параметр)
// 3. и сам исходный массив array (третий параметр).
// array.method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });
// Все параметры кроме значения элемента item необязательны.
// Названия параметров могут быть любые, но есть неофициальные соглашения.
// array.method((item) => {
//   // логика которая будет применяться на каждой итерации
// });

// 1. Array.prototype.forEach()
// Единственный из функциональных методов который ничего не возвращает,
// а просто перебирает коллекцию. Используется как замена цикла for.
// array.forEach(callback[(currentValue, index, array)]);
// Перебирает
// Может изменять
// Не возвращает
// forEach прервать инструкцией break нельзя.
const numbers1 = [1, 2, 3];
// Классический for
for (let i = 0; i < numbers1.length; i += 1) {
  console.log(numbers1[i]);
}
numbers1.forEach((num) => console.log(num));
numbers1.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// 2. Array.prototype.map()
// Используется для транформации массива. Применяет callback-функцию к
// каждому элементу исходного массива, результат работы callback-функции
// записывает в новый массив, который и будет результатом выполнения метода.
// Исходный и новый массив всегда имеют одинаковую длину. Не мутирует иходный массив.
// array.map(callback[(currentValue, index, array)]);
// Используется для трансформации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию
const numbers2 = [1, 2, 3];
const doubledNumbers2 = numbers2.map((num) => num * 2);
console.log(doubledNumbers2); // [2, 4, 6]

const users = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
];
// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map((user) => user.name);
console.log(names); // ["Mango", "Poly", "Ajax"]

// 3. Array.prototype.filter()
// Применяет callback-функцию к каждому элементу исходного массива и если
// результат ее выполнения имеет значение true, то копирует значение из
// исходного массива в новый массив. Исходный и новый массив могут иметь
// разную длину. Не мутирует иходный массив. Всегда возвращает массив, даже
// если в нем всего 1 элемент. Если ничего не найдено, вернет пустой массив.
// Используется когда необходимо найти более одного элемента в коллекции
// array.filter(callback[currentValue, index, array])
// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers3.filter((num) => num > 5)); // [6, 7, 8, 9]
console.log(numbers3.filter((num) => num < 5)); // [0, 1, 2, 3, 4]
console.log(numbers3.filter((num) => num === 5)); // [5]

const users1 = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
  { name: "Chelsey", isActive: false },
];
// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users1.filter((user) => user.isActive);
console.log(activeUsers);
// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users1.filter((user) => !user.isActive);
console.log(inactiveUsers);

// 4. Array.prototype.find()
// find, который будет искать до первого совпадения, после чего прервет
// свое выполнение.Применяет callback-функцию к каждому элементу исходного
// массива и если результат ее выполнения имеет значение true, то возвращает
// этот элемент и завершает свое выполнение. Если ничего не найдено, вернет undefined.
// array.find(callback[currentValue, index, array])
// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент
const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers4.find((num) => num > 5)); // 6
console.log(numbers4.find((num) => num < 5)); // 0
console.log(numbers4.find((num) => num === 5)); // 5

const users2 = [
  { id: "000", name: "Mango", isActive: true },
  { id: "001", name: "Poly", isActive: false },
  { id: "002", name: "Ajax", isActive: true },
  { id: "003", name: "Chelsey", isActive: false },
];
// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
const user = users2.find((user) => user.id === "002");
console.log(user);
// Создадим функцию которая будет возвращать нам пользователя по id
const getUserById = (arr, id) => arr.find((x) => x.id === id);
console.log(getUserById(users2, "001"));
console.log(getUserById(users2, "003"));

// 5. Array.prototype.every() и Array.prototype.some()
// 1. Метод every проверяет, прошли ли все элементы массива тест,
// предоставляемый callback-функцией. Возвращает true, если вызов callback-функции
// вернет true для каждого элемента в array.
// array.every(callback[currentValue, index, array])
// 2. Метод some проверяет, проходит ли по крайней мере один элемент в массиве
// тест, предоставляемый callback-функцией. Возвращает true, если вызов
// callback-функции вернет true хотябы для одного элемента в array.
// array.some(callback[(currentValue, index, array)]);
// Перебирает
// Не изменяет
// Возвращает true или false
// Функция которая проверяет величину значения, возвращает true или false.
const isBigEnough = (val) => val >= 10;

// Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// когда все элементы коллекции будут удовлетворять условию в callback-функции.
console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
// Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// или больше. Все что нам нужно это буль true/false. Метод some вернет true
// только тогда, когда хотябы 1 или более элементов коллекции будут
// удовлетворять условию в callback-функции.
console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];
// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false
// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

// 6. Array.prototype.reduce()
// Аккумулирующая функция, используется для последовательной обработки
// каждого элемента массива с сохранением промежуточного результата.
// Швейцарский нож функциональных методов массива.
// Перебирает
// Не изменяет
// Возвращает что угодно
// array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)
// previousValue — промежуточный результат (аккумулятор)
// currentItem — текущий элемент массива
// index — индекс текущего элемента массива
// array — оригинальный массив
const numbers5 = [1, 2, 3, 4, 5];
const summ = numbers5.reduce((acc, value) => acc + value, 0);
console.log(summ); // 15

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значаение которого укажем 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(likes); // 32
// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = (tweets) =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(countLikes(tweets)); // 32

const tweets1 = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
const tags = tweets1.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);
  return allTags;
}, []);
console.log(tags);
// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);
console.log(getTags(tweets1));

// Скопировать последний пункт 7
