import { StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>salam</ThemedText>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
