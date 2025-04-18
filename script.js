// Typing effect
const text = "Aspiring Software Engineer | Mobile Dev | UX Enthusiast";
let index = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

// Theme toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
