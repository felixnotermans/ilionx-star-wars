import React, { CSSProperties, PropsWithChildren, useMemo } from "react";
import "./grid.styling.scss";

const GridComponent = (props: PropsWithChildren) => {
  return <div className={"grid"}>{props.children}</div>;
};

export default GridComponent;
