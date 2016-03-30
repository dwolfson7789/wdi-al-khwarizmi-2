console.log('main.js is loaded');

$(document).ready(function(){
  $('#author-button').on('click', function(e) {
    var $option = $('option:selected')[0];
    var selection = $option.value;
    console.log(selection);

    $.get('http://localhost:3000/author/' + selection + '/posts').success(function(data) {
<<<<<<< HEAD
      console.log(JSON.parse(data));
=======
      // console.log(JSON.parse(data));
      data = JSON.parse(data);
      var $contentDiv = $('.content-div');
      $contentDiv.empty();
      for (var i = 0; i < data.length; i++) {
        var $dataDiv = $('<div>');
        $dataDiv.append($('<h3>').text(data[i].title));
        $dataDiv.append($('<h5>').text('by ' + $('option:selected')[0].text));
        $dataDiv.append($('<a>').attr('href', '#')
                                 .addClass('edit-link')
                                 .attr('post-id', data[i].post_id)
                                 .text('Edit post'));
        $dataDiv.append($('<p>').text(data[i].body));
        $contentDiv.append($dataDiv);
      }

      $('.edit-link').on('click', function(e) {
        e.preventDefault();
        var id = parseInt(e.toElement.getAttribute('post-id'));
        var $form = $('.edit-form-div');
        var post = data.filter(function(item) {
          if (item.post_id == id) {
            return true;
          } else {
            return false;
          }
        });

        if (post.length > 1) {
          console.log('WTF THERE ARE TWO ITEMS WITH SAME ID');
        } else {
          post = post[0];
        }

        // console.log(post);
        $('input').attr('placeholder', post.title);
        $('textarea').text(post.body);
        $form.show(10);

        $('#edit-button').on('click', function(e) {
          var title = document.querySelector('input').value
                      || document.querySelector('input').placeholder;
          var body = document.querySelector('textarea').value;

          var editedPost = {
            author_id: id,
            title: title,
            body: body,
          };
          // editedPost = JSON.stringify(editedPost);
          // console.log(editedPost);

          $.ajax({
            url: 'http://localhost:3000/posts/' + id,
            method: 'PUT',
            data: editedPost,
            dataType: 'json'
          }).success(function(data) {
            console.log(data);
          });
        });
      });
>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c
    });
  });





});
