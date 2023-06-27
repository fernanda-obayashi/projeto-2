import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";

const ListItem = () => {
  const [catImage, setCatImage] = useState(null);
  const [selectedCatType, setSelectedCatType] = useState(null);

  useEffect(() => {
    if (selectedCatType) {
      fetch(`https://cataas.com/cat/${selectedCatType}`)
        .then((response) => response.url)
        .then((imageUrl) => setCatImage(imageUrl))
        .catch((error) => console.log("Error fetching cat image:", error));
    }
  }, [selectedCatType]);

  const handleCatTypeSelection = (catType) => {
    setSelectedCatType(catType);
  };

  return (
    <View>
      <Text>Motivo para ser feliz hoje:</Text>

      <View style={styles.catTypeContainer}>
        <TouchableOpacity
          style={
            selectedCatType === "cute"
              ? styles.selectedCatTypeButton
              : styles.catTypeButton
          }
          onPress={() => handleCatTypeSelection("cute")}
        >
          <Text style={styles.catTypeButtonText}>Gato Fofo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            selectedCatType === "funny"
              ? styles.selectedCatTypeButton
              : styles.catTypeButton
          }
          onPress={() => handleCatTypeSelection("funny")}
        >
          <Text style={styles.catTypeButtonText}>Gato Engraçado</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            selectedCatType === "sleepy"
              ? styles.selectedCatTypeButton
              : styles.catTypeButton
          }
          onPress={() => handleCatTypeSelection("sleepy")}
        >
          <Text style={styles.catTypeButtonText}>Gato Sonolento</Text>
        </TouchableOpacity>
      </View>

      {catImage && <Image source={{ uri: catImage }} style={styles.image} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  listContainer: {
    marginTop: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CreateHappyList;
