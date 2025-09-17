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


export default function Home({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    Alert.alert("Submitted", `Name: ${name}\nEmail: ${email}`);
  };

  return (
     <ImageBackground
        source={{ uri: "https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?semt=ais_hybrid&w=740" }} // replace with your image
        className="flex-1"
        resizeMode="cover"
      >
    <View className="flex-1  px-6  h-60 w-50 ">
     
      <View className="items-center mt-10">
         
            <Text className="text-white text-4xl font-bold ">Get started</Text>
          </View>

         
                    
                     <TouchableOpacity  onPress={() => navigation.replace("Login")} className="bg-red-500 rounded-full py-3  mt-5 mb-4">
                     <Text className="text-white text-center text-lg font-semibold">
                   Logout
                     </Text>
                     </TouchableOpacity>
     
    </View>
    </ImageBackground>
  );
}