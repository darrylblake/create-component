import React from "react";
import { render } from "@testing-library/react";
import { ExampleComponent } from "./ExampleComponent";

it("should render correctly", () => {
  const { container } = render(<ExampleComponent>Children</ExampleComponent>);
});
