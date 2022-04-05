import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface BoxSelectProps {
  item: {
    id: string;
    name: string;
    image: any;
    imageSelected: any;
  };
  setitemSelected(value: string): void;
  itemSelected: string;
}

export const BoxSelect = ({
  item,
  setitemSelected,
  itemSelected,
}: BoxSelectProps) => {
  const { image, name, id, imageSelected } = item;
  const isThisSelected = itemSelected === id;

  const handleSelect = () => {
    if (itemSelected && itemSelected === id) {
      setitemSelected("");
      return;
    }
    setitemSelected(id);
  };

  return (
    <TouchableOpacity onPress={handleSelect} style={styles.container}>
      <View
        style={[
          styles.icon,
          isThisSelected ? {
            shadowColor: "#01806029",
            backgroundColor: "#018060",
          } :
          { backgroundColor: "#fff" },
        ]}
      >
        {isThisSelected ? imageSelected : image}
      </View>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    shadowColor: "#a8a8a84e",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 10 },

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontFamily: 'Poppins_500Medium',
  },
});
