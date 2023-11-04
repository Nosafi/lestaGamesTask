import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import LimitSelector from "../../../../components/TableFooter/LimitSelector/LimitSelector";
import "@testing-library/jest-dom";
import { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setState = jest.fn();

afterEach(() => {
  cleanup();
});

test("LimitSelector component test", () => {
  // @ts-ignore
  useStateMock.mockImplementation((init: any) => [init, setState]);
  const mokLimit = "60";
  const mokGetData = jest.fn();

  render(
    <LimitSelector
      tanksOnPage="1"
      setTanksOnPage={setState}
      getData={mokGetData}
    />
  );

  let containerElem = screen.getByTestId("limit-selector-container");
  let inputElem = screen.getByTestId("limit-selector-container-input");
  let buttonElem = screen.getByTestId("limit-selector-container-button");

  expect(containerElem).toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();
  expect(buttonElem).toBeInTheDocument();

  fireEvent.change(inputElem, { target: { value: mokLimit } });
  expect(setState).toHaveBeenCalledWith(mokLimit);

  fireEvent.click(buttonElem);
  expect(mokGetData).toHaveBeenCalled();
});
