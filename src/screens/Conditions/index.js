import React from "react";

import { styles } from "./index.styles";
import ScreenContainer from "../../components/common/ScreenContainer";
import MenuIcon from "../../components/common/MenuIcon";
import Logo from "../../components/common/Logo";

const Conditions = () => {
    return(
        <ScreenContainer>

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