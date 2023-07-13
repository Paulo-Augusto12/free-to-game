import { FlatList, TouchableOpacity, View, Text } from "react-native";

interface IFilterTagsProps {
  onTagPress: (item: string) => void;
  gameTags: {
    tagTitle: string;
    id: number;
  }[];
}
export function FilterTags({ onTagPress, gameTags }: IFilterTagsProps) {
  return (
    <FlatList
      data={gameTags}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            onTagPress(item.tagTitle.toLowerCase());
          }}
        >
          <View
            style={{
              backgroundColor: "#133C95",
              borderRadius: 40,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              padding: 18,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#E5E5E5",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              {item.tagTitle}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      ItemSeparatorComponent={() => <View style={{ padding: 4 }} />}
      showsHorizontalScrollIndicator={false}
    />
  );
}
