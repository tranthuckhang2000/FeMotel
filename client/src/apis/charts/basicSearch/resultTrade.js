export const series = [{
    name: 'Doanh thu',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],

}, {
    name: 'Lợi nhuận',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
},
    {
        name: 'Biên lợi nhuận',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    },
];
export const options = {
    chart: {
        height: 350,
        type: 'line',
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1, 4]
    },
    title: {
        text: '',
        align: 'left',
        offsetX: 110
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        labels: {
            style: {
                colors: '#ffffff',
                // fontSize: "140px",
            }
        },
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#008FFB'
            },
            labels: {
                style: {
                    colors: '#008FFB',
                }
            },
            title: {
                text: "",
                style: {
                    color: '#008FFB',
                }
            },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#00E396'
            },
            labels: {
                style: {
                    colors: '#00E396',
                }
            },
            title: {
                text: "",
                style: {
                    color: '#00E396',
                }
            },
        },

    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
        labels: {
            colors: '#ffffff',
            useSeriesColors: false
        }
    }
};