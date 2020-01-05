import React from "react";
import Challenge8 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Incorrect Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge8 />);

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

test("New Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge8 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "//[#]\n2#4" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("6");

  fireEvent.change(inField, {
    target: { value: "//[@,#]\n5@,#ff@,#100" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("105");

  fireEvent.change(inField, {
    target: { value: "//[***]\n11***33***44" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("88");

  fireEvent.change(inField, {
    target: { value: "//[*][!!][r9r]\n11r9r22*hh*33!!44" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("110");
});
