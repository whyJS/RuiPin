$(function(){
 	//分类列表样式
	var $assort_content = $(".courses_assort_content")[0].children;
	for(var $i = 0;$i<$assort_content.length;$i++){
	  	$($assort_content).eq($i).click(function(){
	  		var $assort_content_li = $(".assort_content_choosed")[0];
	  		var pagenum1 = $(".assort_content_choosed").eq(0).index().toString();
	  		var pagenum2 = $(".assort_school_choosed").eq(0).index().toString();
	  		var pagenum = pagenum1+pagenum2;
	  		// console.log(pagenum);
	  		$($assort_content_li).removeClass("assort_content_choosed");
	  		$(this).addClass("assort_content_choosed");
	  		var page = $(this).index().toString()+pagenum2;
	  		// console.log(page);
	  		if(page == "00" && page!=pagenum){
	  			$(".concretepage11").eq(0).removeClass("concrete_page_hide");
	  			$(".concretepage11").eq(0).addClass("concrete_page_show");
	  			$(".concretepage2"+pagenum).eq(0).removeClass("concrete_page_show");
	  			$(".concretepage2"+pagenum).eq(0).addClass("concrete_page_hide");
	  		}else if(page!="00"&&pagenum=="00"&&page!=pagenum){
	  			for(var $m = 0;$m<$("table[class^=concretepage1]").length;$m++){
	  				if($("table[class^=concretepage1]").eq($m).hasClass("concrete_page_show")==true){

	  					$("table[class^=concretepage1]").eq($m).removeClass("concrete_page_show");
	  					$("table[class^=concretepage1]").eq($m).addClass("concrete_page_hide");
	  				}
	  			}

	  			$(".concretepage2"+page).eq(0).removeClass("concrete_page_hide");
	  			$(".concretepage2"+page).eq(0).addClass("concrete_page_show");
	  		}else if(page!="00"&&pagenum!="00"&&page!=pagenum){
	  			$(".concretepage2"+pagenum).eq(0).removeClass("concrete_page_show");
	  			$(".concretepage2"+pagenum).eq(0).addClass("concrete_page_hide");
	  			$(".concretepage2"+page).eq(0).removeClass("concrete_page_hide");
	  			$(".concretepage2"+page).eq(0).addClass("concrete_page_show");
	  			// console.log($(".concretepage2"+page).eq(0));
	  		}else{
	  			$(".concrete_page_show").eq(0).animate({scrollTop:'1000px'},800);
	  		}
	  		if(page=="00"){
	  			$(".concrete_courses_pages").eq(0).css("display","block");
	  		}else{
	  			$(".concrete_courses_pages").eq(0).css("display","none");
	  		}
	  		console.log($(".concrete_page_show tr").length);
	  		if($(".concrete_page_show tr").length>3&&$(".concrete_page_show tr").length<10){
	  			var top = 200*$(".concrete_page_show tr").length+168+"px";
	  			$("footer").css("margin-top",top);
	  		}else if($(".concrete_page_show tr").length==10){
	  			$("footer").css("margin-top","2293px");
	  		}else{
	  			$("footer").css("margin-top","740px");
	  		}
	  	});
	}

	var $assort_school = $(".courses_assort_school")[0].children;
	for(var $j = 0;$j<$assort_school.length;$j++){
	  	$($assort_school).eq($j).click(function(){
	  		var pagenum1 = $(".assort_content_choosed").eq(0).index().toString();
	  		var pagenum2 = $(".assort_school_choosed").eq(0).index().toString();
	  		var pagenum = pagenum1+pagenum2;
	  		// console.log(pagenum);
	  		var $assort_school_li = $(".assort_school_choosed")[0];
	  		$($assort_school_li).removeClass("assort_school_choosed");
	  		$(this).addClass("assort_school_choosed");
	  		var page = pagenum1+$(this).index().toString();
	  		// console.log(page);
	  		if(page == "00" && page!=pagenum){
	  			$(".concretepage11").eq(0).removeClass("concrete_page_hide");
	  			$(".concretepage11").eq(0).addClass("concrete_page_show");
	  			$(".concretepage2"+pagenum).eq(0).removeClass("concrete_page_show");
	  			$(".concretepage2"+pagenum).eq(0).addClass("concrete_page_hide");
	  		}else if(page!="00"&&pagenum=="00"&&page!=pagenum){
	  			for(var $m = 0;$m<$("table[class^=concretepage1]").length;$m++){
	  				if($("table[class^=concretepage1]").eq($m).hasClass("concrete_page_show")==true){

	  					$("table[class^=concretepage1]").eq($m).removeClass("concrete_page_show");
	  					$("table[class^=concretepage1]").eq($m).addClass("concrete_page_hide");
	  				}
	  			}

	  			$(".concretepage2"+page).eq(0).removeClass("concrete_page_hide");
	  			$(".concretepage2"+page).eq(0).addClass("concrete_page_show");
	  		}else if(page!="00"&&pagenum!="00"&&page!=pagenum){
	  			$(".concretepage2"+pagenum).eq(0).removeClass("concrete_page_show");
	  			$(".concretepage2"+pagenum).eq(0).addClass("concrete_page_hide");
	  			$(".concretepage2"+page).eq(0).removeClass("concrete_page_hide");
	  			$(".concretepage2"+page).eq(0).addClass("concrete_page_show");
	  			// console.log($(".concretepage2"+page).eq(0));
	  		}else{
	  			$(".concrete_page_show").eq(0).animate({scrollTop:'1000px'},800);
	  		}
	  		if(page=="00"){
	  			$(".concrete_courses_pages_num_selected").eq(0).removeClass("concrete_courses_pages_num_selected");
	  			$(".concrete_courses_pages_num").eq(0).addClass("concrete_courses_pages_num_selected");
	  			$(".concrete_courses_pages").eq(0).css("display","block");
	  		}else{
	  			$(".concrete_courses_pages").eq(0).css("display","none");
	  		}
	  		console.log($(".concrete_page_show tr").length);
	  		if($(".concrete_page_show tr").length>3&&$(".concrete_page_show tr").length<10){
	  			var top = 200*$(".concrete_page_show tr").length+168+"px";
	  			$("footer").css("margin-top",top);
	  		}else if($(".concrete_page_show tr").length==10){
	  			$("footer").css("margin-top","2293px");
	  		}else{
	  			$("footer").css("margin-top","740px");
	  		}
	  	});
	}

	for(var $k = 0;$k<$(".courses_assort_td").length;$k++){
		$(".courses_assort_td").eq($k).click(function(){
			$(".courses_assort_table_selected").removeClass("courses_assort_table_selected");
			$(this).addClass("courses_assort_table_selected");
			console.log($(".concrete_page_show tr").length);
			if($(".concrete_page_show tr").length>3&&$(".concrete_page_show tr").length<10){
	  			var top = 200*$(".concrete_page_show tr").length+168+"px";
	  			$("footer").css("margin-top",top);
	  		}else if($(".concrete_page_show tr").length==10){
	  			$("footer").css("margin-top","2293px");
	  		}else{
	  			$("footer").css("margin-top","740px");
	  		}
		})
	}
	//分页
	
	for (var $i = 0; $i < $(".concrete_courses_pages_num").length; $i++) {
		$(".concrete_courses_pages_num").eq($i).click(function(){
			var $page_index = $(".concrete_courses_pages_num_selected").index()+1;
			$(".concrete_courses_pages_num_selected").eq(0).removeClass("concrete_courses_pages_num_selected");
			$(this).addClass("concrete_courses_pages_num_selected");
			if($page_index!=$(this).text()){
				$(".concretepage1"+$(this).text()).eq(0).removeClass("concrete_page_hide");
				$(".concretepage1"+$(this).text()).eq(0).addClass("concrete_page_show");
				var $hide_page = ".concretepage1"+$page_index;
				$($hide_page).eq(0).removeClass("concrete_page_show");
		   		$($hide_page).eq(0).addClass("concrete_page_hide");
			}
			 
		});
	}
 });



