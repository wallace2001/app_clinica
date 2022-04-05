import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";

interface BoxAnimalsProps {
  image: string;
  name: string;
  sex: any;
  breed: string;
  backgroundColor: string;
  year: number;
  distance: string;
}

export const BoxAnimals = ({
  image,
  name,
  sex,
  breed,
  backgroundColor,
  year,
  distance,
}: BoxAnimalsProps) => {
    const [ration, setRation] = useState(0);

    useEffect(() => {
        Image.getSize(image, (width, height) => setRation(width / height));
      }, [image]);
  return (
    <TouchableOpacity style={styles.container}>
        <View style={[styles.backgroundImage, {backgroundColor}]}>
            <Image source={{uri: image}} resizeMode="contain" style={[styles.imageContainer, { aspectRatio: 0 }]} />
        </View>
      <View style={styles.infoAnimal}>
        <View style={styles.headerInfo}>
          <Text style={styles.nameText}>{name}</Text>
          {sex}
        </View>
        <View style={styles.contentInfo}>
            <Text style={styles.breedText}>{breed}</Text>
            <Text style={styles.yearText}>{year} year old</Text>
            <View style={styles.location}>
                <Ionicons name="md-location-sharp" size={20} color="#02a881" />
                <Text style={styles.distanceText}>Distance: {distance} km</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: "relative",
      marginTop: 40,
  },
  backgroundImage: {
    width: 150,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    borderRadius: 20,
  },
  imageContainer: {
      width: 200,
      height: 200,
      position: "absolute",
  },
  infoAnimal: {
      width: 200,
      height: 150,
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
  },
  headerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
  },
  nameText: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 19,
      color: '#575757',
  },
  contentInfo: {
    paddingHorizontal: 10,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  distanceText: {
    color: '#717171',
    fontFamily: 'Poppins_700Bold',
  },
  breedText: {
      fontSize: 16,
      color: '#717171',
      fontFamily: 'Poppins_500Medium',
  },
  yearText: {
    fontSize: 15,
    color: '#8e8e8e',
    fontFamily: 'Poppins_700Bold',
    marginTop: 10,
  },
});
