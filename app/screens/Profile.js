
import React from "react";
import { View, Text, ScrollView,ImageBackground} from "react-native";

export default function Profile() {
  const data = [
    { name: "Rahul", title: "Web Designer", Contact:"9978899967" },
    { name: " Milan", title: "Web Designer", Contact:"9878899975"},
    { name: " Kuldip", title: "Web Designer", Contact:"9878899975"},
    { name: "Yash", title: " Web Designer", Contact:"9878899975"},
    { name: "Kishan", title: "Web Designer", Contact:"9878899975"},
    { name: "Keyur", title: "Web Designer", Contact:"9878899975"},
    { name: "Rahul", title: "Web Designer", Contact:"9978899967" },
    { name: " Milan", title: "Web Designer", Contact:"9878899975"},
    { name: " Kuldip", title: "Web Designer", Contact:"9878899975"},
    { name: "Yash", title: " Web Designer", Contact:"9878899975"},
    { name: "Kishan", title: "Web Designer", Contact:"9878899975"},
    { name: "Keyur", title: "Web Designer", Contact:"9878899975"},
    { name: "Rahul", title: "Web Designer", Contact:"9978899967" },
    { name: " Milan", title: "Web Designer", Contact:"9878899975"},
    { name: " Kuldip", title: "Web Designer", Contact:"9878899975"},
    { name: "Yash", title: " Web Designer", Contact:"9878899975"},
    { name: "Kishan", title: "Web Designer", Contact:"9878899975"},
    { name: "Keyur", title: "Web Designer", Contact:"9878899975"},
    
  ];

  return (
     <ImageBackground
        source={{ uri: "https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?semt=ais_hybrid&w=740" }} // replace with your image
        className="flex-1"
        resizeMode="cover"
      >
    <ScrollView className="flex-1 bg-gray-900 p-6">

      <View className="flex-row border-b border-gray-500 pb-2 mb-2">
        <Text className="flex-1 text-white font-bold">Name</Text>
        <Text className="flex-1 text-white font-bold">Title</Text>
        <Text className="flex-1 text-white font-bold">Contact no.</Text>
        
      </View>

      
      {data.map((item, index) => (
        <View
          key={index}
          className="flex-row border-b border-gray-500 py-3">
          <Text className="flex-1 text-gray-200">{item.name}</Text>
          <Text className="flex-1 text-gray-200">{item.title}</Text>
          <Text className="flex-1 text-gray-200">{item.Contact}</Text>
        
        </View>
       
            
             
              
      ))}
    </ScrollView>
    </ImageBackground>
  );
}
