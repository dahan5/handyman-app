import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/constants/colors";

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  mainHeader: {
    fontSize: 24,
    color: Colors.secondaryTextColor,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 12
  },
  item: {
    fontSize: 14,
    paddingBottom: 4
  }
})