/*
function sayNameForAll(label) {
  console.log(label + ":" + this.name);
}

var name = "Ethan";

var person1 = {
  name: "Liza"
}

var person2 = {
  name: "Matt"
}

sayNameForAll.call(this, "global");
sayNameForAll.call(person1, "person1");
sayNameForAll.call(person2, "person2");

sayNameForAll.apply(this, ["global"]);
sayNameForAll.apply(person1, ["person1"]);
sayNameForAll.apply(person2, ["person2"]);


var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1");

var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
*/
/*
var registerListeners = function(element){
  this.name  = 'some name';
  this.onclick1 = function(event){
    console.log(this.name);
    console.log(this);
  }
  this.onclick2 = function(event){
    console.log(this.name);
  }
  element.addEventListener('click', this.onclick1);
  element.addEventListener('click', this.onclick2.bind(this))
}
*/

/*
var person = {
  name: "Syed",
  sayIt: function(){
    console.log(this);
    console.log(this.name);
  }
}

var taco = document.createElement("div");
taco.innerText = "click this";
document.body.appendChild(taco);
console.log("what is this");
console.log(this);
taco.addEventListener('click',  person.sayIt.bind(person));

*/

function greaterThan(n){
  return function(m) { return m > n; };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
