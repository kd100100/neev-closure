import React from "react";
import Task from "./Task";

const TaskCategory = ({ tasks, categoryName, reload }) => {
    if (tasks.length === 0) {
        return <div />;
    }

    return (
        <div className="taskCategory">
            <h2 className="taskCategory__title">{categoryName} Tasks</h2>
            {tasks.map((task) => (
                <Task {...task} reload={reload} />
            ))}
        </div>
    );
};

export default TaskCategory;
