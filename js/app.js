var shown = false;


$("textarea").on('click', function() {
    if (!shown){
        $('.tap-target').tapTarget('open');
        shown = true;
    }
});

$("#title").on('click', function() {
    if (!shown){
        $('.tap-target').tapTarget('open');
        shown = true;
    }
});

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

$("#savenotebutton").on('click', function () {
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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
});

$("#menu").on('click', function(){
    if (!shown){
        $('.tap-target').tapTarget('open');
        shown = true;
    }
});

$(document).ready(function(){
    $('.tap-target').tapTarget();
});

$("#bold").on('click', function(){
    document.getElementById('text').value += "\n**Enter bold text here**";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#italic").on('click', function(){
    document.getElementById('text').value += "\n*Enter italic text here*";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#under").on('click', function(){
    document.getElementById('text').value += "\n<ins>Enter underlined text here</ins>";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#strike").on('click', function(){
    document.getElementById('text').value += "\n~~Enter striked text here~~";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#quote").on('click', function(){
    document.getElementById('text').value += "\n> Enter quoted text here";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#leftalign").on('click', function(){
    document.getElementById('text').value += "\n<p align=left> Enter left aligned text here</p>";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#centeralign").on('click', function(){
    document.getElementById('text').value += "\n<p align=center> Enter centre aligned text here</p>";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#rightalign").on('click', function(){
    document.getElementById('text').value += "\n<p align=right> Enter right aligned text here</p>";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#newul").on('click', function(){
    document.getElementById('text').value += "\n- Enter\n- bulleted\n- list here.";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#newol").on('click', function(){
    document.getElementById('text').value += "\n1. Enter\n2. numbered\n3. list here.";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#link").on('click', function(){
    document.getElementById('text').value += "\n[Hyperlink text](https://example.com)";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#photo").on('click', function(){
    document.getElementById('text').value += "\n![Alternate text for image. Image can be custom sized too.](https://via.placeholder.com/150 =200x400)";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#divider").on('click', function(){
    document.getElementById('text').value += "\n\n---";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#codeblock").on('click', function(){
    document.getElementById('text').value += "\n```\ninsert\ncode\nhere\n```";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});

$("#textcolor").on('click', function(){
    document.getElementById('text').value += "\n<p style=\"color:#0066FF\">Enter colored text here. Color can be customized by changing hex code.</p>";
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
    M.textareaAutoResize($('#text'));
    M.updateTextFields();
});