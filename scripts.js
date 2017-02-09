
function sendMail() {
    $("mailform").ajaxSubmit({ url: 'http://solution404.cloudapp.net:1337/send/send', type: 'POST' });
}

(function ($) {
    $(document).ready(function () {


        $('#mailform').submit(function () {
            $("#mailform").ajaxSubmit({ url: 'http://solution404.cloudapp.net:1337/send/send', type: 'POST' });
            $('#mailform')[0].reset();
            alert("Mail has been sent successfully");
            return false;
        });

        // hide .navbar first
        $(".navbar").hide();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 100) {
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });


        // scroll speed


        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });


        //  mail



    });
} (jQuery));