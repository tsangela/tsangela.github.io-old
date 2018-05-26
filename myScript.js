$("p, a, summary, h4, li").hover(function(){
    $(this).css("background-color", "#D4FAF2");
    }, function(){
    $(this).css("background-color", "transparent");
});

// Links
$("a").hover(function(){
    $(this).css("font-style", "italic");
    }, function(){
    $(this).css("font-style", "normal");
});