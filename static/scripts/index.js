var symptomName = last_month_day();

$(function(){


  init();
  init2();
    $("#el-dialog").addClass("hide");
  $(".close").click(function(event) {
    $("#el-dialog").addClass("hide");
  });

  var date = new Date();
     var numble = date.getDate();
     var today = getFormatMonth(new Date());
     $("#date1").html(today);
     $("#date2").html(today);
     $("#date3").html(today);
     $("#date4").html(today);


  lay('.demo-input').each(function(){
     laydate.render({
        type: 'month',
         elem: this,
         trigger: 'click',
         theme: '#95d7fb',
         calendar: true,
         showBottom: true,
         done: function () {
            console.log( $("#startDate").val())

         }
     })
 });

})
function init(){
  //地图
  var mapChart = echarts.init(document.getElementById('mapChart'));
  mapChart.setOption({
      bmap: {
          center: [-98.5795, 39.8283],
          zoom: 12,
          roam: true,

      },
      tooltip : {
          trigger: 'item',
          formatter:function(params, ticket, callback){
              return params.value[2] + '<br>次数: ' + params.value[3];
          }
      },
      series: [{
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [-118.2437, 34.0522, 'Los Angeles', 16],
            [-75.1652, 39.9526, 'Philadelphia', 10],
            [-71.2637, 42.3601, 'Foxborough', 10],
            [-86.7816, 36.1627, 'Nashville', 9],
            [-74.1724, 40.7357, 'Newark', 9],
            [-112.2384, 33.5387, 'Glendale', 8],
            [-90.1994, 38.6270, 'St. Louis', 8],
            [-93.0875, 44.9778, 'Saint Paul', 8],
            [-77.0369, 38.9072, 'Washington', 8],
            [-95.9384, 41.2565, 'Omaha', 7],
            [-94.5786, 39.0997, 'Kansas City', 7],
            [-104.9903, 39.7392, 'Denver', 7],
            [-84.3879, 33.7490, 'Atlanta', 7],
            [-74.1638, 40.8334, 'East Rutherford', 6],
            [-82.9989, 39.9612, 'Columbus', 6],
            [-95.3698, 29.7604, 'Houston', 6],
            [-81.6944, 41.4993, 'Cleveland', 5],
            [-87.6298, 41.8781, 'Chicago', 5],
            [-79.9959, 40.4406, 'Pittsburgh', 5],
            [-97.1331, 32.7688, 'Arlington', 5],
            [-85.7585, 38.2527, 'Louisville', 5],
            [-82.4572, 27.9506, 'Tampa', 5],
            [-86.1581, 39.7684, 'Indianapolis', 5],
            [-81.3792, 28.5383, 'Orlando', 4],
            [-80.8431, 35.2271, 'Charlotte', 4],
            [-87.9403, 42.0647, 'Rosemont', 4],
            [-79.7910, 36.0726, 'Greensboro', 4],
            [-81.0348, 34.0007, 'Columbia', 4],
            [-111.8910, 40.7608, 'Salt Lake City', 4],
            [-117.1611, 32.7157, 'San Diego', 4],
           ]
      }]
  });
  mapChart.on('click', function (params) {
      $("#el-dialog").removeClass('hide');
      $("#reportTitle").html(params.value[2]);
  });

  var bmap = mapChart.getModel().getComponent('bmap').getBMap()
  bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP ]}));
  bmap.setMapStyle({style:'midnight'})


  var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     // color:['#ffebad', '#dcd7c1', '#bfb1d0', '#a7c0de', '#6c91c2', '#a4514f'],
       color: ['#ef504f'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}次"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['澳大利亚', '加拿大', '英国', '日本', '新西兰',
                 '新加坡', '爱尔兰', '中国', '德国', '荷兰'],
             axisLine:{
                  lineStyle:{
                      color: '#fff'
                  },
              },
              axisLabel : {
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     xAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#FFF'
                 },
             },
             splitLine: {
                 "show": false
             },
             axisLabel: {
                 textStyle: {
                     color: '#fff'
                 },
                 formatter: function (value) {
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'次数',
             type:'bar',
             barWidth : 12,
             data:[31, 30, 20, 9, 7, 5, 5, 4, 4, 2],
             label: {
                 show: true,
                 position: 'insideRight',
                 formatter: '{c}', // Display the value
                 textStyle: {
                     color: '#fff'
                 }
             }
         },
     ]
   });


    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({

      color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
      legend: {
          y : '260',
          x : 'center',
          top: '87%',
          textStyle : {
              color : '#ffffff',

          },
           data : ['平均收入', '最高收入', '最低收入'],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}美元"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['Fearless_Tour', 'Speak_Now_World_Tour', 'The_Red_Tour', 'The_1989_World_Tour'],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                    rotate: 30
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                top: '10%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'平均收入',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : '#fff'
                      }
                  }
              },
              data:[103.7902, 185.8126, 292.0661, 549.3121]
          },
          {
              name:'最高收入',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : '#fff'
                      }
                  }
              },
              data:[372.6157, 802.6350, 946.4063, 1342.3858]
          },
          {
              name:'最低收入',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : '#fff'
                      }
                  }
              },
              data:[29.6306, 15.3303, 75.5006, 80.0829]
          }
      ]
    });

    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({
        tooltip: {
            trigger: 'item'
        },
        // color: ['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
        legend: {
            orient: 'horizontal',
            left: 'left',
            top: '10%',
            textStyle : {
             color : '#ffffff',
         },
        },
        series: [
            {
                name: '场馆',
                type: 'pie',
                radius: '50%',
                center: ['50%', '70%'],
                data: [
                    { value: 16, name: 'Staples Center' },
                    { value: 10, name: 'Gillette Stadium' },
                    { value: 9, name: 'Prudential Center' },
                    { value: 8, name: 'Bridgestone Arena' },
                    { value: 8, name: 'Xcel Energy Center' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
            ]
   });

   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({

      color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
      legend: {
          y : '260',
          x : 'center',
          top: '87%',
          textStyle : {
              color : '#ffffff',

          },
           data : ['平均人数', '最多人数', '最少人数'],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}万人"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['Fearless_Tour', 'Speak_Now_World_Tour', 'The_Red_Tour', 'The_1989_World_Tour'],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                    rotate: 30
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                top: '10%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'平均人数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : '#fff'
                      }
                  }
              },
              data:[1.7668, 2.4085, 3.3526, 4.8988]
          },
          {
              name:'最多人数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : '#fff'
                      }
                  }
              },
              data:[5.6868, 11.0800, 11.0712, 11.6849]
          },
          {
              name:'最少人数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : '#fff'
                      }
                  }
              },
              data:[0.6789, 0.3421, 0.7525, 1.1021]
          }
      ]
    });



}

