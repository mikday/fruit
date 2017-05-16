(function ($) {
    var _defaults = {};

    $.fn.liPages = function (options) {
        var opts = $.extend({}, _defaults, options);
        // console.log(typeof li_pages);
        this.each(function () {
            var li_pages = $(this);

            if (li_pages.is(":visible")) {
                // console.log();

                var page_li = li_pages.find('.page_li');
                var page_li_H = page_li.height();
                var page_li_height = page_li.find('li').outerHeight(true);

                var pages_height = page_li.parent('.li_pages').find('.pages').height();

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
                var wh = $(window).height();
                var main_height;

                function page() {
                    if (page_li_H >= page_li_height * 3) {

                        page_li.css({'height': page_li_height * 3 + 'px'});
                        page_li.closest('.li_pages').find('.pages').show();
                        if (page_li.height() <= 500 || page_li_height < 200 ){
                            console.log("normalH < w_height");
                            var naH;
                            if($(window).height <= 480){
                                naH = 0;
                            }else{
                                naH = $('nav').height();
                            }
                            var count = Math.floor(511 / page_li_height);
                            var max_length = page_li.closest('.li_pages').find('.page_li>li').length;
                            console.log("max_length =" + max_length);
                            console.log("count =" + count);

                            if (max_length <= count) {
                                console.log("max_length <= count");
                                page_li.css({'height': 'auto'});
                                page_li.parent('.li_pages').find('.pages').hide();
                                main_height = $('.main').height();
                                normalHeight(main_height);
                            } else {
                                console.log(max_length > count);
                                page_li.css({'height': ( page_li_height ) * count + 'px'});
                                page_li.parent('.li_pages').find('.pages').show();
                                main_height = $('.main').height();
                                normalHeight(main_height);
                            }
                        }
                        console.log("page_li.outerHeight() >= page_li_height * 3");

                    } else {
                        console.log("page_li.outerHeight() < page_li_height * 3");
                        page_li.css({'height': 'auto'});
                        page_li.parent('.li_pages').find('.pages').hide();
                        main_height = $('.main').height();
                        page_li_H = page_li.height();
                        normalHeight(main_height);
                    }
                }
                page();
                $(window).resize(function () {
                    page();
                });
            }
        });
    }

})(jQuery);
