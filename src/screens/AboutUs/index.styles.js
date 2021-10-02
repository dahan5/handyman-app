import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/constants/colors";

export const styles = StyleSheet.create({
  main: {
    color: Colors.primaryTextColor,
    paddingHorizontal: 20
  },
  mainHeader: {
    fontSize: 24,
    color: Colors.secondaryTextColor,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 20
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryTextColor
  },
  subHeader: {
    margin: 0,
    fontSize: 16,
    fontWeight: '400',
  },
  content: {
    fontSize: 14,
    color: Colors.secondaryTextColor,
    paddingBottom: 2,
    fontWeight: 'bold',
  },
  credits: {
    fontSize: 14,
    color: Colors.secondaryTextColor,
  },
  name: {
    fontStyle: 'normal',
    fontWeight: 'bold'
  },
  position: {
    fontStyle: 'italic',
    marginBottom: 4
  },
  textContent: {
    fontSize: 14,
    color: Colors.secondaryTextColor,
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold'
  }
})