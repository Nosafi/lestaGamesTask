import { render, screen, cleanup } from "@testing-library/react";
import TechTable from "../TechTable";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("TechTable component test", () => {
  render(<TechTable />);

  let containerElem = screen.getByTestId("table-container");
  expect(containerElem).toBeInTheDocument();
});
