$(function()
{
	$(".nav_ul").children().eq(0).css("margin-left","0px");
	$(".nav_ul").children().each(function()
	{
		$(this).click(function()
		{
			console.log($(".nav_ul").children().index(this));
			var index = $(".nav_ul").children().index(this);
			for (var i = 0; i < $(".nav_ul").children().length; i++) 
			{
				$(".nav_ul").children().eq(i).children().eq(1).attr("class","li_b");
				$(".background_pic").children().eq(i).attr("class","background_b");
				$(".moddle").children().eq(i).attr("class","moddle_b");
			}
			$(this).children().eq(1).attr("class","li_a");
			$(".background_pic").children().eq(index).attr("class","background_a")
			$(".moddle").children().eq(index).attr("class","moddle_a");
		})
	})
})