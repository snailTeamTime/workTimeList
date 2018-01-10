
// 雷达图 start


var myChartRadarBox = echarts.init(document.getElementById('reportCanvas1'));
var option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        radius: '65%',
        name: {
            textStyle: {
                color: '#666',
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            {name: '到校', max: 10},
            {name: '红领巾', max: 10},
            {name: '课间纪律', max: 10},
            {name: '个人卫生', max: 10},
            {name: '按时完成', max: 10},
            {name: '值日', max: 10},
            {name: '作业', max: 10},
            {name: '听写', max: 10},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        itemStyle: {
            normal: {
                color: '#2EC7C9'
            }
        },
        areaStyle: {
            normal: {
                opacity: 0.5
            }
        },


        // areaStyle: {normal: {}},
        data: [
            {
                value: ["10", "10", "10", "10", "10", "10", "10", "10"],
                name: '教学教务'
            },
            // {
            //     value : [50000, 14000, 28000, 31000, 42000, 21000, 10000, 28000, 35000, 50000],
            //     name : '实际开销（Actual Spending）'
            // }
        ]
    }]
};
myChartRadarBox.setOption(option);

// //教学教务雷达图 end

// 雷达图 end

var myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['举手', '发言', '合作', '警告']

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            // data: subjectNameDataDay,
            data: ["语文", "数学", "英语", "思想品德", "科学"],
            axisLabel: {
                interval: 0,//横轴信息全部显示
                rotate: -30,//-30度角倾斜显示
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [

        {
            name: '举手',
            type: 'bar',
            // data: raiseHandsNumDataDay,
            data: [5, 0, 0, 2, 4],
            itemStyle: {
                normal: {
                    color: '#91c7af'
                }
            }
        },
        {
            name: '发言',
            type: 'bar',
            // data: speakNumDataDay,
            data: [3, 0, 1, 4, 1],
            itemStyle: {
                normal: {
                    color: '#607d8b'
                }
            }
        },
        {
            name: '合作',
            type: 'bar',
            data: [1, 1, 1, 3, 1],
            // data: cooperationNumDataDay,
            itemStyle: {
                normal: {
                    color: '#d48265'
                }
            }
        },
        {
            name: '警告',
            type: 'bar',
            data: [2, 1, 1, 1, 0],
            // data: noticeNumDataDay,
            itemStyle: {
                normal: {
                    color: '#c23632'
                }
            }

        }

    ]
};
myChartRadarBox2.setOption(option);












