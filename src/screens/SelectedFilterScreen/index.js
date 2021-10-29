import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _find from 'lodash/find';
import _get from 'lodash/get';

import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from "./index.styles"
import {
  getServiceDetails,
  getServiceTypeStates,
  getServiceTypeDistricts,
  getServiceTypeTaluka,
  getServiceTypePlaces
} from "../../redux/services/actions";
import {
  selectServiceTypeDetails,
  selectServiceTypeDistricts,
  selectServiceTypeTaluka,
  selectServiceTypeStates,
  selectServiceTypePlaces
} from "../../redux/services/selectors";
import ScreenContainer from "../../components/common/ScreenContainer"
import Dropdown from '../../components/common/Dropdown';

const Screen = props => {

  const {
    navigation, d__getDistricts, d__getTaluka, d__getPlaces, selectDistricts, selectStates,
    selectPlaces, selectTaluka, route, d__getServiceDetails, selectServiceTypeDetails,
    d__getStates
  } = props;

  const { item } = route.params

  const { id } = item;

  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [taluka, setTaluka] = useState();
  const [city, setCity] = useState();

  const navigate = () => {
    const s = _find(selectStates, o => o['village_key__taluka_key__district_key__state_key__id'] === state);
    const d = _find(selectDistricts, o => o['village_key__taluka_key__district_key__id'] === district);
    const t = _find(selectTaluka, o => o['village_key__taluka_key__id'] === taluka);
    const c = _find(selectPlaces, o => o['village_key__id'] === city);
    navigation.navigate('ListProviders', {
      state: s,
      district: d,
      taluka: t,
      city: c,
      cityId: city,
      serviceId: id
    });
  }

  useEffect(() => {
    d__getServiceDetails({ service_type_id: id })
    d__getStates({ service_type_id: id })
  }, []);

  useEffect(() => {
    if (!!state) {
      d__getDistricts({ service_type_id: id, state_key_id: state });
      setDistrict(null)
      setTaluka(null);
      setCity(null);
    }
  }, [state])

  useEffect(() => {
    if (!!district) {
      d__getTaluka({ service_type_id: id, district_key_id: district });
      setTaluka(null);
      setCity(null);
    }
  }, [district]);

  useEffect(() => {
    if (!!taluka) {
      d__getPlaces({ taluka_key_id: taluka, service_type_id: id });
      setCity(null);
    }
  }, [taluka]);

  return (
    <View style={styles.screen}>
      <Image
        source={{ uri: _get(selectServiceTypeDetails, 'mob_bkgrd_img_loc') }}
        style={styles.backgroundImage}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end"
        }}
      />
      <View style={styles.filterSection} elevation={4} >
        <View style={styles.selectHeader}>
          <View>
            <Icon name="location-pin" size={24} color='#f40002' />
          </View>
          <View>
            <Text style={styles.header}>Search by Location</Text>
          </View>
        </View>
        <View style={styles.dropdownContainer}>
          <Dropdown
            value={state}
            onValueChange={setState}
            options={selectStates}
            mode={'dropdown'}
            label={"State"}
            name={"state"}
            uniqueKey={"village_key__taluka_key__district_key__state_key__id"}
            display={"village_key__taluka_key__district_key__state_key__state"}
            marathi={"village_key__taluka_key__district_key__state_key__state_mr"}
          />
          <Dropdown
            value={district}
            onValueChange={setDistrict}
            options={selectDistricts}
            mode={'dropdown'}
            label={"District"}
            name={"district"}
            uniqueKey={"village_key__taluka_key__district_key__id"}
            display={"village_key__taluka_key__district_key__district"}
            marathi={"village_key__taluka_key__district_key__district_mr"}
            enabled={!!state}
          />
          <Dropdown
            value={taluka}
            onValueChange={setTaluka}
            options={selectTaluka}
            mode={'dropdown'}
            label={"Taluka"}
            name={"taluka"}
            uniqueKey={"village_key__taluka_key__id"}
            display={"village_key__taluka_key__taluka"}
            marathi={"village_key__taluka_key__taluka_mr"}
            enabled={!!district}
          />
          <Dropdown
            value={city}
            onValueChange={setCity}
            options={selectPlaces}
            mode={'dropdown'}
            label={"Near by City/ Place"}
            name={"city"}
            uniqueKey={"village_key__id"}
            display={"village_key__village"}
            marathi={"village_key__village_mr"}
            enabled={!!taluka}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.button}
                disabled={!(district && taluka && city)}
                onPress={navigate}
              >
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const SelectedFilterScreen = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const SelectedFilterOptions = data => {

  const item = _get(data, 'route.params.item', {});

  return {
    headerTitle: (
      <View style={styles.titleContainer}>
        <View style={styles.service}>
          <Image source={{ uri: item['web_icon_s3_loc'] }} style={styles.image} />
          <View>
            <Text numberOfLines={1} style={styles.text}>{item['service_name']}</Text>
            {item['service_name_mr'] &&
              <Text numberOfLines={1} style={{ ...styles.text, ...styles.subtext }}>{item['service_name_mr']}</Text>
            }
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  selectDistricts: selectServiceTypeDistricts,
  selectTaluka: selectServiceTypeTaluka,
  selectStates: selectServiceTypeStates,
  selectPlaces: selectServiceTypePlaces,
  selectServiceTypeDetails,
})

const mapDispatchToProps = dispatch => {
  return {
    d__getStates: data => dispatch(getServiceTypeStates.request(data)),
    d__getDistricts: data => dispatch(getServiceTypeDistricts.request(data)),
    d__getTaluka: data => dispatch(getServiceTypeTaluka.request(data)),
    d__getPlaces: data => dispatch(getServiceTypePlaces.request(data)),
    d__getServiceDetails: data => dispatch(getServiceDetails.request(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilterScreen);