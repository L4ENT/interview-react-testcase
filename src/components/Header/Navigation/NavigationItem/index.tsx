import React from "react";
import { Link } from "react-router-dom";
import Typography from "@/components/Typogrphy";
import "./styles.scss";

type NavigationItemProps = React.PropsWithChildren & {
  to: string;
  icon?: React.ReactNode;
};

function NavigationItem({ children, to, icon }: NavigationItemProps) {
  return (
    <Link to={to}>
      <span className="navigation-item__icon">{icon}</span>
      <Typography className="navigation-item__text" variant="body1">
        {children}
      </Typography>
    </Link>
  );
}

export default NavigationItem;
