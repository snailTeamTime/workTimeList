var comprehensiveScore = 98;
var myActivityChart = echarts.init(document.getElementById('evaluationScore'));

var pieOption = {
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        data: ['综合得分', '与总分相差']
    },
    series: [{
        name: '综合得分情况',
        type: 'pie',
        radius: ['80%', '90%'],
        clockwise: true,
        label: {
            normal: {
                show: false,
                position: 'center'
            }
        },
        data: [
            {
                value: comprehensiveScore,
                name: '{a|' + comprehensiveScore + '\n}{c|已超越' + comprehensiveScore + '%学校}',
                itemStyle: {
                    normal: {
                        color: '#40D8C1'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        rich: {
                            a: {
                                color: '#666666',
                                fontSize: 60,
                                fontWeight: 'bold',
                                lineHeight: 100,
                                width: 80,
                                align: 'center'
                            },
                            c: {
                                color: '#666666',
                                fontSize: 15,
                                borderRadius: 30,
                                width: 120,
                                align: 'center',
                                padding: [6, 4]
                            }
                        }
                    }
                }
            },
            {
                value: (100 - comprehensiveScore),
                name: '',
                itemStyle: {
                    normal: {
                        color: '#40D8C1',
                        opacity: 0.2
                    }
                }
            }
        ]
    }]
};
myActivityChart.setOption(pieOption);
//综合分数环形图 end


//雷达图 start
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
        radius: '60%',
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
            }
            // {
            //     value : [50000, 14000, 28000, 31000, 42000, 21000, 10000, 28000, 35000, 50000],
            //     name : '实际开销（Actual Spending）'
            // }
        ]
    }]
};
myChartRadarBox.setOption(option);

var myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
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
        radius: '60%',
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
myChartRadarBox2.setOption(option);

var myChartRadarBox3 = echarts.init(document.getElementById('reportCanvas3'));
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
        radius: '60%',
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
myChartRadarBox3.setOption(option);
//雷达图 end

//BMI统计图 start
var myChartSangJiTu = echarts.init(document.getElementById('myChartSangJiTu'));
var option =
    {
        "tooltip": {},
        "toolbox": {
            "show": true,
            "itemSize": 25,
            "right": 12,
            "feature": {
                "saveAsImage": {
                    "show": true
                }
            }
        },
        "series": [{
            "type": "sankey",
            "layout": "none",
            "layoutIterations": 0,
            /*"data": [{
                "name": "2016A等级"
            }, {
                "name": "2017A等级"
            }, {
                "name": "2017B等级"
            }, {
                "name": "2017C等级"
            }, {
                "name": "2016B等级"
            }, {
                "name": "2016C等级"
            }],*/
            "data": [{
                "name": "一年级"
            }, {
                "name": "二年级"
            }, {
                "name": "三年级"
            }, {
                "name": "四年级"
            }, {
                "name": "五年级"
            }, {
                "name": "六年级"
            }, {
                "name": "超重"
            }, {
                "name": "肥胖"
            }, {
                "name": "正常体重"
            }, {
                "name": "营养不良"
            }, {
                "name": "不及格"
            }, {
                "name": "及格"
            }, {
                "name": "良好"
            }, {
                "name": "优秀"
            }],
            "links": [
                {
                    "source": "一年级",
                    "target": "超重",
                    "value": "39"
                },
                {
                    "source": "一年级",
                    "target": "肥胖",
                    "value": "38"
                },
                {
                    "source": "一年级",
                    "target": "正常体重",
                    "value": "191"
                },
                {
                    "source": "一年级",
                    "target": "营养不良",
                    "value": "18"
                },
                {
                    "source": "正常体重",
                    "target": "不及格",
                    "value": "4"
                },
                {
                    "source": "正常体重",
                    "target": "及格",
                    "value": "220"
                },
                {
                    "source": "正常体重",
                    "target": "良好",
                    "value": "527"
                },
                {
                    "source": "正常体重",
                    "target": "优秀",
                    "value": "134"
                },
                {
                    "source": "营养不良",
                    "target": "不及格",
                    "value": "2"
                },
                {
                    "source": "营养不良",
                    "target": "及格",
                    "value": "42"
                },
                {
                    "source": "营养不良",
                    "target": "良好",
                    "value": "48"
                },
                {
                    "source": "营养不良",
                    "target": "优秀",
                    "value": "4"
                },
                {
                    "source": "肥胖",
                    "target": "不及格",
                    "value": "22"
                },
                {
                    "source": "肥胖",
                    "target": "及格",
                    "value": "196"
                },
                {
                    "source": "肥胖",
                    "target": "良好",
                    "value": "45"
                },
                {
                    "source": "超重",
                    "target": "不及格",
                    "value": "3"
                },
                {
                    "source": "超重",
                    "target": "及格",
                    "value": "108"
                },
                {
                    "source": "超重",
                    "target": "良好",
                    "value": "100"
                },
                {
                    "source": "超重",
                    "target": "优秀",
                    "value": "7"
                },
                {
                    "source": "二年级",
                    "target": "超重",
                    "value": "30"
                },
                {
                    "source": "二年级",
                    "target": "肥胖",
                    "value": "42"
                },
                {
                    "source": "二年级",
                    "target": "正常体重",
                    "value": "140"
                },
                {
                    "source": "二年级",
                    "target": "营养不良",
                    "value": "18"
                },
                {
                    "source": "三年级",
                    "target": "超重",
                    "value": "41"
                },
                {
                    "source": "三年级",
                    "target": "肥胖",
                    "value": "42"
                },
                {
                    "source": "三年级",
                    "target": "正常体重",
                    "value": "133"
                },
                {
                    "source": "三年级",
                    "target": "营养不良",
                    "value": "12"
                },
                {
                    "source": "四年级",
                    "target": "超重",
                    "value": "33"
                },
                {
                    "source": "四年级",
                    "target": "肥胖",
                    "value": "55"
                },
                {
                    "source": "四年级",
                    "target": "正常体重",
                    "value": "152"
                },
                {
                    "source": "四年级",
                    "target": "营养不良",
                    "value": "24"
                },
                {
                    "source": "五年级",
                    "target": "超重",
                    "value": "43"
                },
                {
                    "source": "五年级",
                    "target": "肥胖",
                    "value": "40"
                },
                {
                    "source": "五年级",
                    "target": "正常体重",
                    "value": "147"
                },
                {
                    "source": "五年级",
                    "target": "营养不良",
                    "value": "15"
                },
                {
                    "source": "六年级",
                    "target": "超重",
                    "value": "32"
                },
                {
                    "source": "六年级",
                    "target": "肥胖",
                    "value": "46"
                },
                {
                    "source": "六年级",
                    "target": "正常体重",
                    "value": "122"
                },
                {
                    "source": "六年级",
                    "target": "营养不良",
                    "value": "9"
                }
            ],
            "itemStyle": {
                "normal": {
                    "borderWidth": 1,
                    "borderColor": "#aaa"
                }
            },
            "lineStyle": {
                "normal": {
                    "color": "source",
                    "curveness": 0.5
                }
            }
        }],
        "title": {
            "show": true,
            "text": ""
        },
        "textStyle": {
            "fontSize": 12
        }
    };
