import * as yup from "yup";
import {
  IS_PASSWORD_VALID,
  REQUIRED_TEXT,
  IS_COORDINATES_VALID,
  IS_OPEN_HOURS_VALID,
  IS_NOT_EMPTY_STRING,
  IS_NUMBER,
  MAX_QUANTITY,
  NOT_EMPTY_STRING_MESSAGE,
  WITHOUT_SPACES_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
  ONLY_NUMBERS_MESSAGE,
  NUMBER_RANGE_MESSAGE
} from "../constants";

const schemaForSignIn = yup.object().shape({
  email: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .email("Email должен быть вида aaaaa.bb@gmail.com или aaaaa@gmail.com"),
  password: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .matches(
      IS_PASSWORD_VALID,
      "Пароль должен содержать минимум 6 латинских символов, включая одну цифру"
    ),
});
const schemaForCategory = yup.object().shape({
  title: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .min(5, "Поле должно содержать минимум 5 символов"),
});
const schemaForPointSchema = yup.object().shape({
  title: yup.string().trim().required(REQUIRED_TEXT),
  address: yup.string().trim().required(REQUIRED_TEXT),
  coordinates: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .matches(
      IS_COORDINATES_VALID,
      'Координаты должны иметь формат: "-90...+90, -180...+180"'
    ),
  openHours: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .matches(
      IS_OPEN_HOURS_VALID,
      'Часы работы должны иметь формат: "HH:MM-HH:MM"'
    ),
});

const schemaForProducts = yup.object().shape({
  title: yup
    .string()
    .matches(IS_NOT_EMPTY_STRING, NOT_EMPTY_STRING_MESSAGE)
    .strict()
    .trim(WITHOUT_SPACES_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  price: yup
    .string()
    .matches(IS_NUMBER, ONLY_NUMBERS_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  description: yup
    .string()
    .matches(IS_NOT_EMPTY_STRING, NOT_EMPTY_STRING_MESSAGE)
    .strict()
    .trim(WITHOUT_SPACES_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  category: yup
    .string()
    .matches(IS_NOT_EMPTY_STRING, NOT_EMPTY_STRING_MESSAGE)
    .required(REQUIRED_FIELD_MESSAGE),
  quantity: yup
    .string()
    .matches(MAX_QUANTITY, NUMBER_RANGE_MESSAGE),
});

const schemaForProductsEditing = yup.object().shape({
  title: yup
    .string()
    .matches(IS_NOT_EMPTY_STRING, NOT_EMPTY_STRING_MESSAGE)
    .strict()
    .trim(WITHOUT_SPACES_MESSAGE),
  price: yup
    .string()
    .matches(IS_NUMBER, ONLY_NUMBERS_MESSAGE),
  description: yup
    .string()
    .matches(IS_NOT_EMPTY_STRING, NOT_EMPTY_STRING_MESSAGE)
    .strict()
    .trim(WITHOUT_SPACES_MESSAGE),
  category: yup
    .string()
    .matches(IS_NOT_EMPTY_STRING, NOT_EMPTY_STRING_MESSAGE),
  quantity: yup
    .string()
    .matches(MAX_QUANTITY, NUMBER_RANGE_MESSAGE),
});

export {
  schemaForSignIn,
  schemaForCategory,
  schemaForPointSchema,
  schemaForProducts,
  schemaForProductsEditing,
};
