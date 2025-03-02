(function() {
  console.log("Успешный запуск скрипта");

  let isRunning = false;
  let scriptInterval;
  let timerInterval;
  let seconds = 0; // Секунды для секундомера

  function toggleScript() {
      if (isRunning) {
          clearInterval(scriptInterval);
          clearInterval(timerInterval); // Останавливаем скрипт, но таймер продолжает работать
          button.textContent = "Запустить скрипт";
          button.style.backgroundColor = '#4CAF50';
          isRunning = false;
      } else {
          startScript();
          startTimer(); // Запускаем секундомер
          button.textContent = "Остановить скрипт";
          button.style.backgroundColor = '#f44336';
          isRunning = true;
      }
  }

  async function executeTasks() {
      // Ваш код для выполнения задач
  }

  function startScript() {
      scriptInterval = setInterval(executeTasks, 500);
  }

  // Функция для работы секундомера
  function startTimer() {
      timerInterval = setInterval(() => {
          seconds++;
          const minutes = Math.floor(seconds / 60);
          const displaySeconds = seconds % 60;
          timerDisplay.textContent = `Время работы: ${minutes}m ${displaySeconds}s`;
      }, 1000); // Обновление каждую секунду
  }

  // Убираем слушатель на изменение видимости вкладки, чтобы таймер не останавливался
  // document.addEventListener("visibilitychange", handleVisibilityChange);

  const button = document.createElement('button');
  button.textContent = "Запустить скрипт";
  button.style.position = 'absolute';
  button.style.bottom = '10px';
  button.style.left = '150px';
  button.style.zIndex = 1000;
  button.style.padding = '10px';
  button.style.backgroundColor = '#f44336';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '5px';
  button.addEventListener('click', toggleScript);

  // Создаем элемент для отображения времени работы
  const timerDisplay = document.createElement('div');
  timerDisplay.textContent = 'Время работы: 0m 0s';
  timerDisplay.style.position = 'absolute';
  timerDisplay.style.bottom = '80px';
  timerDisplay.style.left = '10px';
  timerDisplay.style.zIndex = 999;
  timerDisplay.style.backgroundColor = '#fff';
  timerDisplay.style.padding = '10px';
  timerDisplay.style.border = '1px solid #ccc';

  const instructionDiv = document.createElement('div');
  instructionDiv.textContent = 'Нажмите на кнопку чтобы начать или остановить скрипт.';
  instructionDiv.style.position = 'absolute';
  instructionDiv.style.bottom = '50px';
  instructionDiv.style.left = '10px';
  instructionDiv.style.zIndex = 999;
  instructionDiv.style.backgroundColor = '#fff';
  instructionDiv.style.padding = '10px';
  instructionDiv.style.border = '1px solid #ccc';

  function toggleVisibility() {
      const isVisible = button.style.display !== 'none';
      button.style.display = isVisible ? 'none' : 'block';
      instructionDiv.style.display = isVisible ? 'none' : 'block';
      timerDisplay.style.display = isVisible ? 'none' : 'block'; // Скрыть/показать секундомер
  }

  const hideButton = document.createElement('button');
  hideButton.textContent = 'Скрыть/Показать';
  hideButton.style.position = 'absolute';
  hideButton.style.bottom = '10px';
  hideButton.style.left = '10px';
  hideButton.style.zIndex = 1000;
  hideButton.style.padding = '10px';
  hideButton.style.backgroundColor = '#6e6e6e';
  hideButton.style.color = 'white';
  hideButton.style.border = 'none';
  hideButton.style.cursor = 'pointer';
  hideButton.style.borderRadius = '5px';
  hideButton.addEventListener('click', toggleVisibility);

  document.body.appendChild(hideButton);
  document.body.appendChild(button);
  document.body.appendChild(instructionDiv);
  document.body.appendChild(timerDisplay);
})();
