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

$(function () {
  count = 0;
  wordsArray = ["Fragrant", "Delicious", "flavorful", "amazing"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});

