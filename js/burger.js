const btn = document.querySelector(".openbtn");

if (btn) {
  btn.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("active");
  });
}   

document.querySelector('.BurgerMenu').addEventListener('click', function() {
  document.querySelector('.Overlay').classList.toggle('Overlay--on');
});