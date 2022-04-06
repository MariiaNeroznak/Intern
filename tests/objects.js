// "use strict";

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
  let cnt = 0;
  for (let key in obj) {
    return true;
  }
  return false;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
multiplyNumeric(menu);
console.log(menu);

let testString = "Here is some text";
console.log(testString.toUpperCase());

user = {
  name: "Джон",
  age: 30,

  sayHi() {
    alert(user.name); // приведёт к ошибке
  },
};

let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!

console.log(this);

function sayHi() {
  console.log(this);
}

// sayHi();

let calculator = {
  read() {
    this.a = 2;
    this.b = 1;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let fruits = ["apple", "orange", "pear"];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("pear");
console.log(fruits);
fruits.push("pear");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("lemon", "banana");
console.log(fruits);


let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2.splice(2, 4, 9, 8, 7, 9, 7, 6, 5, 4);
console.log(arr2);



function User() {
  if (typeof new.target !== "function") {
    console.log("undefined");
    return;
  }
  console.log(typeof new.target);
  console.log(new.target);
}

User();
new User();

console.log("------------------------");
let usr = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
}

console.log(usr);
console.log(+usr);
console.log(usr + 500);