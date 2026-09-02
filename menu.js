const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const year = document.querySelector("#current-year");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  mobileNav?.classList.remove("is-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileNav?.classList.toggle("is-open", !isOpen);
});

mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

if (year) year.textContent = String(new Date().getFullYear());
