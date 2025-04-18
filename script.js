// Typing effect
const text = "Empowering people through code & creativity.";
let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
window.onload = type;
