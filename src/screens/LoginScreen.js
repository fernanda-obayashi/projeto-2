import React, { useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import db from "../services/SQLiteDatabase";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(10), password VARCHAR(10));`,
        [],
        (_, res) => {
          console.log("Table created");
        },
        (error) => {
          console.log("Error creating table:", error);
        }
      );
    });
  };

  useEffect(() => {
    createTables();
  }, []);

  const handleLogin = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (_, result) => {
          if (result.rows.length > 0) {
            const user = result.rows.item(0);
            if (user.username === "Admin") {
              navigation.navigate("AdminScreen");
            } else if (user.username === "User") {
              navigation.navigate("UserScreen");
            }
          } else {
            console.log("Invalid username or password");
          }
        },
        (error) => {
          console.log("Error executing query:", error);
        }
      );
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
