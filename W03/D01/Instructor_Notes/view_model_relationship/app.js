function makeClicker (title) {
  var newElement = document.createElement('div');

  newElement.classList.add('clicker');
  newElement.innerHTML = '<h3>' + title + '</h3>' +
    '<p>You\'ve clicked <span class="count">0</span> times.</p>' +
    '<button type="button" class="click">Click Me</button>' +
    '<button type="button" class="reset">Reset Me</button>';

  var newClickModel = {
    count: 0,
    increment: function () {
      this.count += 1;
    },
    reset: function () {
      this.count = 0;
    },
    element: newElement,
    updateElement: function () {
      var countNode = this.element.querySelector('span.count');
      countNode.innerText = this.count;
    }
  };

  var incrementButton = newElement.querySelector('.click');
  incrementButton.addEventListener('click', function () {
    newClickModel.increment();
    newClickModel.updateElement();
  });

  var resetButton = newElement.querySelector('.reset');
  resetButton.addEventListener('click', function () {
    newClickModel.reset();
    newClickModel.updateElement();
  });

  return newClickModel;
}

var createButton = document.querySelector('.new-click-interface .create');

createButton.addEventListener('click', function (e) {
  var input = document.querySelector('.new-click-interface input');

  if (input.value.length !== 0) {
    var newClicker = makeClicker(input.value);
    document.body.appendChild(newClicker.element);
    input.value = "";
    input.focus();
  }
});






















/* atom don't clear this out */
