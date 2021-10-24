const header = document.querySelector("header"),
  navLinks = document.querySelector(".nav-links");
document.addEventListener("click", (e) => {
  e.target.matches(".nav-links") ||
    (e.target.matches(".bar")
      ? navLinks.classList.toggle("active")
      : e.target.matches(".nav-links li a")
      ? setTimeout(() => {
          navLinks.classList.remove("active");
        }, 500)
      : navLinks.classList.remove("active"));
});
const scrollToTop = document.getElementById("scroll-to-top");
(window.onscroll = () => {
  this.scrollY > 40
    ? ((header.className = "active"), scrollToTop.classList.add("active"))
    : (header.classList.remove("active"),
      scrollToTop.classList.remove("active"));
}),
  (scrollToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
const sections = document.querySelectorAll(".nav-section"),
  links = document.querySelectorAll(".nav-links li a");
window.addEventListener("scroll", () => {
  sections.forEach((e) => {
    window.scrollY >= e.offsetTop - 0.15 * e.offsetHeight &&
      window.scrollY < e.offsetTop + e.offsetHeight - 0.15 * e.offsetHeight &&
      (links.forEach((e) => e.classList.remove("active")),
      [...sections].find((s) => s.id === e.id),
      links.forEach((s) => {
        s.hash.slice(1) === e.id && s.classList.add("active");
      }));
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    navLinks.classList.remove("active");
  }
  if (e.code === "Enter") {
    navLinks.classList.add("active");
  }
});
