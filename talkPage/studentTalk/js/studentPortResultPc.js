var comprehensiveScore = 98;
var comprehensiveScoreName =5;
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
                // name: '{a|' + comprehensiveScore + '\n}{c|已超越' + comprehensiveScore + '%学校}',
                // name: '{a|' + comprehensiveScore + '\n}{c|第' + '2' + '名}',
                name: '{a|第' + comprehensiveScoreName + '名\n}{c|已超越' + comprehensiveScore + '%学校}',
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
                                fontSize: 30,
                                fontWeight: 'bold',
                                lineHeight: 80,
                                width: 80,
                                align: 'center'
                            },
                            c: {
                                color: '#666666',
                                fontSize: 14,
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
        text: '',//'体质健康总体情况',
        color: '#2EC7C9'
    },
    tooltip: {},
    legend: {
        data: [{name: '区平均值', icon: 'roundRect'}, {name: '校平均值', icon: 'roundRect'}]
    },
    radar: {
        // shape: 'circle',
        radius: '40%',
        name: {
            textStyle: {
                color: '#666',
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: [3, 0]
            }
        },
        indicator: [
            {name: 'BMI', max: 100},
            {name: '肺活量', max: 100},
            {name: '速度', max: 100},
            {name: '柔韧', max: 100},
            {name: '爆发力', max: 100}


        ]
    },
    series: [{
        name: '校平均值',
        type: 'radar',
        itemStyle: {
            normal: {
                color: '#2EC7C9',
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
                value: [89.73, 72.18, 68.94, 90.44, 78.03],
                name: '校平均值',
                label: {
                    normal: {
                        show: true
                    }
                }
            }

        ]
    },
        {
            name: '区平均值',
            type: 'radar',
            itemStyle: {
                normal: {
                    color: '#d58165',
                }
            },
            /*areaStyle: {
                normal: {
                    opacity: 0.5
                }
            },*/
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [90.57, 74.31, 74.31, 82.82, 79.13],
                    name: '区平均值'
                }

            ]
        },]
};
myChartRadarBox.setOption(option);

var myChartRadarBox2 = echarts.init(document.getElementById('reportCanvas2'));
var option = {
    title: {
        text: '',//'体质健康总体情况',
        color: '#2EC7C9'
    },
    tooltip: {},
    legend: {
        data: [{name: '区平均值', icon: 'roundRect'}, {name: '校平均值', icon: 'roundRect'}]
    },
    radar: {
        // shape: 'circle',
        radius: '40%',
        name: {
            textStyle: {
                color: '#666',
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: [3, 0]
            }
        },
        indicator: [
            {name: 'BMI', max: 100},
            {name: '肺活量', max: 100},
            {name: '速度', max: 100},
            {name: '柔韧', max: 100},
            {name: '爆发力', max: 100},
            {name: '力量', max: 100}


        ]
    },
    series: [{
        name: '校平均值',
        type: 'radar',
        itemStyle: {
            normal: {
                color: '#2EC7C9',
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
                value: [87.64, 78.46, 69.19, 87.90, 85.19, 81.03],
                name: '校平均值',
                label: {
                    normal: {
                        show: true
                    }
                }
            }

        ]
    },
        {
            name: '区平均值',
            type: 'radar',
            itemStyle: {
                normal: {
                    color: '#d58165',
                }
            },
            /*areaStyle: {
                normal: {
                    opacity: 0.5
                }
            },*/
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [90.57, 74.31, 74.31, 82.82, 79.13, 74.65],
                    name: '区平均值'
                }

            ]
        },]
};
myChartRadarBox2.setOption(option);

var myChartRadarBox3 = echarts.init(document.getElementById('reportCanvas3'));
var option = {
    title: {
        text: '',//'体质健康总体情况',
        color: '#2EC7C9'
    },
    tooltip: {},
    legend: {
        data: [{name: '区平均值', icon: 'roundRect'}, {name: '校平均值', icon: 'roundRect'}]
    },
    radar: {
        // shape: 'circle',
        radius: '40%',
        name: {
            textStyle: {
                color: '#666',
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: [3, 0]
            }
        },
        indicator: [
            {name: 'BMI', max: 100},
            {name: '肺活量', max: 100},
            {name: '速度', max: 100},
            {name: '柔韧', max: 100},
            {name: '爆发力', max: 100},
            {name: '力量', max: 100},
            {name: '耐力', max: 100}

        ]
    },
    series: [{
        name: '校平均值',
        type: 'radar',
        itemStyle: {
            normal: {
                color: '#2EC7C9',
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
                value: [88.06, 78.95, 68.11, 86.91, 86.10, 84.13, 75.46],
                name: '校平均值',
                label: {
                    normal: {
                        show: true
                    }
                }
            }

        ]
    },
        {
            name: '区平均值',
            type: 'radar',
            itemStyle: {
                normal: {
                    color: '#d58165',
                }
            },
            /*areaStyle: {
                normal: {
                    opacity: 0.5
                }
            },*/
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [90.57, 74.31, 74.31, 82.82, 79.13, 74.65, 73.26],
                    name: '区平均值'
                }

            ]
        },]
};
myChartRadarBox3.setOption(option);
//雷达图 end

