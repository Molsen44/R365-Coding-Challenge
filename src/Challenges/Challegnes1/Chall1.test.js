test("Correct String Format", () => {
  const { getByTestId } = render(<Challenge1 />);

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
  const { getByTestId } = render(<Challenge1 />);

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
  const { getByTestId } = render(<Challenge1 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "8" }
  });

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("8");
});
test("Single Negative Input", () => {
  const { getByTestId } = render(<Challenge1 />);

  const inField = getByTestId("input");
  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.change(inField, {
    target: { value: "5,-3" }
  });
  1;
  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("2");
});

test("Empty Input", () => {
  const { getByTestId } = render(<Challenge1 />);

  const outField = getByTestId("output");
  const subinfo = getByTestId("submit");

  fireEvent.click(subinfo);

  expect(outField.textContent).toBe("0");
});
