import React from 'react'
import { ScrollView , StyleSheet} from 'react-native'

export default function Quoran({route,navigation}) {
    const languages=[]
    return (
        <>
            <ScrollView style={{paddingHorizontal:10,paddingVertical:20,backgroundColor:"#000"}} >
                languages.map(language=>(
                    <Pressable style={styles.settingsItem} onPress={()=>{}}>
                        <Text style={styles.settingText}> <MaterialCommunityIcons name="islam" color={"#fff"}/>     Adhan </Text>
                    </Pressable>
                ))
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