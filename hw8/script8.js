 const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
        const questionText = quiz[i].question + "\n\n" + quiz[i].options.join("\n");
        const userAnswer = prompt(questionText);
        if (userAnswer !== null && parseInt(userAnswer) === quiz[i].correctAnswer) {
            score++;
        }
    }
    alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов.");
