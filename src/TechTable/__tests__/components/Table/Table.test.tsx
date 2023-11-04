import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Table from "../../../components/Table/Table";
import "@testing-library/jest-dom";
import { useState as useStateMock } from "react";
import getMokData from "../../../mokData";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
const setState = jest.fn();

afterEach(() => {
  cleanup();
});

test("Table component test", () => {
  // @ts-ignore
  useStateMock.mockImplementation((init: any) => [init, setState]);
  const mokData = getMokData();

  render(<Table data={mokData.data} setTankDetailId={setState} />);

  let containerElem = screen.getByTestId("table-container");
  let tableElem = screen.getByTestId("table");
  let tableRowElem = screen.getByTestId("table-row");

  expect(containerElem).toBeInTheDocument();
  expect(tableElem).toBeInTheDocument();
  expect(tableRowElem).toBeInTheDocument();

  fireEvent.click(tableRowElem);
  expect(setState).toHaveBeenCalledWith("71");
});
