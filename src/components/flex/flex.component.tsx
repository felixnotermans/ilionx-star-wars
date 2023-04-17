import React, { CSSProperties, PropsWithChildren, useMemo } from "react";
import "./flex.styling.scss";

interface IProps extends PropsWithChildren {
  flexDirection?: "row" | "column";
  gap?: CSSProperties["gap"];
  flexWrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flex?: CSSProperties["flex"];
}

const FlexComponent = (props: IProps) => {
  const memoizedStyling = useMemo(
    () => ({
      flexDirection: props.flexDirection,
      gap: props.gap,
      flexWrap: props.flexWrap ?? "wrap",
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      flex: props.flex
    }),
    [
      props.alignItems,
      props.flex,
      props.flexWrap,
      props.gap,
      props.justifyContent,
      props.flexDirection
    ]
  );

  return (
    <div className={"flex"} style={memoizedStyling}>
      {props.children}
    </div>
  );
};

export default FlexComponent;
