import { Data } from "./interfaces";

export const GET_DATA_BEGIN = "get/data_begin";
export const GET_DATA_COMPLETE = "get/data_complete";
export const GET_DATA_ERROR = "get/data_error";

export const getDataBeginAction = (page: number) => ({
  type: GET_DATA_BEGIN,
  payload: page,
});

export const getDataCompleteAction = (data: Data) => ({
  type: GET_DATA_COMPLETE,
  payload: data,
});

export const getDataErrorAction = (error: string) => ({
  type: GET_DATA_ERROR,
  payload: error,
});
