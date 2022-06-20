import React from "react";
import Chart from "./Chart";

const SummaryCategory = () => {
    return (
        <div className="summaryCategory">
            <h2 className="summaryCategory__title">Last week Summary</h2>
            <div className="summaryCategory__charts">
                <div className="summaryCategory__chart">
                    <Chart />
                </div>
                <div className="summaryCategory__chart">
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default SummaryCategory;
