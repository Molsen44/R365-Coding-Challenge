import React from "react";
import Challenge6 from "./";
import { render, fireEvent } from "@testing-library/react";

test("Support Single Custom Delimiter", async () => {
  const { getByTestId } = render(<Challenge6 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "//#\n2#6" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("8");

  fireEvent.change(inField, {
    target: { value: "//,\n10,ff,100" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("110");
});

test("Incorrect Delimiter Format", async () => {
  const { getByTestId } = render(<Challenge6 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "//#1#5" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("0");

  fireEvent.change(inField, {
    target: { value: "//##\n1#ff#100" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("0");
});

test("Still support all previous formats", async () => {
  const { getByTestId } = render(<Challenge6 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "//#\n2#5,5,3" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("15");

  fireEvent.change(inField, {
    target: { value: "//@\n2@ff\n100,20@" }
  });

  await fireEvent.click(subinfo);
  expect(outField.textContent).toBe("122");
});
