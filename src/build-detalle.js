 function toggleNavMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("nav-menu-show");
}
// Asigna el evento de clic a la función
document.querySelector("#nav-toggle").addEventListener("click", toggleNavMenu);