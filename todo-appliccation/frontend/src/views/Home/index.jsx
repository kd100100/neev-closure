import React from "react";
import "../../assets/css/Home.css";
import TaskList from "../../components/TaskList";

const Home = () => {
    return (
        <div className="home">
            {/* Tasks List */}
            <div className="home__tasksList">
                <TaskList />
            </div>

            {/* Summaries */}
            <div className="home__summaries">
                {/* Last week Summary */}
                <div className="home__summariesLastWeek">
                    Last week Summary
                </div>
                {/* All Time Summary */}
                <div className="home__summariesAllTime">
                    All Time Summary
                </div>
            </div>
        </div>
    );
};

export default Home;
