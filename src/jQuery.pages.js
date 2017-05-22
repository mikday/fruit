(function ($) {
    var _defaults = {};

    $.fn.liPages = function (options) {
        var opts = $.extend({}, _defaults, options);

        this.each(function () {
            var li_pages = $(this);

            if (li_pages.is(":visible")) {


                var page_li = li_pages.find('.page_li');

                // 初始化
                page_li.css({'height' : 'auto'});

                var page_li_H = page_li.height();

                var page_li_height = page_li.find('li').outerHeight(true);

                if (page_li_H > page_li_height * 3) {

                    if (page_li_height * 3 < 500) {
                        var indexLI = page_li.find('li').length;
                        var minH = 700;
                        var count = Math.floor(minH / page_li_height);
                        console.log("page_li_height = " + page_li_height);
                        console.log("count = " + count);
                        if (count > indexLI) {
                            console.log("oo");
                            page_li.css({'height': "auto" + 'px'});
                            page_li.closest('.li_pages').find('.pages').hide();

                        } else {
                            page_li.css({'height': count * page_li_height + 'px'});
                            page_li.closest('.li_pages').find('.pages').show();

                        }

                    } else {
                        page_li.css({'height': page_li_height * 3 + 'px'});
                        page_li.closest('.li_pages').find('.pages').show();

                    }

                } else {
                    console.log("page_li.outerHeight() < page_li_height * 3");
                    page_li.css({'height': 'auto'});
                    page_li.parent('.li_pages').find('.pages').hide();
                }


            }
        });
    }

})(jQuery);
