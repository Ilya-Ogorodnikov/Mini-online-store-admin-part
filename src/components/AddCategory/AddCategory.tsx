import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ModalWindow } from "..";
import { useActions } from "../../hooks/useActions";
import { IAddCategoryProps, ICategory } from "../../models";
import { schemaForCategory } from "../../helpers/validation";
import { styles } from "./style";

const AddCategory: FC<IAddCategoryProps> = ({
  showModalAddCategory,
  setShowModalAddCategory,
}) => {
  const { addOneCategory } = useActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({
    resolver: yupResolver(schemaForCategory),
    defaultValues: {
      title: "",
    },
  });

  const onSub: SubmitHandler<ICategory> = (data) => {
    addOneCategory(data.title);
    setShowModalAddCategory(false);
  };

  return (
    <ModalWindow
      open={showModalAddCategory}
      close={() => setShowModalAddCategory(false)}
      modalTitle="Добавить новую категорию"
    >
      <form onSubmit={handleSubmit(onSub)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              label="Наименование новой категории"
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

        <Box sx={styles.AddCategoryButtonsGroup}>
          <Button variant="contained" type="submit">
            Сохранить
          </Button>

          <Button
            variant="contained"
            onClick={() => setShowModalAddCategory(false)}
          >
            Отмена
          </Button>
        </Box>
      </form>
    </ModalWindow>
  );
};

export default AddCategory;
