// chart revenue by month 
export const dataRevenueByMonth = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly revenue chart'
    },
    xAxis: {
        categories: [],
        crosshair: true
    },
    credits: {
        enabled: false,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Money ($)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
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
        name: 'Viet Nam',
        data: [],
        color: "#ff4757"
    }]
}

// chart product
export const dataByProduct = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Revenue by type product'
    },
    subtitle: {

    },
    credits: {
        enabled: false,
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Money ($)'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}$'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}$</b><br/>'
    },

    series: [
        {
            name: " ",
            colorByPoint: true,
            data: [
                {
                    name: "Shirt",
                    y: 0,
                },
                {
                    name: "Trousers",
                    y: 0,
                },
                {
                    name: "Shoes",
                    y: 0,
                },
                {
                    name: "Handbag",
                    y: 0,
                },
                {
                    name: "Belts",
                    y: 0,
                },
                {
                    name: "Backpack",
                    y: 0,
                }
            ]
        }
    ]
}

// chart Rate
export const dataByRate = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Fashion shopping trends'
    },
    credits: {
        enabled: false,
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Shirt',
            y: 0
        }, {
            name: 'Trousers',
            y: 0
        }, {
            name: 'Shoes',
            y: 0
        }, {
            name: 'Handbag',
            y: 0
        }, {
            name: 'Belt',
            y: 0
        }, {
            name: 'Backpack',
            y: 0
        }]
    }]
}