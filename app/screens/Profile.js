import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
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
    Alert.alert("Form Submitted", `Name: ${name}\nEmail: ${email}`);
  };

  return (
    <View className="flex-1 bg-gray-100 px-6 py-10">
      <Image
        source={{
          uri: "https://images.examples.com/wp-content/uploads/2018/11/forms-in-word.jpg",
        }}
        className="size-20 rounded-full ring-1 ring-gray-900 ml-40"
      />
      <Text className="text-2xl font-bold text-center mb-6"> Form</Text>

      <Text className="text-lg font-medium mb-1">Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white text-base"
      />

      <Text className="text-lg font-medium mb-1">Email</Text>
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

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-600 py-4 rounded-2xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          Submit
        </Text>
      </TouchableOpacity>

    </View>
  );
}
