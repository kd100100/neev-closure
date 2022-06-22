import { render, screen } from "@testing-library/react";
import AddEdit from "../index";

test("should render add page", () => {
    render(<AddEdit />);

    const heading = screen.getByRole("heading", { name: "Add Task" });

    expect(heading).toBeInTheDocument();
});