import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import TypographyComponent from "../Typography";
import { btnStyles } from "./style";
import { ButtonProps } from "../../stories/Button";

export const ButtonComponent = ({
  children,
  onClick,
  variant,
  types,
  backgroundColor,
  size,
  ...otherProps
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={
        types && types === "save"
          ? { ...btnStyles.saveButton, backgroundColor: backgroundColor }
          : { ...btnStyles.cancelButton, backgroundColor: backgroundColor }
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
