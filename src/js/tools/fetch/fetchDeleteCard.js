import { request } from "./fetch.js";

export const fetchDeleteCard = async (id) => {
  return await request({
    url: `/${id}`,
    method: "DELETE",
  });
};
