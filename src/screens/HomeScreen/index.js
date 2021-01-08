import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import Icon from 'react-native-vector-icons/Feather';
import { View, Text, ScrollView, FlatList, Image, Linking } from 'react-native';

import { styles } from "./index.styles";
import backgroundImage from "../../../assets/images/homepage-banner.png";
import headerImage from "../../../assets/images/infohandyman.png";
import { selectServices } from "../../redux/services/selectors";
import { getServices, setServices } from "../../redux/services/actions";
import ServiceCard from "../../components/cards/ServiceCard";
import ScreenContainer from "../../components/common/ScreenContainer";

const HomeScreen = props => {

    const { selectServices, d__getServices, navigation, d__setServices } = props;

    const renderCard = data => {
        return <ServiceCard navigation={navigation} item={data.item} setItem={d__setServices} />
    }

    useEffect(() => {
        if (!selectServices.length) {
            d__getServices();
        }
    }, []);

    return (
        <ScreenContainer style={styles.container} showsVerticalScrollIndicator={false}>
            <Image
                source={backgroundImage}
                style={styles.backgroundImage}
                imageStyle={{
                    resizeMode: "cover",
                    alignSelf: "flex-end"
                }}
            />
            <View style={styles.contactUs}>
                <Icon.Button
                    name="phone-call"
                    size={30}
                    color="#03D269"
                    backgroundColor="white"
                    borderRadius={50}
                    iconStyle={{ marginRight: 25, marginLeft: 10 }}
                >
                    <View>
                        <Text style={styles.callUsText}>Call Us to register your services</Text>
                        <Text
                            onPress={() => Linking.openURL('tel:8010614314')}
                            style={styles.callNumber}
                        >
                            8010614314
                        </Text>
                    </View>
                </Icon.Button>
            </View>
            <View elevation={5} style={styles.serviceContainer}>
                <View style={styles.selectServiceHeader}>
                    <Text style={styles.header}>Select Service</Text>
                </View>
                <View style={styles.services}>
                    <FlatList
                        keyExtractor={item => item.SERVICE_TYPE_ID}
                        numColumns={3}
                        data={selectServices}
                        renderItem={renderCard}
                    />
                </View>
            </View>
        </ScreenContainer>
    )
}

HomeScreen.navigationOptions = {
    headerTitle: (<Image source={headerImage} style={styles.titleImage} />)
}

const mapStateToProps = createStructuredSelector({
    selectServices
})

const mapDispatchToProps = dispatch => {
    return {
        d__getServices: () => dispatch(getServices.request()),
        d__setServices: data => dispatch(setServices.set(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);