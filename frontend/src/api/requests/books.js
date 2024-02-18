import axiosApi from "..";

export const getBooks = ({ page, limit }) => {
  return axiosApi.get(`api/books`, { params: { page, limit } })
};
