import React, { useEffect, useState } from "react";
import useAdd from "../../API/useAdd";
import useFetch from "../../API/useFetch";
import useUpdate from "../../API/useUpdate";
import "../../assets/css/AddEdit.css";
import Checked from "../../assets/images/checked.png";
import Unchecked from "../../assets/images/unchecked.png";
import Alert from "../../components/Alert";

const AddEdit = (props) => {
    const { pageType, editingId, setPage } = props;

    const [taskTitle, setTaskTitle] = useState("");
    const [taskIsPriority, setTaskIsPriority] = useState(false);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
    const [alert, setAlert] = useState();

    useEffect(() => {
        if (pageType === "edit") {
            const url = "http://localhost:8080/api/todos/" + editingId;
            const response = useFetch(url);

            response.then((res) => {
                setTaskTitle(res.data.title);
                setTaskIsPriority(res.data.isPriority);
            });
        }
    }, [pageType]);

    useEffect(() => {
        if (taskTitle === "") setButtonIsDisabled(true);
        else setButtonIsDisabled(false);
    }, [taskTitle]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const todoDetails = {
            title: taskTitle,
            isPriority: taskIsPriority,
            isCompleted: false,
            isEdited: pageType === "edit",
            createdAt: new Date(),
        };

        if (pageType === "add") addTask(todoDetails);
        else {
            todoDetails.id = editingId;
            editTask(todoDetails);
        }
    };

    function addTask(todoDetails) {
        const response = useAdd("http://localhost:8080/api/todos", todoDetails);

        response
            .then((res) => {
                if (res.status === 201) {
                    const navigateToHome = () => {
                        setPage("home");
                    };
                    setAlert(
                        <Alert
                            message="Task added successfully"
                            onClose={navigateToHome}
                        />
                    );
                } else {
                    const closeAlert = () => {
                        setAlert(null);
                    };
                    setAlert(
                        <Alert message="Task not added" onClose={closeAlert} />
                    );
                }
            })
            .catch((err) => {
                const closeAlert = () => {
                    setAlert(null);
                };
                setAlert(<Alert message={err.message} onClose={closeAlert} />);
            });
    }

    function editTask(todoDetails) {
        const url = "http://localhost:8080/api/todos/" + editingId;
        const response = useUpdate(url, todoDetails);

        response
            .then((res) => {
                if (res.status === 200) {
                    const navigateToHome = () => {
                        setPage("home");
                    };
                    setAlert(
                        <Alert
                            message="Task edited successfully"
                            onClose={navigateToHome}
                        />
                    );
                } else {
                    const closeAlert = () => {
                        setAlert(null);
                    };
                    setAlert(
                        <Alert message="Task not edited" onClose={closeAlert} />
                    );
                }
            })
            .catch((err) => {
                const closeAlert = () => {
                    setAlert(null);
                };
                setAlert(<Alert message={err.message} onClose={closeAlert} />);
            });
    }

    return (
        <div className="add">
            <div>{alert}</div>

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
                    <button
                        className="add__button"
                        disabled={buttonIsDisabled}
                        onClick={handleSubmit}
                    >
                        {pageType}
                    </button>
                    <button
                        className="add__button"
                        onClick={() => setPage("home")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEdit;
