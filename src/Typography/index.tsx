import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./mui.theme";
import { TypographyProps } from "../../stories/Typography/Typography";

export function TypographyComponent({
  children,
  variant,
  ...otherProps
}: TypographyProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} {...otherProps}>
        {children}
      </Typography>
    </ThemeProvider>
  );
}
