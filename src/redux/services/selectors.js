import { createSelector } from "reselect";
import _get from "lodash/get";

import { SERVICES, SERVICEMEN } from "../../utils/constants/loadingData";

export const services = state => state.services;

export const selectServices = createSelector(
    [services],
    val => _get(val, 'services.services', []),
);

export const selectStates = createSelector(
    [services],
    val => _get(val, 'states.states', []),
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

export const selectServiceTypeStates = createSelector(
    [services],
    val => _get(val, 'st_states.states', []),
);

export const selectServiceTypeDistricts = createSelector(
    [services],
    val => _get(val, 'st_districts.districts', []),
);

export const selectServiceTypeTaluka = createSelector(
    [services],
    val => _get(val, 'st_taluka.taluka', []),
);

export const selectServiceTypePlaces = createSelector(
    [services],
    val => _get(val, 'st_places.places', []),
);

export const selectIsServicemenFetching = createSelector(
    [services],
    val => _get(val, 'servicemen.isFetching', false),
);

export const selectServicemen = createSelector(
    [services],
    val => _get(val, 'servicemen.servicemen.data', []),
);

export const selectServicemenPages = createSelector(
    [services],
    val => _get(val, 'servicemen.totalPages')
);

export const selectServiceTypeDetails = createSelector(
    [services],
    val => _get(val, 'selectedService.data.0', {}),
);