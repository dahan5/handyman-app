import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _find from 'lodash/find';
import _get from 'lodash/get';

import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from "./index.styles"
import {
    getDistricts, getTaluka, getPlaces, getServiceDetails,
} from "../../redux/services/actions";
import {
    selectDistricts, selectTaluka, selectPlaces, selectServiceTypeDetails
} from "../../redux/services/selectors";
import Colors from "../../utils/constants/colors";
import ScreenContainer from "../../components/common/ScreenContainer"
import Dropdown from '../../components/common/Dropdown';

const SelectedFilterScreen = props => {

    const {
        navigation, d__getDistricts, d__getTaluka, d__getPlaces, selectDistricts,
        selectPlaces, selectTaluka, route, d__getServiceDetails, selectServiceTypeDetails
    } = props;

    const { item } = route.params

    const { SERVICE_TYPE_ID } = item;

    const [district, setDistrict] = useState();
    const [taluka, setTaluka] = useState();
    const [city, setCity] = useState();

    const navigate = () => {
        const d = _find(selectDistricts, o => o['VILLAGE_KEY_ID__TALUKA_KEY_ID__DISTRICT_KEY_ID__DISTRICT_KEY_ID'] === district);
        const t = _find(selectTaluka, o => o['VILLAGE_KEY_ID__TALUKA_KEY_ID__TALUKA_KEY_ID'] === taluka);
        const c = _find(selectPlaces, o => o['VILLAGE_KEY_ID__VILLAGE_KEY_ID'] === city);
        navigation.navigate('ListProviders', {
            district: d,
            taluka: t,
            city: c,
            cityId: city,
            serviceId: SERVICE_TYPE_ID
        });
    }

    useEffect(() => {
        d__getServiceDetails({ service_type_id: SERVICE_TYPE_ID })
        d__getDistricts({ service_type_id: SERVICE_TYPE_ID });
    }, []);

    useEffect(() => {
        if (!!district) {
            d__getTaluka({ service_type_id: SERVICE_TYPE_ID, district_key_id: district });
            setTaluka(null);
            setCity(null);
        }
    }, [district]);

    useEffect(() => {
        if (!!taluka) {
            d__getPlaces({ taluka_key_id: taluka, service_type_id: SERVICE_TYPE_ID });
            setCity(null);
        }
    }, [taluka]);

    return (
        <ScreenContainer style={styles.container}>
            <View style={styles.screen}>
                <Image
                    source={{ uri: _get(selectServiceTypeDetails, 'MOB_BKGRD_IMG_LOC') }}
                    style={styles.backgroundImage}
                    imageStyle={{
                        resizeMode: "cover",
                        alignSelf: "flex-end"
                    }}
                />
                <View style={styles.filterSection}>
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
                            value={district}
                            onValueChange={setDistrict}
                            options={selectDistricts}
                            mode={'dropdown'}
                            label={"District"}
                            name={"district"}
                            uniqueKey={"VILLAGE_KEY_ID__TALUKA_KEY_ID__DISTRICT_KEY_ID__DISTRICT_KEY_ID"}
                            display={"VILLAGE_KEY_ID__TALUKA_KEY_ID__DISTRICT_KEY_ID__DISTRICT"}
                            marathi={"VILLAGE_KEY_ID__TALUKA_KEY_ID__DISTRICT_KEY_ID__DISTRICT_MR"}
                        />
                        <Dropdown
                            value={taluka}
                            onValueChange={setTaluka}
                            options={selectTaluka}
                            mode={'dropdown'}
                            label={"Taluka"}
                            name={"taluka"}
                            uniqueKey={"VILLAGE_KEY_ID__TALUKA_KEY_ID__TALUKA_KEY_ID"}
                            display={"VILLAGE_KEY_ID__TALUKA_KEY_ID__TALUKA"}
                            marathi={"VILLAGE_KEY_ID__TALUKA_KEY_ID__TALUKA_MR"}
                            enabled={!!district}
                        />
                        <Dropdown
                            value={city}
                            onValueChange={setCity}
                            options={selectPlaces}
                            mode={'dropdown'}
                            label={"Near by City/ Place"}
                            name={"city"}
                            uniqueKey={"VILLAGE_KEY_ID__VILLAGE_KEY_ID"}
                            display={"VILLAGE_KEY_ID__VILLAGE"}
                            marathi={"VILLAGE_KEY_ID__VILLAGE_MR"}
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
        </ScreenContainer>
    )
}

export const SelectedFilterOptions = data => {

    const item = _get(data, 'route.params.item', {});

    return {
        headerTitle: (
            <View style={styles.titleContainer}>
                <View style={styles.service}>
                    <Image source={{ uri: item['MOB_ICON_S3_LOC'] }} style={styles.image} />
                    <View>
                        <Text numberOfLines={1} style={styles.text}>{item['SERVICE_NAME']}</Text>
                        {item['SERVICE_NAME_MR'] &&
                            <Text numberOfLines={1} style={{ ...styles.text, ...styles.subtext }}>{item['SERVICE_NAME_MR']}</Text>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    selectDistricts, selectTaluka,
    selectPlaces, selectServiceTypeDetails,
})

const mapDispatchToProps = dispatch => {
    return {
        d__getDistricts: data => dispatch(getDistricts.request(data)),
        d__getTaluka: data => dispatch(getTaluka.request(data)),
        d__getPlaces: data => dispatch(getPlaces.request(data)),
        d__getServiceDetails: data => dispatch(getServiceDetails.request(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilterScreen);