//jQuery('.zwgk_ldzc .names li:eq(2) a').removeAttr("href");/
//$(".menu .sideMenu li a").each(function(){
			//if($(this).text()=="胡洪"){
				//$(this).removeAttr("href");
			//}
		//})-->

//百度统计 

var _hmt = _hmt || []; 
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1a1ba310b5d048d6cbdc05e1b4a71c7b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

document.write("<script src='/global/scrolltopcontrol.js'></script>");
//简繁体切换
var strM = document.location.href;
function go_chinese(portnum){
	var strM1 = strM.replace(/(http:\/\/[^\/]*)(:[0-9]*\/)([.^:]*)/gi,"$1:"+portnum+"/$3");
	if(portnum=="80"){var strM1 = strM.replace(/(http:\/\/[^\/^:]*)(:[^\/]*)*\/(.*)/gi,"$1\/$3"); }
	else{var strM1 = strM.replace(/(http:\/\/[^\/^:]*)(:[^\/]*)*\/(.*)/gi,"$1:"+portnum+"/$3");}
	window.location.href=strM1
}
//浏览器版本
function loadBrowser() {
	var userAgent = navigator.userAgent.toLocaleLowerCase();
	if ((userAgent.match(/(mqqbrowser|juc|fennec|symbian|windows phone|android|blackberry|webos|browserng|iemobile|wosbrowser|iphone)/i))) {
		return "mobile"
	} 
}

function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) {   
        return unescape(r[2]);  
    }  
    return "";  
}
//searh
$(".header_ss_open").click(function(){
	$(this).fadeOut("slow");
	$(".searchbox").addClass("fb");
	$(".header_ss").fadeIn("slow");
	$(".header_ss .stxt").focus();
});

$(".header_ss .close").click(function(){
  $(".searchbox").removeClass("fb");
  $(".header_ss").fadeOut("fast");
  $(".header_ss_open").fadeIn("slow");
});
$(".menuopen").click(function(){
	$(".easybtn2021").slideToggle("fast");
	$(".menuopen i").toggleClass("icon-menu-outline");
	$(".menuopen i").toggleClass("icon-close-outline");
});

//搜索提交
$(".ss input.sbtn").click(function(){
	 searchs();
});
//当前大栏目
try{
	var str = $(".curmb").text(); 
	var str1 = str.split(">")[1];
	if($.trim(str1)!=''){
	  $(".mainnav li").each(function(){
		if($(this).text().search($.trim(str1))>-1){
			$(this).addClass("on").siblings().removeClass("on");
		}
	  });
	}else{}
}catch(e){}




	//分享
	$('.fxd_con').append('<div id="share-1" style="display: inline-block;" data-sites="wechat ,weibo, qq"></div>');
	$('.fxd_con2').append('<div id="share-1" style="display: inline-block;" data-sites="wechat ,weibo, qq"></div>');

	 



//头部响应式
function brr(tops){
        t = $(document).scrollTop();
		if(t > tops){
			 var oTop=$(document).scrollTop()+1;
			$(".easybtn_main").finish().animate({top:oTop});
		}else{
			$(".easybtn_main").finish().animate({top:tops});
		}
    }
$(window).scroll(function(e){
    brr(146);
});



	





$("head").append("<link rel='Shortcut Icon' href='/global/favicon.ico' type='image/x-icon'/>");

