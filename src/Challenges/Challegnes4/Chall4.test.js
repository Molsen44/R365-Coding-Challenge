import React from "react";
import Challenge4 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Deny Negative numbers", () => {
  const { getByTestId } = render(<Challenge4 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "1\n3, -5" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe(
    "Error: Negative Numbers Included in Input: -5"
  );
});
