import { Text } from "./styles";
import { styled } from "@stitches/react";
const Button = styled("button", {
  appearance: "none",
  border: "none",
  height: 25,
  fontSize: 13,
  borderRadius: "24px",

  variants: {
    variant: {
      gray: {
        backgroundColor: "Gainsboro",
        "&:hover": {
          backgroundColor: "LightGray",
        },
      },
      purple: {
        backgroundColor: "BlueViolet",
        "&:hover": {
          backgroundColor: "DarkViolet",
        },
      },
    },
  },

  defaultVariants: {
    variant: "gray",
  },
});
const Test = () => <Button variant={"purple"}>oi</Button>;
export default Test;
