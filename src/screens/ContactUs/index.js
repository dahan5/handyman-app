import React from "react";

import { View, Text, Linking } from 'react-native';

import { styles } from "./index.styles";
import ScreenContainer from "../../components/common/ScreenContainer";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";

const ContactUs = () => {
  return (
    <ScreenContainer>
      <View style={styles.main}>
        <Text style={styles.mainHeader}>Contact Us</Text>
        <Text style={styles.header}>Call or WhatsApp Us</Text>
        <Text
          onPress={() => Linking.openURL('tel:+918010614314')}
          style={styles.textContent}
        >
          8010614314
        </Text>
        <Text
          onPress={() => Linking.openURL('mailto:infohandyman21@gmail.com')}
          style={styles.textContent}
        >
          infohandyman21@gmail.com
        </Text>
      </View>
    </ScreenContainer>
  )
}

export const ContactUsOptions = ({ navigation }) => {
  return {
    headerTitle: <Logo />,
    headerLeft: () => <MenuIcon navigation={navigation} />
  }
}

export default ContactUs;