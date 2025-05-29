document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.getElementById('mobileMenu');

  burger.addEventListener('click', function () {
    menu.classList.toggle('show');

    // Міняємо символ кнопки
    if (menu.classList.contains('show')) {
      burger.innerHTML = '←';
      burger.setAttribute('aria-label', 'Закрити меню');
    } else {
      burger.innerHTML = '☰';
      burger.setAttribute('aria-label', 'Відкрити меню');
    }
  });
});