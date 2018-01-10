


































// var myActivityMonthChart = null;
// var myMonthActiveSubjectsChart = null;
// var timeDay = "";
// var timeMonth = "";
// window.onload = function (ev) {
//     console.log(sessionStorage);
//     getCurrentTime();//获取当前日期
//     timeDay = sessionStorage.getItem("thisTime");
//     timeMonth = sessionStorage.getItem("thisMonth");
//     debugger;
//     getDayTitle(timeDay);
//     getTimeMonth(timeMonth);
//     getSchoolInfo();//调用接口获取学校信息
//     getGrade();//获取学校年级信息
// };
//
//
// var school_id = sessionStorage.getItem("school_id");
// var grade_id = "";
// var class_id = "";
//
// function getDayTitle(timeDay) {
//     //查询时间改变样式 start
//     var getDayTitle = timeDay.split('-');
//     getDayTitle = getDayTitle[0] + "年" + getDayTitle[1] + "月" + getDayTitle[2] + "日";
//     $("#getDayTitle").html(getDayTitle);
//     //查询时间改变样式 end
// }
//
//
// //获取学校信息
// function getSchoolInfo() {
//     var school_name = sessionStorage.getItem("school_name");
//     console.log(school_name);
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectStudentNum"
//     };
//     var actobj = {"school_name": school_name,};
//
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         if (data.resultdata == "1") {
//             layer.open({
//                 style: 'border:none; background-color:#fff; color: #e4393c;',
//                 content: '学校信息错误请重新登陆'
//                 , time: 3 //2秒后自动关闭
//                 , success: function (data) {
//                     setTimeout(function () {
//                         // window.location.href = "loginParentPage.html";
//                     }, 2500)
//                 }
//             })
//         }
//         else {
//             console.log(data);
//             console.log("学校登陆成功！");
//             if (data.resultdata.length > 0) {
//                 var item = data.resultdata[0];
//                 $("#usertruename").html(item.school_name);
//                 $("#teacherNum").html(item.teacher_count + "人");
//                 $("#studentNum").html(item.student_count + "人");
//
//             }
//         }
//     });
// }
//
// //获取学校年级 start
// function getGrade() {
//     var school_id = sessionStorage.getItem("school_id");
//     console.log(school_id);
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectGroupBySchoolId"
//     };
//     var actobj = {"school_id": school_id,};
//
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         var indexLength = data.resultdata.length;
//         if (indexLength > 0) {
//             console.log("请求成功");
//             grade_id = data.resultdata[0].grade_id;
//             var gradeNameStr = "";
//             //循环去出年级信息 start
//             $.each(data.resultdata, function (index, item) {
//                 gradeNameStr +=
//                     "<option value='" + item.grade_id + "'>" + item.grade_name + "</option>"
//             });
//             //循环去出年级信息 end
//             $("#gradeName").children().remove();
//             $("#gradeName").append(gradeNameStr);
//
//             getClassName();//获取年级下面的班级
//         }
//     });
// }
//
// //获取学校年级 end
//
// //获取班级名称 start
// function getClassName() {
//     var school_id = sessionStorage.getItem("school_id");
//     console.log(school_id);
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectClassByBuildId"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         var indexLength = data.resultdata.length;
//         if (indexLength > 0) {
//             class_id = data.resultdata[0].bd_class_id;
//             console.log("请求成功");
//             var classNameStr = "";
//             //循环取出当前年级下的班级 start
//             $.each(data.resultdata, function (index, item) {
//                 classNameStr +=
//                     "<option value='" + item.bd_class_id + "'>" + item.bd_class_name + "班</option>"
//             });
//             //循环取出当前年级下的班级 end
//             $("#className").children().remove();
//             $("#className").append(classNameStr);
//             getDayAllInfo();//选择年级后调用获取日报告；
//             getMonthAllInfo(timeMonth)//生成月报告
//
//         } else {
//             var classNameStr = "<option>当前年级没有班级</option>";
//             $("#className").children().remove();
//             $("#className").append(classNameStr);
//             getDayAllInfo();//选择年级后调用获取日报告；
//             var timeMonth = sessionStorage.getItem("thisMonth");
//             getMonthAllInfo(timeMonth)//生成月报告
//
//         }
//     });
// }
//
// //获取班级名称 end
//
//
// //点击年级获取班级列表 start
// $("#gradeName").change(function () {
//     var _this = $(this);
//     grade_id = _this.val();
//     getClassName();
// });
// //点击年级获取班级列表 end
//
// //获取学校年级 end
// //选择班级查看班级活跃信息
// $("#className").change(function () {
//     var _this = $(this);
//     class_id = _this.val();
//     getDayAllInfo();//生成日报告
//     getMonthAllInfo(timeMonth);//生成月报告
// });
//
//
// function getDayAllInfo() {
//     getDayActive();//获取班级日活跃度 日环形图
//     getDayActiveSubjects();//获取班级日活跃科目 字浮云
//     getClassStar()//获取班级之星
// }
//
// //获取班级日活跃start
// // 获取班级日活跃度 start
// function getDayActive() {
//     $("#getDayDate").val(timeDay);
//     console.log(timeDay);
//     //获取学校id
//     var school_id = sessionStorage.getItem("school_id");
//     // timeDay = sessionStorage.getItem("thisTime");
//     console.log(grade_id);
//     console.log(class_id);
//     console.log(timeDay);
//     var comprehensiveScore = "";//班级日活跃
//
//     //查询班级日活跃度 start
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectClassHuo"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id,
//         "class_id": class_id,
//         "time": timeDay
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         if (data.resultnum !== "0000") {
//             console.error("班级活跃返回数据错误");
//             return
//         } else {
//             if (data.resultdata == "no") {
//                 layer.open({
//                     content: '当前年级没有班级信息，请选择其它年级。'
//                     , skin: 'msg'
//                     , time: 3 //2秒后自动关闭
//                 });
//                 comprehensiveScore = 0;
//                 getDayActiveCanvasRing(comprehensiveScore);
//
//             } else {
//                 comprehensiveScore = data.resultdata * 100;
//                 getDayActiveCanvasRing(comprehensiveScore);
//             }
//         }
//
//     });
//
//     //查询班级日活跃度 end
// }
//
// //查询班级日活跃科目 start
// function getDayActiveSubjects() {
//     var school_id = sessionStorage.getItem("school_id");
//     // timeDay = sessionStorage.getItem("thisTime");
//
//     console.log(grade_id);
//     console.log(class_id);
//     console.log(timeDay);
//
//
//     var activeSubjectsArr = [];//班级日活跃科目数组;
//     var activeSubjectsName = [];//班级活跃科目 名字
//     var activeSubjectsNum = [];//班级活跃科目 值
//
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectHuoCi"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id,
//         "class_id": class_id,
//         "time": timeDay
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         var dayActiveSubjectsStr = '';
//         if (data.resultnum !== "0000") {
//             console.error("班级活跃科目返回数据错误");
//             return
//         } else {
//             if (data.resultdata == "1") {
//                 console.warn("当前班级没有活跃科目信息")
//                 dayActiveSubjectsStr +=
//                     "<tr>" +
//                     "     <td colspan='5'>当前年级、班级暂无活跃学科信息</td>" +
//                     " </tr>";
//                 $("#dayActiveSubjects").children().remove();
//                 $("#dayActiveSubjects").append(dayActiveSubjectsStr);
//                 activeSubjectsArr = [];
//                 getDayActiveCanvasZifuyun(activeSubjectsArr);//调用字浮云为空
//             }
//             else {
//                 console.log(data);
//
//                 if (data.resultdata.length > 0) {
//                     //循环取出当前年级\班级活跃科目信息 start
//                     $.each(data.resultdata, function (index, item) {
//                         dayActiveSubjectsStr +=
//                             "<tr>" +
//                             "     <td>" + item.bd_subject_name + "</td>" +
//                             "     <td>" + item.jushouNum + "</td>" +
//                             "     <td>" + item.fayanNum + "</td>" +
//                             "     <td>" + item.hezuoNum + "</td>" +
//                             "     <td>" + item.zongNum + "</td>" +
//                             " </tr>";
//                         activeSubjectsName.push(item.bd_subject_name);
//                         activeSubjectsNum.push(item.zongNum);
//                     });
//                     //循环取出当前年级\班级活跃科目信息 end
//                     $("#dayActiveSubjects").children().remove();
//                     $("#dayActiveSubjects").append(dayActiveSubjectsStr);
//                 } else {
//                     dayActiveSubjectsStr +=
//                         "<tr>" +
//                         "     <td colspan='5'>当前年级、班级暂无活跃学科信息</td>" +
//                         " </tr>";
//                     $("#dayActiveSubjects").children().remove();
//                     $("#dayActiveSubjects").append(dayActiveSubjectsStr);
//                 }
//
//                 for (var i = 0; i < activeSubjectsName.length; i++) {
//                     console.log(i);
//                     var activeSubjectsObject = {};
//                     for (var j = 0; j < activeSubjectsNum.length; j++) {
//                         if (i == j) {
//                             activeSubjectsObject.name = activeSubjectsName[i];
//                             activeSubjectsObject.value = activeSubjectsNum[j];
//                             activeSubjectsArr.push(activeSubjectsObject);
//                         }
//                     }
//                 }
//                 console.log(activeSubjectsArr);
//
//                 getDayActiveCanvasZifuyun(activeSubjectsArr);
//             }
//         }
//
//     });
// }
//
// //查询班级日活跃科目 end
//
// //在后台页面引入结果页时统计图不显示；原因图形容器的高度获取不到；处理方案：将绘图方法放在setTimeout中执行
// function getDayActiveCanvasRing(comprehensiveScore) {
//     //综合分数环形图 start
//     // var comprehensiveScore = 98;
//     var myActivityChart = echarts.init(document.getElementById('evaluationScore'));
//
//     var pieOption = {
//         legend: {
//             show: false,
//             orient: 'vertical',
//             x: 'left',
//             data: ['综合得分', '与总分相差']
//         },
//         series: [{
//             name: '综合得分情况',
//             type: 'pie',
//             radius: ['80%', '90%'],
//             clockwise: true,
//             label: {
//                 normal: {
//                     show: false,
//                     position: 'center'
//                 }
//             },
//             data: [
//                 {
//                     value: comprehensiveScore,
//                     name: '{a|' + comprehensiveScore + '\n}{c|已超越' + comprehensiveScore + '%班级}',
//                     itemStyle: {
//                         normal: {
//                             color: '#40D8C1'
//                         }
//                     },
//                     label: {
//                         normal: {
//                             show: true,
//                             rich: {
//                                 a: {
//                                     color: '#666666',
//                                     fontSize: 60,
//                                     fontWeight: 'bold',
//                                     lineHeight: 100,
//                                     width: 80,
//                                     align: 'center'
//                                 },
//                                 c: {
//                                     color: '#666666',
//                                     fontSize: 15,
//                                     borderRadius: 30,
//                                     width: 120,
//                                     align: 'center',
//                                     padding: [6, 4]
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 {
//                     value: (100 - comprehensiveScore),
//                     name: '',
//                     itemStyle: {
//                         normal: {
//                             color: '#40D8C1',
//                             opacity: 0.2
//                         }
//                     }
//                 }
//             ]
//         }]
//     };
//     myActivityChart.setOption(pieOption);
//     //综合分数环形图 end
//
// }
//
// // 日科目字浮云 start
// function getDayActiveCanvasZifuyun(activeSubjectsArr) {
//
//     var myActiveSubjectsChart = echarts.init(document.getElementById('optionCloud'));
//     var optionCloud = {
//         title: {},
//         tooltip: {},
//         series: [{
//             type: 'wordCloud',
//             gridSize: 20,
//             sizeRange: [20, 70],
//             rotationRange: [0, 0],
//             shape: 'circle',
//             textStyle: {
//                 normal: {
//                     color: function () {
//                         return 'rgb(' + [
//                             Math.round(Math.random() * 160),
//                             Math.round(Math.random() * 160),
//                             Math.round(Math.random() * 160)
//                         ].join(',') + ')';
//                     }
//                 },
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowColor: '#333'
//                 }
//             },
//             data: activeSubjectsArr
//
//         }]
//     };
//     myActiveSubjectsChart.setOption(optionCloud);
// }
//
// //日科目字浮云 end
//
//
// //获取班级之星 start
// function getClassStar() {
//     //获取学校id
//     // console.log(school_id);
//     // console.log(grade_id);
//     // console.log(class_id);
//     // console.log(timeDay);
//     // var comprehensiveScore = "";//班级日活跃
//
//     //查询班级日活跃度 start
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectClassStar"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id,
//         "class_id": class_id,
//         "time": timeDay
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//
//         if (data.resultnum !== "0000") {
//             console.error("班级班级之星返回数据错误");
//             return
//         } else {
//             var goodClassStarStr = "";
//             if (data.resultdata.length > 3) {
//                 var item = data.resultdata;
//                 if (item[0].zongFen == "0") {
//                     goodClassStarStr += "";
//                     $("#goodActiveRankingBox").children().remove();
//                     $("#goodActiveRankingBox").append(goodClassStarStr);
//                 } else {
//                     goodClassStarStr +=
//                         ' <div class="col-sm-4 col-xs-4 goodActiveRanking">' +
//                         '     <img src="../../images/sex' + item[1].sex + '.png" class="goodActiveImg">' +
//                         '     <div class="goodActiveIcon">' +
//                         '         <img src="../../images/ranking2.png">' +
//                         '     </div>' +
//                         '     <div>' + item[1].true_name + '</div>' +
//                         '     <div>' + item[1].zongFen + '分</div>' +
//                         ' </div>' +
//                         ' <div class="col-sm-4 col-xs-4 goodActiveRanking oneRanking">' +
//                         '     <img src="../../images/sex' + item[0].sex + '.png" class="goodActiveImg">' +
//                         '     <div class="goodActiveIcon">' +
//                         '         <img src="../../images/ranking1.png">' +
//                         '     </div>' +
//                         '     <div>' + item[0].true_name + '</div>' +
//                         '     <div>' + item[0].zongFen + '分</div>' +
//                         ' </div>' +
//                         ' <div class="col-sm-4 col-xs-4 goodActiveRanking">' +
//                         '     <img src="../../images/sex' + item[2].sex + '.png" class="goodActiveImg">' +
//                         '     <div class="goodActiveIcon">' +
//                         '         <img src="../../images/ranking3.png">' +
//                         '     </div>' +
//                         '     <div>' + item[2].true_name + '</div>' +
//                         '     <div>' + item[2].zongFen + '分</div>' +
//                         ' </div>';
//
//                     $("#goodActiveRankingBox").children().remove();
//                     $("#goodActiveRankingBox").append(goodClassStarStr);
//                 }
//             } else {
//                 goodClassStarStr += "";
//                 $("#goodActiveRankingBox").children().remove();
//                 $("#goodActiveRankingBox").append(goodClassStarStr);
//             }
//
//         }
//
//     });
//
//
// }
//
// //获取班级之星 end
//
// //获取日期天 调用方法重新绘制 start
// $("#getDayReportBtn").on("click", function (e) {
//     timeDay = $("#getDayDate").val();
//     console.log(timeDay);
//     if (timeDay == '') {
//         layer.open({
//             content: '请选择日期'
//             , skin: 'msg'
//             , time: 2 //2秒后自动关闭
//         });
//     } else {
//         getDayAllInfo();
//         getClassStar();
//         getDayTitle(timeDay);
//     }
//
//
// });
// //获取日期天 调用方法重新绘制 end
//
//
// //获取班级日活跃end
//
//
// // 生成月报告 start
// //获取当前月 start
// function getTimeMonth(timeMonth) {
//     console.warn(timeMonth);
//     //获取当前月 start
//     var thisTimeMonth = timeMonth;
//     thisTimeMonth = thisTimeMonth.split("-");
//     var timeMonthTitle = thisTimeMonth[0] + "年" + thisTimeMonth[1] + "月";
//     console.log(timeMonthTitle);
//     $("#timeMonthTitle").html(timeMonthTitle);
//
// }
//
// //获取当前月 end
//
// //获取月活动 start
// function getMonthActive() {
//     console.log(school_id);
//     console.log(grade_id);
//     console.log(class_id);
//     console.log(timeMonth);
//     var comprehensiveScore = "";//班级月活跃
//
//     //查询班级日活跃度 start
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectClassHuo"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id,
//         "class_id": class_id,
//         "time": timeMonth
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         if (data.resultnum !== "0000") {
//             console.error("班级月活跃返回数据错误");
//             return
//         } else {
//             if (data.resultdata == "no") {
//                 layer.open({
//                     content: '当前年级没有班级信息，请选择其它年级。'
//                     , skin: 'msg'
//                     , time: 3 //2秒后自动关闭
//                 });
//                 comprehensiveScore = 0;
//                 getMonthActiveCanvasRing(comprehensiveScore);
//
//             } else {
//                 comprehensiveScore = data.resultdata * 100;
//                 getMonthActiveCanvasRing(comprehensiveScore);
//             }
//         }
//
//     });
//
//
// }
//
// //获取月活动 end
//
// //生成月报告环形图 start
// function getMonthActiveCanvasRing(comprehensiveScore) {
//     //综合分数环形图 start
//     // var comprehensiveScore = 98;
//     // var myActivityMonthChart = echarts.init(document.getElementById('evaluationScoreMonth'));
//     if (myActivityMonthChart) {
//         myActivityMonthChart.dispose();
//         myActivityMonthChart = echarts.init(document.getElementById('evaluationScoreMonth'));
//     } else {
//         myActivityMonthChart = echarts.init(document.getElementById('evaluationScoreMonth'));
//     }
//     var pieOption = {
//         legend: {
//             show: false,
//             orient: 'vertical',
//             x: 'left',
//             data: ['综合得分', '与总分相差']
//         },
//         series: [{
//             name: '综合得分情况',
//             type: 'pie',
//             radius: ['80%', '90%'],
//             clockwise: true,
//             label: {
//                 normal: {
//                     show: false,
//                     position: 'center'
//                 }
//             },
//             data: [
//                 {
//                     value: comprehensiveScore,
//                     name: '{a|' + comprehensiveScore + '\n}{c|已超越' + comprehensiveScore + '%班级}',
//                     itemStyle: {
//                         normal: {
//                             color: '#40D8C1'
//                         }
//                     },
//                     label: {
//                         normal: {
//                             show: true,
//                             rich: {
//                                 a: {
//                                     color: '#666666',
//                                     fontSize: 60,
//                                     fontWeight: 'bold',
//                                     lineHeight: 100,
//                                     width: 80,
//                                     align: 'center'
//                                 },
//                                 c: {
//                                     color: '#666666',
//                                     fontSize: 15,
//                                     borderRadius: 30,
//                                     width: 120,
//                                     align: 'center',
//                                     padding: [6, 4]
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 {
//                     value: (100 - comprehensiveScore),
//                     name: '',
//                     itemStyle: {
//                         normal: {
//                             color: '#40D8C1',
//                             opacity: 0.2
//                         }
//                     }
//                 }
//             ]
//         }]
//     };
//     myActivityMonthChart.setOption(pieOption);
//     //综合分数环形图 end
//
// }
//
// //生成月报告环形图 end
//
// //查询班级月活跃科目 start
// function getMonthActiveSubjects() {
//     console.log(school_id);
//     console.log(grade_id);
//     console.log(class_id);
//     console.log(timeMonth);
//
//
//     var activeSubjectsArr = [];//班级日活跃科目数组;
//     var activeSubjectsName = [];//班级活跃科目 名字
//     var activeSubjectsNum = [];//班级活跃科目 值
//
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectHuoCi"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id,
//         "class_id": class_id,
//         "time": timeMonth
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//         var monthActiveSubjectsStr = '';
//         if (data.resultnum !== "0000") {
//             console.error("班级活跃科目返回数据错误");
//             return
//         } else {
//             if (data.resultdata == "1") {
//                 console.warn("当前班级没有活跃科目信息")
//                 monthActiveSubjectsStr +=
//                     "<tr>" +
//                     "     <td colspan='5'>当前年级、班级暂无活跃学科信息</td>" +
//                     " </tr>";
//                 $("#monthActiveSubjects").children().remove();
//                 $("#monthActiveSubjects").append(monthActiveSubjectsStr);
//                 activeSubjectsArr = [];
//                 getMonthActiveCanvasZifuyun(activeSubjectsArr);//调用字浮云为空
//             }
//             else {
//                 console.log(data);
//
//                 if (data.resultdata.length > 0) {
//                     //循环取出当前年级\班级活跃科目信息 start
//                     $.each(data.resultdata, function (index, item) {
//                         monthActiveSubjectsStr +=
//                             "<tr>" +
//                             "     <td>" + item.bd_subject_name + "</td>" +
//                             "     <td>" + item.jushouNum + "</td>" +
//                             "     <td>" + item.fayanNum + "</td>" +
//                             "     <td>" + item.hezuoNum + "</td>" +
//                             "     <td>" + item.zongNum + "</td>" +
//                             " </tr>";
//                         activeSubjectsName.push(item.bd_subject_name);
//                         activeSubjectsNum.push(item.zongNum);
//                     });
//                     //循环取出当前年级\班级活跃科目信息 end
//                     $("#monthActiveSubjects").children().remove();
//                     $("#monthActiveSubjects").append(monthActiveSubjectsStr);
//                 } else {
//                     dayActiveSubjectsStr +=
//                         "<tr>" +
//                         "     <td colspan='5'>当前年级、班级暂无活跃学科信息</td>" +
//                         " </tr>";
//                     $("#monthActiveSubjects").children().remove();
//                     $("#monthActiveSubjects").append(monthActiveSubjectsStr);
//                 }
//
//                 for (var i = 0; i < activeSubjectsName.length; i++) {
//                     console.log(i);
//                     var activeSubjectsObject = {};
//                     for (var j = 0; j < activeSubjectsNum.length; j++) {
//                         if (i == j) {
//                             activeSubjectsObject.name = activeSubjectsName[i];
//                             activeSubjectsObject.value = activeSubjectsNum[j];
//                             activeSubjectsArr.push(activeSubjectsObject);
//                         }
//                     }
//                 }
//                 console.log(activeSubjectsArr);
//
//                 getMonthActiveCanvasZifuyun(activeSubjectsArr);
//             }
//         }
//
//     });
// }
//
// //查询班级月活跃科目 end
//
//
// // 月科目字浮云 start
// function getMonthActiveCanvasZifuyun(activeSubjectsArr) {
//
//     // var myMonthActiveSubjectsChart = echarts.init(document.getElementById('optionCloudMonth'));
//     if (myMonthActiveSubjectsChart) {
//         myMonthActiveSubjectsChart.dispose();
//         myMonthActiveSubjectsChart = echarts.init(document.getElementById('optionCloudMonth'));
//     } else {
//         myMonthActiveSubjectsChart = echarts.init(document.getElementById('optionCloudMonth'));
//     }
//
//     var optionCloud = {
//         title: {},
//         tooltip: {},
//         series: [{
//             type: 'wordCloud',
//             gridSize: 20,
//             sizeRange: [20, 70],
//             rotationRange: [0, 0],
//             shape: 'circle',
//             textStyle: {
//                 normal: {
//                     color: function () {
//                         return 'rgb(' + [
//                             Math.round(Math.random() * 160),
//                             Math.round(Math.random() * 160),
//                             Math.round(Math.random() * 160)
//                         ].join(',') + ')';
//                     }
//                 },
//                 emphasis: {
//                     shadowBlur: 10,
//                     shadowColor: '#333'
//                 }
//             },
//             data: activeSubjectsArr
//
//         }]
//     };
//     myMonthActiveSubjectsChart.setOption(optionCloud);
// }
//
// // 月科目字浮云 end
//
// //获取月班级之星 start
// function getMonthClassStar() {
//     //获取学校id
//     console.log(school_id);
//     console.log(grade_id);
//     console.log(class_id);
//     console.log(timeMonth);
//
//     //查询班级日活跃度 start
//     var ajaxobj = {
//         itype: "get",
//         iname: "class/classNoticeRoute/selectClassStar"
//     };
//     var actobj = {
//         "school_id": school_id,
//         "grade_id": grade_id,
//         "class_id": class_id,
//         "time": timeMonth
//     };
//     getdata(ajaxobj, actobj, function (data) {
//         console.log(data);
//
//         if (data.resultnum !== "0000") {
//             console.error("班级班级之星返回数据错误");
//             return
//         } else {
//             var goodMonthClassStarStr = "";
//             if (data.resultdata.length > 3) {
//
//                 var item = data.resultdata;
//                 if (item[0].zongFen == "0") {
//                     goodMonthClassStarStr += "";
//                     $("#goodMonthActiveRankingBox").children().remove();
//                     $("#goodMonthActiveRankingBox").append(goodMonthClassStarStr);
//
//                 } else {
//                     goodMonthClassStarStr +=
//                         ' <div class="col-sm-4 col-xs-4 goodActiveRanking">' +
//                         '     <img src="../../images/sex' + item[1].sex + '.png" class="goodActiveImg">' +
//                         '     <div class="goodActiveIcon">' +
//                         '         <img src="../../images/ranking2.png">' +
//                         '     </div>' +
//                         '     <div>' + item[1].true_name + '</div>' +
//                         ' </div>' +
//                         ' <div class="col-sm-4 col-xs-4 goodActiveRanking oneRanking">' +
//                         '     <img src="../../images/sex' + item[0].sex + '.png" class="goodActiveImg">' +
//                         '     <div class="goodActiveIcon">' +
//                         '         <img src="../../images/ranking1.png">' +
//                         '     </div>' +
//                         '     <div>' + item[0].true_name + '</div>' +
//                         ' </div>' +
//                         ' <div class="col-sm-4 col-xs-4 goodActiveRanking">' +
//                         '     <img src="../../images/sex' + item[2].sex + '.png" class="goodActiveImg">' +
//                         '     <div class="goodActiveIcon">' +
//                         '         <img src="../../images/ranking3.png">' +
//                         '     </div>' +
//                         '     <div>' + item[2].true_name + '</div>' +
//                         ' </div>';
//
//                     $("#goodMonthActiveRankingBox").children().remove();
//                     $("#goodMonthActiveRankingBox").append(goodMonthClassStarStr);
//
//                 }
//             } else {
//                 goodMonthClassStarStr += "";
//                 $("#goodMonthActiveRankingBox").children().remove();
//                 $("#goodMonthActiveRankingBox").append(goodMonthClassStarStr);
//             }
//
//         }
//
//     });
//
//
// }
//
// //获取月班级之星 end
//
// // 生成月报告 end
//
// //获取日期月 调用方法重新绘制 start
// $("#getMonthReportBtn").on("click", function (e) {
//     timeMonth = $("#getMonthDate").val();
//     console.log(timeMonth);
//     if (timeMonth == "") {
//         layer.open({
//             content: '请选择日期。'
//             , skin: 'msg'
//             , time: 2 //2秒后自动关闭
//         });
//     } else {
//         getMonthAllInfo(timeMonth);
//     }
//
// });
// //获取日期月 调用方法重新绘制 end
//
//
// //调用方法生成月报告 start
// function getMonthAllInfo(timeMonth) {
//
//     getTimeMonth(timeMonth);//获取时间
//     getMonthActive();//获取月活跃度
//     getMonthActiveSubjects();//获取班级月活跃科目
//     getMonthClassStar();//获取月班级之星
// }
//
// //调用方法生成月报告 end
//
// //切换到月报告
// $("#monthBtn").on("click", function (e) {
//     $("#getMonthDate").val(timeMonth);//赋值制时间
//     console.log(timeMonth);
//     getMonthActive();//获取月活跃度
//     getMonthActiveSubjects();//获取班级月活跃科目
//     getMonthClassStar();//获取月班级之星
// });