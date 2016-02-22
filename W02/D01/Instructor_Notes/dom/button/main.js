document.addEventListener('DOMContentLoaded', function(){
  var butt = document.querySelector('button');
  butt.addEventListener("click", function(eventObject){
    console.log(eventObject);
    var el = document.createElement("img");
    el.src = "http://i.imgur.com/yurTtSn.gif";
    document.body.appendChild(el);
  });
});
