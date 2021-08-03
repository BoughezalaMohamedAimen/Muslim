import AsyncStorage from '@react-native-async-storage/async-storage';


const set_storage = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      return true
    } catch (e) {
      // saving error
      return false
    }
  }

  export default set_storage;