import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { IAnimals } from "./types";

interface BoxAnimalsProps {
  item: IAnimals;
}

export const BoxAnimals = ({ item }: BoxAnimalsProps
) => {
  const {image, name, sex, id, breed, backgroundColor, year, distance} = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Modal", {id: id})}
      style={styles.container}
    >
      <View style={[styles.backgroundImage, { backgroundColor }]}>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={styles.imageContainer}
        />
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 40,
  },
  backgroundImage: {
    width: 150,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  nameText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 19,
    color: "#575757",
  },
  contentInfo: {
    paddingHorizontal: 10,
  },
  location: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  distanceText: {
    color: "#717171",
    fontFamily: "Poppins_700Bold",
  },
  breedText: {
    fontSize: 16,
    color: "#717171",
    fontFamily: "Poppins_500Medium",
  },
  yearText: {
    fontSize: 15,
    color: "#8e8e8e",
    fontFamily: "Poppins_700Bold",
    marginTop: 10,
  },
});
