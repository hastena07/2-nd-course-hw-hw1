//Задание !

let i=1;
let n=Number(prompt('Сколько раз Вам сказать привет?'));

while (i <= n) {
    alert('Привет');
    i++;
}

//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4

const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let name in obj) {
  console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5

let с = 1000;
let num = 0;

while (с >= 50) {
    с = с / 2;
    num++;
}

console.log("Результат:", с);
console.log("Количество итераций:", num);

// Задание 6

const firstFriday = 3;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Дополнительное задание 
// Задание 1

let k = 100;
let iterations = 0;
while (k >= 0) {
    k -= 7;
    iterations++;
}
console.log("Результат:", k);
console.log("Количество итераций:", iterations);

// Задание 2
let z=1;
const months = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
months.forEach((month, z) => {
  console.log(`${z + 1}) ${month}`);
});

// Задание 3

const book = {
   name: "Гарри Поттер",
   avtor: "Джоан Роулинг",
   year: 1997,
   genre: "fantazy"
};
for (let key in book) {
   console.log(`${key}: ${book[key]}`);
}

// Задание 4

const numbers = [];
for(let f=0; f<10; f++){
numbers.push(Math.floor(Math.random()*100)+1);
}
const minNumber = Math.min(...numbers);
console.log("Массив случайных чисел:", numbers);
console.log("Минимальное число в массиве:", minNumber);
