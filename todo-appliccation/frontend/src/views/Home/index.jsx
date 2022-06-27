import React, { useEffect, useState } from "react";
import useFetch from "../../API/useFetch";
import "../../assets/css/Home.css";
import Summary from "../../components/Summary";
import TaskList from "../../components/TaskList";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        const response = useFetch("http://localhost:8080/api/todos");

        response.then((res) => {
            console.log(res.data);
            setTasks(res.data);
        });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="home">
            {/* Tasks List */}
            <div className="home__tasksList">
                <TaskList tasks={tasks} fetchTasks={fetchTasks} />
            </div>

            {/* Summaries */}
            <div className="home__summaries">
                <Summary tasks={tasks} />
            </div>
        </div>
    );
};

export default Home;
