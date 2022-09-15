import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  List, 
  ListItem,
  Typography,
} from "@mui/material";
import {
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FeatureFields, ModalActions, ModalForm, ModalWindow } from "..";
import { IProducts, IEditProductProps } from "../../models";
import { ErrorActionTypes } from "../../models/error";
import { schemaForProductsEditing } from "../../helpers/validation";
import { useActions } from "../../hooks/useActions";
import { BACK_URL } from "../../constants";

const ChangeProduct: FC<IEditProductProps> = ({
  productData,
  openModalEdit,
  setOpenModalEdit,
}) => {
  const dispatch = useDispatch();
  const { updateOneProduct, fetchCategories } = useActions();
  const { control, handleSubmit, register } = useForm<IProducts>({
    resolver: yupResolver(schemaForProductsEditing),
    defaultValues: {
      title: productData.title,
      price: productData.price,
      description: productData.description,
      quantity: productData.quantity.toString(),
      category: productData.category,
      features: productData.features
    },
  });

  const { errors } = useFormState({
    control,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSub: SubmitHandler<IProducts> = (data) => {    
    if (data.images.length > 3) {
      dispatch({
        type: ErrorActionTypes.GENERIC_ERROR,
        payload: "Можно загрузить не больше 3 картинок",
      });
      return;
    }

    const updatedProduct = new FormData();
    updatedProduct.append("_id", productData._id);
    updatedProduct.append("title", data.title);
    updatedProduct.append("description", data.description);
    updatedProduct.append("price", data.price.toString());
    data.features.forEach((item, index)=> {
      updatedProduct.append(`features[${index}][name]`, item.name);
      updatedProduct.append(`features[${index}][description]`, item.description);
    })
    if (data.category) {
      updatedProduct.append("category", data.category);
    }
    if (data.quantity) {
      updatedProduct.append("quantity", data.quantity.toString());
    }
    if (data.images.length > 0) {
      for (const key in data.images) {
        updatedProduct.append("images", data.images[key]);
      }
    }

    updateOneProduct(updatedProduct);
    setOpenModalEdit(false);
  };

  return (
    <ModalWindow
      open={openModalEdit}
      close={() => setOpenModalEdit(false)}
      modalTitle="Изменить категорию"
    >
      <form onSubmit={handleSubmit(onSub)}>
        <Box sx={{ display: "flex", gap: 10 }}>
          <ModalForm 
            control={control}
            errors={errors}
          />

          <Box sx={{ display: "flex", flexDirection: "column", width: 310 }}>
            <List sx={{ display: 'flex', gap: 0 }}>
              {productData.images.map((item, index) => (
                <ListItem key={index}>
                  <img 
                    src={BACK_URL + item} 
                    alt="preview"
                    style={{ width: '75px', height: 'auto' }} 
                  />
                </ListItem>
              ))}
            </List>
            
            <TextField
              fullWidth
              type="file"
              inputProps={{ multiple: true }}
              {...register("images", { maxLength: 3 })}
              sx={{ marginBottom: "15px", marginTop: "7px" }}
              error={!!errors.category?.message}
            />
            
            {productData.features && productData.features.map((item, index) => (
              <Box key={item.id}>
                <Typography sx={{ mt: 1 }}>
                  {`Изменить ${index + 1}ю характеристику:`}
                </Typography>

                <FeatureFields 
                  control={control}
                  index={index}
                  item={item}
                />
              </Box>
            ))}
          </Box>
        </Box>
 
        <ModalActions 
          onClickHandler={() => setOpenModalEdit(false)}
        />
      </form>
    </ModalWindow>
  );
};

export default ChangeProduct;
