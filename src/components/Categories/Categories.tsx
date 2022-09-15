import { FC, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { AddCategory } from "..";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { IRowId } from "../../models";
import { columnsCategories } from "../../constants";
import { styles } from "./style";

const Categories: FC = () => {
  const [showModalAddCategory, setShowModalAddCategory] = useState(false);
  const [disabledButton, setDisabledButton] = useState({
    activeCategories: true,
    inActiveCategories: false,
  });
  const { categories, loading } = useTypedSelector((state) => state.category);
  const { fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  const hadleClickActiveCategories = () => {
    fetchCategories("false");
    setDisabledButton({
      inActiveCategories: false,
      activeCategories: true,
    });
  };

  const hadleClickInActiveCategories = () => {
    fetchCategories("true");
    setDisabledButton({
      activeCategories: false,
      inActiveCategories: true,
    });
  };

  return (
    <>
      <Box sx={styles.categotiesWrapper}>
        <Box sx={styles.categotiesBlock}>
          <Typography sx={styles.categotiesTittle}>Категории</Typography>

          <DataGrid
            sx={styles.categoriesTable}
            getRowId={(row: IRowId) => row._id}
            rows={categories}
            columns={columnsCategories}
            pageSize={10}
            loading={loading}
            components={{
              Toolbar: () => (
                <GridToolbarContainer sx={styles.categoriesTableToolbar}>
                  <Box sx={styles.categoriesTableButtonsGroup}>
                    <Button
                      variant="contained"
                      sx={styles.categoriesButton}
                      disabled={disabledButton.activeCategories}
                      onClick={hadleClickActiveCategories}
                    >
                      Активные
                    </Button>

                    <Button
                      variant="contained"
                      sx={styles.categoriesButton}
                      disabled={disabledButton.inActiveCategories}
                      onClick={hadleClickInActiveCategories}
                    >
                      Неактивные
                    </Button>
                  </Box>

                  <Button
                    variant="contained"
                    sx={styles.categoriesButton}
                    onClick={() => setShowModalAddCategory(true)}
                  >
                    Добавить
                  </Button>
                </GridToolbarContainer>
              ),
            }}
          />
        </Box>
      </Box>

      {showModalAddCategory && (
        <AddCategory
          showModalAddCategory={showModalAddCategory}
          setShowModalAddCategory={setShowModalAddCategory}
        />
      )}
    </>
  );
};

export default Categories;
