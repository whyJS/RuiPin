$(function()
{
	//显示的登陆注册页面
	$(".top_regist").click(function()
	{
		$(".cover").css("display","block");
		$(".reg_log").css("display","block");
		$(".regist_face").css("display","block");
		$(".log_face").css("display","none");
	})
	$(".regist_click").click(function()
	{
		$(".cover").css("display","block");
		$(".reg_log").css("display","block");
		$(".regist_face").css("display","block");
		$(".log_face").css("display","none");
	})
	$(".top_log").click(function()
	{
		$(".cover").css("display","block");
		$(".reg_log").css("display","block");
		$(".regist_face").css("display","none");
		$(".log_face").css("display","block");
	})
	$(".log_click").click(function()
	{
		$(".cover").css("display","block");
		$(".reg_log").css("display","block");
		$(".regist_face").css("display","none");
		$(".log_face").css("display","block");
	})
	$(".li_log").click(function()
	{
		$(".cover").css("display","block");
		$(".reg_log").css("display","block");
		$(".regist_face").css("display","none");
		$(".log_face").css("display","block");
	});
	//判断登陆界面
	$(".regist_ul").children().each(function()
	{
		$(this).click(function()
		{
			var index = $(".regist_ul").children().index(this);
			$(this).attr("class","click_li");
			if (index == 1) 
			{
				$(".regist_ul").children().eq(0).attr("class","noclick_li");
				$(".pho_log").css("display","none");
				$(".ema_log").css("display","block");
				$('.reminder').css("display","none");
			}else
			{
				$(".regist_ul").children().eq(1).attr("class","noclick_li");
				$(".pho_log").css("display","block");
				$(".ema_log").css("display","none");
				$('.reminder').css("display","none");
			}
		});
	});



	$(".phone_re")[0].addEventListener("keydown",function()
	{
		if ($(".phone_re").val().length>9)
	 {
	 	console.log($(".phone_re").val());
	 	$(".phone_re").val($(".phone_re").val().slice(0,10));
	 }
	});


	$(".check_re")[0].addEventListener("keydown",function()
	{
		if ($(".check_re").val().length>4)
	 {
	 	$(".check_re").val($(".check_re").val().slice(0,5));
	 }
	});
	


	$(".close").click(function()
	{
		$(".cover").css("display","none");
		$(".reg_log").css("display","none");
	});
	$('.phone_re').blur(function()
	{
		if ($(".phone_re").val().length > 0 ) 
		{
			var phone = /^1[34578]\d{9}$/;
			if(phone.test($('.phone_re').val()))
			{
				$('.reminder').css("display","none");
			}
			else
			{
				$('.reminder').css("display","block");
				$('.reminder_inp').val("请输入正确的手机号!");
			}
		}
	});
	// $('.creat').mouseup(function()
	// {
	// 	$(".creat").html("创建账号");
	// 	$(".creat").css("background","rgb(10,94,190)");
	// });


	$('.check_re').blur(function()
		{
			if ($(".phone_re").val().length > 0 ) 
			{
				var phone = /^1[34578]\d{9}$/;
				if(phone.test($('.phone_re').val()))
				{
					$('.reminder').css("display","none");
				}
				else
				{
					$('.reminder').css("display","block");
					$('.reminder_inp').val("请输入正确的手机号!");
				}
			}
		});


	$(".acq_check").click(function yanzheng(e)
	{
		var i  = 60;
		$(".acq_check").css("background","rgb(133,175,233)");
		$(".acq_check").val(i+"秒后可重发");
		$(".acq_check").attr("disabled",true);
		var timer = setInterval(function()
		{
			i--;
			if (i > 0) 
			{
				$(".acq_check").css("background","rgb(133,175,233)");
				$(".acq_check").val(i+"秒后可重发");
				$(".acq_check").attr("disabled",true);
					// $(".acq_check").unbind("disabled",true);

			}
			else
			{
				clearInterval(timer);
				timer = null;
				$(".acq_check").css("background","rgb(10,94,190)");
				$(".acq_check").val("获取验证码");
				$(".acq_check").removeAttr("disabled");
			}
		},1000);
	});


	$('.name_re').blur(function()
		{
			if ($(".name_re").val().length < 1 ) 
			{
				$('.reminder').css("display","block");
				$('.reminder_inp').val("昵称不能为空!");
			}
			else
			{
				$('.reminder').css("display","none");
			}
		});

	$('.pwd_re').blur(function()
		{
			if ($(".pwd_re").val().length > 0 ) 
			{
				var pwd = /^\w{6,}$/;
				if(pwd.test($('.pwd_re').val()))
				{
					$('.reminder').css("display","none");
				}
				else
				{
					$('.reminder').css("display","block");
					$('.reminder_inp').val("请输入正确的密码格式!");
				}
				if (($(".pwda_re").val().length > 0) && ($(".pwda_re").val().length < 6))
				{
					console.log(111);
						$('.reminder').css("display","block");
						$('.reminder_inp').val("请输入正确的密码格式!");
					}
			}
		});


	$('.pwda_re').blur(function()
		{
			if ($(".pwda_re").val().length > 0 ) 
			{
				if($('.pwda_re').val()==$('.pwd_re').val())
				{
					$('.reminder').css("display","none");
				}
				else
				{
					$('.reminder').css("display","block");
					$('.reminder_inp').val("两次密码不一致!");
				}
				if(($(".pwda_re").val().length < 5) && $('.pwda_re').val()==$('.pwd_re').val())
				{
					$('.reminder').css("display","block");
					$('.reminder_inp').val("密码太短!");
				}
			}
		});




$('.email_re').blur(function()
	{
		if ($(".email_re").val().length > 0 ) 
		{
			var email =  /^[0-9a-zA-Z]+(?:[\.\!\#\$\%\^\&\*\'\+\-\/\`\_\{\|\}\~]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9\-]+\.[0-9a-zA-Z\-]+$/;
			if(email.test($('.email_re').val()))
			{
				$('.reminder1').css("display","none");
			}
			else
			{
				$('.reminder1').css("display","block");
				$('.reminder1_inp').val("请输入正确的邮箱地址!");
			}
		}
	});

	$('.name1_re').blur(function()
		{
			if ($(".name1_re").val().length < 1 ) 
			{
				$('.reminder1').css("display","block");
				$('.reminder1_inp').val("昵称不能为空!");
			}else
			{
				$('.reminder1').css("display","none");
			}
		});

	$('.pwd1_re').blur(function()
		{
			if ($(".pwd1_re").val().length > 0 ) 
			{
				var pwd = /^\w{6,}$/;
				if(pwd.test($('.pwd1_re').val()))
				{
					$('.reminder1').css("display","none");
				}
				else
				{
					$('.reminder1').css("display","block");
					$('.reminder1_inp').val("请输入正确的密码格式!");
				}
				if (($(".pwda1_re").val().length > 0) && ($(".pwda1_re").val().length < 6))
				{
					console.log(111);
						$('.reminder1').css("display","block");
						$('.reminder1_inp').val("请输入正确的密码格式!");
					}
			}
		});


	$('.pwda1_re').blur(function()
		{
			if ($(".pwda1_re").val().length > 0 ) 
			{
				if($('.pwda1_re').val()==$('.pwd1_re').val())
				{
					$('.reminder1').css("display","none");
				}
				else
				{
					$('.reminder1').css("display","block");
					$('.reminder1_inp').val("两次密码不一致!");
				}
				if(($(".pwda1_re").val().length < 5) && $('.pwda1_re').val()==$('.pwd1_re').val())
				{
					$('.reminder1').css("display","block");
					$('.reminder1_inp').val("密码太短!");
				}
			}
		});







//侧边栏
//	window.onscroll = function()
//	{
//		 var im1 = document.getElementsByClassName("im1")[0];
//		 var middle = document.getElementsByClassName("middle")[0];
//		 var h_footer = document.getElementsByClassName("h_footer")[0];
//		if(document.body.scrollTop>100)
//		{
//			im1.style.cssText = "display:block;";
//		}else
//		{
//			im1.style.cssText = "display:none;";
//		}
//	//		console.log(h_footer.getBoundingClientRect().top);
//			var juli = h_footer.offsetTop-document.body.scrollTop-311;
//	//		console.log("-------"+juli);
//			if(h_footer.getBoundingClientRect().top<566){
//				middle.style.top = juli+'px';
//			}
//		}
//
//
//		$(".im1").click(function()
//		{
//			$("body").animate(
//			{
//				scrollTop : "0px",
//			});
//		})
})
