import { View, Text, StyleSheet, Pressable } from "react-native";
import ITask from "../models/ITask";
import Checkbox from "expo-checkbox";
import colours from "../styles/colours";

const borderWidth = 2;
const borderColour = "gray";

const styles = StyleSheet.create({
  root: {
    borderTopColor: borderColour,
    borderTopWidth: borderWidth,
    width: "100%",
    paddingLeft: 25,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  name: {
    fontSize: 16,
  },
});

export default function CurrentListItem({
  item,
  last,
  onSelect,
}: {
  item: ITask;
  last: boolean;
  onSelect: () => void;
}) {
  const rootStyleWithBorder = last
    ? {
        ...styles.root,
        borderBottomColor: borderColour,
        borderBottomWidth: borderWidth,
      }
    : styles.root;

  return (
    <Pressable onPress={onSelect}>
      <View style={rootStyleWithBorder}>
        <Text style={styles.name}>{item.name}</Text>
        <Checkbox
          value={item.complete}
          onValueChange={() => {}}
          color={item.complete ? colours.PRIMARY : undefined}
        />
      </View>
    </Pressable>
  );
}
