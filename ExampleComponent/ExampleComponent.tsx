import React from "react";
import style from "./ExampleComponent.module.scss";

type ExampleComponentProps = {
  children: React.ReactNode;
};

export const ExampleComponent = ({ children }: ExampleComponentProps) => {
  return <div className={style.container}>{children}</div>;
};
