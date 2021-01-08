import { createSelector } from "reselect";
import _get from "lodash/get";

import { SERVICES, SERVICEMEN } from "../../utils/constants/loadingData";

export const services = state => state.services;

export const selectServices = createSelector(
    [services],
    val => _get(val, 'services.services', []),
);

export const selectDistricts = createSelector(
    [services],
    val => _get(val, 'districts.districts', []),
);

export const selectTaluka = createSelector(
    [services],
    val => _get(val, 'taluka.taluka', []),
);

export const selectPlaces = createSelector(
    [services],
    val => _get(val, 'places.places', []),
);

export const selectIsServicemenFetching = createSelector(
    [services],
    val => _get(val, 'servicemen.isFetching', SERVICEMEN),
);

export const selectServicemen = createSelector(
    [services],
    val => _get(val, 'servicemen.servicemen.data', SERVICEMEN),
);

export const selectServicemenPages = createSelector(
    [services],
    val => _get(val, 'servicemen.totalPages')
);
