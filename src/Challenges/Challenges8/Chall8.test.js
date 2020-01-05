import React from "react";
import Challenge8 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Incorrect Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge8 />);

  const inputField = getByTestId("input");
  const outputField = getByTestId("output-field");
  const submitButton = getByTestId("submit-button");

  fireEvent.change(inputField, {
    target: { value: "//#2#5" }
  });

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe("0");

  fireEvent.change(inputField, {
    target: { value: "//##\n2#ff#100" }
  });

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe("0");
});

test("New Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge8 />);

  const inputField = getByTestId("input");
  const outputField = getByTestId("output-field");
  const submitButton = getByTestId("submit-button");

  fireEvent.change(inputField, {
    target: { value: "//[#]\n2#5" }
  });

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe("7");

  fireEvent.change(inputField, {
    target: { value: "//[@,#]\n2@,#ff@,#100" }
  });

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe("102");

  fireEvent.change(inputField, {
    target: { value: "//[***]\n11***22***33" }
  });

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe("66");

  fireEvent.change(inputField, {
    target: { value: "//[*][!!][r9r]\n11r9r22*hh*33!!44" }
  });

  await fireEvent.click(submitButton);
  expect(outputField.textContent).toBe("110");
});
