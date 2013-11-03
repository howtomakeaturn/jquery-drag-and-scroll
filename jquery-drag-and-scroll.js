(function($) {

    $.fn.dragAndScroll = function() {
        return this.each( function() {
            $(this).mousedown(function (event) {
                $(this)
                    .data('down', true)
                    .data('x', event.clientX)
                    .data('scrollLeft', this.scrollLeft)
                    .data('y', event.clientY)
                    .data('scrollTop', this.scrollTop);
                    return false;
            }).mouseup(function (event) {
                $(this).data('down', false);
            }).mousemove(function (event) {
                if ($(this).data('down') == true) {
                    this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
                    this.scrollTop = $(this).data('scrollTop') + $(this).data('y') - event.clientY;
                }//end if
            })
        });//end return
    }//end dragAndScroll
}(jQuery));
