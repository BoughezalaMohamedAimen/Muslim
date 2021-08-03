import React from 'react'
import { ScrollView , StyleSheet,Pressable,Text} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector, useDispatch } from 'react-redux';

import set_storage from '../../../functions/set_storage';




export default function Language({route,navigation}) {
    
    const languages=[{name:"français",code:"fr"},{name:"english",code:"en"}]

    const dispatch=useDispatch()
    const current_language=useSelector(state=>state.languages.current_language)


    const set_language=(code)=>{
        set_storage("current_language",code)
        .then((status)=>{
            if(status)
                dispatch({type:"SET_LANGUAGE",payload:code})
        }).catch(err=>alert(err))
        
    }
    return (
        <>
            <ScrollView style={{paddingHorizontal:10,paddingVertical:20,backgroundColor:"#000"}} >
                {languages.map(language=>(
                    <Pressable style={styles.settingsItem} onPress={()=>{set_language(language.code)}}>
                        <Text style={styles.settingText}>   
                           {language.name}   {language.code==current_language ? <MaterialCommunityIcons name="check" color={"#fff"}/> : "" } 
                        </Text>
                    </Pressable>
                ))}
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