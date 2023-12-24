 function toggleNavMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("nav-menu-show");
}
document.querySelector("#nav-toggle").addEventListener("click", toggleNavMenu);


