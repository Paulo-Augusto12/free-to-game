import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { homeStyles } from "./style";
import { useHome } from "./useHome";
import { MagnifyingGlass } from "phosphor-react-native";

export function Home() {
  const hook = useHome();
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.headerContainer}>
        <Text style={homeStyles.headerTitle}>Free Games</Text>
        <Text style={homeStyles.headerDescription}>
          Check out some free games that you might enjoy
        </Text>
      </View>
      <View style={homeStyles.filterContainer}>
        <FlatList
          data={hook.gameTags}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={homeStyles.tagsWrapper}>
                <Text style={homeStyles.tagText}>{item.tagTitle}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={{ padding: 4 }} />}
        />

        <View style={homeStyles.searchBarWrapper}>
          <TextInput
            placeholder="Seach for a specific game"
            placeholderTextColor={"#E5E5E5"}
            style={homeStyles.searchBar}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#133C95",
              position: "absolute",
              right: 10,
            }}
          >
            <MagnifyingGlass size={32} color="#e5e5e5" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