//BMI统计图 start
var myChartSangJiTu = echarts.init(document.getElementById('myChartSangJiTu'));
var option =
    {
        "tooltip": {},
        // "toolbox": {
        //     "show": true,
        //     "itemSize": 25,
        //     "right": 12,
        //     "feature": {
        //         "saveAsImage": {
        //             "show": true
        //         }
        //     }
        // },
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
option = {
    angleAxis: {
        type: 'category',
        data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
        z: 10
    },
    radiusAxis: {},
    polar: {},
    series: [{
        type: 'bar',
        data: [0.0455, 0.0044, 0.0089, 0, 0, 0],
        coordinateSystem: 'polar',
        name: '不及格',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0.7238, 0.3739, 0.4159, 0.2890, 0.3102, 0.3254],
        coordinateSystem: 'polar',
        name: '及格',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0.1119, 0.2304, 0.2478, 0.2243, 0.2653, 0.201],
        coordinateSystem: 'polar',
        name: '良好',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0.1188, 0.3913, 0.3274, 0.4867, 0.4245, 0.4736],
        coordinateSystem: 'polar',
        name: '优秀',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['不及格', '及格', '良好', '优秀']
    }
};


myChartBaoFaLi.setOption(option);
//爆发力 end

//力量 start
var myChartLiLang = echarts.init(document.getElementById('myChartLiLang'));
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['不及格', '及格', '良好', '优秀']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '30%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['三年级', '四年级', '五年级', '六年级']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '不及格',
            type: 'bar',
            stack: '男',
            data: [0, 0.01, 0, 0]
        },
        {
            name: '及格',
            type: 'bar',
            stack: '男',
            data: [0.49, 0.42, 0.42, 0.29]
        },
        {
            name: '良好',
            type: 'bar',
            stack: '男',
            data: [0.30, 0.32, 0.21, 0.30]
        },
        {
            name: '优秀',
            type: 'bar',
            barWidth: 20,
            stack: '男',
            data: [0.21, 0.25, 0.37, 0.41]
        },
        {
            name: '不及格',
            type: 'bar',
            stack: '女',
            data: [0, 0, 0, 0]
        },
        {
            name: '及格',
            type: 'bar',
            stack: '女',
            data: [0.59, 0.38, 0.44, 0.33]
        },
        {
            name: '良好',
            type: 'bar',
            stack: '女',
            data: [0.24, 0.36, 0.21, 0.31]
        },
        {
            name: '优秀',
            type: 'bar',
            barWidth: 20,
            stack: '女',
            data: [0.17, 0.26, 0.35, 0.36]
        }
    ]
};

myChartLiLang.setOption(option);
//力量 end


//速度 start
var myChartRouRen = echarts.init(document.getElementById('myChartRouRen'));
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['女生', '男生']
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
            data: ['六年级', '五年级', '四年级', '三年级', '二年级','一年级']
        }
    ],
    series: [
        {
            name: '女生',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [75.09,67.10, 70.66, 71.59,73.92, 75.81]
        },
        {
            name: '男生',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [67.07 , 64.80 , 68.17, 66.05,68.64,58.51]
        }

    ]
};

myChartRouRen.setOption(option);
//速度 end


//耐力 start
var myChartNaiLiNu = echarts.init(document.getElementById('myChartNaiLiNu'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // x: 'left',
        data:['不及格','及格','良好','优秀']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['75%', '95%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },

            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1, name:'不及格'},
                {value:60, name:'及格'},
                {value:20, name:'良好'},
                {value:19, name:'优秀'}
            ]

        }
    ]
};
myChartNaiLiNu.setOption(option);
var myChartNaiLiNan = echarts.init(document.getElementById('myChartNaiLiNan'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        data:['不及格','及格','良好','优秀']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['75%', '95%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10, name:'不及格'},
                {value:61, name:'及格'},
                {value:16, name:'良好'},
                {value:13, name:'优秀'}
            ]
        }
    ]
};
myChartNaiLiNan.setOption(option);
//耐力 end

