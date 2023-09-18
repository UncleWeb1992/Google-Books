import { render, screen, fireEvent } from "@testing-library/react";
import SelectField from "./SelectField";

describe("SelectField", () => {
  let value = "";

  const handleChange = (opt: { key: string; label: string }) => {
    value = opt.label;
  };

  const options = [
    { key: "testKey", label: "test label" },
    { key: "testKey2", label: "test label2" },
  ];

  test("in the DOM", () => {
    render(
      <SelectField
        value={options[0].label}
        options={[]}
        onChange={handleChange}
      />
    );
    expect(screen.getByTestId("select-field")).toBeInTheDocument();
  });

  test("change value", () => {
    render(
      <SelectField value={value} options={options} onChange={handleChange} />
    );
    const menuItems = screen.getAllByTestId("menu-item");
    fireEvent.click(menuItems[0], {});
    expect(screen.getByTestId("select-value")).toHaveTextContent(value);
  });

  test("opened list", () => {
    render(
      <SelectField value={value} options={options} onChange={handleChange} />
    );

    const valueDiv = screen.getByTestId("select-value");
    fireEvent.click(valueDiv, {});
    expect(screen.getByRole("list")).toHaveClass("active");
  });
});
