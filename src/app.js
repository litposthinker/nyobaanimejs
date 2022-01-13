import anime from "animejs/lib/anime.es.js";

// alice to server
const defaultAnime = anime({
  targets: ".package",
  keyframes: [
    { top: 225, left: 325 },
    { top: 10, delay: 100 },
  ],
  loop: true,
  duration: 3000,
  easing: "easeInOutQuad",
  autoplay: false,
});

document.getElementById("play").addEventListener("click", () => {
  defaultAnime.play();
  return;
});
document.getElementById("reset").addEventListener("click", () => {
  defaultAnime.reset();
  return;
});
// document.querySelector(".reset").onclick = defaultAnime.restart;
// document.querySelector(".reset").onclick = defaultAnime.pause;
