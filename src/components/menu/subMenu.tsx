import React, { useContext, FuctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.Fc<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const context = useContext(MenuContext);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  return (
    <li className={classes} key={index}>
      <div className="submenu-title"></div>
    </li>
  );
};
