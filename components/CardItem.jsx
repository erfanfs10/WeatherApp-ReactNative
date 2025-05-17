import { StyleSheet, Image } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";

const CardItem = ({ title, data, Imagesource, suffix }) => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={Imagesource} style={styles.image} />
        <ThemedText style={[styles.text, { marginLeft: 10 }]}>
          {title}
        </ThemedText>
      </ThemedView>
      {data ? (
        <ThemedText style={styles.text}>{data}{" "}{suffix}</ThemedText>
      ) : (
        <ThemedText style={styles.text}>loading...</ThemedText>
      )}
    </ThemedView>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  image: {
    width: 40,
    height: 40,
  },
});
