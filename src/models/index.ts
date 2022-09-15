import { ReactNode } from 'react';
import { Control, DeepRequired, FieldErrorsImpl } from 'react-hook-form';

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface ICategories {
  createdAt: string;
  isDelete: boolean;
  title: string;
  _id: string;
}

export interface IRowId {
  _id: string;
}

export interface IModalProps {
  open: boolean;
  close: (data: boolean) => void;
  modalTitle: string;
  children: React.ReactNode;
}

export interface ICategory {
  title: string;
}

export interface IAddCategoryProps {
  showModalAddCategory: boolean;
  setShowModalAddCategory: (data: boolean) => void;
}

export interface IEditCategoryProps {
  idCategory: string;
  titleCategory: string;
  openModalEdit: boolean;
  setOpenModalEdit: (data: boolean) => void;
}

export interface ICategoriesActions {
  row: ICategories;
}

export interface IPickupPointsActions {
  row: IPickupPoints;
}

export interface IProductsActions {
  row: IProductFromDB;
}

export interface IPickupPoints {
  address: string;
  coordinates: string;
  isActive: boolean;
  openHours: string;
  title: string;
  _id: string;
}

export interface IAddPickupPoint {
  showModalAddPickupPoint: boolean;
  setShowModalAddPickupPoint: (data: boolean) => void;
}

export interface IEditPickupPointProps {
  row: IPickupPoints;
  openModalEdit: boolean;
  setOpenModalEdit: (data: boolean) => void;
}

export interface IProductFromDB {
  category: string;
  createdAt: string;
  description: string;
  features: IProductFeatures[];
  images: string[];
  isDelete: boolean;
  price: number;
  quantity: number;
  title: string;
  _id: string;
}

export interface IEditProductProps {
  productData: IProductFromDB;
  openModalEdit: boolean;
  setOpenModalEdit: (data: boolean) => void;
}

export interface IAddProductProps {
  showModalAddProduct: boolean;
  setShowModalAddProduct: (data: boolean) => void;
}

export interface IProductFeatures {
  _id?: string;
  id?: string;
  name: string;
  description: string;
}

export interface IProducts {
  _id: string;
  id?: string;
  name: string;
  createdAt?: string;
  isDelete?: boolean;
  title: string;
  price: number;
  description: string;
  category: string;
  images: File[];
  quantity: string;
  features: IProductFeatures[];
}

export interface INewProductLeftValuesProps {
  name: keyof IProducts;
  label: string;
}

export interface IFeatureState {
  featureInputState: boolean;
  onClickHandler: () => void;
}

export interface IModalActions {
  onClickHandler: () => void;
}

export interface IModalForm {
  control: Control<IProducts>;
  errors: FieldErrorsImpl<DeepRequired<IProducts>>;
}

export interface IModalFeatures {
  control: Control<IProducts>;
}

export interface IModalFeaturesFields {
  control: Control<IProducts>;
  index: number;
  item: IProductFeatures;
}

export interface ITextInputProps {
  name: keyof IProducts;
  label: string;
  defaultValue: string;
  control: Control<IProducts>;
  error: boolean;
  helperText: ReactNode;
}

export interface ISelectInputProps {
  name: keyof IProducts;
  control: Control<IProducts>;
  error: boolean;
  array: ICategories[];
}