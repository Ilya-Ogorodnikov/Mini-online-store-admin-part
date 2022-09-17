import { colorTheme } from "../../themes/rootTheme";

export const styles = {
  buttonsGroup: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    justifyContent: "center",
    width: "100%",
  },
  buttonEdit: {
    background: colorTheme.palette.primary.light,
    "&:hover": {
      background: colorTheme.palette.primary.light,
      transform: "scale(1.1)",
    },
  },
  buttonDelete: {
    background: colorTheme.palette.primary.contrastText,
    "&:hover": {
      background: colorTheme.palette.primary.contrastText,
      transform: "scale(1.1)",
    },
  },
  buttonIcon: {
    fontSize: 30,
    color: "white",
  },
};
