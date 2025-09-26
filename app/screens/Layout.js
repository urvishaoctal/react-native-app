import React, { useRef } from "react";
import { StyleSheet, View,ScrollView,TextInput,Button } from "react-native";
import { Video } from "expo-av";

export default function Layout() {
  const video = useRef(null);

  return (
    <ScrollView>
    <View style={styles.container}  className="mt-5" >
      
      <Video
      className="mt-5"
        ref={video}
        style={styles.video}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
       
      
    
      <Video
      className="mb-10"
        ref={video}
        style={styles.video}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", 
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", 
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <Video className=""
        ref={video}
        style={styles.video}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", 
        }}rr
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", 
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  video: {
    width: 420,
    height: 200,
    
  },
  comment: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
