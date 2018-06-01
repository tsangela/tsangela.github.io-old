// Italic
$("a, h3, h6").hover(function(){
    $(this).css("font-style", "italic");
    }, function(){
    $(this).css("font-style", "normal");
});

// Links
$("a, summary, button").hover(function(){
    $(this).css("cursor", "help");
    }, function(){
    $(this).css("cursor", "help");
});

// Image
$("img").hover(function(){
    $(this).css("opacity", 0.5);
    }, function(){
    $(this).css("opacity", 1);
});

// Carousel
$("carousel-control-prev, carousel-control-next").hover(function(){
    $(this).css("opacity", 0.2);
    }, function(){
    $(this).css("opacity", 1);
});

$("#hungrycatpreview").carousel('pause');


// Headers
// do the # fading thing upon hover