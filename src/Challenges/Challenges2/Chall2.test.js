import React from "react";
import Challenge2 from "./";
import { render, fireEvent } from "@testing-library/react";

test("More inputs than 2", () => {
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
