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

