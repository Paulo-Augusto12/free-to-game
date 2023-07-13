import { TextInput, TouchableOpacity, View } from "react-native";
import { MagnifyingGlass } from "phosphor-react-native";

interface ISearchBarProps {
  searchValue: string;
  onChangeText?: ((text: string) => void) | undefined;
  onSearchIconPress: () => void;
}
export function SearchBar({
  searchValue,
  onChangeText,
  onSearchIconPress,
}: ISearchBarProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        placeholder="Seach for a specific game"
        placeholderTextColor={"#E5E5E5"}
        style={{
          padding: 16,
          backgroundColor: "#133C95",
          borderRadius: 20,
          color: "#e5e5e5",
          flex: 1,
        }}
        value={searchValue}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#133C95",
          position: "absolute",
          right: 10,
        }}
        onPress={() => onSearchIconPress()}
      >
        <MagnifyingGlass size={32} color="#e5e5e5" />
      </TouchableOpacity>
    </View>
  );
}
