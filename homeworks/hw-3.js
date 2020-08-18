"use strict";
// 1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "scydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// 2
const countProps = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;
};
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// 3
const findBestEmployee = function (employees) {
  //   console.log(employees);
  const keys = Object.keys(employees);
  //   console.log(keys);
  const values = Object.values(employees);
  //   console.log(values);
  let bestEmployee = keys[0];
  //   console.log(bestEmployee);
  let bestScore = values[0];
  for (let i = 1; i < keys.length; i++) {
    // console.log(keys[i]);
    // console.log(values[i]);
    if (values[i] > bestScore) {
      bestScore = values[i];
      bestEmployee = keys[i];
    }
  }
  return `${bestEmployee}: ${bestScore}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// 4
const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
};
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// 5
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const getAllPropValues = function (arr, prop) {
  //   console.log(arr);
  //   console.log(prop);
  const array = [];
  for (const obj of arr) {
    // console.log(obj);
    for (const key in obj) {
      //   console.log(key);
      if (key === prop) {
        array.push(obj[key]);
      }
    }
  }
  return array;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []

// 6
const products1 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  //   console.log(allProdcuts);
  //   console.log(productName);
  let total = 0;
  for (const obj of allProdcuts) {
    // console.log(obj);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      //   console.log(keys[i]);
      let key = keys[i];
      let key2 = keys[i + 1];
      let key3 = keys[i + 2];
      if (obj[key] === productName) {
        // console.log(obj[key2], obj[key3]);
        total = obj[key2] * obj[key3];
      }
    }
  }
  return total;
};
console.log(calculateTotalPrice(products1, "Радар")); // 5200
console.log(calculateTotalPrice(products1, "Дроид")); // 2800

// 7
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    let random = (Math.random() * (100 - 1) + 1).toFixed(0);
    return {
      id: random,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    return this.transactions.push(
      this.createTransaction(amount, Transaction.DEPOSIT)
    );
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    } else {
      console.log("Недостаточно средств");
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let obj of this.transactions) {
      if (obj.id === id) {
        return obj;
      } else {
        console.log("Такой транзакции нет");
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let obj of this.transactions) {
      if (obj.type === type) {
        total += obj.amount;
      }
    }
    return total;
  },
};
console.log(account.deposit(650));
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.withdraw(350));
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(54));
console.log(account.deposit(100));
console.log(account.withdraw(98));
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));
