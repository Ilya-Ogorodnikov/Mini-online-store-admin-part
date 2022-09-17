import { api } from "../http";

const getAllPickupPoints = (isActive: string) =>
  api.get(`/admin/pickups/all?isActive=${isActive}`);

const addPickupPoint = (
  title: string,
  address: string,
  coordinates: string,
  openHours: string
) => api.post("/admin/pickups/add", { title, address, coordinates, openHours });

const changeReplacePickupPoint = (id: string, isActive: boolean) =>
  api.patch("/admin/pickups/deactivate", { id, isActive });

const changePickupPoint = (
  id: string,
  title: string,
  address: string,
  coordinates: string,
  openHours: string
) =>
  api.patch("/admin/pickups/edit", {
    id,
    title,
    address,
    coordinates,
    openHours,
  });

export {
  getAllPickupPoints,
  addPickupPoint,
  changeReplacePickupPoint,
  changePickupPoint,
};
