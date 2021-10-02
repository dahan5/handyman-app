import React from "react";

import { styles } from "./index.styles";
import ScreenContainer from "../../components/common/ScreenContainer";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";

const ContactUs = () => {
    return(
        <ScreenContainer>

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