import { StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import { Link } from "expo-router";

const Footer = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Designed By </ThemedText>
      <Link href="https://github.com/erfanfs10/WeatherApp-ReactNative">
        <ThemedText style={styles.link}>erfanfs10</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  link: {
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});
