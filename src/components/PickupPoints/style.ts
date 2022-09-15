import { colorTheme } from "../../themes/rootTheme";

export const styles = {
  categotiesWrapper: {
    height: "100vh",
    backgroundColor: colorTheme.palette.secondary.main,
  },
  categotiesBlock: {
    borderRadius: "16px",
    maxWidth: "1400px",
    marginLeft: "280px",
    paddingTop: "25px",
  },
  categotiesTittle: {
    pb: 3,
    fontSize: 30,
  },
  categoriesTable: {
    height: 720,
    background: "white",
    boxShadow: "5px 6px 6px -4px rgba(0, 0, 0, 0.1)",
  },
  categoriesTableToolbar: {
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
  },
  categoriesTableButtonsGroup: {
    display: "flex",
    gap: 3,
  },
  categoriesButton: {
    color: "white",
  },
};
