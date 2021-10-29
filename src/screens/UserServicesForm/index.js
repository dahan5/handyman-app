import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import _get from "lodash/get";
import dayjs from "dayjs";

import MultiSelect from 'react-native-multiple-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View, Text, TouchableOpacity
} from 'react-native';

import { styles } from "./index.styles";
import {
  selectIsUserServiceSaved, selectUserProfile,
  selectLoggedInUser
} from "../../redux/user/selectors";
import {
  selectServices, selectDistricts, selectPlaces,
  selectStates, selectTaluka,
} from "../../redux/services/selectors";
import {
  getPlaces, getTaluka, getStates, getDistricts
} from "../../redux/services/actions";
import {
  addService, getServices
} from "../../redux/user/actions";
import { VILLAGE_SELECTION_LIMIT } from "../../utils/constants";
import { validateSchemaAndProceed } from "../../utils/helpers";
import { registerUserService } from "../../utils/helpers/schema";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";
import TextInput from "../../components/common/TextInput";
import ScreenContainer from "../../components/common/ScreenContainer";
import Dropdown from '../../components/common/Dropdown';

const initValues = {
  name: "",
  serviceType: "",
  specification: "",
  startDate: dayjs().format("YYYY-MM-DD"),
  payment: "Rs 599",
  validity: "2021-03-20T03:51:28.587Z",
  state: "",
  district: "",
  taluka: "",
  city: '',
  status: "pending",
}

