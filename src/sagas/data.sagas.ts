import { call, put, all, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { getDataCompleteAction, GET_DATA_BEGIN } from "../actions/data.actions";
import { getData } from "../api/home";

function* GetData(action: AnyAction): Generator<any> {
  const res: any = yield call(getData, action.payload);
  yield put(getDataCompleteAction(res.data));
}

export function* watchAll() {
  yield all([takeEvery(GET_DATA_BEGIN, GetData)]);
}
