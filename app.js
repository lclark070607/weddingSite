$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $('body').scrollspy({ 
        target: '.navbar', 
        offset: 140
    });

    //smooth scrolling
    $('nav a, .down-button a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -100
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

    // //parallax scrolling
    // $(window).stellar();

});

$('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });