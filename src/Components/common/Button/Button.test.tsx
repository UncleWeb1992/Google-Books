import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("Button in DOM", () => {
    render(<Button text="text" />);
    expect(screen.getByText("text")).toBeInTheDocument();
  });

  test("Button have classes", () => {
    const classname = "test";
    render(<Button text="text" classess={classname} />);
    expect(screen.getByText("text")).toHaveClass(classname);
  });
});
