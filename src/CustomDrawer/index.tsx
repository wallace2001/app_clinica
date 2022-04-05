import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Poppins_500Medium, Poppins_300Light, Poppins_700Bold_Italic, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { footerMenu, menu, profile } from "../../constants/menu";
import HomeScreen from "../../screens/TabOneScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContextApp, getContextApp } from "../context/context";

const Drawer = createDrawerNavigator();

// Component do item
export const CustomDrawerItem = ({item}) => {
    const { screenSelected, onPressToSelectScreen } = useContext(ContextApp);

    const isSelected = screenSelected === item.id;
  return (
    <TouchableOpacity onPress={() => onPressToSelectScreen(item.id)}>
        <View style={isSelected ? styles.containerItemSelected : styles.containerItem}>
            <View style={styles.icon}>
                {item.icon}
            </View>
            <Text style={styles.titleMenu}>{item.name}</Text>
        </View>
    </TouchableOpacity>
  );
};

export const CustomDrawerContent = ({ navigation }: any) => {
  return (
    <DrawerContentScrollView
      scrollEnabled
      contentContainerStyle={{ flex: 1 }}
    >
        <StatusBar barStyle={"light-content"}/>
        <SafeAreaView style={styles.containerContent}>
            <View style={styles.contentHeader}>
                <Image source={{ uri: profile.icon }} style={styles.imageProfile} />
                <View style={styles.infoProfile}>                
                    <Text style={styles.nameProfile}>{profile.name}</Text>
                    <Text style={styles.subProfile}>{profile.subTitle}</Text>
                </View>
            </View>
            <View style={styles.contentMain}>
                {menu.map(item => (
                    <CustomDrawerItem key={item.id} item={item} />
                ))}
            </View>
            <View style={styles.contentFooter}>
                <TouchableOpacity style={styles.footerItem}>
                    <View style={styles.iconFooter}>{footerMenu[0].icon}</View>
                    <Text style={styles.titleFooter}>{footerMenu[0].name}</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.footerItem}>
                    {/* <View style={styles.iconFooter}>{footerMenu[0].icon}</View> */}
                    <Text style={styles.titleFooter}>{footerMenu[1].name}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </DrawerContentScrollView>
  );
};

// Component do Drawer em si
export const CustomDrawer = () => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(
        progress.value,
        [0, 1],
        [1, 26],
        Extrapolate.CLAMP
      ),

      transform: [
        {
          scale: interpolate(
            progress.value,
            [0, 1],
            [1, 0.8],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const animatedStyleContent = useAnimatedStyle(() => {
    return {
      borderTopLeftRadius: interpolate(
        progress.value,
        [0, 1],
        [1, 20],
        Extrapolate.CLAMP
      ),
    };
  });

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
    <View style={styles.containerDrawer}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "70%",
            backgroundColor: "transparent",
          },
          sceneContainerStyle: { backgroundColor: "transparent" },
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          progress.value = withTiming(props.state.history[1]?.status ? 1 : 0, {
            duration: 200,
          });
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <HomeScreen
              navigation={props.navigation}
              drawerAnimationStyle={animatedStyle}
              drawerHeaderAnimationStyle={animatedStyleContent}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDrawer: {
      flex: 1,
      backgroundColor: '#08a6a3',
  },
  containerContent: {
      flex: 1,
      paddingHorizontal: 30,
    //   backgroundColor: 'red',
      backgroundColor: '#08a6a3'
  },

  // CONTENT
  contentHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  infoProfile: {
      marginLeft: 20,
  },
  imageProfile: {
      width: 40,
      height: 40,
      borderRadius: 50,
  },
  nameProfile: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#fff',
  },
  subProfile: {
      fontSize: 12,
      fontFamily: 'Poppins_300Light',
      color: '#fff',
  },
  contentMain: {
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 100,
  },
  containerItem: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: 10,
  },
  containerItemSelected: {
    width: '100%',
    backgroundColor: '#ffffff6f',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  titleMenu: {
      fontSize: 17,
      fontFamily: 'Poppins_700Bold',
      marginLeft: 20,
      color: '#ffffffb7',
  },
  icon: {
      width: 35,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
  },
  contentFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  footerItem: {
      marginBottom: 10,
      height: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  iconFooter: {
      marginRight: 5,
  },
  titleFooter: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
    color: '#ffffffb7',
  },
  line: {
      height: 15,
      width: 2,
      marginLeft: 15,
      backgroundColor: '#ffffffb7',
  },
});
