import { View, 
  Text,
  ImageBackground ,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'

import { useState } from 'react'
import React from 'react'
import styles from "./styles"
export default function Login() {
  
  const[Username,setUser]=useState('void');  // storing whatever user is typing, we store it in a local state
  const[Password,setPass]=useState('void');  // storing whatever user is typing ,we store it in a local state
    
  
  
  return (
    <View>
      <ImageBackground source={ require('./assets/bg.png')} 
      style={{width: '100%', height: '100%'}}>
   <View style={styles.main}>
   <Image source={ require('./assets/logo.png')} style={styles.logo}/>
   <Text style={styles.logo_text}> Women cop</Text>
    <TextInput
        style={styles.input}
     
       
        placeholder="Username"
         placeholderTextColor="#0A73A0" 
        keyboardType="default"
        onChangeText={(val)=>setUser(val)}  // storing whatever user is typing ,we store it in a local state
      />
       <TextInput
        style={styles.input}
     
               placeholder="Password"
                placeholderTextColor="#0A73A0" 
        keyboardType="default"  //decides which keyboard pad to open
        secureTextEntry={true}
          onChangeText={(val)=>setPass(val)}
      />
<TouchableOpacity 
onPress={() => Alert.alert('Button with adjusted color pressed')}
style={{  marginTop: 35,width:180,borderRadius:25,padding:10 ,backgroundColor:"#D9D9D9"}}>
    <Text style={{fontSize:24 ,  textAlignVertical: "center",  textAlign: "center"}} >Login</Text>
</TouchableOpacity>

<TouchableOpacity 
onPress={() => Alert.alert('Button with adjusted color pressed')}
style={{  marginTop: 35,width:180,borderRadius:25,padding:10 ,backgroundColor:'rgba(0, 0, 0, 0.53)'}}>
    <Text style={{fontSize:24 ,  textAlignVertical: "center",  textAlign: "center" , color:'white'}} >Sign up</Text>
</TouchableOpacity>
      
      

   </View>
      </ImageBackground>
    </View>
  )
}