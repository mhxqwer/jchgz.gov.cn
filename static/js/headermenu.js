(function(){
 
//点击导航高亮
$("body").on("click", '.nav-a', function () {
    var moveX = $(this).position().left + $(this).parent().scrollLeft();
    var pageX = document.documentElement.clientWidth;
    var blockWidth = $(this).width();
    var left = moveX - (pageX / 2) + (blockWidth / 2);
    $(".nav-list").animate({
        scrollLeft: left,
    });
    $(".nav-a").removeClass("selected");
    $(this).addClass("selected");
    var cate_index = $(this).prevAll().length;
    var a_id = $(this).attr('navid');
    if (a_id == 0) {
        $('.tuijian').show();
        $('#qudao').show();
    } else {
        $('.tuijian').hide();
        $('#qudao').hide();
    }
    //var pxs = parseInt(cate_index) * 52;
    //$('.bar').css({"width": "52px", "transition-duration": "100ms", "transform": "translateX(" + pxs + "px)"})
});

$("#rsk").click(function(){
    $("#thediv").slideToggle();
    $('#thediv').css("display","block");
})
})()

$("#shb").click(function(){
    $("#shbdiv").slideToggle();
    $('#shbdiv').css("display","block");
})
