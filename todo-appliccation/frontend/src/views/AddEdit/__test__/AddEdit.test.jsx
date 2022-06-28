import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddEdit from "../index";

test("should render add page", () => {
    render(<AddEdit pageType="add" />);

    const heading = screen.getByRole("heading", { name: /add task/i });
    const submitButton = screen.getByRole("button", { name: /add/i });

    expect(heading).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("should render edit page", () => {
    render(<AddEdit pageType="edit" />);

    const heading = screen.getByRole("heading", { name: /edit task/i });
    const submitButton = screen.getByRole("button", { name: /edit/i });

    expect(heading).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("should have default form values as empty when adding", () => {
    render(<AddEdit pageType="add" />);

    const taskTitle = screen.getByPlaceholderText(/enter task/i);
    const checkbox = screen.getByAltText(/unchecked/i);

    expect(taskTitle).toHaveValue("");
    expect(checkbox).toBeInTheDocument();
});

test("should be able to toggle the priority checkbox", () => {
    render(<AddEdit pageType="add" />);

    const uncheckedCheckbox = screen.getByAltText(/unchecked/i);
    expect(uncheckedCheckbox).toBeInTheDocument();

    userEvent.click(uncheckedCheckbox);

    const checkedCheckbox = screen.getByAltText(/checked/i);
    expect(checkedCheckbox).toBeInTheDocument();
});

test("should disable add/edit button when title field is empty", () => {
    render(<AddEdit pageType="add" />);

    const submitButton = screen.getByRole("button", { name: /add/i });

    expect(submitButton).toBeDisabled();
});

test("should enable add/edit button when title field is not empty", async () => {
    render(<AddEdit pageType="add" />);

    const taskTitle = screen.getByPlaceholderText(/enter task/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(taskTitle, "Todo Task");

    expect(submitButton).toBeEnabled();
});

test("should be able to add a task", async () => {
    render(<AddEdit pageType="add" />);

    const taskTitle = screen.getByPlaceholderText(/enter task/i);
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(taskTitle, "Todo Task");
    await userEvent.click(submitButton);

    const alert = await screen.findByRole("alert");

    expect(alert).toHaveTextContent("Task added successfully");
});

test("should be able to edit a task", async () => {
    render(<AddEdit pageType="edit" taskId="1" />);

    const taskTitle = screen.getByPlaceholderText(/enter task/i);
    const submitButton = screen.getByRole("button", { name: /edit/i });

    await userEvent.type(taskTitle, "1");
    await userEvent.click(submitButton);

    const alert = await screen.findByRole("alert");

    expect(alert).toHaveTextContent("Task edited successfully");
});
