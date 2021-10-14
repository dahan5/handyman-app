import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _get from "lodash/get";

import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import Colors from "../../utils/constants/colors";
import { styles } from "./index.styles";
import {
  getServicemen, servicemen, setContactHits
} from "../../redux/services/actions";
import {
  selectIsAuth, selectLoggedInUser
} from "../../redux/user/selectors";
import {
  selectIsServicemenFetching, selectServicemen, selectServicemenPages
} from "../../redux/services/selectors";
import ScreenContainer from "../../components/common/ScreenContainer";
import ServicemenCard from '../../components/cards/ServicemenCard';

const Screen = props => {

  const {
    selectIsServicemenFetching, selectServicemen, selectServicemenPages,
    d__getServicemen, d__unsetServicemen, route, selectIsAuth, d__setContactHits,
    navigation, selectLoggedInUser
  } = props;

  const [pageNumber, setPageNumber] = useState(1);
  const [endReachedOnMomentum, setEndReachedOnMomentum] = useState(false)

  const { cityId, serviceId } = route.params;
  const userId = _get(selectLoggedInUser, 'id');

  const updateHits = id => {
    d__setContactHits({ hm_user_id: userId, service_provider_id: id })
  }

  const incrementPage = () => {
    if (scrollThrottle) clearTimeout(scrollThrottle);
    scrollThrottle = setTimeout(() => {
      !selectIsServicemenFetching && fetchData();
    }, 50);
  }

  const fetchData = () => {
    const data = {
      village_key_id: cityId,
      service_type_id: serviceId,
      page_number: pageNumber,
    }
    d__getServicemen(data);
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    d__unsetServicemen();
    const data = {
      village_key_id: cityId,
      service_type_id: serviceId,
      page_number: pageNumber,
    }
    d__getServicemen(data);
    setPageNumber(pageNumber + 1);
  }, [])

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={item => item.service_provider_id.toString()}
          numColumns={1}
          data={selectServicemen}
          onEndReachedThreshold={0.1}
          renderItem={data =>
            <ServicemenCard
              data={data.item}
              selectIsAuth={selectIsAuth}
              navigation={navigation}
              updateHits={updateHits}
            />
          }
          onMomentumScrollBegin={() => setEndReachedOnMomentum(true)}
          onEndReached={() => endReachedOnMomentum && !selectIsServicemenFetching
            && pageNumber <= selectServicemenPages && incrementPage()
          }
        />
        {selectIsServicemenFetching &&
          <ActivityIndicator animating={true} size="large" color={Colors.primaryBackgroundColor} />
        }
      </View>
    </ScreenContainer>
  )
}

const ListProvidersScreen = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const ListProvidersOptions = data => {

  const { state, district, taluka, city } = data.route.params

  return {
    headerTitle: (
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {`${state['village_key__taluka_key__district_key__state_key__state']} - ${district['village_key__taluka_key__district_key__district']} - ${taluka['village_key__taluka_key__taluka']} - ${city['village_key__village']}`}
        </Text>
        <Text numberOfLines={1} style={{ ...styles.text, ...styles.subtext }}>
          {`${state['village_key__taluka_key__district_key__state_key__state_mr']} - ${district['village_key__taluka_key__district_key__district_mr']} - ${taluka['village_key__taluka_key__taluka_mr']} - ${city['village_key__village_mr']}`}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  selectIsServicemenFetching, selectServicemen, selectServicemenPages,
  selectIsAuth, selectLoggedInUser
})

const mapDispatchToProps = dispatch => {
  return {
    d__getServicemen: data => dispatch(getServicemen.request(data)),
    d__unsetServicemen: () => dispatch(servicemen.unset()),
    d__setContactHits: data => dispatch(setContactHits.request(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProvidersScreen);