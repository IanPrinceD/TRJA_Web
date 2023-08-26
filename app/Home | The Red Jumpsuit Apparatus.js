// color changing navbar
const headerE1 = document.querySelector('.header');

window.addEventListener('scroll', () => {
 if (window.scrollY > 60) {
  headerE1.classList.add('header-scrolled');
 } else if (window.scrollY <= 60) {
  headerE1.classList.remove('header-scrolled');
 }
})
// responsive navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.links');

menu.onclick = () => {
 menu.classList.toggle('bx-x');
 navbar.classList.toggle('open');
}