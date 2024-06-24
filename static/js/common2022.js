$(function () {
    var state=0;
    $('header>span:first-child').on('touchstart',function () {
        if (state){
            state=0;
            $('.search').css('height',0);
            $('.openSearch').show();
            $('.closeSearch').hide();
            $('.mainnav').show();  
            $('.yymenu').hide();  
            
        } else {
            state=1;
            $('.search').css('height','auto');
            $('.openSearch').hide();
            $('.closeSearch').show().css('display','inline-block');
            $('.mainnav').hide();   
            $('.yymenu').hide();  
        }
    });
	
    /*var statey=0;
    $('header>span:last-child').on('touchstart',function () {
        if (statey){
            statey=0;
            $('.yymenu').css('height',0);
            $('.openyymenu').show();
            $('.closeyymenu').hide();
            $('.yymenu').hide();
        } else {
            statey=1;
            $('.yymenu').css('height','7.6rem');
            $('.yymenu').show();
            $('.openyymenu').hide();
            $('.closeyymenu').show();
            
           
        }
    });*/

    $(".openyymenu").pageslide({ direction: "left", modal: true});			
	
    $('.hreflist').find('a').on('click',function(){
        var id = '#new'+$(this).attr('id') + 'box';
        $('body').addClass('ovh')
        $(id).show();
    })

     $('.btnlist').find('a').on('click',function(){
        var id = '#new'+$(this).attr('id') + 'box';
        $('body').addClass('ovh')
        $(id).show();
    })
    $('.jdcx').find('a').on('click',function(){
        var id = '#new'+$(this).attr('id') + 'box';
        $('body').addClass('ovh')
        $(id).show();
    })

    $('.listbox').on('click',function(e){
        if($(this).hasClass("listbox")){
            $(this).hide();
            $('body').removeClass('ovh')
        }
    }) 

    if($('.index2022').length>0|$('.index').length>0){
        window.onscroll = function() {
          //为了保证兼容性，这里取两个值，哪个有值取哪一个
          //scrollTop就是触发滚轮事件时滚轮的高度
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop>300){
              $('.newgotop').show();
          }else{
              $('.newgotop').hide();
          }
        }
         $('.newgotop').on('click',function(){
             document.body.scrollTop = 0;
             document.documentElement.scrollTop = 0;
             $('.newgotop').hide();
         })
    }
});


/*
 jQ向上滚动带上下翻页按钮
 */
(function($){
    $.fn.extend({
        Scroll:function(opt,callback){
            //参数初始化
            if(!opt) var opt={};
            var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
            var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
            var timerID;
            var _this=this.eq(0).find("ul:first");
            var lineH=_this.find("li:first").height(), //获取行高
                line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
            var timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
            if(line==0) line=1;
            var upHeight=0-line*lineH;
            //滚动函数
            var scrollUp=function(){
                _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
                _this.animate({
                    marginTop:upHeight
                },speed,function(){
                    for(var i=1;i<=line;i++){
                        _this.find("li:first").appendTo(_this);
                    }
                    _this.css({marginTop:0});
                    _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
                });

            };
            //Shawphy:向下翻页函数
            var scrollDown=function(){
                _btnDown.unbind("click",scrollDown);
                for(var i=1;i<=line;i++){
                    _this.find("li:last").show().prependTo(_this);
                }
                _this.css({marginTop:upHeight});
                _this.animate({
                    marginTop:0
                },speed,function(){
                    _btnDown.bind("click",scrollDown);
                });
            };
            //Shawphy:自动播放
            var autoPlay = function(){
                if(timer)timerID = window.setInterval(scrollUp,timer);
            };
            var autoStop = function(){
                if(timer)window.clearInterval(timerID);
            };
            //鼠标事件绑定
            _this.hover(autoStop,autoPlay).mouseout();
            _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
            _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);

        }
    });
})(jQuery);

// 导航条置顶
$(function(){
    var scTop=0;//初始化垂直滚动的距离
    $(document).scroll(function(){
        scTop=$(this).scrollTop();//获取到滚动条拉动的距离
        if(scTop>=200){
            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
            $(".mainnav2022").addClass("fixDiv");
            $(".headline").css("padding-top","58px");
        }else{
            $(".mainnav2022").removeClass("fixDiv");
            $(".headline").css("padding-top","0");
        }

    })
});

$(function () {
    $(".mainnav2022 ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    var obj = window.location.href;
    var index=obj.lastIndexOf("\#");
    obj=obj.substring(index,obj.length);
});


