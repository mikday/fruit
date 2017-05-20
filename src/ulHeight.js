/**
 * Created by ZHANJIA on 2017/5/16.
 */
(function ($) {
    var _defaults = {
        fruitLi_height: 0,
        fruitUl_height: 0
    };
    $.fn.ulHeight = function (options) {
        var opts = $.extend({}, _defaults, options);

        this.each(function () {
            var fruitUl = $(this);
            if (fruitUl.is(":visible")) {
                console.log(fruitUl);
                /*  main 页面长度 */

                function ul_height() {
                    var fruitLi = fruitUl.find('li');
                    console.log("opts.fruitLi_height " + opts.fruitLi_height);

                    var fruitLi_height = opts.fruitLi_height || fruitLi.outerHeight(true);
                    var fruitUl_height = opts.fruitUl_height || fruitUl.height();

                    console.log("fruitLi_height " + fruitLi_height);
                    console.log("fruitUl_height " + fruitUl_height);

                    if (fruitUl_height > fruitLi_height * 3) {
                        fruitUl.css({'height': ( fruitLi_height ) * 3 - 10 + 'px'});
                        fruitUl.closest('.normal_p').find('.pages').show();

                    } else {
                        fruitUl.css({'height': 'auto'});
                        fruitUl.parent('.li_pages').find('.pages').hide();
                    }

                }
                ul_height();
            }

        });
    }

})(jQuery);


