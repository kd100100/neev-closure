import React from "react";
import "../../assets/css/TaskList.css";
import TaskCategory from "./TaskCategory";

const TaskList = () => {
    return (
        <div className="taskList">
            <TaskCategory />
            <TaskCategory />
            <TaskCategory />
        </div>
    );
};

export default TaskList;
