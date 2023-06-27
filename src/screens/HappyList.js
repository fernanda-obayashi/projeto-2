import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HappyList = ({ userRole }) => {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleDeleteItem = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setEditedText(item.motivo);
  };

  const handleSaveEdit = () => {
    const updatedData = data.map((item) => {
      if (item.id === editingItem.id) {
        return { ...item, motivo: editedText };
      }
      return item;
    });
    setData(updatedData);
    setEditingItem(null);
  };

  const renderListItem = ({ item }) => {
    if (editingItem && editingItem.id === item.id) {
      return (
        <View style={styles.editingListItem}>
          <Image
            source={{ uri: item.selectedCatImage }}
            style={styles.catImage}
          />
          <TextInput
            value={editedText}
            onChangeText={setEditedText}
            style={styles.editingTextInput}
          />
          <TouchableOpacity onPress={handleSaveEdit} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.listItem}>
        <Image
          source={{ uri: item.selectedCatImage }}
          style={styles.catImage}
        />
        <Text>{item.motivo}</Text>
        {userRole === "admin" ? (
          <TouchableOpacity
            onPress={() => handleDeleteItem(item.id)}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteButtonText}>Excluir</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleEditItem(item)}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <LinearGradient colors={["#ffe5ec", "#ffc2d1"]} style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  listItem: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editingListItem: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  deleteButton: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  editingTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  catImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
});

export default HappyList;
