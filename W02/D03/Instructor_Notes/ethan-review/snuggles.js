console.log("snuggles.js has loaded!");

window.onload = function() {
  var catHouse = document.createElement('div');
  catHouse.setAttribute('id', 'cat');

  var snuggles = document.createElement('img');
  snuggles.setAttribute('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif');

  catHouse.appendChild(snuggles);
  document.body.appendChild(catHouse);

var left = 0;
var direction = "right";
console.log(window);
//
var walkRight = setInterval(function() {
  catHouse.style.left = left + "px";
  if (direction == "right") {
    if (left <= window.innerWidth - 300) {
        left += 10;
    } else {
      direction = "left";
      catHouse.className = "left";
    }
  } else {
    if (left >= 0) {
        left -= 10;
    } else {
      direction = "right";
      catHouse.className = "right";
    }
  }
  console.log(left);
}, 30);

var bottom = -20;
// var jump = setInterval(function() {
//   catHouse.style.bottom = bottom + "px";
//
// }, 20);




























}
