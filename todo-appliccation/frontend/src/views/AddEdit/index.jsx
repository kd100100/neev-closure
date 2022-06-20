import React from "react";
import "../../assets/css/Add.css";
import Checked from "../../assets/images/checked.png";
import Unchecked from "../../assets/images/unchecked.png";

const AddEdit = () => {
    return (
        <div className="add">
            <h2 className="add__title">Add Task</h2>

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
                    />
                </div>
                <div className="add__form-group">
                    <label htmlFor="task" className="add__form-label">
                        <img
                            src={Unchecked}
                            alt="unchecked"
                            className="add__form-checkbox"
                        />
                        <span className="add__form-checkbox-text">
                            Priority Task
                        </span>
                    </label>
                </div>
                <div className="add__buttons">
                    <button className="add__button">Add</button>
                    <button className="add__button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddEdit;
