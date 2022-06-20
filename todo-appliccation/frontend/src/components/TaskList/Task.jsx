import React from "react";
import Checked from "../../assets/images/checked.png";
import Unchecked from "../../assets/images/unchecked.png";
import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";

const Task = () => {
    return (
        <div className="task">
            <div className="task__checkbox">
                <img src={Unchecked} alt="unchecked" />
            </div>
            <div className="task__title">
                <span className="task__titleText">Task Title</span>
            </div>
            <div className="task__actionButtons">
                <button className="task__actionButton">
                    <img src={Edit} alt="edit" />
                </button>
                <button className="task__actionButton">
                    <img src={Delete} alt="delete" />
                </button>
            </div>
        </div>
    );
};

export default Task;
