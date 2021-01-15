var today = new Date();
let darkMode = document.getElementById('darkModeBtn');

function toggleDarkMode() {
  clearCanvas(darkMode);

  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    drawMoon(darkMode);
    sessionStorage.setItem('theme', 'dark');
  } else {
    drawSun(darkMode);
    sessionStorage.setItem('theme', 'light');
  }
}
function darkModeTime() {
  let theme = sessionStorage.getItem('theme');
  if (theme == 'dark') {
    toggleDarkMode();
    return;
  } else if (theme == 'light') {
    drawSun(darkMode);
    return;
  }
  console.log('test');
  let hour = today.getHours();
  if (hour >= 17 || hour <= 6) {
    toggleDarkMode();
  } else {
    drawSun(darkMode);
  }
}

// Dark Mode Button

function clearCanvas(canvas) {
  let c = canvas.getContext('2d');
  c.clearRect(0, 0, 150, 150);
  canvas.width = 150;
  canvas.height = 150;
}

let a = 15,
  b = 5,
  x = 95,
  y = 140;

function drawSun(canvas) {
  clearCanvas(darkMode);
  let c = canvas.getContext('2d');
  c.filter = 'blur(1px)';
  c.beginPath();
  c.arc(75, 75, 45, 0, 2 * Math.PI);
  c.fillStyle = '#FC9601';
  c.fill();
}

function drawMoon(canvas) {
  clearCanvas(darkMode);
  let c = canvas.getContext('2d');
  c.beginPath();
  c.arc(75, 75, 44, 0, 2 * Math.PI);
  c.fillStyle = '#f0c420';
  c.fill();
  c.beginPath();
  c.globalCompositeOperation = 'destination-out';
  c.arc(100, 75, 45, 0, 2 * Math.PI, true);
  c.fillStyle = '#121212';
  c.fill();
}

function drawEarth(canvas, theme) {
  let c = canvas.getContext('2d');
  c.globalCompositeOperation = 'destination-over';
  c.filter = 'blur(1px)';
  c.beginPath();
  c.moveTo(a, x);
  c.lineTo(150 - a, x);
  c.lineTo(150 - b, y);
  c.lineTo(b, y);
  c.lineTo(a, x);

  let grad = c.createRadialGradient(210, 50, 10, 238, 50, 300);

  switch (theme) {
    case 0:
      grad.addColorStop(0, '#96D2F7');
      grad.addColorStop(0.9, '#EDB663');

    case 1:
      grad.addColorStop(0, '#55B4EB');
      grad.addColorStop(0.9, '#062F69');
      break;
    default:
      grad.addColorStop(0, '#96D2F7');
      grad.addColorStop(0.9, '#EDB663');
      break;
  }

  c.fillStyle = grad;
  c.fill();
  c.filter = 'blur(0px)';
  c.font = '20px sans-serif';
  c.globalCompositeOperation = 'source-over';
  c.textAlign = 'center';
  switch (theme) {
    case 0:
      c.fillStyle = 'black';
      c.fillText('Dark', 75, 75);
      c.fillText('Mode', 75, 95);
      break;

    case 1:
      c.fillText('Light', 75, 75);
      c.fillText('Mode', 75, 95);
      break;
    default:
  }
}

darkMode.addEventListener('mouseover', () => {
  checkDarkMode() ? drawEarth(darkMode, 1) : drawEarth(darkMode, 0);
});

function checkDarkMode() {
  return document.body.classList.contains('dark-mode');
}

darkMode.addEventListener('mouseout', () => {
  checkDarkMode() ? drawMoon(darkMode) : drawSun(darkMode);
});

darkMode.addEventListener('click', () => {
  toggleDarkMode();
  checkDarkMode() ? drawEarth(darkMode, 1) : drawEarth(darkMode, 0);
});

darkModeTime();
