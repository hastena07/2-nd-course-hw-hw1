 // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guessInput = document.getElementById('userGuess');
      const messageDiv = document.getElementById('message');
      const userGuess = parseInt(guessInput.value);
      attempts++;

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDiv.textContent = 'Пожалуйста, введите целое число от 1 до 100.';
        return;
      }

      if (userGuess === randomNumber) {
        messageDiv.textContent = `🎉 Поздравляю! Вы угадали число за ${attempts} попыток!`;
        guessInput.disabled = true;
      } else if (userGuess < randomNumber) {
        messageDiv.textContent = 'Загаданное число больше.';
      } else {
        messageDiv.textContent = 'Загаданное число меньше.';
      }
     
      guessInput.value = '';
    }

    // Задание 1

    function getMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(getMin(7, 4)); // 4
console.log(getMin(6, 6)); // 6
console.log(getMin(-2, 3)); // -2

//Задание 2

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

console.log(checkEvenOrOdd(4));  
console.log(checkEvenOrOdd(7));  
console.log(checkEvenOrOdd(0));  

//Задание 3

function printSquare(number) {
    const square = number * number;
    console.log(square);
}
printSquare(9); 

function getSquare(number) {
    return number * number;
}
printSquare(6); 
const result = getSquare(6);
console.log(result); 

//Задание 4

function checkAge() {

  const ageInput = prompt("Сколько вам лет?");

  const age = parseInt(ageInput);

  if (isNaN(age) || age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
checkAge();

//Задание 5

function multiplyNumbers(a, b) {
   
    const num1 = Number(a);
    const num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }

    return num1 * num2;
}

console.log(multiplyNumbers(3, 7));      
console.log(multiplyNumbers(2, "5"));   
console.log(multiplyNumbers("a", 7));    
console.log(multiplyNumbers(null, 8)); 

//Задание 6

function cubeNumber(n) {
    
    const userNumber = Number(n);

    if (isNaN(userNumber)) {
        return 'Переданный параметр не является числом';
    }
    const cube = userNumber ** 3;
    return `${userNumber} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}

//Задание 7

const circle1 = {
  radius: 3,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 6,
  getArea: function() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

console.log("Параметры для circle1 (радиус = 3):");
console.log("Площадь:", circle1.getArea().toFixed(2)); 
console.log("Периметр:", circle1.getPerimeter().toFixed(2)); 

console.log("Параметры для circle2 (радиус = 6):");
console.log("Площадь:", circle2.getArea().toFixed(2));
console.log("Периметр:", circle2.getPerimeter().toFixed(2));