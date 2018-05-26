//$("p, a, summary, h4, li").hover(function(){
//    $(this).css("background-color", "#D4FAF2");
//    }, function(){
//    $(this).css("background-color", "transparent");
//});

// Links
$("a, h3").hover(function(){
    $(this).css("font-style", "italic");
    }, function(){
    $(this).css("font-style", "normal");
});

// Image
$("img").hover(function(){
    $(this).css("opacity", 0.5);
    }, function(){
    $(this).css("opacity", 1);
});

// Headers
// do the # fading thing upon hover