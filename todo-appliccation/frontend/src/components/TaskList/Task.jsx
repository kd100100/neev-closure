import React from "react";
import Checked from "../../assets/images/checked.png";
import Unchecked from "../../assets/images/unchecked.png";
import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";
import useUpdate from "../../API/useUpdate";
import useDelete from "../../API/useDelete";

const Task = (props) => {
    const { id, title, isPriority, isCompleted, isEdited, createdAt, reload } =
        props;

    const taskBg = () => {
        if (isCompleted) return "rgba(202, 202, 202, 0.3)";
        if (isPriority) return "rgba(242, 84, 45, 0.3)";
        return "rgba(14, 149, 148, 0.3)";
    };

    const taskTitle = () => {
        if (isCompleted) return "line-through";
        return "none";
    };

    const changeTaskStatus = () => {
        console.log("ho");
        const task = {
            id,
            title,
            isPriority,
            isCompleted: !isCompleted,
            isEdited,
            createdAt,
        };
        const url = "http://localhost:8080/api/todos/" + id;
        console.log(url, task);

        const response = useUpdate(url, task);
        response.then(() => {
            reload();
        });
    };

    const deleteTask = () => {
        const url = "http://localhost:8080/api/todos/" + id;

        const response = useDelete(url);
        response.then(() => {
            reload();
        });
    };

    return (
        <div
            className="task"
            data-testid="task"
            style={{ backgroundColor: taskBg() }}
        >
            {isCompleted ? (
                <button
                    className="task__checkbox"
                    onClick={changeTaskStatus}
                    data-testid="task-status-btn"
                >
                    <img src={Checked} alt="checked" />
                </button>
            ) : (
                <button
                    className="task__checkbox"
                    onClick={changeTaskStatus}
                    data-testid="task-status-btn"
                >
                    <img src={Unchecked} alt="unchecked" />
                </button>
            )}
            <div className="task__title">
                <span
                    className="task__titleText"
                    style={{ textDecoration: taskTitle() }}
                >
                    {title}
                </span>
            </div>
            <div className="task__actionButtons">
                {!isCompleted && (
                    <button className="task__actionButton">
                        <img src={Edit} alt="edit" />
                    </button>
                )}
                <button className="task__actionButton">
                    <img
                        src={Delete}
                        alt="delete"
                        data-testid="task-delete-btn"
                        onClick={deleteTask}
                    />
                </button>
            </div>
        </div>
    );
};

export default Task;
