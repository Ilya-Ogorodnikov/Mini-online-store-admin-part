import { FC, useEffect } from "react";
import { CssBaseline, ThemeProvider, LinearProgress, Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  SignIn,
  Analitics,
  Categories,
  Products,
  Purchases,
  PickupPoints,
  LayoutSnacbar,
  NavBar,
} from "./components";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import { theme } from "./themes/rootTheme";

const App: FC = () => {
  const { authAdmin } = useActions();
  const { isAuth, loading } = useTypedSelector((state) => state.admin);

  useEffect(() => {
    authAdmin();
  }, []);

  if (loading) {
    return (
      <Box sx={{ position: "relative" }}>
        <LinearProgress sx={{ marginTop: "50vh" }}></LinearProgress>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <LayoutSnacbar />

        {isAuth ? (
          <>
            <NavBar />

            <Routes>
              <Route path="/">
                <Route index element={<Analitics />} />
                <Route path="categories" element={<Categories />} />
                <Route path="products" element={<Products />} />
                <Route path="purchases" element={<Purchases />} />
                <Route path="pickup-points" element={<PickupPoints />} />
              </Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="*" element={<SignIn />} />
          </Routes>
        )}
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
