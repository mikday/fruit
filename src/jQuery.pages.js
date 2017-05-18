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
                console.log("page_li_height0 = " + page_li_height * 3);
                console.log("page_li_H0 = " + page_li_H);
                function page() {
                    if (page_li_H >= page_li_height * 3) {
                        console.log("page_li_height0 = " + page_li_height * 3);
                        console.log("page_li_H0 = " + page_li_H);

                        page_li.css({'height': page_li_height * 3 + 'px'});
                        page_li.closest('.li_pages').find('.pages').show();

                        if (page_li_height < 130 ){
                            var tittle_h = li_pages.closest('.right_content').find('.page_tittle').height();
                            var count = Math.floor((511 - pages_height) / page_li_height);
                            var max_length = page_li.closest('.li_pages').find('.page_li>li').length;
                            console.log("count = " + count);
                            console.log("max_length = " + max_length);
                            page_li_height = page_li.find('li').outerHeight(true);
                            if (max_length < count) {
                                console.log("count0 = " + count);
                                console.log("max_length0 = " + max_length);
                                page_li.css({'height': 'auto'});
                                page_li.parent('.li_pages').find('.pages').hide();

                            } else {
                                console.log("count1 = " + count);
                                console.log("max_length1 = " + max_length);
                                page_li.css({'height': page_li_height * count + 'px'});
                                page_li.parent('.li_pages').find('.pages').show();
                            }
                        }

                    } else {
                        console.log("page_li.outerHeight() < page_li_height * 3");
                        page_li.css({'height': 'auto'});
                        page_li.parent('.li_pages').find('.pages').hide();
                    }
                }
                page();

            }
        });
    }

})(jQuery);
