import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
            height: (9 / 16 * 150) + '%',
            width: 250,
        },
        title: {
            text: "",
        },
        credits: {
            enabled: false
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
                        y: 61.41,
                        // color: "#00bcd4",
                        color: "rgba(14, 149, 148, 1)",
                    },
                    {
                        name: "Pending",
                        y: 11.84,
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
                    61%
                </h2>
                <p className="chart__centerText">
                    Completed
                </p>
            </div>
            <p className="chart__title">All Tasks</p>
        </div>
    );
};

export default Chart;
