//$(document).ready(function() {
//var stickyNavTop = $('header').offset().top;
//
//var stickyNav = function(){
//var scrollTop = $(window).scrollTop();
//
//if (scrollTop > stickyNavTop) {
//    $('header').addClass('sticky');
//} else {
//    $('header').removeClass('sticky');
//}
//};
//
//stickyNav();
//
//$(window).scroll(function() {
//    stickyNav();
//});
//});


function makeSticky() {
    var myWindow = $(window),
        myHeader = $("header");

    myWindow.scroll(function () {
        if (myWindow.scrollTop() == 0) {
            myHeader.removeClass("sticky");
        } else {
            myHeader.addClass("sticky");
        }
    });
}
$( function() {

    $( "header").waypoint( "sticky" );
});
