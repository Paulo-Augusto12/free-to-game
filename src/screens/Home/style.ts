import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213D",
    paddingHorizontal: 18,
    gap: 10,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 40,
    backgroundColor: "#142E68",
    borderRadius: 10,
    height: 200,
    overflow: "hidden",
    marginTop: 70,
  },
  headerTitle: {
    color: "#E5E5E5",
    fontWeight: "800",
    fontSize: 28,
  },
  headerDescription: {
    color: "#E5E5E5",
    fontWeight: "600",
    fontSize: 12,
  },
  tagsWrapper: {
    backgroundColor: "#133C95",
    borderRadius: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 18,
    marginTop: 10,
  },
  filterContainer: {
    gap: 15,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "#133C95",
    borderRadius: 20,
    color: "#e5e5e5",
    flex: 1,
  },
  tagText: {
    color: "#E5E5E5",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
