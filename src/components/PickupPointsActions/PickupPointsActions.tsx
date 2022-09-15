import { FC, useState } from "react";
import { Box, Fab } from "@mui/material";
import { Edit, DeleteForever } from "@mui/icons-material";
import { ChangePickupPoint } from "..";
import { useActions } from "../../hooks/useActions";
import { IPickupPointsActions } from "../../models";
import { styles } from "./style";

const PickupPointsActions: FC<IPickupPointsActions> = ({ row }) => {
  const { changeActivePickupPoint } = useActions();
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <Box sx={styles.buttonsGroup}>
      <Fab
        size="small"
        sx={styles.buttonEdit}
        onClick={() => setOpenModalEdit(true)}
      >
        <Edit sx={styles.buttonIcon} />
      </Fab>

      <Fab
        size="small"
        sx={styles.buttonDelete}
        onClick={() => changeActivePickupPoint(row._id, !row.isActive)}
      >
        <DeleteForever sx={styles.buttonIcon} />
      </Fab>

      {openModalEdit && (
        <ChangePickupPoint
          row={row}
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
        />
      )}
    </Box>
  );
};

export default PickupPointsActions;
