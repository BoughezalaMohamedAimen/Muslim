import React, {useEffect,useState} from 'react';
import {StatusBar} from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import get_storage from './functions/get_storage';
import Settings from './screens/settings';
import Qibla from "./screens/qibla";
import Guides from "./screens/guides";
import Quran from "./screens/quran";



const Tab = createMaterialBottomTabNavigator();

const App=()=> {



  const dispatch=useDispatch()
  const is_logged=useSelector(state=>state.sessions.is_logged)

    get_storage("current_language")
    .then(language=>{
      if (language!=null)
      dispatch({type:"SET_LANGUAGE",payload:language})
    })
    
    useEffect(()=>{ //component did mount     componentDidMount(){}
      
      return ()=>{ //component  unmount    componentDidUnMount(){}
      }
    },[])
    

  return (
    <>
    <StatusBar backgroundColor={'brown'}/>
        <NavigationContainer>
        <Tab.Navigator 
                barStyle={{ backgroundColor: 'brown' }}
        >
           <Tab.Screen name="Settings" component={Settings}         
           options={{
                tabBarLabel: 'Parametre',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cogs" color={color} size={26} />
                ),
        }}/>
           <Tab.Screen name="Quibla" component={Qibla} 
            options={{
              tabBarLabel: 'Quibla',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="compass" color={color} size={26} />
                      ),
              }}
            />
           <Tab.Screen name="Guides" component={Guides} 
            options={{
              tabBarLabel: 'Guides',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="help-circle-outline" color={color} size={26} />
                      ),
              }}
           />
           <Tab.Screen name="Quran" component={Quran} 
            options={{
              tabBarLabel: 'Quran',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="islam" color={color} size={26} />
                      ),
              }}

           />
           {/* <Tab.Screen name="Prayers" component={Prayers} /> */}
        </Tab.Navigator>
        </NavigationContainer>
    </>
  )
}

export default App
