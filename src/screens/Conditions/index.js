import React from "react";

import { View, Text, FlatList } from 'react-native';

import { styles } from "./index.styles";
import ScreenContainer from "../../components/common/ScreenContainer";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";

const Conditions = () => {

    const dataSource = [{
        text: '1) The purpose www.infohandyman.com is to connect you with different service providers.'
    }, {
        text: '2) All data is verified with our service partners.'
    }, {
        text: '3) Company is not responsible for any work related issues like work quality, Working skills, work delay, Work timing and service charge etc.'
    }, {
        text: '4) This website is free for all the users. We are not taking any commission for the services from service partners.'
    }, {
        text: '5) Service Partner is responsible for work related issue for all your completed work.'
    }, {
        text: '6) Please don’t misuse the data of the service providers for fake calls, unwanted message, etc.'
    }, {
        text: '7) We are storing all view details/call data.'
    }]

    const renderRow = data => {
        return (
            <Text style={styles.item}>{`${data.item.text}`}</Text>
        );
    }

    return (
        <ScreenContainer>
            <View style={styles.main}>
                <Text style={styles.mainHeader}>Terms and Conditions</Text>
                <FlatList
                    keyExtractor={item => item.text}
                    numColumns={1}
                    data={dataSource}
                    onEndReachedThreshold={0.1}
                    renderItem={renderRow}
                />
            </View>
        </ScreenContainer>
    )
}

export const ConditionsOptions = ({ navigation }) => {
    return {
        headerTitle: <Logo />,
        headerLeft: () => <MenuIcon navigation={navigation} />
    }
}

export default Conditions;