function init2(){
  var lineChart3 = echarts.init(document.getElementById('lineChart3'));
  lineChart3.setOption({

    color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
    legend: {
        y : 'top',
        x : 'center',
        textStyle : {
            color : '#ffffff',

        },
         data : ['门诊人次','住院人次'],
    },
    calculable : false,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
    dataZoom: {
         show: true,
         realtime : true,
         start: 0,
         end: 18,
         height: 20,
         backgroundColor: '#f8f8f8',
         dataBackgroundColor: '#e4e4e4',
         fillerColor: '#87cefa',
         handleColor: '#87cefa',
     },
    yAxis: [
          {
              type: 'value',
              axisLine : {onZero: false},
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },

              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "人"
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              }
          }
      ],
      xAxis: [
          {
              type: 'category',
              data : symptomName,
              boundaryGap : false,
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + ""
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              },
          }
      ],
      grid:{
              left: '5%',
              right: '5%',
              bottom: '20%',
              containLabel: true
      },
      series : [
        {
            name:'门诊费用',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[1150, 180, 2100, 2415, 1212.1, 3125,1510, 810, 2100, 2415, 1122.1, 3215,1510, 801, 2001, 2245, 1232.1, 3245,1520, 830, 2200, 2145, 1223.1, 3225,150, 80, 200, 245, 122.1, 325]
        },
        {
            name:'住院费用',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,2500, 1000, 3000, 5005, 3200.1, 3005,]
        },
    ]
  });


  var lineChart4 = echarts.init(document.getElementById('lineChart4'));
  lineChart4.setOption({

    color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
    calculable : false,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}元"
    },
    dataZoom: {
         show: true,
         realtime : true,
         start: 0,
         end: 18,
         height: 20,
         backgroundColor: '#f8f8f8',
         dataBackgroundColor: '#e4e4e4',
         fillerColor: '#87cefa',
         handleColor: '#87cefa',
     },
    yAxis: [
          {
              type: 'value',
              axisLine : {onZero: false},
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },

              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "元"
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              }
          }
      ],
      xAxis: [
          {
              type: 'category',
              data : symptomName,
              boundaryGap : false,
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + ""
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              },
          }
      ],
      grid:{
              left: '5%',
              right: '5%',
              bottom: '20%',
              containLabel: true
      },
      series : [
        {
            name:'医疗费用',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[1500, 800, 1200, 2450, 1122.1, 1325,1150, 180, 1200, 1245, 1122.1, 1325,150, 180, 1200, 2145, 1212.1, 3215,1510, 180, 2100, 2415, 122.1, 325,150, 80, 200, 245, 122.1, 325].reverse()
        },
    ]
  });

  //年龄分布
  var pieChart2 = echarts.init(document.getElementById('pieChart2'));
  pieChart2.setOption({
    color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}人"
    },
    calculable : true,
    series : [
        {
            name:'发病人数',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '50%',



            sort : 'ascending',
            data:[
                {value:10, name:'婴儿(1-3岁)'},
                {value:5, name:'少儿(4-10岁)'},
                {value:15, name:'少年(10-18岁)'},
                {value:25, name:'青年(18-45岁)'},
                {value:125, name:'中年(45-60岁)'},
                {value:175, name:'老年(60岁以上)'},
            ]
        }
    ]
  })

  //医疗费用组成
  var pieChart3 = echarts.init(document.getElementById('pieChart3'));
  pieChart3.setOption({
    color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}元"
    },
    calculable : true,
    series : [
        {
            name:'发病人数',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '50%',



            sort : 'ascending',
            data:[
                {value:10, name:'诊察费用'},
                {value:500, name:'检查费用'},
                {value:150, name:'检验费用'},
                {value:250, name:'西药费用'},
                {value:125, name:'中药费用'},
                {value:1750, name:'手术费用'},
            ]
        }
    ]
  })
}
