import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./mui.theme";

type IProps = {
  children: ReactNode;
  variant?: any;
  [key: string]: any; // Allow any other additional props
};

export function TypographyComponent({
  children,
  variant,
  ...otherProps
}: IProps) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} {...otherProps}>
        {children}
      </Typography>
    </ThemeProvider>
  );
}
