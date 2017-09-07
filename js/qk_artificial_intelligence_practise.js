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
		window.open('http://service.weibo.com/share/share.php?&title=%E6%88%91%E6%AD%A3%E5%9C%A8%E5%85%B3%E6%B3%A8%E9%94%90%E8%81%98%E5%AD%A6%E9%99%A2%E7%9A%84%E8%AF%BE%E7%A8%8B%E3%80%8A%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%EF%BC%88%E9%9D%92%E5%B2%9B%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A612%E7%BA%A7Java%E6%96%B9%E5%90%91%EF%BC%89%E3%80%8B,%E5%BF%AB%E6%9D%A5%E4%B8%80%E8%B5%B7%E5%8A%A0%E5%85%A5%E5%90%A7&url=http://qust.moocollege.cn/courses/QDUSOST/B401/Always/about?course_base=231&course_package=-1#_loginLayer_1477316714847');
	})
})
