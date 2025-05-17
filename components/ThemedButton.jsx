import { StyleSheet, Pressable, useColorScheme } from "react-native";
import ThemedText from "./ThemedText";
import { Colors } from "../Colors";

const ThemedButton = ({ title, city, setCity, setData, style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.dark;

  return (
    <Pressable
      onPress={() => {
        setCity(title);
        setData(null);
      }}
      style={({ pressed }) => [
        { backgroundColor: theme.backgroundColor },
        styles.btn,
        pressed && styles.pressed,
        city === title && { backgroundColor: "#06b6d4" },
        style,
      ]}
      {...props}
    >
      <ThemedText style={[styles.text]}>{title}</ThemedText>
    </Pressable>
  );
};


export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: "#a1a1aa",
    borderRadius: 10,
    padding: 10,
    width: "30%",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
  },
});
