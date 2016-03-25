
document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('submit-button').addEventListener('click', function(ev){
    // prevent the default of the submit button
    ev.preventDefault();


  var theTemplateScript = $("#address-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  //let's get the infos

  var request = $.get( 'http://localhost:3000/contacts', function(response) {

  })
  .done(function(response) {
    // we already know we're getting an array back, let's just pass it in.
    contacts = {},
    contacts["contacts"] = response
    var theCompiledHtml = theTemplate(response);
    $('.content-placeholder').html(theCompiledHtml);

  })
  .fail(function(response) {
    console.log(response);
  });
});

  if(userInput === this.name)
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/',
    data: JSON.stringify, // your form object goes here.
    success: function(data) { alert(data); },
    contentType: "application/json",
    dataType: 'json'
  });


});
