$(function(){
	//$(".parentName").wrapInner("<span></span>").prepend("<i></i>");
	if($("#zj .sideMenu li").length>0){
		$("#zj").show();
		$("#fj").hide();
	}
	if($("#qzfj").length>0){
		$("#fj").show();
		$("#zj").hide();
	}
	if($("#qzzj").length>0){
		$("#zj").show();
		$("#fj").hide();
	}
	
	//手机版侧边导航

	$(".mobile_sidebar_icon").on("click", function(e){
		if ($(".mobile_sidebar_icon").hasClass("mobile_sidebar_icon_open")) {
			$(".mobile_sidebar_mark").fadeOut("fast");
			$(".mobile_sideBar").css({left:-200});
			$(".mobile_sidebar_icon").removeClass("mobile_sidebar_icon_open");

		}else{
			$(".mobile_sidebar_mark").fadeIn("fast");
			$(".mobile_sideBar").css({left:0});
			$(this).addClass("mobile_sidebar_icon_open");
		}

	 });

	$(".mobile_sidebar_mark").on("click", function(){
		$(".mobile_sidebar_mark").fadeOut("fast");
		$(".mobile_sideBar").css({left:-200});
		$(".mobile_sidebar_icon").removeClass("mobile_sidebar_icon_open");
	});
});	

$(function(){	
	$(".sideMenu a").each(function(){
		if($.trim($(this).attr('id'))== "menuId_" + codeName){
			$(this).addClass('aon');
			if($(this).parents(".dropdown")){
                $(this).parents(".dropdown").prev("a").addClass('aon');
            }
		}
		//if($(this).attr("href").indexOf("http://")==0){
			//$(this).attr("target","_blank");
		//}
	});

	
	

});

$(function(){	
	$(".ysgzMenu a").each(function(){
		if($.trim($(this).attr('id'))== "menuId_" + codeName){
			$(this).addClass('aon');
			if($(this).parents(".dropdown")){
                $(this).parents(".dropdown").prev("a").addClass('aon');
            }
		}
		if($(this).attr("href").indexOf("http://")==0){
			$(this).attr("target","_blank");
		}
	});

	
	

});
