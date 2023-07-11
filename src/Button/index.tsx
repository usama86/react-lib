import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import TypographyComponent from "../Typography";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  [key: string]: any; // Allow any other additional props
  variant?: any;
}

export const ButtonComponent = ({
  children,
  onClick,
  variant,
  ...otherProps
}: ButtonProps) => {
  return (
    <Button onClick={onClick} {...otherProps}>
      {variant ? (
        <TypographyComponent variant={variant} component="p">
          {children}
        </TypographyComponent>
      ) : (
        children
      )}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  children: <></>,
};
