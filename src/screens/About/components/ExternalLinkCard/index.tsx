import { View, Text, TouchableOpacity } from "react-native";

interface IExternalLinkCardProps {
  title: string;
  icon: JSX.Element;
  onPress: () => void;
}
export function ExternalLinkCard({
  icon,
  title,
  onPress,
}: IExternalLinkCardProps) {
  return (
    <View
      style={{
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#142E68",
        minHeight: 122,
        padding: 24,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
        >
          <Text style={{ color: "#FFFF", fontWeight: "600", fontSize: 24 }}>
            {title}
          </Text>
        </TouchableOpacity>
        {icon}
      </View>
    </View>
  );
}
