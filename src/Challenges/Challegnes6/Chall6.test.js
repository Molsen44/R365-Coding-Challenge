import React from "react";
import Challenge6 from ".";
import { render, fireEvent } from "@testing-library/react";

test("Support Single Custom Delimiter", async () => {
  const { getByTestId } = render(<Challenge6 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output-field");
  const subinfo = getByTestId("submit-button");

  fireEvent.change(inField, {
    target: { value: "//#\n2#10" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("12");

  fireEvent.change(inField, {
    target: { value: "//,\n7,ff,150" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("157");
});

test("Incorrect Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge6 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output-field");
  const subinfo = getByTestId("submit-button");

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

test("Still support all previous formats", async () => {
  const { getByTestId } = render(<Challenge6 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output-field");
  const subinfo = getByTestId("submit-button");

  fireEvent.change(inField, {
    target: { value: "//#\n2#5,10" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("17");

  fireEvent.change(inField, {
    target: { value: "//@\n2@ff\n100,10@4" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("116");
});
