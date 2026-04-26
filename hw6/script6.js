function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const operators = ['+', '-', '*', '/'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  if (operator === '/') {
    const result = getRandomInt(1, 20);
    a = result * b;
  }

  const taskElement = document.getElementById('task');
  taskElement.textContent = `${a} ${operator} ${b}`;

  let correctAnswer;
  switch (operator) {
    case '+': correctAnswer = a + b; break;
    case '-': correctAnswer = a - b; break;
    case '*': correctAnswer = a * b; break;
    case '/': correctAnswer = a / b; break;
  }
  return correctAnswer;
}

let currentCorrectAnswer = generateTask();
function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  const resultElement = document.getElementById('result');

  if (isNaN(userAnswer)) {
    resultElement.textContent = 'Пожалуйста, введите число!';
       return;
  }

  if (userAnswer === currentCorrectAnswer) {
    resultElement.textContent = 'Верно! Отличная работа! 🎉';
    currentCorrectAnswer = generateTask();
    document.getElementById('answer').value = '';
  } else {
    resultElement.textContent = `Ошибка. Правильный ответ: ${currentCorrectAnswer}`;
  }
}

//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
   if (numbs[i] == 10) break;
   console.log(numbs[i]);
}

//задание 2

const numbers = [1, 5, 4, 10, 0, 3];
const index = numbers.indexOf(4);
console.log("Индекс значения 4:", index);

//Задание 3

const num = [1, 3, 5, 10, 20];
const resultString = num.join(' ');
console.log(resultString);

//Задание 4

const numb = [];
for (let i = 0; i < 5; i++) { 
    const row = [];
    for (let j = 0; j < 5; j++) {
        row.push(1);
    }
    numb.push(row);
    console.log (numb);
}

//Задание 5
const number = [1, 1, 1];
number.push(2 ,2 , 2);
console.log(number);

//Задание 6

const arr = [9, 8, 7, 'a', 6, 5];
const sortedArr = arr.sort();
const filteredArr = sortedArr.filter(item => item !== 'a');
console.log(filteredArr);

//Задание 7

const figure = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число из массива");
const userGuess = parseInt(userInput);
if (figure.includes(userGuess)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//Задание 8

const letter = 'abcdef';
const result = letter.split('').reverse().join('');
console.log(result);

//Задание 9

const multiArray = [
[1, 2, 3], 
[4, 5, 6]];
const flatArray = [...multiArray[0], ...multiArray[1]];
console.log(flatArray);

//Задание 10

const multiArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < multiArr.length - 1; i++) {
const current = multiArr[i]; 
const next = multiArr[i + 1]; 
const sum = current + next; 
 console.log(`Сумма элементов №${i} и №${i + 1}: ${sum}`);}

 // Задание 11
function squareNumbers(arr){
    return arr.map(num => num * num);
}
 const wages = [2, 3, 4, 6, 8];
 const updatedWages = squareNumbers(wages);
console.log (updatedWages);

//Задание 12

function product(arr){
    return arr.map(str => str.length);
}
 const words = ["apple", "banana", "cherry"];
const lengths = product(words);
console.log(lengths); 

// Заданте 13

function NegativeNumbers (numbers) {
  return numbers.filter(function(number) {
     return number < 0;
    });
}
const mixeNumber = [5, -3, 0, -15, 20, -1];
const resultres = NegativeNumbers(mixeNumber);
console.log(resultres); 

//Задание 14

const baselArray = [];
 for (let i = 0; i < 10; i++) {  
 const randomNumber = Math.floor(Math.random() * 10);
    baselArray.push(randomNumber);
}
const numbersArray = baselArray.filter(number => number % 2 === 0);
console.log("Исходный массив:", baselArray);
console.log("Массив с чётными значениями:", numbersArray);

//Задание 15

const oneNumber = [];
const arrayLength = 6;
const maxNumber = 10;

for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    oneNumber.push(randomNumber);
}
let sum = 0;
for (const number of oneNumber) {
    sum += number;
}
const average = sum / oneNumber.length;
console.log("Сгенерированный массив:", oneNumber);
console.log("Сумма элементов:", sum);
console.log("Среднее арифметическое:", average);