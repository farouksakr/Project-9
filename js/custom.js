$(function () {

    // nice scroll

    $(function() {  

        $("body").niceScroll({
            cursorcolor: "#E41B17",
            cursorwidth: "8px",
            cursorborder: "none",
            zindex:[99999]
        });

    });

    $('.carousel').carousel({

        interval: 3000

    });

    // show color option div when click on the gear 

    $('.gear-check').click(function () {

        $('.color-option').fadeToggle();

    })

    // change theme color on click

    var colorLi = $('.color-option ul li');

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426d5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#d69d00");

    colorLi.click(function () {

        $("link[href*='theme']").attr('href', $(this).attr('data-value'))

    });

    // scroll to top

    var scrollButton = $('#scroll-top')

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 1000) {

            scrollButton.fadeIn(1000)

        } else {

            scrollButton.fadeOut(1000);
            
        }

    });

    // click on button to scroll top

    scrollButton.click(function () {

        $('html, body').animate({ scrollTop: 0 }, 1000)

    })

});

// loading page

$(window).on('load', function () {

    $('.loading-overlay .spinner').fadeOut(2000, function () {

        $(this).parent().fadeOut(1000, function () {

            $(this).remove();

        })

    });

});