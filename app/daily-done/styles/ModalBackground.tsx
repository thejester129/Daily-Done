import { View, Text, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(120,120,120,0.4)",
    zIndex: 5,
  },
});

export default function ModalBackground() {
  return <View style={styles.root}></View>;
}
