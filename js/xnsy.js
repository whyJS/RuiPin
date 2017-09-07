window.onload=function(){
var oLi = document.getElementsByTagName("li");
console.log(oLi)
var oBox = document.getElementsByTagName("li");
console.log(oBox);
var num;
var a = 0;
var timer;
play();

oBox[0].onmouseover = function(){
		        oLi[num].id = "";
				clearInterval(timer);			
			}
oBox[0].onmouseleave = function(){
	a=0;
		oLi[0].id = "on";
	
				play();
			};
oBox[1].onmouseover = function(){
		        oLi[num].id = "";
				clearInterval(timer);			
			}
oBox[1].onmouseleave = function(){
	a=1;
		oLi[1].id = "on";
	
				play();
			};
oBox[2].onmouseover = function(){
		        oLi[num].id = "";
				clearInterval(timer);			
			}
oBox[2].onmouseleave = function(){
	a=2;
		oLi[2].id = "on";
				play();
			};
			
	console.log(num);
	num = a;
function play(){	
	timer = setInterval(function(){
		oLi[num].id = "";
		num++;
		if(num >2){
			num = 0
		};
		a=num;
		console.log(a);
		oLi[num].id = "on";
	},2000);
};
}