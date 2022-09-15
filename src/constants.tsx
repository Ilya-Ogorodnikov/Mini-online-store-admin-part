import moment from "moment";
import { GridCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import {
  CategoriesActions,
  CategoryNameFinder,
  PickupPointsActions,
  ProductsActions,
} from "./components";
import { INewProductLeftValuesProps } from "./models";

const IS_PASSWORD_VALID = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;

const REQUIRED_TEXT = "Поле обязательно для заполнения";

const BACK_URL = 'http://localhost:8010/';

const IS_COORDINATES_VALID =
  /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)/;

const IS_OPEN_HOURS_VALID =
  /([01]?[0-9]|2[0-3]):[0-5][0-9]-([01]?[0-9]|2[0-3]):[0-5][0-9]/;

const IS_NOT_EMPTY_STRING = /^(?!\s*$).+/;

const IS_NUMBER = /^\d+$/;

const MAX_QUANTITY = /^(0?[1-9]|[1-9][0-9])$/;

const NOT_EMPTY_STRING_MESSAGE = "Строка не должна быть пустой";

const WITHOUT_SPACES_MESSAGE = "Это поле не должно содержать пробелы";

const REQUIRED_FIELD_MESSAGE = "Это поле обязателено для заполнения";

const ONLY_NUMBERS_MESSAGE = "Это поле должно содержать только числа";

const NUMBER_RANGE_MESSAGE = "Поле должно содержать числа в диапозоне от 1 до 99";

const navLinks = [
  {
    to: "/",
    title: "Аналитика",
  },
  {
    to: "/categories",
    title: "Категории",
  },
  {
    to: "/products",
    title: "Товары",
  },
  {
    to: "/purchases",
    title: "Покупки",
  },
  {
    to: "/pickup-points",
    title: "Пункты выдачи",
  },
];

const columnsCategories = [
  {
    field: "_id",
    headerName: "ID",
    width: 220,
  },
  {
    field: "title",
    headerName: "Title",
    width: 180,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 180,
    renderCell: (params: GridValueGetterParams) =>
      moment(params.row.createdAt).format("DD.MM.YYYY HH:MM"),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
    renderCell: (params: GridCellParams) => <CategoriesActions {...params} />,
  },
];

const columnspickupPoints = [
  {
    field: "_id",
    headerName: "ID",
    width: 220,
  },
  {
    field: "title",
    headerName: "Title",
    width: 220,
  },
  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
  {
    field: "coordinates",
    headerName: "Coordinates",
    width: 180,
  },
  {
    field: "openHours",
    headerName: "Open hours",
    width: 100,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
    renderCell: (params: GridCellParams) => <PickupPointsActions {...params} />,
  },
];

const columnsProducts = [
  {
    field: "_id",
    headerName: "ID",
    width: 220,
  },
  {
    field: "title",
    headerName: "Title",
    width: 220,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 150,
    renderCell: (params: GridValueGetterParams) =>
      moment(params.row.createdAt).format("DD.MM.YYYY HH:MM"),
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
  {
    field: "category",
    headerName: "Category",
    width: 180,
    renderCell: (params: GridCellParams) => <CategoryNameFinder {...params} />,

  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 80,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params: GridCellParams) => <ProductsActions {...params} />,
  },
];

const newProductLeftValues: INewProductLeftValuesProps[] = [
  {
    name: "title",
    label: "Наименование"
  },
  {
    name: "price",
    label: "Цена"
  },
  {
    name: "description",
    label: "Описание"
  },
  {
    name: "quantity",
    label: "Количество"
  },
];

export {
  IS_PASSWORD_VALID,
  REQUIRED_TEXT,
  navLinks,
  columnsCategories,
  columnspickupPoints,
  IS_COORDINATES_VALID,
  IS_OPEN_HOURS_VALID,
  columnsProducts,
  IS_NOT_EMPTY_STRING,
  IS_NUMBER,
  BACK_URL,
  MAX_QUANTITY,
  newProductLeftValues,
  NOT_EMPTY_STRING_MESSAGE,
  WITHOUT_SPACES_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
  ONLY_NUMBERS_MESSAGE,
  NUMBER_RANGE_MESSAGE
};
