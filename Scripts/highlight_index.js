 function highlighter() {
     let language = $('#languagesDDL').val()
     let code = $('#codetext').val();

     if (code != '' && language != '-1') {
         localStorage['text_to_highlight'] = code;
         localStorage['lang'] = language;
         var newwin = openOnce('./FormatedText.html');
     } else {
         if (code == '' && language == '-1')
             alert("please fill out all fields")
         else if (code == '')
             alert("please enter text to format")
         else if (language == '-1')
             alert("please select code language to format")
     }
 }

 function openOnce(url) {
     var winref = window.open('https://www.codexworld.com', '_blank');
     //var winref = window.open('', '_blank', '', true);
     if (winref.location.href === 'about:blank') {
         winref.location.href = url;
     }
     return winref;
 }