import React from "react";

import { styles } from "./index.styles";
import ScreenContainer from "../../components/common/ScreenContainer";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";

const AboutUsScreen = () => {
    return(
        <ScreenContainer>

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