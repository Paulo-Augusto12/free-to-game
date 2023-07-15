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
        <View
          key={index}
          style={[
            imageStyle,
            {
              display: screenshot.trim().length ? "flex" : "none",
              backgroundColor: "#142E68",
              minHeight: 200,
            },
          ]}
        >
          <Image
            source={{ uri: screenshot.trim().length ? screenshot : "" }}
            style={imageStyle}
          />
        </View>
      ))}
    </ScrollView>
  );
}