const Screen = props => {

  const {
    selectServices,
    selectIsUserServiceSaved,
    navigation,
    selectUserProfile,
    selectDistricts, selectPlaces,
    selectStates, selectTaluka,
    selectLoggedInUser,
    d__getServices,
    d__addService,
    d__getPlaces,
    d__getTaluka,
    d__getStates,
    d__getDistricts
  } = props;

  const [values, setValues] = useState(initValues);
  const [open, setOpen] = useState(false);

  const onChange = field => e => {
    let object = { ...values };
    object[field] = e;
    setValues(object);
  }

  const onChangeMultiSelect = item => {
    let object = { ...values };
    if (item.length > VILLAGE_SELECTION_LIMIT)
      item = item.slice(0, VILLAGE_SELECTION_LIMIT);
    object.city = item;
    setValues(object);
  }

  const onChangeDate = field => val => {
    let object = { ...values };
    if (val.type === "set") {
      let value = val.nativeEvent.timestamp / 1000;
      object[field] = dayjs.unix(value).format("YYYY-MM-DD");
      setValues(object);
    }
    setOpen(false);
  }

  const save = () => {
    d__addService({
      hm_user_id: selectLoggedInUser.id,
      ser_profile_id: selectUserProfile.id,
      sp_name: values.name,
      hmservicemaster_id: values.serviceType,
      service_start_date: values.startDate,
      sp_specialization: values.specification,
      village_key_id: values.city.join(","),
      payment_flag: "N",
      sp_address: "",
      payment_amount: 599
    });
    setValues({ ...initValues, name: selectUserProfile.ser_prof_store_name })
  }

  const validate = () => {
    validateSchemaAndProceed(registerUserService, { ...values }, save);
  }

  useEffect(() => {
    d__getStates();
  }, [])

  useEffect(() => {
    setOpen(false);
  }, [values.startDate])

  useEffect(() => {
    if (selectUserProfile.id) {
      d__getServices({ ser_prof_id: selectUserProfile.id });
      setValues({
        ...values,
        name: selectUserProfile.ser_prof_store_name || selectUserProfile.ser_prof_name
      })
    }
  }, [selectUserProfile]);

  useEffect(() => {
    if (!!values.state) {
      d__getDistricts({
        state_key_id: values.state,
      })
      setValues({
        ...values,
        district: "",
        taluka: "",
        city: [],
      })
    }
  }, [values.state])

  useEffect(() => {
    if (!!values.district) {
      d__getTaluka({
        district_key_id: values.district,
      })
      setValues({
        ...values,
        taluka: "",
        city: [],
      })
    }
  }, [values.district])

  useEffect(() => {
    if (!!values.taluka) {
      d__getPlaces({
        taluka_key_id: values.taluka,
      })
      setValues({
        ...values,
        city: [],
      })
    }
  }, [values.taluka])

  useEffect(() => {
    if (selectIsUserServiceSaved)
      navigation.navigate("UserServiceStack", { screen: 'UserServices' });
  }, [selectIsUserServiceSaved])

  return (
    <View>
      <View style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.step}>1</Text>
          <Text style={styles.headerText}>Service Name(for Website)</Text>
        </View>
        <TextInput
          value={values.name}
          onValueChange={onChange("name")}
          label="Service Name*"
          name="name"
          autoFocus={true}
          multiline={false}
          labelStyle={styles.label}
          style={styles.value}
          autoCapitalize="words"
        />
        <View style={styles.divider} />
        <View style={styles.header}>
          <Text style={styles.step}>2</Text>
          <Text style={styles.headerText}>Select Service Type</Text>
        </View>
        <Dropdown
          value={values.serviceType}
          onValueChange={onChange("serviceType")}
          options={selectServices}
          mode={'selectServices'}
          label={"Service"}
          name={"service"}
          uniqueKey={"id"}
          display={"service_name"}
        />
        <View style={styles.field}>
          <Text style={styles.label}>Work Starting Date</Text>
          {open ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={dayjs(values.startDate).toDate()}
              mode={"date"}
              display="spinner"
              onChange={onChangeDate("startDate")}
              maximumDate={dayjs().toDate()}
            />
          ) : null}
          <TouchableOpacity onPress={() => setOpen(true)}>
            <TextInput
              value={values.startDate}
              label="Work Starting Date"
              name="startDate"
              multiline={false}
              editable={false}
              labelStyle={styles.label}
              style={styles.value}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          value={values.specification}
          onValueChange={onChange("specification")}
          label="Specification"
          name="specification"
          labelStyle={styles.label}
          style={styles.value}
        />
        <View style={styles.divider} />
        <View style={styles.header}>
          <Text style={styles.step}>3</Text>
          <Text style={styles.headerText}>Select Location</Text>
        </View>
        <Dropdown
          value={values.state}
          onValueChange={onChange("state")}
          options={selectStates}
          mode={'dropdown'}
          label={"State"}
          name={"state"}
          uniqueKey={"id"}
          display={"state"}
        />
        <Dropdown
          value={values.district}
          onValueChange={onChange("district")}
          options={selectDistricts}
          mode={'dropdown'}
          label={"District"}
          name={"district"}
          uniqueKey={"id"}
          display={"district"}
          enabled={!!values.state}
        />
        <Dropdown
          value={values.taluka}
          onValueChange={onChange("taluka")}
          options={selectTaluka}
          mode={'dropdown'}
          label={"Taluka"}
          name={"taluka"}
          uniqueKey={"id"}
          display={"taluka"}
          enabled={!!values.district}
        />
        <View style={styles.multiple}>
          <MultiSelect
            items={selectPlaces}
            uniqueKey="id"
            onSelectedItemsChange={onChangeMultiSelect}
            selectedItems={values.city}
            selectText={values.city.length ? '' : "Pick Places"}
            searchInputPlaceholderText="Search Items..."
            tagRemoveIconColor="#212121"
            tagBorderColor="#212121"
            tagTextColor="#212121"
            selectedItemTextColor="#2a2a2a"
            selectedItemIconColor="#212121"
            itemTextColor="#000"
            displayKey="village"
            searchInputStyle={{ color: '#212121' }}
            submitButtonColor="#048FED"
            submitButtonText="Submit"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => navigation.navigate("UserServiceStack", { screen: 'UserServices' })}
          >
            <Text style={styles.text}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.save} onPress={validate}>
            <Text style={{ ...styles.text, ...styles.saveText }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const UserServicesForm = props => {
  return (
    <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
      <Screen {...props} />
    </ScreenContainer>
  )
}

export const UserServicesFormOptions = ({ navigation }) => {
  return {
    headerTitle: <Logo />,
  }
}

const mapStateToProps = createStructuredSelector({
  selectServices,
  selectIsUserServiceSaved,
  selectUserProfile,
  selectDistricts, selectPlaces,
  selectStates, selectTaluka,
  selectLoggedInUser
})

const mapDispatchToProps = dispatch => {
  return {
    d__getServices: data => dispatch(getServices.request(data)),
    d__addService: data => dispatch(addService.request(data)),
    d__getPlaces: data => dispatch(getPlaces.request(data)),
    d__getTaluka: data => dispatch(getTaluka.request(data)),
    d__getStates: data => dispatch(getStates.request(data)),
    d__getDistricts: data => dispatch(getDistricts.request(data),)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserServicesForm);