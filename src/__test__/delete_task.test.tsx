import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { TodoProvider } from "../Context/TodoContext";
import App from "../App";

test("delete a task from the list", async () => {
  render(
    <TodoProvider>
      <App />
    </TodoProvider>
  );
  const inputElement = screen.getByPlaceholderText(/what need to do/i);

  const addButton = screen.getByRole("button", { name: "" });
  fireEvent.change(inputElement, { target: { value: "testTodo" } });

  fireEvent.click(addButton);
  const deleteButton = screen.getByTestId("delete-element");

  fireEvent.click(deleteButton);

  const deletedTaskElement = screen.queryByText(/testTodo/i);
  expect(deletedTaskElement).toBeNull();
});
