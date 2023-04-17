import React, { PropsWithChildren, ReactNode } from "react";
import "./page.styling.scss";
import NavigationBarComponent from "../navigation-bar/navigation-bar.component";

const PageComponent = (props: PropsWithChildren) => {
  return (
    <div className="page">
      <NavigationBarComponent />
      {props.children}
    </div>
  );
};

export default PageComponent;
