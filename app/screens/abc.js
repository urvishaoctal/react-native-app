import React, { useState } from "react";
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

import { User, KeyRound,EyeOff,Eye } from 'lucide-react-native';


export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <ImageBackground
    source={{ uri: "https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?semt=ais_hybrid&w=740" }} 
    className="flex-1"
    resizeMode="cover"
  >

    
    <View className="flex-1 justify-center ">
      <View className=" bg-white rounded-3xl p-10">
        {/* <Text className="text-xl font-bold mb-4">Register</Text> */}

        
        <View className="flex-row items-center  border-gray-300 mb-4">
{/*          
           <Text className="text-lg font-medium mb-1">Creat new Password</Text> */}
                       <TextInput
                         value={password}
                         onChangeText={setPassword}
                         placeholder="Enter new password"
                         secureTextEntry
                         className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 bg-white text-base"
                       />
        </View>

       
        <View className="flex-row items-center  border-gray-300 mb-6">
          
          <TextInput
                         value={password}
                         onChangeText={setPassword}
                         placeholder="Confirm password"
                         secureTextEntry
                         className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 bg-white text-base"
                         
                       />
          
        </View>
        

        
        <TouchableOpacity  onPress={() => navigation.replace("Login")} className="bg-red-500 rounded-full py-3 mb-4">
          <Text className="text-white text-center text-lg font-semibold">
      Submit
          </Text>
        </TouchableOpacity>

        
       
      </View>
    </View>
  </ImageBackground>
  );
}