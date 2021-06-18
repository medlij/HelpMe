import * as SecureStore from "expo-secure-store";

const key = "userType";

const storeUserType = async (userType) => {
    try {
        await SecureStore.setItemAsync(key, userType);
    } catch (error) {
        console.log("Error storing userType", error)
    }
};

const getUserType = async() =>{
    try {
        console.log("done userType")
        return await SecureStore.getItemAsync(key);

    } catch (error) {
        console.log("Error getting userType", error)
    }
}

const removeUserType = async() =>{
    try {
        await SecureStore.deleteItemAsync(key);
        console.log("done userType")

    } catch (error) {
        console.log("Error deleting userType", error)
    }
}

export default{
    getUserType, removeUserType, storeUserType
}