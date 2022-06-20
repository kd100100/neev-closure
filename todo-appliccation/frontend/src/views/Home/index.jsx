import React from "react";
import "../../assets/css/Home.css";
import Summary from "../../components/Summary";
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
                <Summary />
                {/* All Time Summary */}
                <Summary />
            </div>
        </div>
    );
};

export default Home;
