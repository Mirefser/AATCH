(function() {
    // Переменная для отслеживания состояния скрипта
    let isRunning = false;
    let scriptInterval;
  
    // Функция для включения и выключения скрипта
    function toggleScript() {
      if (isRunning) {
        clearInterval(scriptInterval);  // Останавливаем скрипт
        button.textContent = "Запустить скрипт";  // Меняем текст кнопки на "Запустить"
        button.style.backgroundColor = '#4CAF50';  // Зеленый цвет кнопки
        isRunning = false;
      } else {
        startScript();  // Запускаем скрипт
        button.textContent = "Остановить скрипт";  // Меняем текст кнопки на "Остановить"
        button.style.backgroundColor ='#f44336';  // Красный цвет кнопки
        isRunning = true;
      }
    }
  
    // Функция для выполнения всех действий
    function executeTasks() {
      // Открываем сайдбар
      const sidebarButton = document.querySelector('[data-qa-id="sidebar-tasks"]');
      if (sidebarButton && sidebarButton.getAttribute('data-qa-sidebar-tasks-opened') === 'false') {
        sidebarButton.click(); // Открываем сайдбар
      }
  
      // Ждем, пока сайдбар откроется и кликаем по галочке или по кнопке "Выполнено"
      setTimeout(() => {
        const checkbox = document.querySelector('[data-qa-id="hint-mark-success"][data-qa-is-checked="false"]');
        if (checkbox) {
          checkbox.click(); // Нажимаем на галочку
        } else {
          const doneButton = document.querySelector('button.sc-jtQUzJ.bsYUtO');
          if (doneButton) {
            doneButton.click(); // Нажимаем на кнопку "Выполнено"
          }
        }
  
        setTimeout(() => {
          const nextStudentButton = document.querySelector('button.sc-jtQUzJ');
          if (nextStudentButton) {
            nextStudentButton.click(); // Нажимаем на кнопку "Следующий ученик"
          }
        }, 500); // Пауза 500ms
      }, 300); // Пауза 300ms
  
      // Функция для проверки и выполнения действия с последней кнопкой в попапе
      function clickLastButtonInPopup() {
        const popup = document.querySelector('.sc-gcfzXs.CYjoi');
        if (popup) {
          setTimeout(() => {
            const buttons = popup.querySelectorAll('a.sc-grPSDR.ktOTYQ');
            const lastButton = buttons[buttons.length - 1];
            if (lastButton) {
              lastButton.click();
            }
          }, 500); // Пауза 500ms
        }
      }
  
      clickLastButtonInPopup();
    }
  
    // Функция для старта выполнения задач с интервалом
    function startScript() {
      scriptInterval = setInterval(executeTasks, 1000); // Запуск с интервалом 1 секунда
    }
  
    // Создаем кнопку для включения/выключения скрипта
    const button = document.createElement('button');
    button.textContent = "Запустить скрипт";
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.left = '10px';
    button.style.zIndex = 1000;
    button.style.padding = '10px';
    button.style.backgroundColor = '#f44336';  // Красный цвет по умолчанию
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '5px';
  
    // Обработчик для кнопки
    button.addEventListener('click', toggleScript);
  
    // Добавляем кнопку на страницу
    document.body.appendChild(button);
  
    // Инструкция на странице
    const instructionDiv = document.createElement('div');
    instructionDiv.textContent = 'Нажмите на кнопку чтобы начать или остановить скрипт.';
    instructionDiv.style.position = 'fixed';
    instructionDiv.style.bottom = '50px';
    instructionDiv.style.left = '10px';
    instructionDiv.style.zIndex = 999;
    instructionDiv.style.backgroundColor = '#fff';
    instructionDiv.style.padding = '10px';
    instructionDiv.style.border = '1px solid #ccc';
    document.body.appendChild(instructionDiv);
  })();
  