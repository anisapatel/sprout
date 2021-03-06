import React, { Component } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width }: any = Dimensions.get("window");
const height: number = width * 0.8;

interface ImagesProps {
  images: any;
}

class ImageCarousel extends Component<ImagesProps> {
  render() {
    const images = this.props.images.images.flat();
    const filteredImages = images.filter(image => {
      return image.url !== "";
    });
    if (filteredImages && filteredImages.length) {
      return (
        <View style={{ padding: 10 }}>
          <ScrollView
            key={images}
            style={{ width: "100%", height: 295 }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={true}
            indicatorStyle="white"
          >
            {filteredImages.map(image => (
              <Image
                key={image.url}
                style={styles.image}
                source={{ uri: image.url }}
              />
            ))}
          </ScrollView>
        </View>
      );
    }
    return null;
  }
}

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});
