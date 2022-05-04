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
            show: true,
            style: {
                colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff",],
                fontSize: "14px",
            },

        }
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
            style: {
                colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff",],
                fontSize: "14px",
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