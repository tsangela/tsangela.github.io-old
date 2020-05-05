$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true &&
        !clickover.hasClass("navbar-toggler") &&
        !clickover.hasClass("dropdown-toggle")) {
        $(".navbar-toggler").trigger("click");
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

function showDesc(id) {
    // document.getElementById(id).style.display = 'block';
    document.getElementById(id).style.visibility = 'visible';
}

function hideDesc(id) {
    // document.getElementById(id).style.display = 'invisible';
    document.getElementById(id).style.visibility = 'hidden';
}