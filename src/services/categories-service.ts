import { api } from "../http";

const getAllCategories = (isDelete: string) =>
  api.get(`/admin/categories/all?isDelete=${isDelete}`);

const addCategory = (title: string) =>
  api.post("/admin/categories/add", { title });

const changeReplaceCategory = (id: string, isDelete: boolean) =>
  api.patch("/admin/categories/toggleIsDelete", { id, isDelete });

const changeTitleCategory = (id: string, title: string) =>
  api.patch("/admin/categories/edit", { id, title });

export {
  getAllCategories,
  addCategory,
  changeReplaceCategory,
  changeTitleCategory,
};
