import { StyleSheet } from "react-native";
import ThemedView from "./ThemedView";

const Card = ({ style, ...props }) => {
  return <ThemedView style={[styles.container, style]} {...props} />;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 380,
    borderWidth: 2,
    borderColor: "#a1a1aa",
    borderRadius: 10,
    padding: 10,
  },
});
