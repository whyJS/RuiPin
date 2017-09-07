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
		window.open('http://service.weibo.com/share/share.php?&title=%E6%88%91%E6%AD%A3%E5%9C%A8%E5%85%B3%E6%B3%A8%E9%94%90%E8%81%98%E5%AD%A6%E9%99%A2%E7%9A%84%E8%AF%BE%E7%A8%8B%E3%80%8A%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95%E5%9F%BA%E7%A1%80%E3%80%8B,%E5%BF%AB%E6%9D%A5%E4%B8%80%E8%B5%B7%E5%8A%A0%E5%85%A5%E5%90%A7&url=http://sdjtu.moocollege.cn/courses/SDJTU/SDJTU-ST001/2016_T2/about?course_base=289&course_package=-1');
	})
})
