import React, { useEffect, useState } from "react";
import "../../assets/css/Summary.css";
import SummaryCategory from "./SummaryCategory";
import { allTimeGraphData, lastWeekGraphData } from "../../utils/taskGraphData";

const Summary = ({ tasks }) => {
    const [lastWeekData, setLastWeekData] = useState();
    const [allTimeData, setAllTimeData] = useState();

    useEffect(() => {
        setLastWeekData(lastWeekGraphData(tasks))
        setAllTimeData(allTimeGraphData(tasks))
    }, [tasks]);

    return (
        <div className="summary">
            <SummaryCategory graphData={lastWeekData} categoryName="Last Week" />
            <SummaryCategory graphData={allTimeData} categoryName="All Time" />
        </div>
    );
};

export default Summary;
