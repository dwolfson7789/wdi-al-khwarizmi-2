function init(){
  // keep track of count
  var count = 10;
  // create and append counter element
  var el = document.createElement("p");
  el.className = "Counter";
  document.body.appendChild(el);

  function countDown(){

    console.log(count);

    el.innerText = count;
    count -= 1

    // stop counter
    if(count < 0){
      el.innerText = 'PARTY';
      clearInterval(interval);
    }
  }

  // start counter
  var interval  = setInterval(countDown, 1000);
}
