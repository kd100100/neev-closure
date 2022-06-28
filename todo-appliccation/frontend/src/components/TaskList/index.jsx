import React, { useEffect, useState } from "react";
import "../../assets/css/TaskList.css";
import TaskCategory from "./TaskCategory";
import { filterPriorityTasks, filterNonPriorityTasks, filterCompletedTasks, filterNonCompletedTasks } from "../../utils/taskFilter";

const TaskList = ({ tasks, fetchTasks, setPage, setEditingId }) => {
    const [priorityTasks, setPriorityTasks] = useState([]);
    const [nonPriorityTasks, setNonPriorityTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const notCompletedTasks = filterNonCompletedTasks(tasks);
        setPriorityTasks(filterPriorityTasks(notCompletedTasks));
        setNonPriorityTasks(filterNonPriorityTasks(notCompletedTasks));
        setCompletedTasks(filterCompletedTasks(tasks));
    }, [tasks]);

    return (
        <div className="taskList">
            <TaskCategory tasks={priorityTasks} categoryName="priority" reload={fetchTasks} setPage={setPage} setEditingId={setEditingId} />
            <TaskCategory tasks={nonPriorityTasks} categoryName="non-priority" reload={fetchTasks} setPage={setPage} setEditingId={setEditingId} />
            <TaskCategory tasks={completedTasks} categoryName="completed" reload={fetchTasks} setPage={setPage} setEditingId={setEditingId} />
        </div>
    );
};

export default TaskList;
