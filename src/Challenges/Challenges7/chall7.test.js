import React from "react";
import Challenge7 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Incorrect Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge7 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "//#2#5" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("0");

  fireEvent.change(inField, {
    target: { value: "//##\n2#ff#100" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("0");
});
