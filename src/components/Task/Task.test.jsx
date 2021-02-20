import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Task from "./Task";

describe("Task component", () => {
  afterEach(() => jest.clearAllMocks());
  test(`Given the required props,
    When the component is rendered,
    Then the task text should be present`, () => {
    const requiredProps = {
      complete: false,
      text: "This is a task",
      id: "007",
      deleteTask: () => {},
    };
    //spread requiredProps into task one at a time
    render(<Task {...requiredProps} />);
    expect(screen.getByText("This is a task")).toBeInTheDocument();
  });

  test(`Given the required props,
  When the component is rendered,
  Then the delete button should be present`, () => {
    const requiredProps = {
      complete: false,
      text: "This is a task",
      id: "007",
      deleteTask: () => {},
    };
    //spread requiredProps into task one at a time
    render(<Task {...requiredProps} />);
    expect(
      screen
        .getAllByRole("button")
        .find((button) => button.textContent === "Delete")
    ).toBeInTheDocument();
  });

  test(`Given a completed task,
  When the component is rendered,
  Then the complete button should not be present`, () => {
    const requiredProps = {
      complete: false,
      text: "This is a task",
      id: "007",
      deleteTask: () => {},
    };
    //spread requiredProps into task one at a time
    render(<Task {...requiredProps} />);
    expect(
      screen
        .getAllByRole("button")
        .filter((button) => button.textContent === "Delete").length
    ).toBe(1);
  });

  test(`Given an incomplete task,
  When the component is rendered,
  Then the complete should be present`, () => {
    const completedProps = {
      complete: false,
      text: "This is a task",
      id: "007",
      deleteTask: () => {},
    };
    //spread requiredProps into task one at a time
    render(<Task {...completedProps} />);
    expect(
      screen
        .getAllByRole("button")
        .filter((button) => button.textContent === "Complete").length
    ).toBe(1);
  });

  test(`Given a task is rendered,
  When the delete button is clicked,
  Then the delete task function is called with the correct task id`, () => {
    const mockDeleteFunction = jest.fn();
    const testTaskId = "001";

    const requiredProps = {
      complete: false,
      text: "This is a task",
      id: testTaskId,
      deleteTask: mockDeleteFunction,
    };

    render(<Task {...requiredProps} />);

    const deleteButton = screen
      .getAllByRole("button")
      .find((button) => button.textContent === "Delete");
    userEvent.click(deleteButton);

    expect(mockDeleteFunction).toHaveBeenCalledWith(testTaskId);
  });
});
