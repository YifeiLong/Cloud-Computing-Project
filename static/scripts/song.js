$(function(){
  init();
})
function init(){

  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

  var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
  histogramChart1.setOption({

     grid: {
         top: '20%',
         left: '37%'
     },
     xAxis: {
         show: false
     },
     yAxis: [{
         show: true,
         data:  ['最小原声比例', '平均原声比例', '最大原声比例'],
         inverse: true,
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#fff',
             formatter: (value, index) => {
                 return [

                     `{lg|${index+1}}  ` + '{title|' + value + '} '
                 ].join('\n')
             },
             rich: {
                 lg: {
                     backgroundColor: '#339911',
                     color: '#fff',
                     borderRadius: 30,
                     // padding: 5,
                     align: 'center',
                     width: 15,
                     height: 15
                 },
             }
         },


     }, {
         show: false,
         inverse: true,
         data: [0, 0.2788235, 0.97],
         axisLabel: {
             textStyle: {
                 fontSize: 12,
                 color: '#fff',
             },
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },

     }],
     series: [{
         name: '条',
         type: 'bar',
         yAxisIndex: 0,
         data: [0, 27.88, 97],
         barWidth: 23,
         itemStyle: {
             normal: {
                 barBorderRadius: 20,
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}%'
             }
         },
     }, {
         name: '框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [100, 100, 100],
         barWidth: 27,
         itemStyle: {
             normal: {
                 color: 'none',
                 borderColor: '#00c1de',
                 borderWidth: 3,
                 barBorderRadius: 15,
             }
         }
     }, ]
  })

  var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
  histogramChart2.setOption({

     grid: {
         top: '20%',
         left: '37%'
     },
     xAxis: {
         show: false
     },
     yAxis: [{
         show: true,
         data:  ['最小现场比例', '平均现场比例', '最大现场比例'],
         inverse: true,
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#fff',
             formatter: (value, index) => {
                 return [

                     `{lg|${index+1}}  ` + '{title|' + value + '} '
                 ].join('\n')
             },
             rich: {
                 lg: {
                     backgroundColor: '#339911',
                     color: '#fff',
                     borderRadius: 30,
                     // padding: 5,
                     align: 'center',
                     width: 15,
                     height: 15
                 },
             }
         },


     }, {
         show: false,
         inverse: true,
         data: [6, 15.41, 48],
         axisLabel: {
             textStyle: {
                 fontSize: 12,
                 color: '#fff',
             },
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },

     }],
     series: [{
         name: '条',
         type: 'bar',
         yAxisIndex: 0,
         data:  [6, 15.41, 48],
         barWidth: 23,
         itemStyle: {
             normal: {
                 barBorderRadius: 20,
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}%'
             }
         },
     }, {
         name: '框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [55, 55, 55],
         barWidth: 27,
         itemStyle: {
             normal: {
                 color: 'none',
                 borderColor: '#00c1de',
                 borderWidth: 3,
                 barBorderRadius: 15,
             }
         }
     }, ]
  })

    // var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    // pieChart1.setOption({
    //   color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
    //   tooltip : {
    //    trigger: 'item',
    //    formatter: "{a}<br/>{b}<br/>{c}次"
    //   },
    //   calculable : true,
    //   series : [
    //       {
    //           name:'歌曲音高',
    //           type:'pie',
    //           radius : [30, 110],
    //           center : ['50%', '50%'],
    //           roseType : 'area',
    //           x: '50%',
    //           max: 40,
    //           sort : 'ascending',
    //           data:[
    //               {value:7, name:'G'},
    //               {value:4, name:'E'},
    //               {value:14, name:'F'},
    //               {value:3, name:'F#'},
    //               {value:3, name:'G#'},
    //               {value:2, name:'A'},
    //               {value:1, name:'B'},
    //               {value:1, name:'A#'},
    //           ]
    //       }
    //   ]
    // })

  var pieChart1 = echarts.init(document.getElementById('pieChart1'));
  pieChart1.setOption({

    color:['#ffebad', '#dcd7c1', '#bfb1d0', '#a7c0de', '#6c91c2', '#a4514f'],

    legend: {
        y : '260',
        x : 'center',
        textStyle : {
            color : '#ffffff',

        },
         data : ['G', 'E', 'F', 'F#', 'G#', 'A', 'B', 'A#'],
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}G ({d}%)"
    },
    calculable : false,
    series : [
        {
            name:'歌曲音高',
            type:'pie',
            radius : ['40%', '70%'],
            center : ['50%', '45%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '20',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                  {value:7, name:'G'},
                  {value:4, name:'E'},
                  {value:14, name:'F'},
                  {value:3, name:'F#'},
                  {value:3, name:'G#'},
                  {value:2, name:'A'},
                  {value:1, name:'B'},
                  {value:1, name:'A#'},
              ]
        }
    ]
    });



    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption({

      color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
          top: '10',
          data : ['最大上榜数', 'Taylor平均上榜数', '最小上榜数'],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}次"
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
                data : ['Spotify', 'Apple', 'Deezer'],
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
                bottom: '0%',
                containLabel: true
        },
        series : [
          {
              name:'最大上榜数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[100, 207, 12]
          },
          {
              name:'Taylor平均上榜数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[15.94, 54.88, 1.71]
          },
          {
              name:'最小上榜数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[0, 0, 0]
          }
      ]
    });

    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption({

      color:['#800020', '#4A7A6E', '#F6D300', '#FDC3C6', '#CBCBCB', '#B05923'],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
          top: 10,
          data : ['最大入选次数', 'Taylor平均入选次数', '最小入选次数'],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}次"
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
                data : ['Spotify', 'Apple', 'Deezer'],
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
                bottom: '0%',
                containLabel: true
        },
        series : [
          {
              name:'最大入选次数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[21335, 328, 1378]
          },
          {
              name:'Taylor平均入选次数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[5276.19, 68.35, 393.54]
          },
          {
              name:'最小入选次数',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[86, 1, 0]
          }
      ]
    });

    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
      color:['#ffebad', '#dcd7c1', '#bfb1d0', '#a7c0de', '#6c91c2', '#a4514f'],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}"
      },
      calculable : true,
      series : [
          {
              name:'流行指数',
              type:'pie',
              radius : [30, 110],
              center : ['45%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:27, name:'43~50'},
                  {value:31, name:'51~60'},
                  {value:80, name:'61~70'},
                  {value:30, name:'71~82'},
              ]
          }
      ]
    })

    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption( {

      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['最小速度', '平均速度', '最大速度'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
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
                      return value
                  },
              },
          }
      ],
      series : [
          {
              name:'歌曲速度',
              type:'bar',
              barWidth:30,
              data:[80, 125.53, 206],
          },
      ]
    });

    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption( {
      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}%"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['最小比例', '平均比例', '最大比例'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
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
                      return value + '%'
                  },
              },
          }
      ],
      series : [
          {
              name:'舞曲比例',
              type:'bar',
              barWidth:30,
              data:[34, 59.76, 80],
          },
      ]
    });

}
