/**
 * Created by tianhao on 16-5-24.
 */


// 指定长度和基数的uuid
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
// Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
// rfc4122, version 4 form
        var r;
// rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
// Fill in random data.  At i==19 set the high bits of clock sequence as
// per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}

$(function () {
    var path = window.location.pathname;
    if (path == '/courses') {
        $("#courses").css('color', '#0a5ebe');
        $("#college").css('color', '#333');
        $("#company").css('color', '#333');
        $("#model_teacher").css('color', '#333');
    }
    else if (path == '/courses/recommend_courses/') {
        $("#courses").css('color', '#333');
        $("#college").css('color', '#333');
        $("#company").css('color', '#333');
        $("#model_teacher").css('color', '#333');
    }
    else if (path == '/organization_list/1/') {
        $("#college").css('color', '#0a5ebe');
        $("#courses").css('color', '#333');
        $("#company").css('color', '#333');
        $("#model_teacher").css('color', '#333');
    }
    else if (path == '/organization_list/0/') {
        $("#company").css('color', '#0a5ebe');
        $("#courses").css('color', '#333');
        $("#college").css('color', '#333');
        $("#model_teacher").css('color', '#333');
    }
    else if (path.indexOf("/model_teacher") == 0) {
        $("#model_teacher").css('color', '#0a5ebe');
        $("#courses").css('color', '#333');
        $("#college").css('color', '#333');
        $("#company").css('color', '#333');
    }
});

function turn_login() {
    hide_register();
    show_login();
}

function turn_register() {
    hide_login();
    show_register();
}

function show_register() {
    $('.status.message.submission-error').removeClass('is-shown').focus();
    $('html, body').css('overflow', 'hidden');
    $('#register_id').css('display', 'block');
    $('.background_index').css('display', 'block');
    $('.login_index').css('display', 'none');
}

function hide_register() {
    $('.name_right').val('');
    addIE9Placeholder();
    $('.background_index').css('display', 'none');
    $('#register_id').css('display', 'none');
    $('html, body').css('overflow', 'auto');
}

function validate_email() {
    var email = $('#email_address').val();
    email = email.trim();
    if (email.indexOf('@') != -1 && email.indexOf('.') != -1) {
        hide_register_error_message();
    } else {
        show_register_error_message('邮箱格式不正确！');
        return false;
    }
    $.post('/email_validate', {email: email}, function (a, b, c) {
        if (a.error_message != 'success') {
            show_register_error_message(a.error_message);
            return false;
        } else {
            hide_register_error_message();
            email = email.split('@').join('_');
            email = email.split('.').join('_');
            $('#username').val(email);
        }
    }, 'json');
}

function show_register_error_message(message) {
    $('.status.message.submission-error').addClass('is-shown').focus();
    $('.status.message.submission-error').html(message).stop();
}

function hide_register_error_message() {
    $('.status.message.submission-error').removeClass('is-shown').focus();
}

$(function () {
    $("#confirm_password").blur(function () {
        if ($(this).val() === $("#password_reg").val()) {
            hide_register_error_message();
        } else {
            show_register_error_message('两次填写的密码不一致');
        }
    });

// adding js class for styling with accessibility in mind
    $('body').addClass('js');

// new window/tab opening
    $('a[rel="external"], a[class="new-vp"]')
        .click(function () {
            window.open($(this).attr('href'));
            return false;
        });

// form field label styling on focus
    $("form :input").focus(function () {
        $("label[for='" + this.id + "']").parent().addClass("is-focused");
    }).blur(function () {
        $("label").parent().removeClass("is-focused");
    });

    toggleSubmitButton_reg(true);

    $('#register-form').on('submit', function () {
        toggleSubmitButton_reg(false);
    });

    $('#register-form').on('ajax:error', function () {
        toggleSubmitButton_reg(true);
    });

    $('#register-form').on('ajax:success', function (event, json, xhr) {
        var url = json.redirect_url || "/dashboard";
        location.href = appendParameter(url, "signin", "initial");
    });

    $('#register-form').on('ajax:error', function (event, jqXHR, textStatus) {
        toggleSubmitButton_reg(true);
        json = $.parseJSON(jqXHR.responseText);
        show_register_error_message(json.value);
    });
});

function thirdPartySignin(event, url) {
    event.preventDefault();
    window.location.href = url;
}

