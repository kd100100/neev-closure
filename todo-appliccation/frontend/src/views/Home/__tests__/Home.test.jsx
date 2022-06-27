import { render, screen } from "@testing-library/react"
import Home from "..";

test('should fetch tasks data and render', async () => {
    render(<Home  />);

    const taskContainers = await screen.findAllByTestId("task");
    
    expect(taskContainers.length).toBe(4);
})