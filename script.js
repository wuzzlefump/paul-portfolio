










$(document).ready(function(){




    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    //displaying home function
$("#logo").click(function() {
    $("#home").css("display","flex");
    $("#portfolio").css("display", "none");
    $("#contact").css("display", "none");

});
    // display portfolio
$("#portnav").click(function() {
    $("#portfolio").css("display","flex");
    $("#home").css("display", "none");
    $("#contact").css("display", "none");

});
    // display contact
$("#comnav").click(function() {
    $("#contact").css("display","flex");
    $("#portfolio").css("display", "none");
    $("#home").css("display", "none");

});
});