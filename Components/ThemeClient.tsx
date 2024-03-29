"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "./Theme";

interface IProps {
  children: ReactNode;
}

const ThemeClient = ({ children }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeClient;
