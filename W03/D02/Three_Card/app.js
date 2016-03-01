window.onload = function () {
  // initial values
  var cards = [
    { value: '10&spades;', isWinningCard: false },
    { value: '7&clubs;',   isWinningCard: false },
    { value: 'Q&hearts;',  isWinningCard: true }
  ];
  var gameHasStarted = false;
  var status = document.querySelector('.status');

  // add dom element to card data
  var cardEls = document.querySelectorAll('.card');
  for (var i = 0; i < 3; i++) {
    cards[i].element = cardEls[i];
  }
  showValues(); // then update cards to show values

  // set up functionality
  var button = document.querySelector('.play');
  button.addEventListener('click', function () {
    // prevents clicking play lots of times
    if (!gameHasStarted) {
      cards.forEach(function (card, i) {
        card.element.classList.remove('chosen');
      });

      gameHasStarted = true;
      
      hideValues();
      shuffleCards();
    }
  });

  // HERE BE FUNCTIONS
  function showValues () {
    for (var i = 0; i < 3; i++) {
      cards[i].element.innerHTML = cards[i].value;
    }
  }

  function hideValues () {
    for (var i = 0; i < 3; i++) {
      cards[i].element.innerHTML = "";
    }
  }

  function shuffleCardsOnce () {
    // use the array shuffle method from below
    cards.shuffle();
    // then update the dom
    for (var i = 0; i < 3; i++) {
      cards[i].element.style.left = (3 + (20 * i)) + "vw";
    }
  }

  function shuffleCards () {
    var shuffleCount = 5 + ~~(8 * Math.random());
    var intervalID = setInterval(function () {
      if (shuffleCount > 0) {
        shuffleCardsOnce();
        shuffleCount -= 1;
      } else {
        clearInterval(intervalID);
        letUserChoose(); // callback in action, baby!
      }
    }, 500);
  }

  function letUserChoose () {
    var cardsEl = document.querySelector('.cards');
    cardsEl.classList.add('active');

    cards.forEach(function (card, i) {
      card.element.addEventListener('click', whenCardIsClicked.bind(card));
    });
  }

  function whenCardIsClicked () {
    if (gameHasStarted) {
      var card = this,
          cardsEl = document.querySelector('.cards');

      cardsEl.classList.remove('active');
      card.element.classList.add('chosen');

      showValues();

      if (card.isWinningCard) {
        status.innerText = "You win!";
      } else {
        status.innerText = "You lose!";
      }

      gameHasStarted = false;
    }
  }
};

/*
  Built in object types have a prototype object, which
  houses all of those object's methods and properties.
  When you make an array, for example, it gets the same
  pop and push method that every other array gets.
  Here we're adding a new method to all arrays, called
  shuffle.
*/
Array.prototype.shuffle = function () {
  for (var i = 0; i < this.length; i++) {
    var targetIndex = ~~(Math.random() * (this.length - i));
    var temp = this[i];
    this[i] = this[targetIndex];
    this[targetIndex] = temp;
  }
};
