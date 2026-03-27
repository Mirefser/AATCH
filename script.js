(function() {

  console.log("✅ Скрипт загружен");

  let isRunning = false;
  let scriptInterval;

  // ===============================
  // Основная функция выполнения
  // ===============================
  async function executeTasks() {

      // 1️⃣ Открываем сайдбар только если закрыт
      const sidebarToggle = document.querySelector('[data-qa-id="sidebar-tasks-moving-panel"]');
      const sidebarContent = document.querySelector('[data-qa-id="sidebar-tasks-content"]'); 
      // замените на реальный селектор контента, если другой

      if (sidebarToggle && sidebarContent && sidebarContent.offsetWidth === 0) {
          sidebarToggle.dispatchEvent(new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
          }));
          console.log("📂 Сайдбар открыт");
          return;
      }

      // 2️⃣ Галочка проверки
      const successMark = document.querySelector(
          '[data-qa-id="hint-mark-success"][data-qa-is-checked="false"]'
      );

      if (successMark) {
          successMark.click();
          console.log("✅ Галочка проверки нажата");
          return;
      }

      // 3️⃣ Кнопка "Выполнено"
      const doneButton = [...document.querySelectorAll('button')]
          .find(btn => btn.textContent.trim().includes('Выполнено'));

      if (doneButton && !doneButton.disabled) {
          doneButton.click();
          console.log("✅ Нажато 'Выполнено'");
          return;
      }

      // 4️⃣ Кнопка "Следующий уровень" или "Следующий ученик"
      const nextButton = [...document.querySelectorAll('button')]
          .find(btn => {
              const text = btn.textContent.trim();
              return text.includes('Следующий уровень') || text.includes('Следующий ученик');
          });

      if (nextButton && !nextButton.disabled) {
          nextButton.click();
          console.log("➡️ Переход дальше");
          return;
      }

  }

  // ===============================
  // Функции управления скриптом
  // ===============================
  function startScript() {
      if (!isRunning) {
          scriptInterval = setInterval(executeTasks, 800);
          isRunning = true;
          toggleButton.textContent = "Остановить скрипт";
          toggleButton.style.backgroundColor = "#f44336";
          console.log("🚀 Скрипт запущен");
      }
  }

  function stopScript() {
      if (isRunning) {
          clearInterval(scriptInterval);
          isRunning = false;
          toggleButton.textContent = "Запустить скрипт";
          toggleButton.style.backgroundColor = "#4CAF50";
          console.log("⛔ Скрипт остановлен");
      }
  }

  function toggleScript() {
      isRunning ? stopScript() : startScript();
  }

  // ===============================
  // Создаем кнопку управления
  // ===============================
  const toggleButton = document.createElement('button');
  toggleButton.textContent = "Запустить скрипт";
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '10px';
  toggleButton.style.left = '150px';
  toggleButton.style.zIndex = 10000;
  toggleButton.style.padding = '10px 15px';
  toggleButton.style.backgroundColor = '#4CAF50';
  toggleButton.style.color = 'white';
  toggleButton.style.border = 'none';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.borderRadius = '6px';
  toggleButton.style.fontWeight = 'bold';
  toggleButton.addEventListener('click', toggleScript);

  // ===============================
  // Кнопка скрыть/показать
  // ===============================
  const hideButton = document.createElement('button');
  hideButton.textContent = 'Скрыть/Показать';
  hideButton.style.position = 'fixed';
  hideButton.style.bottom = '10px';
  hideButton.style.left = '10px';
  hideButton.style.zIndex = 10000;
  hideButton.style.padding = '10px 15px';
  hideButton.style.backgroundColor = '#6e6e6e';
  hideButton.style.color = 'white';
  hideButton.style.border = 'none';
  hideButton.style.cursor = 'pointer';
  hideButton.style.borderRadius = '6px';
  hideButton.addEventListener('click', () => {
      const isVisible = toggleButton.style.display !== 'none';
      toggleButton.style.display = isVisible ? 'none' : 'block';
  });

  // Добавляем на страницу
  document.body.appendChild(hideButton);
  document.body.appendChild(toggleButton);

})();
