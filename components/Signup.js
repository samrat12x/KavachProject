import { StyleSheet,
  View,
  Alert,
  Image,
   Text,
   TextInput,
   TouchableOpacity ,
   ImageBackground
  } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Signup(props) {

    const [Username,setUser]=useState('void');  // storing whatever user is typing, we store it in a local state
    const [Email,setMail]=useState('void');  // storing whatever user is typing ,we store it in a local state
    const[PhoneNo,setPhone]=useState('void');
    const[Address,setAdd]=useState('void');
    const[Password,setPass]=useState('void');

    return (
      <View>
      <ImageBackground source={ require('./assets/bg.png')} 
     style={{width: '100%', height: '100%'}}>
     
     <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:40}}>
  <Text style={{fontSize:30}}> Women cop</Text>
  <Image source={require('./assets/logo.png')}  style={{width:78,height:68}}/>  
  
  </View>
     
     
     
     {/* <View style={styles.head}>
     <Text style={styles.logo_text}> Women cop</Text>
     </View> */}
     <View style={styles.welcome}>
     <Text style={styles.welcome_text}>Welcome</Text>
     </View>
     <View style={styles.lgt}>
     <Text style={styles.lgt_text}>Lets Get Started !</Text>
     </View>
     
      <View style={styles.main}>
      <TextInput
          style={styles.input}
       
         
          placeholder="Username"
           placeholderTextColor="#0A73A0" 
          keyboardType="default"
          onChangeText={(val)=>setUser(val)}  // storing whatever user is typing ,we store it in a local state
        />
        <TextInput
          style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#0A73A0" 
          keyboardType="default"  //decides which keyboard pad to open
          secureTextEntry={true}
            onChangeText={(val)=>setMail(val)}
        />
        <TextInput
          style={styles.input}
       
                 placeholder="PhoneNo"
                  placeholderTextColor="#0A73A0" 
          keyboardType="default"  //decides which keyboard pad to open
          secureTextEntry={true}
            onChangeText={(val)=>setPhone(val)}
        />
         <TextInput
          style={styles.input}
       
                 placeholder="Address"
                  placeholderTextColor="#0A73A0" 
          keyboardType="default"  //decides which keyboard pad to open
          secureTextEntry={true}
            onChangeText={(val)=>setAdd(val)}
        />
        <TextInput
          style={styles.input}
       
                 placeholder="Password"
                  placeholderTextColor="#0A73A0" 
          keyboardType="default"  //decides which keyboard pad to open
          secureTextEntry={true}
            onChangeText={(val)=>setPass(val)}
        />
        </View>
  <View style={styles.sign_up}>
  <TouchableOpacity 
  onPress={() => props.navigation.goBack()}
  // onPress={() => Alert.alert('Button with adjusted color pressed')}
  style={{  marginTop: 35,width:180,borderRadius:25,padding:10 ,backgroundColor:'rgba(0, 0, 0, 0.53)'}}>
      <Text style={{fontSize:24 ,  textAlignVertical: "center",  textAlign: "center" , color:'white'}} >Sign up</Text>
  </TouchableOpacity>
  </View>
        
        
  
        </ImageBackground>
    </View>
  
  )
}




const styles = StyleSheet.create({

  head:{
    marginTop:'9%',
    
  },
  welcome:{
      marginTop:'18%',
      alignItems:'center'
  },
  welcome_text:{
      fontSize:50,
      fontWeight:'700',
      color:'#134960',
      
  },
  lgt:{
    marginTop:'7%',
    alignItems:'center'
    
  },
  lgt_text:{
    fontSize:20
  },
  main:{
    alignItems:'center',
    
  },
  input:{
    marginTop:20,
    width:350,
    height:65,
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:'5%',  
    backgroundColor:'white',
    borderRadius:50,
    
    fontSize:20 // affect placeholder text
   
  
  },
  sign_up:{
    alignItems:'center',
  },
   logo_text:{
     fontSize:33,
     fontFamily:'',
  
   }
  });
  