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
