/** @format */
import React from "react";
import { Text, View, Button, Image } from "react-native";
import ImageCarousel from "./ImageCarousel";

const PlantPage = ({ route, navigation }) => {
  const { plantInfo, plantImage } = route.params;
  // console.log(plantInfo, "<--- in the plant page");
  // console.log(plantImage, "<---PLANTIMAGE");
  const images = { images: [{ url: plantImage }, plantInfo.images] };
  return (
    <View>
      {/* <Image
        style={{ width: 350, height: 300 }}
        // source={{ uri: `data:image/gif;base64,${plantImage}` }}
        source={{ uri: plantImage }}
      /> */}

      <ImageCarousel key={plantInfo.images.url} images={images} />

      <Text>
        {plantInfo.commonName}, {plantInfo.scientificName},Duration:{" "}
        {plantInfo.duration}, Family: {plantInfo.family}, Difficulty:{" "}
        {plantInfo.difficulty}, Care Instructions: Light level:{" "}
        {plantInfo.lightLevel}, Soil pH: {plantInfo.ph}, Watering Needs:{" "}
        {plantInfo.wateringSchedule}
      </Text>
      <Button
        title="Add to My Garden"
        onPress={() => navigation.navigate("MyGarden")} // Not functional -- call function back to camera page => app? prop drilling.
      />
    </View>
  );
};

export default PlantPage;
