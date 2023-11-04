import { render, screen, cleanup } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import TankDetailModal from "../../../components/TankDetailModal/TankDetailModal";
import "@testing-library/jest-dom";
import getMokData from "../../../mokData";

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

test("TankDetailModal component test", async () => {
  const mAxiosResponse = {
    data: getMokData(),
  } as AxiosResponse;
  jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);

  render(<TankDetailModal tankDetailId={"71"} setTankDetailId={jest.fn()} />);

  let containerElem = screen.getByTestId("tank-detail-modal-content");

  expect(containerElem).toBeInTheDocument();

  expect(await screen.findByText("Т-34")).toBeInTheDocument();
  expect(
    await screen.findByText(
      "Легенда советских бронетанковых войск. Самый массовый советский танк Второй мировой войны. С 1940 по 1944 год на различных заводах СССР было изготовлено 33805 машин трёх модификаций."
    )
  ).toBeInTheDocument();
});
