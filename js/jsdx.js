			var url = '';
			var index = 0;
			$(function()
			{
				index = $("#lunbo img").index()+1;
			//上一页
			$(".prev").click(function(){
				index--;
				if(index==0){
					index=3;
				}
				$(".room").css("background-image","url(../images/jsdx"+index+".jpg)");
			});
			//下一页
			$(".next").click(function(){
				index++;
				if(index==4){
					index=1;
				}
				$(".room").css("background-image","url(../images/jsdx"+index+".jpg)");
			});
			
				$(".round").click(function(){
					index=1;
				$(".room").css("background-image","url(../images/jsdx1.jpg)");
				$(".round").css("background-color","beige");
				$(".round1").css("background-color","");
				$(".round2").css("background-color","");
				clearInterval(time);
				shijan();
				
			});
			$(".round1").click(function(){
				index=2;
				$(".room").css("background-image","url(../images/jsdx2.jpg)");
			    $(".round").css("background-color","");
				$(".round1").css("background-color","beige");
				$(".round2").css("background-color","");
				clearInterval(time);
				shijian();
			});
			$(".round2").click(function(){
				index=3;
				$(".room").css("background-image","url(../images/jsdx3.jpg)");
				$(".round").css("background-color","");
				$(".round1").css("background-color","");
				$(".round2").css("background-color","beige");
				clearInterval(time);
				shijian();
			});
			});
			
			//轮播
			window.onload = function shijan(){
				var time = setInterval(function(){				
				index++;
				if(index==4){
					index=1;
				}
				$(".room").css("background-image","url(../images/jsdx"+index+".jpg)");
				if(index==1){
					$(".round").css("background-color","beige");
				    $(".round1").css("background-color","");
				    $(".round2").css("background-color","");
				}else if(index==2){
					$(".round").css("background-color","");
				    $(".round1").css("background-color","beige");
				    $(".round2").css("background-color","");
				}else if(index==3){
					$(".round").css("background-color","");
				    $(".round1").css("background-color","");
				    $(".round2").css("background-color","beige");
				}
			},3000);
			};
			
			//按钮
			$(function(){
				$(".span1").mouseover(function(){
					$(".s1").css("background-color","white");
					$(".s2").css("background-color","white");
					$(".s3").css("background-color","white");
					$(".s4").css("background-color","white");
				});
				$(".span1").mouseout(function(){
					$(".s1").css("background-color","gainsboro");
					$(".s2").css("background-color","gainsboro");
					$(".s3").css("background-color","gainsboro");
					$(".s4").css("background-color","gainsboro");
				})
			});
			$(function(){
				$(".span2").mouseover(function(){
					$(".s5").css("background-color","white");
					$(".s6").css("background-color","white");
					$(".s7").css("background-color","white");
				});
				$(".span2").mouseout(function(){
					$(".s5").css("background-color","gainsboro");
					$(".s6").css("background-color","gainsboro");
					$(".s7").css("background-color","gainsboro");
				});
			});
	//课程页面转换
			function span1(){
				console.log("dwedwe")
				$(".diamonds").css("display","block");
				$("#crosswise").css("display","none");
			};
			function span2(){
				$(".diamonds").css("display","none");
				$("#crosswise").css("display","block");
			};
		