function toggleSubmitButton_reg(enable) {
    var $submitButton = $('form .form-actions #submit_reg');

    if (enable) {
        $submitButton.
            removeClass('is-disabled').
            removeProp('disabled').html('创建账号');
    }
    else {
        $submitButton.
            addClass('is-disabled').
            prop('disabled', true).
            text("正在处理您的账户信息...");
    }
}

$(function () {

    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    if (theRequest['login'] == 1) {
        show_login()
    }

    $('body').addClass('js');

// show forgot password modal UI if URL contains matching DOM ID
//if ($.deparam.fragment()['forgot-password-modal'] !== undefined) {
// $('.pwd-reset').click();
//}

// new window/tab opening
    $('a[rel="external"], a[class="new-vp"]')
        .click(function () {
            window.open($(this).attr('href'));
            return false;
        });

// form field label styling on focus
    $("form :input").focus(function () {
        $("label[for='" + this.id + "']").parent().addClass("is-focused");
    }).blur(function () {
        $("label").parent().removeClass("is-focused");
    });

    $("#email").focus();
    (function () {
        toggleSubmitButton(true);

        $('#login-form').on('submit', function () {
            var form = $('#login-form');
            var value = form.find('#email').val().trim();
            var login_method = form.find('#login_method');
            if (value.indexOf('@') != -1 && value.indexOf('.') != -1) {
                /* 邮箱登录 */
                login_method.val('email');
            } else if (is_phone(value)) {
                /* 手机登录 */
                login_method.val('phone');
            } else {
                /* 账号错误 */
                $('.status.message.submission-error').addClass('is-shown').focus();
                $('.status.message.submission-error').html('请输入正确的邮箱或手机号');
                return false;
            }
            toggleSubmitButton(false);
        });

        $('#login-form').on('ajax:error', function () {
            toggleSubmitButton(true);
        });

        $('#login-form').on('ajax:success', function (event, json, xhr) {
            if (json.success) {
                var u = decodeURI(window.location.search);
                var next = u.split("next=")[1];
                if ($('#join_course').val() == 1) {
                    $('#class_enroll_form').submit();
                    var sld = window.location.host;
                    if (sld == 'www.moocollege.cn' || sld == 'demo.moocollege.cn' || sld == '192.168.33.10:8000') {
                        $('#header_title_').html("<li><a href='/courses' target='_blank' id='courses'>课程</a></li> <li><a href='/organization_list/1/' target='_blank' id='college'>院校</a></li> <li><a href='/organization_list/0/' target='_blank' id='company'>企业</a></li> <li><a href='http://book.moocollege.cn' target='_blank' target='_blank' id='book'>教材</a></li> <li><a href='/model_teacher' target='_blank' id='model_teacher'>名师</a></li>");
                    } else {
                        $('#header_title_').html("<li><a href='/courses' target='_blank' id='courses'>课程</a></li>")
                    }
                    var logined = '<ol class="user"><li class="primary" id="USERNAME"> <a href="/dashboard" class="user-link"  title="' + json.real_name + '">' +
                        json.real_name + '</a> </li> <li class="primary"> <a href="#" class="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr">更多选择下拉列表</span></a> </li> <ul class="dropdown-menu" aria-label="More Options" role="menu" id="logoutPop"> <li><a href="/dashboard" role="menuitem">个人中心</a></li> <li><a href="/logout" role="menuitem">登出</a></li> </ul> </ol> <div id="header_search">' +
                        '<div class="logo_search fr" style="margin-top:22px;"> <input type="text" class="search_input" id="course_name_keyword" placeholder="课程" autocomplete="off" /> <input type="submit" onclick="search_course()" class="search_button" value=" " /> </div> </div>';
                    $('#login-and-register').after(logined);
                    $('#login-and-register').hide();
                    return;
                }
                if (next != undefined) {
// if next is undefined, decodeURI returns "undefined" causing a bad redirect.
                    next = decodeURIComponent(next);
                }
                if (next && !isExternal(next)) {
                    location.href = appendParameter(next, "signin", "return");
                } else if (json.redirect_url) {
                    location.href = appendParameter(json.redirect_url, "signin", "return");
                } else {
                    var url = location.search; //获取url中"?"符后的字串
                    var theRequest = new Object();
                    if (url.indexOf("?") != -1) {
                        var str = url.substr(1);
                        strs = str.split("&");
                        for (var i = 0; i < strs.length; i++) {
                            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                        }
                    }
                    if (theRequest['login'] == 1) {
                        window.location.href = 'http://' + Settings.sld;
                        return false;
                    }
                    location.reload(true);
                    $('.background_index').css('display', 'none');
                    $('.login_index').css('display', 'none');
                    $('body').css('overflow', 'auto');
                }
            } else if (json.hasOwnProperty('redirect')) {
                var u = decodeURI(window.location.search);
                if (!isExternal(json.redirect)) { // a paranoid check.  Our server is the one providing json.redirect
                    location.href = appendParameter(json.redirect + u, "signin", "return");
                } // else we just remain on this page, which is fine since this particular path implies a login failure
// that has been generated via packet tampering (json.redirect has been messed with).
            } else {
                toggleSubmitButton(true);
                $('.message.submission-error').addClass('is-shown').focus();
                $('.message.submission-error').html(json.value);
            }
        });

        $("#forgot-password-link").click(function () {
            $.ajax({
                url: '/show_reset_pwd',
                async: false,
                success: function (resp) {
                    $('#forgot_pwd_modal_div').html(resp['value']);
                }
            });
            $("#forgot-password-modal").show();
            $('.background_index').css('display', 'none');
            $('.login_index').css('display', 'none');
            $("#forgot-password-modal .close-modal").focus();
        });

    })(this);

    $('#course_name_keyword').on('keydown', function (event) {
        if (event.keyCode == "13") {
            search_course();
        }
    });

    var path = window.location.pathname;
    if (path == '/courses') {
        $("#find_courses_toplink").addClass('nav_course_default');
        $("#recommend_courses_toplink").removeClass('nav_course_default');
    }
    else if (path == '/courses/recommend_courses/') {
        $("#recommend_courses_toplink").addClass('nav_course_default');
        $("#find_courses_toplink").removeClass('nav_course_default');

    }
    else {
        $("#find_courses_toplink").removeClass('nav_course_default');
        $("#recommend_courses_toplink").removeClass('nav_course_default');
    }

});

