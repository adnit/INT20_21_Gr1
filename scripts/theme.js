var today = new Date();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    drawMoon(darkMode);
  } else drawSun(darkMode);
}
function darkModeTime() {
  let hour = 19;
  if (hour >= 17 || hour <= 6) {
    toggleDarkMode();
  } else {
  }
}

// Dark Mode Button

let darkMode = document.getElementById("darkModeBtn");

function clearCanvas(canvas) {
  let c = canvas.getContext("2d");
  canvas.width = 150;
  canvas.height = 150;
}

let a = 15,
  b = 5,
  x = 95,
  y = 140;

function drawSun(canvas) {
  clearCanvas(canvas);
  let c = canvas.getContext("2d");
  c.filter = "blur(1px)";

  c.beginPath();
  c.arc(75, 75, 45, 0, 2 * Math.PI);
  c.fillStyle = "#FC9601";
  c.fill();
}

function drawEarth(canvas, color, font) {
  let c = canvas.getContext("2d");
  c.globalCompositeOperation = "destination-over";
  c.filter = "blur(1px)";
  c.beginPath();
  c.moveTo(a, x);
  c.lineTo(150 - a, x);
  c.lineTo(150 - b, y);
  c.lineTo(b, y);
  c.lineTo(a, x);
  c.fillStyle = color;
  c.fill();
  c.filter = "blur(0px)";
  c.font = "20px sans-serif";
  c.globalCompositeOperation = "source-over";
  c.textAlign = "center";
  switch (font) {
    case 0:
      c.fillStyle = "black";
      c.fillText("Dark", 75, 75);
      c.fillText("Mode", 75, 95);
      break;

    case 1:
      c.fillText("Light", 75, 75);
      c.fillText("Mode", 75, 95);
      break;
    default:
  }
}

function drawMoon(canvas) {
  clearCanvas(canvas);
  let c = canvas.getContext("2d");
  c.beginPath();
  c.arc(75, 75, 44, 0, 2 * Math.PI);
  c.fillStyle = "#f0c420";
  c.fill();
  c.beginPath();
  c.globalCompositeOperation = "destination-out";
  c.arc(100, 75, 45, 0, 2 * Math.PI, true);
  c.fillStyle = "#121212";
  c.fill();
}

darkMode.addEventListener("mouseover", () => {
  checkDarkMode()
    ? drawEarth(darkMode, "#628395", 1)
    : drawEarth(darkMode, "#628395", 0);
});

function checkDarkMode() {
  return document.body.classList.contains("dark-mode");
}

darkMode.addEventListener("mouseout", () => {
  checkDarkMode() ? drawMoon(darkMode) : drawSun(darkMode);
});

darkMode.addEventListener("click", () => {
  toggleDarkMode();
  checkDarkMode()
    ? drawEarth(darkMode, "#628395", 1)
    : drawEarth(darkMode, "#628395", 0);
});

darkModeTime();
