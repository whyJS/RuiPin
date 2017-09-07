//$(".share li")
$(function(){
	var click_num=0;
	$(".share li:eq(0)").click(function(){
		if(click_num==0)
		{
			$(".share .erweima").css({"visibility":"visible"});
			click_num=1;
		}
		else
		{
			$(".share .erweima").css({"visibility":"hidden"});
			click_num=0;			
		}
	});
	$(".share li:eq(1)").click(function(){
		window.open('第八节 加入水面和天空');
	})
})
