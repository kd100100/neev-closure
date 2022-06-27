import React from "react";
import Task from "./Task";

const TaskCategory = ({ tasks }) => {
    return (
        <div className="taskCategory">
            <h2 className="taskCategory__title">Priority Tasks</h2>
            {tasks?.map((task) => (
                <Task {...task} />
            ))}
        </div>
    );
};

export default TaskCategory;
