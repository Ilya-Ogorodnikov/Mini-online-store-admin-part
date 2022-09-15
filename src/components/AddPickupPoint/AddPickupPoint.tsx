import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ModalWindow } from "..";
import { useActions } from "../../hooks/useActions";
import { IAddPickupPoint, IPickupPoints } from "../../models";
import { schemaForPointSchema } from "../../helpers/validation";
import { styles } from "./style";

const AddPickupPoint: FC<IAddPickupPoint> = ({
  showModalAddPickupPoint,
  setShowModalAddPickupPoint,
}) => {
  const { addOnePickupPoint } = useActions();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPickupPoints>({
    resolver: yupResolver(schemaForPointSchema),
    defaultValues: {
      title: "",
      address: "",
      coordinates: "",
      openHours: "",
    },
  });

  const onSub: SubmitHandler<IPickupPoints> = (data) => {
    const { title, address, coordinates, openHours } = data;
    addOnePickupPoint(title, address, coordinates, openHours);
    setShowModalAddPickupPoint(false);
  };

  return (
    <ModalWindow
      open={showModalAddPickupPoint}
      close={() => setShowModalAddPickupPoint(false)}
      modalTitle="Добавить новый пункт выдачи"
    >
      <form onSubmit={handleSubmit(onSub)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              label="Наименование пункта выдачи"
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

        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextField
              label="Адрес пункта выдачи"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.address?.message}
              helperText={errors.address?.message}
              sx={{ paddingBottom: 2 }}
            />
          )}
        />

        <Controller
          control={control}
          name="coordinates"
          render={({ field }) => (
            <TextField
              label="Координаты пункта выдачи"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.coordinates?.message}
              helperText={errors.coordinates?.message}
              sx={{ paddingBottom: 2 }}
            />
          )}
        />

        <Controller
          control={control}
          name="openHours"
          render={({ field }) => (
            <TextField
              label="Часы работы пункта выдачи"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.openHours?.message}
              helperText={errors.openHours?.message}
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
            onClick={() => setShowModalAddPickupPoint(false)}
          >
            Отмена
          </Button>
        </Box>
      </form>
    </ModalWindow>
  );
};

export default AddPickupPoint;
