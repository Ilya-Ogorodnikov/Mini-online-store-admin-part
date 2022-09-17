import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalWindow } from "..";
import { useActions } from "../../hooks/useActions";
import { ICategory, IEditCategoryProps } from "../../models";
import { schemaForCategory } from "../../helpers/validation";
import { styles } from "./style";

const ChangeCategory: FC<IEditCategoryProps> = ({
  titleCategory,
  openModalEdit,
  setOpenModalEdit,
  idCategory,
}) => {
  const { changeCategory } = useActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({
    resolver: yupResolver(schemaForCategory),
    defaultValues: {
      title: titleCategory,
    },
  });

  const onSub: SubmitHandler<ICategory> = (data) => {
    changeCategory(idCategory, data.title);
    setOpenModalEdit(false);
  };

  return (
    <ModalWindow
      open={openModalEdit}
      close={() => setOpenModalEdit(false)}
      modalTitle="Изменить категорию"
    >
      <form onSubmit={handleSubmit(onSub)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              label="Изменение категории"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.title?.message}
              helperText={errors.title?.message}
              sx={{ paddingBottom: 2 }}
            />
          )}
        />

        <Box sx={styles.EditCategoryButtonsGroup}>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>

          <Button variant="contained" onClick={() => setOpenModalEdit(false)}>
            Отмена
          </Button>
        </Box>
      </form>
    </ModalWindow>
  );
};

export default ChangeCategory;
