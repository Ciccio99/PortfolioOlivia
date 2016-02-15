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

            if (window_top_pos >= element_bot_pos - nav_height) {
                $('#Sticky_Nav').css({position: 'fixed', background: 'rgba(255, 255, 255, .93'});
            } else {
                $('#Sticky_Nav').css({position: 'absolute',background: 'rgba(255, 255, 255, 0'});
            }
        });
    }
    $window.on('scroll resize', checkIfStick);
    $window.trigger('scroll');
});

