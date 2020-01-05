import React from "react";
import Challenge5 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Invalidate numbers over 1000", () => {
  const { getByTestId } = render(<Challenge5 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "2,100025,3" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("5");
});
