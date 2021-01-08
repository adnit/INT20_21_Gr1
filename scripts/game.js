var completed = 0;
var currentLevel = 0;
var canvas;
var ctx;
var dx = 4;
var dy = 4;
var x = 68;
var y = 20;
var WIDTH = 482;
var HEIGHT = 482;
var img = new Image();
var collision = 0;
var images = [
  '/images/adastra.png',
  '/images/backtothefuture.png',
  '/images/revenant.png',
];
var movieTitles = ['Ad Astra', 'Back to the Future', 'Revenant'];
function reset() {
  dx = 4;
  dy = 4;
  x = 68;
  y = 20;
}
function level(image) {
  function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.drawImage(img, 0, 0);
  }

  function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    img.src = image;
    if (completed === 0) {
      return setInterval(draw, 5);
    }
  }

  function doKeyDown(evt) {
    checkCompletion() ? lvlCompleted() : console.log('test');

    switch (evt.keyCode) {
      case 38 /* Up arrow was pressed */:
        if (y - dy > 0) {
          y -= dy;
          clear();
          checkcollision();
          if (collision == 1) {
            y += dy;
            collision = 0;
          }
        }

        break;
      case 40 /* Down arrow was pressed */:
        if (y + dy < HEIGHT) {
          y += dy;
          clear();
          checkcollision();
          if (collision == 1) {
            y -= dy;
            collision = 0;
          }
        }

        break;
      case 37 /* Left arrow was pressed */:
        if (x - dx > 0) {
          x -= dx;
          clear();
          checkcollision();
          if (collision == 1) {
            x += dx;
            collision = 0;
          }
        }
        break;
      case 39 /* Right arrow was pressed */:
        if (x + dx < WIDTH) {
          x += dx;
          clear();
          checkcollision();
          if (collision == 1) {
            x -= dx;
            collision = 0;
          }
        }
        break;
    }
  }

  function checkcollision() {
    var imgd = ctx.getImageData(x, y, 15, 15);
    var pix = imgd.data;
    for (var i = 0; (n = pix.length), i < n; i += 4) {
      if (pix[i] == 0) {
        collision = 1;
      }
    }
  }

  function checkCompletion() {
    if (x >= 383 && x <= 388 && y >= 360 && y >= 390) {
      completed = 1;
      currentLevel += 1;
      return true;
    }
  }

  // function getName() {
  //   var emri = images[currentLevel];
  //   var pos1 = emri.indexOf('/');
  //   var pos2 = emri.indexOf('/', pos1 + 2);
  //   var text = emri.substring(pos2 + 1, emri.indexOf('.'));
  //   return text;
  // }

  function draw() {
    clear();
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(movieTitles[currentLevel], x - 30, y - 5);
    ctx.fillStyle = 'red';
    rect(x, y, 15, 15);
  }
  init();
  window.addEventListener('keydown', doKeyDown, true);
}

function lvlCompleted() {
  alert('level completed');
  onLoad();
}

function onLoad() {
  reset();
  if (currentLevel == 3) {
    alert('E perfundove lojen');
    window.location.href =
      'https://scontent.fprn3-1.fna.fbcdn.net/v/t1.0-9/135888567_1053804571760853_6568967398380747399_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=UW92rKHblvUAX_2TLlP&_nc_ht=scontent.fprn3-1.fna&oh=2244720dbf1970acdbbf0354a08f6837&oe=601D7848';
  }
  level(images[currentLevel]);
}

onLoad();
