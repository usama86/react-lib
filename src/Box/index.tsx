import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { BoxComponentProps } from "../../stories/Box/Box";

export function BoxComponent({ children, ...otherProps }: BoxComponentProps) {
  return <Box {...otherProps}>{children}</Box>;
}

BoxComponent.defaultProps = {
  children: <></>,
};
