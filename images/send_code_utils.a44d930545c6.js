/**
 * Created by tianshl on 16-5-6.
 */


/* 简单验证手机号是否有效 */
function is_phone(phone){
    /* 验证手机号有效性的正则 ------- 2016年3月26日 的手机号码段 */
    var reg = /^1(([38]\d)|(4[579])|(5[0-35-9])|(7[0135-8]))\d{8}$/;
    return reg.test(phone);
}

/* 简单验证验证码是否有效 */
function is_code(code){
    /* 验证验证码是否为6位数字 */
    var reg = /^\d{6}$/;
    return reg.test(code);
}

/* 添加cookie */
function addCookie(name, expires){
    var date = new Date();
    var sec = date.getTime();
    var cookieStr = name + "=" + sec;

    /* 判断是否设置过期时间,0代表关闭浏览器时失效 */
    if(expires > 0){
        date.setTime(sec+expires*1000);
        cookieStr += ";expires=" + date.toUTCString();
    }
    document.cookie = cookieStr;
}

/* 获取cookie */
function getCookieValue(name){
    /* 获取所有的cookie */
    var strCookie=document.cookie;
    /* 拆分为数组 */
    var arrCookie=strCookie.split("; ");
    /* 遍历数组, 获取需要的值 */
    for(var i=0, len=arrCookie.length; i<len; i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]==name){
            return arr[1];
        }
    }
}

/* 倒计时 */
function timer(id, fun, time) {
    var btn = $("#"+id);
    /* 设置按钮不可用 */
    btn.addClass("disabled");
    /* 清除点击方法 */
    btn.attr('onClick', '');
    btn.val(time <= 0 ? "获取验证码" :  time+"秒后可重发");
    var hander = setInterval(function() {
        if (time <= 0) {
            /* 清除倒计时 */
            clearInterval(hander);
            btn.val("获取验证码");
            btn.attr('onClick', fun);
            btn.removeClass("disabled");
            return false;
        }else {
            btn.val((time--) + "秒后可重发");
        }
    }, 1000);
}

/* cookie中获取倒计时的时间 */
function time_left(ck, id, fun, interval){
    /* 获取上次发送时间 */
    var last_time = getCookieValue(ck);
    /* cookie过期后获取的时间为underfined */
    if(last_time != undefined){
        /* 当前时间 */
        var now_time = new Date().getTime();
        /* 计算时间差 */
        var diff = now_time - last_time;
        /* 计算剩余时间 */
        var remain = interval*1000 - diff;
        remain = parseInt(remain / 1000);
        timer(id, fun, remain);
    }
}