document.onkeydown = keyDown;
function keyDown(e){
	var e=(typeof event!="undefined")?window.event:e;   // IE : Firefox
	var s=(document.getSelection)?document.getSelection():document.selection.createRange().text;
	//alert(s);
	if(e.ctrlKey && e.keyCode==13){
		if (s!="") {
			window.open("/nrjc.html","Page");
		}else{
			
			
			if (s!="") {
				window.open("/nrjc.html","Page");
			}else{
				alert("请先用鼠标选择出错的内容片断！");
				return false;
			}
		}
	}
}
function send_error(){
	var s=(document.getSelection)?document.getSelection():document.selection.createRange().text;

	if(s=="")
	s=(parent.document.getSelection)?parent.document.getSelection():parent.document.selection.createRange().text;

	if (s!="") {
		window.open("/nrjc.html?id=99049&text="+s,"Page");
	}else{
		var a = parent.document.getElementsByTagName("IFRAME");
			for(var i=0; i<a.length; i++){
				if(a[i].document){
					s=(a[i].document.getSelection)?a[i].document.getSelection():a[i].document.selection.createRange().text;
					if(a[i].contentWindow){
						if(typeof a[i].contentWindow.getSelection_custom!='undefined')s=a[i].contentWindow.getSelection_custom();
					}
					if(s!="")break;
				}
			}
		if (s!="") {
				window.open("/nrjc.html?id=99049&text="+s,"Page");
			}else{
				alert("请先用鼠标选择出错的内容片断！");
				return false;
			}
	}
}