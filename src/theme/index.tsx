import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { trTR } from "@mui/material/locale";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: "#2A59FE",
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
            },
          },
        },
      },
    },
    trTR
  );

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
