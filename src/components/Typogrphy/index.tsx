import React, { memo } from "react";
import "./styles.scss";
import { TypographyProps } from "./types";

const variantToKind: {
  [key in Required<TypographyProps>["variant"]]: Required<TypographyProps>["kind"];
} = {
  title: "h1",
  subtitle: "h2",
  body1: "p",
  body2: "p",
};

const Typography = memo(function ({
  children,
  kind,
  variant,
  color,
  className
}: TypographyProps) {
  let T = kind ?? "span";

  if (!kind && variant) {
    T = variantToKind[variant];
  }

  return (
    <T
      className={`ty` + (variant ? ` ty--${variant}` : "") + (className ? ` ${className}` : "")}
      style={{ color: color }}
    >
      {children}
    </T>
  );
});

export default Typography;
