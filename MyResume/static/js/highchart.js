Highcharts.chart('container', {
    chart: {
        type: 'spline',
        backgroundColor: '#0099ff',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
            function between(min, max) {  
                return Math.floor(
                  Math.random() * (max - min) + min
                )
              }

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = between(1, 5);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
        style: {
    			color: '#ffffff',
                fontFamily: 'Poppins'
    		},
        text: 'Nilai Kekasaran Permukaan Kulit Teripang Pasir'
    },

    accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },

    xAxis: {
    		title: {
            text: 'Waktu',
            style: {
              color: '#ffffff',
              fontFamily: 'Poppins'
            },
        },
        type: 'datetime',
        tickPixelInterval: 150
    },

    yAxis: {
        title: {
            text: 'Kekasaran (Ra)',
            style: {
              color: '#ffffff',
              fontFamily: 'Poppins'
            },
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ecba41'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Nilai Kekasaran Teripang Pasir',
        color: '#0d00a5',
        data: (function () {
        function between(min, max) {  
          return Math.floor(
            Math.random() * (max - min) + min)
        }
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: between(1,5)
                });
            }
            return data;
        }())
    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'spline',
        backgroundColor: '#0099ff',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
            function between(min, max) {  
                return Math.floor(
                  Math.random() * (max - min) + min
                )
              }

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = between(21, 248);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
        style: {
    			color: '#ffffff',
          fontFamily: 'Poppins'
    		},
        text: 'Bobot Teripang Pasir'
    },

    accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },

    xAxis: {
    		title: {
            text: 'Waktu',
            style: {
              color: '#ffffff',
              fontFamily: 'Poppins'
            },
        },
        type: 'datetime',
        tickPixelInterval: 150
    },

    yAxis: {
        title: {
            text: 'Bobot (gr)',
            style: {
              color: '#ffffff',
              fontFamily: 'Poppins'
            },
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ecba41'
        }]
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Bobot Teripang Pasir',
        color: '#0d00a5',
        data: (function () {
        function between(min, max) {  
          return Math.floor(
            Math.random() * (max - min) + min)
        }
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: between(21, 248)
                });
            }
            return data;
        }())
    }]
});

Highcharts.chart('container3', {
    chart: {
        backgroundColor: '#0099ff',
        type: 'column'
    },
    title: {
    		style: {
    					color: '#ffffff',
          		fontFamily: 'Poppins'
    				},
        text: 'Jumlah Teripang Pasir yang Dipijahkan'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Mei',
            'Jun',
            'Jul',
            'Ag',
            'Sep',
            'Okt',
            'Nov',
            'Des'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
        		style: {
    					color: '#ffffff',
          		fontFamily: 'Poppins'
    				},
            text: 'Bobot (kg)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} kg</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
    		color: '#ecba41',
        name: 'Jantan',
        data: [35, 40, 65, 59, 55, 67, 80, 68, 58, 40, 60, 70]

    }, {
    		color: '#0d00a5',
        name: 'Betina',
        data: [90, 85, 101, 95, 105, 98, 88, 87, 110, 92, 89, 90]

    }]
});