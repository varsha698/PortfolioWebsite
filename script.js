// Typing effect
const text = "Turning ideas into impact with code.";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}
window.onload = typeText;

// Dark mode toggle
const toggleDark = document.getElementById("toggle-dark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Reveal animations for sections
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
