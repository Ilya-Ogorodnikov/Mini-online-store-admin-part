import { api } from "../http";

const getAllProducts = (isDelete: boolean = false) =>
  api.get(`/admin/products/all?isDelete=${isDelete}`);

const addProduct = (newProduct: FormData) =>
  api.post("/admin/products/add", newProduct);

const toggleDeleteProduct = (id: string, isDelete: boolean) =>
  api.patch("/admin/products/toggleIsDelete", { id, isDelete });

const updateProduct = (updatedProduct: FormData) =>
  api.patch("/admin/products/edit", updatedProduct);

export { getAllProducts, addProduct, toggleDeleteProduct, updateProduct };
