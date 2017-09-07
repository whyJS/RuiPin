window.onload=function()
{
	var click_num=1;
	// 实现文字折叠效果
	function show(){ 
	var box = document.getElementById("box"); 
	var text = box.innerHTML; 
	var newBox = document.createElement("div"); 
	var btn = document.createElement("a"); 
	newBox.innerHTML = text.substring(0,200); 
	btn.innerHTML = text.length > 200 ? "显示全部" : ""; 
	btn.href = "###"; 
	$(btn).css({"color":"rgb(10,94,190)"});
	btn.onclick = function(){ 
	if (btn.innerHTML == "显示全部"){ 
	btn.innerHTML = "收起"; 
	newBox.innerHTML = text; 
	}else{ 
	btn.innerHTML = "显示全部"; 
	newBox.innerHTML = text.substring(0,200); 
	} 
	} 
	box.innerHTML = ""; 
	box.appendChild(newBox); 
	box.appendChild(btn); 
	} 
	show(); 
//鼠标点击切换图片，鼠标悬停变色
	$(".left_btn").click(function(){
		for(var i=1; i<4; ++i)
		{
			$(".enterprise_show_img"+i+"").css({"visibility":"hidden"});		
		}
		$(".enterprise_show_img"+(click_num-1)+"").css({"visibility":"visible"});
		click_num--;
		if(click_num==1)
		{
			$(this).css({"visibility":"hidden"});
			$(".right_btn").css({"visibility":"visible"});
		}
		else
		{
			$(".right_btn").css({"visibility":"visible"});
		}
	})
	$(".right_btn").click(function(){
		for(var i=1; i<4; ++i)
		{
			$(".enterprise_show_img"+i+"").css({"visibility":"hidden"});		
		}
		$(".enterprise_show_img"+(click_num+1)+"").css({"visibility":"visible"});
		click_num++;
		if(click_num==3)
		{
//			click_num=0;
			$(this).css({"visibility":"hidden"});
			$(".left_btn").css({"visibility":"visible"});
		}
		else
		{
			$(".left_btn").css({"visibility":"visible"});
		}
	})
	// 实现点击切换不同的页面
	$(".company_homepage").click(function(){
		$(this).css({"background":"rgb(10,94,190)","color":"white"});
		$(".zhaopin_position").css({"background":"rgb(192,192,192)","color":"rgb(85,85,85)"});
		$(".enter_course").css({"background":"rgb(192,192,192)","color":"rgb(85,85,85)"});
		$(".HomePage").css({"display":"block"});
		$(".recruiting_companies").css({"display":"none"});
		$(".enterprise_course").css({"display":"none"});
	})
	$(".zhaopin_position").click(function(){
		$(this).css({"background":"rgb(10,94,190)","color":"white"});
		$(".company_homepage").css({"background":"rgb(192,192,192)","color":"rgb(85,85,85)"});
		$(".enter_course").css({"background":"rgb(192,192,192)","color":"rgb(85,85,85)"});
		$(".HomePage").css({"display":"none"});
		$(".recruiting_companies").css({"display":"block"});
		$(".enterprise_course").css({"display":"none"});
	})
	$(".enter_course").click(function(){
		$(this).css({"background":"rgb(10,94,190)","color":"white"});
		$(".zhaopin_position").css({"background":"rgb(192,192,192)","color":"rgb(85,85,85)"});
		$(".company_homepage").css({"background":"rgb(192,192,192)","color":"rgb(85,85,85)"});
		$(".HomePage").css({"display":"none"});
		$(".recruiting_companies").css({"display":"none"});
		$(".enterprise_course").css({"display":"block"});
	})
}

























































