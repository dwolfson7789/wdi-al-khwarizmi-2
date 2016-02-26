//grab the cat from the DOM
var cat = document.querySelector('#cat');
var left = 1;
var dirs = ["right","up"]
var bottom = -20

var slope = Math.floor(Math.random() * 30);

window.setInterval(function() {

});

function hitWalls(l, b) {
  if (l <= 0 || l >= window.innerWidth - 300 || b < -20 || b >= window.innerHeight - 300) {
    return true;
  }
  return false;
}

//this bounces snuggles back and forth
// window.setInterval(function() {
//   cat.style.left = left + "px";
//   if (dir) {
//     if (left <= window.innerWidth - 300) {
//       left += 10;
//     } else {
//       dir = 0;
//       cat.classList.toggle('right')
//     }
//   } else {
//     if (left >= 0) {
//       left -= 10;
//     } else {
//       dir = 1;
//       cat.classList.toggle('right');
//     }
//   }
// }, 10);

window.onload = function() {
var foo = setInterval(function() {
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

}
