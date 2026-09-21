const nav = document.getElementById("nav");
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("menu");
const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
});

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".gallery button").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.querySelector("img").alt;
    lightbox.showModal();
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
