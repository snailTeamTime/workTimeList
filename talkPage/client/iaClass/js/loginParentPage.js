// // 清空缓存 start
// window.onload = function () {
//     sessionStorage.clear();
// };
//
//
// // 登陆页面 start
// $("#loginParentPageBtn").click(function (e) {
//     var parent_phone = $("#user_name").val();
//     console.log(parent_phone);
//     if (parent_phone != "" && parent_phone != null && parent_phone != "undefined") {
//         //正则验证中文
//         var zwRgb = /^[\u4e00-\u9fa5]+$/i;
//         // 如果是中文则调取查询学校接口/
//         if(zwRgb.test(parent_phone)){
//             console.log("学校登陆");
//             var ajaxobj = {
//                 itype: "get",
//                 iname: "class/classNoticeRoute/selectStudentNum"
//             };
//             var actobj = {"school_name": parent_phone,};
//
//             getdata(ajaxobj, actobj, function (data) {
//
//                 console.log(data);
//                 if (data.resultdata == "1") {
//                     $("#user_name").attr("data-content", "用户不存在请查看是否正确");
//                     $("#user_name").popover('show');
//                     setTimeout(function (e) {
//                         $("#user_name").popover('hide');
//                         $("#user_name").attr("data-content", "");
//                     }, 2000);
//                 }
//                 else {
//                     console.log(data);
//                     console.log("学校登陆成功！");
//                     if (data.resultdata.length > 0) {
//                         var item = data.resultdata[0];
//                         console.log(item);
//                         sessionStorage.setItem("school_id", item.school_id);
//                         sessionStorage.setItem("school_name", item.school_name);
//                         sessionStorage.setItem("student_count", item.student_count);
//                         sessionStorage.setItem("teacher_count", item.teacher_count);
//                         console.log("登陆成功");
//                         window.location.href = "studentPortResult.html";
//                     }else {
//                         $("#user_name").attr("data-content", "用户信息不正确请重新输入！");
//                         $("#user_name").popover('show');
//                         $("#user_name").val('');
//                         setTimeout(function (e) {
//                             $("#user_name").popover('hide');
//                             $("#user_name").attr("data-content", "");
//                         }, 2000);
//                     }
//
//
//                 }
//             });
//
//         }
//         else {
//             //否则查询学生家长接口
//             console.log("学生家长");
//             var ajaxobj = {
//                 itype: "get",
//                 iname: "user/userRoute/parentLogin"
//             };
//             var actobj = {"parent_phone": parent_phone,};
//             getdata(ajaxobj, actobj, function (data) {
//                 console.log(data);
//                 if (data.resultdata == "2") {
//                     $("#user_name").attr("data-content", "用户不存在请查看是否正确");
//                     $("#user_name").popover('show');
//                     setTimeout(function (e) {
//                         $("#user_name").popover('hide');
//                         $("#user_name").attr("data-content", "");
//                     }, 2000);
//                 }
//                 else {
//                     console.log(data);
//                     console.log("家长登陆成功！");
//                     if (data.resultdata.length > 0) {
//                         var item = data.resultdata[0];
//                         console.log(item);
//                         sessionStorage.setItem("bd_class_id", item.bd_class_id);
//                         sessionStorage.setItem("bd_user_id", item.bd_user_id);
//                         sessionStorage.setItem("class_id", item.class_id);
//                         sessionStorage.setItem("contact_num", item.contact_num);
//                         sessionStorage.setItem("create_time", item.create_time);
//                         sessionStorage.setItem("house_address", item.house_address);
//                         sessionStorage.setItem("isgrades_type_id", item.isgrades_type_id);
//                         sessionStorage.setItem("isgroup_id", item.isgroup_id);
//                         sessionStorage.setItem("isgroup_name", item.isgroup_name);
//                         sessionStorage.setItem("parent_name", item.parent_name);
//                         sessionStorage.setItem("parent_phone", item.parent_phone);
//                         sessionStorage.setItem("bd_class_id", item.bd_class_id);
//                         sessionStorage.setItem("password", item.password);
//                         sessionStorage.setItem("rlt_user_id", item.rlt_user_id);
//                         sessionStorage.setItem("role_id", item.role_id);
//                         sessionStorage.setItem("role_name", item.role_name);
//                         sessionStorage.setItem("school_year_id", item.school_year_id);
//                         sessionStorage.setItem("server_id", item.server_id);
//                         sessionStorage.setItem("sex", item.sex);
//                         sessionStorage.setItem("stu_num", item.stu_num);
//                         sessionStorage.setItem("true_name", item.true_name);
//                         sessionStorage.setItem("user_id", item.user_id);
//                         sessionStorage.setItem("user_name", item.user_name);
//                         sessionStorage.setItem("user_type", item.user_type);
//
//                         console.log("登陆成功");
//                         window.location.href = "reportResultMove.html";
//
//                     }else {
//                         $("#user_name").attr("data-content", "用户名信息不正确请重新输入！");
//                         $("#user_name").popover('show');
//                         $("#user_name").val('');
//                         setTimeout(function (e) {
//                             $("#user_name").popover('hide');
//                             $("#user_name").attr("data-content", "");
//                         }, 2000);
//                     }
//
//
//                 }
//             });
//         }
//
//     } else {
//         $("#user_name").attr("data-content", "用户名/手机号不能为空");
//         $("#user_name").popover('show');
//         setTimeout(function (e) {
//             $("#user_name").popover('hide');
//             $("#user_name").attr("data-content", "");
//         }, 2000);
//     }
// });
// // 登陆页面 end
