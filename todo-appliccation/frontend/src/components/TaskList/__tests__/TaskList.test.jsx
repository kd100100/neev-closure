import { render, screen } from "@testing-library/react"
import TaskList from ".."

test('should fetch tasks data and render', async () => {
    render(<TaskList />);

    const taskContainers = await screen.findAllByTestId("task");
    
    expect(taskContainers.length).toBe(3);
})