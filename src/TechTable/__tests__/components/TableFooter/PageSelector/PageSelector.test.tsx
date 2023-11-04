import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import PageSelector from "../../../../components/TableFooter/PageSelector/PageSelector";
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

test("PageSelector component test", () => {
  // @ts-ignore
  useStateMock.mockImplementation((init: any) => [init, setState]);
  const mokMaxPages = 33;
  const mokPage = "3";

  render(
    <PageSelector currPage="1" setCurrPage={setState} maxPages={mokMaxPages} />
  );

  let containerElem = screen.getByTestId("page-selector-container");
  let inputElem = screen.getByTestId("page-selector-container-input");

  expect(containerElem).toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();

  fireEvent.change(inputElem, { target: { value: mokPage } });
  expect(setState).toHaveBeenCalledWith(mokPage);
});
