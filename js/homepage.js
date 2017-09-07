var timer;
var i = 0;
$(function()
{
	//课程间隙 
//	console.log($(".recommend_a").children().eq(3));
	$(".recommend_a").children().eq(3).css("margin-right","0px");
	$(".recommend_b").children().eq(3).css("margin-right","0px");
	$(".recommend_c").children().eq(3).css("margin-right","0px");
	$(".recommend_d").children().eq(3).css("margin-right","0px");
	$(".sixpic_ula").children().eq(2).css("margin-right","0px");
	$(".sixpic_ulb").children().eq(2).css("margin-right","0px");
	$(".company_li").eq(4).css("margin-right","0px");
	$(".job_li").eq(2).css("margin-right","0px");
	
	
	
	//轮播图
	$(".carousel").children().eq(0).css("display","block");
	
	$(".cl").children().each(function()
	{
		$(this).click(function()
		{
			clearInterval(timer);
			timer = null;
//			console.log($(".cl").children().index($(this)));
			i = $(".cl").children().index($(this));
			for(var r = 0;r < 4;r++)
			{
				$(".carousel").children().eq(r).css("display","none");
				$(".cl").children().eq(r).attr("class","cl_li")
			}
			$(".carousel").children().eq(i).css("display","block");
			$(this).attr("class","cl_lia");
			startCarousel();
		});
	});
	startCarousel();
	

	var r = 0;
	$(".peo_nu").html(r+"人听课");
	
	
	//鼠标悬浮换页
	$(".courses").children().each(function()
	{
		$(this).mouseover(function()
		{
			//鼠标悬浮在a上，因此要加.children()
			$(this).children().eq(0).attr("class","rec");
			var ind = $(".courses").children().index(this);
			console.log(ind);
			if(ind == 1)
			{
				console.log($(".courses").children().eq(0));
				$(".courses").children().eq(0).children().attr("class","hot");
				$("#change2").attr("class","chosea_c1");
				$("#change1").attr("class","chosea_c2");
			}
			
			else
			{
				$(".courses").children().eq(1).children().attr("class","hot");
				$("#change2").attr("class","chosea_c2");
				$("#change1").attr("class","chosea_c1");
			}
		});
	});
	
	
});
function startCarousel(){
	timer = setInterval(function()
	{
		if (i > 2) 
		{
			i = -1;
			$(".carousel").children().eq(3).css("display","none");
			$(".cl").children().eq(3).attr("class","cl_li")
		};
		i++;
		// console.log($(".carousel").children()[i])
		$(".carousel").children().eq(i).css("display","block");
		$(".cl").children().eq(i).attr("class","cl_lia")
		$(".carousel").children().eq(i-1).css("display","none");
		$(".cl").children().eq(i-1).attr("class","cl_li")
		// console.log(i)
	},3000);
}
