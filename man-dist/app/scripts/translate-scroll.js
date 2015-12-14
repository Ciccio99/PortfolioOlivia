var $window = $(window);
function checkIfInView() {
    var window_height = $window.height();
    var window_top_pos = $window.scrollTop();
    var window_bottom_pos = (window_top_pos + window_height);
    
    $('.slide-animation-to-left').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_pos = $element.offset().top;
        var perc = (window_bottom_pos - element_top_pos) / element_height * 1.33;
    
        if (element_top_pos <= window_bottom_pos) {
            if (perc >= 1) {
                perc = 0;
            } else {
                perc = 1 - perc;
            }
            var transform_matrix = 'translate3d(' + (30 * perc) + '%, 0, 0)';
            $element.css({transform: transform_matrix});
        } 
    });
    $('.slide-animation-to-right').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_pos = $element.offset().top;
        var perc = (window_bottom_pos - element_top_pos) / element_height * 1.33;
    
        if (element_top_pos <= window_bottom_pos) {
            if (perc >= 1) {
                perc = 0;
            } else {
                perc = 1 - perc;
            }
            var transform_matrix = 'translate3d(' + (-30 * perc) + '%, 0, 0)'; 
            $element.css({transform: transform_matrix});
        } 
    });
}

$(function() {
    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

