import { Reducer } from "redux";
import { GET_DATA_COMPLETE } from "../actions/data.actions";
import { data } from "../actions/interfaces";

export interface dataState {
  page: number;
  data: data[];
}

const initialState: dataState = {
  page: 1,
  data: [],
};

export const dataReducer: Reducer<dataState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_DATA_COMPLETE:
      return { ...state, page: action.payload.page, data: action.payload.data };

    default:
      return state;
  }
};
