console.log('canvas.js loaded');

var canvas = document.createElement('canvas');
var c = canvas.getContext('2d');
// var $canvas = $('canvas')
$(document).ready(function(){
    //initial drawing of canvas and append to body
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    c.fillStyle = "black";

  c.fillRect(0,0,canvas.width, canvas.height);
  $(canvas).appendTo('body');

  var fireworks = {},
      fireworkIndex = 0,
      fireworkNum = 20,
      mousePositionX,
      mousePositionY;

  var babyImg = document.createElement('img');
  babyImg.src = "IMG_0363.jpg";

  $(document).on('click',function(e) {
    for (var firework in fireworks) {
      fireworks[firework].vx *= 10;
      fireworks[firework].vy *= 10;
    }
  });


  //set mouseposition based on mouse move
  $(document).on('mousemove',function(e) {
    // console.log(e);
    mousePositionX = e.pageX;
    mousePositionY = e.pageY;
  });

  function Firework(){
    this.x = mousePositionX;
    this.y = mousePositionY;

    this.color = "rgb(" +
      Math.floor(Math.random() * 255) + "," +
      Math.floor(Math.random() * 255) + "," +
      Math.floor(Math.random() * 255) + ")";


    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    fireworkIndex++;
    fireworks[fireworkIndex] = this;
    this.id = fireworkIndex;
    this.life = 0;
    this.maxLife = Math.random() * 50 + 20;
    this.draw = function() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;

      if (this.life > this.maxLife) {
        delete fireworks[this.id];
      }

      if(Math.random()<0.1){
          this.vx = Math.random() * 10 - 5;
          this.vy = Math.random() * 10 - 5;
      }

      c.fillStyle = (this.color);
      c.fillRect(this.x, this.y, 4, 4);
      // c.drawImage(babyImg,this.x,this.y,80,80);
    }
  }

  setInterval(function(){
    c.fillStyle = "rgba(0,0,0,0.4)";
    c.fillRect(0,0,canvas.width,canvas.height);

    for (var i = 0; i < fireworkNum; i++) {
      new Firework();
    }

    for (var firework in fireworks) {
      fireworks[firework].draw();
    }
    }, 30);

});
