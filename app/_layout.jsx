import { StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <ThemedView style={styles.container}>
        <Header />
        <Slot />
        <Footer/>
      </ThemedView>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
  },
});
