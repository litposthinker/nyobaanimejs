import anime from "animejs/lib/anime.es.js";

// alice to server
anime({
  targets: ".packageAlice",
  keyframes: [{ top: 225, left: 325 }, { top: 195 }, { top: 10, delay: 100 }],
  loop: true,
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: true,
});

// bob to trash
const packageBobTrash = anime({
  targets: ".packageBob",
  keyframes: [
    { top: 225, left: 325, opacity: 1 },
    { top: 195 },
    { top: 195, left: 0, delay: 100, opacity: 0 },
  ],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});

// bob to server
const packageBobServer = anime({
  targets: ".packageBob",
  opacity: 1,
  keyframes: [{ top: 225, left: 325 }, { top: 195 }, { top: 10, delay: 100 }],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});

const input = document.getElementsByTagName("input");
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (!input[0].value || !input[1].value) {
    return;
  }
  if (input[0].value === input[1].value) {
    packageBobTrash.play();
  } else {
    packageBobServer.play();
  }
});

for (let index = 0; index < input.length; index++) {
  input[index].addEventListener("input", () => {
    let value = input[index].value;
    if (!value) {
      return;
    }
    if (!!value.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)) {
      value = value.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    }
    const temp = value.match(/.{1,2}/g).join(":");
    input[index].value = temp.toUpperCase();
  });
}
