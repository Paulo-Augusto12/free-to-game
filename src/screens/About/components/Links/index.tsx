import { View, TouchableOpacity } from "react-native";

import { ExternalLinkCard } from "../index";

interface ILinkProps {
  links: {
    icon: JSX.Element;
    text: string;
    onPress: () => void;
  }[];
}
export function Links({ links }: ILinkProps) {
  return (
    <View style={{ flexDirection: "column", gap: 18, width: "100%" }}>
      {links.map(({ icon, onPress, text }, index) => (
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          key={index}
        >
          <ExternalLinkCard title={text} icon={icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
