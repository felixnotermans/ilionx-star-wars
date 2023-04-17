import React, { PropsWithChildren } from "react";
import "./button.styling.scss";

interface IProps extends PropsWithChildren {
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ButtonComponent = (props: IProps) => {
  return (
    <button {...props.attributes} className={[props.attributes?.className, "button"].join(" ")}>
      {props.children}
    </button>
  );
};

export default ButtonComponent;
