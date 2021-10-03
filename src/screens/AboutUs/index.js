import React from "react";

import { View, Text } from 'react-native';

import { styles } from "./index.styles";
import ScreenContainer from "../../components/common/ScreenContainer";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";

const AboutUsScreen = () => {
    return (
        <ScreenContainer>
            <View style={styles.main}>
                <Text style={styles.mainHeader}>About Us</Text>
                <Text style={styles.header}>Who We Are</Text>
                <Text style={styles.textContent}>
                    “Infohandyman Private Limited” Registered in 2021. It is an emerging platform started in in Maharashtra from Jan 2021. The platform is designed to help people to connect with different service providers to avail different household servicestyles.
                </Text>
                <Text style={styles.header}>Product Description</Text>
                <Text style={styles.textContent}>
                    In this age of Information technology everyone wants to connect their services with end user. <Text style={styles.bold}>infohandyman.com</Text> is the platform where we collected and directed the information about the nearest artisanstyles. Who provide services like carpentry, Painting, Electrician, welding work, vehicle repairing etc.
                </Text>
                <Text style={styles.header}>The Team</Text>
                <View style={styles.teamMember}>
                    <Text style={styles.name}>D. S. Tambe</Text>
                    <Text style={styles.position}>Founder and CEO</Text>
                </View>
                <View style={styles.teamMember}>
                    <Text style={styles.name}>Sushil Kurade</Text>
                    <Text style={styles.position}>CPO - Design Director</Text>
                </View>
                <View style={styles.teamMember}>
                    <Text style={styles.name}>Vishnu</Text>
                    <Text style={styles.position}>Solution Architect</Text>
                </View>
                <View style={styles.teamMember}>
                    <Text style={styles.name}>Suraj Singh</Text>
                    <Text style={styles.position}>Solution Architect</Text>
                </View>
                <View style={styles.teamMember}>
                    <Text style={styles.name}>Gagan Deep Singh Bhatti	</Text>
                    <Text style={styles.position}>Backend Architect</Text>
                </View>
                <View style={styles.credits}>
                    <Text style={styles.header}>Images and icons :</Text>

                    <Text style={styles.content}>https://unsplash.com/</Text>
                    <Text style={styles.content}>https://www.freepik.com/home</Text>
                    <Text style={styles.content}>https://www.flaticon.com/</Text>
                    <Text style={styles.content}>https://icomoon.io/</Text>
                </View>
            </View>
        </ScreenContainer>
    )
}

export const AboutUsOptions = ({ navigation }) => {
    return {
        headerTitle: <Logo />,
        headerLeft: () => <MenuIcon navigation={navigation} />
    }
}

export default AboutUsScreen;