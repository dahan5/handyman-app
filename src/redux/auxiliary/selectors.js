import { createSelector } from "reselect";
import { get as _get } from "lodash";

const selectAux = state => state.aux;

export const selectGlobalAPIError = createSelector(
  [selectAux],
  val => _get(val, 'globalAPIError'),
);

export const selectGlobalAPISuccess = createSelector(
  [selectAux],
  val => _get(val, 'globalAPISuccess'),
);