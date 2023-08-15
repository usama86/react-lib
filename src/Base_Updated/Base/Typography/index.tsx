import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";

type IProps = {
  children: ReactNode;
  variant?: any;
  color?: string;
  [key: string]: any; // Allow any other additional props
};

export default function TypographyComponent({
  children,
  color,
  variant,
  ...otherProps
}: IProps) {
  return (
    <Typography variant={variant} color={color} {...otherProps}>
      {children}
    </Typography>
  );
}

TypographyComponent.defaultProps = {
  children: <></>,
  color: '#121C2B',
  variant: "h4",
};
