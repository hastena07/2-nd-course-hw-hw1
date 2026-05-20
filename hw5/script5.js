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

   