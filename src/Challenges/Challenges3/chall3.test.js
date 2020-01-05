import React from "react";
import Challenge3 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Newline delimiter", () => {
  const { getByTestId } = render(<Challenge3 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "1\n3" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("4");
});
