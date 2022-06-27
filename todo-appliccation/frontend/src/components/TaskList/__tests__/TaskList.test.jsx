import { render, screen } from "@testing-library/react";
import TaskList from "..";
import userEvent from "@testing-library/user-event";

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
    render(<TaskList tasks={tasks} fetchTasks={refetchMockFunction} />);

    const taskUnchecked = screen.getByTestId("task-status-btn");
    await userEvent.click(taskUnchecked);

    expect(refetchMockFunction).toHaveBeenCalled();
});