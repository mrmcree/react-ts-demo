import React from "react";
// @ts-ignore
import classnames from "classnames";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children } = props;
  const classes = classnames("National-menu", className, {
    "menu-vertaical": mode === "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};
Menu.defaultProps = {
  mode: "vertical",
  defaultIndex: 0,
};
export default Menu;
