// ===============================
// Boot Screen
// ===============================

const bootText = document.getElementById("boot-text");
const bootScreen = document.getElementById("boot-screen");
const portfolio = document.getElementById("portfolio");

const lines = [
  "> Initializing Digital Archive...",
  "> Loading Portfolio...",
  "> Loading Projects...",
  "> Connecting to VIDLYRA...",
  "> Authentication Successful",
  "> ACCESS GRANTED"
];

let line = 0;
let character = 0;

function typeWriter() {

  if (line < lines.length) {

    if (character < lines[line].length) {

      bootText.textContent += lines[line].charAt(character);

      character++;

      setTimeout(typeWriter, 30);

    } else {

      bootText.textContent += "\n";

      line++;
      character = 0;

      setTimeout(typeWriter, 300);

    }

  } else {

    setTimeout(() => {

      bootScreen.style.display = "none";
      portfolio.style.display = "block";

    }, 800);

  }

}

window.onload = typeWriter;


// ===============================
// Random Glitch Animation
// ===============================

const glitch = document.querySelector(".glitch");

setInterval(() => {

  if (!glitch) return;

  glitch.classList.add("active");

  setTimeout(() => {

    glitch.classList.remove("active");

  }, 200);

}, 5000);