myChartSangJiTu.setOption(option);
//BMI统计图 end

//爆发力 start
var myChartBaoFaLi = echarts.init(document.getElementById('myChartBaoFaLi'));
var option = {
    angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        z: 10
    },
    radiusAxis: {},
    polar: {},
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
myChartBaoFaLi.setOption(option);
//爆发力 end

//力量 start
var myChartLiLang = echarts.init(document.getElementById('myChartLiLang'));
var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
    data3.push((Math.random() * 5).toFixed(2));
    data4.push((Math.random() + 0.3).toFixed(2));
}
var itemStyle = {
    normal: {},
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};
option = {
    backgroundColor: '#fff',
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        align: 'left',
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false}
    },
    grid: {
        left: 100
    },
    visualMap: {
        type: 'continuous',
        dimension: 1,
        text: ['High', 'Low'],
        inverse: true,
        itemHeight: 200,
        calculable: true,
        min: -2,
        max: 6,
        top: 60,
        left: 10,
        inRange: {
            colorLightness: [0.4, 0.8]
        },
        outOfRange: {
            color: '#bbb'
        },
        controller: {
            inRange: {
                color: '#2f4554'
            }
        }
    },
    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data1
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data2
        },
        {
            name: 'bar3',
            type: 'bar',
            stack: 'two',
            itemStyle: itemStyle,
            data: data3
        },
        {
            name: 'bar4',
            type: 'bar',
            stack: 'two',
            itemStyle: itemStyle,
            data: data4
        }
    ]
};
myChartLiLang.setOption(option);
//力量 end


//柔韧 start
var myChartRouRen = echarts.init(document.getElementById('myChartRouRen'));
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    series: [
        {
            name: '利润',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};
myChartRouRen.setOption(option);
//柔韧 end


//耐力 start
var myChartNaiLi = echarts.init(document.getElementById('myChartNaiLi'));
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
myChartNaiLi.setOption(option);
//耐力 end

//速度 start
var myChartSuDu = echarts.init(document.getElementById('myChartSuDu'));
var option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
myChartSuDu.setOption(option);
//速度 end

//结论 start
var myChartJeLun = echarts.init(document.getElementById('myChartJeLun'));
var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
var option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChartJeLun.setOption(option);
//结论 end








