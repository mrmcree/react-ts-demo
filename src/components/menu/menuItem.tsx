import React from "react";
// @ts-ignore
import classnames from "classnames";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const classes = classnames("menu-item", className, {
    "is-disabled": disabled,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};
export default MenuItem;
