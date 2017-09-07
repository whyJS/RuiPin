$(function(){
	//分类列表的收缩
	for(var $i = 0;$i < $(".assort_total_condition").length;$i++){
		var value = $(".assort_selected").eq($i).text();
		// console.log(value);
		$(".assort_total_condition").eq($i).text(value);
	}
	$(".assort_arrow").eq(0).click(function(){
		if($(".assort_total").eq(0).css("opacity")==0){
			$(".assort_total").eq(0).css({"opacity":1,"transition":"opacity 0.5s"});
			// $(".assort table").eq(0).slideUp(500);
			// $(".assort").eq(0).slideUp(5000);
			$(".assort_arrow div").eq(0).css({"border-bottom":"0px","border-top":"10px solid rgb(198,198,198)","transition":"border-top 0.5s","transition":"border-bottom 0.5s"});
			$(".assort").eq(0).css({"opacity":0,"transition":"opacity 0.5s"});
			$(".assort_arrow").eq(0).css({"margin-top":"0px","transition":"margin-top 0.5s"});
			console.log("111");
		}else{
			$(".assort_total").eq(0).css({"opacity":0,"transition":"opacity 0.5s"});
			$(".assort_arrow").eq(0).css({"margin-top":"212px","transition":"margin-top 0.5s"});
			// $(".assort table").eq(0).slideDown(500);
			// $(".assort").eq(0).slideDown(5000);
			$(".assort_arrow div").eq(0).css({"border-bottom":"10px solid rgb(198,198,198)","border-top":"0px","transition":"border-top 0.5s","transition":"border-bottom 0.5s"});
			$(".assort").eq(0).css({"opacity":1,"transition":"opacity 0.5s"});
			console.log("222");
		}
		$(".assort").slideToggle(500);
	});
	for(var $j = 0;$j<$(".assort_concrete ul").length;$j++){
		(function(n){
			$(".assort_concrete ul").eq(n).children().each(function()
			{
				$(this).click(function(){
					$(".assort_selected").eq(n).removeClass("assort_selected");
					console.log($(this));
					$(this).addClass("assort_selected");
					$(".assort_total_condition").eq(n).text($(this).text());

				})
			})
			
		})($j);
	}
})