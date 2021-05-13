function format_code() {
    let language = localStorage['lang'];
    let code = localStorage['text_to_highlight'];
    $('.dp-highlighter').remove(); // make sure there is only one higlighted text at a time.
    let pre = $('pre[name="code"]') //get pre formatted text area
    pre.removeClass(); //remove any previous class (classes are determining how to format the code)
    pre.addClass(language); // add relevant class
    pre.removeAttr('style');
    pre.text(code); //insert input text into pre field

    if (window.isBloggerMode == true)
        dp.SyntaxHighlighter.BloggerMode();
    dp.SyntaxHighlighter.ClipboardSwf = 'Syntax_Highlight/Scripts/clipboard.swf';
    dp.SyntaxHighlighter.HighlightAll('code'); // actually highlighing
}