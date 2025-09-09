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
} from "react-native";


export default function FormDemo() {
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
    <View className="flex-1 bg-gray-100 px-6  h-60 w-50 bg-blue-200">
     

     
      <View className="border-2 rounded-2xl mt-10 p-20 bg-red-200">
      <Text className="text-2xl font-bold text-center mb-6 text-blue-600">Login your account </Text>
      <Text className="text-lg font-medium mb-1">Email address</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white text-base"
      />

      <Text className="text-lg font-medium mb-1">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 bg-white text-base"
      />
       <Text className="text-lg  mb-1">
        Remember me</Text>

      <TouchableOpacity
       title="Go to Layout"
       onPress={() => navigation.navigate('')}
        className="bg-blue-600 py-4 rounded-2xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          Login
        </Text>
        
        
      </TouchableOpacity>
      <TouchableOpacity className="mt-4">
        <Text className="text-blue-600">Don't have an account? Sign up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}