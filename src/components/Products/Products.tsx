import { FC, useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { NavBar, AddProduct } from "..";
import { IRowId } from "../../models";
import { columnsProducts } from "../../constants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { styles } from "./style";

const Products: FC = () => {
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const { products, loading } = useTypedSelector(
    (state) => state.product
  );
  const [disabledButton, setDisabledButton] = useState({
    activeProducts: true,
    inActiveProducts: false,
  });
  const { fetchProducts, fetchCategories } = useActions();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const hadleClickActiveProducts = () => {
    fetchProducts(false);
    setDisabledButton({
      inActiveProducts: false,
      activeProducts: true,
    });
  };

  const hadleClickInActiveProducts = () => {
    fetchProducts(true);
    setDisabledButton({
      activeProducts: false,
      inActiveProducts: true,
    });
  };

  return (
    <>
      <NavBar />

      <Box sx={styles.productsWrapper}>
        <Box sx={styles.productsBlock}>
          <Typography sx={styles.productsTittle}>Товары</Typography>

          <DataGrid
            sx={styles.productsTable}
            getRowId={(row: IRowId) => row._id}
            rows={products}
            columns={columnsProducts}
            pageSize={10}
            loading={loading}
            components={{
              Toolbar: () => (
                <GridToolbarContainer sx={styles.productsTableToolbar}>
                  <Box sx={styles.productsTableButtonsGroup}>
                    <Button
                      variant="contained"
                      sx={styles.productsButton}
                      disabled={disabledButton.activeProducts}
                      onClick={hadleClickActiveProducts}
                    >
                      Активные
                    </Button>

                    <Button
                      variant="contained"
                      sx={styles.productsButton}
                      disabled={disabledButton.inActiveProducts}
                      onClick={hadleClickInActiveProducts}
                    >
                      Неактивные
                    </Button>
                  </Box>

                  <Button
                    variant="contained"
                    sx={styles.productsButton}
                    onClick={() => setShowModalAddProduct(true)}
                  >
                    Добавить
                  </Button>
                </GridToolbarContainer>
              ),
            }}
          />
        </Box>
      </Box>
      {showModalAddProduct && (
        <AddProduct
          showModalAddProduct={showModalAddProduct}
          setShowModalAddProduct={setShowModalAddProduct}
        />
      )}
    </>
  );
};

export default Products;
