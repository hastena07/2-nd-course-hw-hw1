function playGame() {
    const userChoice = prompt("Ваш выбор: камень, ножницы или бумага?").toLowerCase();
    const choices = ["камень", "ножницы", "бумага"];
    if (!choices.includes(userChoice)) {
        alert("Неверный выбор! Введите: камень, ножницы или бумага.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!🔥";
    } else {
        result = "Вы проиграли!😫"; 
    }
    document.getElementById("result").innerHTML = `
        <p>Ваш выбор: ${userChoice}</p>
        <p>Выбор компьютера: ${computerChoice}</p>
        <p><strong>${result}</strong></p>
    `;
}

//Задание 1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// Задание 2

function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive));
const peoples= [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(peoples, isMale));

//Задание 3

const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
    clearInterval(intervalId); 
    console.log("30 секунд прошло");
}, 30000);

//зАДАНИЕ 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));