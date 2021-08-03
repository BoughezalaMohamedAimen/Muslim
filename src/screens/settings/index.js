import React from 'react'
import { Pressable, ScrollView , StyleSheet ,  Text , View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Title } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Adhan from "./adhan";
import Quoran from './quran';
import Localisation from './localisation';
import Language from './languages';


const Stack = createStackNavigator();



export default  function Settings() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SettingsHome} options={{headerShown:false}} />
        <Stack.Screen name="Adhan" component={Adhan} />
        <Stack.Screen name="Quoran" component={Quoran} />
        <Stack.Screen name="Localisation" component={Localisation} />
        <Stack.Screen name="Language" component={Language} options={{ title: 'choisir la langue', headerStyle: {
              backgroundColor: 'brown',
              
           } }} />
      </Stack.Navigator>
    );
  }


function SettingsHome({route,navigation}) {
    return (
        <> 
        <View style={{backgroundColor:"#000"}}>
            <View style={{backgroundColor:"rgba(165, 42, 42,.3)",marginBottom:30,paddingVertical:15}}>
                    <Title style={{textAlign:"center",color:"white",fontWeight:"bold"}}>Parametre</Title>
            </View>  
        </View> 

            <ScrollView style={{paddingHorizontal:10,paddingVertical:20,backgroundColor:"#000"}}>
                <Pressable onPress={()=>navigation.navigate("Localisation")}>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingText}> <MaterialCommunityIcons name="map-marker-radius" color={"#fff"}/>     Localistation </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate("Language")}>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingText}> <MaterialCommunityIcons name="web" color={"#fff"}/>     Langue </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate("Adhan")}>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingText}> <MaterialCommunityIcons name="islam" color={"#fff"}/>     Adhan </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate("Quoran")}>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingText}> <MaterialCommunityIcons name="islam" color={"#fff"}/>     Coran </Text>
                    </View>
                </Pressable>
            </ScrollView>
        </>
    )
}

const styles=StyleSheet.create({
    settingsItem: 
    {
        marginHorizontal:15,
        marginBottom:18,
        flexDirection:"row",
        paddingVertical:15,
        paddingHorizontal:20,
        borderRadius:50,
        backgroundColor:"rgba(255,255,255,.1)"

    },
    settingText:
    {
        fontSize:16,
        color:"#fff"
    }
})