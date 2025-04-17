// Toggle dark mode
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Alert on resume download
const resumeLink = document.getElementById("resume-link");
resumeLink.addEventListener("click", () => {
  alert("Thanks for downloading my resume!");
});

const typingText = document.getElementById("typing-text");
const words = ["Computer Science Student", "Developer", "Researcher"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  typingText.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
