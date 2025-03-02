(function() {
  console.log("Успешный запуск скрипта");

  let isRunning = false;
  let scriptInterval;

  function toggleScript() {
      if (isRunning) {
          clearInterval(scriptInterval);
          button.textContent = "Запустить скрипт";
          button.style.backgroundColor = '#4CAF50';
          isRunning = false;
      } else {
          startScript();
          button.textContent = "Остановить скрипт";
          button.style.backgroundColor = '#f44336';
          isRunning = true;
      }
  }

  async function executeTasks() {
      // (Ваш код для выполнения задач)
  }

  function startScript() {
      scriptInterval = setInterval(executeTasks, 500);
  }

  function handleVisibilityChange() {
      if (document.hidden) {
          clearInterval(scriptInterval);
      } else {
          if (isRunning) {
              startScript();
          }
      }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

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
})();
