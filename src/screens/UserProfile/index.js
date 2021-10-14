import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _last from "lodash/last";

import Icon from 'react-native-vector-icons/Feather';
import { View, Text, Linking } from 'react-native';

import { styles } from "./index.styles";
import {
  selectUserProfile
} from "../../redux/user/selectors";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";
import ScreenContainer from "../../components/common/ScreenContainer";

const Screen = props => {

  const { selectUserProfile } = props;

  return (
    <ScreenContainer
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.detailsContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.value} numberOfLines={1}>{selectUserProfile.ser_prof_name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Store Name</Text>
          <Text style={styles.value} numberOfLines={1}>{selectUserProfile.ser_prof_store_name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Address</Text>
          <Text style={styles.value} numberOfLines={1}>{selectUserProfile.ser_prof_address}</Text>
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.name}>Mobile No</Text>
            <Text style={styles.value} numberOfLines={1}>{selectUserProfile.ser_prof_mobile_prim}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.name}>Alternate Mobile</Text>
            <Text style={styles.value} numberOfLines={1}>{selectUserProfile.ser_prof_mobile_sec}</Text>
          </View>
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.name}>Proof Type</Text>
            <Text style={styles.value} numberOfLines={1}>{selectUserProfile.ser_prof_id_proof}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.name}>ID Proof</Text>
            <Text style={styles.file} numberOfLines={1}>
              {selectUserProfile.id_s3_location
                ? _last(selectUserProfile.id_s3_location.split("/"))
                : ''
              }
            </Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.name}>Status</Text>
          <Text style={styles[(selectUserProfile.ser_prof_appr_status || "").toLowerCase()]}>
            {(selectUserProfile.ser_prof_appr_status || "").toLowerCase() === "pending"
              ? 'Submitted, Pending for approval'
              : (selectUserProfile.ser_prof_appr_status || "").toLowerCase() === "approved"
                ? 'Approved'
                : 'Rejected'
            }

          </Text>
        </View>
        {selectUserProfile.ser_prof_appr_status === "PENDING" &&
          <View style={styles.info}>
            <Icon.Button
              name="phone-call"
              size={16}
              color="#03D269"
              backgroundColor="white"
              borderRadius={50}
              iconStyle={{ marginRight: 15, marginLeft: 10 }}
            >
              <View>
                <Text>Once approved, you can add your services</Text>
              </View>
            </Icon.Button>

          </View>
        }
        <View style={styles.morePlaces}>
          <Text style={styles.name}>To add services on multiple Taluka and Places,</Text>
          <Text style={styles.contact} onPress={() => Linking.openURL('tel:+918010614314')}>
            Contact Us at 8010614314
          </Text>
        </View>
      </View>
    </ScreenContainer>
  )
}

const UserProfile = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const UserProfileOptions = ({ navigation }) => {
  return {
    headerTitle: <Logo />,
    headerLeft: () => <MenuIcon navigation={navigation} />,
  }
}

const mapStateToProps = createStructuredSelector({
  selectUserProfile
})


export default connect(mapStateToProps)(UserProfile);