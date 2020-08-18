"use strict";
// Процедурное программирование — набор не связанных явно функций
// и переменных для хранения и обработки информации. Этот подход
// прост и прямолинеен, но при росте кодовой базы, результатом может
// быть то, что называется spaghetti code — тесно связанный код.

// Ниже имеем процедурный код, не связанные переменные и функция для подсчета результата.
const baseSalary = 30000;
const overtime = 10;
const rate = 20;
const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};
getWage(baseSalary, overtime, rate);

// Объектно-ориентированное программирование (ООП) — методология,
// основанная на представлении программы в виде совокупности объектов,
// каждый из которых содержит данные (свойства) и методы для взаимодействия с ними.

// Используем ООП собрав данные в объект employee
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employee.getWage();
// При таком подходе у метода нету параметров, используются
// свойства объекта, которые настраиваются при создании объекта и
// возможно так же изменяются другими методами, понижает сложность
// программы и повышает повторное использование кода в других частях программы.

//  ООП это подход к программированию как к моделированию,
// решающий основную задачу - структурирование информации с точки зрения
// управляемости, что существенно улучшает контроль процесса моделирования.

//
//
//
// Основные понятия ООП (Объектно-ориентированное программирование)
// 1. Класс — способ описания сущности, определяющий состояние и
// поведение, зависящее от этого состояния, а также правила для
// взаимодействия с данной сущностью (контракт).
// 2. Объект (экземпляр) — это отдельный представитель класса, имеющий
// конкретное состояние и поведение, полностью определяемое классом.
// Это то, что создано по чертежу, то есть по описанию из класса.
// 3. Интерфейс — это набор свойств и методов класса, доступных для
// использования при работе с экземпляром.

// Парадигмы
// ООП построено на четырех основных понятиях: инкапсуляция,
// абстракция, наследование и полиморфизм.
// 1. Инкапсуляция
// Инкапсуляция (encapsulation) — это свойство системы, позволяющее
// объединить данные и методы, работающие с ними, в классе и скрыть
// детали реализации от пользователя. Всё то, что не входит в интерфейс,
// инкапсулируется (скрыто) в классе.
// 2. Абстракция
// Абстрагирование (abstraction) — это способ выделить набор
// значимых характеристик объекта, исключая из рассмотрения незначимые.
// 3.  Наследование
// Наследование (inheritance) — это свойство системы, позволяющее
// описать новый класс на основе уже существующего, с частично или
// полностью заимствующимся функционалом. Класс, от которого производится
// наследование, называется базовым, родительским или суперклассом.
// Новый класс называется потомком, наследником или производным классом.
// 4. Полиморфизм
// Полиморфизм (polymorphism) — это свойство системы позволяющее
// использовать объекты с одинаковым интерфейсом без информации о
// типе и внутренней структуре объекта. Позволяет переопределять в
// классах наследниках реализации методов базового класса.

//
//
//
// Конструкторы
// Конструктор — это обычная функция к которой применили оператор new.
// Это приводит к созданию нового объекта и вызову функции в контексте этого объекта.
// Любая функция, кроме стрелочной, может быть использована как конструктор,
// то есть вызвана при помощи оператора new. При вызове стрелки через new будет ошибка.
// Чтобы отличить конструктор от обычной функции, конструкторы принято
// называть с большой буквы, а в самом названии отражать тип
// создаваемого объекта, например: Object, Array, Number, String и другие.
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };
// // В результате вызова
// const hotel = new Hotel("Resort Hotel", 5, 100);
// // Получаем такой объект
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// Теперь многократными вызовами new Hotel с разными аргументами
// мы можем создать любое количество объектов. Использование
// конструкторов удобно при созданнии множества объектов с
// одним набором свойств имеющих разные значения.
const Hotel = function (name, stars, capacity) {
  this.name = name;
  this.stars = stars;
  this.capacity = capacity;
};
const hotel = new Hotel("Resort Hotel", 5, 100);
console.log(hotel);
// Hotel {name: "Resort Hotel", stars: 5, capacity: 100}
const motel = new Hotel("Sunlight Motel", 4, 300);
console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

// Внутренние методы [[Call]] и [[Construct]]
// Функции вызываются используя два разных внутренних метода: [[Call]] и [[Construct]].
// 1. Когда функция вызывается без new, выполняется метод [[Call]],
// который исполняет тело функции так, как оно описано в коде.
// 2. Когда функция вызывается с new, выполняется метод [[Construct]],
// который отвечает за создание нового объекта и исполнения тела
// функции с this ссылающимся на этот объект.
// Стрелочные функции не имеют метода [[Construct]] и, поэтому,
// не могут быть использованы в качестве конструкторов.

