const phrases = ["AWS infrastructure", "Dockerized applications", "Kubernetes deployments", "Linux troubleshooting", "cloud-ready solutions"];
const typingEl = document.getElementById("typing-text");
let phraseIndex = 0, charIndex = 0, deleting = false;
function typePhrase() {
  if (!typingEl) return;
  const phrase = phrases[phraseIndex];
  typingEl.textContent = phrase.slice(0, charIndex);
  let delay = deleting ? 38 : 75;
  if (!deleting && charIndex < phrase.length) charIndex++;
  else if (deleting && charIndex > 0) charIndex--;
  else if (!deleting) { deleting = true; delay = 1200; }
  else { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 350; }
  setTimeout(typePhrase, delay);
}
typePhrase();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
