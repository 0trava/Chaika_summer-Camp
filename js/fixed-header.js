window.addEventListener('scroll', function () {
  const header = document.getElementById('stuck_container');
  if (window.innerWidth >= 1024) { // тільки для десктопа
    if (window.scrollY > 100) {
      header.classList.add('stuck');
      document.body.classList.add('with-stuck-header');
    } else {
      header.classList.remove('stuck');
      document.body.classList.remove('with-stuck-header');
    }
  }
});