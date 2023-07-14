import { View, Text, TouchableOpacity } from "react-native";

interface IExternalLinkCardProps {
  title: string;
  icon: JSX.Element;
}
export function ExternalLinkCard({ icon, title }: IExternalLinkCardProps) {
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
        <Text style={{ color: "#FFFF", fontWeight: "600", fontSize: 24 }}>
          {title}
        </Text>
        {icon}
      </View>
    </View>
  );
}
