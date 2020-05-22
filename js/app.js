$("textarea").on('change keyup paste', function() {
    var dirty = $("textarea").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('content').innerHTML = clean;
});

$("#title").on('change keyup paste', function() {
    var dirty = $("#title").val();
    var converter = new showdown.Converter();
    converter.setFlavor('github');
    html = converter.makeHtml(dirty);
    var clean = DOMPurify.sanitize(html);
    document.getElementById('titleout').innerHTML = clean;
});
