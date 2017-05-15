/**
 * Created by ZHANJIA on 2017/4/23.
 */
(function ($) {
    var defaults = {
        //暂时不可改，后面改进 （ T T ）;
        long:false,
        hide:"auto"
    };
    $.fn.extend({
        MyModal: function (options) {
            var opts = $.extend({}, defaults, options);
            return this.each(function () {
                var obj = $(this);
                var wH =$(window).height();
                var wW =$(window).width();
                var modal = $('.myModal');
                var modal_body = $('.myModal_body');


                obj.click(function(){
                    var key = $(this).data('value');
                    var target = $('.myModal[data-value="'+ key +'"]');
                    var bodyH = target.find('.myModal_body').height();
                    modal.css({'top' : $(window).scrollTop()+ "px"});
                    if(opts.long){
                        target.addClass('long');
                        $('body').css({'overflow':'hidden'});
                    }else{
                        target.find('.myModal_body').css({'margin-top' : (wH - bodyH) / 2 + "px"});
                    }
                    target.show();
                });


                modal.click(function(){
                    $(this).removeClass('long').hide();
                    $('body').css({'overflow':'visible'});
                });

                modal_body.click(function(){
                    var e=arguments.callee.caller.arguments[0]||event;
                    if ( e && e.stopPropagation ){
                        e.stopPropagation();
                    }else{
                        window.event.cancelBubble = true;
                        return false;
                    }
                });

            });
        }
    })
})(jQuery);

