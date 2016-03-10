console.log('canvas.js loaded');

//make a new canvas element and set its context to 2-dimensional
var canvas = document.createElement('canvas');
var c = canvas.getContext('2d');

$(document).ready(function(){

  //initial drawing of canvas and append to body
  //it will be same size as the window with a black fill
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  c.fillStyle = "black";
  c.fillRect(0,0,canvas.width, canvas.height);

  //could also do body.appendChild(canvas) in vanilla JS
  $(canvas).appendTo('body');

  //let's make us some fireworks!
  var fireworks = {},     // our firework objects will live in here
      fireworkIndex = 0,  // for keeping count of our fireworks
      fireworkNum = 20,   // 20 max created each time
      mousePositionX,     // to store the mouse's position
      mousePositionY;

  // below if we want to replace the plain fireworks with the baby's photo instead
  // var babyImg = document.createElement('img');
  // babyImg.src = "IMG_0363.jpg";

  // this is the "explosion" click handler
  // this jQuery syntax is essentially the same as writing
  // document.addEventListener('click', function(){...})
  // for every firework this function will multiply its x and y velocities by 10
  // on a click event
  $(document).on('click',function(e) {
    for (var firework in fireworks) {
      fireworks[firework].vx *= 10;
      fireworks[firework].vy *= 10;
    }
  });

  //set mousePositionY and mousePositionX based on mouse move
  //again, vanilla JS would be document.addEventListener('mousemove', ... )
  $(document).on('mousemove',function(e) {
    console.log(e);
    mousePositionX = e.pageX;
    mousePositionY = e.pageY;
  });

  //this is our fireworks constructor function
  //essentially works like a factory function: when you call it with the keyword 'new'
  //(see below) it makes a new object and runs the code of the function in it
  function Firework() {
    this.x = mousePositionX;   // initial x,y position of firework at creation are
    this.y = mousePositionY;   // equal to the mouse's position

    // make a random rgb color string
    this.color = "rgb(" +
      Math.floor(Math.random() * 255) + "," +
      Math.floor(Math.random() * 255) + "," +
      Math.floor(Math.random() * 255) + ")";

    // x,y velocities are set randomly between -5 and 5;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;

    // increment the index num
    // and add the firework to the fireworks object as a property with that key
    fireworkIndex++;
    fireworks[fireworkIndex] = this;

    // set the firework's id to the index
    this.id = fireworkIndex;

    //baby firework starts out with an age of 0
    this.life = 0;

    //firework will live a random number of iterations between 20 and 70
    this.maxLife = Math.random() * 50 + 20;

    //this is the heart of the firework -- this function actually draws it to the screen!
    this.draw = function() {
      this.x += this.vx;    // increment its x position by the x velocity
      this.y += this.vy;    // same for y position
      this.life++;          // age the firework one unit

      // if the firework is too old, delete it
      if (this.life > this.maxLife) {
        delete fireworks[this.id];
      }

      // this is a random direction changer
      // 10% of the time, it will randomly reset the x and y velocities
      if(Math.random()<0.1){
          this.vx = Math.random() * 10 - 5;
          this.vy = Math.random() * 10 - 5;
      }

      // set color to firework's color and make a rectangle at firework's location
      c.fillStyle = (this.color);
      c.fillRect(this.x, this.y, 4, 4);
      // if we wanted to use the baby pic instead of colored fireworks, dele above
      // line and replace with this:
      // c.drawImage(babyImg,this.x,this.y,80,80);
    }
  }

  // every 30ms, redraw the canvas, make the requisite number of fireworks
  // and draw them
  setInterval(function(){
    c.fillStyle = "rgba(0,0,0,0.4)";
    c.fillRect(0,0,canvas.width,canvas.height);

    for (var i = 0; i < fireworkNum; i++) {
      var fw = Firework();
    }

    for (var firework in fireworks) {
      fireworks[firework].draw();
    }
  }, 30);
});
