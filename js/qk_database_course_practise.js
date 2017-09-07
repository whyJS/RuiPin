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
		window.open('http://service.weibo.com/share/share.php?&title=%E6%88%91%E6%AD%A3%E5%9C%A8%E5%85%B3%E6%B3%A8%E9%94%90%E8%81%98%E5%AD%A6%E9%99%A2%E7%9A%84%E8%AF%BE%E7%A8%8B%E3%80%8A%E9%9D%92%E7%A7%912013%E7%BA%A7%E4%BF%A1%E6%81%AF%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2_%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AF%BE%E7%A8%8B%E5%AE%9E%E8%AE%AD%E3%80%8B,%E5%BF%AB%E6%9D%A5%E4%B8%80%E8%B5%B7%E5%8A%A0%E5%85%A5%E5%90%A7&url=http://qust.moocollege.cn/courses/QDUSOST/S205/2015_T3/about?course_base=146&course_package=-1#_loginLayer_1477315793436');
	})
})
