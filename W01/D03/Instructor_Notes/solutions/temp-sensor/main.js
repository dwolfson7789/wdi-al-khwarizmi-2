/*
var temp = prompt("hey what's the weather like?");

if(temp > 32 && temp < 90){
  alert("all is good");
} else {
  alert("oh no");
}
*/

/*
var temp = 0
while (temp < 32 || temp > 100){
  temp = prompt("what's the weather like?")
}

alert("thank you");
*/

var random_number = Math.ceil(Math.random() * 11);
var guess = prompt("guess a number between 1 and 10");
var count = 1;
console.log(random_number);
while(random_number != guess && count <= 3){
  guess = prompt("guess again!");
  count += 1;
}

if (random_number === guess){
  alert("you won!");
} else {
  alert("too many tries");
}

alert("thanks for playing!")
