import { render, screen, cleanup } from "@testing-library/react";
import TableFooter from "../../../components/TableFooter/TableFooter";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("TableFooter component test", () => {
  const mokError = {
    field: "page_no",
    message: "PAGE_NO_NOT_FOUND",
    code: 404,
    value: 50,
  };
  render(
    <TableFooter isPageError={mokError} getFn={() => true} maxPages={33} />
  );

  let footerElem = screen.getByTestId("footer-container");
  expect(footerElem).toBeInTheDocument();
});
