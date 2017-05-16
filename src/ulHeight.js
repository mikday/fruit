/**
 * Created by ZHANJIA on 2017/5/16.
 */
(function ($) {
    var _defaults = {
        fruitLi_height: "",
        fruitUl_height: ""
    };
    $.fn.ulHeight = function (options) {
        var opts = $.extend({}, _defaults, options);

        this.each(function () {
            var fruitUl = $(this);
            if (fruitUl.is(":visible")) {
                console.log(fruitUl);
                /*  main 页面长度 */
                function normalHeight(m_height) {
                    var w_height = $(window).height();
                    var top_height = $('.top').height();
                    var footerH = $('.foot_bottom_simple').height();
                    var navH;
                    if ($('nav').is(":visible")) {
                        navH = $('nav').height();
                    } else {
                        navH = 0;
                    }
                    $('.normal').css({"height": m_height + top_height + footerH + navH + "px"});

                    var normalH = $('.normal').height();

                    if (normalH < w_height) {
                        $('.normal').css({"height": 100 + "%"});
                        return;
                    }
                }

                function ul_height() {
                    var fruitLi = fruitUl.find('li');
                    var main_height;
                    var fruitLi_height = opts.fruitLi_height || fruitLi.outerHeight(true);
                    var fruitUl_height = opts.fruitUl_height || fruitUl.height();
                    console.log("fruitLi_height " + fruitLi_height);
                    console.log("fruitUl_height " + fruitUl_height);

                    if (fruitUl_height >= fruitLi_height * 4) {
                        fruitUl.css({'height': ( fruitLi_height ) * 4 - 10 + 'px'});
                        fruitUl.closest('.normal_p').find('.pages').show();
                        main_height = $('.main').height();
                        normalHeight(main_height);
                    } else {
                        fruitUl.css({'height': 'auto'});
                        fruitUl.parent('.li_pages').find('.pages').hide();
                        main_height = $('.main').height();
                        normalHeight(main_height);
                    }

                }

                ul_height();
                $(window).resize(function () {
                    ul_height();
                });
            }

        });
    }

})(jQuery);


