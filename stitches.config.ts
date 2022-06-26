// stitches.config.ts
import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
    colors: {
      text: "black",
      background: "white",
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
    },
  },
});

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({
  colors: {
    text: "white",
    background: "black",
  },
});

const GlobalStyles = globalCss({
  body: {
    //we can call the color token values with the
    //$ prefix in a string
    background: "$background",
    color: "$text",
  },
});

//we can declare the styles here or in pages/_app.tsx
GlobalStyles();
