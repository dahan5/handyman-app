import * as SecureStore from 'expo-secure-store';

import { setLoggedInUser } from "../../redux/user/actions";
import store from "../../redux/store";

const remember = async (data) => {
    try {
        await SecureStore.setItemAsync(
            'loggedInUser',
            JSON.stringify(data)
        );
    } catch (e) {
        console.log(e);
    }
}

const read = async () => {
    try {
        const loggedInUser = await SecureStore.getItemAsync('loggedInUser');
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            store.dispatch(setLoggedInUser.set(user));
        }
    } catch (e) {
        console.log(e);
    }
};

const clear = async () => {
    try {
        await SecureStore.deleteItemAsync('loggedInUser');
    } catch (e) {
        console.log(e);
    }
}

export { read, remember, clear }