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


                function page() {
                    if (page_li_H >= page_li_height * 3) {



                       if(page_li_height * 3 < 500){
                            var indexLI = page_li.find('li').length;
                            var minH = 700;
                            var count = Math.floor(minH / page_li_height);
                            console.log("page_li_height = " + page_li_height);
                            console.log("count = " + count);
                            if(count > indexLI ){
                                console.log("oo");
                                page_li.css({'height': "auto" + 'px'});
                                page_li.closest('.li_pages').find('.pages').hide();

                            }else{
                                page_li.css({'height': count * page_li_height + 'px'});
                                page_li.closest('.li_pages').find('.pages').show();

                            }

                       }else{
                           page_li.css({'height': page_li_height * 3 + 'px'});
                           page_li.closest('.li_pages').find('.pages').show();

                       }
                    if($('.gifts').is(":visible")){
                        if(page_li_H = page_li_height * 3){
                            page_li.css({'height': page_li_height * 3 + 'px'});
                            page_li.closest('.li_pages').find('.pages').hide();
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
