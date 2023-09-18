import { render, screen } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
  const handleChange = (text: string) => {};

  test("in the DOM", () => {
    render(<TextField handleChange={handleChange} />);
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
  });

  test("render value", () => {
    render(<TextField handleChange={handleChange} value="input" />);
    expect(screen.getByTestId("input")).toHaveValue("input");
  });

  test("have class", () => {
    render(
      <TextField
        handleChange={handleChange}
        classess={{
          root: "additional_class-root",
          input: "additional_class-input",
        }}
        value="input"
      />
    );
    expect(screen.getByTestId("input")).toHaveClass("additional_class-input");
    expect(screen.getByTestId("text-field")).toHaveClass(
      "additional_class-root"
    );
  });
});
