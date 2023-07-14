import { View, Image, Text } from "react-native";

interface IGameDataHeaderProps {
  thumbnail: string;
  name: string;
  shortDescription: string;
}

export function GameDataHeader({
  name,
  shortDescription,
  thumbnail,
}: IGameDataHeaderProps) {
  return (
    <View
      style={{
        alignItems: "center",
        borderRadius: 8,
        width: "100%",
        height: 250,
      }}
    >
      <Image
        source={{
          uri: thumbnail.trim().length
            ? thumbnail
            : "https://www.freetogame.com/assets/images/freetogame-logo.png",
        }}
        style={{
          width: "100%",
          height: 250,
          opacity: 0.5,
          borderRadius: 8,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 60,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 6,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          {shortDescription}
        </Text>
      </View>
    </View>
  );
}
