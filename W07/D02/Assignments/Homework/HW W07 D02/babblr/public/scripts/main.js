window.onload = function () {
    console.log("homework egaged");

    document.getElementById("submit-button").addEventListener('click', function(event) {
        console.log("submit button clicked!");
        var authorName = $("#add-author").val();
        var babble = document.querySelector('#add-babble').value;
        var url = 'http://localhost:3000/';
        var data = {};
        data.author = authorName;
        data.babbl = babble;
        console.log(data);
        $.post({
            url: url,
            data: data,
            dataType:'json'
        }).done(function(result){
            console.log(result);
        });
    });

    document.getElementById('view-all-babble').addEventListener('click', function() {
        console.log("View All babble button clicked!");

        $.ajax(url).done(function (result) {
            var source = $('#template-babbles').html();
            var template = Handlebars.compile(source);
            var html = template(result);
            console.log("running");
            $(".display-babbles").append(html);
        });
    });


};
