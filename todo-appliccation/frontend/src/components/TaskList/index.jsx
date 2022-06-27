import React, { useEffect, useState } from "react";
import useFetch from "../../API/useFetch";
import "../../assets/css/TaskList.css";
import TaskCategory from "./TaskCategory";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [priorityTasks, setPriorityTasks] = useState([]);
    const [nonPriorityTasks, setNonPriorityTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

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

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <div className="taskList">
            <TaskCategory tasks={tasks} />
        </div>
    );
};

export default TaskList;
