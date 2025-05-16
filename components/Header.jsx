import { StyleSheet, Image } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import Logo from "../assets/logo.png";


const Header = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <ThemedText style={styles.title}>Weather APP</ThemedText>
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
});
