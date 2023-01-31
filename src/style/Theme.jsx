import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const theme = {
  colors: {
    bgGreen: "#034A3D",
    bgLight: "#FFEEE4",
    primary: "#FD8440",
    success: "#5CC58C",
    info: "#1B80B2",
    gray: "#5A5A5A",
    warning: "#EFAF42",
    light: "#FFFFFF",
    dark: "#000000",
  },

  fonts: {
    special: '"Lilita One", sans-serif',
    normal: '"Nunito", sans-serif',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;