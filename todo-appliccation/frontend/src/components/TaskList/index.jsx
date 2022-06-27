import React, { useEffect, useState } from "react";
import useFetch from "../../API/useFetch";
import "../../assets/css/TaskList.css";
import TaskCategory from "./TaskCategory";
import { filterPriorityTasks, filterNonPriorityTasks, filterCompletedTasks } from "../../utils/taskFilter";

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
        setPriorityTasks(filterPriorityTasks(tasks));
        setNonPriorityTasks(filterNonPriorityTasks(tasks));
        setCompletedTasks(filterCompletedTasks(tasks));
    }, [tasks]);

    return (
        <div className="taskList">
            <TaskCategory tasks={priorityTasks} categoryName="priority" reload={fetchTasks} />
            <TaskCategory tasks={nonPriorityTasks} categoryName="non-priority" reload={fetchTasks} />
            <TaskCategory tasks={completedTasks} categoryName="completed" reload={fetchTasks} />
        </div>
    );
};

export default TaskList;