// Добавление методов
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;
//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };
//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };
//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };
// const hotel = new Hotel("Sunrise Hotel", 5, 100);
// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet("Mango"); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);

// Время практики. Представьте что у нас есть магазин и два менеджера,
// по продаже товаров. Необходимо написать логику для организации их работы.
// Для каждого менеджера создаётся отдельный объект.
const mango = {
  name: "Mango",
  sales: 5,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  },
};
console.log(mango.sales); // 5
console.log(mango.sell("TV")); // Manager Mango sold TV
console.log(mango.sell("Microwave")); // Manager Mango sold Microwave
console.log(mango.sales); // 7

const poly = {
  name: "Poly",
  sales: 10,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  },
};
console.log(poly.sales); // 10
console.log(poly.sell("TV")); // Manager Poly sold TV
console.log(poly.sell("Microwave")); // Manager Poly sold Microwave
console.log(poly.sales); // 12

// Представьте, что будет, когда наш магазин вырастет и пополнится
// парой сотен менеджеров, для каждого из которых будет необходимо
// создать объект, динамически, во время выполнения программы.
// К счастью мы знаем о конструкторах.
const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}.`;
  };
};
const sancho = new Manager("Sancho", 5);
console.log(sancho.sales); // 5
console.log(sancho.sell("TV")); // Manager Mango sold TV
console.log(sancho.sell("Microwave")); // Manager Mango sold Microwave
console.log(sancho.sales); // 7

const billy = new Manager("Billy", 10);
console.log(billy.sales); // 10
console.log(billy.sell("TV")); // Manager Poly sold TV
console.log(billy.sell("Microwave")); // Manager Poly sold Microwave
console.log(billy.sales); // 12

//
//
//
// Прототипы
// ООП в JavaScript построено на прототипном наследовании.
// Объекты можно организовать в цепочки так, чтобы свойство, не
// найденное в одном объекте, автоматически искалось бы в другом.
// Связующим звеном выступает специальное скрытое свойство [[Prototype]],
// в консоли оно отображается как __proto__.
// Если один объект имеет специальную ссылку в поле __proto__
// на другой объект, то при чтении свойства из него, если искомое
// свойство отсутствует в самом объекте, оно ищется в объекте на который ссылается __proto__.
const animal = { eats: true };
const dog = { barks: true };
dog.__proto__ = animal;
// В dog можно найти оба свойства
console.log(dog.barks); // true
console.log(dog.eats); // true
// Объект, на который указывает ссылка в __proto__, называется
// прототипом. В данном примере animal это прототип для dog.

// const animal = { eats: true };
// const dog = { barks: true, eats: false };
// dog.__proto__ = animal;
// console.log(dog.barks); // true
// console.log(dog.eats); // false, свойство взято из dog
// Другими словами, прототип — это резервное хранилище свойств и методов
// объекта, автоматически используемое при поиске. У объекта, который
// выступает прототипом может также быть свой прототип, у того свой, и
// так далее. При этом свойства будут искаться по цепочке наследования.

// В спецификации свойство __proto__ обозначено как [[Prototype]].
// Двойные квадратные скобки здесь важны, они указывают на то,
// что это внутреннее, служебное свойство.
// Механизм поиска свойства работает до первого совпадения.
// Интерпретатор ищет свойство по имени в объекте, если не находит,
// то обращается к свойству [[Prototype]], т.е. переходит по ссылке
// к объекту-прототипу, а затем и прототипу прототипа.
// Если интерпретатор доберется до конца цепочки и не найдет
// свойства с таким ключом, то вернет undefined.

// Несмотря на то, что свойство __proto__ на сегодняшний день стандартизовано,
// и проще для объяснения материала, его изменение напрямую является
// грубым нарушением. На практике используются методы для манипуляции
// с прототипами, такие как Object.create(), Object.getPrototypeOf(), Object.setPrototypeOf() и другие.

// Object.create()
// Для того чтобы правильно задать прототип объекта, можно
// использовать метод Object.create(obj), передав параметром obj
// ссылку на объект который мы хотим сделать прототипом для создаваемого объекта.
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks); // true
// console.log(dog.eats); // true

//  Object.prototype.hasOwnProperty()
// цикл for...in не делает различия между свойствами объекта и его прототипа.
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//   console.log(key); // barks, eats
// }
// Именно поэтому мы используем метод obj.hasOwnProperty(prop),
// который возвращает true, если свойство prop принадлежит самому
// объекту obj, а не его прототипу, иначе false
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key); // barks
// }

// Метод Object.keys(obj) вернет массив только собственных ключей
// объекта obj, поэтому рекомендуется использовать именно его.
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// const dogKeys = Object.keys(dog);
// console.log(dogKeys); // ['barks']

// Свойство Function.prototype
// Является объектом
// В него можно записывать свойства и методы
// Свойства и методы prototype будут доступны по ссылке __proto__ объекта
// У свойства prototype изначально есть метод constructor
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };
// console.log(Guest.prototype); // {constructor: ƒ}
const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};
const oleg = new Guest("Oleg", 28);
console.log(oleg);

//
const Guests = function (name, room) {
  this.name = name;
  this.room = room;
};
Guests.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};
const vlada = new Guests("Vlada", 28);
const elena = new Guests("Elena", 36);
vlada.showGuestInfo(); // name: Mango, room: 28
elena.showGuestInfo(); // name: Poly, room: 36

// Свойство constructor
// consrtuctor - метод который делает запись ссылки в объект в момент создания.
// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };
// Guest.prototype = {
//   constructor: Guest,
// };
// В коде выше мы создали свойство Guest.prototype вручную,
// но абсолютно такой же объект генерируется автоматически.
// А свойство constructor содержит ссылку на саму функцию-конструктор.

// Наследование и конструкторы
// 1. Например мы пишем игру в стиле RPG, и нам необходимо подготовить
// логику для классовой системы персонажей, где есть общий конструктор
// Hero с дефолтными полями общими для всех классов, вроде имени,
// здоровья, количества опыта и т. п. После чего нам необходимо сделать
// конструкторы для Warrior и Wizard, экземпляры которых также должны
// иметь доступ к полям Hero, но в тоже время иметь свои собственные
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
// const aleksa = new Hero("Aleksa", 1000);
// console.log(aleksa); // Hero { name: 'aleksa', xp: 1000 }
// // Так как aleksa это экземпляр Hero, то ему доступны методы из Hero.prototype
// aleksa.gainXp(500); // aleksa gained 500 experience points
// console.log(aleksa); // Hero { name: 'aleksa', xp: 1500 }

// 2. Далее необходимо создать класс Warrior, так как нет смысла
// добавлять в Hero абсолютно все поля всех классов. Поэтому нам
// необходимо создать еще функцию-конструктор но при этом она
// должна быть как-то связана с Hero.
// Для решения этой задачи мы можем использовать метод call(),
// вызвав функцию-конструктор Hero и передав ей объект создающийся
// в Warrior как контекст.
// const Warrior = function (name, xp, weapon) {
//   /*
//    * Во время выполнения функции Warrior вызываем функцию Hero
//    * в контексте объекта создающегося в Warrior, а так же передаем
//    * аргументы для инициализации полей this.name и this.xp
//    *
//    * this это будущий экземпляр Warrior
//    */
//   Hero.call(this, name, xp);
//   // Тут добавляем новое свойство - оружие
//   this.weapon = weapon;
// };
// // Сразу добавим метод для атаки в prototype воина
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
// const holeg = new Warrior("Holeg", 200, "sword");
// console.log(holeg); // Warrior {name: "holeg", xp: 200, weapon: "sword"}
// holeg.attack(); // holeg attacks with sword

// 3. Вроде все хорошо, но что произойдет если мы попробуем вызвать
// у holeg метод gainXp(), который обьявлен на Hero.prototype? — будет ошибка
// Дело в том что поля из Hero.prototype не добавляются в цепочку
// прототипов по умолчанию. Необходимо явно укзать связь поля
// Warrior.prototype и Hero.prototype.
/*
 * Используем Object.create() для того чтобы изначально записать
 * в Warrior.prototype пустой объект, в __proto__ которого будет
 * ссылка на Hero.prototype. Это необходимо сделать до того
 * как добавлять методы
 */
// Warrior.prototype = Object.create(Hero.prototype);
// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;
// // Добавим метод для атаки
// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
// // Попробуем теперь
// holeg.gainXp(300); // holeg gained 300 experience points

// 4. Полный код примера.
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};
const Warrior = function (name, xp, weapon) {
  Hero.call(this, name, xp);
  this.weapon = weapon;
};
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};
const holeg = new Warrior("Holeg", 200, "sword");
console.log(holeg); // Warrior {name: "Holeg", xp: 200, weapon: "sword"}
holeg.attack(); // Holeg attacks with sword
holeg.gainXp(500); // Holeg gained 500 experience points
console.log(holeg); // Hero { name: 'Holeg', xp: 700 }

//
//
//
// ES6 классы
// Класс — это удобный способ для задания конструктора вместе с прототипом.
// Преимущества использования классов:
// Весь код внутри класса выполняется в строгом режиме.
// Все методы являются неперечислимыми.
// У всех методов класса отсутствует внутренний метод [[Construct]],
// что означает появление ошибки при попытке использовать эти методы с оператором new.
// Вызов конструктора класса без оператора new вызовет ошибку.
//class declaration
// class Guest {
//   //...
// }
// // Под капотом класс это функция-конструктор с прототипом
// console.log(typeof Guest); // "function"
// console.log(Guest.prototype); // {constructor: ƒ}
// const guest = new Guest();
// console.log(guest); // Guest {}
// Функция constructor запускается при вызове new Guest,
// остальные методы записываются в Guest.prototype.
// Свойство prototype класса доступно только для чтения, т.е. это свойство нельзя изменить.
// В классе должен быть только один конструктор, иначе будет ошибка.
// class Client {
//   // аналог функции-конструктора
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }
// }
// const olga = new Client("Olga", 26);
// console.log(olga); // {name: Olga, roomNumber: 26}
// console.log(olga instanceof Client); // true

// Добавим функцию getFullInfo. Функции определенные таким образом
// называться методами класса и доступны всем экземплярам через prototype.
class Client {
  // Аналог функции-конструктора
  constructor(name, roomNumber) {
    this.name = name;
    this.roomNumber = roomNumber;
  }
  // Аналог Client.prototype.getFullInfo
  getFullInfo() {
    console.log(`
      Client ${this.name}
      Room number ${this.roomNumber}
    `);
  }
}
const olga = new Client("Olga", 26);
olga.getFullInfo();
// Client Olga
// Room number 26

// Собственные свойства класса желательно хранить в constructor.
// Но существует и другой вариант — разместить в теле класса методы set и get.
//  Эти методы используют особый синтаксис, а при их вызове,
// после имени объекта следует написать только имя геттера
// или сеттера без вызова функции, т.е. без круглых скобок.
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     this._name = name;
//     this._roomNumber = roomNumber;
//   }
//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     this._name = value;
//   }
// }
// const mango = new Guest('Mango', 26);
// // обращение к get и set не требует вызова - т.е. без ()
// console.log(mango.name); // Mango
// mango.name = 'Mango the Fluffy';
// console.log(mango.name); // Mango the Fluffy
// имя геттера и сеттера не может совпадать с именем поля будущего
// экземпляра. Если в примере выше заменить this._name на this.name, то будет ошибка.

// Можно создавать собственные свойства класса и собственные методы
// класса для вызова по имени класса, без создания объекта. Такие
// свойства и методы называют статическими. Для их создания в
// классе перед свойством или методом нужно добавить служебное слово static.
// Конструктор класса тоже метод, но его нельзя делать статическим,
// это вызовет ошибку.
// Класс со статическими свойствами и методами
class Calc {
  // Класс-калькулятор для двух аргументов
  constructor() {}
  // Метод как замена свойству
  static get PI() {
    return 3.14;
  }
  // Статический метод +
  static add(...args) {
    return args.reduce((acc, next) => acc + next, 0);
  }
  // Статический метод *
  static mult(...args) {
    return args.reduce((acc, next) => acc * next, 1);
  }
}
console.log(Calc.PI); // 3.14
console.log(Calc.add(2, 3, 4)); // 9
console.log(Calc.mult(12, 3, 4)); // 144

// Наследование
/*
 * Ключевое слово extends указывает на родительский класс,
 * чьи свойства будут унаследованы.
 */
// class Child extends Parent {
//   // ...
// }
class Animal {
  constructor(name) {
    this.name = name;
  }
  move() {
    console.log(`I, ${this.name}, am moving!`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    // Вызвать конструктор Animal с аргументом name
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log("woof!");
  }
  moveAndMakeSound() {
    super.move();
    this.bark();
  }
}
const dog = new Dog("Mango", "shepherd");
dog.move(); // I, Mango, am moving!
dog.bark(); // woof!
dog.moveAndMakeSound(); // I, Mango, am moving! woof!
// При наследовании через extends формируется стандартная цепочка
// прототипов: методы Dog находятся в Dog.prototype, методы Animal
// в Animal.prototype, и они связаны через __proto__.
// В конструкторе потомка мы обязаны вызвать super() до
// первого обращения к ключевому слову this.
// Конструктор родителя наследуется автоматически. То есть, если в
// потомке не указан свой constructor, то используется родительский.
// Если же у потомка свой constructor, то, чтобы в нём вызвать конструктор
// родителя, используется метод super() с аргументами для constructor родителя.
// При наследовании, вызов конструктора родителя осуществляется
// через super(...args), вызов родительских методов через super.method(...args).
