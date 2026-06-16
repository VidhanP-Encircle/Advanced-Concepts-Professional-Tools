import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDo from "./ToDo";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const renderWithRedux = () => {
  render(
    <Provider store={store}>
      <ToDo />
    </Provider>,
  );
};

test("renders heading", () => {
  renderWithRedux();
  expect(screen.getByText(/to do app/i)).toBeInTheDocument();
});

test("renders input field", () => {
  renderWithRedux();
  expect(screen.getByPlaceholderText(/enter a task/i)).toBeInTheDocument();
});

test("adds a task", async () => {
  renderWithRedux();

  const input = screen.getByPlaceholderText(/enter a task/i);
  const button = screen.getByRole("button", { name: /add task/i });

  await userEvent.type(input, "Redux Task");
  await userEvent.click(button);

  expect(screen.getByText("Redux Task")).toBeInTheDocument();
});

test("delete a task", async () => {
  renderWithRedux();

  const deleteBtn = screen.getByRole("button", { name: /delete/i });

  await userEvent.click(deleteBtn);

  expect(screen.queryByText("Redux Task")).not.toBeInTheDocument();
});

test("does not add empty task", async () => {
  renderWithRedux();

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  await userEvent.click(addButton);

  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});
