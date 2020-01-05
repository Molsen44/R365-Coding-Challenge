import React from "react";
import Challenge2 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Correct String Format", () => {
  const { getByTestId } = render(<Challenge2 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "3,4" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("7");
});

test("Single Incorrect Input", () => {
  const { getByTestId } = render(<Challenge2 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "5,xyz,abc" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("5");
});
test("Single Number Input", () => {
  const { getByTestId } = render(<Challenge2 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "8" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("8");
});

test("More than 2 Inputs", () => {
  const { getByTestId } = render(<Challenge2 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "1,2,3,4,5,6,7,8,9,10,11" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("66");
});
