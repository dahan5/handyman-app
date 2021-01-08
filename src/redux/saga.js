import { all } from "redux-saga/effects";
import { serviceSaga } from "./services/sagas";
import { userSaga } from "./user/sagas";

export default function* rootSaga() {
  yield all({
    ...serviceSaga,
    ...userSaga,
  });
}
