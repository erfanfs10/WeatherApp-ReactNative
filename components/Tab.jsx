import { StyleSheet } from "react-native";
import ThemedButton from "./ThemedButton";
import ThemedView from "./ThemedView";

const Tab = ({ city, setCity }) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedButton title="Tehran" city={city} setCity={setCity}/>
      <ThemedButton title="London" city={city} setCity={setCity}/>
      <ThemedButton title="Ottawa" city={city} setCity={setCity}/>
    </ThemedView>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