//柔韧 start
var myChartSuDu = echarts.init(document.getElementById('myChartSuDu'));
var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['女生', '男生']
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
    },
    yAxis: {
        min: 80,
        max: 100,
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name: '女生',
            type: 'line',
            data: [91, 91, 89, 88, 87, 91],
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
            name: '男生',
            type: 'line',
            data: [89, 91, 87, 88, 85, 86],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
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
//柔韧 end

//结论女 start
var myChartJeLunNu = echarts.init(document.getElementById('myChartJeLunNu'));
var hours = ['总分', '速度', '耐力', '柔韧', '爆发力', '力量','BMI','肺活量'];
var days =  ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];

var data = [[0,0,6],[0,1,4],[0,2,0],[0,3,8],[0,4,4],[0,5,0],[0,6,8],[0,7,4],[1,0,6],[1,1,4],[1,2,0],[1,3,8],[1,4,6],[1,5,0],[1,6,8],[1,7,6],[2,0,6],[2,1,4],[2,2,0],[2,3,6],[2,4,6],[2,5,4],[2,6,6],[2,7,6],[3,0,6],[3,1,4],[3,2,0],[3,3,6],[3,4,6],[3,5,6],[3,6,6],[3,7,6],[4,0,6],[4,1,4],[4,2,4],[4,3,6],[4,4,6],[4,5,6],[4,6,6],[4,7,6],[5,0,6],[5,1,4],[5,2,6],[5,3,8],[5,4,6],[5,5,6],[5,6,6],[5,7,6]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        show:false,
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
        type:'piecewise',
        pieces: [
            {value:2,color:'#c23532'},
            {value:4,color:'#304554'},
            {value:6,color:'#60a0a8'},
            {value:8,color:'#d58165'}
        ],
        formatter: function (value, value2) {
            if(value==2){
                return "不及格" +
                    "(60分以下)"
            }
            else if(value==4){
                return "及格(60-80分)"
            }
            else if(value==6){
                return "良好(80-90分)"
            }
            else if(value==8){
                return "优秀(90分以上)"
            }
        },
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',

    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true,
                formatter:function(params){
                    if(params.data[2]==2){
                        return "不及格"
                    }
                    else if(params.data[2]==4){
                        return "及格"
                    }
                    else if(params.data[2]==6){
                        return "良好"
                    }
                    else if(params.data[2]==8){
                        return "优秀"
                    }
                }

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

myChartJeLunNu.setOption(option);
//结论女 end


//结论男 start
var myChartJeLunNan = echarts.init(document.getElementById('myChartJeLunNan'));
var hours = ['总分', '速度', '耐力', '柔韧', '爆发力', '力量','BMI','肺活量'];
var days =  ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];

var data = [[0,0,6],[0,1,4],[0,2,0],[0,3,8],[0,4,4],[0,5,0],[0,6,8],[0,7,4],[1,0,6],[1,1,4],[1,2,0],[1,3,8],[1,4,6],[1,5,0],[1,6,8],[1,7,6],[2,0,6],[2,1,4],[2,2,0],[2,3,6],[2,4,6],[2,5,4],[2,6,6],[2,7,6],[3,0,6],[3,1,4],[3,2,0],[3,3,6],[3,4,6],[3,5,6],[3,6,6],[3,7,6],[4,0,6],[4,1,4],[4,2,4],[4,3,6],[4,4,6],[4,5,6],[4,6,6],[4,7,6],[5,0,6],[5,1,4],[5,2,6],[5,3,8],[5,4,6],[5,5,6],[5,6,6],[5,7,6]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        show:false,
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
        type:'piecewise',
        pieces: [
            {value:2,color:'#c23532'},
            {value:4,color:'#304554'},
            {value:6,color:'#60a0a8'},
            {value:8,color:'#d58165'}
        ],
        formatter: function (value, value2) {
            if(value==2){
                return "不及格(60分以下)"
            }
            else if(value==4){
                return "及格(60-80分)"
            }
            else if(value==6){
                return "良好(80-90分)"
            }
            else if(value==8){
                return "优秀(90分以上)"
            }
        },
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',

    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true,
                formatter:function(params){
                    if(params.data[2]==2){
                        return "不及格"
                    }
                    else if(params.data[2]==4){
                        return "及格"
                    }
                    else if(params.data[2]==6){
                        return "良好"
                    }
                    else if(params.data[2]==8){
                        return "优秀"
                    }
                }

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

myChartJeLunNan.setOption(option);
//结论男 end





