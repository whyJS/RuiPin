/*首页bar*/
var num = 0;//记录下当前显示的图片的索引
$(function () {
	$(".imgitem").eq(0).show();//页面加载的时候，第一张图片显示。
	$(".imgitem").not(":eq(0)").hide();//页面加载的时候，不是第一张图片，隐藏
	
	setInterval(function () {//隔多久，执行一次方法
		if (num == 4)
		{
			num = 0;
		}
		ShowFocusPic(num);
		num++;//自增1
	}, 5000);

	$(".carousel_switch a").click(function () {
		num = parseInt($(".carousel_switch a").index($(this)));//当前点击的下标在整个下标里面的索引，把这个索引值转成整数赋值给num
		ShowFocusPic(num);
	});

	$('.page_link.first').click(function(event){
        var $ele = $(event.target);
        if(!$ele.hasClass('active')){
            $('.page_link').removeClass('active');
            $ele.addClass('active');
            $('.micro_special_container_2').removeClass("show");
            $('.micro_special_container_1').removeClass("hide");
        }
    });
    $('.page_link.second').click(function(event){
        var $ele = $(event.target);
        if(!$ele.hasClass('active')){
            $('.page_link').removeClass('active');
            $ele.addClass('active');
            $('.micro_special_container_1').addClass("hide");
            $('.micro_special_container_2').addClass('show');
        }
    });
});
function ShowFocusPic(num)
{
	$(".imgitem").eq(num).show();
	$(".imgitem").not(":eq(" + num + ")").hide();
	ShowBg();
}
function ShowBg()
{
	$(".carousel_switch li a").eq(num).addClass("selected");
	$(".carousel_switch li a").not(":eq(" + num + ")").removeClass("selected");
}

 
