import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import ITask from "../models/ITask";
import { useState } from "react";
import colours from "../styles/colours";

const styles = StyleSheet.create({
  root: {
    width: "80%",
    height: "80%",
    position: "absolute",
    backgroundColor: "white",
    top: "10%",
    left: "10%",
    zIndex: 10,
  },
  children: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    padding: 15,
  },
  header: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  closeButton: {
    width: 30,
    height: 30,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    transform: [{ scaleX: 1.5 }],
    marginRight: 10,
  },
});

export default function TaskDetailsModal({
  task,
  onClose,
}: {
  task: ITask;
  onClose: () => void;
}) {
  const Header = (
    <View style={styles.header}>
      <View style={{ width: 30, height: 30 }}></View>
      <Text style={styles.headerText}>{task.name}</Text>
      <Pressable onPress={onClose}>
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
    </View>
  );

  const CompleteButton = (
    <Button
      title={task.complete ? "Completed" : "Complete"}
      color={task.complete ? "gray" : colours.PRIMARY}
      onPress={() => {
        // TODO complete
        if (!task.complete) {
          onClose();
        }
      }}
    />
  );

  return (
    <View style={styles.root}>
      <View style={styles.children}>
        {Header}
        {CompleteButton}
      </View>
    </View>
  );
}
