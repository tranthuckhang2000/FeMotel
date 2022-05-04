const axios = require("axios");

// function loadChartPrice(res) {
//   const result = [];

//   for (var x = 0; x < res.price.length; x++) {
//     const ticker = [];
//     const nameTicker = res.price[x].nameTicker;
//     const nameCompany = res.price[x].nameCompany;
//     const categoriesArray = [];
//     const dataCol = [];
//     const dataLine = [];
//     for (var i = 0; i < 50; i++) {
//       categoriesArray.push(res.price[x].dateArray[i]);
//       let valueCol = parseFloat(res.price[x].priceArray[i]);
//       // console.log(valueCol);
//       let valueLine = parseFloat(res.price[x].volumeArray[i]);
//       // console.log(valueLine);
//       dataCol.push(valueCol);
//       dataLine.push(valueLine);
//     }
//     ticker.push(nameTicker);
//     ticker.push(nameCompany);
//     ticker.push(categoriesArray);
//     ticker.push(dataCol);
//     ticker.push(dataLine);
//     result.push(ticker);
//   }

//   return result;
// }

const loadTransactionProgress = (res, index) => {
    const ticker = {};
    ticker.dateUpdate = parseFloat(res.price[index].dateUpdate);
    ticker.priceCurrent = parseFloat(res.price[index].priceCurrent);
    ticker.change = parseFloat(res.price[index].change);
    ticker.percentChange = parseFloat(res.price[index].percentChange);
    ticker.priceOpen = parseFloat(res.price[index].priceOpen);
    ticker.referencePrice = parseFloat(res.price[index].referencePrice);
    ticker.lowestPrice = parseFloat(res.price[index].lowestPrice);
    ticker.highestPrice = parseFloat(res.price[index].highestPrice);
    ticker.weight = parseFloat(res.price[index].weight);
    ticker.weightMedium = parseFloat(res.price[index].weightMedium);
    ticker.highestWeek = parseFloat(res.price[index].highestWeek);
    ticker.lowestWeek = parseFloat(res.price[index].lowestWeek);
    return ticker;
};

const loadMarkTechnique = (res, index) => {
    const ticker = {};
    // console.log(res.point[index].speedChart.toFixed(4));
    ticker.speedChart = parseFloat(res.point[index].speedChart).toFixed(2);
    ticker.trend = parseFloat(res.point[index].trend).toFixed(4);
    ticker.pointBuy = parseFloat(res.point[index].pointBuy).toFixed(4);
    ticker.liquidity = parseFloat(res.point[index].liquidity).toFixed(4);
    ticker.capital = parseFloat(res.point[index].capital).toFixed(4);
    ticker.basic = parseFloat(res.point[index].basic).toFixed(4);
    return ticker;
};

const loadOptionPriceChart = (categories) => {
    const price = {
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
    };

    return price;
};
const loadSeriesPriceChart = (dataCol, dataLine) => {
    const series = [
        {
            name: "Khối lượng giao dịch",
            type: "column",
            data: dataCol,
        },
        {
            name: "Giá",
            type: "line",
            data: dataLine,
        },
    ];
    return series;
};

const loadSeriesPentagon = (series) => {
    return [
        {
            name: "Series 1",
            data: series,
        },
    ];
};

export const loadTechnique = (res) => {
    const technique = {};

    const priceChart = {};
    const optionPriceChart = [];
    const seriesPriceChart = [];

    const transactionProgress = [];

    const markTechnique = [];

    const nameTicker = [];
    const nameCompany = [];
    const nameCommon = [];

    const seriesPentagon = [];

    for (var x = 0; x < res.price.length; x++) {
        const name = {};
        name.nameTicker = res.price[x].nameTicker;
        name.nameCompany = res.price[x].nameCompany;
        nameCommon.push(name);
        const categoriesArray = [];
        const dataCol = [];
        const dataLine = [];
        for (var i = 0; i < 50; i++) {
            categoriesArray.push(res.price[x].dateArray[i]);
            let valueCol = parseFloat(res.price[x].priceArray[i]);
            let valueLine = parseFloat(res.price[x].volumeArray[i]);
            dataCol.push(valueCol);
            dataLine.push(valueLine);
        }

        transactionProgress.push(loadTransactionProgress(res, x));
        markTechnique.push(loadMarkTechnique(res, x));

        const option = loadOptionPriceChart(categoriesArray);
        const series = loadSeriesPriceChart(dataCol, dataLine);

        optionPriceChart.push(option);
        seriesPriceChart.push(series);
        // console.log(series);
    }
    for (var x = 0; x < res.point.length; x++) {
        const data = res.point[x];
        const series = [];
        series.push(parseFloat(data.basic).toFixed(3));
        series.push(parseFloat(data.capital).toFixed(3));
        series.push(parseFloat(data.liquidity).toFixed(3));
        series.push(parseFloat(data.pointBuy).toFixed(3));
        series.push(parseFloat(data.trend).toFixed(3));

        const seriesPen = loadSeriesPentagon(series);

        seriesPentagon.push(seriesPen);
    }

    priceChart.options = optionPriceChart;
    priceChart.series = seriesPriceChart;
    technique.priceChart = priceChart;
    // console.log(priceChart);

    technique.nameTicker = nameTicker;
    technique.nameCompany = nameCompany;

    technique.transactionProgress = transactionProgress;
    technique.markTechnique = markTechnique;

    technique.nameCommon = nameCommon;

    technique.seriesPentagon = seriesPentagon;

    // console.log('loaded')
    // console.log('technique: ' + technique)

    return technique;
};
