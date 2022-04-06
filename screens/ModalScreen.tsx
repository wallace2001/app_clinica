import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import _, { get } from 'lodash';

import { Text, View } from "../components/Themed";
import { ANIMALS, profile } from "../constants/menu";
import { IAnimals } from "../components/BoxAnimals/types";

export default function ModalScreen() {
  const [animal, setAnimal] = useState<IAnimals>();

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const getParams = async() => {
      const idAnimal = await get(route, 'params.id');

      const response = ANIMALS.find(animal => animal.id === idAnimal);
      console.log(response);
      setAnimal(response);
    }
    getParams();
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          { backgroundColor: get(animal, 'backgroundColor') },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={35} color="#323232" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share" size={25} color="#323232" />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: get(animal, 'image') }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.middle}>
          <View style={styles.first}>
            <Text style={styles.nameText}>{get(animal, 'name')}</Text>
            <Text>{get(animal, 'sex')}</Text>
          </View>
          <View style={styles.second}>
            <Text style={styles.breedText}>{get(animal, 'breed')}</Text>
            <Text style={styles.yearText}>{get(animal, 'year')} Years old</Text>
          </View>
          <View style={styles.location}>
            <Ionicons name="md-location-sharp" size={20} color="#02a881" />
            <Text style={styles.locationText}>{get(animal, 'location')}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <View style={styles.descriptionHeader}>
            <View style={styles.infoProfile}>
              <Image source={{uri: profile.icon}} style={styles.imageProfile} />
              <View style={{width: '90%'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={{marginLeft: 10, fontFamily: 'Poppins_700Bold', color: '#6c6c6c'}}>Wallace Silva</Text>
                  <Text style={{fontFamily: 'Poppins_500Medium', color: '#868686'}}>Maio 25, 2022</Text>
                </View>
                <Text style={{marginLeft: 10, color: '#aaaaaa', fontFamily: 'Poppins_500Medium'}}>Owner</Text>
              </View>
            </View>
          </View>
          <Text style={{marginTop: 20, color: '#7b7b7b', fontFamily: 'Poppins_500Medium'}}>
            I so I have recently ran into the error show in the text tag,
            although I can not find why it is showing. I have logged that the
            value is not empty and that the value exists before I press the
            button. Here is my jsx code:
          </Text>
        </View>
        <View style={styles.footerButton}>
          <TouchableOpacity style={styles.favorite}>
            <FontAwesome5 name="heart" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.adoption}>
            <Text style={{color: '#fff', fontSize: 15, fontFamily: 'Poppins_700Bold'}}>Adoption</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButton: {
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favorite: {
    width: 60,
    height: 50,
    borderRadius: 18,
    backgroundColor: '#0b9c6c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adoption: {
    width: 230,
    height: 50,
    borderRadius: 18,
    backgroundColor: '#0b9c6c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  description: {
    flex: 1,
    paddingHorizontal: 20,
  },
  descriptionHeader: {},
  locationText: {
    fontSize: 13,
    color: "#6b6b6b",
    fontFamily: "Poppins_500Medium",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  yearText: {
    fontSize: 15,
    color: "#6b6b6b",
    fontFamily: "Poppins_500Medium",
  },
  breedText: {
    fontSize: 15,
    color: "#6b6b6b",
    fontFamily: "Poppins_500Medium",
    paddingVertical: 5,
  },
  nameText: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#666666",
  },
  first: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  second: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "45%",
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
    elevation: 90,
    zIndex: 90,
  },
  image: {
    width: "85%",
    height: "85%",
    position: "absolute",
  },
  footer: {
    flex: 1,
  },
  middle: {
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowOpacity: 1,
    shadowOffset: { width: -2, height: 10 },
    padding: 20,
    alignSelf: 'center',
    bottom: 60,
    shadowColor: "#9f9f9f25",
  },
});
