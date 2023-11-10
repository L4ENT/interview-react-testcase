export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type TypographyProps = React.PropsWithChildren & {
  kind?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "title" | "subtitle" | "body1" | "body2";
  color?: Color;
  className?: string,
  align?: "left" | "right" | "center"
};
