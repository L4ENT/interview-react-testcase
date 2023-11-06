import React from "react";
import './styles.scss'

function Icon({ children }: React.PropsWithChildren) {
  return (
    <div className="icon">
        {children}
    </div>
  );
}

export default Icon;