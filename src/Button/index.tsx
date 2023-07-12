import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { TypographyComponent } from "../Typography";
import { btnStyles } from "./style";
import { ButtonProps } from "../../stories/Button/Button";

export const ButtonComponent = ({
  children,
  onClick,
  variant,
  types,
  backgroundColor,
  size,
  sx,
  ...otherProps
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={
        types && types === "save"
          ? { ...btnStyles.saveButton, backgroundColor: backgroundColor }
          : types === "cancel"
          ? { ...btnStyles.cancelButton, backgroundColor: backgroundColor }
          : sx
      }
      {...otherProps}
      size={size}
    >
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
