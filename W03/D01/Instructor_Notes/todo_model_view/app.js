function makeTodo (userInput) {
  var newTodo = {
    content: userInput,
    completed: false,
    toggleStatus: function () {
      this.completed = !this.completed;
    },
    updateElement: function () {
      var title = this.element.querySelector('h3');

      if (this.completed) {
        title.classList.add('completed');
      } else {
        title.classList.remove('completed');
      }

      console.log(this);
    }
  };

  makeTodoView(newTodo);

  return newTodo;
}

function makeTodoView (someTodo) {
  var div = document.createElement('div');
  div.classList.add('todo');
  div.innerHTML = '<h3>' + someTodo.content + '</h3>\
                   <label>\
                     <input type="checkbox"> Done!\
                   </label>';

  someTodo.element = div;

  hookUpEvents(someTodo);
}

function hookUpEvents(theTodo) {
  var checkBox = theTodo.element.querySelector('input[type="checkbox"]');

  checkBox.addEventListener('click', function (eventObject) {
    theTodo.toggleStatus();
    theTodo.updateElement();
  });
}

/*******************************************************************/

var todos = document.querySelector('.todos'),
    input = document.querySelector('.new-todo'),
    button = document.querySelector('.make-todo');

button.addEventListener('click', function (eventObject) {
  if (input.value.length !== 0) {
    var newTodo = makeTodo(input.value);

    todos.appendChild(newTodo.element);
  }
});








// don't clear the space
