import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase(
  {
    name: "mydatabase.db",
    location: "default",
  },
  () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);",
        [],
        () => {
          console.log('Table "users" created successfully.');
        },
        (error) => {
          console.log("Error creating table:", error);
        }
      );
    });
  },
  (error) => {
    console.log("Error opening database:", error);
  }
);

db.transaction((tx) => {
  tx.executeSql(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    ["Admin", "Admin"],
    () => {
      console.log('User "Admin" added successfully.');
    },
    (error) => {
      console.log("Error adding user:", error);
    }
  );

  tx.executeSql(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    ["User", "User"],
    () => {
      console.log('User "User" added successfully.');
    },
    (error) => {
      console.log("Error adding user:", error);
    }
  );
});

export default db;
