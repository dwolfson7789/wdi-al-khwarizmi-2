window.onload = function(){

// new user input
// search option
  document.getElementById('submit-button').addEventListener('click', function(){
document.getElementById('chosenRadio');
document.getElementById('newuserInput').style.display='none';
document.getElementById('usernameInput').style.display='none';
// document.getElementById('submit-btn');
  var url = 'http://localhost:3000';

    var chosenRadio = document.querySelector('.contacts-radios:checked');

if (chosenRadio.value == attingYes) {
  document.getElementById('usernameInput').style.display = 'block';
} else if (chosenRadio == attingNo) {
  alert("fuck you!");
}
}