function show_login(arg) {
    $('#join_course').val(arg);
    $('.status.message.submission-error').removeClass('is-shown').focus();
    $('.background_index').css('display', 'block');
    $('.login_index').css('display', 'block');
    $('html, body').css('overflow', 'hidden');
}

function hide_login() {
    $('.name_right').val('');
    addIE9Placeholder();
    $('.background_index').css('display', 'none');
    $('.login_index').css('display', 'none');
     $('html, body').css('overflow', 'auto');
}

function toggleSubmitButton(enable) {
    var $submitButton = $('form .form-actions #submit');

    if (enable) {
        $submitButton.
            removeClass('is-disabled').
            removeProp('disabled').
            html("立即登录");
    }
    else {
        $submitButton.
            addClass('is-disabled').
            prop('disabled', true).
            text("正在处理您的账户信息...");
    }
}

function thirdPartySignin(event, url) {
    event.preventDefault();
    window.location.href = appendParameter(url, "signin", "return");
}

function search_course() {
    var url = '/courses/?type_num=0&sort_type=0';
    if ($('#course_name_keyword').length > 0) {
        url += '&course_name=' + $('#course_name_keyword').val().replace(/\+/g, '%2B').replace(/\#/g, '%23').replace(/\;/g, '%3b');
    }
    if ($('#course_type').length > 0 && $('#course_type').val() != 0) {
        url += '&course_type=' + $('#course_type').val();
    }
    if ($('#course_college').length > 0 && $('#course_college').val() != 0) {
        url += '&course_college=' + $('#course_college').val()
    }
    if ($('#course_is_free').length > 0 && $('#course_is_free').val() != 0) {
        url += '&course_is_free=' + $('#course_is_free').val()
    }
    window.location.href = url;
}

var new_open_window;
/* 微信登录 */
function weixin_login() {
    if (typeof(new_open_window) === 'undefined' || new_open_window.closed) {
        var state = uuid(32, 16);
        var state_save = false;
        $.ajax({
            type: 'get',
            url: '/save_state',
            data: {
                'state': state,
                'oauth_name': 'weixin'
            },
            async : false,
            success: function(data){
                if (data['message'] == 1) {
                    state_save = true;
                }
            }
        });
        if (state_save) {
            var url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + Settings.appid + '&redirect_uri=' + Settings.redirect_url + '&response_type=code&scope=snsapi_login&state=' + state + '#wechat_redirect';
            openwindow(url, state, 'weixin');
        }

    } else {
        new_open_window.focus();
    }
}
/* 微博登录 */
function weibo_login() {
    if (typeof(new_open_window) === 'undefined' || new_open_window.closed) {
        var state = uuid(32, 16);
        var state_save = false;
        $.ajax({
            type: 'get',
            url: '/save_state',
            data: {
                'state': state,
                'oauth_name': 'weibo'
            },
            async : false,
            success: function(data){
                if (data['message'] == 1) {
                    state_save = true;
                }
            }
        });
        if (state_save) {
            var url = 'https://api.weibo.com/oauth2/authorize?client_id=' + Settings.weibo_appid + '&redirect_uri=' + Settings.weibo_redirect_url + '&response_type=code&state=' + state;
            openwindow(url, state, 'weibo');
        }
    } else {
        new_open_window.focus();
    }
}
/* QQ登录 */
function qq_login() {
    if (typeof(new_open_window) === 'undefined' || new_open_window.closed) {
        var state = uuid(32, 16);
        var state_save = false;
        $.ajax({
            type: 'get',
            url: '/save_state',
            data: {
                'state': state,
                'oauth_name': 'qq'
            },
            async : false,
            success: function(data){
                if (data['message'] == 1) {
                    state_save = true;
                }
            }
        });
        if (state_save) {
            var url = 'https://graph.qq.com/oauth/show?which=Login&display=pc&client_id=' + Settings.qq_appid + '&response_type=code&scope=get_user_info&redirect_uri=' + Settings.qq_redirect_url + '&state=' + state;
            openwindow(url, state, 'qq');
        }
    } else {
        new_open_window.focus();
    }
}

function openwindow(url, state, oauth_name) {
    /* 窗口高度 */
    var iHeight = 500;
    /* 窗口宽度 */
    var iWidth = 900;
    /* 获得窗口的垂直位置 */
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    /* 获得窗口的水平位置 */
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    /* 打开窗口 */
    new_open_window = window.open(url, '', 'height=' + iHeight + ',innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
    ///* 开启定时任务，检测用户是否已经登录 */
    //window.document.check_log = setInterval(
    //    function () {
    //        check_login(state, oauth_name);
    //    },
    //    1000
    //);
}

function check_login(state, oauth_name) {
    /* 判断子窗口是否被关闭 */
    if (typeof(new_open_window) !== 'undefined' && new_open_window.closed) {
        /* 子窗口被关闭，清除定时任务 */
        clearInterval(window.document.check_log);
        /* 清除state */
        $.get(
            '/delete_state',
            {
                'state': state,
                'oauth_name': oauth_name
            },
            function (data) {
            },
            'json'
        );
    } else {
        $.get(
            '/check_login?date=' + new Date().getSeconds(),
            {
                'state': state,
                'oauth_name': oauth_name
            },
            function (data) {
                if (data['message'] == 1) {
                    /* 清除定时任务 */
                    clearInterval(window.document.check_log);
                    /* 关闭子窗口 */
                    new_open_window.close();
                    /* 刷新当前页 */
                    document.location.reload();
                }else if(data['message'] == 2){
                    clearInterval(window.document.check_log);
                }
            }, 'json');
    }
}

// ie 9 placeholder
$(function () {
    if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
        $('li.field input[placeholder]').each(function () {
            var $this = $(this);
            var isValueExist = $this.val().length > 0;
            if (!isValueExist) {
                $this.parent().addClass('ie9-placeholder');
            }
            $this.keyup(function () {
                var isValueExist = $this.val().length > 0;
                if (!isValueExist) {
                    $this.parent().addClass('ie9-placeholder');
                } else {
                    $this.parent().removeClass('ie9-placeholder');
                }
            });
        });
    }
});

function addIE9Placeholder() {
    if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
        $('li.field input[placeholder]').each(function () {
            var $this = $(this);
            var isValueExist = $this.val().length > 0;
            if (!isValueExist) {
                $this.parent().addClass('ie9-placeholder');
            }
        });
    }
}

