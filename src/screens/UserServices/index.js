import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _get from "lodash/get";

import Icon from 'react-native-vector-icons/Feather';
import { View, Text, FlatList, Image, Linking, TouchableOpacity, Button } from 'react-native';

import { styles } from "./index.styles";
import {
  selectUserServices, selectUserProfile
} from "../../redux/user/selectors";
import {
  addService,
  getServices
} from "../../redux/user/actions";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";
import ScreenContainer from "../../components/common/ScreenContainer";
import MyServiceCard from '../../components/cards/MyServiceCard';
import Colors from '../../utils/constants/colors';

const Screen = props => {

  const {
    selectUserServices, navigation, d__getServices,
    d__setAddServices, selectUserProfile
  } = props;

  useEffect(() => {
    d__getServices({ ser_prof_id: selectUserProfile.id })
  }, [])

  return (
    <ScreenContainer
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.servicesContainer}>
        {selectUserServices.length
          ? <View style={styles.myServices}>
            {selectUserServices.map(service => (
              <MyServiceCard
                data={service}
                key={service.id}
              />
            ))}
            <TouchableOpacity
              style={styles.addService}
              onPress={() => navigation.navigate("UserServiceStack", { screen: 'UserServicesForm' })}
            >
              <Text style={styles.button}>Add Service</Text>
            </TouchableOpacity>
          </View>
          : <View style={styles.noServices}>
            <Text>You have not registered a service yet. Add one now.</Text>
            <TouchableOpacity
              style={styles.addService}
              onPress={() => navigation.navigate("UserServiceStack", { screen: 'UserServicesForm' })}
            >
              <Text style={styles.button}>Add Service</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </ScreenContainer>
  )
}

const UserServices = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const UserServicesOptions = ({ navigation }) => {
  return {
    headerTitle: <Logo />,
    headerLeft: () => <MenuIcon navigation={navigation} />,
  }
}

const mapStateToProps = createStructuredSelector({
  selectUserServices, selectUserProfile
})

const mapDispatchToProps = dispatch => {
  return {
    d__getServices: data => dispatch(getServices.request(data)),
    d__setAddServices: data => dispatch(addService.set(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserServices);