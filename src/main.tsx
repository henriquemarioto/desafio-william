import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Providers from "./providers";
import GlobalStyled from "./styles/global";
import theme from "./styles/theme";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Providers>
      <App />
    </Providers>

    <Toaster />
    <GlobalStyled />
  </ThemeProvider>
);
