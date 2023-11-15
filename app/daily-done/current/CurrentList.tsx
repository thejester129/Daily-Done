import { View, Text, StyleSheet } from "react-native";
import ITask from "../models/ITask";
import CurrentListItem from "./CurrentListItem";
import { useState } from "react";
import TaskDetailsModal from "../tasks/TaskDetailsModal";

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  header: {
    height: 30,
    fontSize: 19,
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 10,
  },
});

export default function CurrentList({
  items,
  setSelectedTask,
}: {
  items: ITask[];
  setSelectedTask: (task: ITask) => void;
}) {
  const dailyItems = items.filter((item) => item.type === "daily");
  const weeklyItems = items.filter((item) => item.type === "weekly");

  // TODO collapsible sections
  // TODO reposition
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Today</Text>
      {dailyItems.map((item, i) => (
        <CurrentListItem
          item={item}
          last={i === dailyItems.length - 1}
          onSelect={() => setSelectedTask(item)}
        />
      ))}
      <Text style={styles.header}>This Week</Text>
      {weeklyItems.map((item, i) => (
        <CurrentListItem
          item={item}
          last={i === weeklyItems.length - 1}
          onSelect={() => setSelectedTask(item)}
        />
      ))}
    </View>
  );
}
