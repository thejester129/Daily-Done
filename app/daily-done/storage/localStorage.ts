import AsyncStorage from "@react-native-async-storage/async-storage";
import ITask from "../models/ITask";
import ICurrentItem from "../models/IBoardItem";
import IProgress from "../models/IProgress";
import IBoardItem from "../models/IBoardItem";

export const storeValue = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getValue = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    // error reading value
  }
};
