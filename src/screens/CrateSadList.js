import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

const CreateSadList = ({ navigation }) => {
  const [motivo, setMotivo] = useState("");
  const [catType, setCatType] = useState(null);
  const [lista, setLista] = useState([]);

  const handleAddMotivo = () => {
    if (motivo.trim() !== "" && catType) {
      setLista([...lista, { motivo, catType }]);
      setMotivo("");
      setCatType(null);
    }
  };

  const handleVerListaTriste = () => {
    navigation.navigate("SadList", { lista });
  };

  const handleCatTypeSelection = (type) => {
    setCatType(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Lista Triste</Text>

      <ListItem
        selectedCatType={catType}
        onCatTypeSelection={handleCatTypeSelection}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Motivo para estar triste"
          value={motivo}
          onChangeText={setMotivo}
        />

        <Button title="Adicionar" onPress={handleAddMotivo} />
      </View>

      <View style={styles.listContainer}>
        {lista.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {item.motivo}
          </Text>
        ))}
      </View>

      <Button title="Ver lista triste!" onPress={handleVerListaTriste} />
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

export default CreateSadList;