/* 手机号字段 */
var phone_number_field = $('#phone_number');

$(function () {
    /* 注册页面  默认为手机注册 */
    time_left('TimeLeft', 'send_code', 'send_phone_code()', Settings.sendcloud_interval);
    var form = $('#register-form');
    /* 显示 手机号&验证码 */
    form.find('#field-phone-number').show();
    form.find('#field-phone-code').show();
    /* 隐藏 邮箱 */
    form.find('#field-email').hide();
    if (Settings.is_show_login) {
        show_login();
    }
});
/* 验证手机号的有效性 */
function validate_phone() {
    /* 获取手机号 */
    var phone_number = phone_number_field.val().trim();
    phone_number_field.val(phone_number);
    /* 简单验证手机号是否符合规则 */
    if (is_phone(phone_number)) {
        hide_register_error_message()
    } else {
        show_register_error_message('请输入正确的手机号');
        return false;
    }
    /* 验证手机号是否已经注册 */
    var result = true;
    $.ajax({
        type: 'POST',
        async: false,
        url: '/phone_validate/',
        data: {phone: phone_number},
        success: function (resp) {
            if (resp['success']) {
                hide_register_error_message()
            } else {
                show_register_error_message(resp['message']);
                result = false;
            }
        }
    });
    return result;
}

