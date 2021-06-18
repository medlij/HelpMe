import * as SecureStore from "expo-secure-store";

const key = "userId";

const storeId = async (userId) => {
  try {
    await SecureStore.setItemAsync(key, userId);
  } catch (error) {
    console.log("Error storing userId", error);
  }
};

const getId = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting userId", error);
  }
};

const removeId = async () => {
  try {
    console.log("id token dead");
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error deleting userId", error);
  }
};

export default {
  getId,
  removeId,
  storeId,
};
