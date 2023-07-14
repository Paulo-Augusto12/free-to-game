import { View, Text, StyleProp, TextStyle } from "react-native";

interface IGameDetailProps {
  details: {
    developer: string;
    publisher: string;
    releasedAt: string;
  };
  minimunRequirements: {
    system: string;
    processor: string;
    graphics: string;
    memory: string;
    storage: string;
  };
}
export function GameDetails({
  details,
  minimunRequirements,
}: IGameDetailProps) {
  const titleStyle: StyleProp<TextStyle> = {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFF",
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: 16,
    fontWeight: "normal",
    color: "#FFFF",
  };

  return (
    <View
      style={{
        width: "100%",
        minHeight: 243,
        borderRadius: 8,
        flexDirection: "column",
        padding: 8,
        backgroundColor: "#142E68",
        gap: 18,
      }}
    >
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text style={titleStyle}>Details:</Text>
        <Text style={textStyle}>Developer: {details.developer}</Text>
        <Text style={textStyle}>Publisher: {details.publisher}</Text>
        <Text style={textStyle}>Released at: {details.releasedAt}</Text>
      </View>
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text style={titleStyle}>Mynimum requirements :</Text>
        <Text style={textStyle}>System: {minimunRequirements.system}</Text>
        <Text style={textStyle}>
          Processor: {minimunRequirements.processor}
        </Text>
        <Text style={textStyle}>Memory: {minimunRequirements.memory}</Text>
        <Text style={textStyle}>Storage: {minimunRequirements.storage}</Text>
        <Text style={textStyle}>Graphics: {minimunRequirements.graphics}</Text>
      </View>
    </View>
  );
}
