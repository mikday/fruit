(function ($) {
    var _defaults = {};
    $.fn.liPages = function (options) {
        var opts = $.extend({}, _defaults, options);

        this.each(function () {
            var li_pages = $(this);
            if (li_pages.is(":visible")) {

                var page_li = li_pages.find('.page_li');
                var page_li_height = page_li.find('li').outerHeight(true);

                var pages_height = page_li.parent('.li_pages').find('.pages').height();

                var w_height = $(window).height();
                var top_height = $('.top').height();
                var footerH = $('.foot_bottom_simple').height();
                var navH;

                if ($('nav').is(":visible")) {
                    navH = $('nav').height();
                } else {
                    navH = 0;
                }
                /*  main 页面长度 */
                function normalHeight(m_height){
                    $('.normal').css({"height": m_height + top_height + footerH + navH + "px"});

                    var normalH = $('.normal').height();

                    if (normalH < w_height) {
                        $('.normal').css({"height": 100 + "%"});
                        return;
                    }
                }

                function page(){
                    if (page_li.outerHeight() >= page_li_height * 3) {

                        page_li.css({'height': page_li_height * 3 + 'px'});

                        page_li.closest('.li_pages').find('.pages').show();

                        var wh = $(window).height();
                        var main_height;
                        if (page_li_height * 3 <= wh * 0.7) {
                            var count = Math.floor((wh - pages_height - top_height - footerH - navH) / page_li_height);
                            var max_length = page_li.closest('.li_pages').find('.page_li>li').length;

                            if (max_length <= count) {
                                page_li.css({'height': 'auto'});
                                page_li.parent('.li_pages').find('.pages').hide();
                                main_height = $('.main').height();
                                normalHeight(main_height);
                            }else{
                                page_li.css({'height': ( page_li_height + 2) * count + 'px'});
                                page_li.parent('.li_pages').find('.pages').show();
                                main_height = $('.main').height();
                                normalHeight(main_height);
                            }
                        }

                    } else {
                        page_li.css({'height': 'auto'});
                        page_li.parent('.li_pages').find('.pages').hide();
                        main_height = $('.main').height();
                        normalHeight(main_height);
                    }
                    var main_height = $('.main').height();
                    normalHeight(main_height);
                }
                page();
                $(window).resize(function(){
                    page();
                });


            }
        });
    }

})(jQuery);
