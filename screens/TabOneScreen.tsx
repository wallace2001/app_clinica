import {
  useFonts,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold_Italic,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AntDesign, Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { BoxAnimals } from "../components/BoxAnimals";
import { BoxSelect } from "../components/BoxSelect";

import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { ANIMALS, OPTIONS_BREED, profile } from "../constants/menu";
import { RootTabScreenProps } from "../types";

interface Props {
  navigation: any;
  drawerAnimationStyle: any;
  drawerHeaderAnimationStyle: any;
}

export default function HomeScreen({
  navigation,
  drawerAnimationStyle,
  drawerHeaderAnimationStyle,
}: Props) {
  const [itemSelected, setitemSelected] = useState<string>('');

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_700Bold_Italic,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { ...drawerAnimationStyle }]}>
      <SafeAreaView>
          <Animated.View
            style={[styles.header, { ...drawerHeaderAnimationStyle }]}
          >
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              activeOpacity={0.8}
            >
              <Ionicons name="menu-outline" size={27} color="black" />
            </TouchableOpacity>

            <View style={styles.contentLocationHeader}>
              <Text style={styles.locationText}>Location</Text>
              <View style={styles.location}>
                <Entypo name="location-pin" size={27} color="#02a881" />
                <Text style={styles.textCity}>{profile.city},</Text>
                <Text style={styles.textCountry}> {profile.country}</Text>
              </View>
            </View>

            <Image
              source={{ uri: profile.icon }}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          </Animated.View>
          <ScrollView>
          <View style={styles.content}>
            <View style={styles.search}>
              <View style={styles.searchLeft}>
                <FontAwesome5 name="search" size={24} color="#b5b5b5" />
                <TextInput
                  style={styles.textInputSearch}
                  placeholderTextColor="#848484"
                  placeholder="Search pet to adopt"
                />
              </View>
              <AntDesign name="filter" size={24} color="#b5b5b5" />
            </View>

            <View>
              <FlatList
                data={OPTIONS_BREED}
                renderItem={({ item }) => <BoxSelect setitemSelected={setitemSelected} itemSelected={itemSelected} item={item} />}
                style={styles.optionsFlatList}
                showsHorizontalScrollIndicator={false}
                horizontal
                />
            </View>

            {ANIMALS.map(animal => {
                return (
                  <BoxAnimals
                    breed={animal.breed}
                    distance={animal.distance}
                    image={animal.image}
                    name={animal.name}
                    sex={animal.sex}
                    year={animal.year}
                    backgroundColor={animal.backgroundColor}
                    key={animal.id}
                  />
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    backgroundColor: "#f5f5f5",
  },
  search: {
    width: "90%",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  searchLeft: {
    flexDirection: "row",
  },
  textInputSearch: {
    marginLeft: 10,
  },
  optionsFlatList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  contentLocationHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textCity: {
    fontSize: 15,
    fontFamily: "Poppins_700Bold",
    color: "#757575",
  },
  textCountry: {
    fontFamily: "Poppins_500Medium",
    color: "#9c9c9c",
  },
  locationText: {
    fontFamily: "Poppins_500Medium",
    color: "#9c9c9c",
  },
  location: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
