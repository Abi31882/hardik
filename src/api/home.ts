import axios from "axios";

const BASE_URL = "https://reqres.in/api/users";

export const getData = (page: number) => {
  return axios.get(BASE_URL, { params: { page } });
};
