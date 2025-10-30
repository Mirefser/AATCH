(function() {
  // Выводим сообщение в консоль сразу после запуска скрипта
  console.log("Успешный запуск скрипта");

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
          startScript();  // Запускаем скрипт сразу
          button.textContent = "Остановить скрипт";  // Меняем текст кнопки на "Остановить"
          button.style.backgroundColor = '#f44336';  // Красный цвет кнопки
          isRunning = true;
      }
  }

  // Функция для выполнения всех действий
  // Функция для выполнения всех действий
async function executeTasks() {
    // Открываем сайдбар
    const sidebarButton = document.querySelector('[data-qa-id="sidebar-tasks"]');
    if (sidebarButton && sidebarButton.getAttribute('data-qa-sidebar-tasks-opened') === 'false') {
        sidebarButton.click(); // Открываем сайдбар
    }

    // ✅ Кликаем по галочке проверки задания (data-qa-id="hint-mark-success")
    const successMark = document.querySelector('[data-qa-id="hint-mark-success"][data-qa-is-checked="false"]');
    if (successMark) {
        successMark.click();
        console.log('✅ Клик по кнопке проверки задания выполнен.');
    } else {
        console.log('❌ Кнопка проверки задания не найдена или уже отмечена.');
    }

    // Кликаем по галочке или кнопке "Выполнено"
    const button1 = document.querySelector('.sc-845wrv-1.kRFQHa.sc-75y806-1.eCyYUA');
    if (button1 && !button1.disabled) {
        button1.click();
        console.log('✅ Кнопка "Выполнено" нажата (вариант 1)');
    } else {
        const button2 = document.querySelector('.sc-18mjqm9-0.cUYUHy');
        if (button2 && !button2.disabled) {
            button2.click();
            console.log('✅ Кнопка "Выполнено" нажата (вариант 2)');
        } else {
            console.log('⚠️ Кнопка "Выполнено" не найдена или отключена.');
        }
    }

    // Кликаем на кнопку "Следующий ученик"
    const nextStudentButton = document.querySelector('.sc-845wrv-1.hVAjTF.sc-1gnrpnh-1.igLLZz');
    if (nextStudentButton) {
        nextStudentButton.click();
        console.log('➡️ Переход к следующему ученику.');
    }

    // Клик по первой ссылке в попапе
    const popup = document.querySelector('.sc-bgysft-4.bGYnTZ');
    if (popup) {
        const firstLink = popup.querySelector('a');
        if (firstLink) {
            firstLink.click();
            console.log('🔗 Первая ссылка в попапе нажата.');
        }
        const buttons = popup.querySelectorAll('a.sc-bgysft-4.bGYnTZ');
        if (buttons.length > 0) {
            const lastButton = buttons[buttons.length - 1];
            lastButton.click();
            console.log('🔘 Последняя кнопка в попапе нажата.');
        }
    }
}


  // Функция для старта выполнения задач с интервалом
  function startScript() {
      scriptInterval = setInterval(executeTasks, 500); // Уменьшаем интервал до 500ms
  }

  // Создаем кнопку для включения/выключения скрипта
  const button = document.createElement('button');
  button.textContent = "Запустить скрипт";
  button.style.position = 'absolute';
  button.style.bottom = '10px';
  button.style.left = '150px';  // Размещаем кнопку справа
  button.style.zIndex = 1000;
  button.style.padding = '10px';
  button.style.backgroundColor = '#4CAF50';  // Красный цвет по умолчанию
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '5px';

  // Обработчик для кнопки
  button.addEventListener('click', toggleScript);

  // Создаем инструкцию
  const instructionDiv = document.createElement('div');
  instructionDiv.textContent = 'Нажмите на кнопку чтобы начать или остановить скрипт.';
  instructionDiv.style.position = 'absolute';
  instructionDiv.style.bottom = '50px';
  instructionDiv.style.left = '10px';
  instructionDiv.style.zIndex = 999;
  instructionDiv.style.backgroundColor = '#fff';
  instructionDiv.style.padding = '10px';
  instructionDiv.style.border = '1px solid #ccc';

  // Функция для скрытия/показа кнопки и инструкции
  function toggleVisibility() {
      const isVisible = button.style.display !== 'none';
      button.style.display = isVisible ? 'none' : 'block';
      instructionDiv.style.display = isVisible ? 'none' : 'block';
  }

  // Добавляем кнопки скрытия/показа
  const hideButton = document.createElement('button');
  hideButton.textContent = 'Скрыть/Показать';
  hideButton.style.position = 'absolute';
  hideButton.style.bottom = '10px';
  hideButton.style.left = '10px';  // Размещаем кнопку слева от кнопки запуска
  hideButton.style.zIndex = 1000;
  hideButton.style.padding = '10px';
  hideButton.style.backgroundColor = '#6e6e6e';
  hideButton.style.color = 'white';
  hideButton.style.border = 'none';
  hideButton.style.cursor = 'pointer';
  hideButton.style.borderRadius = '5px';
  hideButton.addEventListener('click', toggleVisibility);

  // Добавляем на страницу
  document.body.appendChild(hideButton);
  document.body.appendChild(button);
  document.body.appendChild(instructionDiv);
})();

