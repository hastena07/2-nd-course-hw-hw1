function flipText() {
       
        const input = document.getElementById('inputText').value;
        const flipped = input.split('').reverse().join('');
        document.getElementById('result').innerText = flipped;
    }

    // Задание 1

const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);

//Задание 2

function filterByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    return arr.filter(function(item) {  
    return item.toLowerCase().startsWith(lowerPrefix);
    });
}
const words = ['шкаф', 'комод', 'тумба', 'кровать', 'стул'];
const prefix = 'к';
const result = filterByPrefix(words, prefix);
console.log(result); 

//Задание 3

const number = 32.58884;
const floorResult = Math.floor(number);
const ceilResult = Math.ceil(number);
const roundResult = Math.round(number);

console.log("До меньшего целого:", floorResult); 
console.log("До большего целого:", ceilResult); 
console.log("До ближайшего целого:", roundResult); 

//Задание 4

const numbers = [52, 53, 49, 77, 21, 32];
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log("Минимальное значение:", minValue); 
console.log("Максимальное значение:", maxValue); 

//Задание 5

function printRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Случайное число:", randomNumber);
}
printRandomNumber();

//Задание 6

function generateRandom(num) {
    if (!Number.isInteger(num)) {
        console.error("Ошибка: число должно быть целым.");
        return [];
    }
    const arrayLength = Math.floor(num / 2);
    const resultRandom = [];
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (num + 1));
        resultRandom.push(randomNumber);
    }
    return resultRandom;
}
const inputNumber = 30;
const randomArray = generateRandom(inputNumber);

console.log(`Входное число: ${inputNumber}`);
console.log(`Сгенерированный массив (длина ${inputNumber / 2}):`, randomArray);

//Задание 7

function getRandom(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        console.error("Ошибка: оба аргумента должны быть целыми числами.");
        return NaN; 
    }

    const lower = Math.min(min, max);
    const upper = Math.max(min, max);

    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log("Случайное число от 1 до 10:", getRandom(1, 10));

//Задание 8

let currentDate = new Date();
console.log(currentDate);

//Задание 9

const curDate = new Date();


const futureDate = new Date(curDate);
futureDate.setDate(curDate.getDate() + 73);

console.log("Текущая дата:", curDate.toLocaleDateString());
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

//Задание 10

function formatDate(date) {
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const days = [
        'воскресенье', 'понедельник', 'вторник',
        'среда', 'четверг', 'пятница', 'суббота'
    ];

    
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth(); 
    const year = date.getFullYear();
    const dayOfWeekIndex = date.getDay(); 
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dateString = `Дата: ${dayOfMonth} ${months[monthIndex]} ${year} — это ${days[dayOfWeekIndex]}.`;

    const timeString = `Время: ${hours}:${minutes}:${seconds}`;

    return `${dateString}\n${timeString}`;
}
const now = new Date(); 
console.log(formatDate(now));