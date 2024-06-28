import React from "react";

type ExampleComponentProps = {
  children: React.ReactNode;
};

export const ExampleComponent = ({ children }: ExampleComponentProps) => {
  return <div>{children}</div>;
};
