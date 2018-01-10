// 外网
// var requestUrl ="http://101.200.231.203:9004/";

// var requestUrl = "http://localhost:3388/IAClassRoom/";
// 赵志洋ip

// var requestUrl = "http://192.168.1.118:3388/IAClassRoom/";
var requestUrl = "http://192.168.1.73:9004/IAClassRoom/";
// 外网
// var requestUrl = "http://101.200.231.203:9004/IAClassRoom/";

// var requestUrl = "http://101.200.231.203:9004/IAClassRoom/";


//公共ajax请求方法 start
var getdata = function (iter, p, _callback) {
    var obj;
    if (p) {
        obj = {JSONPARAM: JSON.stringify(p)};
    }
    $.ajax({
        type: iter.itype,
        url: requestUrl + iter.iname + "?_n=" + Date.parse(new Date()) / 1000,
        data: obj,
        datatype: "JSON",
        success: function (res) {
            //后台返回的是json
            //res = JSON.parse(res);
            _callback(res);
        },
        error: function (e) {
            console.error("ajax加载数据错误，请查证")
        }
    });
};
//公共ajax请求方法 end


//初始化提示弹出框 start
$(function () {
    $('[data-toggle="popover"]').popover()
});
//初始化提示弹出框 end

//初始化 start
var userIdBox = new Array();//上课学生的user_id数组用于随机点名
var groupNameList = new Array();//上课学生的user_id数组用于随机点名
//初始化 end

// 初始化loading内容及方法 start
function loading(e) {
    var loadingStr =
        "<div id='loading'>" +
        "   <div id='loading-center'>" +
        "       <div id='loading-center-absolute'>" +
        "           <div id='loadingTitle'>拼命加载中...</div>" +
        "           <div class='object' id='object_one'></div>" +
        "           <div class='object' id='object_two' style='left:20px;'></div>" +
        "           <div class='object' id='object_three' style='left:40px;'></div>" +
        "           <div class='object' id='object_four' style='left:60px;'></div>" +
        "           <div class='object' id='object_five' style='left:80px;'></div>" +
        "       </div>" +
        "   </div>" +
        "</div>";
    $("body").append(loadingStr);
    $("#loading").delay(1200).fadeOut(500);
    $("body").css("display", "block");
}

// 初始化loading内容及方法 end

// 退出登陆 start
function exitLogin() {
    window.location.href = 'loginPage.html';
}

// 退出登陆 end

//获取检查时间戳 start
function onloadVal() {
    var grade_name = sessionStorage.getItem("grade_name");
    var bd_class_name = sessionStorage.getItem("bd_class_name");
    //标题，班级名称
    $("#classInfoName").html(grade_name + "（&nbsp;" + bd_class_name + "&nbsp;）班");
// 获取时间戳 start
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "H+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
// 获取时间戳 end
    var time = new Date().Format("yyyy-MM-dd");
    time = time.split("-");
    time = time[0] + "年" + time[1] + "月" + time[2] + "日";
    $("#timeStamp").html(time);
}

//获取检查时间戳 end

//获取当前时间与前一天 start
function getCurrentTime() {
    // 获取时间戳 start
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "H+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
// 获取时间戳 end
    var time = new Date().Format("yyyy-MM-dd");
    time = time.split("-");
    var timeY = time[0];
    var timeM = time[1];
    var timeD = time[2];
    var frontTimeD = time[2] - 1;

    var thisTime = timeY + "-" + timeM + "-" + timeD;
    var frontTime = timeY + "-" + timeM + "-" + frontTimeD;
    var thisMonth = timeY + "-" + timeM;

    sessionStorage.setItem("thisTime",thisTime);
    sessionStorage.setItem("frontTime",frontTime);
    sessionStorage.setItem("thisMonth",thisMonth);
}

//获取当前时间与前一天 end

//初始化当天是检查项数据是否存表调用接口 start
function insertScore(e) {
    var bd_class_id = sessionStorage.getItem("bd_class_id");

    if (bd_class_id != "" && bd_class_id != null && bd_class_id != "undefined") {
        var ajaxobj = {
            itype: "get",
            iname: "class/groupBeforeRoute/insertScore"
        };
        var actobj = {
            "bd_class_id": bd_class_id,
        };
        getdata(ajaxobj, actobj, function (data) {
            console.log("初始化检查成功");
        });
    }
}

//当天是检查项数据是否存表调用接口 end



