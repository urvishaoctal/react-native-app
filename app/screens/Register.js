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

import { User, KeyRound } from 'lucide-react-native';


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
        <Text className="text-xl font-bold mb-4">Register</Text>

        
        <View className="flex-row items-center border-b border-gray-300 mb-4">
          <User size={20} />
          <TextInput
            className="flex-1 ml-2 p-2"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

       
        <View className="flex-row items-center border-b border-gray-300 mb-6">
          <KeyRound  size={20}  />
          <TextInput
            className="flex-1 ml-2 p-2"
            placeholder="Password"
            secureTextEntry={!showPass}
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center border-b border-gray-300 mb-6">
          <KeyRound  size={20}  />
          <TextInput
            className="flex-1 ml-2 p-2"
            placeholder=" Confirm Password"
            secureTextEntry={!showPass}
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
           
          </TouchableOpacity>
        </View>

        
        <TouchableOpacity  onPress={() => navigation.replace("AppDrawer")} className="bg-red-500 rounded-full py-3 mb-4">
          <Text className="text-white text-center text-lg font-semibold">
        Sign up
          </Text>
        </TouchableOpacity>

        
        <View className="flex-row">
          <TouchableOpacity>
            <Text className="text-red-500">You  already have an  account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text className="text-red-500 pl-2">Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </ImageBackground>
  );
}

