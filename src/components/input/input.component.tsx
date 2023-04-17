import React, { PropsWithChildren } from "react";
import "./input.styling.scss";

interface IProps extends PropsWithChildren {
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputComponent = (props: IProps) => {
  return (
    <input {...props.attributes} className={[props.attributes?.className, "input"].join(" ")}>
      {props.children}
    </input>
  );
};

export default InputComponent;
