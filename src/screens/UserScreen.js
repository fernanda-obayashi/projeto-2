import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";

const UserScreen = ({ navigation }) => {
  const [happyCatImage, setHappyCatImage] = useState(null);
  const [sadCatImage, setSadCatImage] = useState(null);

  useEffect(() => {
    fetch("https://cataas.com/cat")
      .then((response) => response.url)
      .then((imageUrl) => setHappyCatImage(imageUrl))
      .catch((error) => console.log("Error fetching happy cat image:", error));

    fetch("https://cataas.com/cat/sad")
      .then((response) => response.url)
      .then((imageUrl) => setSadCatImage(imageUrl))
      .catch((error) => console.log("Error fetching sad cat image:", error));
  }, []);

  const handleVerListaFeliz = () => {
    navigation.navigate("HappyList");
  };

  const handleVerListaTriste = () => {
    navigation.navigate("SadList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.happy}>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Ver lista feliz!</Text>
        </View>

        {happyCatImage && (
          <Image source={{ uri: happyCatImage }} style={styles.catImage} />
        )}

        <View style={styles.buttonContainer}>
          <Button title="Ver lista feliz!" onPress={handleVerListaFeliz} />
        </View>
      </View>

      <View style={styles.sad}>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Ver lista triste.</Text>
        </View>

        {sadCatImage && (
          <Image source={{ uri: sadCatImage }} style={styles.catImage} />
        )}

        <View style={styles.buttonContainer}>
          <Button title="Ver lista triste." onPress={handleVerListaTriste} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 10,
  },
  subtitle: {},
  subtitleText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 20,
  },
  catImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  happy: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2d1",
    height: 300,
    width: "100%",
  },
  sad: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D7E3FC",
    height: 300,
    width: "100%",
  },
});

export default UserScreen;
