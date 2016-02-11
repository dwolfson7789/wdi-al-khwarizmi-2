//grab the cat from the DOM
var cat = document.querySelector('#cat');
var left = 0;
var dir = 1;

//this bounces snuggles back and forth
window.setInterval(function() {
  cat.style.left = left + "px";
  if (dir) {
    if (left <= window.innerWidth - 300) {
      left += 10;
    } else {
      dir = 0;
      cat.classList.toggle('right')
    }
  } else {
    if (left >= 0) {
      left -= 10;
    } else {
      dir = 1;
      cat.classList.toggle('right');
    }
  }
}, 10);
