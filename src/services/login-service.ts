import { api } from "../http";

const loginAdmin = (email: string, password: string) =>
  api.post("/admin/login", { email, password });

export { loginAdmin };
