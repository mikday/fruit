(function($){
    var _defaults = {
        class: 'gg',
        text:['11','22','33'],
        isNum:true,
        num:[89,1908,890,786],
        value:['all','good','bad','hasImg']
    };
    $.fn.CheckBox = function (options,eps){
        var opts = $.extend({}, _defaults, options);

        this.each(function (){
            var $singleBox;
            var $sPan;
            var $labBel;
            var $InPut;
            var $l=opts.text.length;
            for(i=0;i<$l;i++){
                $InPut=$('<input type="checkbox" value="'+ opts.value[i] +'"/>');
                opts.isNum ? $sPan=$('<p><span class="checkbox_text">' + opts.text[i] + '</span>&nbsp;&nbsp;<span class="small">(' + opts.num[i] + ')</span></p>') : $sPan=$('<p><span class="checkbox_text">' + opts.text[i] + '</span></p>');
                $labBel=$('<label></label>');
                $singleBox=$('<div class="single-box"></div>');
                $singleBox.append($labBel);
                $labBel.append($InPut);
                $labBel.append($sPan);
                $(this).append($singleBox);
            }

            var $this=$(this).find('input[type="checkbox"]');

            $this.unbind('click').bind('click',function(){
                var r=$(this).prop("checked");
                var eps=function(){
                    r=$(this).prop("checked");
                    return r;
                };
                if(r){
                    if($(this).siblings('p').find('.checkbox_text').text() == "全部"){
                        $(this).closest('.checkbox').find('.single-box').find('p').removeClass('gg');
                    }else{
                        $(this).closest('.checkbox').find('.single-box').find('input[value="all"]').siblings('p').removeClass('gg');
                    }
                    $(this).siblings('p').addClass('gg');
                }else
                {
                    $(this).siblings('p').removeClass('gg');
                }


            });
        });
    }

})(jQuery);
