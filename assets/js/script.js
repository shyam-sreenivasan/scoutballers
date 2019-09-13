$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $("#mainNav").css("position" , "absolute");
        }
  
        else{
          $("#mainNav").css("position" , "fixed");
        }
    })
  })