










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

$(".animate").click(function(){
    anime({
        targets: '.man',
        keyframes: [
          {translateY:-10 },
          {translateY:0 },
        ],
        duration: 200,
        easing: 'easeOutElastic(1, .8)',
        loop:false
      });
})
$("#sendEmail").click(function(){
    $(".alert").empty()
    $(".alert").append(`<div class="notification is-danger">
    <button class="delete"></button>
Feature is still in the works
  </div>`)
})

$(document).on('click','.delete', function(){
    $('.alert').empty()
})
});