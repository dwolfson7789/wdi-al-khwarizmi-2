console.log('app.js is loaded');

var storyEl = document.querySelector('#story-template').innerHTML;
var storyTemplate = Handlebars.compile(storyEl);
var storyHTML = storyTemplate(story);

document.querySelector('#story-div').innerHTML = storyHTML;
// 
// $('.scene-div').hide();
// $('#opening').show();
//
// $('.frontDoor').on('click',function() {
//   $('#opening').hide();
//   $('#frontDoor').show();
// });
