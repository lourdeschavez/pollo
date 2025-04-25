const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Marcar sección activa
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    navLinks.classList.remove("show"); // cerrar al hacer clic
  });
});