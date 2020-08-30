"use strict";
import users from "../users.js";

// 1
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 2
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 3
// const getUsersWithGender = (users, gender) => {
//   return users.filter((user) => user.gender === gender);
// };
// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 4
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// 5
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// 6
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// 7
const calculateTotalBalance = (users) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
console.log(calculateTotalBalance(users)); // 20916

// 8 Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersWithFriend = (users, friendName) => {
//   return users.reduce((user) => user.friends === friendName);
// };
// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// 9
// Массив имен (поле name) людей, отсортированных в
// зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//   const countFriend = users.friends;
//   users.sort((a, b) => a.friends - b.friends);
//   return countFriend;
// };
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 10 Получить массив всех умений всех пользователей
// (поле skills), при этом не должно быть повторяющихся
// умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (users) => {
// users.reduce((allSkills, user) => {
//     allSkills.push(...user.skills)
//     return allSkills
// }, []);
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
