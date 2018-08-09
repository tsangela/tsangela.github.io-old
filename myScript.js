//// Italic
//$("a, h3, summary").hover(function(){
//    $(this).css("font-style", "italic");
//    }, function(){
//    $(this).css("font-style", "normal");
//});
//
//// Bold
//$("h4").hover(function(){
//    $(this).css("font-weight", "bold");
//    }, function(){
//    $(this).css("font-weight", "normal");
//});
//
//// Links
//$("a, summary, button").hover(function(){
//    $(this).css("cursor", "help");
//    }, function(){
//    $(this).css("cursor", "help");
//});
//
//// Image
//$("img").hover(function(){
//    $(this).css("opacity", 0.5);
//    }, function(){
//    $(this).css("opacity", 1);
//});

// Carousel
$("carousel-control-prev, carousel-control-next").hover(function(){
    $(this).css("opacity", 0.2);
    }, function(){
    $(this).css("opacity", 1);
});

$("#hungrycatpreview").carousel('pause');

$(document).click(function(event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $navbar.collapse('hide');
    }
});

