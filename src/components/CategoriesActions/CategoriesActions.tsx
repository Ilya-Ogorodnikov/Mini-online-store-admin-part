import { FC, useState } from "react";
import { Box, Fab } from "@mui/material";
import { Edit, DeleteForever } from "@mui/icons-material";
import { ChangeCategory } from "..";
import { useActions } from "../../hooks/useActions";
import { ICategoriesActions } from "../../models";
import { styles } from "./style";

const CategoriesActions: FC<ICategoriesActions> = ({ row }) => {
  const { changeActiveCategory } = useActions();
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
        onClick={() => changeActiveCategory(row._id, !row.isDelete)}
      >
        <DeleteForever sx={styles.buttonIcon} />
      </Fab>

      {openModalEdit && (
        <ChangeCategory
          idCategory={row._id}
          titleCategory={row.title}
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
        />
      )}
    </Box>
  );
};

export default CategoriesActions;
