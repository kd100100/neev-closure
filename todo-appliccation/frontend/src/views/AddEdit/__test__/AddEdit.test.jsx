import { render, screen } from "@testing-library/react";
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

test("should have default form values as todo details when editing", () => {
    render(
        <AddEdit
            pageType="edit"
            id="123"
            title="Todo Task"
            isPriority={false}
        />
    );

    const taskTitle = screen.getByPlaceholderText(/enter task/i);
    const checkbox = screen.getByAltText(/unchecked/i);

    expect(taskTitle).toHaveValue("Todo Task");
    expect(checkbox).toBeInTheDocument();
});

test("should be able to toggle the priority checkbox", () => {
    render(<AddEdit pageType="add" />);

    const uncheckedCheckbox = screen.getByAltText(/unchecked/i);
    expect(uncheckedCheckbox).toBeInTheDocument();

    userEvent.click(uncheckedCheckbox);

    // expect(uncheckedCheckbox).not.toBeInTheDocument();
    const checkedCheckbox = screen.getByAltText(/checked/i);
    expect(checkedCheckbox).toBeInTheDocument();
})
