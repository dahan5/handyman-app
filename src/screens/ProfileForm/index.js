import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _last from "lodash/last";
import dayjs from "dayjs";

import { View, Text, TouchableOpacity } from 'react-native';


import { styles } from "./index.styles";
import {
  selectLoggedInUser, selectUserProfile,
  selectIsProfileFetching
} from "../../redux/user/selectors";
import {
  createProfile
} from "../../redux/user/actions";
import { SECRET_KEY_AWS } from '@env';
import { validateSchemaAndProceed } from "../../utils/helpers";
import { registerUserProfile } from "../../utils/helpers/schema";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";
import TextInput from "../../components/common/TextInput";
import Dropdown from '../../components/common/Dropdown';
import ScreenContainer from "../../components/common/ScreenContainer";
import S3Upload from '../../components/common/S3Upload';

const initValues = {
  name: "",
  store: "",
  address: "",
  mobile1: "",
  mobile2: "",
  proofType: "aadhar card",
  proofFile: ""
}

const IDTypes = [{
  name: "Aadhar card",
  key: "aadhar card"
}, {
  name: "Driving License",
  key: "driving license"
}, {
  name: "Voter Id Card",
  key: "voter id card"
}]

const Screen = props => {

  const {
    selectLoggedInUser, selectUserProfile = {}, d__createProfile,
    navigation
  } = props;

  const [values, setValues] = useState(initValues);
  const [create, setCreate] = useState(_isEmpty(selectUserProfile));

  const onChange = field => e => {
    let object = { ...values };
    object[field] = e;
    setValues(object);
  }

  const save = () => {
    d__createProfile({
      hm_user_id: _get(selectLoggedInUser, 'id'),
      ser_prof_name: values.name,
      ser_prof_store_name: values.store,
      ser_prof_add: values.address,
      ser_prof_mobile_prim: values.mobile1,
      ser_prof_mobile_sec: values.mobile2,
      ser_prof_id_proof: values.proofType,
      ser_prof_id_image: values.proofFile,
      ser_prof_appr_status: '',
      enabled_flag: ''
    })
  }

  const onFileUpload = data => {
    const e = _get(data, 'Location', '')
    onChange('proofFile')(e)
  }

  const date = dayjs().format("YYYY-MM-DD");

  const validate = () => {
    validateSchemaAndProceed(registerUserProfile, { ...values }, save);
  }

  useEffect(() => {
    setValues({ ...values, mobile1: _get(selectLoggedInUser, 'mobile') });
  }, [])

  useEffect(() => {
    setCreate(_isEmpty(selectUserProfile));
    if (!_isEmpty(selectUserProfile)) {
      navigation.navigate("UserProfileStack", { screen: 'UserProfile' })
    }
  }, [selectUserProfile])

  return (
    <View>
      <TextInput
        value={values.name}
        label="Name*"
        onValueChange={onChange("name")}
        autoFocus={true}
        multiline={false}
        labelStyle={styles.label}
        style={styles.value}
        autoCapitalize="words"
      />
      <TextInput
        value={values.store}
        label="Store Name"
        onValueChange={onChange("store")}
        multiline={false}
        labelStyle={styles.label}
        style={styles.value}
      />
      <TextInput
        value={values.address}
        label="Address*"
        onValueChange={onChange("address")}
        multiline={false}
        labelStyle={styles.label}
        style={styles.value}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <TextInput
            value={values.mobile1.toString()}
            label="Mobile No*"
            keyboardType={"number-pad"}
            onValueChange={onChange("mobile1")}
            multiline={false}
            editable={false}
            labelStyle={styles.label}
            style={styles.value}
          />
        </View>
        <View style={styles.buttonStyle}>
          <TextInput
            value={values.mobile2}
            label="Alternate Mobile (optional)"
            keyboardType={"number-pad"}
            onValueChange={onChange("mobile2")}
            multiline={false}
            labelStyle={styles.label}
            style={styles.value}
          />
        </View>
      </View>
      <Dropdown
        value={values.proofType}
        onValueChange={onChange("proofType")}
        options={IDTypes}
        mode={'dropdown'}
        label={"ID Proof*"}
        name={"proofType"}
        uniqueKey={"key"}
        display={"name"}
      />
      <S3Upload
        label="Upload selected identity"
        value={values.proofFile ? _last(values.proofFile.split("/")) : ''}
        accept="image/*"
        onUpload={data => onFileUpload(data)}
        directory={`user_files/${date}/${_get(selectLoggedInUser, 'id')}_${_get(selectLoggedInUser, 'name')}`}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => navigation.navigate("ServiceStack", { screen: 'Services' })}
          >
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.save} onPress={validate}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const ProfileForm = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const ProfileFormOptions = ({ navigation }) => {
  return {
    headerTitle: <Logo />,
    headerLeft: () => <MenuIcon navigation={navigation} />,
  }
}

const mapStateToProps = createStructuredSelector({
  selectLoggedInUser, selectUserProfile,
  selectIsProfileFetching
})

const mapDispatchToProps = dispatch => {
  return {
    d__createProfile: data => dispatch(createProfile.request(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);