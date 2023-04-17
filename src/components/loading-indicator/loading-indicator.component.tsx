import React from "react";
import "./loading-indicator.styling.scss";
import FlexComponent from "../flex/flex.component";

const LoadingIndicatorComponent = () => {
  return (
    <FlexComponent justifyContent="center">
      <div className="loading-indicator"></div>
    </FlexComponent>
  );
};

export default LoadingIndicatorComponent;
