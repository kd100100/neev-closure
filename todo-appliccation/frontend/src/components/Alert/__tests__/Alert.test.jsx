import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "..";

test('should render alert dynamically', () => { 
    render(<Alert message="Test Message" />);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Test Message");
})

test('should call onClose function when closed', async () => {
    const onCloseMockFunction = jest.fn();
    render(<Alert message="Test Message" onClose={onCloseMockFunction} />);

    const closeButton = screen.getByRole("button");
    await userEvent.click(closeButton);

    expect(onCloseMockFunction).toHaveBeenCalled();
})