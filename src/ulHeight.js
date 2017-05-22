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
                /*  main 页面长度 */
                console.log("ii");

                var fruitLi = fruitUl.find('li');
                fruitUl.css({'height': "auto"});

                var fruitLi_height = opts.fruitLi_height || fruitLi.outerHeight(true);
                var fruitUl_height = opts.fruitUl_height || fruitUl.height();


                if (fruitUl_height > fruitLi_height * 3) {
                    console.log("ii");

                    fruitUl.css({'height': fruitLi_height * 3 - 10 + 'px'});

                    fruitUl.closest('.normal_p').find('.pages').show();


                } else {
                    console.log("auto");
                    fruitUl.css({'height': 'auto'});
                    fruitUl.parent('.li_pages').find('.pages').hide();

                }

            }

        });
    }

})(jQuery);


