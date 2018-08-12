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

