$(document).ready(function() {
    $("#menu-bars").click(function() {
        $('#main-menu').toggle();
        $("#menu-bars").toggleClass("open-menu");
    });

    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );

    $('.counter').counterUp({
      delay: 10,
      time: 2000
  }); 
});

