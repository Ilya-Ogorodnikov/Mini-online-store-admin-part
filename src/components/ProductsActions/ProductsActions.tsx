import { useState } from "react";
import { Box, Fab } from "@mui/material";
import { Edit, DeleteForever } from "@mui/icons-material";
import { GridCellParams } from "@mui/x-data-grid";
import { ChangeProduct } from "..";
import { useActions } from "../../hooks/useActions";
import { styles } from "./style";

const ProductsActions = (props: GridCellParams) => {
  const { toggleIsDeleteProduct } = useActions();
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
        onClick={() =>
          toggleIsDeleteProduct(props.row._id, !props.row.isDelete)
        }
      >
        <DeleteForever sx={styles.buttonIcon} />
      </Fab>
      
      {openModalEdit && (
        <ChangeProduct
          productData={props.row}
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
        />
      )}
    </Box>
  );
};

export default ProductsActions;
