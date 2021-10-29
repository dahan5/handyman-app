import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import Icon from 'react-native-vector-icons/Feather';
import { View, Text, FlatList, Image, Linking, TouchableOpacity } from 'react-native';

import { styles } from "./index.styles";
import { homepageBanner } from "../../utils/constants/images";
import {
  selectIsAuth, selectUserProfile
} from "../../redux/user/selectors";
import { selectServices } from "../../redux/services/selectors";
import { getServices } from "../../redux/services/actions";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";
import ServiceCard from "../../components/cards/ServiceCard";
import ScreenContainer from "../../components/common/ScreenContainer";

const Screen = props => {

  const { selectServices, d__getServices, navigation, selectIsAuth, selectUserProfile } = props;

  const isApproved = (_get(selectUserProfile, "ser_prof_appr_status") || "").toLowerCase() === 'approved';

  const renderCard = data => {
    return <ServiceCard navigation={navigation} item={data.item} />
  }

  useEffect(() => {
    if (!selectServices.length) {
      d__getServices();
    }
  }, []);

  const onClickRegister = () => {
    if (!selectIsAuth) navigation.navigate('Login')
    else if (_isEmpty(selectUserProfile)) {
      navigation.navigate("UserProfileStack", { screen: 'ProfileForm' })
    } else if (!isApproved) {
      navigation.navigate("UserProfileStack", { screen: 'UserProfile' })
    } else {
      Router.push(MY_SERVICES);
    }
  }


  return (
    <View>
      <Image
        source={{ uri: homepageBanner }}
        style={styles.backgroundImage}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end"
        }}
      />
      <View elevation={5} style={styles.serviceContainer}>
        <View style={styles.selectServiceHeader}>
          <Text style={styles.header}>Select Service</Text>
        </View>
        <View style={styles.services}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            data={selectServices}
            renderItem={renderCard}
          />
        </View>
      </View>
      <View style={styles.contactUsContainer}>
        <Text style={styles.register}>
          {isApproved
            ? 'Registered, Add your services'
            : 'Register your service and expand your business'
          }
        </Text>
        <View style={styles.addService}>
          <Icon.Button
            color="#03D269"
            backgroundColor="white"
            borderRadius={50}
            iconStyle={{ marginRight: 15 }}
          >
            <TouchableOpacity onPress={onClickRegister}>
              <View>
                <Text
                  style={styles.callNumber}
                >
                  {isApproved
                    ? 'Add Your Service'
                    : 'Register Your Service'
                  }
                </Text>
              </View>
            </TouchableOpacity>
          </Icon.Button>
        </View>
        <Text style={styles.or}>Or</Text>
        <View style={styles.contactUs}>
          <Icon.Button
            name="phone-call"
            size={30}
            color="#03D269"
            backgroundColor="white"
            borderRadius={50}
            iconStyle={{ marginRight: 15, marginLeft: 10 }}
          >
            <View>
              <Text
                onPress={() => Linking.openURL('tel:+918010614314')}
                style={styles.callNumber}
              >
                8010614314
              </Text>
            </View>
          </Icon.Button>
        </View>
      </View>
    </View>
  )
}

const HomeScreen = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const HomeOptions = ({ navigation }) => {
  return {
    headerTitle: <Logo />,
    headerLeft: () => <MenuIcon navigation={navigation} />,
  }
}

const mapStateToProps = createStructuredSelector({
  selectUserProfile,
  selectServices,
  selectIsAuth,
})

const mapDispatchToProps = dispatch => {
  return {
    d__getServices: () => dispatch(getServices.request()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);