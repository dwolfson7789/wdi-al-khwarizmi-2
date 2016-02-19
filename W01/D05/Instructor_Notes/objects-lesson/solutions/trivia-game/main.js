/*
 trivia 2000
 questions taken from http://trivia.fyi/category/animal-trivia
*/

/* wait for the DOM to load */
document.addEventListener("DOMContentLoaded", function(){

  var questions = [
    'Which animal has the longest tongue relative to its total size?',
    'What is a baby rabbit called?',
    'An animal that can live on land and in water is known as what?',
    'Lemurs, a type of primate, are native to what island nation?',
    'What is a flock of crows called?',
    'Chilean sea bass originally went by what less appetizing name?',
    'Su Lin was the name given to what type of animal captured in China and \
    brought to the United States for the first time in 1936?'
  ]

  var answers = [
    'Chameleon',
    'Kitten',
    'Amphibian',
    'Madagascar',
    'Murder',
    'toothfish',
    'Panda'
  ]

  var score = 0
  for(var i = 0; i < questions.length; i++){
    var answer = prompt(questions[i]);
    if( answer == answers[i]){
      alert("you got it!")
      score += 1;
    } else {
      alert("wrong!")
    }
  }

  var el = document.querySelector('.score');
  el.innerText ="you got "+  score + " out of  "+ questions.length +" correct";

});
