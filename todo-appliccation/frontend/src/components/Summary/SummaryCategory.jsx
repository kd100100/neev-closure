import React from "react";
import Chart from "./Chart";

const SummaryCategory = ({ graphData, categoryName }) => {
    if (!graphData) {
        return <div />;
    }

    return (
        <div className="summaryCategory">
            <h2 className="summaryCategory__title">{categoryName} Summary</h2>
            <div className="summaryCategory__charts">
                <div className="summaryCategory__chart">
                    <Chart graphData={graphData.priority} chartName="Priority" />
                </div>
                <div className="summaryCategory__chart">
                    <Chart graphData={graphData.nonPriority} chartName="Non-Priority" />
                </div>
            </div>
        </div>
    );
};

export default SummaryCategory;