/* 发送验证码 */
function send_phone_code() {
    /* 清空验证码字段 */
    $('#phone_code').val('');
    /* 验证手机号的有效性 */
    if (validate_phone()) {
        var phone_number = $('#phone_number').val().trim();
        $.ajax({
            type: 'POST',
            url: '/send_code/',
            data: {phone: phone_number},
            success: function (resp) {
                if (resp['success']) {/* 发送成功 */
                    /* 清除错误信息 */
                    hide_register_error_message();
                    /* 发送剩余时间 */
                    var time_left = resp['time_left'];
                    addCookie('TimeLeft', time_left);
                    /* 倒计时 */
                    timer('send_code', 'send_phone_code()', time_left);

                } else {/* 发送失败 */
                    show_register_error_message('请重新发送验证码');
                }
            }
        });
    }
}

/* 注册方式却换(手机注册&邮箱注册) */
function phone_register(o) {
    /* 注册表单 */
    var form = $('#register-form');
    /* 显示 手机号&验证码 */
    form.find('#field-phone-number').show();
    form.find('#field-phone-code').show();
    /* 隐藏 邮箱 */
    form.find('#field-email').hide();
    /* 修改 form action */
    form.attr('action', '/create_phone_account');
    $('#phone_register_tab').addClass('active');
    $('#email_register_tab').removeClass('active');
    /* 清空输入框内容*/
    form.find('#email_address').attr('value', "");
    form.find('#name').attr('value', "");
    form.find('#password_reg').attr('value', "");
    form.find('#confirm_password').attr('value', "");
    /* 清空错误信息 */
    $('.status.message.submission-error').removeClass('is-shown').focus();

}

function email_register(o) {
    /* 注册表单 */
    var form = $('#register-form');
    /* 显示 邮箱 */
    form.find('#field-email').show();
    /* 隐藏 手机号&验证码 */
    form.find('#field-phone-number').hide();
    form.find('#field-phone-code').hide();
    /* 修改 form action */
    form.attr('action', '/create_account');
    $('#email_register_tab').addClass('active');
    $('#phone_register_tab').removeClass('active');
    /* 清空输入框内容*/
    form.find('#phone_number').attr('value', "");
    form.find('#phone_code').attr('value', "");
    form.find('#name').attr('value', "");
    form.find('#password_reg').attr('value', "");
    form.find('#confirm_password').attr('value', "");
    /* 清空错误信息 */
    $('.status.message.submission-error').removeClass('is-shown').focus();
}

function check_input(input) {

    var len = $(input).val().length;
    var reLen = 0;
    for (var i = 0; i < len; i++) {
        if ($(input).val().charCodeAt(i) < 27 || $(input).val().charCodeAt(i) > 126) {
// 全角
            reLen += 2;
        } else {
            reLen++;
        }
    }
    if (reLen > 16) {
        show_register_error_message('昵称长度为2~16个字符');
    } else {
        $('.status.message.submission-error').removeClass('is-shown').focus();
    }

}

