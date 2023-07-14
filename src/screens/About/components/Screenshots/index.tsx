import { ScrollView, View, Image } from "react-native";

interface IScreenShotsProps {
  screenshots: string[];
}
export function Screenshots({ screenshots }: IScreenShotsProps) {
  const imageStyle = { width: 260, height: 200, borderRadius: 16 };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 16 }}
    >
      {screenshots.map((screenshot, index) => (
        <View key={index} style={imageStyle}>
          <Image source={{ uri: screenshot }} style={imageStyle} />
        </View>
      ))}
    </ScrollView>
  );
}
