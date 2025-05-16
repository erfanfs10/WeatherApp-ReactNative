import { View, useColorScheme } from "react-native";
import { Colors } from "../Colors";

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.dark;

  return <View style={[{ backgroundColor: theme.backgroundColor }, style]} {...props}/>;
};

export default ThemedView;
