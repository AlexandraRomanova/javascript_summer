"use strict";
// 1
const Account = function (obj) {
  this.login = obj.login;
  this.email = obj.email;
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com

// 2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const elena = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
elena.getInfo(); // User Elena is 2 years old and has 20 followers
const aleksa = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
aleksa.getInfo(); // User Aleksa is 3 years old and has 17 followers

// 3
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    if (!this.items.includes(item)) return this.items.push(item);
  }
  removeItem(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
      }
    }
    return this.items;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem("Нанитоиды");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// 4
class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
    return this._value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
    return this._value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

// 5
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    );
    return car;
  }

  constructor(car) {
    this.speed = 0;
    this._price = car.price;
    this.maxSpeed = car.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }

  accelerate(value) {
    this.speed += value;
    if (this.speed <= this.maxSpeed) {
      return this.speed;
    }
  }

  decelerate(value) {
    this.speed -= value;
    if (this.speed > 0) {
      return this.speed;
    }
  }

  drive(hours) {
    if (this.isOn) return (this.distance += hours * this.speed);
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
