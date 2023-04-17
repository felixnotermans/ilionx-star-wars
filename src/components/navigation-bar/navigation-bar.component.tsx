import React from "react";
import "./navigation-bar.styling.scss";
import { Link } from "react-router-dom";
import LinkComponent from "../link/link.component";
import FlexComponent from "../flex/flex.component";

const NavigationBarComponent = () => {
  return (
    <div className="nav">
      <FlexComponent gap={20} flex={1} alignItems="center">
        <img className="logo" src={`${process.env.PUBLIC_URL}/images/starwars-logo.png`} />
        <LinkComponent to={"/"} relative={"path"}>
          Characters
        </LinkComponent>
        <LinkComponent to={"planets"}>Planets</LinkComponent>
      </FlexComponent>
    </div>
  );
};

export default NavigationBarComponent;
