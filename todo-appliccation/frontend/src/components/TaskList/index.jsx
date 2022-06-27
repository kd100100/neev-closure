import React, { useEffect, useState } from "react";
import "../../assets/css/TaskList.css";
import TaskCategory from "./TaskCategory";
import { filterPriorityTasks, filterNonPriorityTasks, filterCompletedTasks } from "../../utils/taskFilter";

const TaskList = ({ tasks, fetchTasks }) => {
    const [priorityTasks, setPriorityTasks] = useState([]);
    const [nonPriorityTasks, setNonPriorityTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

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
