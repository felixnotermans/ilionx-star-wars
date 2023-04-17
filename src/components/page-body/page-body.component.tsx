import React, { PropsWithChildren, ReactNode } from "react";
import "./page-body.styling.scss";

const PageBodyComponent = (props: PropsWithChildren) => {
  return <div className="page-body">{props.children}</div>;
};

export default PageBodyComponent;
