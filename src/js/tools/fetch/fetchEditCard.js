import { request } from "./fetch.js";

export const fetchEditCard = async (id, body) => {
  return await request({
    url: `/${id}`,
    method: "PUT",
    body: body,
  });
};
