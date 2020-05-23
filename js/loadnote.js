$( document ).ready(function() {
    $('.tooltipped').tooltip();
    var id = window.location.href.split("?")[1].substring(3);

    $.ajax({
        url: "https://soumitradev-todo-api.herokuapp.com/api/v1/todo?id=" + id,
        type: "GET",
        dataType: "json",
        complete: function(result){
            var s = result.responseText;
            console.log(s)

            s = s.replace(/\"/g, "\\\"").replace(/\'/g, "\"");
        
            try {
                JSON.parse(s);
            } catch {
                console.log("ERR")
                document.getElementById('titleout').innerHTML = "Oops!";
                document.getElementById('errtext').innerHTML = "Error <b>404</b>:";
                document.getElementById('content').innerHTML = "The note you entered does not exist. Please check the URL. Maybe it was deleted?";
            }
            finalHTML = JSON.parse(s)[0];

            document.getElementById('titleout').innerHTML = finalHTML['title'];
            document.getElementById('errtext').innerHTML = "";
            document.getElementById('content').innerHTML = finalHTML['text'];

            $("#cardcontainer").append("<span>The ID for this note is: " + id + "</span><a class=\"waves-effect waves-light btn right red hoverable tooltipped\" id=\"deletebutton\" style=\"border-radius: 10000000000px; margin-left: 1%;\" data-position=\"top\" data-tooltip=\"Delete this note\"><i class=\"material-icons left\">delete</i>Delete</a><a class=\"waves-effect waves-light btn right blue hoverable tooltipped\" id=\"editbutton\" style=\"border-radius: 10000000000px;\" data-position=\"top\" data-tooltip=\"Edit this note\"><i class=\"material-icons left\">edit</i>Edit</a>")
            
            $('.tooltipped').tooltip();
        }
    });
});

$(document).on('click', '#editbutton', function(){
    $('.tooltipped').tooltip();
    var titleHTML = document.getElementById('titleout').innerHTML;
    var bodyHTML = document.getElementById('content').innerHTML;
    var id = window.location.href.split("?")[1].substring(3);
    $('.tooltip').tooltip('close');
    $("#mutablecontainer").empty();
    $("#mutablecontainer").append("<form class=\"col s12\" id=\"addnote\" action=\"\"><div class=\"row\">  <div class=\"input-field col s6\">    <input id=\"title\" type=\"text\" name=\"title\" required>    <label for=\"title\">Title</label>  </div>  <div class=\"input-field col s12\">    <textarea name=\"text\" id=\"text\" class=\"materialize-textarea\" required></textarea>    <label for=\"text\">Enter your notes here</label>    <span class=\"helper-text\">Formatting with <a href=\"https://commonmark.org/help/\" target=\"_blank\">Markdown</a> is supported.</span>  </div></div><div class=\"row\">  <div class=\"col s12\">    <span class=\"black-text\" style=\"padding-left: 2%;\">Preview</span>    <div class=\"card grey lighten-3\" style=\"border-radius: 20px;\">      <div class=\"card-content white-text\">        <span class=\"black-text card-title\" id=\"titleout\">Title</span>        <p class=\"black-text\" id=\"content\">Text you type will be formatted and shown here.</p>      </div>    </div>  </div></div><span>The ID for this note is: " + id + "</span><a class=\"btn waves-effect waves-light right green hoverable tooltipped\" id=\"updatenotebutton\" type=\"submit\" style=\"border-radius: 100000000000px;\" data-position=\"top\" data-tooltip=\"Save this as a public note\">Save  <i class=\"material-icons-round left\">save</i></a></form>");
    
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    var titleMD = converter.makeMarkdown(titleHTML);
    var bodyMD = converter.makeMarkdown(bodyHTML);
    document.getElementById('title').value = titleMD;
    document.getElementById('text').value = bodyMD;
    M.textareaAutoResize($('#text'));


    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;


    var dirty = $("#title").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('titleout').innerHTML = clean;

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

    $(document).on('click', '#updatenotebutton', function(e){
        var idText = window.location.href.split("?")[1].substring(3);
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
                id: idText,
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
    
    $('.tooltipped').tooltip();
});

$(document).on('click', '#deletebutton', function(){
    var idText = window.location.href.split("?")[1].substring(3);
    $.ajax({
        url: "https://soumitradev-todo-api.herokuapp.com/api/v1/delete",
        type: "POST",
        data: {
            id: idText
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': "*"
        },
        dataType: 'json',
        success: function (data) {
            window.location.href = './index.html';
        },
        error: function (err){
            M.toast({html: 'Something went wrong...', classes: 'rounded'})
        }
    });
});