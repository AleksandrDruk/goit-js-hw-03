/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// function resultType() {
//   let entertype = Number(prompt('Enter your number'));
//   if (entertype === 10) {
//     return 'Good';
//   } else {
//     return 'Not Good';
//   }
// }
// const result = resultType();
// console.log(result);

/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/

// function balanceCash(balance) {
//   if (balance > 0) {
//     return 'Positive balance';
//   } else {
//     return 'Negative balance';
//   }
// }
// console.log(balanceCash(0));

/*
? В залежності від значення в змінній login, потрібно формувати відповідне повідомлення.
? Співробітник - Привіт
? Директор - Вітаю
? '' - Немає логіну
? В інших випадках повідомлення має бути порожнім.
*/

// function messageUser(login) {
//   if (login === 'Cотрудник') {
//     return 'Привет';
//   } else if (login === 'Директор') {
//     return 'Здравствуйте';
//   } else if (login === '') {
//     return 'Нет логина';
//   } else {
//     return '';
//   }
// }
// let userLogin = prompt('Enter your login'); //То что ввел пользователь записывается в userLogin
// console.log(messageUser(userLogin)); //Дальше то что записывается в userLogin передается в функцию и сравнивается

// function messageUser() {
//   let userLogin = prompt('Enter your login');
//   if (userLogin === 'Cотрудник') {
//     return 'Привет';
//   } else if (userLogin === 'Директор') {
//     return 'Здравствуйте';
//   } else if (userLogin === '') {
//     return 'Нет логина';
//   } else {
//     return '';
//   }
// }

// console.log(messageUser());

// Напишіть функцію isEven(number), яка приймає число і повертає рядок "Even", якщо число парне, і "Odd", якщо число непарне.

// function isEven(number) {
//   if (number % 2 === 0) {
//     return 'Even';
//   } else {
//     return 'Odd';
//   }
// }
// let usernumber = prompt('Enter your number');
// console.log(isEven(usernumber));

// Напишіть функцію isPositive(number), яка приймає число і повертає рядок "Positive",
// якщо число додатнє, і "Negative", якщо число від'ємне або нуль. Використайте тернарний оператор.

// function isPositive(number) {
//   if (number > 0) {
//     return 'Positive';
//   } else if (number < 0) {
//     return 'Negative';
//   }
// }

// let result = prompt('Enter your number');
// console.log(isPositive(result));

// Напиши скрипт який підраховує загальну вартість покупки.
// Кількість товарів зберігається в змінній goods.
// Ціна кожного товару це випадкове число від 500 до 5000.
//  Записати суму в змінну totalPrice і вивести в консолі.

// let goods = 5;
// let valueProducts = Math.floor(Math.random() * (500 - 5000 + 1)) + 5000;
// let totalPrice = goods * valueProducts;
// console.log(totalPrice);

// let goods = 5;
// let totalPrice = 0;

// for (let i = 0; i < goods; i++) {
//   let valueProduct = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
//   totalPrice += valueProduct;
// }

// console.log(totalPrice);

//? За допомогою циклу for виведіть парні числа від 2 до 10.
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/
// let a = 20;
// let b = 50;
// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/*
? Напиши скрипт, який підраховує суму всіх парних чисел,
? які входять в діапазон чисел у змінних від min до max.
? Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/
// let min = 2;
// let max = 4;
// let total = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/
// let min = 1;
// let max = 100;
// let total = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }
// console.log(total);

function createArrayOfNumbers(min, max) {
  // Спочатку створюємо порожній масив
  const numbers = [];

  // Потім використовуємо цикл for для додавання кожного числа від min до max включно в масив
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  // Повертаємо наповнений масив
  return numbers;
}

console.log(createArrayOfNumbers(14, 17));
