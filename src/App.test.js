import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import capitalizeFirstLetter from "./helpers/capitalizeFirstLetter";
import returnImgScale from "./helpers/returnImgScale";

/*UI TESTS*/
test("renders ПОКЕМОНЫ API", () => {
  render(<App />);
  const linkElement = screen.getByText(/ПОКЕМОНЫ API/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders hint", () => {
  render(<App />);
  const linkElement = screen.getByText(/Нажмите на нужное покемона/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders pokemon stats viewer", () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});

/*HELPER FUNCTION TESTS*/
test("testing Capitalized letter", () => {
  const capitalizedWord0 = capitalizeFirstLetter("testing");
  expect(capitalizedWord0).toBe("Testing");

  const capitalizedWord1 = capitalizeFirstLetter("Testing");
  expect(capitalizedWord1).toBe("Testing");

  const capitalizedWord2 = capitalizeFirstLetter(" ");
  expect(capitalizedWord2).toBe(" ");

  const capitalizedWord3 = capitalizeFirstLetter("1");
  expect(capitalizedWord3).toBe("1");
});

test("testing image scale function", () => {
  const imgScale = returnImgScale(20);
  expect(imgScale).toBe("100%");
});
