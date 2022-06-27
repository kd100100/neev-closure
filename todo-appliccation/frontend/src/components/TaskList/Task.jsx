import React from "react";
import Checked from "../../assets/images/checked.png";
import Unchecked from "../../assets/images/unchecked.png";
import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";

const Task = (props) => {
    const { isCompleted, isPriority } = props;

    const taskBg = () => {
        if (isCompleted) return "rgba(202, 202, 202, 0.3)";
        if (isPriority) return "rgba(242, 84, 45, 0.3)";
        return "rgba(14, 149, 148, 0.3)";
    };

    const taskTitle = () => {
        if (isCompleted) return "line-through";
        return "none";
    };

    return (
        <div
            className="task"
            data-testid="task"
            style={{ backgroundColor: taskBg() }}
        >
            {isCompleted ? (
                <div className="task__checkbox">
                    <img src={Checked} alt="checked" />
                </div>
            ) : (
                <div className="task__checkbox">
                    <img src={Unchecked} alt="unchecked" />
                </div>
            )}
            <div className="task__title">
                <span
                    className="task__titleText"
                    style={{ textDecoration: taskTitle() }}
                >
                    Task Title
                </span>
            </div>
            <div className="task__actionButtons">
                {!isCompleted && (
                    <button className="task__actionButton">
                        <img src={Edit} alt="edit" />
                    </button>
                )}
                <button className="task__actionButton">
                    <img src={Delete} alt="delete" />
                </button>
            </div>
        </div>
    );
};

export default Task;
