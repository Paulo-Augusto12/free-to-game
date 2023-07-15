import { View, Text, Image } from "react-native";

export function AppTitle() {
  return (
    <View
      style={{
        borderRadius: 8,
        marginTop: 70,
        height: 200,
        backgroundColor: "#142E68",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          position: "absolute",
          bottom: 50,
          paddingLeft: 16,
        }}
      >
        <Text style={{ color: "#E5E5E5", fontWeight: "bold", fontSize: 28 }}>
          Free Games
        </Text>
        <Text style={{ color: "#E5E5E5", fontWeight: "600", fontSize: 12 }}>
          Check out some free games that you might enjoy
        </Text>
      </View>
    </View>
  );
}
