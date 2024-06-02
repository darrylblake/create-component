import React from "react";
import { Meta } from "@storybook/react";
import { ExampleComponent } from "./ExampleComponent";

export default {
  title: "ExampleComponent",
  component: ExampleComponent,
} as Meta;

export const Base = () => <ExampleComponent>ExampleComponent</ExampleComponent>;
