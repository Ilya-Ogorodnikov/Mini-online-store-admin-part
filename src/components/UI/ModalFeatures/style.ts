import { colorTheme } from "../../../themes/rootTheme";

export const styles = {
  button: {
    color: colorTheme.palette.secondary.main,
    mt: 1,
    ":hover": {
      backgroundColor: colorTheme.palette.primary.dark,
    }
  }
};
