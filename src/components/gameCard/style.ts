import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 152,
    // height: 180,
    flex: 1,
    minHeight: 180
  },
  imageWrapper: {
    // width: 152,
    // height: 360,
    overflow: "hidden",
    padding: 2,
    borderRadius: 15,
  },
  gameInfoWrapper: {
    backgroundColor: "#142E68",
    padding: 10,
    maxHeight: 70,
    height: 70,
  },
  title: {
    fontSize: 16,
    color: "#E5E5E5",
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  plataform: {
    fontSize: 10,
    color: "#E5E5E5",
    fontWeight: "700",
  },
});
