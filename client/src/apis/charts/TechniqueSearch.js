export const seriesPrice = [
    {
        name: "Khối lượng giao dịch",
        type: "column",
        data: [
            1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5,
            1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5,
        ],
    },
    {
        name: "Giá",
        type: "line",
        data: [
            20, 29, 37, 36, 44, 45, 50, 58, 20, 29, 37, 36, 44, 45, 50, 58, 20, 29,
            37, 36, 44, 45, 50, 58, 20, 29, 37, 36, 44, 45, 50, 58,
        ],
    },
];

export const optionsPentagon = {
    chart: {
        height: 350,
        type: "radar",
    },
    dataLabels: {
        enabled: true,
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColors: "#e9e9e9",
                fill: {
                    colors: ["#212d37", "#212d37"],
                },
            },
        },
    },
    title: {
        text: "",
    },
    colors: ["green"],
    markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: "#FF4560",
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val;
            },
        },
    },
    xaxis: {
        categories: [
            "Tăng trưởng",
            "Sinh lời",
            "Thị trường",
            "Cổ tức",
            "An toàn tài chính",
        ],
        // fontSize: "140px",
        labels: {
            style: {
                colors: "red",
                fontSize: "16px",
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val, i) {
                if (i % 2 === 0) {
                    return val;
                } else {
                    return "";
                }
            },
        },
    },
};
export const seriesPentagon = [
    {
        name: "Series 1",
        data: [20, 100, 40, 30, 10],
    },
];

export const optionPriceChart = (categories) => ({
    chart: {
        type: "line",
        stacked: false,
        id: "basic-bar",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: [1, 1, 4],
    },
    title: {
        text: "",
        align: "left",
        offsetX: 110,
    },
    xaxis: {
        categories: categories,
        labels: {
            style: {
                colors: "white",
            },
        },
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: "#008FFB",
            },
            labels: {
                style: {
                    colors: "#008FFB",
                },
            },
            title: {
                text: "",
                style: {
                    color: "#008FFB",
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        {
            seriesName: "Income",
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: "#00E396",
            },
            labels: {
                style: {
                    colors: "#00E396",
                },
            },
            title: {
                text: "",
                style: {
                    color: "#00E396",
                },
            },
        },
        {
            seriesName: "Revenue",
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: "#FEB019",
            },
            labels: {
                style: {
                    colors: "#FEB019",
                },
            },
            title: {
                text: "",
                style: {
                    color: "#FEB019",
                },
            },
        },
    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
        },
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
        labels: {
            colors: "white",
            useSeriesColors: false,
        },
    },
});

export const seriesPriceChart = (data1, data2) => {
    const series = [
        {
            name: "Khối lượng giao dịch",
            type: "column",
            data: data1,
        },
        {
            name: "Giá",
            type: "line",
            data: data2,
        },
    ];
    return series;
};
