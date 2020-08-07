"use strict";
// Сложные типы - массивы, функции и объекты

// Массив — структура данных для хранения и манипулирования коллекцией индексированных значений.
// Пустой массив
const arr = [];
// Массив clients с тремя элементами
const clients = ["Mango", "Poly", "Ajax"];
console.log(clients); // ["Mango", "Poly", "Ajax"]

const tourists = ["Mango", "Poly", "Ajax"];
// Указывая в скобках индекс элемента мы получаем его значение
console.log(tourists[0]); // Mango
console.log(tourists[1]); // Poly
console.log(tourists[2]); // Ajax

const gests = ["Mango", "Poly", "Ajax"];
// Значение элемента можно заменить
gests[0] = "Kiwi";
console.log(gests[0]); // Kiwi
// Или добавить
gests[3] = "Alex";
console.log(gests[3]); // Alex
console.log(gests); // ["Kiwi", "Poly", "Ajax", "Alex"]

// const clients = ["Mango", "Poly", "Ajax"];
// // length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined

// clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]

const visiters = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < visiters.length; i += 1) {
  console.log("Logging visiters: ", visiters[i]);
}

const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}
console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']

// // Итерация по массиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }
// console.log(message); // Клиент с таким именем есть в базе данных!

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }
// console.log(message); // Клиент с таким именем есть в базе данных!

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const numbersTime = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbersTime.length; i += 1) {
  if (numbersTime[i] < threshold) {
    continue;
  }
  console.log(`Число больше чем ${threshold}: ${numbersTime[i]}`); // 18, 29, 34
}

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let total = 0;
for (let i = 0; i < matrix.length; i += 1) {
  console.log("Подмассив матрицы matrix[i]: ", matrix[i]);
  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log("Элемент подмассива матрицы matrix[i][j]: ", matrix[i][j]);
    total += matrix[i][j];
  }
}
console.log(total); // 45

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

const a = ["Mango"];
// Присвоение по ссылке.
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ['Mango']
console.log(b); // ['Mango']
// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ['Mango', 'Poly']
// b изменилось тоже, потому что b, как и a,
// просто содержат ссылку на одино и то же место в памяти
console.log(b); // ['Mango', 'Poly']
// Результат повторяется
b.push("Ajax");
console.log(a); // ['Mango', 'Poly', 'Ajax']
console.log(b); // ['Mango', 'Poly', 'Ajax']

// split(s) — позволяет превратить строку в массив, разбив ее по разделителю s.
// join(s) — делает в точности противоположное split. Он берет массив и склеивает его в строку, используя s как разделитель.

// split
const message = "Welcome to Bahamas!";
// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]
// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split("")); // [много букв :)]

// join
const customer = ["Mango", "Poly", "Ajax"];
// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(customer.join(" ")); // "Mango Poly Ajax"
console.log(customer.join(",")); // "Mango,Poly,Ajax"
console.log(customer.join("-")); // "Mango-Poly-Ajax"

// array.includes(x) — определяет, содержит ли массив некоторый элемент x, возвращая true или false соответственно
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// array.indexOf(x) — возвращает первый индекс, в котором элемент x был найден в массиве, или число -1, если такого элемента нет.
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
if (redFruits.includes(fruit)) {
  console.log("It is a red fruit!");
}

// push() — позволяет добавить один или несколько элементов в конец массива.
// pop() — удаляет элемент из конца массива и возвращает удаленный элемент.
// Если массив пуст, метод возвращает undefined.
// Создаем пустой массив
const stack = [];

// Добавляем элементы в конец массива
stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1, 2]

stack.push(3);
console.log(stack); // [1, 2, 3]

// Удаляем элементы из конца массива
console.log(stack.pop()); //  3
console.log(stack); // [1, 2]

console.log(stack.pop()); //  2
console.log(stack); // [1]

console.log(stack.pop()); //  1
console.log(stack); // []

console.log(stack.pop()); //  undefined

// shift() — удаляет элемент из начала массива и возвращает его (элемента) значение.
// unshift() — добавляет элемент в начало массива.
// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift()); // Mango
// console.log(clients); // ["Ajax", "Poly"]

// clients.unshift('Kiwi');
// console.log(clients); // ["Kiwi", "Ajax", "Poly"]

// slice()
const chef = ["Mango", "Ajax", "Poly", "Kiwi"];
// Вернет новый массив в котором будут элементы с индексами от 1 до 2
console.log(chef.slice(1, 3)); // ["Ajax", "Poly"]
// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(chef.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// Вернет копию исходного массива
console.log(chef.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
// Вернет новый массив состоящих из последних двух элементом исходного
console.log(chef.slice(-2)); // ["Poly", "Kiwi"]

// splice() — позволяет удалять, добавлять и заменять элементы в произвольном месте массива.
// Удаление элементов массива splice(position, num);
// position — указывает позицию (индекс) первого элемента для удаления
// num — определяет количество удаляемых элементов
// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
const scores = [1, 2, 3, 4, 5];
// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.splice(0, 3);
// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]
// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]

// Вставка элементов в массив splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position указывает начальную позицию в массиве, в которой будут вставлены новые элементы.
// Второй аргумент равен нулю 0, он говорит методу не удалять какие-либо элементы.
// Третий, четвертый и все последующие аргументы — это новые элементы, которые вставляются в массив.
// Предположим, что у вас есть массив с названиями цветов в виде строк.
const colors = ["red", "green", "blue"];
// Следующая операция помещает один новый элемент перед вторым элементом.
colors.splice(2, 0, "purple");
// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
console.log(colors); // ["red", "green", "purple", "blue"]
// Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "purple", "blue"]

// Метод splice() также позволяет вставить новые элементы в массив при одновременном удалении существующих элементов.
// Для этого необходмо передать три аргумента:
// первым - порядковый номер элемента,
// вторым — количество элементов для удаления,
// а третим — элементы для вставки.
// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ["C", "C++", "Java", "JavaScript"];
// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, "Python");
// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// Метод concat()
// Используется для объединения двух или более массивов.
// Этот метод не изменяет исходный массив, а возвращает новый.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];
const allClients = oldClients.concat(newClients);
console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
console.log(oldClients);
// ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients);
// ["Monkong", "Singu"]
