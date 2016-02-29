var spinner = {
  halfRotations: 0,
  down: "yellow",
  element: document.getElementById('spinner'),
  spin: function () {
    if (Math.random() < 0.5) {
      this.down = "yellow";
      if (this.halfRotations % 2 !== 0) { // first put red up
        this.halfRotations += 1;
      }
    } else {
      this.down = "red";
      if (this.halfRotations % 2 === 0) { // first put yellow up
        this.halfRotations += 1;
      }
    }
    // then, spin some more
    this.halfRotations += 2 + 2 * Math.floor(5 * Math.random());
  },
  updateElement: function () {
    this.element.style.transform = "rotate(" + (180 * this.halfRotations) + "deg)";
  }
};

var redChoice = document.querySelector('.choice.red'),
    yellowChoice = document.querySelector('.choice.yellow');

function spinThenCheck (evt) {
  /*
    reminder, this will be attached to a click on redChoice and yellowChoice
    WHY DO I CARE? --> I can use keyword this during an event, and it returns
    the object (node) that the event was attached to...
  */
  var colorChoice = this.classList[1]; // this will be "red" or "yellow"

  spinner.spin();
  spinner.updateElement();
  setTimeout(function () {
    if (spinner.down === colorChoice) {
      alert("You were totes correct");
    } else {
      alert("Try again!");
    }
  }, 2000);
}

redChoice.addEventListener('click', spinThenCheck);
yellowChoice.addEventListener('click', spinThenCheck);

// don't kill this
