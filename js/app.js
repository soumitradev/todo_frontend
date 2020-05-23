$("textarea").on('change keyup paste', function() {
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
});

$(document).ready(function(){
    $('.tooltipped').tooltip();
});

$("#title").on('change keyup paste', function() {
    var dirty = $("#title").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('titleout').innerHTML = clean;
});

$("#addnote").on('submit', function (e) {
    e.preventDefault();
    var dirtyTitle = $("#title").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    htmlTitle = converter.makeHtml(dirtyTitle);
    var cleanTitle = DOMPurify.sanitize(htmlTitle);

    var dirtyText = $("textarea").val();
    htmlText = converter.makeHtml(dirtyText);
    var cleanText = DOMPurify.sanitize(htmlText);

    $.ajax({
        url: "https://soumitradev-todo-api.herokuapp.com/api/v1/todo",
        type: "POST",
        data: {
            title: cleanTitle,
            text:   cleanText
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': "*"
        },
        dataType: 'json',
        success: function (data) {
            var id = data['id'];
            window.location.href = './note.html?id=' + id;
        },
        error: function (err){
            M.toast({html: 'Please enter some text before saving', classes: 'rounded'})
        }
    });
});