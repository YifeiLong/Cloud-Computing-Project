var symptomName = last_year_month();

$(function(){


  init();

})

 function init(){
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

   var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     color:['#5bc0de'],
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
             data: ['Red', 'Fearless', 'Evermore', 'Midnights', 'Taylor Swift', 'Speak Now', 'Reputation', 'Lover', '1989', 'Folklore'],
             axisLine:{
                  lineStyle:{
                      color: '#5bc0de'
                  },
              },
              axisLabel : {
                interval:0,
                rotate:40,
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     yAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#5bc0de'
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
             name:'情感得分',
             type:'bar',
             barWidth : 20,
             data:[61.85, 55.26, 54.54, 50.99, 47.02, 41.71, 34.62, 31.17, 22.53, 14.06],
         },
     ]
   })

   var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
   histogramChart2.setOption({

     color:['#84cdc2'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['Welcome to New York', 'We Were Happy', 'Happiness', 'Bejeweled', 'This Love',
                 'The Way I Loved You', 'Superman', 'Labyrinth', 'Stay Beautiful', 'London Boy'],
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
                     color: '#fff'
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
             name:'情感得分',
             type:'bar',
             barWidth : 20,
             data:[14.73, 11.91, 11.71, 10.81, 10.05, 9.97, 9.57, 8.38, 8.37, 8.28],
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
   })


   //传染病发病趋势
   var lineChart1 = echarts.init(document.getElementById('lineChart1'));
   lineChart1.setOption({
     title: {
        text: '按时间排序',
        textStyle:{
           fontSize:16,
           color:'#fff'
       },
    },
     color:['#ffebad', '#dcd7c1', '#bfb1d0', '#a7c0de', '#6c91c2', '#a4514f'],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '15%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#fff'
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
         xAxis: [
             {
                 type: 'category',
                 data : ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputation', 'Lover','Folklore', 'Evermore', 'Midnights'],
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#fff'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
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
             name:'专辑得分',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[47.01, 55.26, 41.71, 61.85, 22.53, 34.63, 31.17, 14.06, 54.54, 50.99]
         },
     ]

   })

   //主要疾病排行
   var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
   histogramChart3.setOption({

     title: {
        text: '正向歌曲词频',
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        left: '40%',
        top: '6%',
    },

    grid: {
         top: '12%',
         left: '30%'
     },
      xAxis: {
          show: false
      },
      yAxis: [{
          show: true,
          data:  ['love', 'baby', 'stay', 'night', 'good', 'feel', 'things', 'eyes', 'knew', 'girl'],
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
                      borderRadius: 15,
                      // padding: 5,
                      align: 'center',
                      width: 15,
                      height: 15
                  },
              }
          },


      }, {
          show: true,
          inverse: true,
          data: [269, 111, 107, 89, 85, 76, 65, 62, 58, 58],
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
          data: [27.45, 11.33, 10.92, 9.08, 8.67, 7.76, 6.63, 6.33, 5.92, 5.92],
          barWidth: 10,
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
          data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: 'none',
                  borderColor: '#00c1de',
                  borderWidth: 1,
                  barBorderRadius: 15,
              }
          }
      }, ]
   })

   //疾病发病趋势
   var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
   histogramChart4.setOption({

     title: {
        text: '负向歌曲词频',
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        left: '45%',
        top: '0%',
    },

    grid: {
         top: '5%',
         left: '35%'
     },
      xAxis: {
          show: false
      },
      yAxis: [{
          show: true,
          data:  ['shake', 'baby', 'bad', 'love', 'forever', 'night', 'trouble', 'girl', 'waiting', 'thought'],
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
                      borderRadius: 15,
                      // padding: 5,
                      align: 'center',
                      width: 15,
                      height: 15
                  },
              }
          },


      }, {
          show: true,
          inverse: true,
          data: [79, 75, 47, 40, 33, 33, 32, 32, 28, 27],
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
          data: [18.54, 17.61, 11.03, 9.39, 7.75, 7.75, 7.51, 7.51, 6.57, 6.34],
          barWidth: 10,
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
          data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: 'none',
                  borderColor: '#00c1de',
                  borderWidth: 1,
                  barBorderRadius: 15,
              }
          }
      }, ]
   })
   // var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   // lineChart2.setOption({
   //   title: {
   //      text: '疾病发病趋势',
   //      textStyle:{
   //         fontSize:16,
   //         color:'#32cd32'
   //     },
   //     x:"center"
   //  },
   //   color:["#32cd32"],
   //   grid:{
   //       left: '15%',
   //       right: '5%',
   //       bottom: '25%',
   //
   //   },
   //   tooltip : {
   //        trigger: 'item',
   //        formatter: "{a}<br/>{b}<br/>{c}人"
   //    },
   //
   //   calculable : true,
   //       yAxis: [
   //           {
   //               type: 'value',
   //               axisLine:{
   //                   lineStyle:{
   //                       color: '#32cd32'
   //                   },
   //               },
   //               splitLine: {
   //                   "show": false
   //               },
   //               axisLabel: {
   //                   textStyle: {
   //                       color: '#fff'
   //                   },
   //                   formatter: function (value) {
   //                       return value + ""
   //                   },
   //               },
   //           }
   //       ],
   //       xAxis: [
   //           {
   //               type: 'category',
   //               data : symptomName,
   //               boundaryGap : false,
   //               axisLine:{
   //                   lineStyle:{
   //                       color: '#32cd32'
   //                   },
   //               },
   //               splitLine: {
   //                   "show": false
   //               },
   //               axisLabel: {
   //                 // interval:0,
   //                 // rotate:40,
   //                   textStyle: {
   //                       color: '#fff'
   //                   },
   //                   formatter: function (value) {
   //                       return value + ""
   //                   },
   //               },
   //           }
   //       ],
   //   series : [
   //       {
   //           name:'疾病发病人数',
   //           type:'line',
   //           smooth:true,
   //           itemStyle: {normal: {areaStyle: {type: 'default'}}},
   //           data:[520, 232,701, 434, 190, 230, 210,120, 132, 101, 134, 890]
   //       },
   //   ]
   //
   // })

   //年龄分布
   // var pieChart1 = echarts.init(document.getElementById('pieChart1'));
   // pieChart1.setOption({
   //   color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
   //   tooltip : {
   //    trigger: 'item',
   //    formatter: "{a}<br/>{b}<br/>{c}人"
   //   },
   //   calculable : true,
   //   series : [
   //       {
   //           name:'发病人数',
   //           type:'pie',
   //           radius : [30, 110],
   //           center : ['50%', '50%'],
   //           roseType : 'area',
   //           x: '50%',
   //
   //
   //
   //           sort : 'ascending',
   //           data:[
   //               {value:10, name:'婴儿(1-3岁)'},
   //               {value:5, name:'少儿(4-10岁)'},
   //               {value:15, name:'少年(10-18岁)'},
   //               {value:25, name:'青年(18-45岁)'},
   //               {value:125, name:'中年(45-60岁)'},
   //               {value:175, name:'老年(60岁以上)'},
   //           ]
   //       }
   //   ]
   // })

   var histogramChart5 = echarts.init(document.getElementById('histogramChart5'));
   histogramChart5.setOption({

     color:['#F18c79'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['Bad Blood', 'Mean', 'Mad Woman', 'Shake it off', 'Picture To Burn', 'Snow on the Beach',
             'Vigilante Shit', 'Betty', 'I Knew You Were Trouble', 'End Game'],
             axisLine:{
                  lineStyle:{
                      color: '#Fff'
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
                     color: '#Fff'
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
             name:'情感得分',
             type:'bar',
             barWidth : 20,
             data:[-12.93, -7.64, -6.96, -5.49, -5.48, -4.83, -4.79, -4.65, -4.51, -4.12],
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
   })

   //性别分布
   var labelFromatter = {
       normal : {
           label : {
              position : 'center',
               formatter : function (params){
                 console.log(params)
                 if(params.name == "正向"){
                   return "正向"+":"+(params.percent + '%')
                 }else{
                   return "负向"+":"+(params.percent + '%')
                 }
               },
           },
           labelLine : {
               show : false
           }
       },
   };

   var pieChart1 = echarts.init(document.getElementById('pieChart1'));
   pieChart1.setOption({

        color: ['#ffebad', '#dcd7c1', '#bfb1d0', '#a7c0de', '#6c91c2', '#a4514f'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}({c})<br/>{d}%"
        },

        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                radius : [55, 95],
                x: '0%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'正向', value:5895},
                    {name:'负向', value:2302},
                ]
            },
        ],
   })

 }
