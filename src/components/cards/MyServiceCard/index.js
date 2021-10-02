import React from 'react';
import dayjs from "dayjs";

import { Text, View } from 'react-native';

import { styles } from "./index.styles";

const status = {
  PENDING: "Pending For Approval",
  APPROVED: "Approved",
  REJECTED: "Rejected. Please contact admin"
}

const MyServiceCard = props => {

  const { data } = props

  console.log(`data.sp_appr_status`, data.sp_appr_status)

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>
            {data.sp_name}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Service Type</Text>
          <Text style={styles.value}>
            {data.service_type__service_name}
          </Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Specification</Text>
        <Text style={styles.value}>
          {data.sp_specialization || "Not specified"}
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>
          {data.village_key__village}
        </Text>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Mobile No</Text>
          <Text style={styles.value}>
            {data.ser_prof__ser_prof_mobile_prim}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Alternate Mobile</Text>
          <Text style={styles.value}>
            {data.ser_prof__ser_prof_mobile_sec}
          </Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Start Date</Text>
          <Text style={styles.value}>
            {dayjs(data.service_start_date).format("MMM DD, YYYY")}
          </Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Validity</Text>
          <Text style={styles.value}>
            {dayjs(data.sp_validity).format("DD MMM YYYY")}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles[(data.sp_appr_status || "").toLowerCase()]}>
            {status[data.sp_appr_status]}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default MyServiceCard
