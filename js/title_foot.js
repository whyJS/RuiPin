$(function(){
	$(".close").click(function()
	{
		$(".cover").css("display","none");
		$(".reg_log").css("display","none");
	});

	window.onscroll = function()
	{
		 var im1 = document.getElementsByClassName("im1")[0];
		 var middle = document.getElementsByClassName("middle")[0];
		 var h_footer = document.getElementsByClassName("h_footer")[0];
		if(document.body.scrollTop>100){
			 im1.style.cssText = "display:block;";
		}else{
			im1.style.cssText = "display:none;";
		}
	//			 console.log(h_footer.getBoundingClientRect().top);
		var juli = h_footer.offsetTop-document.body.scrollTop-311;
	//			console.log("-------"+juli);
		if(h_footer.getBoundingClientRect().top<566){
			middle.style.top = juli+'px';
		}
	}
	$(".im1").eq(0).click(function()
	{
		$("body").animate(
		{
			scrollTop : "0px",
		});
	});
})