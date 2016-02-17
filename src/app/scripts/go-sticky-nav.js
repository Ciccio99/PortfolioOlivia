$(window).bind("load", function() {
    var $window = $(window);

    function checkIfStick() {
        var window_height = $window.height();
        var window_top_pos = $window.scrollTop();
        
        $('.become-sticky-here').each(function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_pos = $element.offset().top;
            var element_bot_pos = element_height + element_top_pos;
            var nav_height = $("#Sticky_Nav").outerHeight();

            if (window_top_pos >= element_bot_pos - 35) {
                $('#Sticky_Nav').css({background: 'rgba(255, 255, 255, .93'});
                $('.nav-buttons-holder').css({padding: '0 0 0 0'});
                $('.navbar-logo-container').css({top: '16px', 'max-width': '38px'});
                $('.active-nav').css({color: '#050505'});
            } else {
                $('#Sticky_Nav').css({background: 'rgba(255, 255, 255, 0'});
                $('.nav-buttons-holder').css({padding: '50px 0 0 0'});
                $('.navbar-logo-container').css({top: '32px', 'max-width': '70px'});
                $('.active-nav').css({color: '#efefef'});
            }
        });
    }
    $window.on('scroll resize', checkIfStick);
    $window.trigger('scroll');
});

