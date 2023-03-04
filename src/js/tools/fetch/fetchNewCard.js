import { request } from "./fetch.js";

export const fetchNewCard = async (body) => {
  return await request({
    method: "POST",
    body: body,
  });
};
