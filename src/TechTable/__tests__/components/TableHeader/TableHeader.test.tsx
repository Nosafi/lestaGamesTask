import { render, screen, cleanup } from "@testing-library/react";
import TableHeader from "../../../components/TableHeader/TableHeader";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("TableHeader component test", () => {
  render(<TableHeader getFn={jest.fn()} isSearching={false} />);

  let titleElem = screen.getByTestId("header-container-title");
  expect(titleElem).toBeInTheDocument();
});
