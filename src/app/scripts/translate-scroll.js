var $window = $(window);
function checkIfInView() {
    var window_height = $window.height();
    var window_top_pos = $window.scrollTop();
    var window_bottom_pos = (window_top_pos + window_height);
    $('.slide-animation-to-left').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_pos = $element.offset().top;
        var perc = (window_bottom_pos - element_top_pos) / element_height * 1.5;
    
        if (element_top_pos <= window_bottom_pos) {
            if (perc >= 1) {
                perc = 0;
            } else {
                perc = 1 - perc;
            }
            
            var transform_matrix = 'matrix(1, 0, 0, 1, ' + (246 * perc) + ', 0)'; 
            $element.css({transform: transform_matrix});
        } 
    });
    $('.slide-animation-to-right').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_pos = $element.offset().top;
        var perc = (window_bottom_pos - element_top_pos) / element_height * 1.5;
    
        if (element_top_pos <= window_bottom_pos) {
            if (perc >= 1) {
                perc = 0;
            } else {
                perc = 1 - perc;
            }
            var x = parseInt($element.css('transform').split(', ')[4]);
            var transform_matrix = 'matrix(1, 0, 0, 1, ' + (-246 * perc) + ', 0)'; 
            $element.css({transform: transform_matrix});
        } 
    });
}

$(function() {
    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');
});

