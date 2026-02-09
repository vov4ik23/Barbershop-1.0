const btn = document.querySelector('.burgerMenu');
const overlay = document.querySelector('.overlay');

if (btn && overlay) {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    overlay.classList.toggle('overlay--on');
  });
}