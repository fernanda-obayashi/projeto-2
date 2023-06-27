import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const AdminScreen = ({ navigation }) => {
  const handleCriarListaFeliz = () => {
    navigation.navigate("CreateHappyList");
  };
  return (
    <View style={styles.container}>
      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>Criar lista feliz!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Criar lista feliz!" onPress={handleCriarListaFeliz} />
      </View>

      <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>Criar lista triste.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Criar lista triste."
          onPress={() => console.log("Opção 2 pressionada")}
        />
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
  subtitle: {
    //width: "100%",
    //flexDirection: "row",
    //justifyContent: "space-between",
  },
  subtitleText: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#000000",
  },
});

export default AdminScreen;
