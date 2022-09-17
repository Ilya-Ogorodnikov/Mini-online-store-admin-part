import { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalActions, ModalWindow, ModalForm, ModalFeatures } from "..";
import { schemaForProducts } from "../../helpers/validation";
import { IAddProductProps, IProducts } from "../../models";
import { useActions } from "../../hooks/useActions";
import { ErrorActionTypes } from "../../models/error";

const AddProduct: FC<IAddProductProps> = ({
  showModalAddProduct,
  setShowModalAddProduct,
}) => {
  const dispatch = useDispatch();
  const { addOneProduct, fetchCategories } = useActions();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IProducts, "">({
    resolver: yupResolver(schemaForProducts),
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit: SubmitHandler<IProducts> = (data) => {
    if (data.images.length === 0 || data.images.length > 3) {
      dispatch({
        type: ErrorActionTypes.GENERIC_ERROR,
        payload: "Необходима минимум 1 картинка, но не больше 3",
      });
      return;
    }

    const newProduct = new FormData();
    newProduct.append("title", data.title);
    newProduct.append("description", data.description);
    newProduct.append("price", data.price.toString());
    newProduct.append("category", data.category);
    data.features.forEach((item, index)=> {
      newProduct.append(`features[${index}][name]`, item.name);
      newProduct.append(`features[${index}][description]`, item.description);
    })
    if (data.quantity) {
      newProduct.append("quantity", data.quantity.toString());
    }
    if (data.images.length > 0) {
      for (const key in data.images) {
        newProduct.append("images", data.images[key]);
      }
    }

    addOneProduct(newProduct);
    setShowModalAddProduct(false);
  };

  return (
    <ModalWindow
      open={showModalAddProduct}
      close={() => setShowModalAddProduct(false)}
      modalTitle="Добавить нового товара"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", gap: 10 }}>
          <ModalForm 
            control={control}
            errors={errors}
          />

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            width: 310 
          }}>
            <TextField
              fullWidth
              type="file"
              inputProps={{ multiple: true, accept: "image/*" }}
              {...register("images", { maxLength: 3 })}
              error={!!errors.category?.message}
              sx={{ marginBottom: "15px" }}
            />

            <Typography>Добавить характеристики товара:</Typography>
          
            <ModalFeatures 
              control={control}
            />
          </Box>
        </Box>

        <ModalActions 
          onClickHandler={() => setShowModalAddProduct(false)}
        />
      </form>
    </ModalWindow>
  );
};

export default AddProduct;
