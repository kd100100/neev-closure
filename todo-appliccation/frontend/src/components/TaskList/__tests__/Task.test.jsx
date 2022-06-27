import { render, screen } from "@testing-library/react";
import Task from "../Task";
import userEvent from "@testing-library/user-event";

test("should render priority uncompleted tasks with red colour background and unchecked box", () => {
    const task = {
        id: 1,
        title: "Task Title",
        isCompleted: false,
        isPriority: true,
        isEdited: false,
        createdAt: new Date(),
    };
    render(<Task {...task} />);

    const taskContainer = screen.getByTestId("task");
    const uncheckedBox = screen.getByAltText("unchecked");

    expect(taskContainer).toHaveStyle(
        "background-color: rgba(242, 84, 45, 0.3)"
    );
    expect(uncheckedBox).toBeInTheDocument();
});

test("should render non-priority uncompleted tasks with green colour background and unchecked box", () => {
    const task = {
        id: 1,
        title: "Task Title",
        isCompleted: false,
        isPriority: false,
        isEdited: false,
        createdAt: new Date(),
    };
    render(<Task {...task} />);

    const taskContainer = screen.getByTestId("task");
    const uncheckedBox = screen.getByAltText("unchecked");

    expect(taskContainer).toHaveStyle(
        "background-color: rgba(14, 149, 148, 0.3)"
    );
    expect(uncheckedBox).toBeInTheDocument();
});

test("should render completed tasks with grey colour background, stroked title and checked box", () => {
    const task = {
        id: 1,
        title: "Task Title",
        isCompleted: true,
        isPriority: true,
        isEdited: false,
        createdAt: new Date(),
    };
    render(<Task {...task} />);

    const taskContainer = screen.getByTestId("task");
    const title = screen.getByText("Task Title");
    const checkedBox = screen.getByAltText("checked");

    expect(taskContainer).toHaveStyle(
        "background-color: rgba(202, 202, 202, 0.3)"
    );
    expect(title).toHaveStyle("text-decoration: line-through");
    expect(checkedBox).toBeInTheDocument();
});

test("should be able to complete a task", async () => {
    const tasks = [
        {
            id: 1,
            title: "Task Title",
            isPriority: false,
            isCompleted: false,
            isEdited: false,
            createdAt: new Date(),
        },
    ];
    const refetchMockFunction = jest.fn();
    render(<Task {...tasks} reload={refetchMockFunction} />);

    const taskUncheckedBtn = screen.getByTestId("task-status-btn");
    await userEvent.click(taskUncheckedBtn);

    expect(refetchMockFunction).toHaveBeenCalled();
});

test("should be able to delete a task", async () => {
    const tasks = [
        {
            id: 1,
            title: "Task Title",
            isPriority: false,
            isCompleted: false,
            isEdited: false,
            createdAt: new Date(),
        },
    ];
    const refetchMockFunction = jest.fn();
    render(<Task {...tasks} reload={refetchMockFunction} />);

    const taskDeleteBtn = screen.getByTestId("task-delete-btn");
    await userEvent.click(taskDeleteBtn);

    expect(refetchMockFunction).toHaveBeenCalled();
});
