import React from "react";
import { render } from "@testing-library/react";
import { ExampleComponent } from "./ExampleComponent";

it("should render correctly", () => {
  const { getByText } = render(<ExampleComponent>Children</ExampleComponent>);
  expect(getByText("Children")).toBeInTheDocument();
});
