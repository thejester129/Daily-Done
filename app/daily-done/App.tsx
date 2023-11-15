import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CurrentList from "./current/CurrentList";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ITask from "./models/ITask";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import TaskDetailsModal from "./tasks/TaskDetailsModal";
import ModalBackground from "./styles/ModalBackground";

const styles = StyleSheet.create({
  root: {
    height: "100%",
  },
});

const mockItems: ITask[] = [
  {
    name: "Meditate",
    complete: true,
    type: "daily",
  },
  {
    name: "Flat Hunting",
    complete: false,
    type: "daily",
    timeDone: 20,
    totalTime: 30,
  },
];

export default function App() {
  const [selectedTask, setSelectedTask] = useState<ITask | null>();
  return (
    // <Provider store={store}>
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <CurrentList items={mockItems} setSelectedTask={setSelectedTask} />
      {selectedTask && (
        <TaskDetailsModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
      {selectedTask && <ModalBackground />}
    </SafeAreaView>
    // </Provider>
  );
}
