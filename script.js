// Typing effect
const text = "Turning code into impact ✨";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
window.onload = typing;

// Theme switcher
const themeSelect = document.getElementById("theme");
themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value;
});

// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// "Now Playing" (demo version)
function updateNowPlaying() {
  const trackInfo = document.getElementById("track-info");
  // This would be replaced with a real API or Spotify integration
  const tracks = [
    "🎶 The Algorithm - Carpenter Brut",
    "🎵 Daylight - David Kushner",
    "🎧 Lost in the Fire - Gesaffelstein x The Weeknd",
    "🎼 Lo-Fi Chill Mix – Beats to relax/study to"
  ];
  const current = tracks[Math.floor(Math.random() * tracks.length)];
  trackInfo.textContent = current;
}
updateNowPlaying();
setInterval(updateNowPlaying, 20000); // update every 20 sec

// Scroll to top button (optional)
// Uncomment to add:
// const scrollTopBtn = document.getElementById("scrollTopBtn");
// window.onscroll = () => {
//   scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
// };
// scrollTopBtn.onclick = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };

// Add fun Konami Code Easter egg (optional)
// const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
// let konamiIndex = 0;
// document.addEventListener("keydown", (e) => {
//   if (e.key === konamiCode[konamiIndex]) {
//     konamiIndex++;
//     if (konamiIndex === konamiCode.length) {
//       alert("🎉 You found the secret!");
//       konamiIndex = 0;
//     }
//   } else {
//     konamiIndex = 0;
//   }
// });
