// $(document).click(function (event) {
//     var clickover = $(event.target);
//     var $navbar = $(".navbar-collapse");
//     var _opened = $navbar.hasClass("show");
//     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
//         $navbar.collapse('hide');
//     }
// });

function showDesc(id) {
    document.getElementById(id).style.display = 'block';
}
function hideDesc(id) {
    document.getElementById(id).style.display = 'none';
}