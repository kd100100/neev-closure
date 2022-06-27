import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ graphData, chartName }) => {
    const pendingPercentage =
        graphData.pending / (graphData.pending + graphData.completed);
    const completedPercentage =
        graphData.completed / (graphData.pending + graphData.completed);

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            height: (9 / 16) * 150 + "%",
            width: 250,
        },
        title: {
            text: "",
        },
        accessibility: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            pointFormat: "<b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
            point: {
                valueSuffix: "%",
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false,
                },
            },
        },
        series: [
            {
                colorByPoint: true,
                data: [
                    {
                        name: "Completed",
                        y: completedPercentage,
                        // color: "#00bcd4",
                        color: "rgba(14, 149, 148, 1)",
                    },
                    {
                        name: "Pending",
                        y: pendingPercentage,
                        color: "rgba(242, 84, 45, 1)",
                    },
                ],
                innerSize: "70%",
            },
        ],
    };

    return (
        <div className="chart">
            <HighchartsReact highcharts={Highcharts} options={options} />
            <div className="chart__center">
                <h2 className="chart__centerPercentage">
                    {parseInt(completedPercentage*100)}%
                </h2>
                <p className="chart__centerText">Completed</p>
            </div>
            <p className="chart__title">{chartName} Tasks</p>
        </div>
    );
};

export default Chart;
