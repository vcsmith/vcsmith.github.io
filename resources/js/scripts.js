cssVars();
// single line comment

/* 
multi line comment
*/

// open mobile nav

$('.nav-prompt').click(function () {
    if ($('.nav-inner').attr('aria-expanded')==='false') {
        $('.nav-inner').attr('aria-expanded', 'true');
    } else {
        $('.nav-inner').attr('aria-expanded', 'false');
    }
})
