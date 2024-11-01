$( document ).ready(function() {

    $(".appointment-schedule__menu ul li").on( "click", function() {
        if($(this).has("ul").length && !$(this).parent().hasClass("active-parent")) {
            $(this).css('background-image', 'url("../Appointments/expand.svg")');
            $(".appointment-schedule__image").hide();
            $(this).children("ul").addClass("active");
            $(this).parent().addClass("active-parent");
            $(this).parent().css("position", "absolute");
            $(this).children("ul").css("position", "absolute");
        }
        if ($(this).has("ul").length) {
            $(this).css("color", "black");
        }
 
    });

    var mediaQuery = window.matchMedia('(max-width: 576px)');
    
    function handleMediaQueryChange(mediaQueryList) {
        if (mediaQueryList.matches) {
            // Code for mobile view
            $(".header__search").on("click", function() {
                $(".appointment-search").toggle();
            });

            $(".header__hamburger").on("click", function() {
                $(".header__nav .nav").addClass("nav-mob");
                $(".header__nav").toggle();
            });

            $(".nav__item_dropdown").on("click", function() {
                $(this).find("ul").toggle();
            });

            $(".appointment-schedule__menu ul li").on("click", function() {
          
                if($(this).find("> ul").css("display" , "none")) {
                    $(this).find("> ul").css("display" , "block")
                } else {
                    $(this).find("> ul").css("display" , "none !important")
                }
            });

            
        }
    }
    
    // Initial check
    handleMediaQueryChange(mediaQuery);
    
    // Listen for changes
    mediaQuery.addListener(handleMediaQueryChange);
});


