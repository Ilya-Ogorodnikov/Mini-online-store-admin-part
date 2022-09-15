import { FC, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { AddPickupPoint } from "..";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IRowId } from "../../models";
import { columnspickupPoints } from "../../constants";
import { styles } from "./style";

const PickupPoints: FC = () => {
  const [showModalAddPickupPoint, setShowModalAddPickupPoint] = useState(false);
  const [disabledButton, setDisabledButton] = useState({
    activePickupPoints: true,
    inActivePickupPoints: false,
  });
  const { pickupPoints, loading } = useTypedSelector(
    (state) => state.pickupPoints
  );
  const { fetchPickupPoints } = useActions();

  useEffect(() => {
    fetchPickupPoints();
  }, []);

  const hadleClickActivePickupPoints = () => {
    fetchPickupPoints("true");
    setDisabledButton({
      inActivePickupPoints: false,
      activePickupPoints: true,
    });
  };

  const hadleClickInActivePickupPoints = () => {
    fetchPickupPoints("false");
    setDisabledButton({
      activePickupPoints: false,
      inActivePickupPoints: true,
    });
  };

  return (
    <>
      <Box sx={styles.categotiesWrapper}>
        <Box sx={styles.categotiesBlock}>
          <Typography sx={styles.categotiesTittle}>Пункты выдачи</Typography>

          <DataGrid
            sx={styles.categoriesTable}
            getRowId={(row: IRowId) => row._id}
            rows={pickupPoints}
            columns={columnspickupPoints}
            pageSize={10}
            loading={loading}
            components={{
              Toolbar: () => (
                <GridToolbarContainer sx={styles.categoriesTableToolbar}>
                  <Box sx={styles.categoriesTableButtonsGroup}>
                    <Button
                      variant="contained"
                      sx={styles.categoriesButton}
                      disabled={disabledButton.activePickupPoints}
                      onClick={hadleClickActivePickupPoints}
                    >
                      Активные
                    </Button>

                    <Button
                      variant="contained"
                      sx={styles.categoriesButton}
                      disabled={disabledButton.inActivePickupPoints}
                      onClick={hadleClickInActivePickupPoints}
                    >
                      Неактивные
                    </Button>
                  </Box>

                  <Button
                    variant="contained"
                    sx={styles.categoriesButton}
                    onClick={() => setShowModalAddPickupPoint(true)}
                  >
                    Добавить
                  </Button>
                </GridToolbarContainer>
              ),
            }}
          />
        </Box>
      </Box>

      {showModalAddPickupPoint && (
        <AddPickupPoint
          showModalAddPickupPoint={showModalAddPickupPoint}
          setShowModalAddPickupPoint={setShowModalAddPickupPoint}
        />
      )}
    </>
  );
};

export default PickupPoints;
