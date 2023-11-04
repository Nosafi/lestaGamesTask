import { render, screen, cleanup } from "@testing-library/react";
import Loader from "../../../components/Loader/Loader";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("Loader component test", () => {
  render(<Loader />);

  let loaderElem = screen.getByTestId("loader");
  expect(loaderElem).toBeInTheDocument();
});
