import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import HeaderBanner from "../HeaderBanner";

test("paragraph render Super text", () => {
  const { getByTestId } = render(<HeaderBanner />);
  const superEL = getByTestId("super");

  expect(superEL.textContent).toBe("Super");
});

test("paragraph render Shop text", () => {
  const { getByTestId } = render(<HeaderBanner />);
  const shopEl = getByTestId("shop");

  expect(shopEl.textContent).toEqual("\u00a0Shop");
});
