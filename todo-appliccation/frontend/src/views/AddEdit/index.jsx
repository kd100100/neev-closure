import React, { useEffect, useState } from "react";
import "../../assets/css/AddEdit.css";
import Checked from "../../assets/images/checked.png";
import Unchecked from "../../assets/images/unchecked.png";

const AddEdit = (props) => {
    const { pageType, id, title, isPriority } = props;

    const [taskTitle, setTaskTitle] = useState("");
    const [taskIsPriority, setTaskIsPriority] = useState(false);

    useEffect(() => {
        if (pageType === "edit") {
            setTaskTitle(title);
            setTaskIsPriority(isPriority);
        }
    }, [pageType]);

    return (
        <div className="add">
            <h2 className="add__title">{pageType} Task</h2>

            <form className="add__form">
                <div className="add__form-group">
                    <label htmlFor="task" className="add__form-label">
                        Task
                    </label>
                    <input
                        type="text"
                        className="add__form-input"
                        id="task"
                        placeholder="Enter task"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />
                </div>
                <div className="add__form-group">
                    <label htmlFor="task" className="add__form-label">
                        {taskIsPriority ? (
                            <img
                                src={Checked}
                                alt="checked"
                                className="add__form-checkbox"
                                onClick={() => setTaskIsPriority(false)}
                            />
                        ) : (
                            <img
                                src={Unchecked}
                                alt="unchecked"
                                className="add__form-checkbox"
                                onClick={() => setTaskIsPriority(true)}
                            />
                        )}
                        <span className="add__form-checkbox-text">
                            Priority Task
                        </span>
                    </label>
                </div>
                <div className="add__buttons">
                    <button className="add__button">{pageType}</button>
                    <button className="add__button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddEdit;
