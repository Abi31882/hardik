import { createSelector } from "reselect";
import { dataStateSelector } from "./app.selectors";

export const getDataArraySelector = createSelector(
  [dataStateSelector],
  (dataState) => {
    return dataState.data;
  }
);

export const pageSelector = createSelector([dataStateSelector], (dataState) => {
  return dataState.data;
});
