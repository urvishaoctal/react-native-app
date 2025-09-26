import React, { useEffect, useState } from "react";
import { Link } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Button,
  ImageBackground

} from "react-native";

import { User, KeyRound,Slack,Eye,EyeOff } from 'lucide-react-native';


export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (email) {
      setEmailError(false)
    }
    if (password) {
      setPasswordError(false)
    }
  }, [email,password]);


  const  handleSubmit = () =>{

    if(!email){
      setEmailError(true)
    }else{
      setEmailError(false)
    }

    if(!password){
      setPasswordError(true)
    }else{
      setPasswordError(false)
    }

    if(!email || !password){
      return false
    }

     return navigation.replace("AppDrawer")

  }
  
  return (
    <ImageBackground
    source={{ uri: "https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?semt=ais_hybrid&w=740" }} // replace with your image
    className="flex-1"
    resizeMode="cover"
  >

    <View className="items-center mt-10">
   
      <Text className="text-white text-4xl font-bold">Octal Infotech<Slack
      size={26} color={"white"} />
        </Text>
      
    </View>
    <View className="items-center mt-10">
   
      <Text className="text-white text-3xl font-bold ">Welcome</Text>
    </View>

    <View className="flex-1 justify-center">
      <View className="bg-white rounded-3xl p-10">
        <Text className="text-xl font-bold mb-4">Login</Text>

        <View className="flex-row items-center border-b border-gray-300 mb-4">
          <User size={20} />
          <TextInput
            className="flex-1 ml-2 p-2"
            placeholder="Email"
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />

          
        </View>
          { emailError ? <Text className="text-red-400">please required email</Text> : ''}

      
        <View className="flex-row items-center border-b border-gray-300 mb-6">
          <KeyRound  size={20}  />
          <TextInput
            className="flex-1 ml-2 p-2"
            placeholder="Password"
            secureTextEntry={!showPass}
            value={password}
            onChangeText={(text)=>setPassword(text)}
            
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>

            {
              showPass ? <Eye  size={20}/> : <EyeOff  size={20}/>
            }

        
          </TouchableOpacity>
        </View>
        
        
        { passwordError ? <Text className="text-red-400">please required password</Text> : ''}


       
        <TouchableOpacity  onPress={handleSubmit} className="bg-red-500 rounded-full py-3 mb-4">
          <Text className="text-white text-center text-lg font-semibold">
            Sign in
          </Text>
        </TouchableOpacity>

       
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={() => navigation.replace("abc")}>
            <Text className="text-red-500">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace("Register")}>
            <Text className="text-red-500">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ImageBackground>
  );
}

