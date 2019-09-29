const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const hamburgerToggle = document.querySelector(".toggle");
const navbarBrand = document.querySelector(".navbar-brand")
const navText = document.querySelector(".txt");

 hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburgerToggle.classList.toggle("active");
  navbarBrand.classList.toggle("active");
  navText.classList.toggle("inactive");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});