import { request } from "./fetch.js";

export const fetchDeleteCard = async (id) => {
  await request({
    url: `/${id}`,
    method: "DELETE",
  });
};
