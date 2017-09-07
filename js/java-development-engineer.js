$(function(){
	var top = $(".concrete-page-show tr").length*220 + 100+"px";
	if($(".concrete-page-show tr").length>2){
		$("footer").css("margin-top",top);
	}else{
		$("footer").css("margin-top","594px");
	}
	for(var $i = 0;$i<$("div[class^=bg-]").length;$i++){
		$("div[class^=bg-]").eq($i).click(function(){
			 var preborder = $(".white-border").index();
			if(preborder!=$(this).index()){
				$(".white-border").eq(0).removeClass("white-border");
				$(this).addClass("white-border");
				$(".concretepage"+preborder).eq(0).removeClass("concrete-page-show");
				$(".concretepage"+preborder).eq(0).addClass("concrete-page-hide");
				$(".concretepage"+$(this).index()).eq(0).removeClass("concrete-page-hide");
				$(".concretepage"+$(this).index()).eq(0).addClass("concrete-page-show");
			}
			if($(".concrete-page-show tr").length>2){
				$("footer").css("margin-top",top);
			}else{
				$("footer").css("margin-top","594px");
			}
				});
			}
});