/**
 * Created by ZHANJIA on 2017/4/22.
 */
    (function ($) {
        var defaults = {
            //暂时不可改，后面改进 （ T T ）;
            position:"auto",
            text:"error",
            img:false
    };
        $.fn.extend({
            toolTips: function (options) {
            var opts = $.extend({}, defaults, options);


            return this.each(function () {
                var _this = $(this);
                var toolTips = $('<div class="tool-tips"></div>');
                var tipAngle = $('<div class="tip-angle"></div>');
                var tipText = $('<div class="tip-text">'+ opts.text +'</div>');
                var t_body = $('body');
                var obj = $(this);
                obj.click(function () {
                    var e=arguments.callee.caller.arguments[0]||event;
                    if ( e && e.stopPropagation ){
                        e.stopPropagation();
                    }else{
                        window.event.cancelBubble = true;
                        return false;
                    }
                    console.log(_this);
                    console.log(opts.img);

                    toolTips.fadeIn(500);
                    var objW = obj.width();
                    var objH= obj.height();
                    var objX = obj.offset().left;
                    var objY = obj.offset().top;
                    t_body.addClass('show_tool');
                    t_body.append(toolTips);
                    var toolW = toolTips.outerWidth();
                    var toolH = toolTips.outerHeight();
                    if(opts.img){
                        toolTips.empty().append('<img src="' + _this.find('img').attr("src") +'" alt="点击任意地方关闭"/>');
                        toolTips.addClass('tool_img');
                        toolTips.css({'left':(t_body.width() - toolTips.width())/2 + "px","top":(t_body.height() - toolTips.width() + $(window).scrollTop())/2 + "px"})
                    }else{
                        //判断方向,默认上方
                        if(objY > toolH ){
                            toolTips.append(tipText);
                            toolTips.append(tipAngle);
                            toolTips.addClass('top');
                            toolW = toolTips.outerWidth();
                            toolH = toolTips.outerHeight();
                            toolTips.css({"left" : objX + objW/2 - toolTips.width()/2 + "px","top" : objY - toolTips.height()  + 'px'});

                        }else if(objY > toolH && $(window).width() - objX < toolW){
                            toolTips.append(tipAngle);
                            toolTips.append(tipText);
                            toolTips.addClass('bottom');
                            toolW = toolTips.outerWidth();
                            toolTips.css({"left" : -(toolW - objW)/2 + "px","top" : objH + "px"});
                        }
                    }
                });
                t_body.click(function(){
                    var e=arguments.callee.caller.arguments[0]||event;
                    if ( e && e.stopPropagation ){
                        e.stopPropagation();
                    }else{
                        window.event.cancelBubble = true;
                        return false;
                    }
                        toolTips.fadeOut(500,function(){toolTips.remove()});
                    });

            });

        }
    })
    })(jQuery);