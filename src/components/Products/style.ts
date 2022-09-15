import { colorTheme } from "../../themes/rootTheme";

export const styles = {
  productsWrapper: {
    height: "100vh",
    backgroundColor: colorTheme.palette.secondary.main,
  },
  productsBlock: {
    borderRadius: "16px",
    maxWidth: "1400px",
    marginLeft: "280px",
    paddingTop: "25px",
  },
  productsTittle: {
    pb: 3,
    fontSize: 30,
  },
  productsTable: {
    height: 720,
    background: "white",
    boxShadow: "5px 6px 6px -4px rgba(0, 0, 0, 0.1)",
  },
  productsTableToolbar: {
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
  },
  productsTableButtonsGroup: {
    display: "flex",
    gap: 3,
  },
  productsButton: {
    color: "white",
  },
};
