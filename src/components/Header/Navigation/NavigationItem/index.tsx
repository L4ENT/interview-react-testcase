import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'


type NavigationItemProps = React.PropsWithChildren & {
  to: string;
  icon?: React.ReactNode
};

// TODO: Реализовать Navigation чтобы можно было прокидывать NavigationItem
function NavigationItem({ children, to, icon }: NavigationItemProps) {
  return (
    <Link to={to}>
      <span className="navigation-item__icon">{icon}</span>
      <span className="navigation-item__text">{children}</span>
    </Link>
  );
}

export default NavigationItem;
