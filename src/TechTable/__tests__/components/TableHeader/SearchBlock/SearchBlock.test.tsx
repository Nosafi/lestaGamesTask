import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SearchBlock from "../../../../components/TableHeader/SearchBlock/SearchBlock";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

test("SearchBlock component test", () => {
  const mokGetFn = jest.fn();
  const mokName = "MokName";

  render(<SearchBlock getFn={mokGetFn} isSearching={true} />);

  let containerElem = screen.getByTestId("search-block-container");
  let inputElem = screen.getByTestId(
    "search-block-container-inputContainer-input"
  );
  let seatchBTNElem = screen.getByTestId("search-block-container-searchButton");

  expect(containerElem).toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();
  expect(seatchBTNElem).toBeInTheDocument();

  fireEvent.change(inputElem, { target: { value: mokName } });

  let resetBTNElem = screen.getByTestId(
    "search-block-container-inputContainer-resetButton"
  );
  expect(resetBTNElem).toBeInTheDocument();

  fireEvent.click(seatchBTNElem);
  expect(mokGetFn).toHaveBeenCalledWith(mokName);

  fireEvent.click(resetBTNElem);
  expect(mokGetFn).toHaveBeenCalledWith("");
});
