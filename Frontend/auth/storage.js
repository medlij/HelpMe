import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log("Error storing authToken", error)
    }
};

const getToken = async() =>{
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting authToken", error)
    }
}

const removeToken = async() =>{
    try {
        console.log("auth token dead")
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error deleting authToken", error)
    }
}

export default{
    getToken, removeToken, storeToken
}