import { Text, useColorScheme } from "react-native";
import { Colors } from "../Colors";

const ThemedText = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.dark;

  return <Text style={[{ color: theme.textColor }, style]} {...props}/>;
};

export default ThemedText;