// var myChartRadarBox2 = null;
// var monthReportResultCanvas2 = null;
//
// window.onload = function (ev) {
//     getCurrentTime();//获取当日 与 昨日
//     console.log(window.sessionStorage);
//
// //为了延迟加载，因为公共方法中的时间计算需要时间。
//     setTimeout(function (e) {
//         frontTime = sessionStorage.getItem('thisTime');
//         console.log(frontTime);
//         studentBasicInfo();//获取学生基本信息
//         teachingAffairsGR();//获取个人教学教务数据
//         classRoomDynamicsDay(); //获取课堂动态数据
//         checkPlus();//获取加分项好人好事
//     }, 200)
// };
//
// //教学教务--日得分
// var teachingAffairsDataDay = [];
// //学科名称
// var subjectNameDataDay = [];
// //举手数量
// var raiseHandsNumDataDay = [];
// //发言数量
// var speakNumDataDay = [];
// //合作数量
// var cooperationNumDataDay = [];
// //警告
// var noticeNumDataDay = [];
//
//
// //教学教务--月得分
// var teachingAffairsMonth = [];
// //月学科名称
// var subjectNameDataMonth = [];
// //月举手数量
// var raiseHandsNumDataMonth = [];
// //月发言数量
// var speakNumDataMonth = [];
// //月合作数量
// var cooperationNumDataMonth = [];
// //月警告
// var noticeNumDataMonth = [];
//
//
// //选择日期生成报告 start
// $("#getDayReportBtn").on("click", function (e) {
//     var chooseFrontTime = $("#getDayDate").val();
//     if (chooseFrontTime != '' && chooseFrontTime != null && chooseFrontTime != 'undefined') {
//         console.log(chooseFrontTime);
//         frontTime = chooseFrontTime;
//         teachingAffairsGR();
//         classRoomDynamicsDay();
//         checkPlus()
//     }
// });
//
// //选择日期生成报告 end
//
//
// //获取学生基本信息 start
// function studentBasicInfo(e) {
//     var user_id = sessionStorage.getItem('user_id');
//     console.log(user_id);
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectSudentXin'
//         };
//         var actobj = {"user_id": user_id};
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             console.log('学生信息请求成功！');
//             if (data.resultdata.length > 0) {
//                 var item = data.resultdata[0];
//                 console.log(item);
//                 var studentBasicInfoSrc = '';
//                 var sex = item.sex == 1 ? "男" : "女";
//
//                 studentBasicInfoSrc +=
//                     '<table>' +
//                     '     <thead>' +
//                     '     <tr>' +
//                     '         <th colspan="2" width="100">学生信息</th>' +
//                     '     </tr>' +
//                     '     </thead>' +
//                     '     <tbody>' +
//                     '     <tr>' +
//                     '         <td width="400">学生姓名</td>' +
//                     '         <td width="400">' + item.true_name + '</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>性别</td>' +
//                     '         <td>' + sex + '</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>学校名称</td>' +
//                     '         <td>' + item.school_name + '</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>年级与班级</td>' +
//                     '         <td>' + item.grade_name + '（' + item.bd_class_name + '）班</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>小组名称</td>' +
//                     '         <td>第&nbsp;(' + item.isgroup_name + ')&nbsp;组</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>担任职务</td>' +
//                     '         <td>' + item.roleName + '</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>学籍号</td>' +
//                     '         <td>' + item.stu_num + '</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>手机号</td>' +
//                     '         <td>' + item.contact_num + '</td>' +
//                     '     </tr>' +
//                     '     <tr>' +
//                     '         <td>家长姓名</td>' +
//                     '         <td>' + item.parent_name + '</td>' +
//                     '     </tr>' +
//                     '     </tbody>' +
//                     ' </table>';
//
//                 $("#studentBasicInfo").children().remove();
//                 $("#studentBasicInfo").append(studentBasicInfoSrc);
//
//
//             }
//
//
//         });
//     } else {
//         // location = "loginParentPage.html";
//     }
// }
//
// //获取学生基本信息 end
//
// //日报告 start
//
// //教学教务表格 start
// function teachingAffairsGR() {
//     var user_id = sessionStorage.getItem('user_id');
//     var bd_class_id = sessionStorage.getItem('bd_class_id');
//
//     console.log(user_id);
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectPeopleGe'
//         };
//         var actobj = {
//             'user_id': user_id,
//             'time': frontTime,
//             'bd_class_id': bd_class_id
//         };
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             console.log('学生个人教学教务请求成功！');
//             var teachingAffairsGRsrc = '';
//             if (data.resultdata.peopleNum.length >= 8) {
//                 var item = data.resultdata.peopleNum;
//
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月" + time[2] + "日";
//
//                 var item0 = item[0].score;//到校
//                 var item0PJ = item[0].pingjun;//到校平均
//
//                 var item1 = item[1].score;//红领巾佩戴
//                 var item1PJ = item[1].pingjun;//平均分
//
//                 var item2 = item[2].score;//课间纪律
//                 var item2PJ = item[2].pingjun;//平均
//
//                 var item3 = item[3].score;//个人卫生
//                 var item3PJ = item[3].pingjun;// 平均分
//
//                 var item4 = item[4].score;//按时完成
//                 var item4PJ = item[4].pingjun;//平均分
//
//                 var item5 = item[5].score;//值日情况
//                 var item5PJ = item[5].pingjun;//平均分
//
//                 var item6 = item[6].score;//作业
//                 var item6PJ = item[6].pingjun;//平均分
//
//                 var item7 = item[7].score;//听写
//                 var item7PJ = item[7].pingjun;//平均分
//                 teachingAffairsDataDay = [];
//                 teachingAffairsDataDay.push(item0);
//                 teachingAffairsDataDay.push(item1);
//                 teachingAffairsDataDay.push(item2);
//                 teachingAffairsDataDay.push(item3);
//                 teachingAffairsDataDay.push(item4);
//                 teachingAffairsDataDay.push(item5);
//                 teachingAffairsDataDay.push(item6);
//                 teachingAffairsDataDay.push(item7);
//                 console.log(teachingAffairsDataDay);
//
//                 teachingAffairsGRsrc +=
//                     "   <table>" +
//                     "    <thead>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'>" + inspectTime + "&nbsp;评测结果<span style='font-size: 13px'>&nbsp;(单位:分)</span></th>" +
//                     "    </tr>" +
//                     "    </thead>" +
//                     "    <tbody >" +
//                     "    <tr>" +
//                     "        <td width='60'>项目</tdw>" +
//                     "        <td width='50'>到<br>校</td>" +
//                     "        <td width='50'>领<br>巾</td>" +
//                     "        <td width='50'>课<br>间</td>" +
//                     "        <td width='50'>个<br>人</td>" +
//                     "        <td width='50'>按<br>时</td>" +
//                     "        <td width='50'>值<br>日</td>" +
//                     "        <td width='50'>作<br>业</td>" +
//                     "        <td width='50'>听<br>写</td>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <td>得分</td>" +
//                     "        <td>" + item0 + "</td>" +
//                     "        <td>" + item1 + "</td>" +
//                     "        <td>" + item2 + "</td>" +
//                     "        <td>" + item3 + "</td>" +
//                     "        <td>" + item4 + "</td>" +
//                     "        <td>" + item5 + "</td>" +
//                     "        <td>" + item6 + "</td>" +
//                     "        <td>" + item7 + "</td>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <td>平均分</td>" +
//                     "        <td>" + item0PJ + "</td>" +
//                     "        <td>" + item1PJ + "</td>" +
//                     "        <td>" + item2PJ + "</td>" +
//                     "        <td>" + item3PJ + "</td>" +
//                     "        <td>" + item4PJ + "</td>" +
//                     "        <td>" + item5PJ + "</td>" +
//                     "        <td>" + item6PJ + "</td>" +
//                     "        <td>" + item7PJ + "</td>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <td>总分</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "    </tr>" +
//                     "    </tbody>" +
//                     "</table>";
//
//                 console.log(teachingAffairsDataDay);
//
// //教学教务雷达图 start
//                 var myChartRadarBox = echarts.init(document.getElementById('reportCanvas1'));
//                 var option = {
//                     title: {
//                         text: ''
//                     },
//                     tooltip: {},
//                     legend: {
//                         data: []
//                     },
//                     radar: {
//                         // shape: 'circle',
//                         radius: '65%',
//                         name: {
//                             textStyle: {
//                                 color: '#666',
//                                 backgroundColor: '#fff',
//                                 borderRadius: 3,
//                                 padding: [3, 5]
//                             }
//                         },
//                         indicator: [
//                             {name: '到校', max: 10},
//                             {name: '红领巾', max: 10},
//                             {name: '课间纪律', max: 10},
//                             {name: '个人卫生', max: 10},
//                             {name: '按时完成', max: 10},
//                             {name: '值日', max: 10},
//                             {name: '作业', max: 10},
//                             {name: '听写', max: 10},
//                         ]
//                     },
//                     series: [{
//                         name: '预算 vs 开销（Budget vs spending）',
//                         type: 'radar',
//                         itemStyle: {
//                             normal: {
//                                 color: '#2EC7C9'
//                             }
//                         },
//                         areaStyle: {
//                             normal: {
//                                 opacity: 0.5
//                             }
//                         },
//
//
//                         // areaStyle: {normal: {}},
//                         data: [
//                             {
//                                 value: teachingAffairsDataDay,
//                                 name: '教学教务'
//                             },
//                             // {
//                             //     value : [50000, 14000, 28000, 31000, 42000, 21000, 10000, 28000, 35000, 50000],
//                             //     name : '实际开销（Actual Spending）'
//                             // }
//                         ]
//                     }]
//                 };
//                 myChartRadarBox.setOption(option);
// //教学教务雷达图 end
//
//
//             } else {
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月" + time[2] + "日";
//                 teachingAffairsGRsrc +=
//                     "   <table>" +
//                     "    <thead>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-bottom: 0px'>" + inspectTime + "&nbsp;暂无教学教务评分数据，</th>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-top: 0px; padding-top: 0px;'>请查看其它上课日期。</th>" +
//                     "    </tr>" +
//                     "    </thead>" +
//                     "</table>";
//
// //教学教务雷达图 start
//                 teachingAffairsDataDay = [0, 0, 0, 0, 0, 0, 0, 0];
//                 var myChartRadarBox = echarts.init(document.getElementById('reportCanvas1'));
//                 var option = {
//                     title: {
//                         text: ''
//                     },
//                     tooltip: {},
//                     legend: {
//                         data: []
//                     },
//                     radar: {
//                         // shape: 'circle',
//                         radius: '65%',
//                         name: {
//                             textStyle: {
//                                 color: '#666',
//                                 backgroundColor: '#fff',
//                                 borderRadius: 3,
//                                 padding: [3, 5]
//                             }
//                         },
//                         indicator: [
//                             {name: '到校', max: 10},
//                             {name: '红领巾', max: 10},
//                             {name: '课间纪律', max: 10},
//                             {name: '个人卫生', max: 10},
//                             {name: '按时完成', max: 10},
//                             {name: '值日', max: 10},
//                             {name: '作业', max: 10},
//                             {name: '听写', max: 10},
//                         ]
//                     },
//                     series: [{
//                         name: '预算 vs 开销（Budget vs spending）',
//                         type: 'radar',
//                         itemStyle: {
//                             normal: {
//                                 color: '#2EC7C9'
//                             }
//                         },
//                         areaStyle: {
//                             normal: {
//                                 opacity: 0.5
//                             }
//                         },
//
//
//                         // areaStyle: {normal: {}},
//                         data: [
//                             {
//                                 value: teachingAffairsDataDay,
//                                 name: '教学教务'
//                             },
//                             // {
//                             //     value : [50000, 14000, 28000, 31000, 42000, 21000, 10000, 28000, 35000, 50000],
//                             //     name : '实际开销（Actual Spending）'
//                             // }
//                         ]
//                     }]
//                 };
//                 myChartRadarBox.setOption(option);
// //教学教务雷达图 end
//             }
//             $("#teachingAffairsGR").children().remove();
//             $("#teachingAffairsGR").append(teachingAffairsGRsrc);
//
//         });
//     }
//
// }
//
// //教学教务表格 end
//
//
// //课堂动态表格 start
// function classRoomDynamicsDay() {
//     var user_id = sessionStorage.getItem('user_id');
//     var bd_class_id = sessionStorage.getItem('bd_class_id');
//     var server_id = sessionStorage.getItem('server_id');
//
//     console.log(user_id);
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectKeRi'
//         };
//         var actobj = {
//             'user_id': user_id,
//             'time': frontTime,
//             'bd_class_id': bd_class_id,
//             'school_id': server_id
//         };
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             console.log('课堂动态请求成功！');
//             //课堂动态表格 start
//
//             var indexLength = data.resultdata.length;
//             var classRoomDynamicsDayTheadSrc = "";
//             var classRoomDynamicsDayBodySrc = "";
//             var classRoomDynamicsDaySrc = '';
//
//             classRoomDynamicsDayTheadSrc +=
//                 "<table>" +
//                 "     <thead>" +
//                 "     <tr>" +
//                 "         <th colspan='9' width='750'>" + frontTime + "&nbsp;课堂动态<span style='font-size: 13px'>&nbsp;(单位:次)</span></th>" +
//                 "     </tr>" +
//                 "     <tr>" +
//                 "         <th>学科</th>" +
//                 "         <th>举手</th>" +
//                 "         <th>发言</th>" +
//                 "         <th>合作</th>" +
//                 "         <th>警告</th>" +
//                 "     </tr>" +
//                 "     </thead>" +
//                 "     <tbody>";
//
//             if (indexLength > 0) {
//                 //学科名称
//                 subjectNameDataDay = [];
//                 //举手数量
//                 raiseHandsNumDataDay = [];
//                 //发言数量
//                 speakNumDataDay = [];
//                 //合作数量
//                 cooperationNumDataDay = [];
//                 //警告
//                 noticeNumDataDay = [];
//                 //学生上课互动排名 start
//                 $.each(data.resultdata, function (index, item) {
//
//                     classRoomDynamicsDayBodySrc +=
//                         "<tr>" +
//                         "     <td>" + item.bd_subject_name + "</td>" +
//                         "     <td>" + item.jushounNum + "</td>" +
//                         "     <td>" + item.fayanNum + "</td>" +
//                         "     <td>" + item.zuNum + "</td>" +
//                         "     <td>" + item.jinggaoNum + "</td>" +
//                         " </tr>";
//                     //学科名称
//                     subjectNameDataDay.push(item.bd_subject_name);
//                     //举手数量
//                     raiseHandsNumDataDay.push(item.jushounNum);
//                     //发言数量
//                     speakNumDataDay.push(item.fayanNum);
//                     //合作数量
//                     cooperationNumDataDay.push(item.zuNum);
//                     //警告
//                     noticeNumDataDay.push(item.jinggaoNum);
//
//                     console.log(subjectNameDataDay);
//                 });
//
//                 classRoomDynamicsDaySrc = classRoomDynamicsDayTheadSrc + classRoomDynamicsDayBodySrc + "</tbody></table>"
//
//                 //课堂动态柱状图 start
//                 if (myChartRadarBox2) {
//                     myChartRadarBox2.dispose();
//                     myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
//                 } else {
//                     myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
//                 }
//                 //var myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
//
//                 var option = {
//                     tooltip: {
//                         trigger: 'axis',
//                         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//                         }
//                     },
//                     legend: {
//                         data: ['举手', '发言', '合作', '警告']
//
//                     },
//                     grid: {
//                         left: '3%',
//                         right: '4%',
//                         bottom: '6%',
//                         containLabel: true
//                     },
//                     xAxis: [
//                         {
//                             type: 'category',
//                             data: subjectNameDataDay,
//                             axisLabel: {
//                                 interval: 0,//横轴信息全部显示
//                                 rotate: -30,//-30度角倾斜显示
//                             }
//                         }
//                     ],
//                     yAxis: [
//                         {
//                             type: 'value'
//                         }
//                     ],
//                     series: [
//
//                         {
//                             name: '举手',
//                             type: 'bar',
//                             data: raiseHandsNumDataDay,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#91c7af'
//                                 }
//                             }
//                         },
//                         {
//                             name: '发言',
//                             type: 'bar',
//                             data: speakNumDataDay,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#607d8b'
//                                 }
//                             }
//                         },
//                         {
//                             name: '合作',
//                             type: 'bar',
//                             data: cooperationNumDataDay,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#d48265'
//                                 }
//                             }
//                         },
//                         {
//                             name: '警告',
//                             type: 'bar',
//                             data: noticeNumDataDay,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#c23632'
//                                 }
//                             }
//
//                         }
//
//                     ]
//                 };
//
//                 myChartRadarBox2.setOption(option);
// //课堂动态柱状图 end
//
//             } else {
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月" + time[2] + "日";
//
//                 classRoomDynamicsDaySrc +=
//                     "   <table>" +
//                     "    <thead>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-bottom: 0px'>" + inspectTime + "&nbsp;暂无课堂评测评分数据，</th>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-top: 0px; padding-top: 0px;'>请查看其它上课日期。</th>" +
//                     "    </tr>" +
//                     "    </thead>" +
//                     "   </table>";
//
//                 //课堂动态折线图 start
//                 if (myChartRadarBox2) {
//                     myChartRadarBox2.dispose();
//                     myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
//                 } else {
//                     myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
//                 }
//                 //var myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
//                 var option = {
//                     title: {
//                         text: ''
//                     },
//                     tooltip: {
//                         trigger: 'axis'
//                     },
//                     legend: {
//                         data: []
//                     },
//                     grid: {
//                         left: '3%',
//                         right: '4%',
//                         bottom: '3%',
//                         top: '3%',
//                         containLabel: true
//                     },
//                     // toolbox: {
//                     //     feature: {
//                     //         saveAsImage: {}
//                     //     }
//                     // },
//                     xAxis: {
//                         type: 'category',
//                         boundaryGap: false,
//                         data: []
//                     },
//                     yAxis: {
//                         type: 'value'
//                     },
//                     series: [
//                         /*{
//                             name: '举手',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         },
//                         {
//                             name: '合作',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         },
//                         {
//                             name: '发言',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         },
//                         {
//                             name: '警告',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         }*/
//                     ]
//                 };
//                 myChartRadarBox2.setOption(option);
// //课堂动态折线图 end
//
//             }
//             //课堂动态表格 end
//             $("#classRoomDynamicsDay").children().remove();
//             $("#classRoomDynamicsDay").append(classRoomDynamicsDaySrc);
//         });
//     }
// }
//
// //课堂动态表格 end
//
// //获取好人好事 start
// function checkPlus() {
//     var user_id = sessionStorage.getItem("user_id");
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectGeHao'
//         };
//         var actobj = {
//             'user_id': user_id,
//             'time': frontTime,
//         };
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             console.log('好人好事请求成功！');
//             //课堂动态表格 start
//             if (data.resultnum != "0000") {
//                 console.error("加分项请求数据错误！")
//             } else {
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月" + time[2] + "日";
//
//                 var indexLength = data.resultdata.length;
//                 var item = data.resultdata;
//
//                 var checkPlusSrcDay = "";
//                 if (indexLength > 0) {
//                     checkPlusSrcDay +=
//                         "<table>" +
//                         "     <thead>" +
//                         "     <tr>" +
//                         "         <th colspan='10' width='750'>" + inspectTime + "&nbsp;个性发展评价<span class='text-primary'>&nbsp;加分项</span></th>" +
//                         "     </tr>" +
//                         "     </thead>" +
//                         "     <tbody>" +
//                         "     <tr>" +
//                         "         <td>项目</td>" +
//                         "         <td>" + item[0].inspection_name + "</td>" +
//                         "         <td>" + item[1].inspection_name + "</td>" +
//                         "         <td>" + item[2].inspection_name + "</td>" +
//                         "         <td>" + item[3].inspection_name + "</td>" +
//                         "         <td>" + item[4].inspection_name + "</td>" +
//                         "     </tr>" +
//                         "     <tr>" +
//                         "         <td>得分</td>" +
//                         "         <td>" + item[0].score + "</td>" +
//                         "         <td>" + item[1].score + "</td>" +
//                         "         <td>" + item[2].score + "</td>" +
//                         "         <td>" + item[3].score + "</td>" +
//                         "         <td>" + item[4].score + "</td>" +
//                         "     </tr>" +
//                         "     </tbody>" +
//                         " </table>";
//
//
//                 }
//                 else {
//                     var time = frontTime;
//                     time = time.split(" ");
//                     time = time[0].split("-");
//                     var inspectTime = time[0] + "年" + time[1] + "月" + time[2] + "日";
//                     checkPlusSrcDay +=
//                         "<table>" +
//                         "     <thead>" +
//                         "     <tr>" +
//                         "         <th colspan='10' width='750'>" + inspectTime + "&nbsp;个性发展评价<span class='text-primary'>&nbsp;加分项</span></th>" +
//                         "     </tr>" +
//                         "     </thead>" +
//                         "     <tbody>" +
//                         "     <tr>" +
//                         "         <td>项目</td>" +
//                         "         <td>学习</td>" +
//                         "         <td>实践</td>" +
//                         "         <td>体育</td>" +
//                         "         <td>读书</td>" +
//                         "         <td>孝亲</td>" +
//                         "     </tr>" +
//                         "     <tr>" +
//                         "         <td colspan='6' width='750'> &nbsp;暂无课堂评测评分数据 <br> 请查看其它上课日期</td>" +
//                         "     </tr>" +
//                         "     </tbody>" +
//                         " </table>";
//                 }
//                 //好人好事加分项 end
//                 $("#selectGeHaoDay").children().remove();
//                 $("#selectGeHaoDay").append(checkPlusSrcDay);
//             }
//         });
//     }
// }
//
// //获取好人好事 end
//
// //日报告 end
//
//
// //月信息加载 start
//
// //月--教学教务表格 start
// function monthReportResultTeachingAffairs() {
//     var user_id = sessionStorage.getItem('user_id');
//     var bd_class_id = sessionStorage.getItem('bd_class_id');
//
//     console.log(user_id);
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectPeopleGeYue'
//         };
//         var actobj = {
//             'user_id': user_id,
//             'time': frontTime,
//             'bd_class_id': bd_class_id
//         };
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             console.log('学生个人教学教务请求成功！');
//             var monthReportResultTeachingAffairsSrc = '';
//             if (data.resultdata.peopleNum.length >= 8) {
//                 var item = data.resultdata.peopleNum;
//
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月";
//
//                 var item0 = item[0].score;//到校
//                 var item0PJ = item[0].pingjunYue;//到校平均
//
//                 var item1 = item[1].score;//红领巾佩戴
//                 var item1PJ = item[1].pingjunYue;//平均分
//
//                 var item2 = item[2].score;//课间纪律
//                 var item2PJ = item[2].pingjunYue;//平均
//
//                 var item3 = item[3].score;//个人卫生
//                 var item3PJ = item[3].pingjunYue;// 平均分
//
//                 var item4 = item[4].score;//按时完成
//                 var item4PJ = item[4].pingjunYue;//平均分
//
//                 var item5 = item[5].score;//值日情况
//                 var item5PJ = item[5].pingjunYue;//平均分
//
//                 var item6 = item[6].score;//作业
//                 var item6PJ = item[6].pingjunYue;//平均分
//
//                 var item7 = item[7].score;//听写
//                 var item7PJ = item[7].pingjunYue;//平均分
//
//                 teachingAffairsMonth = [];
//                 teachingAffairsMonth.push(item0);
//                 teachingAffairsMonth.push(item1);
//                 teachingAffairsMonth.push(item2);
//                 teachingAffairsMonth.push(item3);
//                 teachingAffairsMonth.push(item4);
//                 teachingAffairsMonth.push(item5);
//                 teachingAffairsMonth.push(item6);
//                 teachingAffairsMonth.push(item7);
//
//
//                 monthReportResultTeachingAffairsSrc +=
//                     "   <table>" +
//                     "    <thead>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'>" + inspectTime + "&nbsp;评测结果<span style='font-size: 13px'>&nbsp;(单位:分)</span></th>" +
//                     "    </tr>" +
//                     "    </thead>" +
//                     "    <tbody >" +
//                     "    <tr>" +
//                     "        <td width='60'>项目</tdw>" +
//                     "        <td width='50'>到<br>校</td>" +
//                     "        <td width='50'>领<br>巾</td>" +
//                     "        <td width='50'>课<br>间</td>" +
//                     "        <td width='50'>个<br>人</td>" +
//                     "        <td width='50'>按<br>时</td>" +
//                     "        <td width='50'>值<br>日</td>" +
//                     "        <td width='50'>作<br>业</td>" +
//                     "        <td width='50'>听<br>写</td>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <td>得分</td>" +
//                     "        <td>" + item0 + "</td>" +
//                     "        <td>" + item1 + "</td>" +
//                     "        <td>" + item2 + "</td>" +
//                     "        <td>" + item3 + "</td>" +
//                     "        <td>" + item4 + "</td>" +
//                     "        <td>" + item5 + "</td>" +
//                     "        <td>" + item6 + "</td>" +
//                     "        <td>" + item7 + "</td>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <td>平均分</td>" +
//                     "        <td>" + item0PJ + "</td>" +
//                     "        <td>" + item1PJ + "</td>" +
//                     "        <td>" + item2PJ + "</td>" +
//                     "        <td>" + item3PJ + "</td>" +
//                     "        <td>" + item4PJ + "</td>" +
//                     "        <td>" + item5PJ + "</td>" +
//                     "        <td>" + item6PJ + "</td>" +
//                     "        <td>" + item7PJ + "</td>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <td>总分</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "        <td>10</td>" +
//                     "    </tr>" +
//                     "    </tbody>" +
//                     "</table>";
//
//                 //教学教务雷达图 start
//                 var myChartRadarMonthBox = echarts.init(document.getElementById('monthReportResultCanvas1'));
//                 option = {
//                     title: {
//                         text: ''
//                     },
//                     tooltip: {},
//                     legend: {
//                         data: []
//                     },
//                     radar: {
//                         // shape: 'circle',
//                         radius: '65%',
//                         name: {
//                             textStyle: {
//                                 color: '#666',
//                                 backgroundColor: '#fff',
//                                 borderRadius: 3,
//                                 padding: [3, 5]
//                             }
//                         },
//                         indicator: [
//                             {name: '到校', max: 10},
//                             {name: '红领巾', max: 10},
//                             {name: '课间纪律', max: 10},
//                             {name: '个人卫生', max: 10},
//                             {name: '按时完成', max: 10},
//                             {name: '值日', max: 10},
//                             {name: '作业', max: 10},
//                             {name: '听写', max: 10},
//                         ]
//                     },
//                     series: [{
//                         name: '预算 vs 开销（Budget vs spending）',
//                         type: 'radar',
//                         itemStyle: {
//                             normal: {
//                                 color: '#2EC7C9'
//                             }
//                         },
//                         areaStyle: {
//                             normal: {
//                                 opacity: 0.5
//                             }
//                         },
//
//
//                         // areaStyle: {normal: {}},
//                         data: [
//                             {
//                                 value: teachingAffairsMonth,
//                                 name: '教学教务'
//                             },
//                             // {
//                             //     value : [50000, 14000, 28000, 31000, 42000, 21000, 10000, 28000, 35000, 50000],
//                             //     name : '实际开销（Actual Spending）'
//                             // }
//                         ]
//                     }]
//                 };
//                 myChartRadarMonthBox.setOption(option);
//                 //教学教务雷达图 end
//
//
//             } else {
//
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月";
//
//                 monthReportResultTeachingAffairsSrc +=
//                     "   <table>" +
//                     "    <thead>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-bottom: 0px'>" + inspectTime + "&nbsp;暂无教学教务评分数据，</th>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-top: 0px; padding-top: 0px;'>请查看其它上课日期。</th>" +
//                     "    </tr>" +
//                     "    </thead>" +
//                     "</table>";
//                 teachingAffairsMonth = [0, 0, 0, 0, 0, 0, 0];
//                 //教学教务雷达图 start
//                 var myChartRadarMonthBox = echarts.init(document.getElementById('monthReportResultCanvas1'));
//                 option = {
//                     title: {
//                         text: ''
//                     },
//                     tooltip: {},
//                     legend: {
//                         data: []
//                     },
//                     radar: {
//                         // shape: 'circle',
//                         radius: '65%',
//                         name: {
//                             textStyle: {
//                                 color: '#666',
//                                 backgroundColor: '#fff',
//                                 borderRadius: 3,
//                                 padding: [3, 5]
//                             }
//                         },
//                         indicator: [
//                             {name: '到校', max: 10},
//                             {name: '红领巾', max: 10},
//                             {name: '课间纪律', max: 10},
//                             {name: '个人卫生', max: 10},
//                             {name: '按时完成', max: 10},
//                             {name: '值日', max: 10},
//                             {name: '作业', max: 10},
//                             {name: '听写', max: 10},
//                         ]
//                     },
//                     series: [{
//                         name: '预算 vs 开销（Budget vs spending）',
//                         type: 'radar',
//                         itemStyle: {
//                             normal: {
//                                 color: '#2EC7C9'
//                             }
//                         },
//                         areaStyle: {
//                             normal: {
//                                 opacity: 0.5
//                             }
//                         },
//
//
//                         // areaStyle: {normal: {}},
//                         data: [
//                             {
//                                 value: teachingAffairsMonth,
//                                 name: '教学教务'
//                             },
//                             // {
//                             //     value : [50000, 14000, 28000, 31000, 42000, 21000, 10000, 28000, 35000, 50000],
//                             //     name : '实际开销（Actual Spending）'
//                             // }
//                         ]
//                     }]
//                 };
//                 myChartRadarMonthBox.setOption(option);
//                 //教学教务雷达图 end
//
//
//             }
//             $("#monthReportResultTeachingAffairs").children().remove();
//             $("#monthReportResultTeachingAffairs").append(monthReportResultTeachingAffairsSrc);
//
//         });
//     }
//
// }
//
// //教学教务表格 end
//
// //月--课堂动态表格 start
// function monthClassRoomDynamicsDay() {
//     var user_id = sessionStorage.getItem('user_id');
//     var bd_class_id = sessionStorage.getItem('bd_class_id');
//     var server_id = sessionStorage.getItem('server_id');
//
//     console.log(user_id);
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectKeRi'
//         };
//         var actobj = {
//             'user_id': user_id,
//             'time': frontTime,
//             'bd_class_id': bd_class_id,
//             'school_id': server_id,
//         };
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             console.log('课堂动态请求成功！');
//             //课堂动态表格 start
//
//             var indexLength = data.resultdata.length;
//             var classRoomDynamicsDayTheadSrc = "";
//             var classRoomDynamicsDayBodySrc = "";
//             var monthClassRoomDynamicsDaySrc = '';
//
//             var time = frontTime;
//             time = time.split(" ");
//             time = time[0].split("-");
//             var inspectTime = time[0] + "年" + time[1] + "月";
//
//             classRoomDynamicsDayTheadSrc +=
//                 "<table>" +
//                 "     <thead>" +
//                 "     <tr>" +
//                 "         <th colspan='9' width='750'>" + inspectTime + "&nbsp;课堂动态<span style='font-size: 13px'>&nbsp;(单位:次)</span></th>" +
//                 "     </tr>" +
//                 "     <tr>" +
//                 "         <th>学科</th>" +
//                 "         <th>举手</th>" +
//                 "         <th>发言</th>" +
//                 "         <th>合作</th>" +
//                 "         <th>警告</th>" +
//                 "     </tr>" +
//                 "     </thead>" +
//                 "     <tbody>";
//
//             if (indexLength > 0) {
//                 //月学科名称
//                 subjectNameDataMonth = [];
//                 //月举手数量
//                 raiseHandsNumDataMonth = [];
//                 //月发言数量
//                 speakNumDataMonth = [];
//                 //月合作数量
//                 cooperationNumDataMonth = [];
//                 //月警告
//                 noticeNumDataMonth = [];
//                 //学生上课互动排名 start
//                 $.each(data.resultdata, function (index, item) {
//                     console.log(item);
//
//                     classRoomDynamicsDayBodySrc +=
//                         "<tr>" +
//                         "     <td>" + item.bd_subject_name + "</td>" +
//                         "     <td>" + item.jushounNum + "</td>" +
//                         "     <td>" + item.fayanNum + "</td>" +
//                         "     <td>" + item.zuNum + "</td>" +
//                         "     <td>" + item.jinggaoNum + "</td>" +
//                         " </tr>";
//
//                     subjectNameDataMonth.push(item.bd_subject_name);
//                     raiseHandsNumDataMonth.push(item.jushounNum);
//                     speakNumDataMonth.push(item.fayanNum);
//                     cooperationNumDataMonth.push(item.zuNum);
//                     noticeNumDataMonth.push(item.jinggaoNum);
//                     console.log(subjectNameDataMonth);
//                 });
//
//                 monthClassRoomDynamicsDaySrc = classRoomDynamicsDayTheadSrc + classRoomDynamicsDayBodySrc + "</tbody></table>"
//
// //课堂动态折线图 start
//                 //课堂动态柱状图 start
//                 if (monthReportResultCanvas2) {
//                     monthReportResultCanvas2.dispose();
//                     monthReportResultCanvas2 = echarts.init(document.getElementById('monthReportResultCanvas2'));
//                 } else {
//                     monthReportResultCanvas2 = echarts.init(document.getElementById('monthReportResultCanvas2'));
//                 }
//
//                 option = {
//                     tooltip: {
//                         trigger: 'axis',
//                         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//                         }
//                     },
//                     legend: {
//                         data: ['举手', '发言', '合作', '警告']
//
//                     },
//                     grid: {
//                         left: '3%',
//                         right: '4%',
//                         bottom: '6%',
//                         containLabel: true
//                     },
//                     xAxis: [
//                         {
//                             type: 'category',
//                             data: subjectNameDataMonth,
//                             axisLabel: {
//                                 interval: 0,//横轴信息全部显示
//                                 rotate: -30//-30度角倾斜显示
//                             }
//                         }
//                     ],
//                     yAxis: [
//                         {
//                             type: 'value'
//                         }
//                     ],
//                     series: [
//
//                         {
//                             name: '举手',
//                             type: 'bar',
//                             data: raiseHandsNumDataMonth,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#91c7af'
//                                 }
//                             }
//                         },
//                         {
//                             name: '发言',
//                             type: 'bar',
//                             data: speakNumDataDay,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#607d8b'
//                                 }
//                             }
//                         },
//                         {
//                             name: '合作',
//                             type: 'bar',
//                             data: cooperationNumDataMonth,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#d48265'
//                                 }
//                             }
//                         },
//                         {
//                             name: '警告',
//                             type: 'bar',
//                             data: noticeNumDataMonth,
//                             itemStyle: {
//                                 normal: {
//                                     color: '#c23632'
//                                 }
//                             }
//
//                         }
//
//                     ]
//                 };
//
//
//                 monthReportResultCanvas2.setOption(option);
// //课堂动态折线图 end
//
//
//             } else {
//                 monthClassRoomDynamicsDaySrc +=
//                     "   <table>" +
//                     "    <thead>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-bottom: 0px'>" + inspectTime + "&nbsp;暂无课堂评测评分数据，</th>" +
//                     "    </tr>" +
//                     "    <tr>" +
//                     "        <th colspan='10' width='750'  style='border-top: 0px; padding-top: 0px;'>请查看其它上课日期。</th>" +
//                     "    </tr>" +
//                     "    </thead>" +
//                     "   </table>";
//
// //课堂动态折线图 start
//                 if (monthReportResultCanvas2) {
//                     monthReportResultCanvas2.dispose();
//                     monthReportResultCanvas2 = echarts.init(document.getElementById('monthReportResultCanvas2'));
//                 } else {
//                     monthReportResultCanvas2 = echarts.init(document.getElementById('monthReportResultCanvas2'));
//                 }
//                 // var monthReportResultCanvas2 = echarts.init(document.getElementById('monthReportResultCanvas2'));
//                 option = {
//                     title: {
//                         text: ''
//                     },
//                     tooltip: {
//                         trigger: 'axis'
//                     },
//                     legend: {
//                         data: []
//                     },
//                     grid: {
//                         left: '3%',
//                         right: '4%',
//                         bottom: '3%',
//                         top: '3%',
//                         containLabel: true
//                     },
//                     // toolbox: {
//                     //     feature: {
//                     //         saveAsImage: {}
//                     //     }
//                     // },
//                     xAxis: {
//                         type: 'category',
//                         boundaryGap: false,
//                         data: []
//                     },
//                     yAxis: {
//                         type: 'value'
//                     },
//                     series: [
//                         {
//                             name: '举手',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         },
//                         {
//                             name: '合作',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         },
//                         {
//                             name: '发言',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         },
//                         {
//                             name: '警告',
//                             type: 'line',
//                             stack: '总量',
//                             data: []
//                         }
//                     ]
//                 };
//                 monthReportResultCanvas2.setOption(option);
// //课堂动态折线图 end
//
//
//             }
//
//             //课堂动态表格 end
//             $("#monthClassRoomDynamicsDay").children().remove();
//             $("#monthClassRoomDynamicsDay").append(monthClassRoomDynamicsDaySrc);
//
//         });
//     }
//
// }
//
// //课堂动态表格 end
//
// //获取好人好事 start
// function checkPlusMonth() {
//     var user_id = sessionStorage.getItem("user_id");
//     if (user_id != '' && user_id != null && user_id != 'undefined') {
//         var ajaxobj = {
//             itype: 'get',
//             iname: 'class/classNoticeRoute/selectGeHaoYue'
//         };
//         var actobj = {
//             'user_id': user_id,
//             'time': frontTime,
//         };
//         getdata(ajaxobj, actobj, function (data) {
//             console.log(data);
//             //课堂动态表格 start
//             if (data.resultnum != "0000") {
//                 console.error("加分项请求数据错误！")
//             } else {
//                 console.log('好人好事请求成功月！');
//                 var time = frontTime;
//                 time = time.split(" ");
//                 time = time[0].split("-");
//                 var inspectTime = time[0] + "年" + time[1] + "月";
//
//                 var indexLength = data.resultdata.length;
//                 var item = data.resultdata;
//
//                 var checkPlusSrcMonth = "";
//                 if (indexLength > 0) {
//                     checkPlusSrcMonth +=
//                         "<table>" +
//                         "     <thead>" +
//                         "     <tr>" +
//                         "         <th colspan='10' width='750'>" + inspectTime + "&nbsp;个性发展评价<span class='text-primary'>&nbsp;加分项</span></th>" +
//                         "     </tr>" +
//                         "     </thead>" +
//                         "     <tbody>" +
//                         "     <tr>" +
//                         "         <td>项目</td>" +
//                         "         <td>" + item[0].inspection_name + "</td>" +
//                         "         <td>" + item[1].inspection_name + "</td>" +
//                         "         <td>" + item[2].inspection_name + "</td>" +
//                         "         <td>" + item[3].inspection_name + "</td>" +
//                         "         <td>" + item[4].inspection_name + "</td>" +
//                         "     </tr>" +
//                         "     <tr>" +
//                         "         <td>得分</td>" +
//                         "         <td>" + item[0].score + "</td>" +
//                         "         <td>" + item[1].score + "</td>" +
//                         "         <td>" + item[2].score + "</td>" +
//                         "         <td>" + item[3].score + "</td>" +
//                         "         <td>" + item[4].score + "</td>" +
//                         "     </tr>" +
//                         "     </tbody>" +
//                         " </table>";
//
//
//                 } else {
//                     var time = frontTime;
//                     time = time.split(" ");
//                     time = time[0].split("-");
//                     var inspectTime = time[0] + "年" + time[1] + "月";
//                     checkPlusSrcMonth +=
//                         "<table>" +
//                         "     <thead>" +
//                         "     <tr>" +
//                         "         <th colspan='10' width='750'>" + inspectTime + "&nbsp;个性发展评价<span class='text-primary'>&nbsp;加分项</span></th>" +
//                         "     </tr>" +
//                         "     </thead>" +
//                         "     <tbody>" +
//                         "     <tr>" +
//                         "         <td>项目</td>" +
//                         "         <td>学习</td>" +
//                         "         <td>实践</td>" +
//                         "         <td>体育</td>" +
//                         "         <td>读书</td>" +
//                         "         <td>孝亲</td>" +
//                         "     </tr>" +
//                         "     <tr>" +
//                         "         <td colspan='6' width='750'> 暂无课堂评测评分数据 <br> 请查看其它上课日期</td>" +
//                         "     </tr>" +
//                         "     </tbody>" +
//                         " </table>";
//                 }
//                 //好人好事加分项 end
//                 $("#selectGeHaoMonth").children().remove();
//                 $("#selectGeHaoMonth").append(checkPlusSrcMonth);
//             }
//
//         });
//     }
// }
//
// //获取好人好事 end
//
//
// $("#monthBtn").on("click", function (e) {
//     frontTime = frontTime.split('-');
//     frontTime = frontTime[0] + "-" + frontTime[1];
//     console.log(frontTime);
//     monthReportResultTeachingAffairs(); //月个人教学教务数据
//     monthClassRoomDynamicsDay(); //获取月课堂动态
//     checkPlusMonth();//获取月好人好事得分
//
// });
//
//
// //选择日期生成报告 start
// $("#getMonthReportBtn").on("click", function (e) {
//     var chooseMonthFrontTime = $("#getMonthDate").val();
//     if (chooseMonthFrontTime != '' && chooseMonthFrontTime != null && chooseMonthFrontTime != 'undefined') {
//         console.log(chooseMonthFrontTime);
//         frontTime = chooseMonthFrontTime;
//         monthReportResultTeachingAffairs();
//         monthClassRoomDynamicsDay();
//         checkPlusMonth();
//     }
// });
//
// //选择日期生成报告 end
//
// //月信息加载 end












