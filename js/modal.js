const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');

document.getElementById('openModal').addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10); // запускаємо анімацію після короткої затримки
});

document.getElementById('closeModal').addEventListener('click', function() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // затримка дорівнює тривалості transition
});