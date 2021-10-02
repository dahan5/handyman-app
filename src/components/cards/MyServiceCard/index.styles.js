import { StyleSheet } from 'react-native';
import Colors from "../../../utils/constants/colors";
import { DefaultBorder } from '../../../utils/constants/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    position: 'relative',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ccc',
    marginBottom: 16
  },
  flexContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailContainer: {
    flex: 1,
    paddingBottom: 8
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.secondaryTextColor
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primaryTextColor
  },
  green: {
    color: Colors.green,
    fontWeight: "500",
  },
  approved: {
    color: Colors.green,
    fontWeight: "500",
  },
  pending: {
    color: Colors.yellow,
    fontWeight: 'bold'
  }
})