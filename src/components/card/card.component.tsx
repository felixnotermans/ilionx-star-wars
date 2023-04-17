import React, { HTMLAttributes, PropsWithChildren } from "react";
import "./card.styling.scss";

interface IProps extends PropsWithChildren {
  attributes?: HTMLAttributes<HTMLDivElement>;
}

const CardComponent = (props: IProps) => {
  return (
    <div
      {...props.attributes}
      className={[props.attributes?.className, "card", props.attributes?.onClick && "hover"].join(
        " "
      )}
    >
      {props.children}
    </div>
  );
};

export default CardComponent;
