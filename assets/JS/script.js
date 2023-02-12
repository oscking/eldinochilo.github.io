var scrollBtn = document.getElementById("scrollBtn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", function() {
    window.scroll({
      top: 1500, 
      left: 0, 
      behavior: 'smooth'
    });
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
menu.classList.toggle('active');
});