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
        backgroundColor: "#142E68",
        minHeight: 122,
        padding: 12,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "#FFFF",
            fontWeight: "600",
            fontSize: 24,
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        {icon}
      </View>
    </View>
  );
}
